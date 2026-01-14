import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function GRPCPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="gRPC (Google Remote Procedure Call)"
        description="**gRPC** is a high-performance, open-source RPC framework using HTTP/2 and Protocol Buffers. It's ideal for microservices communication.

**Key Features:**
- **Protocol Buffers**: Binary serialization
- **HTTP/2**: Multiplexing, streaming
- **Bi-directional streaming**: Real-time communication
- **Language-agnostic**: Multiple language support
- **Code generation**: Auto-generated clients

**Benefits:**
- High performance (binary)
- Strong typing
- Streaming support
- Built-in authentication
- Load balancing

**Use Cases:**
- Microservices
- Mobile backends
- Real-time services
- IoT systems"
        codeContent={[
          {
            filePath: 'proto/user.proto',
            content: `syntax = "proto3";

package user;

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
  rpc CreateUser (CreateUserRequest) returns (User);
  rpc UpdateUser (UpdateUserRequest) returns (User);
}

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
  int64 created_at = 4;
}

message GetUserRequest {
  int32 id = 1;
}

message ListUsersRequest {
  int32 page = 1;
  int32 page_size = 2;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
}

message UpdateUserRequest {
  int32 id = 1;
  string name = 2;
  string email = 3;
}`,
          },
          {
            filePath: 'grpc/server.ts',
            content: `import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = './proto/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Implementation
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', created_at: Date.now() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', created_at: Date.now() },
];

function getUser(call: any, callback: any) {
  const user = users.find(u => u.id === call.request.id);
  if (user) {
    callback(null, user);
  } else {
    callback({
      code: grpc.status.NOT_FOUND,
      details: 'User not found',
    });
  }
}

function listUsers(call: any) {
  users.forEach(user => {
    call.write(user);
  });
  call.end();
}

// Start server
const server = new grpc.Server();
server.addService((userProto as any).UserService.service, {
  getUser,
  listUsers,
});

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
    console.log('gRPC server running on port 50051');
  }
);`,
          },
          {
            filePath: 'grpc/client.ts',
            content: `import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = './proto/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const client = new (userProto as any).UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Get single user
client.getUser({ id: 1 }, (error: any, user: any) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('User:', user);
  }
});

// Stream users
const call = client.listUsers({ page: 1, page_size: 10 });
call.on('data', (user: any) => {
  console.log('Received user:', user);
});
call.on('end', () => {
  console.log('Stream ended');
});`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

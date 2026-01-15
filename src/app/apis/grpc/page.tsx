import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function GRPCPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="gRPC - High-Performance RPC Framework"
        description="⚡ **gRPC (Google Remote Procedure Call)** - El framework de comunicación que potencia Google, Netflix y la mayoría de arquitecturas de microservicios modernas

gRPC es un framework RPC de código abierto y alto rendimiento que usa HTTP/2 y Protocol Buffers (protobuf) para comunicación eficiente entre servicios. Fue diseñado por Google para manejar billones de requests por segundo en su infraestructura global. Es el estándar de facto para microservicios en 2024.

**🎯 ¿Por qué gRPC domina en Microservicios?**
- 🚄 **7-10x más rápido que REST/JSON**: Serialización binaria ultra-compacta
- 📡 **HTTP/2 nativo**: Multiplexing, server push, header compression
- 🔄 **4 tipos de streaming**: Unary, server streaming, client streaming, bidirectional
- 🔒 **Type-safe**: Contratos estrictos definidos en .proto files
- 🌍 **Multi-language**: Un .proto genera código para 10+ lenguajes
- 🛡️ **Built-in features**: Auth, load balancing, health checking, tracing

**📋 Protocol Buffers - El superpoder de gRPC:**
Los .proto files definen tu API como un contrato tipado. El compilador protoc genera código cliente/servidor automáticamente:
- **Versionado explícito**: Field numbers permiten evolución sin romper compatibilidad
- **Compacto**: ~3-10x más pequeño que JSON equivalente
- **Rápido**: ~20-100x más rápido de parsear que JSON
- **Typed**: Validación en compile-time, no runtime

**🔄 4 Patrones de Comunicación:**

1. **Unary RPC** (Request → Response):
   \`\`\`
   rpc GetUser(UserRequest) returns (User);
   // Cliente envía 1 request, recibe 1 response
   \`\`\`

2. **Server Streaming** (Request → Stream):
   \`\`\`
   rpc ListUsers(ListRequest) returns (stream User);
   // Cliente envía 1 request, recibe stream de N users
   \`\`\`

3. **Client Streaming** (Stream → Response):
   \`\`\`
   rpc UploadData(stream DataChunk) returns (UploadResult);
   // Cliente envía stream, servidor procesa y responde
   \`\`\`

4. **Bidirectional Streaming** (Stream ↔ Stream):
   \`\`\`
   rpc Chat(stream Message) returns (stream Message);
   // Comunicación full-duplex real-time
   \`\`\`

**🏢 Casos de Uso Reales:**
- **Netflix**: Comunicación entre 1000+ microservicios
- **Google**: Todas las APIs internas (Maps, YouTube, Cloud)
- **Square**: Sistema de pagos distribuido
- **Uber**: Geolocation services con streaming
- **Spotify**: Audio streaming y recommendation engine
- **Cloud Native**: Kubernetes, Envoy, Istio usan gRPC

**✨ Features Avanzadas:**
- **Interceptors**: Middleware para logging, auth, metrics (como Express middleware)
- **Deadlines/Timeouts**: Cancela requests que tardan demasiado
- **Metadata**: Headers personalizados para auth tokens, tracing IDs
- **Reflection**: Descubre servicios disponibles dinámicamente
- **Load Balancing**: Client-side LB con health checks
- **Retry Policies**: Reintentos automáticos con exponential backoff

**🆚 gRPC vs REST:**

| Feature | gRPC | REST/JSON |
|---------|------|-----------|
| Performance | 🚀🚀🚀🚀🚀 | ⭐⭐ |
| Browser Support | ⚠️ Limitado (gRPC-Web) | ✅ Nativo |
| Streaming | ✅ Built-in | ❌ Workarounds |
| Type Safety | ✅ Compile-time | ❌ Runtime |
| Human Readable | ❌ Binary | ✅ JSON |
| Tooling | 🔧 Protobuf compiler | 🌐 Universal |

**🔧 Stack Tecnológico:**
- **Node.js**: @grpc/grpc-js + @grpc/proto-loader
- **TypeScript**: grpc-tools + ts-proto para types
- **Testing**: grpc-mock, BloomRPC (Postman para gRPC)
- **Gateway**: grpc-gateway para REST ↔ gRPC
- **Monitoring**: gRPC Prometheus interceptor

**⚠️ Cuándo NO usar gRPC:**
- Frontend web directo (usa gRPC-Web o REST gateway)
- APIs públicas para terceros (REST es más accesible)
- Debugging humano frecuente (JSON es más legible)
- Sistemas legacy sin soporte HTTP/2

**💡 Best Practices:**
- Versiona tus .proto files con semantic versioning
- Usa field numbers reservados para campos deprecated
- Implementa health checking (grpc.health.v1.Health)
- Habilita reflection en dev, deshabilita en prod
- Usa interceptors para logging, auth y metrics
- Define timeouts razonables (5-30s típicamente)

**🚀 Quick Start:**
1. Define .proto file con tu service
2. Genera código: \`protoc --js_out=. --grpc_out=. user.proto\`
3. Implementa service handlers
4. Start server en puerto (ej: 50051)
5. Cliente hace calls como funciones normales

Este ejemplo muestra un UserService CRUD completo con streaming de listado de usuarios."
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

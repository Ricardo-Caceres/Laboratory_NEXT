import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function AzurePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Microsoft Azure"
        description="**Microsoft Azure** is a comprehensive cloud computing platform offering 200+ services for building, deploying, and managing applications globally.

**Core Services:**
- **Virtual Machines**: IaaS compute
- **App Service**: PaaS web hosting
- **Azure Functions**: Serverless compute
- **Cosmos DB**: Global NoSQL database
- **Azure Storage**: Blob, File, Queue storage
- **Azure AD**: Identity management

**Key Features:**
- Hybrid cloud support
- Enterprise integration
- AI and ML services
- DevOps tools
- 60+ regions worldwide

**Benefits:**
- Microsoft ecosystem integration
- Enterprise-grade security
- Compliance certifications
- Pay-as-you-go pricing"
        codeContent={[
          {
            filePath: 'azure/blob-storage.ts',
            content: `import { BlobServiceClient } from '@azure/storage-blob';

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING!;
const blobServiceClient = BlobServiceClient.fromConnectionString(
  connectionString
);

export async function uploadToAzureBlob(
  containerName: string,
  blobName: string,
  content: Buffer
) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  
  // Create container if it doesn't exist
  await containerClient.createIfNotExists({
    access: 'blob',
  });

  // Upload blob
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadResponse = await blockBlobClient.upload(
    content,
    content.length
  );

  return {
    url: blockBlobClient.url,
    etag: uploadResponse.etag,
  };
}`,
          },
          {
            filePath: 'azure/cosmos-db.ts',
            content: `import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.COSMOS_DB_ENDPOINT!;
const key = process.env.COSMOS_DB_KEY!;
const client = new CosmosClient({ endpoint, key });

const database = client.database('MyDatabase');
const container = database.container('Users');

export async function createUser(user: {
  id: string;
  name: string;
  email: string;
}) {
  const { resource } = await container.items.create(user);
  return resource;
}

export async function getUser(userId: string) {
  const { resource } = await container.item(userId, userId).read();
  return resource;
}

export async function queryUsers(email: string) {
  const querySpec = {
    query: 'SELECT * FROM c WHERE c.email = @email',
    parameters: [{ name: '@email', value: email }],
  };

  const { resources } = await container.items
    .query(querySpec)
    .fetchAll();
  
  return resources;
}`,
          },
          {
            filePath: 'azure/functions.ts',
            content: `import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');

  const name = req.query.name || (req.body && req.body.name);

  if (name) {
    context.res = {
      status: 200,
      body: \`Hello, \${name}! This HTTP triggered function executed successfully.\`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body',
    };
  }
};

export default httpTrigger;`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

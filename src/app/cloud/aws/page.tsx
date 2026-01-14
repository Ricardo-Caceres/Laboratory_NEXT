import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function AWSPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="AWS Basics"
        description="**Amazon Web Services (AWS)** is the world's most comprehensive cloud platform with over 200 services for computing, storage, databases, and more.

**Core Services:**
- **EC2**: Virtual servers in the cloud
- **S3**: Scalable object storage
- **Lambda**: Serverless computing
- **RDS**: Managed databases
- **CloudFront**: Content delivery network

**Benefits:**
- Pay-as-you-go pricing
- Global infrastructure
- High availability
- Automatic scaling
- Security and compliance

**Use Cases:**
- Web hosting
- Data backup
- Big data analytics
- Machine learning
- IoT applications"
        codeContent={[
          {
            filePath: 'aws/s3-upload.ts',
            content: `import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(
  file: Buffer,
  fileName: string,
  bucketName: string
) {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ContentType: 'image/jpeg',
  });

  const response = await s3Client.send(command);
  
  return {
    url: \`https://\${bucketName}.s3.amazonaws.com/\${fileName}\`,
    etag: response.ETag,
  };
}`,
          },
          {
            filePath: 'aws/lambda-function.ts',
            content: `import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    
    // Your business logic here
    const result = processData(body);
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        data: result,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">AWS Services Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { name: 'EC2', desc: 'Virtual Servers', icon: '🖥️' },
              { name: 'S3', desc: 'Object Storage', icon: '📦' },
              { name: 'Lambda', desc: 'Serverless Functions', icon: '⚡' },
              { name: 'RDS', desc: 'Managed Database', icon: '🗄️' },
              { name: 'CloudFront', desc: 'CDN', icon: '🌐' },
              { name: 'DynamoDB', desc: 'NoSQL Database', icon: '📊' },
            ].map((service) => (
              <div key={service.name} className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-semibold">{service.name}</h3>
                </div>
                <p className="text-sm opacity-70">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">Common AWS CLI Commands:</h3>
            <div className="space-y-2 text-sm font-mono">
              <p className="p-2 bg-[var(--background)] rounded">$ aws s3 ls</p>
              <p className="p-2 bg-[var(--background)] rounded">$ aws ec2 describe-instances</p>
              <p className="p-2 bg-[var(--background)] rounded">$ aws lambda list-functions</p>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

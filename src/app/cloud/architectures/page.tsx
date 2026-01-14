import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function CloudArchitecturesPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Cloud Architectures"
        description="**Cloud Architecture** defines how cloud components and services interact to form a complete system.

**Architecture Patterns:**
- **Microservices**: Independent services
- **Serverless**: Function-as-a-Service
- **Multi-tier**: Presentation, logic, data layers
- **Event-driven**: Async communication
- **API Gateway**: Single entry point

**Design Principles:**
- Scalability and elasticity
- High availability
- Fault tolerance
- Cost optimization
- Security first"
        codeContent={[
          {
            filePath: 'architecture/serverless.yml',
            content: `service: my-app

provider:
  name: aws
  runtime: nodejs20.x
  region: us-east-1

functions:
  api:
    handler: handler.main
    events:
      - http:
          path: /api/{proxy+}
          method: ANY
  
  processor:
    handler: processor.main
    events:
      - sqs:
          arn: arn:aws:sqs:region:XXXX:MyQueue

resources:
  Resources:
    MyBucket:
      Type: AWS::S3::Bucket
    MyQueue:
      Type: AWS::SQS::Queue`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Cloud Architecture Patterns</h2>
          <div className="space-y-4">
            {[
              { name: 'Microservices', desc: 'Decoupled, independently deployable services' },
              { name: 'Serverless', desc: 'No server management, pay per execution' },
              { name: 'Multi-Region', desc: 'High availability across regions' },
              { name: 'Event-Driven', desc: 'Loosely coupled components via events' },
            ].map((pattern) => (
              <div key={pattern.name} className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
                <h3 className="font-semibold mb-1">{pattern.name}</h3>
                <p className="text-sm opacity-70">{pattern.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

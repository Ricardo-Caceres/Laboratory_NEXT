export default function AWSDescription() {
  return (
    <>
      <p className="text-lg mb-4">
        Amazon Web Services es la plataforma cloud más completa y adoptada.
        Aprende los servicios esenciales para desarrolladores: EC2, S3, Lambda, RDS y más.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">☁️ Servicios core</h3>
          <ul className="space-y-2">
            <li>✓ EC2 - Virtual servers</li>
            <li>✓ S3 - Object storage</li>
            <li>✓ Lambda - Serverless functions</li>
            <li>✓ RDS - Managed databases</li>
            <li>✓ DynamoDB - NoSQL database</li>
            <li>✓ CloudFront - CDN global</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">🚀 Developer services</h3>
          <ul className="space-y-2">
            <li>• API Gateway - REST/WebSocket APIs</li>
            <li>• Amplify - Full-stack apps</li>
            <li>• CodePipeline - CI/CD</li>
            <li>• CloudWatch - Monitoring</li>
            <li>• Cognito - Authentication</li>
            <li>• SQS/SNS - Messaging</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
        <p className="font-semibold mb-2">🎯 Arquitecturas comunes</p>
        <ul className="space-y-1 text-sm">
          <li>• Static site - S3 + CloudFront</li>
          <li>• Serverless API - Lambda + API Gateway + DynamoDB</li>
          <li>• Container app - ECS/EKS + ALB + RDS</li>
          <li>• Full-stack - Amplify + AppSync + Cognito</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-semibold mb-2">💡 Best practices</p>
        <ul className="space-y-1 text-sm">
          <li>• Use IAM roles, not access keys</li>
          <li>• Tag all resources</li>
          <li>• Enable CloudTrail</li>
          <li>• Use multiple availability zones</li>
          <li>• Implement proper backup strategy</li>
        </ul>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 my-6">
        <p className="font-semibold mb-2">📋 Pricing model</p>
        <p className="text-sm">
          Pay-as-you-go con free tier generoso. Monitorea costos con Cost Explorer
          y configura billing alerts para evitar sorpresas.
        </p>
      </div>
    </>
  );
}

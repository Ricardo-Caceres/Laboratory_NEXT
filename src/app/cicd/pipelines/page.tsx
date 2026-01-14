import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function CICDPipelinesPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="CI/CD Pipelines"
        description="**CI/CD (Continuous Integration/Continuous Deployment)** automates the software delivery process from code commit to production deployment.

**Continuous Integration (CI):**
- Automated testing on every commit
- Build verification
- Code quality checks
- Merge conflict detection

**Continuous Deployment (CD):**
- Automated deployments
- Environment management
- Rollback strategies
- Zero-downtime releases

**Benefits:**
- Faster delivery
- Early bug detection
- Consistent deployments
- Reduced manual errors"
        codeContent={[
          {
            filePath: '.github/workflows/ci.yml',
            content: `name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'yarn'
      
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      
      - name: Run linter
        run: yarn lint
      
      - name: Run tests
        run: yarn test:ci
      
      - name: Build
        run: yarn build
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3`,
          },
          {
            filePath: '.github/workflows/deploy.yml',
            content: `name: CD Pipeline

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: yarn install
      
      - name: Build
        run: yarn build
        env:
          NODE_ENV: production
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

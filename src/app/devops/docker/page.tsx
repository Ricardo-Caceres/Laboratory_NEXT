import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function DockerPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Docker Basics"
        description="**Docker** is a platform for developing, shipping, and running applications in containers. Containers package software with everything needed to run it.

**Key Concepts:**
- **Image**: Blueprint for containers
- **Container**: Running instance of an image
- **Dockerfile**: Instructions to build an image
- **Docker Compose**: Multi-container orchestration

**Benefits:**
- Consistent environments
- Isolation and security
- Portability
- Efficient resource usage"
        codeContent={[
          {
            filePath: 'Dockerfile',
            content: `FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]`,
          },
          {
            filePath: 'docker-compose.yml',
            content: `version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - ./data:/app/data
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`,
          },
          {
            filePath: 'docker-commands.sh',
            content: `# Build image
docker build -t my-app:latest .

# Run container
docker run -p 3000:3000 my-app:latest

# List containers
docker ps

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# View logs
docker logs <container-id>

# Execute command in container
docker exec -it <container-id> sh`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

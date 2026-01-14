import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function GraphQLBasicsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="GraphQL Basics"
        description="**GraphQL** is a query language for APIs and a runtime for executing those queries with your existing data. It provides a complete and understandable description of the data in your API.

**Key Features:**
- **Strongly typed schema**: Define your API structure
- **Single endpoint**: All data through one endpoint
- **Client-specified queries**: Request exactly what you need
- **Real-time updates**: Subscriptions for live data

**Basic Query:**
- Define what data you want
- Get a predictable result
- No over-fetching or under-fetching"
        codeContent={[
          {
            filePath: 'graphql/schema.graphql',
            content: `type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
}

type Mutation {
  createUser(name: String!, email: String!): User!
  createPost(title: String!, content: String!, authorId: ID!): Post!
}`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function GraphQLQueriesPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="GraphQL Queries"
        description="**GraphQL Queries** allow you to request exactly the data you need from your API. Unlike REST, you specify the structure of the response.

**Key Features:**
- **Declarative**: Specify what you want
- **Hierarchical**: Matches UI structure
- **Type-safe**: Schema validation
- **Single request**: Get related data

**Query Structure:**
- Field selection
- Arguments
- Aliases
- Fragments
- Variables"
        codeContent={[
          {
            filePath: 'queries/basic-query.graphql',
            content: `query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
      createdAt
    }
  }
}`,
          },
          {
            filePath: 'queries/with-fragments.graphql',
            content: `fragment UserFields on User {
  id
  name
  email
  avatar
}

query GetUsers {
  users {
    ...UserFields
    posts {
      id
      title
    }
  }
}

query GetCurrentUser {
  me {
    ...UserFields
  }
}`,
          },
          {
            filePath: 'queries/react-usage.tsx',
            content: `import { useQuery, gql } from '@apollo/client';

const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
\`;

function UserProfile({ userId }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <p>{data.user.email}</p>
    </div>
  );
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">GraphQL Query Examples</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Simple Query:</h3>
              <pre className="text-sm font-mono bg-[var(--background)] p-3 rounded overflow-x-auto">
{`{
  user(id: "1") {
    name
    email
  }
}`}
              </pre>
            </div>

            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Nested Query:</h3>
              <pre className="text-sm font-mono bg-[var(--background)] p-3 rounded overflow-x-auto">
{`{
  user(id: "1") {
    name
    posts {
      title
      comments {
        text
        author {
          name
        }
      }
    }
  }
}`}
              </pre>
            </div>

            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Response:</h3>
              <pre className="text-sm font-mono bg-[var(--background)] p-3 rounded overflow-x-auto">
{`{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

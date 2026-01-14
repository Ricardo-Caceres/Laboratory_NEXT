import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function ApolloClientPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Apollo Client"
        description="**Apollo Client** is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

**Key Features:**
- **Declarative data fetching**: Use hooks to fetch data
- **Intelligent caching**: Automatic cache updates
- **Local state management**: Manage app state with GraphQL
- **Developer tools**: Chrome extension for debugging

**Basic Usage:**
- Setup ApolloProvider wrapper
- Use useQuery hook for data fetching
- Use useMutation for data updates"
        codeContent={[
          {
            filePath: 'apollo/setup.ts',
            content: `import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.example.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MyApp />
    </ApolloProvider>
  );
}`,
          },
          {
            filePath: 'apollo/useQuery.ts',
            content: `import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
\`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
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

import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function GraphQLMutationsPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="GraphQL Mutations"
        description="**GraphQL Mutations** are used to modify data on the server. They allow you to create, update, or delete data.

**Key Features:**
- **Explicit changes**: Clear data modifications
- **Return values**: Get updated data back
- **Transactional**: Atomic operations
- **Optimistic updates**: Update UI immediately

**Mutation Types:**
- Create operations
- Update operations
- Delete operations
- Batch operations"
        codeContent={[
          {
            filePath: 'mutations/create.graphql',
            content: `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      name
      email
      createdAt
    }
    errors {
      field
      message
    }
  }
}`,
          },
          {
            filePath: 'mutations/update.graphql',
            content: `mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    user {
      id
      name
      email
      updatedAt
    }
  }
}`,
          },
          {
            filePath: 'mutations/react-usage.tsx',
            content: `import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql\`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(input: { name: $name, email: $email }) {
      user {
        id
        name
        email
      }
    }
  }
\`;

function CreateUserForm() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    await createUser({
      variables: {
        name: formData.get('name'),
        email: formData.get('email'),
      },
      // Optimistic update
      optimisticResponse: {
        createUser: {
          user: {
            id: 'temp-id',
            name: formData.get('name'),
            email: formData.get('email'),
          },
        },
      },
      // Update cache
      update: (cache, { data }) => {
        // Cache update logic
      },
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">GraphQL Mutation Examples</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Create Mutation:</h3>
              <pre className="text-sm font-mono bg-[var(--background)] p-3 rounded overflow-x-auto">
{`mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
  }) {
    id
    name
  }
}`}
              </pre>
            </div>

            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Update Mutation:</h3>
              <pre className="text-sm font-mono bg-[var(--background)] p-3 rounded overflow-x-auto">
{`mutation {
  updateUser(
    id: "1"
    input: { name: "Jane Doe" }
  ) {
    id
    name
    updatedAt
  }
}`}
              </pre>
            </div>

            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Delete Mutation:</h3>
              <pre className="text-sm font-mono bg-[var(--background)] p-3 rounded overflow-x-auto">
{`mutation {
  deleteUser(id: "1") {
    success
    message
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

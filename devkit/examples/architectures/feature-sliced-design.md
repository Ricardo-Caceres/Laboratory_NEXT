
# Feature-Sliced Design (FSD)

Feature-Sliced Design is a structural methodology for frontend applications. It helps in creating a scalable and maintainable architecture by dividing the application into layers, slices, and segments.

### Key Concepts
-   **Layers:** The primary division of the application. The main layers are `app`, `pages`, `widgets`, `features`, `entities`, and `shared`.
-   **Slices:** A slice is a business-domain-specific module within a layer (e.g., `user`, `post`, `cart`).
-   **Segments:** Each slice is divided into segments like `ui`, `model`, `lib`, `api`.

### Project Structure Example

Here is a typical FSD structure in a Next.js project:

```
src/
|-- app/                # App-wide logic, styles, and providers
|   |-- providers/
|   `-- styles/
|-- pages/              # Next.js pages (if using Pages Router)
|   |-- index.tsx
|   `-- ...
|-- widgets/            # Compositional layer (e.g., Header, Sidebar)
|   |-- Header/
|   `-- PostList/
|-- features/           # Business logic features (e.g., authentication, search)
|   |-- auth/
|   |   |-- ui/
|   |   `-- model/
|   `-- post-search/
|-- entities/           # Business entities (e.g., User, Post, Product)
|   |-- user/
|   |   |-- ui/
|   |   `-- model/
|   `-- post/
`-- shared/             # Reusable, business-agnostic code
    |-- ui/             # UI kit (Buttons, Inputs, etc.)
    |-- lib/            # Helper functions
    |-- api/            # API configuration and helpers
    `-- config/         # Global configuration
```

### Example: Building a Blog Feed

**1. Shared Layer**

-   `shared/ui/Button.tsx`: A generic button component.
-   `shared/api/axios.ts`: Axios instance for making API requests.

**2. Entities Layer**

-   `entities/post/model/types.ts`: Defines the `Post` type.
-   `entities/post/ui/PostCard.tsx`: A component to display a single post.

```tsx
// entities/post/ui/PostCard.tsx
import { Post } from '../model/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
```

**3. Features Layer**

-   `features/post-like/ui/LikeButton.tsx`: A button to like a post, containing its own logic.

**4. Widgets Layer**

-   `widgets/PostList/ui/PostList.tsx`: Fetches and displays a list of posts.

```tsx
// widgets/PostList/ui/PostList.tsx
import { useEffect, useState } from 'react';
import { Post } from '@/entities/post/model/types';
import PostCard from '@/entities/post/ui/PostCard';
import { api } from '@/shared/api'; // Assuming api is configured

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get('/posts').then(response => setPosts(response.data));
  }, []);

  return (
    <div>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
```

**5. Pages Layer (or `app` in App Router)**

-   `app/page.tsx`: The main page of the application.

```tsx
// app/page.tsx
import PostList from '@/widgets/PostList/ui/PostList';

export default function HomePage() {
  return (
    <main>
      <h1>Blog Feed</h1>
      <PostList />
    </main>
  );
}
```

### Benefits of FSD
-   **Scalability:** The structure is designed to grow.
-   **Maintainability:** Code is easy to find and modify.
-   **Reusability:** The `shared` and `entities` layers promote code reuse.
-   **Clear Boundaries:** The layered architecture enforces a clear separation of concerns.

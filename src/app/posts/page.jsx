import Link from "next/link";

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div key={post.id}>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

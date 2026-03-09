import Link from "next/link";

import type { Post } from "@/lib/posts";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <Link href={`/posts/${post.slug}`}>
        <p className="post-card-date">{post.date}</p>
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-excerpt">{post.excerpt}</p>
      </Link>
    </article>
  );
}

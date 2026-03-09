import type { Post } from "@/lib/posts";
import { withBasePath } from "@/lib/site";

type PostViewProps = {
  post: Post;
};

export function PostView({ post }: PostViewProps) {
  return (
    <article className="post-article">
      <header>
        <p className="post-date">{post.date}</p>
        <h1 className="post-title">{post.title}</h1>
      </header>
      <div className="post-body">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {post.image ? (
        <figure className="post-image">
          <img src={withBasePath(post.image.src)} alt={post.image.alt} />
        </figure>
      ) : null}
    </article>
  );
}

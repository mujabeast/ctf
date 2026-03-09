import { PostCard } from "@/components/post-card";
import { SiteLayout } from "@/components/site-layout";
import { getPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getPosts();

  return (
    <SiteLayout currentPath="/">
      <section className="intro" aria-label="Introduction">
        <p>
          Hi, I&apos;m Fitry. I’ve been travelling around Southeast Asia for a
          while and started this blog mostly to remember the little details from
          each place I visit.
        </p>
        <p>
          Sometimes it’s just quick notes written late at night in hostels or
          airports.
        </p>
      </section>
      <section aria-labelledby="recent-posts">
        <h2 className="section-title" id="recent-posts">
          Recent Posts
        </h2>
        <div className="post-list">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

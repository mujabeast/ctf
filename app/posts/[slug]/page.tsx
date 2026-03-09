import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PostView } from "@/components/post-view";
import { SiteLayout } from "@/components/site-layout";
import { getPostBySlug, getPosts } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Fitry’s Travel Notes`,
    description: post.excerpt
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteLayout currentPath="">
      <Link className="back-link" href="/">
        Back to home
      </Link>
      <PostView post={post} />
    </SiteLayout>
  );
}

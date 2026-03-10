export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export const posts: Post[] = [
  {
    slug: "urban-planning-rabbit-hole",
    title: "Urban Planning Rabbit Hole",
    date: "July 14, 2025",
    excerpt: "Notes from a long dive into planning documents and waterfront maps.",
    paragraphs: [
      "I went down a huge rabbit hole today reading about how this city was planned.",
      "Apparently most of the waterfront redevelopment here was guided by a long-term government planning document.",
      "I found a massive PDF from a government site for the year 2022-2023 explaining how the downtown area would evolve over the next decades.",
      "It had maps of the bay area and infrastructure plans.",
      "I forgot to bookmark the link but I remember it was hosted somewhere on a .gov.sg site."
    ]
  },
  {
    slug: "too-many-platforms",
    title: "Too Many Platforms",
    date: "July 15, 2025",
    excerpt: "A late-night scroll through the feed of a place everyone photographs.",
    paragraphs: [
      "Someone at the hostel asked if I post my travel photos anywhere besides this blog.",
      "I realised I mostly just lurk these days — especially on the official Instagram pages of places I visit.",
      "I realised I still follow the official account for that giant garden-by-the-bay place everyone photographs here.",
      "Tonight I ended up scrolling through the account for that massive garden near the bay with those strange metal tree structures.",
      "They had a bunch of story highlights saved on their profile. I got distracted clicking through them for way longer than I expected.",
      "I even managed to see myself in one of their highlights, what a nice surprise"
    ]
  },
  {
    slug: "morning-walk",
    title: "Morning Walk",
    date: "July 16, 2025",
    excerpt: "A quiet stretch of water before the city fully wakes up.",
    paragraphs: [
      "I woke up early today and walked along the water before the crowds arrived.",
      "I took a photo while standing near the railing and attached it below.",
      "The whole area was surprisingly quiet that early in the morning."
    ],
    image: {
      src: "/marina_photo.jpg",
      alt: "Morning waterfront view from a quiet railing"
    }
  },
  {
    slug: "leaving-tonight",
    title: "Leaving Tonight",
    date: "July 17, 2025",
    excerpt: "A short airport note written while waiting to board.",
    paragraphs: [
      "I didn’t expect to leave so quickly but I found a cheap ticket.",
      "I’m currently sitting in Changi Airport Terminal 1 waiting to board.",
      "The departure board showed TR47 something but I couldn’t see the final digit from where I was sitting.",
      "Boarding starts around 23:55."
    ]
  }
];

export function getPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

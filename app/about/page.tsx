import { SiteLayout } from "@/components/site-layout";

export default function AboutPage() {
  return (
    <SiteLayout currentPath="/about">
      <section className="about-copy">
        <h2 className="section-title">About</h2>
        <p>
          I’m Fitry Hackmi, a solo backpacker writing short notes while
          travelling.
        </p>
        <p>
          This blog isn’t meant to be polished or professional. It’s just a
          place to keep fragments of days that might otherwise blur together.
        </p>
      </section>
    </SiteLayout>
  );
}

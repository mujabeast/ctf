import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

type SiteLayoutProps = {
  children: ReactNode;
  currentPath: string;
};

export function SiteLayout({ children, currentPath }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <div className="site-card">
        <header className="site-header">
          <Link href="/">
            <h1 className="site-title">Fitry’s Travel Notes</h1>
          </Link>
          <p className="site-tagline">Small thoughts from places I visit</p>
        </header>
        <Navbar currentPath={currentPath} />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

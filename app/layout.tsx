import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fitry’s Travel Notes",
  description: "Small thoughts from places I visit"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

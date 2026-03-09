import Link from "next/link";

type NavbarProps = {
  currentPath: string;
};

export function Navbar({ currentPath }: NavbarProps) {
  return (
    <nav className="nav-row" aria-label="Main navigation">
      <div className="nav-links">
        <Link
          className={`nav-link${currentPath === "/" ? " active" : ""}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`nav-link${currentPath === "/about" ? " active" : ""}`}
          href="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

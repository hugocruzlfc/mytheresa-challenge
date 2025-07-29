import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-card sticky top-0 z-10 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between px-5 py-3">
        <Link href="/" className="text-primary text-2xl font-bold">
          TMDB
        </Link>
      </div>
    </header>
  );
}

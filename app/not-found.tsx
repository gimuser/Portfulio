import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell" id="content">
      <section className="section">
        <div className="container narrow not-found">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist in this portfolio.</p>
          <Link className="button" href="/">
            Return home
          </Link>
        </div>
      </section>
    </div>
  );
}

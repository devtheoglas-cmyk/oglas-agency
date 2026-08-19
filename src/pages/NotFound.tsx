import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-dark px-5 pt-28 pb-20 text-center text-white">
      <div>
        <p className="font-wordmark text-8xl leading-none text-lime sm:text-9xl">404</p>
        <h1 className="mt-5 font-display text-4xl font-semibold uppercase sm:text-6xl">Page not found</h1>
        <Link
          className="mt-10 inline-flex rounded-full border border-white px-6 py-3 text-sm font-semibold transition-colors hover:border-lime hover:bg-lime hover:text-black"
          to="/"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}

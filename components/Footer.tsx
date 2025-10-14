export default function Footer() {
  return (
    <footer className="relative z-10 w-[90%] mx-auto py-8">
      <div className="flex items-center justify-between gap-5 text-sm text-foreground/80">
        <span>© {new Date().getFullYear()} Nanas Corp.</span>
        <span className="text-end">
          Exercises inspired by{' '}
          <a
            href="https://www.youtube.com/@huxnwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-accent"
          >
            @huxnwebdev
          </a>
        </span>
      </div>
    </footer>
  );
}
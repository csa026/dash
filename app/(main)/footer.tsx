export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl">
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 1976-{new Date().getFullYear()}{" "}
          <a href={"https://vps.henryho.top"}>@HH_VPS</a>
        </section>
      </section>
    </footer>
  );
}

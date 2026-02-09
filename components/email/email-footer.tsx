export function EmailFooter() {
  return (
    <footer className="bg-primary px-6 py-8 text-center">
      <p className="mb-2 text-sm font-semibold text-primary-foreground">
        Nexvel Consulting
      </p>
      <p className="mb-4 text-xs text-primary-foreground/70">
        Since 2006: &ldquo;Best People, Outstanding Results&rdquo;
      </p>
      <div className="mx-auto mb-4 flex items-center justify-center gap-4">
        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        {/* Twitter / X */}
        <a
          href="#"
          aria-label="Twitter"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        {/* Email */}
        <a
          href="mailto:info@nexvel.com"
          aria-label="Email"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
      <p className="text-xs text-primary-foreground/50">
        &copy; {new Date().getFullYear()} Nexvel Consulting. Todos los
        derechos reservados.
      </p>
      <p className="mt-2 text-xs text-primary-foreground/40">
        <a href="#" className="underline hover:text-primary-foreground/60">
          Cancelar suscripción
        </a>{" "}
        {" | "}{" "}
        <a href="#" className="underline hover:text-primary-foreground/60">
          Política de privacidad
        </a>
      </p>
    </footer>
  )
}

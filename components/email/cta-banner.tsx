export function CtaBanner() {
  return (
    <section className="bg-muted px-6 py-10 text-center md:px-12">
      <h2 className="mb-3 text-xl font-bold text-primary md:text-2xl text-balance">
        {"¿Listo para transformar tu negocio?"}
      </h2>
      <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        Nuestro equipo de expertos certificados en Salesforce está preparado
        para guiarte en cada paso de la implementación.
      </p>
      <a
        href="#"
        className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg"
      >
        Agenda una consulta gratuita
      </a>
    </section>
  )
}

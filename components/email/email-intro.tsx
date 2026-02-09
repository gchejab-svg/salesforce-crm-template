import Image from "next/image"

export function EmailIntro() {
  return (
    <section className="px-6 py-8 text-center md:px-12">
      {/* 360 Vision definition */}
      <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
        La visión 360 del cliente en Salesforce unifica en un solo perfil todos
        los datos e interacciones del cliente, ventas, servicio, marketing y
        comercio en tiempo real. Con Salesforce Customer 360, las empresas
        obtienen una visión completa y compartida que les permite personalizar
        cada experiencia, fortalecer la fidelización y optimizar sus
        operaciones mediante inteligencia artificial y datos integrados.
      </p>

      {/* Salesforce-Nexvel logo */}
      <div className="mx-auto mt-8 max-w-sm">
        <Image
          src="/images/logo-salesforce-nexvel.png"
          alt="Salesforce y Nexvel Consulting"
          width={600}
          height={200}
          className="mx-auto w-full"
        />
      </div>

      {/* Nexvel experience text */}
      <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
        En Nexvel contamos con más de 15 años de experiencia implementando
        soluciones de Ventas, Servicio, Marketing, Comunidades, Plataforma y
        Analítica para empresas de diversas industrias. Acompañamos
        estratégicamente a nuestros clientes con soluciones de clase mundial que
        generan valor y crecimiento sostenible.
      </p>

      {/* Partner logo */}
      <div className="mx-auto mt-8 max-w-xs">
        <Image
          src="/images/logo-salesforce-partner.png"
          alt="Salesforce Partner Since 2010"
          width={500}
          height={150}
          className="mx-auto w-full rounded-lg"
        />
      </div>

      <div className="mx-auto mt-8 h-px w-16 bg-secondary" />
    </section>
  )
}

import Image from "next/image"

export function EmailHeader() {
  return (
    <header>
      {/* Title on white background */}
      <div className="bg-card px-6 py-8 text-center md:px-12">
        <h1 className="text-2xl font-bold leading-tight text-primary md:text-3xl text-balance">
          Obtenga una vista 360 grados de sus clientes con Salesforce
        </h1>
      </div>

      {/* Platform image */}
      <div className="w-full bg-card px-4 pb-6 md:px-8">
        <Image
          src="/images/platform.webp"
          alt="Plataforma Salesforce Customer 360 con Agentforce, Data Cloud y ecosistema completo"
          width={1280}
          height={720}
          className="mx-auto w-full rounded-xl"
          priority
        />
      </div>
    </header>
  )
}

import Image from "next/image"
import { EmailHeader } from "@/components/email/email-header"
import { EmailIntro } from "@/components/email/email-intro"
import { CloudSection } from "@/components/email/cloud-section"
import { CtaBanner } from "@/components/email/cta-banner"
import { EmailFooter } from "@/components/email/email-footer"
import {
  SalesIcon,
  ServiceIcon,
  MarketingIcon,
} from "@/components/email/cloud-icons"

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl bg-card shadow-xl">
      {/* Header: Title + Platform image */}
      <EmailHeader />

      {/* Intro: 360 definition, SF-Nexvel logo, experience text, Partner logo */}
      <EmailIntro />

      {/* Divider */}
      <div className="mx-auto h-px w-full bg-border" />

      {/* Sales */}
      <CloudSection
        icon={<SalesIcon />}
        title="Sales"
        description="Impulse sus ventas conectando con los prospectos adecuados, optimice la gestión de clientes y reduzca costos operativos. Mejore la productividad, fidelice a sus clientes y brinde un servicio superior con el CRM #1, potenciado con Inteligencia Artificial."
        imageSrc="/images/sales-cloud.jpg"
        imageAlt="Impulse sus ventas con Sales de Salesforce"
        ctaLabel="Explorar Sales"
        ctaHref="#"
      />

      {/* Divider */}
      <div className="mx-6 h-px bg-border md:mx-12" />

      {/* Service */}
      <CloudSection
        icon={<ServiceIcon />}
        title="Service"
        description="Ofrece atención al cliente excepcional desde cualquier canal. Resuelve casos de forma ágil, automatiza flujos de soporte y supera las expectativas de tus clientes en cada interacción."
        imageSrc="/images/service-cloud.jpg"
        imageAlt="Atención al cliente excepcional con Service de Salesforce"
        ctaLabel="Explorar Service"
        ctaHref="#"
        reversed
      />

      {/* Divider */}
      <div className="mx-6 h-px bg-border md:mx-12" />

      {/* Marketing */}
      <CloudSection
        icon={<MarketingIcon />}
        title="Marketing"
        description="Crea experiencias personalizadas en cada punto de contacto. Diseña campañas automatizadas, segmenta audiencias con precisión y mide el impacto de cada acción en tiempo real."
        imageSrc="/images/marketing-cloud.jpg"
        imageAlt="Automatización y análisis con Marketing de Salesforce"
        ctaLabel="Explorar Marketing"
        ctaHref="#"
        badge="Automatización inteligente"
      />

      {/* CTA Banner */}
      <CtaBanner />

      {/* Team photo at the bottom */}
      <div className="w-full">
        <Image
          src="/images/hero-salesforce.jpg"
          alt="Equipo profesional de Nexvel Consulting colaborando"
          width={672}
          height={400}
          className="w-full object-cover"
        />
      </div>

      {/* Footer */}
      <EmailFooter />
    </main>
  )
}

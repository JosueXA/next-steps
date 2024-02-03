import type { Metadata } from 'next';  

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Está es la página de contacto de la aplicación",
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}
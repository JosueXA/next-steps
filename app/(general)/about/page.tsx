import type { Metadata } from 'next';  

export const metadata: Metadata = {
  title: "About Page",
  description: "Está es la página de nosotros de la aplicación",
};

export default function AboutPage() {
  return (
    <span className="text-7xl">About Page</span>
  )
}
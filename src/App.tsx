import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import HowItWorks from "./components/HowItWorks";
import Plans from "./components/Plans";
import Services from "./components/Services";
import Downloads from "./components/Downloads";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  // "Servicios" no aparece en el scroll normal -- solo se renderiza cuando el
  // usuario lo pide desde el menú "Producto" del footer.
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Plans />
        {showServices && <Services />}
        <Downloads />
        <FAQ />
        <ContactForm />
      </main>
      <Footer
        onOpenServices={() => {
          setShowServices(true);
          // Doble rAF: espera a que React monte <Services /> y el navegador
          // pinte el nuevo layout antes de medir su posición para el scroll.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
          });
        }}
      />
    </div>
  );
}

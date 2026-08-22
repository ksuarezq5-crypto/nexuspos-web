import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import HowItWorks from "./components/HowItWorks";
import Plans from "./components/Plans";
import Downloads from "./components/Downloads";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
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
        <Downloads />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

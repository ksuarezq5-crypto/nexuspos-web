import Nav from "./components/Nav";
import Services from "./components/Services";
import ServiceQuoteForm from "./components/ServiceQuoteForm";
import Footer from "./components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Services />
        <ServiceQuoteForm />
      </main>
      <Footer />
    </div>
  );
}

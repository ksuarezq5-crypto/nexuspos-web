import Nav from "./components/Nav";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

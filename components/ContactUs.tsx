import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-12 md:py-20 bg-[#D4EEFD]">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-6xl font-bold font-Lora">Contáctanos</h2>
        <p className="mt-4 text-gray-600 text-base md:text-2xl font-Lora font-regular">
          Déjanos tus datos y nos pondremos en contacto contigo.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
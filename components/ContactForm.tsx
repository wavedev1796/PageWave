const ContactForm = () => {
    return (
      <form className="mt-8 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md font-Lora">
        <div className="mb-6">
          <label htmlFor="contact-name" className="block text-left text-gray-700  font-medium mb-2">
            Persona de Contacto
          </label>
          <input
            type="text"
            id="contact-name"
            name="contact-name"
            placeholder="Ingresa tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div className="mb-6">
          <label htmlFor="contact-phone" className="block text-left text-gray-700 font-Lora font-medium mb-2">
            Número de Teléfono
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="contact-phone"
            placeholder="Ingresa tu número de teléfono"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div className="mb-6">
          <label htmlFor="contact-email" className="block text-left text-gray-700 font-Lora font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="contact-email"
            name="contact-email"
            placeholder="Ingresa tu correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-[#D4EEFD] text-white py-2 px-4 rounded-lg hover:bg-[#40B4E4] transition-colors"
        >
          Enviar
        </button>
      </form>
    );
  };
  
  export default ContactForm;
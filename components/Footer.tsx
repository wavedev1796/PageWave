const Footer = () => {
    return (
      <footer className="w-full bg-[#f7f7f7] mt-auto py-8">
        <div className="container mx-auto text-center">
          <p className="text-black font-Lora font-medium">
            © {new Date().getFullYear()} Wave. Todos los derechos reservados.
          </p>
          <p className="text-black font-Lora font-medium mt-2">
            Síguenos en:{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
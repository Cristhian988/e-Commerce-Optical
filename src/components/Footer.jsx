// import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Optical Store</h3>
          <p className="mt-4">
            Tu visión, nuestra misión. Encuentra la solución perfecta para tus
            necesidades ópticas en un solo lugar. Compra con nosotros y disfruta
            de la mejor experiencia en cuidado visual.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/sunglasses" className="hover:underline">
                Lentes de Sol
              </Link>
            </li>
            <li>
              <Link to="/oftaglasses" className="hover:underline">
                Lentes Oftálmicos
              </Link>
            </li>
            <li>
              <Link to="/contactlens" className="hover:underline">
                Lentes de Contacto
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Síguenos</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-col pt-6 space-y-2">
            <a href="" className="hover:underline">
              Política de privacidad
            </a>
            <a href="" className="hover:underline">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-4">
        <div className="container flex flex-col md:flex-row justify-center items-center">
          <p>© 2025 Optica Store. Reservados todos los derechos.</p>
        </div>
      </div>
    </footer>
  );
}

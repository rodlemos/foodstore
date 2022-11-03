import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo,
} from "phosphor-react";
import logo from "../assets/logo.svg";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-lightPink px-2 py-8">
        <img src={logo} className="h-32 mx-auto" />

        <div className="flex gap-2 justify-center mt-4">
          <li className="list-none p-2 bg-darkPink rounded-full hover:brightness-110 transition-colors duration-200 cursor-pointer">
            <FacebookLogo
              size={35}
              weight="light"
              className="text-mediumYellow"
            />
          </li>
          <li className="list-none p-2 bg-darkPink rounded-full hover:brightness-110 transition-colors duration-200 cursor-pointer">
            <InstagramLogo
              size={35}
              weight="light"
              className="text-mediumYellow"
            />
          </li>
          <li className="list-none p-2 bg-darkPink rounded-full hover:brightness-110 transition-colors duration-200 cursor-pointer">
            <PinterestLogo
              size={35}
              weight="light"
              className="text-mediumYellow"
            />
          </li>
          <li className="list-none p-2 bg-darkPink rounded-full hover:brightness-110 transition-colors duration-200 cursor-pointer">
            <WhatsappLogo
              size={35}
              weight="light"
              className="text-mediumYellow"
            />
          </li>
        </div>
      </div>

      <div className="w-full bg-darkPink px-2 py-4">
        <span className="block text-white text-center text-xs font-light">
          © Copyright 2022. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

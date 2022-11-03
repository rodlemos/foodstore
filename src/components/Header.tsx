import { useState } from "react";
import { List, MapPin, Phone, ShoppingCart, User } from "phosphor-react";
import { Searchbar } from "./Searchbar";
import logo from "../assets/logo.svg";

export function Header() {
  const [orders, setOrders] = useState(0);

  return (
    <header className="w-full bg-lightPink">
      <div className="p-2 flex justify-end items-start gap-3 bg-stone-800/90 md:px-4">
        <div className="flex gap-1 ">
          <Phone size={20} className="text-mediumYellow" />
          <div className="">
            <strong className="text-mediumYellow text-xs font-bold block leading-none">
              Telefone:
            </strong>
            <span className="text-mediumYellow text-xs leading-snug block">
              (00) 0000-0000
            </span>
          </div>
        </div>

        <div className="flex gap-1">
          <MapPin size={20} className="text-mediumYellow " />
          <div className="">
            <strong className="text-mediumYellow text-xs font-bold block leading-none">
              Endereço:
            </strong>
            <span className="text-mediumYellow text-xs leading-snug block">
              Rua Endereço do local n° 0000
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 xl:px-0 py-3 md:py-4 max-w-6xl mx-auto md:flex items-center justify-between gap-2">
        <a className="cursor-pointer" href="/">
          <img src={logo} className="h-20 mx-auto mb-2" />
        </a>

        <div className="flex-1">
          <Searchbar />
        </div>

        <div className="hidden md:flex gap-12">
          <a className="hidden md:flex items-end gap-1 text-darkYellow font-light cursor-pointer">
            <User size={30} className="text-darkYellow hidden md:inline" />
            Entrar
          </a>

          <a className="relative flex items-end cursor-pointer">
            <div className="absolute w-5 h-5 bg-lime-400 rounded-full border border-lime-500 top-[-6px] right-[-6px] flex items-center justify-center text-xs font-light text-white">
              {orders}
            </div>
            <ShoppingCart size={30} className="text-darkYellow" />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center bg-darkPink p-3 md:hidden">
        <button type="button" className="flex gap-1 items-center">
          <List size={25} className="text-white" weight="bold" />
          <strong className="text-white">Menu</strong>
        </button>

        <div className="flex gap-3">
          <a>
            <User size={25} className="text-white " />
          </a>

          <a className="relative flex items-end">
            <div className="absolute w-5 h-5 bg-lime-400 rounded-full border border-lime-500 top-[-6px] right-[-6px] flex items-center justify-center text-xs font-light text-white">
              {orders}
            </div>
            <ShoppingCart size={25} className="text-white" weight="duotone" />
          </a>
        </div>
      </div>

      <div className="hidden md:inline-block w-full bg-darkPink p-3">
        <nav className="max-w-5xl mx-auto flex justify-center gap-10">
          <li className="list-none text-white hover:text-mediumYellow transition-colors duration-200 cursor-pointer">
            <a>Home</a>
          </li>
          <li className="list-none text-white hover:text-mediumYellow transition-colors duration-200 cursor-pointer">
            <a>Bolos</a>
          </li>
          <li className="list-none text-white hover:text-mediumYellow transition-colors duration-200 cursor-pointer">
            <a>Doces</a>
          </li>
          <li className="list-none text-white hover:text-mediumYellow transition-colors duration-200 cursor-pointer">
            <a>Salgados</a>
          </li>
        </nav>
      </div>
    </header>
  );
}

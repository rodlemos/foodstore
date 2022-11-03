import { ShoppingCart } from "phosphor-react";

interface Props {
  image: string;
  title: string;
  price: string;
}

export function ProductCard({ image, price, title }: Props) {
  return (
    <div className="max-w-xs mx-auto py-6 border-b border-b-darkPink/40">
      <img src={image} alt="" className="w-full object-cover aspect-video" />

      <footer className="flex justify-between mt-6 gap-1 items-start">
        <div>
          <h2 className="text-darkYellow">{title}</h2>
          <span className="text-darkPink font-bold text-2xl block">
            R${price}
          </span>
        </div>

        <button className="bg-mediumYellow px-4 py-3 rounded-md hover:brightness-105 transition-colors duration-200">
          <ShoppingCart size={25} className="text-white" />
        </button>
      </footer>
    </div>
  );
}

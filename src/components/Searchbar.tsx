import { MagnifyingGlass } from "phosphor-react";

export function Searchbar() {
  return (
    <div className="flex items-center bg-white px-2 py-1 rounded border-2 border-mediumPink  focus-within:border-darkPink max-w-md h-11 mx-auto">
      <input
        type="search"
        className="outline-none flex-1 placeholder:text-darkPink/70 text-darkPink text-sm font-light"
        placeholder="Buscar produto"
      />
      <button type="submit">
        <MagnifyingGlass size={25} className="text-darkPink" />
      </button>
    </div>
  );
}

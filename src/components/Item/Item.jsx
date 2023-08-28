import { useNavigate } from "react-router-dom";
import { WishListIcon } from "../Icons/WishListIcon";
import { useState } from "react";

export const Item = ({ id, title, genres, price, images }) => {
  const navigate = useNavigate();
  const [isInWishList, setIsInWishList] = useState(false);
  return (
    <div
      onClick={() => navigate(`/game/${id}`)}
      className="flex w-full max-w-md flex-col overflow-hidden rounded-sm bg-slate-800 transition-all duration-[0.5s] ease-in-out hover:scale-105 hover:bg-slate-800/30"
    >
      <img src={images[1]} alt="Imagen del juego" className="h-auto w-full" />
      <div className="flex-[1] px-4 py-2">
        <h3 className="mb-1 text-sm font-bold text-white">{title}</h3>
        <p>
          {genres.map((genre, idx) => {
            return (
              <span
                key={genre.id}
                className="text-xs font-bold text-slate-100/50"
              >
                {idx === genres.length - 1 ? genre.name : `${genre.name}, `}
              </span>
            );
          })}
        </p>
      </div>
      <div className="flex justify-between px-4 pb-4">
        <p className="mt-auto text-xl font-bold text-white">
          <span className="font-bold">$</span>
          {price.toLocaleString("es-CL", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
        </p>

        <button
          className="z-50 pr-1 text-xl transition-all duration-150 ease-out hover:scale-125 md:text-lg"
          onClick={() => setIsInWishList(!isInWishList)}
        >
          <WishListIcon isAdded={isInWishList} />
        </button>
      </div>
    </div>
  );
};

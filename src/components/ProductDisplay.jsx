/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function ProductDisplay({ product }) {
  // eslint-disable-next-line react/prop-types
  const { id, name, price, description, image } = product;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="container py-24">
      <div className="relative flex flex-col items-center lg:flex-row gap-16 ">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 pt-10">
          <img src={image} alt="sunglasses" className="w-full object-contain" />
        </div>
        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 pt-10">
          <h1 className="text-4xl font-medium uppercase">{name}</h1>
          <p>{description}</p>
          <div className="h-[2px] bg-gray-100" />
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-2xl">S/. {price}</h2>
            <small className="text-gray-500">SKU 8056597717885</small>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <div className="text-lg">
            <h4 className="font-medium mb-4">Características del producto</h4>
            <div className="flex gap-28">
              <p className="text-sm">
                Nuestros lentes están diseñados para ofrecer estilo, comodidad y
                funcionalidad. Los marcos están fabricados con materiales de
                alta calidad como plástico, metal, titanio o acetato, mientras
                que las lentes están disponibles en opciones de policarbonato,
                cristal o materiales orgánicos, todos resistentes y duraderos.
                Contamos con una amplia variedad de diseños, desde estilos
                clásicos como aviador o redondo, hasta modernos como cateye u
                ovalado, disponibles en diversos colores para adaptarse a
                cualquier preferencia.
              </p>
            </div>
          </div>
          {/* Add to Cart */}
          <button
            className="text-sm rounded-3xl py-3 px-8 bg-primary text-white w-[200px]"
            onClick={() => addToCart(id)}
          >
            AÑADIR AL CARRO
          </button>
        </div>
      </div>
    </div>
  );
}

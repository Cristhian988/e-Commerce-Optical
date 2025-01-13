import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";

export default function ShopCategory({ category }) {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="container py-24">
      <h1 className="text-3xl md:text-4xl font-bold pt-10"> {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        {all_products.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

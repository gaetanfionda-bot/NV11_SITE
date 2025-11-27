import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function ProductPage() {
  const { ref } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.ref === ref);

  if (!product) return <div className="text-white p-10">Produit introuvable.</div>;

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-16">

        {/* IMAGES */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full mb-4"
          />
          <div className="flex gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-24 h-24 object-cover rounded-lg border border-white/20"
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="opacity-80 mb-6">{product.description}</p>

          <p className="text-3xl font-extrabold mb-6">{product.price} €</p>

          {/* TRY ON BUTTON */}
          <a
            href={`/try/${product.ref}`}
            className="block text-center bg-white text-black py-3 rounded-full font-semibold mb-4 hover:bg-white/80"
          >
            ESSAYER →
          </a>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-full font-semibold"
          >
            AJOUTER AU PANIER
          </button>
        </div>
      </div>
    </div>
  );
}

import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

// Hook pratique
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("nv_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    localStorage.setItem("nv_cart", JSON.stringify(cart));
  }, [cart]);

  // Ajouter au panier
  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find((p) => p.ref === product.ref);
      if (exists) {
        return prev.map((p) =>
          p.ref === product.ref ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  // Supprimer 1
  function decreaseQty(ref) {
    setCart((prev) =>
      prev
        .map((p) =>
          p.ref === ref ? { ...p, qty: Math.max(0, p.qty - 1) } : p
        )
        .filter((p) => p.qty > 0)
    );
  }

  // Supprimer totalement
  function removeFromCart(ref) {
    setCart((prev) => prev.filter((p) => p.ref !== ref));
  }

  // Vider panier
  function clearCart() {
    setCart([]);
  }

  // Prix total
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQty,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

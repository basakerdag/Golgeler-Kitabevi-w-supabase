import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { FaTurkishLiraSign } from "react-icons/fa6";
import supabase from "../../supabase";
import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice"; 
import { addToCart, removeFromCart } from "../../redux/cartSlice";


export default function Psikoloji() {
  const [books, setBooks] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const cart = useSelector((state) => state.cart.items)


  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("category", "psikoloji");

      setBooks(data);
    };

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setLoggedInUser(data?.user);
    };

    getUser();
    fetchBooks();
  }, []);

  const handleFavorite = async (product) => {
    if (!loggedInUser) {
      alert("Önce giriş yapmalısınız!");
      return;
    }

    const isFavorite = favorites.some((item) => item.id === product.id);

    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));

      await supabase
        .from("favorites")
        .delete()
        .match({ user_id: loggedInUser.id, product_id: product.id });
      
      alert("Ürün favorilerinizden kaldırıldı!");
    } else {
      dispatch(addToFavorites(product));

      await supabase.from("favorites").insert([
        {
          user_id: loggedInUser.id,
          product_id: product.id,
        },
      ]);

      alert("Ürün favorilerinize eklendi!");
    }
  };

  const handleCart = async (product) => {
    if (!loggedInUser) {
      alert("Önce giriş yapmalısınız!");
      return;
    }
    const isCart = cart.some((item) => item.id === product.id);

    if (isCart) {
      dispatch(removeFromCart(product.id));

      await supabase
        .from("shopping")
        .delete()
        .match({ user_id: loggedInUser.id, product_id: product.id });

    } else {
      dispatch(addToCart(product));

      await supabase.from("shopping").insert([
        {
          user_id: loggedInUser.id,
          product_id: product.id,
        },
      ]);

      alert("Ürün sepetinize eklendi!");
    }

  }

  return (
    <div className="p-6 bg-[#FAF3E0] min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#8B5E3B] mb-6">ÜRÜNLER</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-2 transition hover:scale-105"
          >
            <img
              src={product.imageurl}
              className="w-40 h-60 object-cover rounded-md"
              alt={product.name}
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <h2 className="text-sm text-gray-600">{product.author}</h2>
            <div className="flex gap-4 mt-4">
              <FaShoppingBasket
                size={30}
                className="text-red-500 cursor-pointer hover:text-red-700 transition"
                onClick={() => handleCart(product)}
              />
              <IoHeartSharp
                size={30}
                className={`cursor-pointer transition ${
                  favorites.some((item) => item.id === product.id)
                    ? "text-red-500 hover:text-red-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                onClick={() => handleFavorite(product)}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <h2>{product.price}</h2>
                <FaTurkishLiraSign />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import { removeFromCart } from "../redux/cartSlice";

const Shopping = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) return;

    const fetchCart = async () => {
      try {
        const { data: cartItems } = await supabase
          .from("shopping")
          .select("product_id")
          .eq("user_id", loggedInUser.id);

        const { data: productData } = await supabase
          .from("products")
          .select("*")
          .in("id", cartItems.map((item) => item.product_id));

        setCart(productData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchCart();
  }, [loggedInUser]);

  const handleRemoveFromCart = async (productId) => {
    try {
     await supabase
        .from("shopping")
        .delete()
        .eq("user_id", loggedInUser.id)
        .eq("product_id", productId);

      

      dispatch(removeFromCart({ product_id: productId }));
      alert("Ürün sepetten kaldırıldı.");
    } catch (err) {
      console.error(err.message);
    }
  };

  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  const continueShopping = () => {
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sepetiniz</h2>
        {!loggedInUser ? (
          <p className="text-xl text-gray-500">Sepetinizi görmek için giriş yapmalısınız.</p>
        ) : cart.length === 0 ? (
          <p className="text-xl text-gray-500">Sepetinizde ürün bulunmuyor.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cart.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                  <img
                    src={product.imageurl}
                    alt={product.name}
                    className="w-48 h-72 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">{product.name}</h3>
                  <RiDeleteBinFill
                    size={25}
                    color="gray"
                    className="cursor-pointer hover:text-red-500 mb-4"
                    onClick={() => handleRemoveFromCart(product.id)}
                  />
                  <div className="flex items-center gap-1 text-lg font-semibold">
                    <h2>{product.price}</h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-700">Toplam Tutar: {totalAmount} ₺</h3>
            </div>
            <button
              onClick={continueShopping}
              className="mt-6 py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
            >
              Alışverişe Devam Et
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shopping;

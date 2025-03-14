import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import supabase from "../supabase";
import { removeFromFavorites } from "../redux/favoriteSlice";

const Favorites = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

    const fetchFavorites = async () => {
      try {
        const { data: favoriteItems } = await supabase
          .from("favorites")
          .select("product_id")
          .eq("user_id", loggedInUser.id);

        const { data: productData } = await supabase
          .from("products")
          .select("*")
          .in("id", favoriteItems.map((item) => item.product_id));

        setFavorites(productData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchFavorites();
  }, [loggedInUser]);

  const handleRemoveFavorite = async (productId) => {
    try {
      await supabase
        .from("favorites")
        .delete()
        .eq("user_id", loggedInUser.id)
        .eq("product_id", productId);

      dispatch(removeFromFavorites({ product_id: productId }));

      alert("Favori ürün silindi.");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Favori listeniz</h2>

        {favorites.length === 0 ? (
          <p className="text-center text-xl text-gray-500">Favori listenizde ürün bulunmuyor.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src={product.imageurl}
                  alt={product.name}
                  className="w-48 h-72 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-medium text-gray-700 mb-2">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>

                <RiDeleteBinFill
                  size={30}
                  color="gray"
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => handleRemoveFavorite(product.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;

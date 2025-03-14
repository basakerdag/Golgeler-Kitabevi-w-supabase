import React, { useState, useEffect } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { IoMdExit } from "react-icons/io";

function Account() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        navigate("/signUp");
      } else if (user) {
        fetchUserInfo(user.id);
      }
    };

    fetchUserData();
  }, [navigate]);

  const fetchUserInfo = async (userId) => {
    const { data, error } = await supabase
      .from("users")
      .select("name, surname")
      .eq("id", userId);
  
    if (data && data.length > 0) {
      setUserInfo(data[0]);
    }
  };
  

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return;
    }

    dispatch(logoutUser());

    navigate("/signUp");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        {userInfo ? (
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Hoş geldiniz, <span className="text-indigo-600">{userInfo.name} {userInfo.surname}</span>!
          </h2>
        ) : (
          <p className="text-gray-600 text-lg">Yükleniyor...</p>
        )}

        <button
          onClick={signOut}
          className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6"
        >
          <IoMdExit className="mr-2" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default Account;

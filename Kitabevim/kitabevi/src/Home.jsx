import React from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "./supabase";


function Home() {
  const categoryNavigate=useNavigate();
  const shoppingNavigate=useNavigate();

  const category=()=>{
     categoryNavigate('/category');
  }

  const shopping=()=>{
    shoppingNavigate('/shopping');
  }
  const bgImage = supabase.storage
  .from("homepage")
  .getPublicUrl("homePage.jpg").data.publicUrl;
  
  return (
    <div
    className="min-h-screen text-gray-800 flex flex-col items-center justify-center"
    style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none", backgroundSize: "contain", backgroundPosition: "center" }}
  >
     
     <div className="flex justify-center">
  <header className="bg-[#f5f5dc] text-center py-10 px-6 rounded-lg shadow-md max-w-2xl">
    <h1 className="text-4xl font-bold text-[#8B5E3B] mb-4">Hoş Geldiniz!</h1>
    <p className="text-lg text-gray-700">Kitap dünyasına adım atın ve keşfetmeye başlayın.</p>
  </header>
</div>


      <div className="flex gap-4 mt-8">
        <button className="bg-[#F4A300] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#F49500] transition duration-300" onClick={category} >
          Kitapları İncele
        </button>
        <button className="bg-[#F4A300] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#F49500] transition duration-300" onClick={shopping}>
          Sepetiniz
        </button>
      </div>
    
      <div className="flex justify-center mt-16">
  <footer className="bg-[#f5f5dc] text-center text-gray-700 py-4 px-6 rounded-lg shadow-md max-w-2xl w-full">
    <p className="text-sm">© 2025 Gölgeler Kitabevi. Tüm Hakları Saklıdır.</p>
  </footer>
</div>

     
    </div>
  );
}

export default Home;

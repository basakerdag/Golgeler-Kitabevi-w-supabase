import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-[#FDF6EC] p-5 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <FaLeaf size={30} style={{ marginRight: '10px' }} color={"green"} />
        <h1 className="text-2xl font-serif text-[#8B5E3B] text-center">Gölgeler Kitabevi</h1>
        <FaLeaf size={30} style={{ marginLeft: '10px' }} color={"green"} />
      </div>
    
      <nav className="flex gap-6 mt-4">
        <Link to="/" className="text-[#8B5E3B] font-bold hover:text-[#A67C52] transition duration-200">Anasayfa</Link>
        <Link to="/category" className="text-[#8B5E3B] font-bold hover:text-[#A67C52] transition duration-200">Ürünler</Link>
        <Link to="/aboutUs" className="text-[#8B5E3B] font-bold hover:text-[#A67C52] transition duration-200">Hakkımızda</Link>
        <Link to="/signUp" className="text-[#8B5E3B] font-bold hover:text-[#A67C52] transition duration-200" > Giriş Yap</Link> 
        <Link to="/favorites" className="text-[#8B5E3B] font-bold hover:text-[#A67C52] transition duration-200">Favorilerim</Link>
        <Link to="/shopping" className="text-[#8B5E3B] font-bold hover:text-[#A67C52] transition duration-200">Sepetim</Link>
      </nav>
    </header>
  );
}


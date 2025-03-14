import React from 'react';
import { FaLeaf } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F9D6A1] to-[#F4C7A1] text-gray-800 flex flex-col items-center justify-center">
      <header className="text-center py-10">
      <div className="flex items-center justify-center">
          <FaLeaf size={30} style={{ marginLeft: '10px' }} color="green" />
          <h1 className="text-4xl font-bold text-[#8B5E3B] mx-4">Gölgeler Kitabevi</h1>
          <FaLeaf size={30} style={{ marginRight: '10px' }} color="green" />
          </div>
      <div className="my-4"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Gölgeler Kitabevi, kitapların dünyasında keşfe çıkmanızı sağlayan, her yaştan okura hitap eden zengin bir koleksiyon sunmaktadır. 
          En yeni çıkan kitaplardan klasiklere kadar her türdeki eseri bulabileceğiniz bir yer. Her kitabı, okurlarıyla buluşturmanın keyfini çıkarıyoruz.
        </p>
      </header>

      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#8B5E3B] mb-4">Hakkımızda</h2>
        <p className="text-lg text-gray-700">
          Kitaplar, hayatı daha renkli, anlamlı ve derin bir hale getirir. Gölgeler Kitabevi olarak amacımız, her kitapsevere hitap edebilecek 
          eserler sunmak, okurlarıyla samimi bir ilişki kurarak, okuma alışkanlıklarını daha da pekiştirmektir. 
          Sadece kitapları satmakla kalmıyor, aynı zamanda okuma kültürünü yaymayı hedefliyoruz.
        </p>
      </div>

      <footer className="mt-16 text-center text-gray-600">
        <p>© 2025 Gölgeler Kitabevi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}

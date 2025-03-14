import React from "react";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const eNavigate = useNavigate();
  const fNavigate = useNavigate();
  const pNavigate = useNavigate();
  const tNavigate = useNavigate();
  const bNavigate = useNavigate();


  const edebiyat = () => {
    eNavigate("/categoryPages/edebiyat");
  };

  const felsefe = () => {
    fNavigate("/categoryPages/felsefe");
  };

  const psikoloji = () => {
    pNavigate("/categoryPages/psikoloji");
  };

  const tarih = () => {
    tNavigate("/categoryPages/tarih");
  };

  const bilim = () => {
    bNavigate("/categoryPages/bilim");
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <button
        className="w-64 py-3 text-xl font-semibold text-[#5D4037] bg-[#FBE9E7] border border-[#D7CCC8] rounded-lg shadow-sm transition-all hover:bg-[#FFCCBC] hover:text-[#3E2723] active:scale-95"
        onClick={edebiyat}
      >
        <h2>EDEBİYAT</h2>
      </button>

      <button
        className="w-64 py-3 text-xl font-semibold text-[#5D4037] bg-[#FFF3E0] border border-[#D7CCC8] rounded-lg shadow-sm transition-all hover:bg-[#FFE0B2] hover:text-[#3E2723] active:scale-95"
        onClick={felsefe}
      >
        <h2>FELSEFE</h2>
      </button>

      <button
        className="w-64 py-3 text-xl font-semibold text-[#5D4037] bg-[#E3F2FD] border border-[#B3E5FC] rounded-lg shadow-sm transition-all hover:bg-[#90CAF9] hover:text-[#0D47A1] active:scale-95"
        onClick={psikoloji}
      >
        <h2>PSİKOLOJİ</h2>
      </button>

      <button
        className="w-64 py-3 text-xl font-semibold text-[#5D4037] bg-[#E8F5E9] border border-[#C8E6C9] rounded-lg shadow-sm transition-all hover:bg-[#A5D6A7] hover:text-[#1B5E20] active:scale-95"
        onClick={tarih}
      >
        <h2>TARİH</h2>
      </button>

      <button
        className="w-64 py-3 text-xl font-semibold text-[#5D4037] bg-[#F3E5F5] border border-[#E1BEE7] rounded-lg shadow-sm transition-all hover:bg-[#CE93D8] hover:text-[#4A148C] active:scale-95"
        onClick={bilim}
      >
        <h2>BİLİM</h2>
      
      </button>
     
    </div>
  );
}

import React from 'react';
import { useFormik } from 'formik';
import { secondformRules } from '../yup/secondformRules'; 

export default function Cart() {

  const formik = useFormik({
    initialValues: {
      name:  '',
      surname:  '',
      address: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    },
    validationSchema:  secondformRules, 
    onSubmit: (values) => {
      alert('Sipariş Verildi!');
    }
  });

  return (
    <div className="max-w-lg mx-auto p-8 bg-orange-50 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Adres ve Kart Bilgileri</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-orange-600">İsim:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="İsminizi giriniz"
            className="w-full px-4 py-2 mt-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-orange-600">Soyisim:</label>
          <input
            type="text"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Soyisminizi giriniz"
            className="w-full px-4 py-2 mt-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.surname && formik.errors.surname ? (
            <p className="text-red-500 text-sm">{formik.errors.surname}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-orange-600">Adres:</label>
          <textarea
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Adresinizi giriniz"
            className="w-full px-4 py-2 mt-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="text-red-500 text-sm">{formik.errors.address}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-orange-600">Kart Numarası:</label>
          <input
            type="text"
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Kart numarasını giriniz"
            className="w-full px-4 py-2 mt-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <p className="text-red-500 text-sm">{formik.errors.cardNumber}</p>
          ) : null}
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-orange-600">Son Kullanma Tarihi:</label>
            <input
              type="text"
              name="expiryDate"
              value={formik.values.expiryDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="AA/YY"
              className="w-full px-4 py-2 mt-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {formik.touched.expiryDate && formik.errors.expiryDate ? (
              <p className="text-red-500 text-sm">{formik.errors.expiryDate}</p>
            ) : null}
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-orange-600">CVV:</label>
            <input
              type="text"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="CVV"
              className="w-full px-4 py-2 mt-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {formik.touched.cvv && formik.errors.cvv ? (
              <p className="text-red-500 text-sm">{formik.errors.cvv}</p>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Sipariş Ver
        </button>
      </form>
    </div>
  );
}

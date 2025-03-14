import React, { useState } from 'react';
import { useFormik } from 'formik';
import { formRules } from '../yup/formRules';
import { useDispatch } from 'react-redux';
import { addToUsers } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import supabase from "../supabase";

function SignUp() {
  const addUserDispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submit = async (values, action) => {
    setErrorMessage('');
    setSuccessMessage('');

    try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });
  
        if (authError) {
          setErrorMessage(authError.message);
          return;
        }
     
      const { error: tableError } = await supabase.from('users').insert([
        {
          id: authData.user.id, 
          name: values.name,
          surname: values.surname,
          email: values.email,
          password : values.password
        },
      ]);

      if (tableError) {
        setErrorMessage(tableError.message);
        return;
      }


      addUserDispatch(addToUsers({
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password, 
        permission: values.permission,
      }));

      setSuccessMessage('Kullanıcı kaydı başarıyla tamamlandı!');

      action.setSubmitting(false);
      action.resetForm();

      setTimeout(() => {
    navigate('/singIn');
      }, 3000);
    } catch (err) {
      setErrorMessage('Beklenmeyen bir hata oluştu.');
      console.error("Kayıt hatası:", err);
    }
  };

  const signin = () => {
    navigate('/singIn');
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
      permission: false,
    },
    onSubmit: submit,
    validationSchema: formRules,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-orange-300">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">Kayıt Ol</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">İsim</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="İsminizi giriniz."
              value={values.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-600">Soyisim</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Soyisminizi giriniz."
              value={values.surname}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.surname && <p className="text-red-500 text-sm mt-1">{errors.surname}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email adresinizi giriniz."
              value={values.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifrenizi giriniz."
              value={values.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-600">Şifre Tekrarı</label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="Şifrenizi tekrar giriniz."
              value={values.repeatPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.repeatPassword && <p className="text-red-500 text-sm mt-1">{errors.repeatPassword}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="permission"
              name="permission"
              checked={values.permission}
              onChange={handleChange}
              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="permission" className="ml-2 text-sm text-gray-600">
              Bilgilerimin kaydedilmesine izin veriyorum.
            </label>
            {errors.permission && <p className="text-red-500 text-sm mt-1">{errors.permission}</p>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Kaydet
            </button>
          </div>

          {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        </form>

        <h4
          onClick={signin}
          className="text-center text-sm text-orange-500 mt-6 cursor-pointer"
        >
          Zaten bir hesabın var mı?
        </h4>
      </div>
    </div>
  );
}

export default SignUp;

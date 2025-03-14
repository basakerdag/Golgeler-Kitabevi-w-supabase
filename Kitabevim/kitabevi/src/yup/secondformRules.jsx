import * as yup from "yup";


export const secondformRules = yup.object({
  name: yup.string().required('İsim zorunludur'),
  surname: yup.string().required('Soyisim zorunludur'),
  address: yup.string().required('Adres zorunludur.'),
  cardNumber: yup.string()
    .required('Kart numarası zorunludur')
    .length(16, 'Kart numarası 16 haneli olmalıdır'),
  expiryDate: yup.string()
    .required('Son kullanma tarihi zorunludur')
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Geçerli bir tarih girin (AA/YY)'),
  cvv: yup.string().required('CVV zorunludur').matches(/^\d+$/, 'Sadece rakam giriniz').length(3, 'CVV 3 haneli olmalıdır')
});

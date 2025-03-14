import * as yup from "yup";

export const formRules=yup.object().shape({
    name :yup.string()
    .test(
      'is-valid-name',
      'İsim sadece harf içermelidir ve tamamen boşluklardan oluşamaz.',
      (value) => value && /^[A-Za-zÇçĞğİıÖöŞşÜü]+(?: [A-Za-zÇçĞğİıÖöŞşÜü]+)*$/.test(value)
    )
    .required('İsim zorunludur.'),
    surname : yup.string()
    .test(
      'is-valid-name',
      'İsim sadece harf içermelidir ve tamamen boşluklardan oluşamaz.',
      (value) => value && /^[A-Za-zÇçĞğİıÖöŞşÜü]+(?: [A-Za-zÇçĞğİıÖöŞşÜü]+)*$/.test(value)
    )
    .required('Soyisim zorunludur.'),
    email : yup.string().email("Geçerli bir email adresi giriniz.").required("Email adresi zorunludur."),
    password : yup.string().required("Şifre alanı zorunludur."),
    repeatPassword: yup.string().required("Şifre tekrar alanı zorunludur.").oneOf([yup.ref('password',yup.password)]),
    permission: yup.boolean().oneOf([true], 'Lütfen kutucuğu onaylayınız.'),
 

})


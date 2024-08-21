import * as Yup from "yup";

const passwordRegex = new RegExp(
  /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,15}$/
);
export const validationSchema = Yup.object({
  fullName: Yup.string().required("required!!!!"),
  email: Yup.string()
    .email("please enter valid email")
    .required("please enter your email"),
  dob: Yup.string().required("please enter your date of birth"),
  streetAddress: Yup.string().required("please enter your street address"),
  city: Yup.string().required("please enter your city"),
  state: Yup.string().required("please enter your state"),
  zipCode: Yup.string().required("please enter your zip code"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "please enter min 8 char, 1 uppercase, 1 lowercase, 1 number and 1 special char"
    )
    .required("please enter your password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "passwords must match")
    .required("please confirm your password"),
});

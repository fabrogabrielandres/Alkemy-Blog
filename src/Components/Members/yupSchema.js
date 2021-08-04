import * as Yup from "yup";
export const yupSchema = Yup.object({
  name: Yup.string().required("Required").min(4,"Minimo de cuatro caracteres").max(15, "Maximo de 15 caracteres"),
  image: Yup.string().required("Campo requerido"),
  id: Yup.string(),
  description: Yup.string().required("Campo requerido"),
  facebookUrl: Yup.string().required("Campo requerido"),
  linkedinUrl: Yup.string().required("Campo requerido"),
});

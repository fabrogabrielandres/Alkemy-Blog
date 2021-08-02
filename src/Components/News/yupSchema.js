import * as Yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const MAX_FILE_SIZE = 1000000; // 1mb expressed in bytes
const isFileOrBlob = data => data instanceof File || data instanceof Blob;
export const yupSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe ser de cuatro o más caracteres")
    .required("Required"),
  content: Yup.string().required("Campo requerido"),
  image: Yup.string(),
  file: Yup.mixed()
    .test("fileSize", "Tamaño máximo: 1MB", (value) => {
      console.log(value);
      return !isFileOrBlob(value)  || value?.size < MAX_FILE_SIZE;
    })
    .test("format", "Formatos aceptados: JPG/PNG", (value) => {
      return !isFileOrBlob(value)  || SUPPORTED_FORMATS.includes(value?.type);
    }),
  category_id: Yup.string().required("Requerido"),
  user_id: Yup.string(),
  id: Yup.string(),
});

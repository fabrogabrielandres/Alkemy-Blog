import * as Yup from 'yup';

export const schemaFormCreateEditCategories = Yup.object().shape({
    name: Yup.string()
        .min(4, 'Ingresar mas de 4 caracteres!')
        .required('Required'),
    description: Yup.string().required("Falta agregar la descripcion"),
    image: Yup.mixed().required('A file is required')
        .test('fileFormat', 'solo archivos image/jpg , image/png', (value) => {
            return value && ['image/jpg', 'image/png'].includes(value.type);
        }),
})
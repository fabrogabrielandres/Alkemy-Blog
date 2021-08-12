import { createCategory, editCategory } from './ServicesCategories';

export const peticionPostPatchFormCategories = async (values) => {
    console.log(values)
    if (!values.hasOwnProperty("id")) {
        try {
            const postCategory = await createCategory(values)
            console.log(postCategory);
            return postCategory;
            
        } catch (error) {
            console.log(error);
        }
    } else
        try {
            const putCategory = await editCategory(values.id, values)
            console.log(putCategory);
            //return putCategory;
        } catch (error) {
            console.log(error);
        }

}
import axios from 'axios';

export const peticionPostPatchFormCategories = async (values) => {
    if (!values.hasOwnProperty("id")) {
        try {
            await axios.post(`http://ongapi.alkemy.org/api/categoreies#t53`, values)
            
        } catch (error) {
            console.log(error);
        }
    } else
        try {
            await axios.patch(`http://ongapi.alkemy.org/api/categoreies#t53/:${values.id}`, values)
            console.log("patch");

        } catch (error) {
            console.log(error);
        }

}
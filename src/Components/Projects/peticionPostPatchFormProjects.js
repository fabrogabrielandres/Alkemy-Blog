import axios from 'axios';

export const peticionPostPatchFormProjects = async (values) => {
    if (!values.hasOwnProperty("id")) {
        try {
            await axios.post(`http://ongapi.alkemy.org/api/projects#t53`, values)
            //aca redirijo una vez termina el proceso
            //con histori.push("/")
        } catch (error) {
            console.log(error);
        }
    } else
        try {
            await axios.patch(`http://ongapi.alkemy.org/api/projects#t53/:${values.id}`, values)
            console.log("patch");

        } catch (error) {
            console.log(error);
        }

}
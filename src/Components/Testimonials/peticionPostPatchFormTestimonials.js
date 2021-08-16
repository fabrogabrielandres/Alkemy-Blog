import axios from 'axios';


export const peticionPostPatchFormTestimonials = async (values) => {
    if (!values.hasOwnProperty("id")) {
        try {
            await axios.post(`http://ongapi.alkemy.org/api${process.env.REACT_APP_API_TESTIMONIALS}`, values)
            
        } catch (error) {
            console.log(error);
        }
    } else
        try {
            await axios.patch(`http://ongapi.alkemy.org/api${process.env.REACT_APP_API_TESTIMONIALS}/${values.id}`, values)
            console.log("patch");

        } catch (error) {
            console.log(error);
        }

} 
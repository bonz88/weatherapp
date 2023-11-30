import axios from "axios"

const getUnsplash = async (query) => {
    try {
        const { data} = await axios (`https://api.unsplash.com/photos/random?query=${query}&client_id=B46uNuOAlUa2eR_bSLIlF8OVlCMCQP_5z1TDngDVvv4`)
        const { urls } = data;
        return urls.regular;
     } catch (err) {
        console.log(err.message)
     }
}

export default getUnsplash;
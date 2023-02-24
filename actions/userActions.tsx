import axios from "axios"

const API_URL = `https://iclair-production.up.railway.app/`


export const login = async () => {
    const { data } = await axios.get(`${API_URL}`)
   console.log(data)
    return data
  }
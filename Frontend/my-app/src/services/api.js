import Axios from "axios"

const api=Axios.create({
    baseURL:"https://my-car-app-2.herokuapp.com"
})

const base_URL="https://my-car-app-2.herokuapp.com"

export default api;
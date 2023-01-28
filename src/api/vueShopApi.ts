import axios from "axios"

const vueShopApi = axios.create ({
    baseURL: 'https://api.escuelajs.co/api/v1'
});

export default vueShopApi;



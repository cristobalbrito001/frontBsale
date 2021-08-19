const axios = require('axios').default
const API = 'http://localhost:5000/product';
const getData = async (id) => {
    const apiUrl = id ? `${API}/${id}` : API;
    const datos = await axios.get(apiUrl);
    return  datos.data.products;  
}
export default getData 
const axios = require('axios').default

const searchProduct = async () =>{
    const datos = await axios.get('http://localhost:5000/nombre/mistral');
    return  datos.data.products;  
}
export default searchProduct;



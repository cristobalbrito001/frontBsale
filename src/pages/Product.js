import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Product = async ()=>{
    const id = getHash();
    const product = await getData(id);
    let descuento = product[0].discount/100;
    let descuentoPrecioTotal = product[0].price*descuento;
    let precioReal = product[0].price-descuentoPrecioTotal
    console.log(precioReal)
    

    const view = `
        <div class="Products-inner">
            <article class="Products-card">
                <img src="${product[0].url_image}" alt ="name">
                <h2>Name ${product[0].name}</h2>
            </article>
            <article class="Products-card">
                <h3>
                    precio:${precioReal}
                </h3>
                <h3>
                    descuento:${product[0].discount}%
                </h3>
            </article>
        </div>
    `;
    return view;
}

export default Product;
import getData from '../utils/getData'
const Home = async () => {
    const products = await getData();
    const view = `
        <div class="Product">
            ${products.map(product => `
            <article class="Product-item">
                <a href="#/${product.id}">
                    <img src="${product.url_image}" alt="name">
                    <h2>${product.name}</h2>
                </a>
            </article>
    `).join('')} 
    </div>    
    `; 
    return view; 
};

export default Home;
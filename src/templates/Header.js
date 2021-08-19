//importar la funcion para buscar aca 
//hacer que el div con la clase de Product en el home se oculte y reemplazarla por la busqueda 


const Header = async ()=>{

    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <a href="/">
                    prueba-bsale
                </a>
            </div>
            <div class="Header-nav">
                <a href="#/about">
                    About
                </a>
            </div>
        </div>
    `;
    return view; 
   
};

export default Header;
const LoadMenu = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('container_Menu');
    main.innerHTML = ` <ul>
                            <li> Atieke with Tilapia Filet braise ...........$20</li>
                            <li>Ris au Gras with choice of fish or lamb with it.........$22</li>
                            <li>Authentic poulet Rotis with local ingredients with side rice .........$12</li>
                            <li>Penaut Butter Sauce with lamb meat and spice cayenne serve with rice..........$10</li>
                            <li>Fakoye with Lamb meat serve with rice........$15</li>
                            
                        </ul>`
}
export {LoadMenu};
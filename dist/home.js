
const LoadHomePage = ()=>{
    let body = document.getElementsByTagName('body')[0];
    body.innerHTML = `<header class="main_header">
                            <h1> Kitague Malian Authentic Cuisine Restaurant</h1>
                            <nav class="main_nav">
                                <ul>
                                <li class="Home_button">Home</li>
                                <li class="About_button">About</li>
                                <li class="Menu_button">Menu</li>
                                <li class="Contact_buton">Contact</li>              
                                </ul>
                            </nav>
                        </header>
                        <main class="container">
                            <div class="Home_imgs">
                            <div class="div1">
                                <img src="https://static.wixstatic.com/media/189a587f3b713716c6b7c1addd4f8fb4.jpg/v1/fill/w_299,h_482,al_c,q_80,usm_0.66_1.00_0.01/189a587f3b713716c6b7c1addd4f8fb4.jpg" alt="#">
                            </div>
                            <div class="div2">
                                <img src="background-black-cast-iron-1435909.jpg" alt="#">
                                <img src="https://static.wixstatic.com/media/41d000_48ad029824b148e4b7bd13444ad295c9.jpg/v1/fill/w_299,h_225,al_c,q_80,usm_0.66_1.00_0.01/41d000_48ad029824b148e4b7bd13444ad295c9.jpg" alt="#">
                            </div>
                            <div class="div4">
                                <p>
                                    Kitague Malian authentic cuisine bring most famous West African cuisine at your finger tip.
                                 We specialize in Malian cuisine with local ingredients. Our recipes have been around for three generations.
                                 You can find most West African cuisine from our restaurant.
                                 We are family own business.
                                Come in and enjoyed some Malian authentic cuisine with Kitague Restaurant.
                                We are open seven days a week with shorter hour of opereation on Friday and Sunday.
                                We provided catering for big and business events.
                                </p>
                                </div>
                            </div>
                        </main>`
}
const LoadHomePageContent = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.remove('container_about');
    main.innerHTML = `<div class="Home_imgs">
                        <div class="div1">
                            
                        </div>
                        <div class="div2">
                    
                        
                        </div>
                        <div class="div4">
                            <p>
                                 Kitague Malian authentic cuisine bring most famous West African cuisine at your finger tip.
                                 We specialize in Malian cuisine with local ingredients. Our recipes have been around for three generations.
                                 You can find most West African cuisine from our restaurant.
                                 We are family own business.
                                Come in and enjoyed some Malian authentic cuisine with Kitague Restaurant.
                                We are open seven days a week with shorter hour of opereation on Friday and Sunday.
                                We provided catering for big and business events.
                            </p>
                            </div>
                        </div>
                      </div>`
}
export {LoadHomePage,LoadHomePageContent};
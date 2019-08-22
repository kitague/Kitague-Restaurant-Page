const LoadAboutContent = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('container_about');
    main.innerHTML = `  <div class="about1">
                            <p>
                            Kitague Restaurant provides authentic Malian Food cook with local ingredients.
                            We have been in business for many years as family business, our grand parents have passed down thier recipes to us.
                            Our Menu included most famous dishes in Mali.
                            We also have some west African dishes.  
                            </p>
                        </div>
                    
                 
                        </div>`
}
export {LoadAboutContent};
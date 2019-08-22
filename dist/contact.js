const LoadContacts = ()=>{
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('container_contact');
    main.innerHTML = `  <div> 
                            <p> Contact us on </p>
                            <p> 912 Birmigham Rd, Richardson, TX 75080</p>
                                
                            <p> @ Facebook @ Kitague; @Twitter@Kitague</p>
                        </div>`;
}
export {LoadContacts};
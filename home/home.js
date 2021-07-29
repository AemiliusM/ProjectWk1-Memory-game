import { setUser } from '../utils.js';
 // import functions and grab DOM elements
const userForm = document.getElementById('user');


userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const name = formData.get('name');
    const userObject = {
        username: name,
        turns: 0
    };
    setUser(userObject);
    console.log(userObject);
   
    

    window.location.replace('../game/');
});
import { getUser } from '../utils.js';
 // import functions and grab DOM elements
const userForm = document.getElementById('user');


userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const name = formData.get('name');
    console.log(name);
    getUser(name);
   
    

    window.location.replace(`../game`);
});
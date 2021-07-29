import { setUser } from '../utils.js';
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

    window.location = './game/';
});
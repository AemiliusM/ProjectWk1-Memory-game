export const USER = 'USER';

export function findByName(items, name) {
    for (const item of items) {
        if (item.username === name) {
            return item;
        }
    }
}

export function getUser(name) {
    const userString = localStorage.getItem(name);
    if (!userString){
        const newUser = {
            username: name,
            turns: 0
        };
        setUser(newUser);
        return newUser;
    }
    return JSON.parse(userString);
}

export function setUser(userObject) {
    const userString = JSON.stringify(userObject);
    localStorage.setItem(userObject.username, userString);
}
export function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}


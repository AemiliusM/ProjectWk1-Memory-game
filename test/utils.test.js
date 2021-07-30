
import { setUser, getLocal, USER } from '../utils.js';

const test = QUnit.test;

test('test to see if getLocal pulls from expected from localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        username: 'Mr Test',
        turns: 0
    };

    const userInfo = {
        username: 'Mr Test',
        turns: 0
    };

    const userString = JSON.stringify(userInfo);
    localStorage.setItem(USER, userString);

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getLocal();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('test to see if setUser puts user info into localStorage', (expect) => {
    const userInfo = {
        user: 'info'
    };

    const expected = {
        user: 'info'
    };

    setUser(userInfo);

    const actual = getLocal();
    
    expect.deepEqual(actual, expected);
});
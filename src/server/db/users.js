/* Created by Roozbeh Moradi*/

const users = [];


function getUser(id) {
     user = users[id];
    console.log('getuser() returned user: ' + user);
    return user;
}

function userNameIsAvailable(id) {
    var count = users.length;
    for (var i = 0; i < count; i++) {
        if (users[i] === id) {
            console.log('Username is already taken!');
            return false;
        }
    }
    return true;
}

function createUser(id) {
    if (userNameIsAvailable(id)) {
        users.push(id);
        console.log('Username ' + id +' added to users');
    }
}

function resetAllUsers() {
    users.length = 0;
    console.log('Db reset, size = '+ users.length);
}

//Todo: isAvailable: usernameIsAvailable
module.exports = {getUser, userNameIsAvailable, createUser, resetAllUsers};

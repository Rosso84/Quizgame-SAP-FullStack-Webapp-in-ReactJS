/* Created by Roozbeh Moradi
*
* */


const users = [];


function getUser(id) {
     user = users[id];
    console.log('getUser() method returned user: ' + user);
    return user;
}

function userNameIsAvailable(id) {
    var size = users.length;
    for (var i = 0; i < size; i++) {
        return users[i] !== id;
    }

}

function createUser(id) {
    if (userNameIsAvailable(id)) {
        users.push(id);
        console.log('Username ' + id +' added to users');
    }else {
        /*alert('This username is allready taken');*/
        console.log('username not available');
    }
}

function resetDb() {
    users.length = 0;
    console.log('Db reset, list of users is empty');
}


module.exports = {getUser, userNameIsAvailable, createUser, resetDb};

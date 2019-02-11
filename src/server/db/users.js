/* Created by Roozbeh Moradi
*
* */


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
            return false;
        }
    }
    return true;
}

function createUser(id) {
    if (userNameIsAvailable(id)) {
        users.push(id);
        console.log('Username ' + id +' added to users');
    }else {
        console.log('username not available')
    }
}

function resetDb() {
    users.length = 0;
    console.log('Db reset, size = '+ users.length);
}


module.exports = {getUser, userNameIsAvailable, createUser, resetDb};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["admin", "guest", "student", "head", "accountant"];
let new_users = ["Admin", "user1", "user2", "accountant", "user3"];
let user;
// Convert all current usernames to lowercase for case-insensitive comparison
let currentUsersLower = current_users.map(user => user.toLowerCase());
for (let newUser of new_users) {
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}

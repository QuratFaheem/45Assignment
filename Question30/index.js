"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["Admin", "Johnson", "Mark", "Eric", "Albert"];
for (let i = 0; i < users.length; i++) {
    if (users[i] == "Admin") {
        console.log(`Hello ${users[i]} ! Would you like to see a status report?`);
    }
    else
        console.log(`Hello ${users[i]} ! Thank you for logging in again`);
}

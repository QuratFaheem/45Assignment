let current_users : string[]=["admin","guest","student","head","accountant"]
let new_users: string[]=["Admin","user1","user2","accountant","user3"]
let user : string;

// Convert all current usernames to lowercase for case-insensitive comparison
let currentUsersLower: string[] = current_users.map(user => user.toLowerCase());

for (let newUser of new_users) {
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
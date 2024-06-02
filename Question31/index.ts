let usernames : string[]=["Baby","Toddler","Kid","Teenager","Adult","Elder"];
// This splice method will empty the usernames array
usernames.splice(0,usernames.length);
if (usernames.length === 0)
    {
        console.log("We need to find some users!");
    }
else {
    console.log("There are some users !");
}    

//Q12: Greetings: Start with the array.print a message, message should be personalized with the person's name.
let myfriends_list=["Zoya","Sania","Bashair","Taha"];

// iterating the array element and concatenated a greeting message also.
for (let num=0;num<myfriends_list.length;num++)
    {console.log("Congratulations! ",myfriends_list[num]+ " You are selected for AI");
    }

    //Another way of accessing array

    for (let frnds of myfriends_list)
        {
            console.log(`Congrats!  ${frnds} You are Selected `)
        }
//Q12: Greetings: Start with the array.print a message, message should be personalized with the person's name.
var myfriends_list = ["Zoya", "Sania", "Bashair", "Taha"];
// iterating the array element and concatenated a greeting message also.
for (var num = 0; num < myfriends_list.length; num++) {
    console.log("Congratulations! ", myfriends_list[num] + " You are selected for AI");
}
//Another way of accessing array
for (var _i = 0, myfriends_list_1 = myfriends_list; _i < myfriends_list_1.length; _i++) {
    var frnds = myfriends_list_1[_i];
    console.log("Congrats!  ".concat(frnds, " You are Selected "));
}

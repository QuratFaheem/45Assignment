//Q14: Guest List.Use your list to print a message to each person, inviting to dinner.
var guest_list = ['Sana', 'Sara', 'Mark'];
/*for (let num=0;num<guest_list.length;num++)
{
    console.log('Dear', guest_list[num],'! \n i cordially invite you on dinner tonight')
    console.log('\n');
}*/
//Q15:Changing Guest List.
console.log(guest_list[2], ' is the guest who excused to come for dinner');
console.log('\n');
//i modified the guest list here and added John in guest list
guest_list[2] = "John";
//This is the remaining modified list of guest.and i sent them a reminder message for dinner.
for (var num = 0; num < guest_list.length; num++) {
    console.log('Hey!', guest_list[num], ' This is the another message of invitation to remind you for dinner');
}

//Very first three person list
var guest_list = ['Sana', 'Sara', 'Mark'];
//i modified the guest list here and added John in guest list
guest_list[2] = "John";
//add one element in the beggining
guest_list.unshift("Rebecca");
//add one element in the last of array
guest_list.push("Thomson");
guest_list.push("Fernandes");
//console.log('I Can only invite two person, as i unable to arrange Dinner table on time');
//console.log('\n');
//shirinking the guest list .and make it of two person.Question 17th
//console.log('Excluded person from the guest list');
for (var num = 0; num < 4; num++) {
    //console.log('sorry i can not invite',guest_list[num],' you on dinner due to Dinner table arrangement');
    guest_list.splice(0, 1);
}
/*console.log('\n');
//then new invitation for each person after adding
//console.log('Only Two person invitation');
//for(let num=0;num<guest_list.length;num++)
//{
   // console.log('Dear ',guest_list[num],',You are still invited.');
}*/
guest_list.splice(0, guest_list.length);
console.log('From question 14 to 18, now :');
console.log("Dinner Cancel");
console.log('Guest list is zero,i have no budget and i m not inviting anyone. now guest array is ', guest_list.length);


let guest_list=['Sana','Sara','Mark'];

//i modified the guest list here and added John in guest list
guest_list[2]="John";

console.log('I have found a bigger table and now we can have three more guest to join us on dinner');
//add one element in the beggining
guest_list.unshift("Rebecca")
//add one element in the last of array
guest_list.push("Thomson")
guest_list.push("Fernandes")
console.log('\n');
//then new invitation for each person after adding 
for(let num=0;num<guest_list.length;num++)
{
    console.log('Dear ',guest_list[num],',After all arrangements dinner is now confirmed tonight');
}
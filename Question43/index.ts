let names_array:string[]=["Hadiqa","Atif Aslam","Britney Spears","Enrique","Shakira"];

function make_great(my_array:string[])
{
        let greatmagicians=[];
        for(let i=0;i<my_array.length;i++)
            {
        greatmagicians.push(`${my_array[i]} the Great`);
            }    
        return greatmagicians;
}

function show_magicians(names:string[])
{
    if(names!==undefined)
        for(let i=0;i<names.length;i++)
            {
                console.log(names[i]);
            }
}
let greatmagician=make_great(names_array);
console.log("New modified array");
console.log(greatmagician);
console.log("Original Array");
show_magicians(names_array);
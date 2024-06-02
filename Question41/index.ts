let names_array:string[]=["Hadiqa","Atif Aslam","Britney Spears","Enrique","Shakira"];

function show_magicians(names:string[])
{
    if(names!==undefined)
        for(let i=0;i<names.length;i++)
            {
                console.log(names[i]);
            }
}

show_magicians(names_array);
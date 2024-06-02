function City_country(city:string,country: string):string
{
    return `"${city} , ${country}"`;
}

let outputmsg : string=City_country ('Hyderabad','Pakistan')
console.log(outputmsg);

outputmsg =City_country ('Karachi','Pakistan')
console.log(outputmsg);

outputmsg =City_country ('Islamabad','Pakistan')
console.log(outputmsg);
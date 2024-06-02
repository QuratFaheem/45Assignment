function describe_city(cityname:string='Hyderabad',countryname : string='Pakistan')
{
    console.log(` ${cityname} is in ${countryname}`);
}

describe_city();

describe_city("Karachi");
describe_city("Islamabad");
// calling function with the city not in default country name
describe_city("Ontario","Canada");
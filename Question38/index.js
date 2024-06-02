function describe_city(cityname, countryname) {
    if (cityname === void 0) { cityname = 'Hyderabad'; }
    if (countryname === void 0) { countryname = 'Pakistan'; }
    console.log(" ".concat(cityname, " is in ").concat(countryname));
}
describe_city();
describe_city("Karachi");
describe_city("Islamabad");
// calling function with the city not in default country name
describe_city("Ontario", "Canada");

function City_country(city, country) {
    return "\"".concat(city, " , ").concat(country, "\"");
}
var outputmsg = City_country('Hyderabad', 'Pakistan');
console.log(outputmsg);
outputmsg = City_country('Karachi', 'Pakistan');
console.log(outputmsg);
outputmsg = City_country('Islamabad', 'Pakistan');
console.log(outputmsg);

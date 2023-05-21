function isValidName(value) {
    if (isEmpty(value)) { return "Name is required "; }
    else if (value === undefined) { return "FirstName is required "; }
    else { return null; }
}
function isValidFirstname(value) {
    if (isEmpty(value)) { return "Firstname is required "; }
    else if (value === undefined) { return "FirstName is required "; }
    else { return null; }
}
function isValidLastname(value) {
    if (isEmpty(value)) { return "Lastname is required "; }
    else if (value === undefined) { return "Lastname is required "; }
    else { return null; }
}
function isValidAddress(value) {
    if (isEmpty(value)) { return "Address is required "; }
    else if (value === undefined) { return "Address is required "; }
    else { return null; }
}
function isValidCountry(value) {
    if (isEmpty(value)) { return "Country is required "; }
    else if (value === undefined) { return "Country is required "; }
    else { return null; }
}
function isValidCity(value) {
    if (isEmpty(value)) { return "City is required "; }
    else if (value === undefined) { return "City is required "; }
    else { return null; }
}
function isValidPostcode(value) {
    if (isEmpty(value)) { return "Postcode is required "; }
    else if (value === undefined) { return "Postcode is required "; }
    else { return null; }
}
function isValidEmail(value) {
    if (isEmpty(value)) { return "Email is required "; }
    else if (value === undefined) { return "Email is required "; }
    else if (!value.match(("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]"))) { return "Invalid Email"; }
    else { return null; }
}
function isValidPhone(value) {
    if (isEmpty(value)) { return "Phone is required "; }
    else if (value === undefined) { return "Phone is required "; }
    else if (value.length > 20 || value.length < 6) { return "Phone No at least 6-20 character"; }
    else if (!value.match((/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g))) {
        return 'Please enter valid mobile number';
    }
    else { return null; }
}
function isValidNumber(value) {
    if (isEmpty(value)) { return "Number is required "; }
    else if (value === undefined) { return "Number is required "; }
    else if (!value.match((/^[0-9]$/))) {
        return 'Please enter valid Number';
    }
    else { return null; }
}
function isValidNationalId(value) {
    if (isEmpty(value)) { return "National Id is required "; }
    else if (value === undefined) { return "Phone is required "; }
    else if (value.length > 30 || value.length < 8) { return "National Id at least 8-30 character"; }
    else if (value.split(" ").length > 1) { return "Invalid National Id"; }
    else if (!value.match((/^(?=.{8,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9]+(?![_.])$/))) {
        return 'Please enter valid National Id';
    }
    else { return null; }
}
function isValidUsername(value) {
    if (isEmpty(value)) { return "Username is required "; }
    else if (value === undefined) { return "Username is required "; }
    else if (value.length > 15 || value.length < 5) { return "Username at least 4-15 character"; }
    else if (!value.match((/^(?=.{5,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/))) {
        return 'Please enter valid Username';
    }
    else if (value.split(" ").length > 1) { return "Invalid Name"; }
    else { return null; }
}
function isValidPassword(value) {
    if (isEmpty(value)) { return "Password is required "; }
    else if (value.length > 10 || value.length < 4) { return "Password at least 4-10 character"; }
    else if (value.split(" ").length > 1) { return "Invalid Password"; }
    else { return null; }
}
function isValidImage(value) {
    if (isEmpty(value)) { return "Image is required "; }    
    else if (!value.match(/^[-A-Za-z0-9+=]{1,50}|=[^=]|={3,}$/)) 
    { return "Invalid Image"; }
    else { return null; }
}

function isEmpty(obj) {
    return !Object.keys(obj).length;
}

module.exports = {
    isValidName,
    isValidFirstname,
    isValidLastname,
    isValidAddress,
    isValidCity,
    isValidCountry,
    isValidEmail,
    isValidPhone,
    isValidNumber,
    isValidNationalId,
    isValidPostcode,
    isValidUsername,
    isValidPassword,
    isValidImage
};
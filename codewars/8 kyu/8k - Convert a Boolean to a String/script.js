// Implement a function which convert the given boolean value into its string representation.
//
//     Note: Only valid inputs will be given.

function booleanToString(b){
    return b ? 'true' : 'false';
}

//other solutions
function booleanToString2(b){
    return b.toString();
}

function booleanToString3(b){
    return String(b);
}

function booleanToString4(b){
    return `${b}`
}

const booleanToString5 = b => b ? 'true' : 'false';
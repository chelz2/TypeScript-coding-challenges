// array type & constant types "as const"

// strict array type checking
let roles = ["admin", "editor", "visitor"] as const; // readonly array

// roles.push('Johnny Walker')  !!! ERROR - readonly array!!!

const adminRole = roles[0];
console.log(adminRole);

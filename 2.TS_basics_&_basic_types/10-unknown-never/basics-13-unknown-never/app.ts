let userInput: unknown; // unknown type
let userName: string;

userInput = 5;
userInput = "Max";
//use case - unknownn type - diff btween unknown & any type
if (typeof userInput === "string") {
  userName = userInput;
}

// return never type - utility function thowing error - infinite loop
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);

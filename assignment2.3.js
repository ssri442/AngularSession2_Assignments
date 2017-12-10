let passcode = "secret";
/**
 * The Employee class, having fullName property
 * @class Employee
 * @constructor
**/
class User {
    set fullName(newName) {
        if (passcode == "secret") {
            this._user = newName;
            console.log("in set block yayyyy its valid user");
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
    get fullName() {
        return this._user;
    }
    validUser(pass, name) {
        if (pass == 0 && passcode == "secret") {
            this._user = name;
            return this._user + " is valid";
        }
        else {
            return "invalid user";
        }
    }
}
let user = new User();
user.fullName = "sai sri";
let disp = user.validUser(0, user.fullName);
console.log(disp);
/**
 * NOTE:    Accessors require you to set the compiler to output ECMAScript 5 or higher.
 */ 

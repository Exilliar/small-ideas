"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var maxLen_1 = require("./data/maxLen");
var Password_1 = require("./Password");
function findPassword(user) {
    for (var l = 0; l < maxLen_1.default; l++) {
        var password = new Password_1.default(l);
        while (password.indexes[0] !== -1) {
            if (user.accessAccount(password.text))
                return password.text;
            password.incIndexes(l);
        }
    }
    return "not found";
}
console.log(findPassword(new User_1.default("AB")));
//# sourceMappingURL=passwordHacker.js.map
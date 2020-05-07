"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(pass) {
        this.password = pass;
    }
    User.prototype.accessAccount = function (pass) {
        return pass === this.password;
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.js.map
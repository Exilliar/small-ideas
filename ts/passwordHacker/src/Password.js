"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var possChars_1 = require("./data/possChars");
var Password = /** @class */ (function () {
    function Password(len) {
        this._indexes = new Array();
        for (var i = 0; i < len + 1; i++)
            this._indexes.push(0);
    }
    Object.defineProperty(Password.prototype, "text", {
        get: function () {
            this._text = "";
            for (var i = 0; i < this._indexes.length; i++) {
                this._text += possChars_1.default[this._indexes[i]];
            }
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Password.prototype, "indexes", {
        get: function () {
            return this._indexes;
        },
        enumerable: true,
        configurable: true
    });
    Password.prototype.incIndexes = function (toInc) {
        var maxInc = possChars_1.default.length;
        if (toInc < 0) {
            this._indexes[0] = -1;
            return;
        }
        else if (this._indexes[toInc] + 1 < maxInc)
            this._indexes[toInc]++;
        else {
            this._indexes[toInc] = 0;
            this.incIndexes(toInc - 1);
        }
        return;
    };
    return Password;
}());
exports.default = Password;
//# sourceMappingURL=Password.js.map
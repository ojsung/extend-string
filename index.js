"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
/**
   * Concatenate a set of strings, optionally passed as a string array
   * @param {string | string[]} stringOrStringArray Either a string or an array of strings to be concatenated
   * @param {string | undefined} stringToExtend Optional.  If this is passed as an argument, it will be the first string to which stringOrStringArray is appended
   * @param {string | undefined} delimiter: Optional.  If this is passed as an argument, all strings given as parameters will be concatenated with this as the delimiter
   * @param {boolean | undefined} useJoin: Optional.  Default is false.  If this is set to true, Array.prototype.join will be used, which is slower on Node's Chrome V8 engine.  However, if this script is being used outside of Node, or in older versions, this may be useful.
   * @returns {string} The concatenated string from the strings passed as arguments.
   */
function extendString(stringOrStringArray, stringToExtend, delimiter, useJoin) {
    if (useJoin === void 0) { useJoin = false; }
    var stringToReturn;
    if (typeof stringOrStringArray === 'string') {
        if (stringToExtend && typeof stringToExtend === 'string') {
            if (delimiter) {
                stringToReturn = stringToExtend + delimiter + stringOrStringArray;
            }
            else {
                stringToReturn = stringToExtend + stringOrStringArray;
            }
        }
        else {
            stringToReturn = stringOrStringArray;
        }
    }
    else if (Array.isArray(stringOrStringArray)) {
        var stringArray = stringOrStringArray;
        stringToReturn = useJoin
            ? helpers_1.joinByJoin(stringArray, stringToExtend, delimiter)
            : helpers_1.joinByForLoop(stringArray, stringToExtend, delimiter);
    }
    else {
        stringToReturn = '';
    }
    return stringToReturn;
}
exports.extendString = extendString;
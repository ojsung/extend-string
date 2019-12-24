"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./helpers");
/**
 * Concatenate a set of strings, optionally passed as a string array
 * @param {string | string[]} stringOrStringArray Either a string or an array of strings to be concatenated
 * @param {string | null | undefined} stringToExtend Optional.  If this is passed as an argument, it will be the first string to which stringOrStringArray is appended
 * @param {string | undefined} delimiter: Optional.  If this is passed as an argument, all strings given as parameters will be concatenated with this as the delimiter
 * @param {"join" | "loop" | "buffer" | undefined} mode: Optional.  Default is "loop".  If this is set to "join", Array.prototype.join will be used, which is slower on Node's Chrome V8 engine.
 * Using "loop" will concatenate them using a for loop over strings.  Using "buffer" will convert the strings to buffers then concatenate them.
 * If this script is being used outside of Node, or in older versions, the different options may be useful.
 * @returns {string} The concatenated string from the strings passed as arguments.
 */
function extendString(stringOrStringArray, stringToExtend, delimiter, mode) {
    if (mode === void 0) { mode = 'loop'; }
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
        if (mode !== 'join' && mode !== 'loop' && mode !== 'buffer') {
            stringToReturn = returnBlank(stringArray, stringToExtend, delimiter);
        }
        else {
            //@ts-ignore
            stringToReturn = this[mode](stringArray, stringToExtend, delimiter);
        }
    }
    else {
        stringToReturn = '';
    }
    return stringToReturn;
}
exports.extendString = extendString;
function returnBlank(_arg1, _arg2, _arg3) {
    console.error('The extendString function was given an invalid mode.  The valid modes are "join," "loop," and "buffer"');
    return '';
}
//# sourceMappingURL=index.js.map
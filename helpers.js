"use strict";
// Helper functions:
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A helper function to decide how to join an array using the Array.prototype.join method
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function joinByJoin(stringArray, stringToExtend, delimiter) {
    var stringToReturn;
    if (stringToExtend) {
        var shallowCopyArray = stringArray.slice();
        shallowCopyArray.unshift(stringToExtend);
        stringToReturn = shallowCopyArray.join(delimiter || '');
    }
    else {
        stringToReturn = stringArray.join(delimiter || '');
    }
    return stringToReturn;
}
exports.joinByJoin = joinByJoin;
/**
 * A helper function to decide how to join an array using a for loop and template strings
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function joinByForLoop(stringArray, stringToExtend, delimiter) {
    var stringArrayLength = stringArray.length;
    var stringToReturn;
    if (typeof stringToExtend === 'string') {
        stringToReturn = stringToExtend;
        if (typeof delimiter === 'string') {
            for (var i = 0, j = stringArrayLength; i < j; ++i) {
                stringToReturn = "" + stringToReturn + delimiter + stringArray[i];
            }
        }
        else {
            for (var i = 0, j = stringArrayLength; i < j; ++i) {
                stringToReturn = "" + stringToReturn + stringArray[i];
            }
        }
    }
    else {
        stringToReturn = stringArray[0];
        if (typeof delimiter === 'string') {
            for (var i = 1, j = stringArrayLength; i < j; ++i) {
                stringToReturn = "" + stringToReturn + delimiter + stringArray[i];
            }
        }
        else {
            for (var i = 1, j = stringArrayLength; i < j; ++i) {
                stringToReturn = "" + stringToReturn + stringArray[i];
            }
        }
    }
    return stringToReturn;
}
exports.joinByForLoop = joinByForLoop;
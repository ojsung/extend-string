"use strict";
// Helper functions:
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A helper function to decide how to join an array using the Array.prototype.join method
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function join(stringArray, stringToExtend, delimiter) {
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
exports.join = join;
/**
 * A helper function to decide how to join an array using a for loop and template strings
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function loop(stringArray, stringToExtend, delimiter) {
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
exports.loop = loop;
/**
 * A helper function to decide how to join an array by converting them to buffers and concatenating
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function buffer(stringArray, stringToExtend, delimiter) {
    var stringArrayLength = stringArray.length;
    var stringToReturn;
    var bufferArrayToReturn = [];
    var bufferLength = 0;
    if (typeof stringToExtend === 'string') {
        var bufferToExtend = Buffer.from(stringToExtend);
        if (typeof delimiter === 'string') {
            bufferArrayToReturn.push(bufferToExtend);
            bufferLength += bufferToExtend.length;
            var delimiterAsBuffer = Buffer.from(delimiter);
            var delimiterLength = delimiterAsBuffer.length;
            for (var i = 0, j = stringArrayLength; i < j; ++i) {
                var bufferValue = Buffer.from(stringArray[i]);
                bufferArrayToReturn.push(delimiterAsBuffer, bufferValue);
                bufferLength += bufferValue.length + delimiterLength;
            }
        }
        else {
            for (var i = 0, j = stringArrayLength; i < j; ++i) {
                var bufferValue = Buffer.from(stringArray[i]);
                bufferArrayToReturn.push(bufferValue);
            }
        }
    }
    else {
        var bufferValue = Buffer.from(stringArray[0]);
        bufferArrayToReturn.push(bufferValue);
        bufferLength += bufferValue.length;
        if (typeof delimiter === 'string') {
            var delimiterAsBuffer = Buffer.from(delimiter);
            var delimiterLength = delimiterAsBuffer.length;
            for (var i = 1, j = stringArrayLength; i < j; ++i) {
                var bufferValue_1 = Buffer.from(stringArray[i]);
                bufferArrayToReturn.push(delimiterAsBuffer, Buffer.from(stringArray[i]));
                bufferLength += delimiterLength + bufferValue_1.length;
            }
        }
        else {
            for (var i = 1, j = stringArrayLength; i < j; ++i) {
                var bufferValue_2 = Buffer.from(stringArray[i]);
                bufferArrayToReturn.push(bufferValue_2);
                bufferLength += bufferValue_2.length;
            }
        }
    }
    stringToReturn = Buffer.concat(bufferArrayToReturn, bufferLength).toString();
    return stringToReturn;
}
exports.buffer = buffer;
//# sourceMappingURL=helpers.js.map
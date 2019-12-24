
// Helper functions:

/**
 * A helper function to decide how to join an array using the Array.prototype.join method
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function joinByJoin(stringArray: string[], stringToExtend?: string, delimiter?: string): string {
  let stringToReturn: string
  if (stringToExtend) {
    const shallowCopyArray: string[] = stringArray.slice()
    shallowCopyArray.unshift(stringToExtend)
    stringToReturn = shallowCopyArray.join(delimiter || '')
  } else {
    stringToReturn = stringArray.join(delimiter || '')
  }
  return stringToReturn
}

/**
 * A helper function to decide how to join an array using a for loop and template strings
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function joinByForLoop(stringArray: string[], stringToExtend?: string, delimiter?: string): string {
  const stringArrayLength = stringArray.length
  let stringToReturn: string
  if (typeof stringToExtend === 'string') {
    stringToReturn = stringToExtend
    if (typeof delimiter === 'string') {
      for (let i = 0, j = stringArrayLength; i < j; ++i) {
        stringToReturn = `${stringToReturn}${delimiter}${stringArray[i]}`
      }
    } else {
      for (let i = 0, j = stringArrayLength; i < j; ++i) {
        stringToReturn = `${stringToReturn}${stringArray[i]}`
      }
    }
  } else {
    stringToReturn = stringArray[0]
    if (typeof delimiter === 'string') {
      for (let i = 1, j = stringArrayLength; i < j; ++i) {
        stringToReturn = `${stringToReturn}${delimiter}${stringArray[i]}`
      }
    } else {
      for (let i = 1, j = stringArrayLength; i < j; ++i) {
        stringToReturn = `${stringToReturn}${stringArray[i]}`
      }
    }
  }
  return stringToReturn
}

export {joinByJoin, joinByForLoop}
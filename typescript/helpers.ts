
// Helper functions:

/**
 * A helper function to decide how to join an array using the Array.prototype.join method
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function join(stringArray: string[], stringToExtend?: string, delimiter?: string): string {
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
function loop(stringArray: string[], stringToExtend?: string, delimiter?: string): string {
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

/**
 * A helper function to decide how to join an array by converting them to buffers and concatenating
 * @param stringArray An array of strings
 * @param stringToExtend Optional.  A string to which to append the stringArray
 * @param delimiter Optional.  A delimiter to separate the strings.
 */
function buffer(stringArray: string[], stringToExtend?: string, delimiter?: string): string {
  const stringArrayLength: number = stringArray.length
  let stringToReturn: string
  const bufferArrayToReturn: Buffer[] = []
  let bufferLength: number = 0
  if (typeof stringToExtend === 'string') {
    const bufferToExtend: Buffer = Buffer.from(stringToExtend)
    if (typeof delimiter === 'string') {
      bufferArrayToReturn.push(bufferToExtend)
      bufferLength += bufferToExtend.length
      const delimiterAsBuffer: Buffer = Buffer.from(delimiter)
      const delimiterLength: number = delimiterAsBuffer.length
      for (let i = 0, j = stringArrayLength; i < j; ++i) {
        const bufferValue: Buffer =Buffer.from(stringArray[i])
        bufferArrayToReturn.push(delimiterAsBuffer, bufferValue)
        bufferLength += bufferValue.length + delimiterLength
      }
    } else {
      for (let i = 0, j = stringArrayLength; i < j; ++i) {
        const bufferValue: Buffer = Buffer.from(stringArray[i])
        bufferArrayToReturn.push(bufferValue)
      }
    }
  } else {
    const bufferValue: Buffer = Buffer.from(stringArray[0])
    bufferArrayToReturn.push(bufferValue)
    bufferLength += bufferValue.length
    if (typeof delimiter === 'string') {
      const delimiterAsBuffer: Buffer = Buffer.from(delimiter)
      const delimiterLength: number = delimiterAsBuffer.length
      for (let i = 1, j = stringArrayLength; i < j; ++i) {
        const bufferValue: Buffer =Buffer.from(stringArray[i])
        bufferArrayToReturn.push(delimiterAsBuffer, Buffer.from(stringArray[i]))
        bufferLength += delimiterLength + bufferValue.length
      }
    } else {
      for (let i = 1, j = stringArrayLength; i < j; ++i) {
        const bufferValue = Buffer.from(stringArray[i])
        bufferArrayToReturn.push(bufferValue)
        bufferLength += bufferValue.length
      }
    }
  }
  stringToReturn = Buffer.concat(bufferArrayToReturn, bufferLength).toString()
  return stringToReturn
}

export {join, loop, buffer}
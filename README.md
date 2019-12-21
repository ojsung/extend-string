# extend-string
## Should I use this?
Chooses the fastest means to concatenate a string array to a single array, based on the contents of the array - optimized for Chrome V8 engine.

## WhY dOEs Ur forMattInG SUcks?
The point of this is to be very fast at what it does.  I could move the other two functions into a class, but that seems like unnecessary overhead.  Also, I don't believe in trailing commas when I don't need to.  I do that enough when I'm writing in Java.

## Typescript
If you prefer to use the script directly, you can copy the contents of typescript/index.ts, which already contains the export.

## Performance Check
If you're curious about the performance of this script on your engine, you can run the test function contained in test.js

# Info
## The exported method:
The exported method is "extendString()."  This is the only method exported from this module.

## Parameters:
This accepts four parameters.
```
@param {string | string[]} stringOrStringArray Either a string or an array of strings to be concatenated
@param {string | undefined} stringToExtend Optional.  If this is passed as an argument, it will be the first string to which stringOrStringArray is appended
@param {string | undefined} delimiter: Optional.  If this is passed as an argument, all strings given as parameters will be concatenated with this as the delimiter
@param {boolean | undefined} useJoin: Optional.  Default is false.  If this is set to true, Array.prototype.join will be used, which is slower on Node's Chrome V8 engine.  However, if this script is being used outside of Node, or in older versions, this may be useful.
@returns {string} The concatenated string from the strings passed as arguments.
```

## Usage
## Example 1
```
import { extendString } from 'extend-string'

class Foo {
  const barArray: string[] = ["b", "c", "d", "e"]
  const stringToExtend: string = "a"
  const delimiter: string = ","
  const extendedString: string = extendString(barArray, stringToExtend, delimiter)
  // Expected output: "a,b,c,d,e"
  const concatenatedString: string = extendString(barArray, null, delimiter)
  // Expected output: "b,c,d,e"
  const undelimitedString: string = extendString(barArray)
  // Expected output: "bcde"
  const stringUsingJoin: string = extendString(barArray, null, ",", true)
  // Expected output: "b,c,d,e" but really please don't do this unless your engine is... bad?
}
```
# extend-string
## Should I use this?
Chooses the fastest means to concatenate a string array to a single array, based on the contents of the array - optimized for Chrome V8 engine.

## WhY dOEs Ur forMattInG SUcks?
Even though there is only one exported function, index.js contains three.  This is on purpose.  The point of this is to be very fast at what it does.  I could move the other two functions into a class, but that seems like unnecessary overhead.  Also, I don't believe in trailing commas when I don't need to.  I do that enough when I'm writing in Java.

## Typescript
If you prefer to use the script directly, you can copy the contents of typescript/index.ts, which already contains the export.

## Performance Check
If you're curious about the performance of this script on your engine, you can run the test function contained in test.js
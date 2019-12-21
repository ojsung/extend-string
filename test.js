function test() {
  const arrayOfLetters = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,b,w,x,y,z'.split(',')
  const delimiter = ','
  const arrayOfWords = []
  for (let i = 0, j = 1000; i < j; ++i) {
    const numberOfLetters = Math.floor(Math.random() * 10)
    let word = ''
    for (let k = 0, m = numberOfLetters; k < m; ++k) {
      const letterIndex = Math.floor(Math.random() * 25)
      word += arrayOfLetters[letterIndex]
    }
    arrayOfWords.push(word)
  }
  console.log("This is a test to find the fastest method of concatenating strings.\nTest 1 uses the native prototype method called \"join.\"  \nIt is generally known to be the slowest method. \nTest 2 uses template literal strings/string interpolation.\nThis is thought to be the fastest method on Chrome's V8 engine (the current engine)\nThe third method is string concatenation using the + operator.\n The last method is my own script I have written.\nIt contains a lot of extra logic to try to find the best way to concatenate the string.")
  console.time('Test 1: Array.prototype.join')
  for (let i = 0, j = 100000; i < j; ++i) {
    const joinedWords = arrayOfWords.join(delimiter)
  }
  console.timeEnd('Test 1: Array.prototype.join')
  console.time('Test 2: For-loops with String Interpolation/Template Literals')
  for (let i = 0, j = 100000; i < j; ++i) {
    const arrayOfWordsLength = arrayOfWords.length
    let word = arrayOfWords[0]
    for (let i = 1, j = arrayOfWordsLength; i < j; ++i) {
      word = `${word}${delimiter}${arrayOfWords[i]}`
    }
  }
  console.timeEnd('Test 2: For-loops with String Interpolation/Template Literals')
  console.time('Test 3: For-loops with String Concatenation')
  for (let i = 0, j = 100000; i < j; ++i) {
    const arrayOfWordsLength = arrayOfWords.length
    let word = arrayOfWords[0]
    for (let i = 1, j = arrayOfWordsLength; i < j; ++i) {
      word += delimiter + arrayOfWords[i]
    }
  }
  console.timeEnd('Test 3: For-loops with String Concatenation')
  console.time('Test 4: My script for concatenating strings')
  for (let i = 0, j = 100000; i < j; ++i) {
    let word = extendString(arrayOfWords, '', delimiter, false)
  }
  console.timeEnd('Test 4: My script for concatenating strings')
}
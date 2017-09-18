# datekey-helper
Utility functions for manipulating YYYYMMDD datekeys

Does your backend use datekeys which follow this pattern: YYYYMMDD?
`datekey-helper` makes transforming those datekeys into formatted (display) dates really easy!

Installation:
`npm i -S datekey-helper`

Usage:
```
const DatekeyHelper = require('datekey-helper')

const datekey = 20170918 // a Monday
const datekeyHelper = new DatekeyHelper(datekey)

console.log(datekeyHelper.display.long)
// => 09/18/2017

console.log(datekeyHelper.display.short)
// => 09/18
```

Week-endings:
```
console.log(datekeyHelper.weekEndings(4))
// => [20170923, 20170930, 20171007, 20171014] (next 4 Saturdays)

console.log(datekeyHelper.weekEndings(-4))
// => [20170916, 20170909, 20170902, 20170826] (last 4 Saturdays)
```

# datekey-helper
Utility functions for manipulating YYYYMMDD datekeys

Does your backend use datekeys which follow this pattern: YYYYMMDD?
`datekey-helper` makes transforming those datekeys into formatted (display) dates really easy!

Example:
```
const datekey = 20170918
const datekeyHelper = new DatekeyHelper(datekey)

console.log(datekeyHelper.today('long'))

// => 09/18/2017
```

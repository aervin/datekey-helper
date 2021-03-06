const assert = require('assert')
const DatekeyHelper = require('./../datekey-helper')

const logPassFail = (passed, testCount, actual, expected) => {
    console.log(`
    [${testCount}] - ${passed ? 'PASS' : 'FAIL'}!
        It should return:
            ${expected}
        Got:
            ${actual}
    `)
}

let datekey = new DatekeyHelper(20170917)
let testCount, expected, actual

// [1]
testCount = 1
expected = '09/17/2017'
actual = datekey.display.long()
try {
    assert.strictEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [2]
testCount++
expected = '09/17'
actual = datekey.display.short()
try {
    assert.strictEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [3]
testCount++
expected = [20170923, 20170930, 20171007, 20171014]
actual = datekey.weekEndings(4)
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [4]
testCount++
expected = [20170916, 20170909, 20170902, 20170826]
actual = datekey.weekEndings(-4)
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [5]
testCount++
expected = false
actual = datekey.isMonday
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [6]
testCount++
expected = true
actual = datekey.isSunday
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

datekey.setSeparator('-')

// [7]
testCount++
expected = '09-17-2017'
actual = datekey.display.long()
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [8]
testCount++
expected = '09-17'
actual = datekey.display.short()
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

datekey.setSeparator('.')

// [9]
testCount++
expected = '09.17.2017'
actual = datekey.display.long()
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

// [10]
testCount++
expected = '09.17'
actual = datekey.display.short()
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

datekey.setSeparator(' \n.\n ')

// [11]
testCount++
expected = `09 
.
 17`
actual = datekey.display.short()
try {
    assert.deepEqual(actual, expected)
    logPassFail(true, testCount, actual, expected)
} catch (e) {
    logPassFail(false, testCount, actual, expected)
    process.exit(1)
}

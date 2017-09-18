function DatekeyHelper(datekey, config) {
    var _this = this
    _this.datekey = datekey || undefined
    _this.config = config || undefined

    if (
        datekeyExists(_this.datekey) &&
        validateType(_this.datekey) &&
        validateLength(_this.datekey)
    ) {
        return _this
    }

    _this.separator = _this.config ? _this.config.separator || '/' : '/'

    _this.display = {
        long: format(datekey, true, _this.separator),
        short: format(datekey, false, _this.separator)
    }

    _this.date = new Date(_this.display.long)
    _this.isSaturday = _this.date.getDay() === 6
    _this.isFriday = _this.date.getDay() === 5
    _this.isThursday = _this.date.getDay() === 4
    _this.isWednesday = _this.date.getDay() === 3
    _this.isTuesday = _this.date.getDay() === 2
    _this.isMonday = _this.date.getDay() === 1
    _this.isSunday = _this.date.getDay() === 0

    _this.weekEndings = function(n) {
        var endings = []
        if (n === 0 || n === undefined) {
            return endings
        }
        var start = new Date(_this.display.long)
        if (!_this.isSaturday) {
            if (n > 0) {
                var offset = 6 - _this.date.getDay()
                start.setDate(start.getDate() + offset)
            } else {
                start.setDate(start.getDate() - (_this.date.getDay() + 1))
            }
        }
        for (var i = 0; i < Math.abs(n); i++) {
            endings.push(dateToDatekey(start))
            n > 0
                ? start.setDate(start.getDate() + 7)
                : start.setDate(start.getDate() - 7)
        }
        return endings
    }
}

function datekeyExists(d) {
    if (d === undefined || d === null) {
        throw new Error(`
            Cannot instantiate DatekeyHelper. Was not passed a datekey.
        `)
    }
}
function dateToDatekey(d) {
    var y = d.getFullYear()
    var m =
        d.getMonth() + 1 > 9
            ? d.getMonth() + 1
            : `0` + (d.getMonth() + 1).toString()
    var d = d.getDate() > 9 ? d.getDate() : `0` + d.getDate().toString()
    return parseInt(`${y}${m}${d}`)
}
function format(datekey, long, separator) {
    var a = datekey.toString().split('')
    var y = `${a[0]}${a[1]}${a[2]}${a[3]}`
    var m = `${a[4]}${a[5]}`
    var d = `${a[6]}${a[7]}`
    var s = m + separator + d
    var l = m + separator + d + separator + y
    return long ? l : s
}
function validateLength(d) {
    if (d.toString().length !== 8) {
        throw new Error(`
            Cannot instantiate DatekeyHelper. Was passed a
            datekey which is not the right length.
        `)
    }
}
function validateType(d) {
    if (typeof d !== 'number') {
        throw new Error(`
            Cannot instantiate DatekeyHelper. Was passed a
            datekey which is not a number.
        `)
    }
}

module.exports = DatekeyHelper

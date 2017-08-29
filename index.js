var extend = require('extend')
var mapToString = function (item){ return String(item) }
var hasRepeat = function (map, targetMap) {
    map = map || {}
    var keys = Object.keys(map).map(mapToString)
    var targetKeys = Object.keys(targetMap).map(mapToString)
    keys = keys.concat(targetKeys)

    var values = Object.values(map).map(mapToString)
    var targetValues = Object.values(targetMap).map(mapToString)
    values = values.concat(targetValues)

    var words = keys.concat(values)
    var repeatWord
    var findRepeat = words.some(function (item, itemIndex) {
        return words.some(function (word, wordIndex) {
            if (itemIndex === wordIndex) {
                return false
            }
            if (word === item) {
                repeatWord = word
                return true
            }
        })
    })
    return repeatWord?repeatWord: false
}
var get = function(code, key) {
    var self = this
    if (typeof self.map[code]) {
        throw new Error('node_modules/code-dict: not find code (' + code + ') ')
    }
    var keys = Object.keys(self.map[code]).map(function (item) { return String(item) })
    var values = Object.values(self.map[code]).map(function (item) { return String(item) })
    var mergeMap = keys.concat(values)
    var result = ''
    keys.some(function (item) {
        if (item === key) {
            result = self.map[code][key]
        }
    })
    values.some(function (item) {
        if (item === key) {
            result = keys[values.indexOf(key)]
        }
    })
    return result

}
var map = {}
var addCode = function(name, map) {
    var self = this
    var repeat = hasRepeat(self.map[name], map)
    if (repeat) {
        throw new Error('node_modules/code-dict: addCode find repeat code ' + repeat)
    }
    var mergeMap = {}
    extend(true,mergeMap, self.map[name], map)
    self.map[name] = mergeMap
}
module.exports = {
    "get": get,
    addCode: addCode,
    map: map
}

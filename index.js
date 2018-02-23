var extend = require('extend')
var codeMapToString = function (item){
    var output = item.code? item.code: item
    return String(output)
}
var hasRepeat = function (map, targetMap) {
    map = map || {}
    var keys = Object.keys(map).map(codeMapToString)
    var targetKeys = Object.keys(targetMap).map(codeMapToString)
    keys = keys.concat(targetKeys)

    var values = Object.values(map).map(codeMapToString)
    var targetValues = Object.values(targetMap).map(codeMapToString)
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
var get = function(code, key, source) {
    var self = this
    code = String(code)
    if (typeof self.map[code] === 'undefined') {
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
    if (result.code) {
        if (source) {
            return result
        }
        return result.code
    }
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
    "text": function (code, key) {
        return this.get(code, key, true).text
    },
    addCode: addCode,
    map: map
}

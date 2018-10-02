var extend = require('safe-extend')
function CodeDict () {
    var self = this
    self.data = {}
}
CodeDict.prototype.add = function (namespace, data) {
    var self = this
    if (typeof namespace !== 'string') {
        throw new Error('node_modules/code-dict: code.add(namespace, data) namespace must be a string')
    }
    data = extend.clone(data)
    if (['add'].includes(namespace)) {
        throw new Error('node_modules/code-dict: code.add(namespace, data) namespace can\'t be "add"')
    }
    if (self.data[namespace]) {
        throw new Error('node_modules/code-dict: code.add(namespace, data) namespace is existing!')
    }
    // abbreviation
    Object.keys(data).forEach(function (key) {
        var item = data[key]
        if (typeof item !== 'object') {
            item = {
                code: item
            }
        }
        item.key = key
        data[key] = item
    })
    self.data[namespace] = data
    self[namespace] = {
        namespace: namespace,
        key: function (key, full) {
            var target = self.data[this.namespace]
            var output = target[key]
            return full?output:output.code
        },
        code: function (code, full) {
            var target = self.data[this.namespace]
            var codeMap = {}
            Object.keys(target).forEach(function (key) {
                var item = target[key]
                codeMap[String(item.code)] = item
            })
            var output = codeMap[String(code)]
            return full?output:output.key
        }
    }
}
module.exports = new CodeDict()

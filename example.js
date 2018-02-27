var dict = require('./index')
dict.addCode(
    'sms',
    {
        'login': 1,
        'register': 2
    }
)
dict.addCode(
    'type',
    {
        'online': {
            code: '1',
            text: '在线'
        },
        'offline': {
            code: '2',
            text: '离线'
        }
    }
)
console.log(
    dict.get('sms', 'login') // 1
)

console.log(
    dict.get('sms', '1') // login
)

console.log(
    dict.get('type', 'offline') // 2
)
console.log(
    dict.get('type', '2') // offline
)
console.log(
    dict.text('type', 'offline') // 离线
)
console.log(
    dict.text('type', '2') // 离线
)
// console.log(
//     dict.get('sms', 'without')
//     // throw new Error('node_modules/code-dict: not find code (' + code + ') ')
// )

console.log(
    Object.keys(dict.map.type).map(function (key) {
        var item = dict.map.type[key]
        return {
            $key: key,
            code: item.code,
            text: item.text
        }
    })
)

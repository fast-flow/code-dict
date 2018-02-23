var codeDict = require('./index')
codeDict.addCode(
    'sms',
    {
        'login': 1,
        'register': 2
    }
)
codeDict.addCode(
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
    codeDict.get('sms', 'login') // 1
)

console.log(
    codeDict.get('sms', '1') // login
)

console.log(
    codeDict.get('type', 'offline') // 2
)
console.log(
    codeDict.get('type', '2') // offline
)
console.log(
    codeDict.text('type', 'offline') // 离线
)
console.log(
    codeDict.text('type', '2') // 离线
)
// console.log(
//     codeDict.get('sms', 'without')
//     // throw new Error('node_modules/code-dict: not find code (' + code + ') ')
// )

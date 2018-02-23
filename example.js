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
    codeDict.get('sms', 'login')
)

console.log(
    codeDict.get('sms', '1')
)

console.log(
    codeDict.get('type', 'offline')
)
console.log(
    codeDict.text('type', 'offline')
)
// console.log(
//     codeDict.get('sms', 'without')
// )
// console.log(
//     codeDict.get('name', 'without')
// )

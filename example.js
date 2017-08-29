var codeDict = require('./index')
codeDict.addCode(
    'sms',
    {
        'login': 1,
        'register': 2
    }
)

console.log(
    codeDict.get('sms', 'login')
)

console.log(
    codeDict.get('sms', '1')
)
console.log(
    codeDict.get('sms', 'without')
)
console.log(
    codeDict.get('name', 'without')
)

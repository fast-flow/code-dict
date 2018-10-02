var dict = require('./index')
// var dict = require('code-dict')
dict.add('userStatus', {
    'normal': {
        code: 0,
        label: '正常'
    },
    'disable': {
        code: 1,
        label: '禁用'
    }
})
// or abbreviation
dict.add('payStatus', {
    'normal': 0,
    'disable': 1
})

console.log( dict.userStatus.key('normal') )
// { code: 0, label: '正常', key: 'normal' }
console.log( dict.userStatus.code(0) )
// { code: 0, label: '正常', key: 'normal' }
console.log( dict.userStatus.key('disable') )
// { code: 1, label: '禁用', key: 'disable' }

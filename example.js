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
console.log('========= default ===========')
console.log( dict.userStatus.code('normal') ) // 0
console.log( dict.userStatus.key(0) ) // normal
console.log( dict.userStatus.code('disable') ) // 1
console.log('========= full ===========')
console.log( dict.userStatus.code('normal', true) )
// { code: 0, label: '正常', key: 'normal' }
console.log( dict.userStatus.key(0, true) )
// { code: 0, label: '正常', key: 'normal' }
console.log( dict.userStatus.code('disable', true) )
// { code: 1, label: '禁用', key: 'disable' }
console.log( dict.userStatus.array('code') )
// [0, 1]
console.log( dict.userStatus.array('key') )
// ['normal', 'disable']
console.log( dict.userStatus.array() )
/*
    [
      { code: 0, label: '正常', key: 'normal' },
      { code: 1, label: '禁用', key: 'disable' }
    ]
 */

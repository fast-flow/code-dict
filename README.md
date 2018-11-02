# code-dict

## add

```js
var dict = require('code-dict')

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
```
## code&key

```js
console.log('========= default ===========')
console.log( dict.userStatus.code('normal') ) // 0
console.log( dict.userStatus.key(0) ) // normal
console.log( dict.userStatus.code('disable') ) // 1
```

## full

```js
console.log('========= full ===========')
console.log( dict.userStatus.code('normal', true) )
// { code: 0, label: '正常', key: 'normal' }
console.log( dict.userStatus.key(0, true) )
// { code: 0, label: '正常', key: 'normal' }
console.log( dict.userStatus.code('disable', true) )
// { code: 1, label: '禁用', key: 'disable' }
```

## array

```js
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

```

## 实际应用

```js
var dict = require('code-dict')
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
// filter response data
function getUser (cb) {
    $.ajax({...}).done(function (res) {
        /*
            res = {
                name: 'nimo',
                status: 0
            }
        */
        res.status = dict.userStatus.key(res.status)
        // res.status = 'normal'
        cb(res)
    })
}
getUser(function (res) {
    console.log(res)
    /*
        {
            name: 'nimo',
            status: 'normal'
        }
    */
})
// replace request parmas
function changeUserSettings (status) {
    var sendData = {
        status: dict.userStatus.code(status)
    }
    /*
        sendData = {
            status: 1
        }
    */
    $.ajax({
        data: sendData
    })
}
changeUserSettings('disable')
```

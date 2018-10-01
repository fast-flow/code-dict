# code-dict

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


dict.userStatus.key('normal') // {code:0, label: '正常', key: 'normal'}
dict.userStatus.code(0) // {key: 'normal', label: '正常', code: 0}

// filter response data
function getUser (cb) {
    $.ajax({...}).done(function (res) {
        /*
            res = {
                name: 'nimo',
                status: 0
            }
        */
        res.status = dict.userStatus.code(res.status).key
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
        status: dict.userStatus.key(status).code
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

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
// filter response data
function getUser (cb) {
    $.ajax({...}).done(function (res) {
        /*
            res = {
                name: 'nimo',
                status: 0
            }
        */
        res.status = dict.userStatus.code(res.status)
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
        status: dict.userStatus.key(status)
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

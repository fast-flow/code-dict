# code-dict

```js
var codeDict = require('code-dict')
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
    codeDict.text('type', 'offline') // 离线
)
console.log(
    codeDict.text('type', '2') // 离线
    // 不建议这么做，应该通过 https://onface.github.io/better-api 将返回数据封装成 'offline'
    // 再通过 codeDict.text('type', 'offline') 获取数据
)
console.log(
    codeDict.get('sms', 'without') // throw new Error('node_modules/code-dict: not find code (' + code + ') ')
)
```

你还可以遍历数据用于渲染

```js
Object.keys(dict.map.type).map(function (key, item) {
    return {
        $key: key,
        code: item.code,
        text: item.text
    }
})
```

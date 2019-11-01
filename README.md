## 1. useState(0)
useState接收的参数：状态的初始值<br>
useState(0):返回数组 <br>
`const [ count, setCount ] = useState(0) //声明了一个变量count,初始值为0;并且提供了可以改变count状态的函数setCount`
等价于<br>
```
let _useState = useState(0)
let count = _useState[0] //当前状态值
let setCount = _useState[1] //改变状态值的方法函数
```

## 2. setCount
`<button onClick={()=>{setCount(count+1)}}>click me</button>`
setCount函数:接收的参数是修改过的状态值。React会重新渲染组件。

## 3. 多状态声明的注意事项
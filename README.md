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
React是根据useState出现的顺序来确定的 <br>
React Hooks不能出现在条件判断语句中,必须有完全一样的渲染顺序

## 4. useEffect()代替生命周期函数 
useEffect传入一个匿名函数,React要渲染组件时,它会记住用到的副作用,然后再执行一次 <br>
componentDidMount 以及 componentDidUpdate <br>
useEffect中定义的函数:异步


## 5. useEffect() 参数中的匿名函数,可以return一个匿名函数,用于解绑(相当于componentWillUnmount生命周期中执行的代码)

## 6. useEffect第二个参数([]表示,只有组件销毁时,才会执行解绑函数。如果是[count],即count变化时,执行解绑函数)
```
function Index() {
    useEffect(() => {
        console.log('useEffect=>hello Index页面')
        return () => {
            console.log('useEffect=>bye bye Index页面')
        }
    },[])
    return (
        <h3>hh.com</h3>
    )
}
```
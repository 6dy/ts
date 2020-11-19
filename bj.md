### TypeScript 增加了代码的可读性和可维护性
* 
### TypeScript 非常包容
* TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
* 即使不显式的定义类型，也能够自动做出类型推论

### 基础类型
* boolean
```
let isDone: boolean = false
// 使用构造函数Boolean创造的对象不是布尔值
```
* void
> JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
```
function warnUser(): void {
    console.log("This is my warning message");
}
```
> 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
```
let a: void = undefined
let a: void = 'undefined' // 报错，这是字符串
```
> 跟它相似的类型还有undefined 和 null 在不开启严格空检查的情况下 --strictNullChecks，他们可以赋值给所有已经定义过***其他类型***的变量。 也就是说他们是所有类型的子类型
```
let a: undefined = undefined
let a: null = null
```
* null & undefined 
> 是所有类型的子类型，void类型不能赋值给number
```
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;
let u: undefined;
let num: number = u;
```
* number
> TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。支持十进制和十六进制字面量二进制和八进制字面量。
```
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```
* string
> 单双引'' ""，模板字符的都被视为字符串
```
let str:string = ''
```

### 数组类型
* 最简单的方法是使用类型 + []来表示数组：
```
const arr: number[] = [1,2,3]
const arr2: string[] = ['1','2']
```
* 数组泛型定义方式
```
const arr2: Array<number> = [1,2,3,3]
const arr2: Array<string> = [1,2,3,3]
```
* 接口表示数组
```
interface NumArr {
    [index: number]: number;
}
let numArr: NumArr = [1,2,3];
```
* any 类型数组
```
let list:any[] = [1,"z",{}]
```
* 元组类型声明
``` 
// 表示一个确定数组长度和类型的写法
const arr:[string,number] = ['2',3]
```


Function.prototype.before = function(beforeFn){
    return (...args)=> { //箭头函数里不可以直接使用arguments
        beforeFn();
        this(...args); //展开运算符
    }
}

const say= (...args) => { //剩余运算符
    console.log('say fn',args); 
}

const newSay = say.before(()=>{
    console.log('before fn');
})

newSay(1,2,3);


const checkType = (type) => {
    return (content) => {
        return Object.prototype.toString.call(content) === `[object ${type}]`
    }
}

let types =['Number','String','Boolean'];
let utils = {}
types.forEach(type =>{
    utils['is' + type] =checkType(type)
})

console.log(utils.isNumber(111))

const after= (times,fn) => {
    return () =>{
        console.log(times)
        if(--times === 0 ){
            return fn();
        }
    }
}

fn =after(3,() => {
    console.log('over');
})

fn()
fn()
fn()




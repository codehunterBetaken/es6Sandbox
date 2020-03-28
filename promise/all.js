const fs= require('fs');

const after = (time,fn) => () => --time ===0 && fn();

let newAfter = after(2,()=>{console.log('ok');});

fs.readFile("name.txt",'utf8',(err,data) => {
    console.log(data);
    newAfter();
})

fs.readFile("age.txt",'utf8',(err,data) => {
    console.log(data);
    newAfter();
})
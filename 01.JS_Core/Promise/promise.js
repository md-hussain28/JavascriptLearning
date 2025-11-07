// 1. Write a JavaScript function that returns a Promise that resolves with a "Hello, World!" message after 1 second.

const getPromise =()=>( 
    new Promise((res,rej)=>{
        setTimeout( ()=>{
            console.log("inside"); 
            res("Success")
        },1000)
    })
)


const promise=getPromise()
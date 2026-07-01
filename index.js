// console.log("hello")

// function add(a,b){
//     console.log(a+b)
//     return a+b
// }
// add(2,3)
// const myFun = () => {
//     console.log("here gfrom arrow function")
// }
// myFun()


// console.log("here");


// setTimeout(() => {
//   console.log("hello");
// });


const myPromise = new Promise((resolve, reject)=>{
    let success = true;
    throw new Error("here I am getting promise Error")
    if(success){
        resolve("mu code works")
    }else{
        reject("my code Won't work")
    }
})
// myPromise
// .then((resolve)=>console.log(resolve, "here promise resolve"))
// .catch((reject)=> console.log(reject, "here promise Got Rejected"))


let timeInstant = setTimeout(() => {
  console.log("hello from time");
});

const arryfunc = async() => {
    try {
        await myPromise;
        await console.log("here")
    } catch (error) {
        console.log(error.message, "here from error")
    }
    finally{
        console.log("finally this was executed compulsory")
    }
}

arryfunc()
// console.log(myPromise)


// const getData = fetch()

/**
 hello
 5
 "here gfrom arrow function"
 "mu code works here promise resolve"
 "here"
 "hello"
 */



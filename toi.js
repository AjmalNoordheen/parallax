// const promise1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     let k = true
//     if(k){
//         resolve('success promise 1')
//     }else{
//         reject('Error promise 1')
//     }
//    },2000)
// })
// const promise2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     let k = true
//     if(k){
//         resolve('success promise 2')
//     }else{
//         reject('Error promise 2')
//     }
//    },500)
// })

// Promise.race([promise1,promise2]).then((resolve)=>{
//     console.log(resolve)
// }).catch((reject)=>{
//     console.log(reject)
// })

// CLosure=====
// function foo(outer_arg) {

// 	function inner(inner_arg) {
// 		return outer_arg + inner_arg;
// 	}
// 	return inner;
// }
// let get_func_inner = foo(5);
// console.log(get_func_inner(4));
// console.log(get_func_inner(3));

// function greet() {
//     let name = 'ajmal'
//     console.log(this.value)
//     console.log(`Hello, ${name}!`);
//   }
  
//   const person = { name: 'John' };
//   greet()
//   greet.apply(person); // Outputs: Hello, John!
 
// let a = 10
// let b = 9

// let result = a & b;
// console.log(result);


// let b = {
//     name:'ajmal',
//     age:50
// }
// console.log(Object.entries(b))






export const customFetch = (time, task) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(task)
        }, time)
    })
}

// export const myPromise = new Promise (
//     (resolve,reject) => {
//         var arr = [products]

//         if(arr.length>0) {
//             resolve(arr)
//         }else {
//             reject("Error al cargar los productos!")
//         }
//     })
//     myPromise.then ( (arr)=>console.log(arr) )
//     .catch ((error) => console.log("ERROR"));


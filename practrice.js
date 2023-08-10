function chrome(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            reject('404')
        }, 100)
    })
}

function fun2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Working')
        },100)
    })
}

function onSuccess(data){
    console.log(data)
} 

function onError(errorCode){
    console.log(`ERROR: ${errorCode}`)
}


chrome()
.then(fun2)
.then(onSuccess)
.catch(onError)
function houseOne(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('House One')
        }, 1000)
    })
}
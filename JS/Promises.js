const PromiseOne = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task completed");
        resolve()
    },1000)
})

PromiseOne.then(()=> {
    console.log("Promise consumed")
    console.log("-----------------------------------------------------------------------------------------------------");
})

const paramPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({name : "Sahadev" ,placement : "SocialPilot"})
    },1000)
})

paramPromise.then((data) => {
    console.log(data)
    console.log("-----------------------------------------------------------------------------------------------------");
})


const thenChaining = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username : "sahadev " , placement : "Good company"})
    }, 1000);
})

thenChaining.then((data)=> {
    console.log(data);
    return data.username
}).then((username) => {
    console.log(`username is by then chaining ${username}`)
    console.log("-----------------------------------------------------------------------------------------------------");
})

const errorPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            data = { myName: 'sahadev', humble: true }
            resolve(data)
        } else {
            reject("Something went wrong")
        }
    }, 1000);
})

errorPromise.then((data) => {
    console.log("Error promise data",data)
    console.log("-----------------------------------------------------------------------------------------------------");
}).catch((err) => {
    console.log(err)
    console.log("-----------------------------------------------------------------------------------------------------");
})


const finnalyPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            data = { myName: 'sahadev', humble: true }
            resolve(data)
        } else {
            reject("Something went wrong")
        }
    }, 1000);
})

finnalyPromise.then((data) => {
    console.log("finally promies data ",data)
    console.log("-----------------------------------------------------------------------------------------------------");
}).catch((err) => {
    console.log(err)
    console.log("-----------------------------------------------------------------------------------------------------");
}).finally(() => {
    console.log("Finally will always execute")
    console.log("-----------------------------------------------------------------------------------------------------");
})



const asyncPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            console.log("\n\n\n Async Await")
            data = { myName: 'sahadev', humble: true }
            resolve(data)
        } else {
            console.log("\n\n\n Async Await")
            reject("Something went wrong")
        }
    }, 1000);
})

async function handleAbovePromise() {
    try {
        const response = await asyncPromise
        console.log("async await data",response)
    } catch(err) {
        console.log(err)
    }
}

handleAbovePromise()

function fakeApi () {
    setTimeout(async () => {
        try {
            console.log("\n\n  FAKE API")
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const dataa = await response.json()  //response.json() also will take some time so we have to make it await
            console.log("async await method data",dataa)
            // console.log(response)
        } catch (err) {
            console.log(err)
        }
    },1000)
}
fakeApi()


setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("then chaining method data",data)
    })
    .catch((err) => {
        console.log(err)
    })
},1000)
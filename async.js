function delay(ms, result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result)
        }, ms)
    })
}

getApiResult()

async function fetchApi(url) {
    
}

async function getApiResult() {
    // console.log(await fetchApi('http://localhost:3000/api/one'));
    // console.log(await fetchApi('http://localhost:3000/api/two'));
    // console.log(await fetchApi('http://localhost:3000/api/three'));
    // console.log(await fetchApi('http://localhost:3000/api/four'));
    // console.log(await fetchApi('http://localhost:3000/api/five'));

    let response = await fetch('http://localhost:3000/api/one')
    if (response.ok) {
        let text = await response.text()
        console.log(text);
        await delay(2000)
        response = await fetch('http://localhost:3000/api/two')
        if (response.ok) {
            let text = await response.text()
            console.log(text);
            await delay(2000)
            response = await fetch('http://localhost:3000/api/three')
            if (response.ok) {
                let text = await response.text()
                console.log(text);
                await delay(2000)
                response = await fetch('http://localhost:3000/api/four')
                if (response.ok) {
                    let text = await response.text()
                    console.log(text);
                    await delay(2000)
                    response = await fetch('http://localhost:3000/api/five')
                    if (response.ok) {
                        let text = await response.text()
                        console.log(text);
                    }
                }
            }
        }
    }
}

// fetch('http://localhost:3000/api/one').then(response => {
//     if (response.ok) {
//         return response.text()
//     }
// }).then(text => {
//     console.log(text);
//     return delay(2000, 'Some res')
// }).then((result) => {
//     console.log(result);
//     return fetch('http://localhost:3000/api/two')
// }).then(response => {
//     if (response.ok) {
//         return response.text()
//     }
// }).then(text => {
//     console.log(text);
//     return delay(2000, 'Some res 2')
// }).then((result) => {
//     console.log(result);
//     return fetch('http://localhost:3000/api/three')
// }).then(response => {
//     if (response.ok) {
//         return response.text()
//     }
// }).then(text => {
//     console.log(text);
//     return delay(2000, 'Some res 3')
// }).then((result) => {
//     console.log(result);
//     return fetch('http://localhost:3000/api/four')
// }).then(response => {
//     if (response.ok) {
//         return response.text()
//     }
// }).then(text => {
//     console.log(text);
//     return delay(2000, 'Some res 4')
// }).then((result) => {
//     console.log(result);
//     return fetch('http://localhost:3000/api/five')
// }).then(response => {
//     if (response.ok) {
//         return response.text()
//     }
// }).then(text => {
//     console.log(text);
// })

// delay(1000, 'One').then(result => {
//     console.log(result);
//     return delay(1000, 'Two')
// }).then(result => {
//     console.log(result);
//     return delay(1000, 'Three')
// }).then(result => {
//     console.log(result);
//     return 'Four sync'
// }).then(result => {
//     console.log(result);
//     return delay(1000, 'Five')
// }).then(result => {
//     console.log(result);
// })

// const promiseEx = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Some value of resolve')
//         // console.log('Resolve');
//     }, 5000)
//     // setTimeout(() => {
//     //     resolve('Some value of resolve 2')
//     //     console.log('Resolve 2');
//     // }, 2000)
//     setTimeout(() => {
//         reject('Some value of reject')
//         console.log('Reject');
//     }, 4000)
// })

// promiseEx.then((result) => {
//     console.log(result);
//     return 'One'
// }).then((result) => {
//     console.log(result);
// }).catch(error => {
//     console.error(error)
// })



// Callback hell
// setTimeout(() => {
//     console.log('One');
//     setTimeout(() => {
//         console.log('Two');
//         setTimeout(() => {
//             console.log('Three');
//         }, parseInt(Math.random() * 1000))
//     }, parseInt(Math.random() * 1000))
// }, parseInt(Math.random() * 1000))

// console.log('Four')

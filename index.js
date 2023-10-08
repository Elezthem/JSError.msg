/*getData('https://jsonplaceholder.typicode.com/todos/3')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
*/

/*const myAsyncFn = async () => {
    throw new Error('Error 010011100010101001100100010101100101')
}

myAsyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))
*/




/*const myAsyncFn = async () => {
    throw new Error('Error 010011100010101001100100010101100101')
}

myAsyncFn()
*/


/*const NewComment {
    constructor(text) {
        this.text = text
        this.votes = 0
    }

    upvote() {
        this.votes += 1
    }
}

const fstComment = new NewComment('New Comment! Go votes?')

console.log(fstComment)
*/

/*
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 10000))

const asyncFn = async () => {
    console.log('Timer started!')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Time ended', endTime - startTime)
}

asyncFn()
*/


const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

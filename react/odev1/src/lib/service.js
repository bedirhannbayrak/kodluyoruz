import axios from "axios";

async function getData (userId) {
    const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {data:posts} =  await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    console.log("user: " , data)
    console.log("posts: " , posts)
    return data
}

export default getData;
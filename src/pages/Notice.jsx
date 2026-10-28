import { useEffect, useState } from "react"

const Notice = () => {
    const [data,setData] =useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((Response) => Response.json())
        .then((result)=> {
            setData(result)
            console.log(result);
            
        })
        .catch((error) => console.error(error))
    },[]);

    return(
        <div>
            <ul>
                <li key={posts.id}>
                    <Link to={`/${post.id}`}>{post.title}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Notice
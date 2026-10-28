import { useState } from "react";

const LikeButton = () => {

    const [ count, setCount ] = useState(0);

        const increment = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h2>좋아요 : {count}</h2>
            <button onClick={increment}>👍</button>
        </div>
    )
}

export default LikeButton
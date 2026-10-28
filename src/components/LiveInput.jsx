import { useState } from "react";

const LiveInput = () => {
    // 빈 문자열 초기화
    const [text, setText] = useState("");

    // 입력값 변경 함수
    const handleInputChange = (event) => {
        setText(event.target.value);
        //console.log(event.target.value);
    }

    return(
        <div>
            <input type="text"
            placeholder="텍스트를 입력하세요"
            value={text}
            onChange={handleInputChange} />
            <p>입력값 : {text}</p>
        </div>
    )

}

export default LiveInput
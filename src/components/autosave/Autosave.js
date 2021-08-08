import React, { useEffect, useState } from "react";

const Autosave =()=>{
    const [text,setText] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    const [text2,setText2] = useState('');
    
    useEffect(()=>{
        const timerID = setTimeout(()=>{
            setDebouncedText(text)
        },1000);
        return ()=>{
            clearTimeout(timerID);
        }
    },[text])
    
    useEffect(()=>{
        if(debouncedText) handleAPI();
    },[debouncedText]);

    const handleAPI=()=>{
        console.log('handleAPI')
    }
return(
    <div>
        <label>Enter Text</label>
        <input type="text" placeholder='Autosave' onChange={(e)=>setText(e.target.value)}></input>
        <input type="text" onChange={(e)=>setText2(e.target.value)}></input>
        <p>Autosave Text : {debouncedText}</p>
        <p>Text2 : {text2}</p>
    </div>
)
}
export default Autosave
import React , {useEffect,useState} from 'react'

function initial(){
   // console.log('initial')
    return 5
}
export default function UseEffect (){
    const [windowW,setWindowW] = useState(window.innerWidth)
    const[count, setCount] =useState(initial()) // everytime run when render
    const[count2, setCount2] =useState(()=>initial()) // one time run on initialize

const handlesize = ()=>{ // it is not working initilaize 
   // console.log('cal')
    setWindowW(window.innerWidth)
}

useEffect(()=>{
    window.addEventListener('resize',handlesize)
    //console.log('calisti')
    return () =>{
        window.removeEventListener('resize',handlesize)
    }

},[])

useEffect(()=>{

    //console.log('calisti')
    return () =>{
      //  setCount(count-10)
      
    console.log('unmount',count2) 
    }

},[])
 function decrement (){
setCount(count-1)
setCount(count-1) // this will not work
setCount(prevcount => prevcount-1)
setCount2(count2+1)
}

const a="merhaba";
//console.log('a',windowW)

return(
    <div className='center'>
    <div>{windowW}</div>
    <button onClick={decrement}> - </button>
    <span> {count}</span>
    <span> {count2}</span>
    </div>
)
}
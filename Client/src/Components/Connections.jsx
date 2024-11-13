import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Connections = () => {
    const [info, setInfo] = useState([])
    const [item, setitem] = useState('')
    const endpoint = 'http://localhost:5000/home'
    const url = 'http://localhost:5000/submit'
    
    const fetchInfo = () => {
        axios.get(endpoint)
        .then((result)=>{
            let data = result.data
            setInfo(data)
            console.log(result);
            
        })
        .catch((err) => {
            console.log(err);
            
        })

    }

    const submitInfo = () =>{
        if(item === ''){
            alert("Fill in value")
        }else{
            // console.log(item);
            let obj = {item}
            axios.post(url, obj)
            .then(response =>{
                console.log(response);
                
            }).catch((err) =>{
                console.log(err);
                
            })
        }
    }
  return (
    <>
    <div>connection</div>
    <button onClick={fetchInfo}>Get information</button>
    <input type="text" name='item' value={item} onChange={(e)=>{setitem(e.target.value)}} />
    <button onClick={submitInfo}>Submit</button>
    {
        info.map((item) => (
            <div key={item.id}>
            <h1>{item.id}</h1>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
        ))
    }
    </>
  )
}

export default Connections
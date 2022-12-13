import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


function Read() {
    const [APIData, setAPIData]= useState([])
    useEffect(()=>{
        axios.get('https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds')
        .then((response)=>{
            setAPIData(response.data)
        })
    }, [])

    function getData(){
        axios.get('https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds')
        .then((getData)=>{
            setAPIData(getData.data)
        })
    }

function setData(data){
    // console.log(data);
    let {id, name, image, description}= data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Image', image);
    localStorage.setItem('Description', description);

}

function deleteData(id){
    axios.delete(`https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds/${id}`)
    .then(()=>{
        getData();
    })
   
}


  return (
    <div>
        <div className='data-container'>
        {APIData.map((data)=>{
                        return(
                            <div className='birds' key={data.id}>
                            <h3>{data.name}</h3>
                            <img src={data.image} alt="bird-image"/>
                             <p>{data.description}</p>
                             <Link to ='/update'>
                             <button className='update-btn' onClick={()=> setData(data)}> Update Bird</button>
                             </Link>
                             <button className='delete-btn' onClick={()=> deleteData(data.id)}>Delete</button>
                            </div>  
                        ) 
                    })}
        </div>
    </div>
  )
}

export default Read
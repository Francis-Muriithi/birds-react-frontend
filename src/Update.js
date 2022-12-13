import React, {useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

function Update(){

   
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const [id, setID] = useState(null)

useEffect(()=>{
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'))
    setImage(localStorage.getItem('Image'))
    setDescription(localStorage.getItem('Description'))
}, [])

function updateData(){
    axios.put(`https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds/${id}`, {
        name, 
        image,
        description
    })
}



    return (
        <Form className='create-form'>
    <Form.Field>
      <label>Bird's Name</label>
      <input placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Image_url</label>
      <input placeholder='Image' value={image} onChange={(e)=> setImage(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <label>Bird Description</label>
    <input placeholder='description' value={description}  onChange={(e)=> setDescription(e.target.value)}/>
    </Form.Field>
    <Button type='submit' onClick={updateData}>Submit</Button>
  </Form>
    )
}
 
export default Update
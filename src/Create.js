import React, {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

function Create(){

    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    function postData(){
        axios.post ('https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds', {
        name, 
        image,
        description
        })
    }

    return (
        <Form className='create-form'>
    <Form.Field>
      <label>Bird's Name</label>
      <input placeholder='Name' onChange={(e)=> setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Image_url</label>
      <input placeholder='Image' onChange={(e)=> setImage(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <label>Bird Description</label>
    <input placeholder='description' onChange={(e)=> setDescription(e.target.value)}/>
    </Form.Field>
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
    )
}
 
export default Create
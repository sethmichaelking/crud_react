import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
  const [data, setRows] = useState([])
  const apiEndPoint = '/api/posts'

  useEffect(()=>{
    const fetchRows = async() =>{
      const response = await axios.get(apiEndPoint)
      const data = await response.data
      setRows(data)
    }
    fetchRows()
  }, [])

    //add post
   const AddPost = async () =>{
    const post = {title:'newPost', body: 'efejfhjehfe'}
    await axios.post(apiEndPoint, {
      post
    })
    setRows([...data, post])
   }

  //Delete Task
const handleDelete = async(id) =>{
  const deleteEndPOst = `/api/posts/${id}`
  await axios.delete(deleteEndPOst)
  setRows(data.filter(p => p.id !== id))
}

    return (
    <div>
      <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {data.map(row =>  
        <tr key={row.id}>
           <td>{row.title}</td>
            <td>{row.body}</td>
            <td> <button onClick={()=> handleDelete(row.id)}> DELETE</button></td>
            <td> <button onClick={AddPost}> ADD</button></td>
         </tr>
      )}
    </tbody>
       </table>
    </div>
  )
}

export default Home
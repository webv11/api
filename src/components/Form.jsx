
import React, { useEffect, useState } from 'react'
let Form = () => {
 const [userId,setUserId]=useState("");
 const [id,setId]=useState("");
 const [title,setTitle]=useState("");
 const [body,setBody] = useState("");
function saveData()
{
  let data={userId,id,title,body}
// console.warn(data);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST YOUR DATA</h1>  
      <label>id</label>
      <input type="text" name="userId" value={userId} onChange={(e)=>{setUserId(e.target.value)}}  /> <br /> <br />
      <label>userId</label><input type="text" name="id"  value={id} onChange={(e)=>{setId(e.target.value)}} /> <br /> <br />
      <label>title</label><input type="text" name="title"  value={title} onChange={(e)=>{setTitle(e.target.value)}}/> <br /> <br />
      <label>post</label><input type="text" name="body"  value={body} onChange={(e)=>{setBody(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
      
    </div>
  );
}

export default Form;
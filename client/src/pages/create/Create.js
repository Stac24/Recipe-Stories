import './create.css'
import { useState } from "react";
import axios from "axios";

export default function Create() {
    const [title, setTitle] = useState("") 
    const [des, setDes] = useState("")
    const [name, setName] = useState("")
    const [file, setFile] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPost = {
            name,
            title,
            des,  
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.img = filename;
            try{
                await axios.post("/upload", data)
            }catch(err){
                console.log(err)
            }
        }
        try{
            await axios.post("/post", newPost);
            window.location.replace("/");
        } catch(err){
            console.log(err)
        } 
    };
  return (
    <div className='create' data-testid='createpost'>
        {file && (
            <img
                className='createImg'
                src={URL.createObjectURL(file)}
                alt=""
                />
        )}
        <form className='createForm' onSubmit={handleSubmit}>
            <div className='createFormGroup'>
                <label htmlFor='fileInput'>
                    <div className='addImg'>
                        <h2 className='choose'>Choose Image</h2>
                        <i className=" createIcon fa-regular fa-square-plus"></i>
                    </div>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e => setFile(e.target.files[0])}/>
            </div>
            <div className='createFormGroup'>
                <input type="text" placeholder="Name of Dish" className='createInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className='createFormGroup'>
                <textarea placeholder='Tell us about your recipe...' type='text' className='createInput createText' onChange={e=>setDes(e.target.value)}></textarea>
            </div>
            <div className='createFormGroup'>
                <textarea placeholder='Author' type='text' className='createInput createText' onChange={e=>setName(e.target.value)}></textarea>
            </div>
            <button className='createSubmit' type="submit">Publish</button>
        </form>
    </div>
  )
}

import "./singlePost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [posting, setPosting] = useState({});
    const folder = "http://localhost:8000/photos/"
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [modify, setModify] = useState(false);

    useEffect(() => {
        const getPosting = async () =>{ 
            const res = await axios.get("/post/" + path);
            setPosting(res.data[0]);
            setTitle(res.data[0].title);
            setName(res.data[0].name);
            setDes(res.data[0].des);
        };
        getPosting()
    }, [path]);

    const handleDelete = async() => {
        try{
            await axios.delete("/post/" + path);
            window.location.replace("/");
        } catch(err){
            console.log(err)
        } 
    };

    const handleUpdate = async() =>{
        try{
            await axios.put("/post/" + path,{
                title,
                name, 
                des,
            });
            window.location.reload();
        } catch(err){
            console.log(err)
        } 
    };

  return (
    <div className="singlePost" data-testid='single'>
        <div  className="wrapper">
            {posting.img && (
                <img 
                    src ={folder + posting.img}
                    alt = ""
                    className="singlePostImg"
                />
            )} {
                modify ? <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="singlePostTitleInput" autoFocus/> : (
                <h1 className="singlePostTitle" data-testid='title'>
                {posting.title}
                <div className="edit">
                    <i className ="singlePostIcon fa-solid fa-user-pen" onClick={()=>setModify(true)}></i>
                    <i className ="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
            </h1>)
            }
            {
                modify ? <textarea type="text" value={des} onChange={(e)=>setDes(e.target.value)}className="singlePostDescInput"/> : 
                <p className="singlePostDesc">{posting.des}</p>
            }
             <div className="singlePostInfo">
                {
                    modify ? <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="singlePostNameInput"/> :
                    <span className="singlePostName">
                    Author: <b data-testid="name">{posting.name}</b>
                    </span>
                }
            </div>
            {modify && (
                 <button className="singlePostButton" onClick={handleUpdate}>Update</button>
            )}
        </div>
    </div>
  )
}

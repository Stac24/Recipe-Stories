import "./post.css"
import {Router,BrowserRouter, Link} from "react-router-dom"
import Single from "../../pages/single/Single"
import SinglePost from "../singlePost/SinglePost"

export default function Post({post}) {
  const folder = "http://localhost:8000/photos/"
  return (
    <div className='post' data-testid='post'>
      {post.img && (
          <img 
          className="postImg"
          src={folder + post.img}
          alt=""
          />
      )}
          <div className="postInfo">
            <Link to={`/post/${post.id}`} className="link">
              <span className="postTitle" data-testid='title'>{post.title}</span>
            </Link>
            <span className="postAuth" data-testid='name'>{post.name}</span>
          </div>
          <p className="postDescription" data-testid='des'>{post.des}</p>
    </div>
  )
}

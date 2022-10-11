import "./posts.css"
import "../post/Post"
import Post from "../post/Post"

export default function Posts({ posts }) {
    return (
        <div data-testid="posts" className="posts">
            {posts.map((p) => (
                <Post post={p}/>
            ))}
        </div>
    )
}
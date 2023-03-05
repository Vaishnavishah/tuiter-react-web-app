import PostItem from "./PostItem.js"
import posts from "./posts.js"

const PostList = () => {
    return(`
        <div>
            ${
                posts.map( p => {return(PostItem(p))} ).join('')
            }
        </div>
    `);
}

export default PostList;
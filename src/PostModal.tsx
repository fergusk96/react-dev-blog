import { useState } from "react";
import Post from "./Post";
import PostList from "./PostList";


const PostModal = () => 
{    
  
  const [post, setPost] = useState();
  const [postSelected, setPostSelected] = useState(false);

  const updatePostSelected = (val:boolean) => {
    setPostSelected(val);
  }
  
  return(<div>
        
        <PostList post={post} 
        postSelected={postSelected} 
        updatePostSelected={updatePostSelected}/>
        <Post
        post={post} 
        postSelected={postSelected} 
        updatePostSelected={updatePostSelected}
        />
        </div>
    );
  }

export default PostModal;
  
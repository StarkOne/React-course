import React from 'react';
import { Link } from "react-router-dom";


const Posts = () => {
  return (
    <div>
      <Link to="/posts/1/vlad">post 1</Link><br/>
      <Link to="/posts/2/stark">post 2</Link><br/>
      <Link to="/posts/3/pro">post 3</Link>
    </div>
  )
}
export default Posts;
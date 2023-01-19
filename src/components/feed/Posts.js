import React, {useState, useEffect} from 'react'
import { database } from '../../Firebase';
import CircularProgress from '@mui/material/CircularProgress';
import  Videos from './Videos'
import './posts.css'

function Posts(userData) {
    const [posts,setPosts] = useState(null);
    useEffect(() => {
      let parr=[]
      const unsub = database.post.orderBy('createdAt','desc').onSnapshot((snapshot)=>{
        // parr=[]
        snapshot.forEach((doc)=>{
            let data = {...doc.data(),postId:doc.id}
            parr.push(data)
        })
        setPosts(parr)
        console.log(parr)
        })
        return unsub
      }, [])
            console.log(posts)
            // console.log(props.user.username)
  return (
    <div className='postContainer'>
        {
           posts ==null ||   userData==null? <CircularProgress/> :
            <div className='video-container'>
                {
                   posts.map((post, index)=>{
                    return <div key={index} className="video">
                         <Videos url={post.postUrl} />
                        </div>
                   })
                    
            }
            </div>

        }
    </div>
  )
}

export default Posts

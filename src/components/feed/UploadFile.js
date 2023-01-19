import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import { MovieCreation } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import {v4 as uuidv4} from 'uuid'
import { storage, database } from "../../Firebase";

function UploadFile(props) {
    const [error, setError] = useState('');
    const [loding, setLoding]= useState(false);
    

    const handleChange= async(file)=>{
        if(file==null){
            setError('please select a file first');
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        if(file.size/(1024*1024)>100){
            setError('file size is too large');
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        

        let uid = uuidv4()
        setLoding(true)
        const uploadTask = storage.ref(`/post/${uid}/${file.name}`).put(file);
        uploadTask.on('state_changed', fn1, fn2, fn3);
       function fn1(snapshot) {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
      }
      function fn2(error) {
        setError(error.message);
        setTimeout(()=>{
          setError('')
        },2000);
        setLoding(false);
        return;
     }
      function fn3() {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
      console.log(url);
      // database
     let obj={
        likes:[],
        commnets:[],
        postId:uid,
        postUrl: url,
        userName:props.user.username,
        userProfile: props.user. profileUrl,
        userId: props.user.userId,
        createdAt:database.getTimeStamp(),
    }
      database.post.add(obj).then(async(ref)=>{
        let res =await database.users.doc(props.user.userId).update({
            postIds : props.user.postIds !=null ? [...props.user.postIds,ref.id]: [ref.id]
        })
      }).then(()=>{
        setLoding(false)
      }).catch((err)=>{
        setError(err)
        setTimeout(() => {
            setError('')
        }, 2000);
        setLoding(false)
      })
      
    });
    setLoding(false);
    }
    }
  return (
    <div>
      {
        error!=''?<Alert severity="error">{error}</Alert>:
        <div>
            <input type="file" accept='video/*' id="uplad-input"onChange={(e)=>handleChange(e.target.files[0])} style={{display:'none'}} />

            <label htmlFor="uplad-input">
            <Button variant="outlined"
             color="secondary"
             component='span'
             disabled={loding} >
              <MovieCreation />
                  &nbsp;Upload  Video
           </Button>
            </label>
            {
                loding && <LinearProgress color="secondary" style={{marginTop:'2%'}} />
            }
        </div> 

        

      }
    </div>
  )
}

export default UploadFile

import React ,{useEffect, useState} from 'react';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import UploadFile from './UploadFile';
import Posts from './Posts'
import { database } from '../../Firebase';

function Feeds() {
  const {user,logout} = useContext(AuthContext);
  const [userdata, setUserdata] = useState('')
  useEffect(() => {
    const unsub= database.users.doc(user.uid).onSnapshot((snapshot)=>{
      setUserdata(snapshot.data())
    })
  
    return () => {
      unsub()
    }
  }, [user])
  

  return (
    <div  style={{display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
      <div className='comp'style={{width:'50%'}}>
        <h1>Welcome to Feeds</h1>
        <button onClick={logout}>Logout</button>
        </div>
      
        <UploadFile user={userdata}/>
        <Posts user={userdata}/>
    </div>
  )
}

export default Feeds

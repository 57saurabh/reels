import * as React from "react";
import {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import { Alert } from "@mui/material";
import "./signUp.css"
import { storage, database } from "../../Firebase";
import { Link, useHistory, useNavigate } from "react-router-dom";
import insta from '../../assets/instagram_logo.png'
import { grey } from "@mui/material/colors";
import { CloudUpload } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const useStyles = makeStyles({
  text1:{
    color: 'grey',
    textAlign: 'center',
  },
  card2:{
    height:'5vh',
    marginTop:'2%',
  }
});

export default function SignUp() {
  
  const classes = useStyles();
    // console.log(classes);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const [loding, setLoding] = useState(false)
    const history= useNavigate()
    const {signup} = useContext(AuthContext);

    const handleClick = async()=>{
      if(file==null){
        setError("please upload Profile image first !!");
        setTimeout(()=>{
          setError('')
        },2000);
        return;
      }
      try{
        setError('')
        setLoding(true)
          let userobj = await signup(email,password)
          let uid =userobj.user.uid
          console.log(uid);

          // storage
          const uploadTask = storage.ref(`/user/${uid}/profileImage`).put(file);
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
        database.users.doc(uid).set({
          userId: uid,
          email: email,
          username: name,
          createdAt: database.getTimeStamp(),
          profileUrl: url,
        
        })
      });
      setLoding(false);
      history('/')
      }
    }
      catch(err){
        setError(err);
        setTimeout(()=>{
          setError('')
        },2000);
        return;
      }
    }

  return (
    <div className="signupWrapper">
      <div className="signupCard">
        <Card  variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
            <Typography className={classes.text1} variant="subtitle1" >
              Sign up to see photos and videos from your friends.
            </Typography>
          {error!='' && <Alert severity="error">{error}</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined"fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined"fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <TextField id="outlined-basic" label="Full Name" variant="outlined"fullWidth={true} margin="dense" size="small" value={name} onChange={(e)=>setName(e.target.value)} />
          <Button variant="outlined" fullWidth={true} color="secondary" margin="dense" size="small" startIcon={<CloudUpload/>} component="label">Upload Profile Image
            <input type="file" accept="image/*" hidden onChange={(e)=>setFile(e.target.files[0])} />
          </Button>
          </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth={true} color="primary" disabled={loding} onClick={handleClick}>Sign Up</Button>
            </CardActions>
          <CardContent>
          <Typography className={classes.text1} variant="subtitle1" >
             By Signing up, you agree to our Terms, Conditions and cookie policy.
            </Typography>
          </CardContent>
        </Card>
        <Card  variant="outlined" className={classes.card2}>
        <Typography className={classes.text1} variant="subtitle1" >
            Having an account ? <Link to="/login">Log In</Link>
            </Typography>
        </Card>
      </div>
    </div>
  );
}

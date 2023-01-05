import * as React from "react";
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
import { Link } from "react-router-dom";
import insta from '../../assets/instagram_logo.png'
import { grey } from "@mui/material/colors";
import { CloudUpload } from "@mui/icons-material";

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
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined"fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Password" variant="outlined"fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Full Name" variant="outlined"fullWidth={true} margin="dense" size="small"/>
          <Button variant="outlined" fullWidth={true} color="secondary" margin="dense" size="small" startIcon={<CloudUpload/>} component="label">Upload Profile Image
            <input type="file" accept="image/*" hidden />
          </Button>
          </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth={true} color="primary">Sign Up</Button>
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

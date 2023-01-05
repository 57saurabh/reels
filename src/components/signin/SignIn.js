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
import "./signIn.css"
import { Link } from "react-router-dom";
import insta from '../../assets/instagram_logo.png'
import bg from '../../assets/instafront.png'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'

const useStyles = makeStyles({
  text1:{
    color: 'grey',
    textAlign: 'center',
  },
  text2:{
    textAlign:'center',
  },
  card2:{
    height:'5vh',
    marginTop:'2%',
  }
});

export default function SignIn() {
  
  const classes = useStyles();
    // console.log(classes);

  return (
    <div className="signinWrapper">
      <div className="imgcar" style={{backgroundImage: 'url('+bg+')',backgroundSize:'cover'}}>
        <div className="car">
        <CarouselProvider
        visibleSlides={1}
        hasMasterSpinner
        isPlaying={true}
        infinite={true}
        dragEnabled={false}
        touchEnabled={false}
        naturalSlideWidth={238}
        naturalSlideHeight={423}
        totalSlides={5}
      >
        <Slider>
          <Slide index={0}><Image src={img1}/></Slide>
          <Slide index={1}><Image src={img2}/></Slide>
          <Slide index={2}><Image src={img3}/></Slide>
          <Slide index={3}><Image src={img4}/></Slide>
          <Slide index={4}><Image src={img5}/></Slide>
        </Slider>
      </CarouselProvider>
        </div>
      </div>
      
      <div className="signinCard">
        <Card  variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="" />
          </div>
          <CardContent>
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <TextField id="outlined-basic" label="Email" variant="outlined"fullWidth={true} margin="dense" size="small"/>
          <TextField id="outlined-basic" label="Password" variant="outlined"fullWidth={true} margin="dense" size="small"/>
          <Typography color="primary" className={classes.text2} variant="subtitle1" >
              Forgot Password ? 
          </Typography>
          </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth={true} color="primary">LogIN</Button>
            </CardActions>
        </Card>
        <Card  variant="outlined" className={classes.card2}>
        <Typography className={classes.text1} variant="subtitle1" >
            Don't have an account ? <Link to="/signup">Sign Up</Link>
            </Typography>
        </Card>
      </div>
    </div>
  );
}

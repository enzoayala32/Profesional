import { Button, makeStyles, Typography } from '@material-ui/core'
import Background_image from "../images/Banner.jpg"
import { Link } from 'react-router-dom'

const Banner = () => {
  const classes=useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.info}>
      <Typography variant='h2'>Plan your getaway....</Typography>
      <Link to ="/Search" >
      <Button variant='contained'>Check our rooms</Button>
      </Link>
      
      </div>

    </div>
  )
}



const useStyle=makeStyles((theme)=>({
  root:{
    height:"50vh",
    position:"relative",
    backgroundImage:`url(${Background_image})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  },
  info:{
    backgroundColor:"#000",
    color:"#fff",
    width:"350px",
    padding:theme.spacing(2),
    "& h2":{
      marginBottom:theme.spacing(4)
    },
    "& button":{
      backgroundColor:"rgba(255,103,31,0.4)",
      color:"#fff",
      textTransform:"inherit",
      fontSize:"1.2rem",
      fontWeight:"bold",
    },
    "& button:hover":{
      backgroundColor:"#fff",
      color:"rgba(255,103,31,0.4)",
    }
  }
}))
export default Banner
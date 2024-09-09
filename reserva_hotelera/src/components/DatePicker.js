import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import {People} from "@material-ui/icons"
import { useNavigate } from 'react-router-dom';


const selectionRange={
  startDate:new Date(2024,9,6),
  endDate:new Date(2024,9,6),
  key:"selection"
}
const DatePicker = () => {
  const classes=useStyle()
  const navigate = useNavigate();
  const handleSelect=()=>{}
  return (
    <div className={classes.root}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
      <div className={classes.inputSection}>
        <Typography variant='h5'>Number of guests</Typography>
        <div className={classes.people}>
          <InputBase placeholder='2pax'
          inputProps={{className:classes.input}}/>
          <People/>
        </div>
        <Button onClick={()=> navigate("search")}>Search Rooms</Button>
      </div>
    </div>
  )
}

const useStyle=makeStyles((theme)=>({
  root:{
    position:"absolute",
    top:"13vh",
    left:"30vw",
    zIndex:"50",
    [theme.breakpoints.down("sm")] : {
      top:"16vh",
      left:0,
    }
  },
  inputSection:{
    display:"flex",
    flexDirection:"column",
    backgroundColor:"#fff",
    "& h5":{
      textAlign:"center"
    },
    "& button:hover":{
      backgroundColor:"rgba(255,103,31,0.4)",
      color:"#fff"
    }
  },
  people:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  input:{
    width:"6vw",
    border:" 1px solid #ccc",
    margin:theme.spacing(0,2,2,0),
    padding:theme.spacing(1)
  },
}))
export default DatePicker
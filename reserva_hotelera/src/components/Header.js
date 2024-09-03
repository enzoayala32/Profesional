import React, { useState } from 'react'
import {AppBar, InputBase, makeStyles, Toolbar} from "@material-ui/core"
import logo from "../images/logo.png"
import SearchIcon from "@material-ui/icons/Search"
const Header = () => {

  const [mobile,setMobile]=useState(false)
  const classes=useStyle()
  const displayMobile=()=>{}
  const displayDesktop=()=>(
    <Toolbar className={classes.toolbar}>
      <img src={logo} className={classes.logo}/>
      <div className={classes.center}>
        <InputBase fullWidth placeholder='Search here...' inputProps={{className:classes.input}}/>
        <SearchIcon/>
      </div>
     

    </Toolbar>
  )
      
  return (
    <AppBar>
      {
        mobile ? displayMobile(): displayDesktop()
      }
    </AppBar>
  )
}
const useStyle=makeStyles((theme)=>({
  toolbar:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },
  logo:{
    height:"45px",
    margin:theme.spacing(1,0,0,2),
    objectFit:"contain",
  },
  center:{
    display:"flex",
    alignItems:"center",
    padding:theme.spacing(1),
  },
  input:{
    fontSize:"1.2rem",
    border:"1px solid lightgray",
    minWidth:"300px",
    borderRadius:"999px",
    padding:theme.spacing(1,5,1,5),
    margin:theme.spacing(1,5,1,5),
  },
}))

export default Header
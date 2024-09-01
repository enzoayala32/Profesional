import React, { useState } from 'react'
import {AppBar, makeStyles, Toolbar} from "@material-ui/core"
import logo from "../images/logo.png"
const Header = () => {

  const [mobile,setMobile]=useState(false)
  const classes=usestyle()
  const displayMobile=()=>{}
  const displayDesktop=()=>(
    <Toolbar className={classes.toolbar}>
      <img src={logo} className={classes.logo}/>
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
const usestyle=makeStyles((theme)=>({
  toolbar:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },
  logo:{
    height:"45px",
    margin:theme.spacing(1,0,0,2),
    objectFit:"contain",
  }
}))

export default Header
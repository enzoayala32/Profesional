import React, { useState } from 'react'
import {AppBar, Avatar, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core"
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
      <div className={classes.right}>
        <Typography>Sign in</Typography>
        <Avatar className={classes.avatar}/>
      </div>
    </Toolbar>
  )
      
  return (
    <AppBar className={classes.root}>
      {
        mobile ? displayMobile(): displayDesktop()
      }
    </AppBar>
  )
}
const useStyle=makeStyles((theme)=>({
  root:{
    position:"sticky",
    top: 0,
    backgroundColor:"#fff",
    zIndex:99,
    width:"100vw",
  },
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
  right:{
    color:"#333",
    display:"flex",
    alignItems:"center",
    marginLeft:theme.spacing(2),
    },
    avatar:{
      marginLeft:theme.spacing(2),
    }
  }))

export default Header
import { Chip, makeStyles, Slider, Typography } from '@material-ui/core'
import mockData,{ chips } from '../mockData'
import { HighlightOffTwoTone } from '@material-ui/icons'
import Results from './Results'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectStart } from '../features/counter/startSlice'
import { selectEnd } from '../features/counter/endSlice'

const SearchPage = () => {
  const classes=useStyle()
  const [value,setValue]=useState(400)
  const start=useSelector(selectStart)
  const end= useSelector(selectEnd)

 const handleChange=(e,newValue)=>{
    setValue(newValue);
    console.log(value)
  }
  return (
    <div className={classes.root}>
        <Typography variant='h5' gutterBottom>Avaibable rooms </Typography>
        <div className={classes.chips}>
          {
            chips.map(({key,label})=>{
              let icon=<HighlightOffTwoTone/>
              return(
                <Chip label={label}
                 key={key}
                  icon={icon} 
                  className={classes.chip}/>
              )
            })
          }
        </div>
        <div className={classes.selector}>
          <Typography gutterBottom>Prices</Typography>
            <Slider value={value} 
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            min={100}
            max={400}
            valueLabelDisplay='auto'
            color='secondary'/>
        </div>
        {
          mockData
          .filter((data)=>data.cat==="room")
          .filter((data)=>data.price < value)
          .filter((data)=>end < data.notAvaiblablestart ||
                 start > data.notAvaiblableend)
          .map(({src,title,description,price,stock},index)=>(
            <Results title={title}
            key={index}
            src={src}
            description={description}
            price={price}
            stock={stock}/>
          ))
        }
        
    </div>
  )
}

const useStyle=makeStyles((theme)=>({
  root:{
      
  },
  chips:{
    padding:theme.spacing(1)
  },
  chip:{
    margin:theme.spacing(1)
  },
  selector:{
    width:"300px",
    marginLeft:theme.spacing(3),
  },
}))

export default SearchPage
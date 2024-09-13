import { Chip, makeStyles, Slider, Typography } from '@material-ui/core'
import mockData,{ chips } from '../mockData'
import { HighlightOffTwoTone } from '@material-ui/icons'
import Results from './Results'

const SearchPage = () => {
  const classes=useStyle()
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
            <Slider 
            aria-labelledby="continuous-slider"
            min={100}
            max={400}
            valueLabelDisplay='auto'
            color='secondary'/>
        </div>
        {
          mockData
          .filter((data)=>data.cat==="room")
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
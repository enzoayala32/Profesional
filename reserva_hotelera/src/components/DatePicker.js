import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, defaultStaticRanges } from 'react-date-range';
import { Button, InputBase, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { People } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectStart, setStart } from '../features/counter/startSlice';
import { selectEnd, setEnd } from '../features/counter/endSlice';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "13vh",
    left: "30vw",
    zIndex: "50",
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      top: "16vh",
      left: "20px",
    }
  },
  dateRangePicker: {
    [theme.breakpoints.down("xs")]: {
      "& .rdrCalendarWrapper": {
        padding: 0,
      },
      "& .rdrDefinedRangesWrapper": {
        display: "none",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& .rdrDefinedRangesWrapper": {
        display: "block",
      },
    },
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    "& h5": {
      textAlign: "center"
    },
    "& Button": {
      backgroundColor: "#d3d3d3",
      color: "#000",
    },
    "& button:hover": {
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff"
    }
  },
  people: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "6vw",
    border: "1px solid #ccc",
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "10vw",
    }
  },
}));

const DatePicker = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery('(min-width:768px)');

  const selectionRange = useMemo(() => ({
    startDate: new Date(start), // Convertir a objeto Date
    endDate: new Date(end),     // Convertir a objeto Date
    key: "selection"
  }), [start, end]);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    // Convertir a Date si no lo son
    const validStartDate = startDate instanceof Date ? startDate : new Date(startDate);
    const validEndDate = endDate instanceof Date ? endDate : new Date(endDate);

    // Verifica si validStartDate y validEndDate son instancias de Date
    if (validStartDate instanceof Date && validEndDate instanceof Date) {
      console.log(ranges);
      dispatch(setStart(validStartDate.getTime()));
      dispatch(setEnd(validEndDate.getTime()));
    } else {
      console.error('Invalid dates:', validStartDate, validEndDate);
    }
  };

  return (
    <div className={classes.root}>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        showSelectionPreview={false}
        staticRanges={isDesktop ? defaultStaticRanges : []}
        inputRanges={isDesktop ? undefined : []}
        className={classes.dateRangePicker}
      />
      <div className={classes.inputSection}>
        <Typography variant='h5'>Number of guests</Typography>
        <div className={classes.people}>
          <InputBase
            placeholder='2pax'
            inputProps={{ className: classes.input, 'aria-label': 'Número de personas' }}
          />
          <People />
        </div>
        <Button onClick={() => navigate("search")}>Search Rooms</Button>
      </div>
    </div>
  );
};

export default DatePicker;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import useGeolocation from "./useGeolocation";
import { getWeather } from "./weatherSlice";

const useStyles = makeStyles((theme) => ({
  weather: {
    fontFamily: "Gill Sans, sans-serif",
    color: "white",
    textTransform: "uppercase",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textShadow: "0 2px 4px rgb(71 97 206 / 36%)",
    fontWeight: "lighter",
    margin: "30px 60px 50px 0",
  },
  weatherContainer: {
    display: "flex",
    marginLeft: "140px",
    opacity: "0.75",
  },
  icon: {
    margin: "0",
    paddingTop: "20px",
  },
  textContainer: {
    padding: "34px 34px 0 0",
  },
  temperature: {
    paddingTop: "5px",
    fontSize: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    },
  },
  cityName: {
    fontSize: "18px",
    paddingTop: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  description: {
    paddingTop: "5px",
  },
}));

export default function Weather() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { icon, description, temperature, city } = useSelector(
    (state) => state.weather
  );
  const { latitude, longitude } = useGeolocation();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(getWeather({ latitude, longitude }));
    }
  }, [dispatch, latitude, longitude]);

  return (
    <div className={classes.weather}>
      <div className={classes.weatherContainer}>
        <img
          className={classes.icon}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />

        <div className={classes.textContainer}>
          <p className={classes.temperature}>{temperature}°</p>
          <p className={classes.description}>{description}</p>
          <p className={classes.cityName}>{city}</p>
        </div>
      </div>
    </div>
  );
}

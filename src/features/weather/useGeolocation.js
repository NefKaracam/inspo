import { useEffect, useState, useRef } from "react";

export default function useGeolocation() {
  const [state, setState] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  });
  const mounted = useRef(true);
  const watchId = useRef();

  const onEvent = (event) => {
    if (mounted.current) {
      setState({
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp,
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent);
    watchId.current = navigator.geolocation.watchPosition(onEvent);

    return () => {
      mounted.current = false;
      navigator.geolocation.clearWatch(watchId.current);
    };
  }, []);

  return state;
}

"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>();

  const lat = 48.295898;
  const lon = -97.372513;

  const fetchWeatherData = useCallback(async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const weatherData = await response.json();
    setWeatherData(weatherData);
  }, [lon]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return (
    <main className={styles.main}>
      <div className={styles.weatherContainer}>
        <div className={styles.searchContainer}>
          <input className={styles.cityInput} placeholder="Enter a city" />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.weatherDataContainer}>
          <p className={styles.currentWeather}>{weatherData?.main?.temp}°C</p>
          <p className={styles.cityName}>New york, U S of A</p>
        </div>
      </div>
    </main>
  );
}

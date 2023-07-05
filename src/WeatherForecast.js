import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div classNmae="day">Thu</div>
          <WeatherIcon code="02d" size={36} />
          <div className="temperatures">
            <span className="temperature-max">19°</span>
            <span className="temperatre-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex clearfix mt-3">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={52}
              />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/hr</li>
          </ul>
          <div className="col-3  text-capitalize description">
            {" "}
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

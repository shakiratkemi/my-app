import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Lagos</h1>
      <ul>
        <li>Monday 1:00</li>
        <li>Rain</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix mt-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Weather Icon"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">27</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 7%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 10km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion";
import "./forecast.css";
const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const Forecast = ({ data }) => {
    const dayOfWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

    console.log(data);

    return (<div>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, index) => {
                return (<AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>

                                <label className="day">{forecastDays[index]} </label>
                                <label className="day">{item.dt_txt} </label>
                                <label className="description">{item.weather[0].description} </label>
                                <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>


                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-detail-grid-item">
                                <label>Pressure </label>
                                <label>{item.main.pressure/1000} hPa</label>
                            </div>

                            <div className="daily-detail-grid-item">
                                <label>Humidity </label>
                                <label>{item.main.humidity}%</label>
                            </div>

                            <div className="daily-detail-grid-item">
                                <label>Clouds </label>
                                <label>{item.clouds.all}%</label>
                            </div>

                            <div className="daily-detail-grid-item">
                                <label>Wind speed </label>
                                <label>{item.wind.speed} m/s</label>
                            </div>

                            <div className="daily-detail-grid-item">
                                <label>Sea level </label>
                                <label>{item.main.sea_level}m</label>
                            </div>

                            <div className="daily-detail-grid-item">
                                <label>Feels like </label>
                                <label>{Math.round(item.main.feels_like)}°C    </label>
                            </div>

                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                );
            })}
        </Accordion>
    </div>
    );
};


export default Forecast;
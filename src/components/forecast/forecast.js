import "./forecast.css";
import { 
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from "react-accessible-accordion";

const WEEK_DAYS = [
    'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'
];


const Forecast = ({data}) => {
    const dayOfWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayOfWeek)
    );

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item,idx) => (
                    <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                <label className="day">{forecastDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">
                                    {Math.round(item.main.temp_min)}°F / {" "}
                                    {Math.round(item.main.temp_max)}°F
                                </label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-grid-item">
                                <label htmlFor="">Pressure</label>
                                <label htmlFor="">{item.main.pressure}mb</label>
                            </div>
                            <div className="daily-grid-item">
                                <label htmlFor="">Humidity</label>
                                <label htmlFor="">{item.main.humidity}%</label>
                            </div>
                            <div className="daily-grid-item">
                                <label htmlFor="">Clouds</label>
                                <label htmlFor="">{item.clouds.all}%</label>
                            </div>
                            <div className="daily-grid-item">
                                <label htmlFor="">Wind Speed</label>
                                <label htmlFor="">{item.wind.speed}mph</label>
                            </div>
                            <div className="daily-grid-item">
                                <label htmlFor="">Sea level</label>
                                <label htmlFor="">{item.main.sea_level}m</label>
                            </div>
                            <div className="daily-grid-item">
                                <label htmlFor="">Feels like</label>
                                <label htmlFor="">{Math.round(item.main.feels_like)}°F</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
            
        </>
    ) 
}


export default Forecast;
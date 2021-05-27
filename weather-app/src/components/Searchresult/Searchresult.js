// import './App.css';
import './Searchresult.css';
import ClosingIcon from '../../assets/CloseButton.svg';

function Searchresult() {
  return (
    <div className="Searchresult">

      {/* <p>
        Det finns ingen stad som matchar din sökning.
      </p> */}

        {/* Dynamiskt klassnamn m villkor baserat på temperatur */}
      <div className="WeatherItem hightemperature">      
          <div className="WeatherIcon sun"></div>
          <div>
            <div className="Degrees">26</div>
            <div className="NameOfCity">RIO</div>
          </div>
        <button type="button" className="ClosingIcon">
          <img src={ClosingIcon} alt="ClosingIcon" />
        </button>
      </div>
      <div className="WeatherItem mediumtemperature">      
          <div className="WeatherIcon"></div>
          <div>
            <div className="Degrees">26</div>
            <div className="NameOfCity">RIO</div>
          </div>
          <button type="button" className="ClosingIcon">
          <img src={ClosingIcon} alt="ClosingIcon" />
        </button>
      </div>
      <div className="WeatherItem lowtemperature">      
          <div className="WeatherIcon"></div>
          <div>
            <div className="Degrees">26</div>
            <div className="NameOfCity">RIO</div>
          </div>
          <button type="button" className="ClosingIcon">
            <img src={ClosingIcon} alt="ClosingIcon" />
        </button>
      </div> 
      <div className="WeatherItem lowtemperature">      
          <div className="WeatherIcon"></div>
          <div>
            <div className="Degrees">26</div>
            <div className="NameOfCity">RIO</div>
          </div>
          <button type="button" className="ClosingIcon">
            <img src={ClosingIcon} alt="ClosingIcon" />
        </button>
      </div> 
    </div>
  );
}

export default Searchresult;

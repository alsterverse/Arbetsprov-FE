import './Landingpage.css';
import Searchbar from '../Searchbar/Searchbar.js';
import Searchresult from '../Searchresult/Searchresult.js';
// import Footer from '../Footer/Footer.js';

function Landingpage() {
  return (
    <div className="Landingpage">
      <Searchbar />
      <Searchresult />
      {/* <Footer /> */}
    </div>
  );
}

export default Landingpage;

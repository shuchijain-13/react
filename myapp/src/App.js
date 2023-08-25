import React from 'react'; // Don't forget to import React
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'; // Correct typo in component name
import CardImage from './CardImage';
import data from './data';
import HomeCarsouel from './HomeCarsouel';

const renderCard = (val) => { // Renamed the function for clarity
  return (
    <CardImage
      key={val.id}
      title={val.title}
      imgsrc={val.imgsrc}
      desc={val.desc}
    />
  );
};

function App() {
  return (
    <div className="container">
      <NavBar />
      <HomeCarsouel/>
      <div className="row">
        {data.map((val) => (
          <div key={val.id} className="col-md-4">
            {renderCard(val)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

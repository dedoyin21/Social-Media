import './App.css';
import Navbar from './Components/navbar.tsx';
import InfoCardContainer from './Components/square.tsx';
import OverviewCardContainer from './Components/rectangle.tsx';

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <main className="dark:bg-gray-900">
        <InfoCardContainer />
        <OverviewCardContainer />
      </main> 
      <div className="attribution dark:text-white">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://dee-code.netlify.app/">Deecode</a>.
      </div>
    </div>        
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {trending,originals,action,romance,horror,comedy} from './urls';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost url={trending} title="Trending"/>
    <Rowpost url={originals} title="Netflix Originals" isSmall/>
    <Rowpost url={action} title="Action" isSmall/>
    <Rowpost url={romance} title="Romance" isSmall/>
    <Rowpost url={horror} title="Horror" isSmall/>
    <Rowpost url={comedy} title="Comedy" isSmall/>
    </div>
  );
}

export default App;

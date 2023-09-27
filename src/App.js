import './App.css';
import Stalker from './Stalker';
import StalkHeader from './StalkHeader'
import StalkFooter from './StalkFooter'

function App() {
  return (
    <div className="App">
      <header>
        <StalkHeader>
        </StalkHeader>
      </header>
      <main>
        <Stalker>
        </Stalker>
      </main>
      <footer>
        <StalkFooter>
        </StalkFooter>
      </footer>
    </div>
  );
}

export default App;

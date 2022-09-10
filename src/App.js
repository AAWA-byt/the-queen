import the_queen from './assets/pictures/the-queen-closed-eyes.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='copyright'>
        <img src={the_queen} alt="the-queen" />
        <p>Chris Levine, Lightness of Being (2004). Photo courtesy of Sotheby's London.</p>
        </div>
          <p className='p-top'>Her Majesty</p>
            <h2>The Queen</h2>
              <p>1926 - 2022</p>

      </header>
    </div>
  );
}

export default App;

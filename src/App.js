import the_queen from './assets/pictures/the-queen-closed-eyes.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={the_queen} alt="the-queen" />
          <p className='p-top'>Her Majesty</p>
            <h2>The Queen</h2>
              <p>1926 - 2022</p>

      </header>
    </div>
  );
}

export default App;

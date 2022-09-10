import the_queen from './assets/pictures/the-queen-closed-eyes.jpg';
import the_palace from './assets/pictures/the-palace.png';
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

      <div className="App2-header">
        <div className='App2-header__text'>
          <center><img src={the_palace} alt="the-palace" /></center>
          <p><i>"The Queen died peacefully at Balmoral this afternoon. The King and Queen Consort will remain at Balmoral this 
                evening and will return to London tomorrow."</i></p>
            <div className='App2-header__quote'>
              <p>Thuesday, 8th September 2022 <br></br>
                 Announcement from Buckingham Palace</p>
            </div>      
        </div>
      </div>
    </div>
  );
}

export default App;

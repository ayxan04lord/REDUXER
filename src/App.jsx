import './App.css';

const Navbar = () => {
  return(
    <div className='navbar'></div>
  )
}

const Card = () => {
  return(
    <div>
      <button className='btn_plus'>Əlavə et + 1</button>
      <button className='btn_minus'>Əlavə et - 1</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;

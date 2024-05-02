import Header from './components/header/Header';
import Whatsup from './components/Whatsup';

function App() {
  return (
    <div className="App">
      <Header />
      <Whatsup name="Sumit">
        <p>lorem</p>
      </Whatsup>
    </div>
  );
}

export default App;

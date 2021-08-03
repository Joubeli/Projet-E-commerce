import './App.css';
import Header from "./components/Header"
import Container from "./components/Container"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
          <Header/>
          <Container/>
          <Footer/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

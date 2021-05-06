import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout/>
      <Cards/>
    </div>
  );
}

export default App;

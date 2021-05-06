import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Cards from './components/Cards'
import MoviesList from './components/MoviesList'


function App() {
  return (
    <div className="App">
      <Header/>
      <Layout/>
      <Cards>
      <MoviesList/>
      </Cards>
    </div>
  );
}

export default App;

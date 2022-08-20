import './styles/App.css'
import AllProdacts from './pages/AllProducts';


const App= () => {
  const testim = "electronics"

  return (
    <div className="App">
        <h1>Empty Project</h1>
        <AllProdacts test={testim}/>   
    </div>
  );
}



export default App




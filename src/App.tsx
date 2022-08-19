import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from './hooks/useAction';
import './styles/App.css'

function App() {
  const {fetchProducts} = useActions()
  const state = useSelector(state => state)
  useEffect(()=> {
    fetchProducts()
  }, [])

  console.log(state)
  return (
    <div className="App">
        <h1>Empty Project</h1><span>
          dssdcsdcsds sd</span>     
    </div>
  );
}

export default App;

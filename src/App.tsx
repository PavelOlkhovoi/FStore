import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';


const App = () => {
  const {categoriesActions, initCart, authhWithLocalhost} = useActions()
  useEffect(()=> {
    authhWithLocalhost()
    initCart()
    console.log('Appp matha faka')
  }, [])
  return (
  <AppRoutes />
  );
}

export default App




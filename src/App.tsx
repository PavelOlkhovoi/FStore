import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';


const App = () => {
  const {categoriesActions, initCart} = useActions()
  useEffect(()=> {
    initCart()
  }, [])
  return (
  <AppRoutes />
  );
}

export default App




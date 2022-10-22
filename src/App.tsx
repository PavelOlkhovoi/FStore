import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelect';

const App = () => {
  const {initialData} = useActions()
  const cart = useTypedSelector(state => state.carts.carts[0])
  useEffect(()=> {
    initialData()
  }, [])
  console.log('App render', cart)
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App




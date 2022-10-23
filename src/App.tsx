import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelect';

const App = () => {
  const {initialData} = useActions()
  useEffect(()=> {
    initialData()
  }, [])

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App




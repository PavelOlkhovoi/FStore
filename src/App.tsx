import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelect';
import { selectArrayOfProduct, selectLoading, selectProducts } from './store/selectors';

const App = () => {
  const {initialData} = useActions()
  const isLoading = useTypedSelector(state => selectLoading(state))
  const prod = useTypedSelector(state => selectProducts(state))
  console.log('App functuion body')
  console.log('Loading', isLoading)
  console.log('Prod', prod)
  useEffect(()=> {
    console.log('App useEffect')
    initialData()
  },[])

  if(isLoading){
    return <h1>Loading</h1>
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App




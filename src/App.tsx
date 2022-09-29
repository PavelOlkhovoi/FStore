import './styles/App.css'
import AppRoutes from './components/AppRoutes';
import React, { useEffect } from 'react';
import { useActions } from './hooks/useAction';
import Skeleton from './components/UI/skeleton/Skeleton';
import Menu from './components/menu/Menu';
import { type } from '@testing-library/user-event/dist/type';


const Filter = () => {
  return (
    <div>Filter</div>
  )
}

type Content = {
  title: string
}

const Content: React.FunctionComponent<Content> = ({title}) => {
  return (
    <div>Content {title}</div>
  )
}

const App = () => {
  const {initialData} = useActions()
  useEffect(()=> {
    initialData()
  }, [])
  return (
    <>
      <AppRoutes />
      <Skeleton>
        <Menu /> 
        <Filter />
        <Content title='I might have to leave at 19:00 to my suns school. if possible please.' />
      </Skeleton>
    </>
  );
}

export default App




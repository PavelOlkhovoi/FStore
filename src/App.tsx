import './styles/App.css'
import AllProdacts from './pages/AllProducts';
import { useActions } from './hooks/useAction';
import { useEffect, useState } from 'react';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { State } from './store';

interface Props extends PropsFromRedux {
 
}

const App: React.FC<Props>= ({categories}) => {
  const testim = "electronics"
  const {categoriesActions} = useActions()
  const [category, setCategory] = useState('')
  
  useEffect(()=> {
    categoriesActions()
  }, [])

  console.log(categories)
  

  return (
    <div className="App">
        <h1>Empty Project</h1>
        <div>
          <h2>Categories</h2>
          <div>
          {
            categories.map( (cat, index) => <div 
            key={index}
            onClick={()=> setCategory(cat)}
            >
              {cat}

            </div>)
          }
          </div>
        </div>
        <AllProdacts category={category}/>   
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  categories: state.categories.categories
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(App)




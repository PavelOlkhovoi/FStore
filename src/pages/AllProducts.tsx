import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';
import { selectProducts, selectTestCategory } from '../store/selectors';

interface Props extends PropsFromRedux {
 
}

const AllProdacts: React.FC<Props>  = ({products}) => {
    const {fetchProducts} = useActions()

    useEffect(()=> {
      fetchProducts()
    }, [])
  
    return (
        <ul>
            Products
            {
                products.map( p => <li key={p.id}>
                    {p.title}: Category {p.category}
                    <div>Rating {p.rating.rate}</div>
                </li>)
            }
        </ul>
    )
}

interface CategoryName {
    category: string
}

const mapStateToProps = (state: State, category: CategoryName) => ({
    products: selectTestCategory(state, category.category)
  })
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(AllProdacts)
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useAction';

interface Props extends PropsFromRedux {
 
}

const AllProdacts: React.FC<Props>  = ({products}) => {
    const {fetchProducts} = useActions()
    const stateMy = useSelector(state => state)
    useEffect(()=> {
      fetchProducts()
    }, [])
  
    console.log(products)
    return (
        <ul>
            Products
            {
                products.products.map( p => <li key={p.id}>{p.title}</li>)
            }
        </ul>
    )
}


const mapStateToProps = (state: State) => ({
    products: state.products
  })
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(AllProdacts)
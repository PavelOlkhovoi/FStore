import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { selectCategory } from '../store/selectors';
import SingleCard from '../components/UI/cards/SingleCard';

interface Props extends PropsFromRedux {}

const AllProdacts: React.FC<Props>  = ({products}) => {
    const {fetchProducts} = useActions()

    useEffect(()=> {
      fetchProducts()
    }, [])
  
    return (
        <div>
            Products
            {
                products.map( p => <SingleCard product={p} key={p.id}/>)
            }
            <hr />
        </div>
    )
}

interface CategoryName {
    category: string
}

const mapStateToProps = (state: State, category: CategoryName) => ({
    products: selectCategory(state, category.category)
  })
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(AllProdacts)
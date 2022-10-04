import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { selectActiveCategory, selectCategory } from '../store/selectors';
import SingleCard from '../components/UI/cards/SingleCard';

interface Props extends PropsFromRedux {}

const AllProdacts: React.FC<Props>  = ({ products }) => {
    console.log(products)
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


const mapStateToProps = (state: State) => ({
    products: selectActiveCategory(state)
  })
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(AllProdacts)
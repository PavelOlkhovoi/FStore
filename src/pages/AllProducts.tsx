import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import React from 'react';
import { selectProductsWithPagination} from '../store/selectors';
import SingleCard from '../components/UI/cards/SingleCard';

interface Props extends PropsFromRedux {}

const AllProdacts: React.FC<Props>  = ({ products }) => {
    return (
        <>
        <h4>Products</h4>
        <div className='cards_container'>
            {
                products.map( p => <SingleCard product={p} key={p.id}/>)
            }
        </div>
        </>
    )
}



const mapStateToProps = (state: State) => ({
    //products: selectActiveCategory(state)
     products: selectProductsWithPagination(state, state.pagination.items, state.pagination.step)
  })
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(AllProdacts)
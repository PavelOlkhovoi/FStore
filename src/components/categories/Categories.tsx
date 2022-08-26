import React, {FC} from "react"
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { State } from "../../store";
import { useActions } from '../../hooks/useAction'
import { useEffect, useState } from 'react';
import AllProducts from "../../pages/AllProducts";
import PrevCart from "../cart/PrevCart";

interface Props extends PropsFromRedux {
 
}
const Categories: React.FC<Props> = ({categories, carts}) => {
    const {categoriesActions} = useActions()
    const [category, setCategory] = useState('')
    
    useEffect(()=> {
      categoriesActions()
    }, [])

    return (
        <div className="category">
          <div>
            <PrevCart />
            <h4>Cart</h4>
            {
              carts.carts.length !== 0 ?
              carts.carts[0].products.map(p => <span key={p.productId}>{p.productId} | quantity: {p.quantity} --- </span>)
              : null
            }
          </div>
            <div>
          <h2>Categories</h2>
          <div>
          {
            categories.map((cat, index) => <div 
            key={index}
            onClick={()=> setCategory(cat)}
            >
              {cat}
            </div>)
          }
          </div>
        </div>
        <AllProducts category={category} />
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    categories: state.categories.categories,
    carts: state.carts
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(Categories)

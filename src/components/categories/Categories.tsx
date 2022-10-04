import React, {FC} from "react"
import { connect, ConnectedProps} from 'react-redux';
import { State } from "../../store";
import { useActions } from '../../hooks/useAction'
import { useEffect, useState } from 'react';
import PrevCart from "../cart/PrevCart";
import AllProducts from "../../pages/AllProducts";

interface Props extends PropsFromRedux {
 
}
const Categories: React.FC<Props> = ({categories, activeCat}) => {
    const {categoriesActions, setActiveCategory, toggleActiveCategory} = useActions()

    const handleActiveCategory = (cat: string) => {
      if(activeCat.includes(cat)){
        console.log('Toggle')
        toggleActiveCategory(cat)
      }else {
        console.log('Set')
        setActiveCategory(cat)
      }

    }
    useEffect(()=> {
      categoriesActions()
    }, [])

    console.log('Active Component', activeCat)
    return (
        <div className="category">
          <div>
            <PrevCart />
            <h4>Cart</h4>
          </div>
            <div>
          <h2>Categories</h2>
          <div>
          {
            categories.map((cat, index) => <div 
            key={index}
            onClick={()=> handleActiveCategory(cat)}
            >
              {cat}
            </div>)
          }
          </div>
        </div>
        <AllProducts />
        </div>
    )
}

const mapStateToProps = (state: State) => {
  // console.log('Active Mape State to props', state.categories.active)
  return {
    categories: state.categories.categories,
    activeCat: state.categories.active
  }}


const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(Categories)

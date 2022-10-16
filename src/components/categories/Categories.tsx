import React from "react"
import { connect, ConnectedProps} from 'react-redux';
import { State } from "../../store";
import { useActions } from '../../hooks/useAction'
import { useEffect } from 'react';
import { firstCapitalLetter } from "../../utils/reducers/commonFunc";
import classes from "../categories/Categories.module.css"


interface Props extends PropsFromRedux {
 
}
const Categories: React.FC<Props> = ({categories, activeCat}) => {
    const {categoriesActions, setActiveCategory, toggleActiveCategory, changeStepAction} = useActions()

    const handleActiveCategory = (cat: string) => {
      if(activeCat.includes(cat)){
        toggleActiveCategory(cat)
      }else {
        setActiveCategory(cat)
      }

      changeStepAction(1)

    }
    useEffect(()=> {
      categoriesActions()
    }, [])
    return (
        <div className="category">
          <div>
            <h2>Categories</h2>
          <div className={classes.allcategories}>
            {
              categories.map((cat, index) => 
              <div
              className={activeCat.includes(cat) ? classes.active : ''}
              key={index}
              onClick={()=> handleActiveCategory(cat)}
              >
                {firstCapitalLetter(cat)}
              </div>)
            }
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state: State) => {
  return {
    categories: state.categories.categories,
    activeCat: state.categories.active
  }}


const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(Categories)

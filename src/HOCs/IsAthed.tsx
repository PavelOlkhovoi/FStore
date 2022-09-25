import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import { Navigate } from "react-router-dom"
import React, {FC,ReactNode, useEffect} from "react"
import { RootUser } from '../types/user';
import { useActions } from '../hooks/useAction';

interface Props extends PropsFromRedux {
    children?: React.ReactChild | React.ReactNode;
}
const IsAuthed: React.FC<Props> = ({children, user}) => {

    const { authhWithLocalhost } = useActions()

    useEffect(()=> {
        console.log('IsAuthe 1')
        authhWithLocalhost()
        console.log('IsAuthe 2')
      }, [])

      const testCheck = localStorage.getItem("currentUser")
 

    if(user.user === null && testCheck === ""){
        console.log('Do not show user')
        console.log('IsAuthe 3')
        return <Navigate to='/login' />
    }

    console.log('IS_LOADING', user.loading)
    if(user.loading){
        return <h1>Loading</h1>
    }

    
    console.log('IS_LOADING', user.loading)



    return (
        <> 
        { children }
        </>
    )
}


const mapStateToProps = (state: State) => {
    const user: RootUser = state.user

    return {user}
  }
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(IsAuthed)
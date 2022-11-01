import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import { Navigate } from "react-router-dom"
import React, {FC,ReactNode, useEffect} from "react"
import { RootUser } from '../types/user';
import { LoadingState } from '../store/reducers/loadingReducer';

interface Props extends PropsFromRedux {
    children?: React.ReactChild | React.ReactNode;
}
const IsAuthed: React.FC<Props> = ({children, user, loading}) => {

    const localCheck = localStorage.getItem("currentUser")


    if(user.user === null && localCheck === null){
        return <Navigate to='/login' />
    }

    if(loading.loading){
        return <h1>Loading</h1>
    }


    return (
        <> 
            { children }
        </>
    )
}


const mapStateToProps = (state: State) => {
    const user: RootUser = state.user
    const loading: LoadingState = state.loading

    return {user, loading}
  }
  
  const connector = connect(mapStateToProps);
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  
  export default connector(IsAuthed)
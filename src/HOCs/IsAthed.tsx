import { connect, ConnectedProps } from 'react-redux'
import { State } from '../store';
import { Navigate } from "react-router-dom"
import { useTypedSelector } from "../hooks/useTypedSelect"
import React, {FC,ReactNode, useEffect} from "react"
import { RootUser } from '../types/user';

// interface Props {
//     children?: React.ReactChild | React.ReactNode;
// }
interface Props extends PropsFromRedux {
    children?: React.ReactChild | React.ReactNode;
}
const IsAuthed: React.FC<Props> = ({children, user}) => {
    console.log(user.user)
    if(user.user === null){
        console.log('Do not show user')
        return <Navigate to='/login' />
    }

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
import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useActions } from "../../hooks/useAction"

const Logout = () => {

    // 3. Redirect back

    const {logoutUser} = useActions()
    const deleteLocalstorage = () => {
        localStorage.removeItem("currentUser")
    }

    console.log('Delete All stuff')

    useEffect(()=> {
        deleteLocalstorage()
        logoutUser()
        console.log('Delete All stuff')
    }, [])

    // if(localStorage.getItem('currentUser') !== null){
    //     console.log('Right logout')
    //     deleteLocalstorage()
    //     logoutUser()
    //     console.log('Right logout')
    // }
    return <Navigate to='/login' />
}

export default Logout
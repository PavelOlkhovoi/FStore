import { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useActions } from "../../hooks/useAction";
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from "../../hooks/useTypedSelect";
import classes from "./styles/Login.module.css"
import Button from "../../components/UI/btn/Button";



type InputsLogin = {
  username: string,
  password: string,
};

export type CallBack = () => void;

const Login: FC = () => {
    const userError = useTypedSelector(state => state.user.error)
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm<InputsLogin>();
    const {authUser} = useActions()
    const navigate = useNavigate()
    const myNav = () => navigate('/dashboard')
    const onSubmit: SubmitHandler<InputsLogin> = async (data) => {

        authUser(data.username, data.password, myNav)

    }

    return (
       <div className={classes.formwrapper}>
        <h1>Authorization</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    
                <input placeholder="username" type="text" {...register("username", { required: true })} />
                {errors.username && <span>Username field is required</span>}

                </div>
                
                <div>

                <input placeholder="password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}

                </div>
                
                <div>
{/* 
                <input type="submit" onClick={()=> setError("username", {
                    type: 'custom',
                    message: 'email is wrong'
                })} 
                />
                <p>{errors.username?.message}</p> */}

                <Button
                width={"100%"}
                type="submit" onClick={()=> setError("username", {
                    type: 'custom',
                    message: 'email is wrong'
                })}
                >
                    Send
                </Button>
                </div>
                {
                    userError ? <p>The user's name or password is incorrect</p> : ''
                }
            </form>
       </div>
    );
}

export default Login



import { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useActions } from "../../hooks/useAction";
import { useNavigate } from 'react-router-dom'



type InputsLogin = {
  username: string,
  password: string,
};

export type CallBack = () => void;

const Login: FC = () => {
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm<InputsLogin>();
    const {authUser} = useActions()
    const navigate = useNavigate()
    const myNav = () => navigate('/dashboard')
    const onSubmit: SubmitHandler<InputsLogin> = async (data) => {

        authUser(data.username, data.password, myNav)


    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="username" type="text" {...register("username", { required: true })} />
        {errors.username && <span>Username field is required</span>}
        
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" onClick={()=> setError("username", {
            type: 'custom',
            message: 'email is wrong'
        })} />
        <p>{errors.username?.message}</p>
        </form>
    );
}

export default Login



import { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { faCheck, faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios";
import { json } from "stream/consumers";



type InputsLogin = {
  email: string,
  password: string,
};



const Login: FC = () => {
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm<InputsLogin>();
    const onSubmit: SubmitHandler<InputsLogin> = async (data) => {

        try {
            const result = await axios.post('https://fakestoreapi.com/auth/login', 
                JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_",
                }
                ),
                {
                    headers: {
                        "Content-Type": "application/json",
                        withCredentials: true
                        // 'Access-Control-Allow-Origin' : 'http://localhost:3000'
                    },
                }
            )

            console.log(result?.data?.token)
        } catch (error) {
            console.log('Some error: add User', error)
        }
        
        console.log(data);
    }

    console.log(watch("email")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="email" type="email" {...register("email", { 
            pattern: {
                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                message: 'incorrect email' // JS only: <p>error message</p> TS only support string
            }
        })} />
        {errors.email && <span>Email field is required</span>}
        
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" onClick={()=> setError("email", {
            type: 'custom',
            message: 'email is wrong'
        })} />
        <p>{errors.email?.message}</p>
        </form>
    );
}

export default Login



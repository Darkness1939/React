import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const FormReg: FC = () => { 

const { register, handleSubmit, formState: { errors} } = useForm<FormData>();
const navigate = useNavigate();

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    navigate('/counter');
};

return (
<form onSubmit={handleSubmit(onSubmit)} className='form'>
<input 
    {...register("name", {
        required: "Name is required",
        minLength: {
        value: 6,
        message: "Name must be at least 6 characters",
    },
    maxLength: {
        value: 24,
        message: "Name must be no more than 24 characters",
    },
    })}
    className="input"
    placeholder="Name"
    type="text"
    />
    {errors.name && <p className="error">{errors.name.message}</p>}

    <input 
    {...register("email", {
        minLength: {
            value: 5,
            message: "Name must be at least 5 characters",
        },
        maxLength: {
            value: 40,
            message: "Name must be no more than 40 characters",
        },
    })}
    className="input"
    placeholder="Email"
    type="email"
    />
    {errors.email && <p className="error">{errors.email.message}</p>}

    <input 
    {...register("password", {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
        },
        maxLength: {
            value: 24,
            message: "Name must be no more than 15 characters",
        },
    })}
    className="input"
    placeholder="Password"
    type="password"
    />
    {errors.password && <p className="error">{errors.password.message}</p>}
    
    <button className="button" type="submit">Submit</button>
</form>            
)}

export default FormReg;
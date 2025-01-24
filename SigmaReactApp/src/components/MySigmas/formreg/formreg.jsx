const { register, handleSubmit, formState: { errors} } = useForm();
const navigate = useNavigate();
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
    />
    {errors.name && <p className="error">{errors.name.message}</p>}

    <input 
    {...register("Email", {
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
    />
    {errors.name && <p className="error">{errors.name.message}</p>}

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
    />
    {errors.name && <p className="error">{errors.name.message}</p>}
</form>            

const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    navigate('/counter');
};
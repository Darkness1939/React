const opForm = ({}) => {
    const { register } = useForm();

    return (
        <div style={styles.container}>
        <h4>Sign up</h4>
        <form>
            <input 
            name="username" 
            ref={register({
                required: true, 
                minLength: 6,
                maxLength: 24
            })} 
            placeholder="Username" style={styles.input} />
            <input name="email" ref={register} placeholder="Email" style={styles.input} />
            <input name="password" ref={register} placeholder="Password" style={styles.input} />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default opForm;
function LoginPage() {

    return (
        <>
            <h1>Login</h1>
            <h2>Please enter your Login and your Password</h2>

            <form action="">
                <label>
                    <input type="email" placeholder="Username or E-mail" />
                </label>
                <label>
                    <input type="password" placeholder="Password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginPage;
import Background from "./Background";

function LoginPage() {

    return (
        <main className='container'>
            <Background />
            <div className="bin-content">
                <h1 className="main-title">Login</h1>
                <h2 className="notice">Please enter your Login and your Password</h2>

                <form action="">
                    <label>
                        <input type="email" placeholder="Username or E-mail" />
                    </label>
                    <label>
                        <input type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>



        </main>
    )
}

export default LoginPage;
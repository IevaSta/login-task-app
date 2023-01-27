function GreetingPage() {

    return (
        <main className='container'>
            <div className="bin-content">
                <h1 className="main-title">Welcome!</h1>
                <h2 className="notice">Please press Logout before closing the app</h2>

                <div className="button-container">
                    <button className="button-logout">Logout</button>
                </div>
            </div>

        </main>
    )
}

export default GreetingPage;
import { useContext } from "react";
import { logout_action } from "../Actions/dataActions";
import DataContext from "./DataContext";

function GreetingPage() {
    const { dispachData, setLoggedIn } = useContext(DataContext);

    const logOut = () => {
        setLoggedIn(false)
        dispachData(logout_action(true)
        )
    }

    return (
        <main className='container'>
            <div className="bin-content">
                <h1 className="main-title">Welcome!</h1>
                <h2 className="notice">Please press Logout before closing the app</h2>

                <div className="button-container">
                    <button className="button-logout" onClick={() => logOut()}>Logout</button>
                </div>
            </div>

        </main>
    )
}

export default GreetingPage;
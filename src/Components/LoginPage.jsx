import { useContext, useEffect, useRef, useState } from "react";
// import users from "../Accounts/accounts";
import { login_action } from "../Actions/dataActions";
import getId from "../Functions/getId";
import inputValidation from "../Functions/inputValidation";
import Background from "./Background";
import DataContext from "./DataContext";
import Notifications from "./Notifications";

function LoginPage() {
    const { data, dispachData, setLoggedIn } = useContext(DataContext);

    const adminAcc = {
        email: 'frontend@isawesome.com',
        pass: 'cool'
    };

    // const user = users.filter(u => u.email === 'frontend@isawesome.com')[0]
    // console.log(user);
    // if (user && user.pass === 'cool') {}

    const emailRef = useRef();
    const passRef = useRef();

    const [notificationsList, setNotificationsList] = useState([]);

    const login = (e) => {
        e.preventDefault();
        setNotificationsList([]);

        const email = inputValidation('email', emailRef.current.value);
        const pass = inputValidation('pass', passRef.current.value);

        const isEmail = !email.error;
        const isPass = !pass.error;

        if (isEmail && isPass) {
            if (emailRef.current.value === adminAcc.email && passRef.current.value === adminAcc.pass) {
                dispachData(
                    login_action({
                        id: getId(),
                        email: email.value,
                        pass: pass.value,
                        loggedIn: false,
                    })
                );
                emailRef.current.value = "";
                passRef.current.value = "";
                setLoggedIn(true)
            } else {
                setNotificationsList(n => [...n, 'Email or pass is not valid. Try again.'])
                emailRef.current.value = "";
                passRef.current.value = "";
            }
        } else {
            if (!isEmail) {
                setNotificationsList(n => [...n, email.notification])
            }
            if (!isPass) {
                setNotificationsList(n => [...n, pass.notification])
            }
        }
    }

    useEffect(() => {
        if (data) {
            const notifications = data[1];
            setNotificationsList(notifications);
        }
    }, [data]);

    return (
        <main className='container'>
            <Background />
            <div className="bin-content">
                <h1 className="main-title">Login</h1>
                <h2 className="notice">Please enter your Login and your Password</h2>
                {notificationsList.length ? <Notifications notificationsList={notificationsList} /> : null}
                <form onSubmit={e => login(e)} className="form-Login" action="">
                    <label htmlFor="email" className="label">
                        <div className="icon"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17C20.912 17 24.0833 13.8287 24.0833 9.91671C24.0833 6.00469 20.912 2.83337 17 2.83337C13.088 2.83337 9.91667 6.00469 9.91667 9.91671C9.91667 13.8287 13.088 17 17 17Z" stroke="white" strokeWidth="2" />
                            <path d="M24.0833 19.8334H24.582C25.6177 19.8337 26.6176 20.2121 27.394 20.8977C28.1703 21.5832 28.6696 22.5287 28.798 23.5564L29.3519 27.982C29.4017 28.3807 29.3662 28.7855 29.2476 29.1694C29.1291 29.5533 28.9303 29.9076 28.6643 30.2088C28.3984 30.5099 28.0714 30.7511 27.7051 30.9163C27.3388 31.0814 26.9416 31.1668 26.5398 31.1667H7.46017C7.05838 31.1668 6.66116 31.0814 6.29489 30.9163C5.92861 30.7511 5.60165 30.5099 5.3357 30.2088C5.06976 29.9076 4.87091 29.5533 4.75236 29.1694C4.63381 28.7855 4.59827 28.3807 4.64809 27.982L5.20059 23.5564C5.32907 22.5282 5.82876 21.5824 6.60568 20.8968C7.38261 20.2111 8.38324 19.833 9.41942 19.8334H9.91667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></div>
                        <input ref={emailRef} id="email" className="input" type="email" placeholder="Username or E-mail" />
                    </label>
                    <label htmlFor="pass" className="label">
                        <div className="icon"> <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3125 2.125C20.8193 2.12466 19.3467 2.4741 18.0128 3.14533C16.6789 3.81656 15.5208 4.7909 14.6313 5.99029C13.7418 7.18967 13.1456 8.58074 12.8905 10.052C12.6354 11.5233 12.7284 13.0339 13.1622 14.4628L2.125 25.5V31.875H8.5L19.5373 20.8377C20.8525 21.237 22.2384 21.348 23.6005 21.1632C24.9625 20.9784 26.2687 20.5021 27.43 19.7668C28.5914 19.0315 29.5805 18.0545 30.3301 16.9024C31.0797 15.7502 31.5721 14.45 31.7738 13.0904C31.9754 11.7307 31.8816 10.3435 31.4986 9.02343C31.1157 7.70332 30.4527 6.48129 29.5547 5.4406C28.6568 4.39991 27.545 3.56503 26.2953 2.99286C25.0455 2.42069 23.687 2.12468 22.3125 2.125ZM22.3125 19.125C21.581 19.1246 20.8535 19.0165 20.1535 18.8041L18.9348 18.4344L18.0349 19.3343L14.6551 22.7141L13.1899 21.25L11.6875 22.7524L13.1527 24.2176L11.4676 25.9027L10.0024 24.4375L8.5 25.9399L9.96519 27.4051L7.62025 29.75H4.25V26.3797L14.6646 15.9651L15.5656 15.0652L15.1959 13.8465C14.7417 12.3494 14.7712 10.7473 15.2802 9.26794C15.7891 7.7886 16.7516 6.50742 18.0307 5.60663C19.3097 4.70584 20.8403 4.23132 22.4046 4.25056C23.9689 4.26981 25.4873 4.78184 26.7439 5.71383C28.0004 6.64581 28.9311 7.95029 29.4034 9.4417C29.8758 10.9331 29.8659 12.5355 29.3751 14.0209C28.8843 15.5064 27.9375 16.7992 26.6696 17.7156C25.4016 18.6319 23.8769 19.1251 22.3125 19.125Z" fill="white" />
                            <path d="M23.375 12.75C24.5486 12.75 25.5 11.7986 25.5 10.625C25.5 9.45139 24.5486 8.5 23.375 8.5C22.2014 8.5 21.25 9.45139 21.25 10.625C21.25 11.7986 22.2014 12.75 23.375 12.75Z" fill="white" />
                        </svg></div>
                        <input ref={passRef} id="pass" className="input" type="password" placeholder="Password" />
                    </label>
                    <button className="greem-button" type="submit">Login</button>
                </form>
            </div>
        </main>
    )
}

export default LoginPage;
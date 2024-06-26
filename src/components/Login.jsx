import {useMutation} from "@apollo/client";
import {LOGIN_USER} from "../graphql/mutations/mutations.js";
import {setData, setEmail} from "../storages/localStorage.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Login = () => {
    let username;
    let password;
    const [loginUser, {loading, error, reset}] = useMutation(LOGIN_USER);
    const navigate = useNavigate();
    const [currentEmail, setCurrentEmail] = useState(null);

    if(loading) {
        return 'Loading';
    }
    if(error) {
        reset();
        return `Error: ${error}`;
    }

    const handleLogin = async (credentials) => {
        setData('email', credentials.username);
        const userData = await loginUser({ variables: { ...credentials } });

        if(userData.data.loginUser.token) {
            setData('username', userData.data.loginUser.username);
            setData('token',  userData.data.loginUser.token);
            navigate('/dashboard');
        }else {
            console.log(currentEmail);
            navigate('/verify-email');
        }
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 font-poppins">
                    <h1 className="text-4xl font-semibold text-center ">Welcome Back</h1>
                    <p className="font-medium text-sm text-gray-500 mt-4 text-center">Please enter your details.</p>
                    <form className="mt-8"
                          onSubmit={(e) => {
                              e.preventDefault();
                              handleLogin({username: username.value, password: password.value}).catch(console.log);
                              username.value = '';
                              password.value = '';
                          }}>
                        <div>
                            <label className="text-lg font-medium">Username</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter your username'
                                   ref={node => username = node}
                            />
                        </div>
                        <div className="mt-3.5">
                            <label className="text-lg font-medium">Password</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="password"
                                   placeholder='enter your password'
                                   ref={node => password = node}
                            />
                        </div>
                        <div className="flex justify-end mt-3">
                            <button className="font-medium active:text-violet-900 text-base text-violet-500">Forgot
                                Password
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button type="submit"
                                    className="py-3 rounded-xl hover:bg-violet-900 text-white text-lg font-bold bg-violet-500">Login
                            </button>
                            <p className="text-sm text-center">do not have an account? </p>
                        </div>
                        <div className="mt-3 flex items-center justify-end">
                            <button onClick={() => navigate('/register')}
                                type="button" className="text-sm text-blue-500 font-bold hover:text-blue-700 active:text-blue-900">Register Now!</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
            </div>
        </div>
    )
}
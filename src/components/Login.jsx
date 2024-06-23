// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import {useMutation} from "@apollo/client";
import {LOGIN_USER} from "../graphql/mutations/mutations.js";
import {setData} from "../localStorage/getterSetter.js";

export const Login = () => {
    let username;
    let password;
    const [loginUser, {loading, error, reset}] = useMutation(LOGIN_USER);

    if(loading) {
        return 'Loading';
    }
    if(error) {
        reset();
        return `Error: ${error}`;
    }

    const handleLogin = async (credentials) => {
        try {
            const userData = await loginUser({ variables: { ...credentials } });
            setData('username', userData.data.loginUser.username);
            setData('token', userData.data.loginUser.token);
        }catch (e) {
            throw e;
        }
    }

    return (
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
                    <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent" type="text"
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
                    <button className="font-medium active:text-violet-900 text-base text-violet-500">Forgot Password
                    </button>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button type="submit"
                            className="py-3 rounded-xl hover:bg-violet-900 text-white text-lg font-bold bg-violet-500">Sign
                        in
                    </button>
                </div>
            </form>
        </div>
    )
}
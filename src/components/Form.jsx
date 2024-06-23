import * as React from 'react';

export const Form = () => {
    return (
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 font-poppins">
            <h1 className="text-4xl font-semibold text-center ">Welcome Back</h1>
            <p className="font-medium text-sm text-gray-500 mt-4 text-center">Please enter your details.</p>
            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Username</label>
                    <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent" type="text"
                           placeholder='enter your username'/>
                </div>
                <div className="mt-3.5">
                    <label className="text-lg font-medium">Password</label>
                    <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                           type="password"
                           placeholder='enter your password'/>
                </div>
                <div className="flex justify-end mt-3">
                    <button className="font-medium hover:text-violet-900 text-base text-violet-500">Forgot Password
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button className="py-3 rounded-xl hover:bg-violet-900 text-white text-lg font-bold bg-violet-500">Sign
                    in
                </button>
            </div>
        </div>
    )
}
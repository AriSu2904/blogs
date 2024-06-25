import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {REQUEST_OTP, VERIFY_OTP} from "../graphql/mutations/mutations.js";
import {getData} from "../storages/localStorage.js";

export const VerifyEmail = () => {
    let otp;

    const [isDisabled, setDisabled] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    const [requestOTP, { loading, error }] = useMutation(REQUEST_OTP);
    const [verifyOTP, {load, err,} ] = useMutation(VERIFY_OTP);

    useEffect(() => {
        let timerId;
        if (isRunning && timeLeft > 0) {
            timerId = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(timerId);
    }, [isRunning, timeLeft]);

    const handleRequestOTP = async () => {
        const email = getData('email');
        const response = await requestOTP({ variables: { email }});
        if(response.status) {
            alert(response.message);
        }
    }

    const handleRedeemOTP = async ({ otp }) => {
        const email = getData('email');
        console.log(`otp ${JSON.stringify(otp)}`)
        await verifyOTP({ variables: { email, otp }});
    }

    return (
        <div className="w-full flex justify-center items-center">
            <div className="h-screen flex flex-col items-center justify-center w-1/2">
                <div className="border-2 text-center p-3 w-full h-1/2 bg-gray-200 drop-shadow-sm rounded-3xl">
                    <h1 className="font-bold text-xl leading-tight">
                        Please Verify your email address.
                    </h1>
                    <button className={`mt-5 p-3 bg-blue-200 rounded-xl hover:bg-blue-300 active:bg-blue-400 ${isDisabled ? 'cursor-not-allowed bg-gray-600 hover:bg-gray-600 active:bg-gray-600' : null}`}
                            type="submit"
                            onClick={() => {
                                handleRequestOTP().catch(console.log);
                                setDisabled(true);
                                setIsRunning(true);
                            }}
                    >
                        request OTP
                    </button>
                    <h1>
                        {timeLeft > 0 && isRunning? `${timeLeft}` : ``}
                    </h1>
                    <div className="mt-8">
                        <input className="border-2 border-gray-200 rounded-lg p-3 mt-1 text-center" maxLength="6" placeholder="OTP Input"
                        ref={node => otp = node}
                        />
                    </div>
                    <button
                        onClick={() => {
                            handleRedeemOTP({ otp: otp.value }).catch(console.log);
                        }}
                        className="mt-5 p-3 bg-blue-200 rounded-xl hover:bg-blue-300 active:bg-blue-400">
                        Verify OTP
                    </button>
                </div>
            </div>
        </div>
    )
}
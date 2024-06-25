import {useEffect, useState} from "react";

export const VerifyEmail = () => {
    const [isDisabled, setDisabled] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

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

    return (
        <div className="w-full flex justify-center items-center">
            <div className="h-screen flex flex-col items-center justify-center w-1/2">
                <div className="border-2 text-center p-3 w-full h-1/2 bg-gray-200 drop-shadow-sm rounded-3xl">
                    <h1 className="font-bold text-xl leading-tight">
                        Please Verify your email address.
                    </h1>
                    <button className={`mt-5 p-3 bg-blue-200 rounded-xl hover:bg-blue-300 active:bg-blue-400 ${isDisabled ? 'cursor-not-allowed hover:bg-blue-200 active:bg-blue-200' : null}`}
                            type="submit"
                            onClick={() => {
                                setDisabled(true);
                                setIsRunning(true);
                            }}
                    >
                        request OTP
                    </button>
                    <h1>
                        {timeLeft > 0 ? `${timeLeft}` : ``}
                    </h1>
                    <div className="mt-8">
                        <input className="border-2 border-gray-200 rounded-lg p-3 mt-1 text-center" maxLength="6" placeholder="OTP Input"/>
                    </div>
                    <button
                        onClick={() => {
                            setDisabled(false);
                        }}
                        className="mt-5 p-3 bg-blue-200 rounded-xl hover:bg-blue-300 active:bg-blue-400">
                        Verify OTP
                    </button>
                </div>
            </div>
        </div>
    )
}
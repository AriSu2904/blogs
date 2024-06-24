import {useMutation} from "@apollo/client";
import {REGISTER_USER} from "../graphql/mutations/mutations.js";

export const Register = () => {
    let username;
    let firstName;
    let lastName;
    let email;
    let gender;
    let phoneNumber;
    let birthDate;
    let password;
    let confirmPassword;

    const [registerUser, {loading, error, reset}] = useMutation(REGISTER_USER);

    if(loading) {
        return 'Loading';
    }
    if(error) {
        reset();
        return `Error: ${error}`;
    }

    const handleRegister = async (credentials) => {
        const result = await registerUser({ variables: {...credentials} });
        console.log(result);
    }

    return (
        <div className="flex w-full h-screen">
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
            </div>
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 font-poppins">
                    <h1 className="text-4xl font-semibold text-center ">Welcome Back</h1>
                    <p className="font-medium text-sm text-gray-500 mt-4 text-center">Please enter your details.</p>
                    <form className="mt-8"
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleRegister({username: username.value, firstName: firstName.value, lastName: lastName.value, email: email.value,
                                                gender: gender.value, phoneNumber: phoneNumber.value, birthDate: birthDate.value, password: password.value})
                            .catch(console.log);

                        username.value = ''
                        firstName.value = ''
                        lastName.value = ''
                        email.value = ''
                        gender.value = ''
                        phoneNumber.value = ''
                        birthDate.value = ''
                        password.value = ''
                        confirmPassword.value = ''
                    }}
                    >
                        <div>
                            <label className="text-lg font-medium">First name</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter your username'
                                   ref={node => firstName = node}
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium">Last name</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter your username'
                                   ref={node => lastName = node}
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium">Email</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="email"
                                   placeholder='enter your username'
                                   ref={node => email = node}
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium">Username</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter your username'
                                   ref={node => username = node}
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium">Gender</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter your username'
                                   ref={node => gender = node}
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium">Birth Date</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter your username'
                                   ref={node => birthDate = node}
                            />
                        </div>
                        <div>
                            <label className="text-lg font-medium">phone Number</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="text"
                                   placeholder='enter phone number'
                                   ref={node => phoneNumber = node}
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
                        <div className="mt-3.5">
                            <label className="text-lg font-medium">Confirm Password</label>
                            <input className="w-full border-2 border-gray-200 rounded-lg p-3 mt-1 bg-transparent"
                                   type="password"
                                   placeholder='Confirm your password'
                                   ref={node => confirmPassword = node}
                            />
                        </div>
                        <div className="flex justify-end mt-3">
                            <button className="font-medium active:text-violet-900 text-base text-violet-500">Forgot
                                Password
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button type="submit"
                                    className="py-3 rounded-xl hover:bg-violet-900 text-white text-lg font-bold bg-violet-500">Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
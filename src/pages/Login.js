import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [user, setUser] = useState({ email: 'malkitsingh01@gmail.com', password: 'Admin@123' });

    const handleInputChange = (event, keyName) => {
        event.persist();
        setUser((user) => {
            return { ...user, [keyName]: event.target.value }
        })
    }

    const logIn = async () => {
        try {
            console.log('trying to login here ');
            await Auth.signIn({
                username: user.email,
                password: user.password,
            });
            history.push('./dashboard')
        } catch (error) {
            console.error('error', error);
        }
    }

    return (

        <div className="min-h-screen bg-gray-100 flex items-center">
            <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                <div className="py-12 p-10 bg-white rounded-xl">

                    <div className="">
                        <label className="login-form-label" >Email</label>
                        <input value={user.email} onChange={(e) => handleInputChange(e, 'email')} type="email" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="joh@email.com" />
                    </div>
                    <div className="mb-6">
                        <label className="login-form-label" >Password</label>
                        <input value={user.password} onChange={(e) => handleInputChange(e, 'password')} type="password" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="*****" />
                    </div>
                    <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">Forgot password?</span>
                    <button onClick={() => logIn()} className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Login

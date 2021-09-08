import React from 'react'
import Auth from '@aws-amplify/auth';
import { Link } from "react-router-dom";

const Dashboard = () => {
    let signOut = async () => {
        await Auth.signOut();
        console.log("Sign out succesfully")
    }
    return (
        <div className="min-h-screen flex">
            <div className="py-12 px-10 w-1/4">
                <div className="flex space-2 items-center border-b-2 pb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-indigo-600" >
                            
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-3xl font-bold text-indigo-600">VENUS</h1>
                        <p className="text-center text-sm text-indigo-600 mt-1 font-serif">DASHBOARD</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" >
                            
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg text-white font-semibold">Dashboard</p>
                    </div>
                </div>
                <div className="mt-8">
                    <ul className="space-y-10">
                        <li>
                            <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
                                    
                                </svg>
                                Activity
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200" >
                                    <path    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Library
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200" viewBox="0 0 20 20" fill="currentColor">
                                    <path  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  />
                                </svg>
                                Security
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200" >
                                    <path    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Schedules
                            </a>
                        </li> */}
                        <li>
                            <a href="#" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200" >
                                    <path    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Payouts
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200" >
                                    <path    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Settings
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="flex mt-20 space-x-4 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200" >
                            
                        </svg>
                    </div>
                    <Link to={{ pathname: '/log-in' }} onClick={signOut} className="block font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">Logout</Link>
                </div>
            </div>
            <div className="bg-indigo-50 flex-grow py-12 px-10">
                <div className="flex justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-indigo-600">Hi Andrei,</h4>
                        <h1 className="text-4xl font-bold text-indigo-900 mt-">Welcome to Venus!</h1>
                    </div>

                </div>
                <div>
                    <div className="flex space-x-10">
                        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                            <div>
                                <span className="text-sm font-semibold text-gray-400">Spent this month</span>
                                <h1 className="text-2xl font-bold">$682.5</h1>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" >
                                    <path    d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                            <div>
                                <span className="text-sm font-semibold text-gray-400">Spent this month</span>
                                <h1 className="text-2xl font-bold">$682.5</h1>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                            <div>
                                <span className="text-sm font-semibold text-gray-400">Spent this month</span>
                                <h1 className="text-2xl font-bold">$682.5</h1>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" >
                                    <path    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                            <div>
                                <span className="text-sm font-semibold text-gray-400">Spent this month</span>
                                <h1 className="text-2xl font-bold">$682.5</h1>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"  />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-10 space-x-10">
                        <div className="bg-white w-2/3 p-8 flex items-center justify-around rounded-xl shadow-lg">
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-400">Total Spent</h3>
                                <h1 className="text-4xl font-bold text-indigo-600">$682.5</h1>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-indigo-600" >
                                    <path    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Dashboard

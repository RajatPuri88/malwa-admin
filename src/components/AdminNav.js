import React from 'react'
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";

const AdminNav = () => {
    let signOut = async () => {
        await Auth.signOut();
        console.log("Sign out succesfully")
    }
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to={{ pathname: '/adminDashboard' }}>Amrit Malwa</Link>
                        </div>

                        {/* <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div> */}
                    </div>


                    <div className="items-center md:flex">
                        <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <Link className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" to={{ pathname: '/adminDashboard' }}>Dashboard</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" to={{ pathname: '/add-del-branch' }}>Add/Del Branch</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" to={{ pathname: '/add-del-staff' }}>Add/Del Staff</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" to={{ pathname: '/staff-on-leave' }}>Staff on Leave</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" to={{ pathname: '/view-km-location' }}>View KM/Location</Link>
                            <Link className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" to={{ pathname: '/view-attendance' }}>View Attendance</Link>
                        </div>

                        <div className="flex items-center py-2 -mx-1 md:mx-0">
                            {/* <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a> */}

                            <Link className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" to={{ pathname: '/log-in' }} onClick={signOut}>Logout</Link>
                        </div>

                    </div>
                </div>


            </div>
        </nav>
    )
}

export default AdminNav

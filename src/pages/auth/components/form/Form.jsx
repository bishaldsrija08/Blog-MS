import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = ({type, onSubmit, user}) => {

        const [data, setData] = useState({
            email: '',
            username: '',
            password: ''
        })
    
        const handleChange = (e) => {
            const { name, value } = e.target
            // console.log(e.target.name, e.target.value)
            setData({
                ...data,
                [name]: value
            })
        }
    
        const onFormSubmit = async (e) => {
            e.preventDefault() //form submit garapaxi reload hudena
            onSubmit(data)
        }

  return (
    <>
    <form onSubmit={onFormSubmit}>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                        <h5 className="text-2xl font-semibold">
                                {type === "Login" && `Hey, ${user?.username}`}
                            </h5>
                            <h1 className="text-2xl font-semibold">
                                {type === "Login" ? "Login here!" : "Register here."}
                            </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {type === "Register" && ( //type ko value register xa vane username dekha natra nadeka vaneko
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="text"
                                            name="username"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Username"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label
                                            htmlFor="text"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Username
                                        </label>
                                    </div>
                                )}
                                <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="email"
                                        name="email"
                                        type="text"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Email Address
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        required
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            {
                                type === "Register" ? (<Link to={"/login"} className="text-blue-500" >Go to Login..</Link>) : (<Link to={"/register"} className="text-blue-500">Got to Register...</Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</>
  )
}

export default Form
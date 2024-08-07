import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users,setUsers] = useState('')
    const navigate = useNavigate();

    const loginCheck = async (email,password) => {
        try {
            const res = await fetch('http://localhost:5467/User');
            const data = await res.json();
            const user = data.find(user => user.email == email);
            try {
                if(user){
                    if(user.password ===password){
                        localStorage.setItem('user', user.username)
                        navigate('/dashboard')
                    }
                    else{
                        console.log("password is incorrect")
                    }
                }
                   
                else {
                    console.log("email is wrong")
                }
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCheck(email, password);
    };

    return (
        <section className="bg-indigo-50">
            <div className="container mx-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;

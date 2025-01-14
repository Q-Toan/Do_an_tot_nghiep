"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!acceptPolicy) {
      setError("You must accept the privacy policy.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        email,
        password,
        confirmPassword
      });
      console.log(response.data);

      router.push('/page/login');
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-900">Register</h2>
        <form className="mt-6 space-y-6" onSubmit={handleRegister}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <i className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`} />
              </div>
            </div>
          </div>

          {/* Thêm trường confirm password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="accept-policy"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={acceptPolicy}
              onChange={(e) => setAcceptPolicy(e.target.checked)}
            />
            <label htmlFor="accept-policy" className="ml-2 block text-sm text-gray-900">
              I accept the privacy policy.
            </label>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#a42125] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/page/login" className="font-medium text-[#a42125] hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

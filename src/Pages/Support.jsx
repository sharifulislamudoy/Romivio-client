import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate()
    const handleChat = () => {
        navigate('/contact')
    }
    return (
        <div className='w-11/12 mx-auto'>
            <section class="bg-blue-100 text-center py-12">
                <h1 class="text-4xl font-bold text-blue-900">Support Center</h1>
                <p class="text-gray-700 mt-2 text-lg">Have questions or issues? We're always ready to help.</p>
            </section>


            <section class="max-w-5xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 class="text-xl font-semibold text-blue-700">🔑 Account Help</h3>
                    <p class="text-gray-600 mt-2">Issues with login, signup, or profile setup.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 class="text-xl font-semibold text-blue-700">🏠 Listings & Bookings</h3>
                    <p class="text-gray-600 mt-2">Help with finding rooms, booking, or managing listings.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h3 class="text-xl font-semibold text-blue-700">💬 Communication</h3>
                    <p class="text-gray-600 mt-2">Problems with messaging or contacting roommates.</p>
                </div>
            </section>


            <section class="max-w-3xl mx-auto my-10 px-4">
                <h2 class="text-2xl font-bold mb-6 text-center text-blue-800">Frequently Asked Questions</h2>
                <div class="space-y-4">
                    <details class="border rounded-md p-4 bg-white">
                        <summary class="font-semibold text-blue-700 cursor-pointer">How do I reset my password?</summary>
                        <p class="mt-2 text-gray-600">Go to your profile, click “Forgot Password,” and follow the instructions.</p>
                    </details>
                    <details class="border rounded-md p-4 bg-white">
                        <summary class="font-semibold text-blue-700 cursor-pointer">How do I delete my Roomivio account?</summary>
                        <p class="mt-2 text-gray-600">Contact support or go to Settings, Account, Delete Account.</p>
                    </details>
                    <details class="border rounded-md p-4 bg-white">
                        <summary class="font-semibold text-blue-700 cursor-pointer">Why can't I message a host?</summary>
                        <p class="mt-2 text-gray-600">You must be logged in and have a complete profile to message a host.</p>
                    </details>
                </div>
            </section>


            <div class="fixed bottom-6 right-6 z-50">
                <button onClick={handleChat} class="bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-800">
                    💬 Live Chat
                </button>
            </div>
        </div>
    );
};

export default Support;
import React from 'react';

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section class="text-center py-12 bg-blue-100">
                <h1 class="text-4xl font-bold text-blue-900">Get in Touch</h1>
                <p class="mt-2 text-gray-600 text-lg">Questions, feedback, or suggestions? We’d love to hear from you.</p>
            </section>
            <section class="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
                <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="col-span-2">
                        <label class="block text-gray-700 font-semibold mb-1">Full Name</label>
                        <input type="text" placeholder="Your Name" class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label class="block text-gray-700 font-semibold mb-1">Email</label>
                        <input type="email" placeholder="you@example.com" class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label class="block text-gray-700 font-semibold mb-1">Phone</label>
                        <input type="tel" placeholder="+8801XXXXXXXXX" class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div class="col-span-2">
                        <label class="block text-gray-700 font-semibold mb-1">Message</label>
                        <textarea rows="5" placeholder="Type your message here..." class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div class="col-span-2 text-center">
                        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
            <section class="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                    <h3 class="text-xl font-semibold text-blue-800">📞 Phone</h3>
                    <p class="text-gray-600 mt-2">+880 1234-567890</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-blue-800">📧 Email</h3>
                    <p class="text-gray-600 mt-2">support@roomivio.com</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-blue-800">📍 Address</h3>
                    <p class="text-gray-600 mt-2">123 Roomivio Street, Jurain, Dhaka</p>
                </div>
            </section>

        </div>
    );
};

export default Contact;
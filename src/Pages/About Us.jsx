import MyComponent from "../Components/Hook";

export default function AboutUs() {
    MyComponent();
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <h1 className="text-4xl font-bold mb-4">About Roomivio</h1>
                <p className="text-lg max-w-2xl mx-auto">Connecting people with perfect roommates, one match at a time.</p>
            </section>

            {/* Our Story */}
            <section className="py-12 px-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700">
                    Roomivio was born out of the need for a reliable, user-friendly platform to help students and young professionals find compatible roommates and comfortable living spaces. We realized that finding a good roommate is just as important as finding a good home — so we built Roomivio to make both easier.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-100 py-12 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p>To simplify the process of finding and securing shared living spaces, making roommate discovery and room rental seamless, secure, and stress-free.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                        <p>To become the most trusted roommate and rental discovery platform in South Asia — helping millions feel at home, wherever they go.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-12 px-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">How Roomivio Works</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-lg font-bold mb-2">1. Create Your Profile</h4>
                        <p>Sign up, tell us about yourself and your preferences.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">2. Browse & Connect</h4>
                        <p>Explore listings or roommates that match your lifestyle and location.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">3. Book or Chat</h4>
                        <p>Message, schedule visits, and finalize your next move — all on Roomivio.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">What Users Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <blockquote className="bg-white p-6 rounded shadow">
                        <p>"Roomivio helped me find a great roommate just a few kilometers from my university. Super easy to use!"</p>
                        <cite className="block ..4 text-sm text-gray-500">— Ayesha, Dhaka</cite>
                    </blockquote>
                    <blockquote className="bg-white p-6 rounded shadow">
                        <p>"I was struggling to find a room in a safe area. Roomivio made it simple and safe."</p>
                        <cite className="block ..4 text-sm text-gray-500">— Rifat, Chittagong</cite>
                    </blockquote>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to find your perfect roommate?</h2>
                <a href="/signup" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">Join Roomivio Today</a>
            </section>
        </div>
    );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OurUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://roomivio-server.vercel.app/users")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center text-gray-500">Loading users...</div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center text-red-500">Error: {error}</div>
    );
  }
  if (!users || users.length === 0) {
    return (
      <div className="py-16 text-center text-gray-500">No users found.</div>
    );
  }
  return (
    <motion.section
      className="py-16 px-4 bg-base-100 text-base-content w-5/6 mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          👥 Our Users
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full text-sm border border-base-300">
            <thead>
              <tr className="bg-base-200 text-base-content">
                <th className="p-3">Photo</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Gender Preference</th>
                <th className="p-3">Location</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, name, email, location, photo, genderPref }) => (
                <tr key={_id} className="hover:bg-base-200 transition">
                  <td className="p-3">
                    <img
                      src={photo}
                      alt={name}
                      className="w-12 h-12 rounded-full object-cover border border-primary"
                    />
                  </td>
                  <td className="p-3 font-medium">{name}</td>
                  <td className="p-3 text-gray-600">{email}</td>
                  <td className="p-3 text-gray-600">{genderPref}</td>
                  <td className="p-3 text-gray-500">{location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
};

export default OurUsers;

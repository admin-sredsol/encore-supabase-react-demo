import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminDashboard() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState<any[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const { data, error } = await supabase.auth.admin.listUsers();
        if (error) throw error;
        setUsers(data.users);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const { data, error } = await supabase.from('analytics').select('*');
        if (error) throw error;
        setAnalytics(data);
      } catch (e: any) {
        setError(e.message);
      }
    }

    fetchAnalytics();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    try {
      const { error } = await supabase.auth.admin.deleteUser(userId);
      if (error) throw error;
      setUsers(users.filter((user) => user.id !== userId));
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleAssignRole = async (userId: string, role: string) => {
    try {
      const { error } = await supabase.auth.admin.updateUserById(userId, {
        app_metadata: { role },
      });
      if (error) throw error;
      setUsers(
        users.map((user) =>
          user.id === userId ? { ...user, app_metadata: { role } } : user
        )
      );
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {user.app_metadata?.role || 'User'}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleAssignRole(user.id, 'admin')}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-6">Usage Analytics</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">User ID</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map((entry) => (
            <tr key={entry.id}>
              <td className="border border-gray-300 px-4 py-2">{entry.user_id}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.action}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(entry.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
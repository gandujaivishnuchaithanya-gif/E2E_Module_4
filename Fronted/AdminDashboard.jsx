
import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [stats, setStats] = useState({ totalUsers: 0, totalWorkers: 0, totalBookings: 0 });

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setStats({
      totalUsers: 150,
      totalWorkers: 45,
      totalBookings: bookings.length
    });
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Admin Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h2>{stats.totalUsers}</h2>
          <p>Total Users</p>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>
          <h2>{stats.totalWorkers}</h2>
          <p>Total Workers</p>
        </div>
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
          <h2>{stats.totalBookings}</h2>
          <p>Total Bookings</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h2>Pending Worker Verifications</h2>
        <div style={{ marginTop: '1rem' }}>
          <div style={{ padding: '1rem', background: '#f9fafb', borderRadius: '8px', marginBottom: '1rem' }}>
            <p><strong>Mike Mechanic</strong> - Mechanic</p>
            <button className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Verify Worker</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

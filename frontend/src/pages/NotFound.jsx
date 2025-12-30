import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>The page you're looking for doesn't exist!</p>
      <Link to="/" style={{
        backgroundColor: 'var(--accent-color)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: 'var(--radius-md)',
        fontWeight: 'bold'
      }}>
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;

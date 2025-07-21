import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Dashboard', icon: '📊' },
        { path: '/analytics', label: 'Analytics', icon: '📈' },
        { path: '/reports', label: 'Reports', icon: '📋' },
        { path: '/settings', label: 'Settings', icon: '⚙️' },
    ];

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <nav style={{
            backgroundColor: '#2c3e50',
            padding: '1rem',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
            }}>
                <h2 style={{
                    color: 'white',
                    margin: 0,
                    fontSize: '1.5rem'
                }}>
                    Remote App 1
                </h2>
                <div style={{
                    backgroundColor: '#34495e',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                }}>
                    Federated Module
                </div>
            </div>

            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
            }}>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            style={{
                                textDecoration: 'none',
                                color: isActive(item.path) ? '#3498db' : 'white',
                                backgroundColor: isActive(item.path) ? 'rgba(52, 152, 219, 0.2)' : 'transparent',
                                padding: '10px 15px',
                                borderRadius: '6px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'all 0.3s ease',
                                border: isActive(item.path) ? '1px solid #3498db' : '1px solid transparent',
                                fontSize: '0.9rem',
                                fontWeight: isActive(item.path) ? 'bold' : 'normal'
                            }}
                            onMouseOver={(e) => {
                                if (!isActive(item.path)) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (!isActive(item.path)) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

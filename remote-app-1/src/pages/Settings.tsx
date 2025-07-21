import React from 'react';

const Settings: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <header style={{
                backgroundColor: '#9C27B0',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h1 style={{ margin: 0 }}>Settings</h1>
                <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Configure your application preferences</p>
            </header>

            <main>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#7B1FA2', marginTop: 0 }}>General Settings</h2>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
                                    Application Name:
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Remote App 1"
                                    style={{
                                        width: '100%',
                                        maxWidth: '300px',
                                        padding: '10px',
                                        border: '2px solid #E1BEE7',
                                        borderRadius: '4px',
                                        fontSize: '14px'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
                                    Theme:
                                </label>
                                <select style={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    padding: '10px',
                                    border: '2px solid #E1BEE7',
                                    borderRadius: '4px',
                                    fontSize: '14px'
                                }}>
                                    <option>Light</option>
                                    <option>Dark</option>
                                    <option>Auto</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        style={{ marginRight: '10px' }}
                                    />
                                    Enable notifications
                                </label>
                            </div>
                        </div>
                    </section>

                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#7B1FA2', marginTop: 0 }}>Data & Privacy</h2>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        style={{ marginRight: '10px' }}
                                    />
                                    Allow data collection for analytics
                                </label>
                                <p style={{ margin: '5px 0 0 25px', color: '#666', fontSize: '0.9em' }}>
                                    Help us improve the application by sharing usage data
                                </p>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                                    <input
                                        type="checkbox"
                                        style={{ marginRight: '10px' }}
                                    />
                                    Enable advanced security features
                                </label>
                                <p style={{ margin: '5px 0 0 25px', color: '#666', fontSize: '0.9em' }}>
                                    Additional security measures for sensitive data
                                </p>
                            </div>
                        </div>
                    </section>

                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#7B1FA2', marginTop: 0 }}>Account</h2>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                            <button style={{
                                backgroundColor: '#9C27B0',
                                color: 'white',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}>
                                Save Changes
                            </button>

                            <button style={{
                                backgroundColor: 'transparent',
                                color: '#9C27B0',
                                border: '2px solid #9C27B0',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 'bold'
                            }}>
                                Reset to Default
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Settings;

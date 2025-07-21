import React from 'react';

const Analytics: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <header style={{
                backgroundColor: '#2196F3',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h1 style={{ margin: 0 }}>Analytics</h1>
                <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Detailed Analytics and Metrics</p>
            </header>

            <main>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#1976D2', marginTop: 0 }}>Traffic Analytics</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                            <div>
                                <h4>Page Views</h4>
                                <p style={{ fontSize: '1.5em', color: '#1976D2' }}>324,567</p>
                                <p style={{ color: '#666', fontSize: '0.9em' }}>↑ 12.5% from last month</p>
                            </div>
                            <div>
                                <h4>Unique Visitors</h4>
                                <p style={{ fontSize: '1.5em', color: '#1976D2' }}>89,234</p>
                                <p style={{ color: '#666', fontSize: '0.9em' }}>↑ 8.3% from last month</p>
                            </div>
                        </div>
                    </section>

                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#1976D2', marginTop: 0 }}>User Behavior</h2>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontWeight: 'bold' }}>Average Session Duration:</span>
                                <span style={{ marginLeft: '10px', color: '#1976D2' }}>4m 32s</span>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontWeight: 'bold' }}>Bounce Rate:</span>
                                <span style={{ marginLeft: '10px', color: '#1976D2' }}>23.4%</span>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontWeight: 'bold' }}>Pages per Session:</span>
                                <span style={{ marginLeft: '10px', color: '#1976D2' }}>3.7</span>
                            </div>
                        </div>
                    </section>

                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#1976D2', marginTop: 0 }}>Top Pages</h2>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                <span>/dashboard</span>
                                <span style={{ color: '#1976D2' }}>45,623 views</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                <span>/analytics</span>
                                <span style={{ color: '#1976D2' }}>32,145 views</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                                <span>/reports</span>
                                <span style={{ color: '#1976D2' }}>28,934 views</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                                <span>/settings</span>
                                <span style={{ color: '#1976D2' }}>15,267 views</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Analytics;

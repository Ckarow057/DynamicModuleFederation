import React from 'react';

const Reports: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <header style={{
                backgroundColor: '#FF9800',
                color: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h1 style={{ margin: 0 }}>Reports</h1>
                <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Generate and View Reports</p>
            </header>

            <main>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#F57C00', marginTop: 0 }}>Quick Reports</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                            <button style={{
                                backgroundColor: '#FFF3E0',
                                border: '2px solid #FF9800',
                                borderRadius: '8px',
                                padding: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>
                                <h4 style={{ margin: '0 0 10px 0', color: '#F57C00' }}>Daily Summary</h4>
                                <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Last 24 hours activity</p>
                            </button>

                            <button style={{
                                backgroundColor: '#FFF3E0',
                                border: '2px solid #FF9800',
                                borderRadius: '8px',
                                padding: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>
                                <h4 style={{ margin: '0 0 10px 0', color: '#F57C00' }}>Weekly Report</h4>
                                <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Past 7 days overview</p>
                            </button>

                            <button style={{
                                backgroundColor: '#FFF3E0',
                                border: '2px solid #FF9800',
                                borderRadius: '8px',
                                padding: '20px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>
                                <h4 style={{ margin: '0 0 10px 0', color: '#F57C00' }}>Monthly Report</h4>
                                <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Complete month analysis</p>
                            </button>
                        </div>
                    </section>

                    <section style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ color: '#F57C00', marginTop: 0 }}>Recent Reports</h2>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '15px 0',
                                borderBottom: '1px solid #eee'
                            }}>
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0' }}>Q4 2024 Performance Report</h4>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Generated on Dec 15, 2024</p>
                                </div>
                                <button style={{
                                    backgroundColor: '#FF9800',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    Download
                                </button>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '15px 0',
                                borderBottom: '1px solid #eee'
                            }}>
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0' }}>User Engagement Analysis</h4>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Generated on Dec 10, 2024</p>
                                </div>
                                <button style={{
                                    backgroundColor: '#FF9800',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    Download
                                </button>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '15px 0'
                            }}>
                                <div>
                                    <h4 style={{ margin: '0 0 5px 0' }}>Security Audit Report</h4>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>Generated on Dec 5, 2024</p>
                                </div>
                                <button style={{
                                    backgroundColor: '#FF9800',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}>
                                    Download
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Reports;

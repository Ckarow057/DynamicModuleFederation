import './App.css'

function App() {

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0 }}>Remote App A - Dashboard</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Analytics & Reporting Module</p>
      </header>

      <main>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#f0f8f0',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #4CAF50'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>User Analytics</h3>
            <p style={{ fontSize: '2em', color: '#1b5e20', margin: '10px 0' }}>15,847</p>
            <p style={{ color: '#555', margin: 0 }}>Active users this month</p>
          </div>

          <div style={{
            backgroundColor: '#f0f8f0',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #4CAF50'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>Revenue</h3>
            <p style={{ fontSize: '2em', color: '#1b5e20', margin: '10px 0' }}>$245,890</p>
            <p style={{ color: '#555', margin: 0 }}>Total this quarter</p>
          </div>

          <div style={{
            backgroundColor: '#f0f8f0',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #4CAF50'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>Performance</h3>
            <p style={{ fontSize: '2em', color: '#1b5e20', margin: '10px 0' }}>97.8%</p>
            <p style={{ color: '#555', margin: 0 }}>System uptime</p>
          </div>
        </div>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2e7d32', marginTop: 0 }}>Recent Activity</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              📊 Analytics report generated for Q3 2024
            </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              👥 New user cohort analysis completed
            </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
              📈 Performance metrics updated
            </li>
            <li style={{ padding: '10px 0' }}>
              🔔 System health check passed
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App

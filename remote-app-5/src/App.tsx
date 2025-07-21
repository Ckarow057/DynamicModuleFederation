import './App.css'

function App() {

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        backgroundColor: '#607D8B',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0 }}>Remote App E - Settings & Configuration</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>System Preferences & Admin Tools</p>
      </header>

      <main>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <section style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #607D8B'
          }}>
            <h3 style={{ color: '#455a64', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ⚙️ General Settings
            </h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>
                Application Theme
              </label>
              <select style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}>
                <option>Light Theme</option>
                <option>Dark Theme</option>
                <option>Auto (System)</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>
                Language
              </label>
              <select style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
                <input type="checkbox" defaultChecked />
                Enable notifications
              </label>
            </div>
          </section>

          <section style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            border: '1px solid #607D8B'
          }}>
            <h3 style={{ color: '#455a64', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔒 Security Settings
            </h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#333', fontWeight: '500' }}>
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                defaultValue="30"
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
                <input type="checkbox" defaultChecked />
                Two-factor authentication
              </label>
            </div>
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#333' }}>
                <input type="checkbox" />
                Auto-logout on idle
              </label>
            </div>
          </section>
        </div>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#455a64', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            📊 System Status
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#2e7d32' }}>API Server</div>
              <div style={{ color: '#4caf50', marginTop: '5px' }}>✅ Online</div>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>99.9% uptime</div>
            </div>

            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#2e7d32' }}>Database</div>
              <div style={{ color: '#4caf50', marginTop: '5px' }}>✅ Connected</div>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>Response: 12ms</div>
            </div>

            <div style={{
              backgroundColor: '#fff3e0',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#f57c00' }}>Storage</div>
              <div style={{ color: '#ff9800', marginTop: '5px' }}>⚠️ 78% Full</div>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>1.2TB used</div>
            </div>

            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '15px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#2e7d32' }}>Backup</div>
              <div style={{ color: '#4caf50', marginTop: '5px' }}>✅ Current</div>
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>Last: 2 hours ago</div>
            </div>
          </div>
        </section>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#455a64', marginTop: 0 }}>Administration Tools</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#607D8B',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              🔄 System Backup
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              📋 View Logs
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              🧹 Clear Cache
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              💾 Export Config
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#F44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              🔄 Restart Services
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

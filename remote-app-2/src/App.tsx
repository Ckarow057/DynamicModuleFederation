import './App.css'

function App() {

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        backgroundColor: '#2196F3',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0 }}>Remote App B - User Management</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>User Accounts & Permissions</p>
      </header>

      <main>
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            backgroundColor: '#e3f2fd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #2196F3'
          }}>
            <h3 style={{ color: '#1976d2', marginTop: 0 }}>Quick Actions</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button style={{
                padding: '10px 15px',
                backgroundColor: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Add New User
              </button>
              <button style={{
                padding: '10px 15px',
                backgroundColor: '#FFC107',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Bulk Import
              </button>
              <button style={{
                padding: '10px 15px',
                backgroundColor: '#FF9800',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Export Users
              </button>
            </div>
          </div>
        </div>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#1976d2', marginTop: 0 }}>Active Users</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Email</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Role</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>John Smith</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>john@example.com</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Admin</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 8px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Sarah Johnson</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>sarah@example.com</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Editor</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 8px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Mike Wilson</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>mike@example.com</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Viewer</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 8px',
                      backgroundColor: '#FF9800',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

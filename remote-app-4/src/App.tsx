import './App.css'

function App() {

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        backgroundColor: '#FF5722',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0 }}>Remote App D - Order Management</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Sales Orders & Fulfillment</p>
      </header>

      <main>
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              backgroundColor: '#ffebee',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #FF5722'
            }}>
              <h3 style={{ color: '#d84315', marginTop: 0 }}>📦 Pending Orders</h3>
              <p style={{ fontSize: '2.5em', color: '#bf360c', margin: '10px 0' }}>127</p>
              <p style={{ color: '#555', margin: 0, fontSize: '0.9em' }}>Awaiting processing</p>
            </div>

            <div style={{
              backgroundColor: '#ffebee',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #FF5722'
            }}>
              <h3 style={{ color: '#d84315', marginTop: 0 }}>🚚 In Transit</h3>
              <p style={{ fontSize: '2.5em', color: '#bf360c', margin: '10px 0' }}>89</p>
              <p style={{ color: '#555', margin: 0, fontSize: '0.9em' }}>On the way to customers</p>
            </div>

            <div style={{
              backgroundColor: '#ffebee',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #FF5722'
            }}>
              <h3 style={{ color: '#d84315', marginTop: 0 }}>✅ Delivered</h3>
              <p style={{ fontSize: '2.5em', color: '#bf360c', margin: '10px 0' }}>1,234</p>
              <p style={{ color: '#555', margin: 0, fontSize: '0.9em' }}>This month</p>
            </div>
          </div>
        </div>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#d84315', marginTop: 0 }}>Recent Orders</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#ffebee' }}>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Order ID</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Customer</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Amount</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Status</th>
                  <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #FF5722' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>#ORD-2024-001</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Alice Cooper</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>$299.99</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 12px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      Delivered
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Jan 15, 2024</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>#ORD-2024-002</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Bob Johnson</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>$156.50</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 12px',
                      backgroundColor: '#2196F3',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      In Transit
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Jan 14, 2024</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>#ORD-2024-003</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Carol Williams</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>$89.99</td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
                    <span style={{
                      padding: '4px 12px',
                      backgroundColor: '#FF9800',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      Processing
                    </span>
                  </td>
                  <td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Jan 13, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#d84315', marginTop: 0 }}>Order Management Tools</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#FF5722',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              📝 Create New Order
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
              📊 Order Analytics
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#9E9E9E',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              📋 Export Orders
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#795548',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              🔍 Track Shipment
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

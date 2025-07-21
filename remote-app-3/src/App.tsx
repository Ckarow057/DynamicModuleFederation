import './App.css'

function App() {

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        backgroundColor: '#9C27B0',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h1 style={{ margin: 0 }}>Remote App C - Inventory System</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Product Management & Stock Control</p>
      </header>

      <main>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '30px'
        }}>
          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #9C27B0'
          }}>
            <h4 style={{ color: '#7b1fa2', margin: '0 0 10px 0' }}>Total Products</h4>
            <p style={{ fontSize: '1.8em', color: '#4a148c', margin: 0 }}>2,847</p>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #9C27B0'
          }}>
            <h4 style={{ color: '#7b1fa2', margin: '0 0 10px 0' }}>Low Stock</h4>
            <p style={{ fontSize: '1.8em', color: '#e91e63', margin: 0 }}>23</p>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #9C27B0'
          }}>
            <h4 style={{ color: '#7b1fa2', margin: '0 0 10px 0' }}>Out of Stock</h4>
            <p style={{ fontSize: '1.8em', color: '#f44336', margin: 0 }}>7</p>
          </div>

          <div style={{
            backgroundColor: '#f3e5f5',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #9C27B0'
          }}>
            <h4 style={{ color: '#7b1fa2', margin: '0 0 10px 0' }}>Categories</h4>
            <p style={{ fontSize: '1.8em', color: '#4a148c', margin: 0 }}>47</p>
          </div>
        </div>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#7b1fa2', marginTop: 0 }}>Recent Inventory Changes</h2>
          <div style={{
            maxHeight: '300px',
            overflowY: 'auto',
            border: '1px solid #e0e0e0',
            borderRadius: '4px'
          }}>
            <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>
              <strong>MacBook Pro 16"</strong> - Stock updated: 45 → 38 units
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>
                🕒 2 hours ago
              </div>
            </div>
            <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>
              <strong>Wireless Mouse</strong> - New shipment received: +150 units
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>
                🕒 5 hours ago
              </div>
            </div>
            <div style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>
              <strong>USB-C Cable</strong> - Critical: Only 3 units remaining
              <div style={{ fontSize: '0.9em', color: '#f44336', marginTop: '4px' }}>
                ⚠️ 1 day ago
              </div>
            </div>
            <div style={{ padding: '12px' }}>
              <strong>Bluetooth Headphones</strong> - Category updated: Audio → Electronics
              <div style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>
                🕒 2 days ago
              </div>
            </div>
          </div>
        </section>

        <section style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#7b1fa2', marginTop: 0 }}>Quick Actions</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#9C27B0',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Add Product
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#FF9800',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Stock Report
            </button>
            <button style={{
              padding: '12px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Reorder Items
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

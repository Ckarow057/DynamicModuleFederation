import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'

import { fetchRemoteApps, createDynamicRemoteApp } from "./utils/app_utils";

function App() {
  const [imports, setImports] = useState<any[]>([]);
  const [currentConfigIndex, setCurrentConfigIndex] = useState(0);
  const [currentRemoteKey, setCurrentRemoteKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [remoteApps, setRemoteApps] = useState<any[]>([]);

  useEffect(() => {
    loadRemoteApps();
  }, []);

  const loadRemoteApps = async () => {
    setIsLoading(true);
    const apps = await fetchRemoteApps();
    setImports(apps);
    setRemoteApps(apps);
    setIsLoading(false);
  };

  const handleCycleRemote = () => {
    const nextIndex = (currentConfigIndex + 1) % imports.length;
    setCurrentConfigIndex(nextIndex);
    setCurrentRemoteKey(prev => prev + 1);
  };

  const handleRefreshRemoteApps = async () => {
    await loadRemoteApps();
    setCurrentConfigIndex(0);
    setCurrentRemoteKey(prev => prev + 1);
  };

  const DynamicRemoteApp = createDynamicRemoteApp(imports, currentConfigIndex);

  if (isLoading) {
    return <div>Loading remote applications...</div>;
  }

  if (remoteApps.length === 0) {
    return <div>No remote applications found. Check your backend connection.</div>;
  }

  return (
    <div className="app">
      <div style={{ margin: '10px' }}>
        <button onClick={handleCycleRemote} style={{ margin: '5px', padding: '10px' }}>
          Cycle Remote App ({imports.length > 0 ? `${currentConfigIndex + 1}/${imports.length}` : '0/0'})
        </button>
        <button onClick={handleRefreshRemoteApps} style={{ margin: '5px', padding: '10px', backgroundColor: '#28a745', color: 'white' }}>
          Refresh Remote Apps
        </button>
      </div>

      <React.Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<DynamicRemoteApp key={currentRemoteKey} />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App

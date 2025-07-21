import React, { lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'

import {
  __federation_method_getRemote,
  __federation_method_setRemote,
  // @ts-ignore
} from "__federation__";

let imports: any[] = [];
let currentConfigIndex = 0;

async function fetchRemoteApps() {
  try {
    const res = await fetch('http://localhost:3000/all');
    const data = await res.json();
    imports = data.rows;
    return imports;
  } catch (error) {
    console.error('Failed to fetch remote apps:', error);
    return [];
  }
}

function UseFeatureFlagsOrSomethingCoolToGetRemote() {
  const remoteConfig = imports[currentConfigIndex];
  return remoteConfig;
}

function cycleToNextRemote() {
  currentConfigIndex = (currentConfigIndex + 1) % imports.length;
}

function createDynamicRemoteApp() {
  return lazy(() => {
    const { url, name, module } = UseFeatureFlagsOrSomethingCoolToGetRemote();

    __federation_method_setRemote(name, {
      url: () => Promise.resolve(url),
      format: "esm",
      from: "vite",
    });

    return __federation_method_getRemote(name, module);
  });
}


function App() {
  const [currentRemoteKey, setCurrentRemoteKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [remoteApps, setRemoteApps] = useState<any[]>([]);

  useEffect(() => {
    loadRemoteApps();
  }, []);

  const loadRemoteApps = async () => {
    setIsLoading(true);
    const apps = await fetchRemoteApps();
    setRemoteApps(apps);
    setIsLoading(false);
  };

  const handleCycleRemote = () => {
    cycleToNextRemote();
    setCurrentRemoteKey(prev => prev + 1);
  };

  const handleRefreshRemoteApps = async () => {
    await loadRemoteApps();
    currentConfigIndex = 0;
    setCurrentRemoteKey(prev => prev + 1);
  };

  const DynamicRemoteApp = createDynamicRemoteApp();

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

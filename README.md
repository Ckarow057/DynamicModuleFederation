# Dynamic Module Federation with Vite - Demo Project

A demonstration project showcasing **Dynamic Module Federation** using Vite, React, and TypeScript. This project implements runtime module federation where remote applications are loaded dynamically based on configuration stored in a SQLite database.

## 🎯 Project Overview

This demo showcases a micro-frontend architecture with:
- **1 Host Application** (`main-app`) - The shell that dynamically loads remote modules
- **5 Remote Applications** (`remote-app-1` through `remote-app-5`) - Micro-frontends that can be loaded at runtime
- **Backend Service** - Express.js API that serves module configuration from SQLite database
- **Database** - SQLite database storing remote module configurations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Module Federation**: `@originjs/vite-plugin-federation`
- **Backend**: Express.js with SQLite3
- **Routing**: React Router DOM v7

## ✨ Key Features

- **Runtime Module Loading**: Remote applications are loaded dynamically at runtime, not compile time
- **Database-Driven Configuration**: Module configurations are stored in SQLite and can be updated without rebuilding
- **Hot Module Switching**: Cycle between different remote applications without page refresh
- **Shared Dependencies**: React, React DOM, and React Router are shared between host and remotes
- **Error Handling**: Graceful handling of failed module loads

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Main App      │───▶│   Backend API    │───▶│   SQLite DB     │
│   (Host)        │    │   (Express.js)   │    │   (ModFed.db)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│              Remote Applications (Micro-frontends)              │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────┤
│ Remote-1    │ Remote-2    │ Remote-3    │ Remote-4    │ Remote-5│
│ (Analytics) │ (Header)    │ (Header)    │ (Header)    │ (Button)│
└─────────────┴─────────────┴─────────────┴─────────────┴─────────┘
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Fed-Git
   ```

2. **Install dependencies for all applications**
   ```bash
   # Backend
   cd backend && npm install && cd ..
   
   # Main app
   cd main-app && npm install && cd ..
   
   # Remote applications
   cd remote-app-1 && npm install && cd ..
   cd remote-app-2 && npm install && cd ..
   cd remote-app-3 && npm install && cd ..
   cd remote-app-4 && npm install && cd ..
   cd remote-app-5 && npm install && cd ..
   ```

3. **Setup and start the backend**
   ```bash
   cd backend
   npm run setup  # This populates the database and starts the server
   ```

4. **Start the remote applications** (in separate terminals)
   ```bash
   # Terminal 1
   cd remote-app-1 && npm run dev  # Runs on port 9000
   
   # Terminal 2  
   cd remote-app-2 && npm run dev  # Runs on port 9001
   
   # Terminal 3
   cd remote-app-3 && npm run dev  # Runs on port 9002
   
   # Terminal 4
   cd remote-app-4 && npm run dev  # Runs on port 9003
   
   # Terminal 5
   cd remote-app-5 && npm run dev  # Runs on port 9004
   ```

5. **Start the main application**
   ```bash
   cd main-app && npm run dev  # Runs on port 5173
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` to see the demo in action!

## 🎮 Usage

- **Cycle Remote Apps**: Click the "Cycle Remote App" button to switch between different micro-frontends
- **Refresh Configuration**: Click "Refresh Remote Apps" to reload the module configuration from the database
- **Dynamic Loading**: Watch as different remote applications load without page refresh

## 🧩 Remote Applications

Each remote application demonstrates different micro-frontend patterns:

- **Remote-App-1**: Full dashboard with navigation, analytics, reports, and settings pages
- **Remote-App-2**: Simple header component demonstration  
- **Remote-App-3**: Another header component variant
- **Remote-App-4**: Header component with different styling
- **Remote-App-5**: Button component demonstration

## 🔧 Configuration

Module configurations are stored in `database/ModFed.db` and can be managed through the backend API:

- `GET /all` - Retrieve all module configurations
- Database schema includes: name, url, module, description

## 📚 Learning Resources

This project was inspired by and builds upon the excellent article:
**["Dynamic Module Federation with Vite" by Lester Sconyers](https://medium.com/@lester.sconyers/dynamic-module-federation-with-vite-0bce2bfcc517)**

The article provides detailed insights into implementing runtime module federation with Vite, which was instrumental in creating this demonstration.

## ⚠️ Demo Notice

**This is a demonstration project created for educational purposes.** 

- Components were generated with AI assistance to save development time and focus on the module federation architecture
- Not intended for production use without additional security, error handling, and testing
- Serves as a learning resource for understanding dynamic module federation concepts

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this demonstration project.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ to demonstrate the power of Dynamic Module Federation with Vite**
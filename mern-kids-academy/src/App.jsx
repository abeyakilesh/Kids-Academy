import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './pages/Intro';
import ReactPage from './pages/ReactPage';
import NodePage from './pages/NodePage';
import MongoPage from './pages/MongoPage';
import FlowPage from './pages/FlowPage';
import RoadmapPage from './pages/RoadmapPage';
import WebBasicsPage from './pages/WebBasicsPage';
import Module01 from './pages/Module01';
import Module02 from './pages/Module02';
import Level0Project from './pages/Level0Project';
import Module11 from './pages/Module11';
import Level1Project from './pages/Level1Project';
import HtmlModule from './pages/HtmlModule';
import CssModule from './pages/CssModule';
import Level1Dashboard from './pages/Level1Dashboard';
import Level2Dashboard from './pages/Level2Dashboard';
import Level3Dashboard from './pages/Level3Dashboard';
import Level45Dashboard from './pages/Level45Dashboard';
import Module51 from './pages/Module51';
import Module21 from './pages/Module21';
import Module31 from './pages/Module31';
import Module32 from './pages/Module32';
import Module33 from './pages/Module33';
import Module34 from './pages/Module34';
import Module35 from './pages/Module35';
import Module36 from './pages/Module36';
import Module37 from './pages/Module37';
import Level3Project from './pages/Level3Project';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="modules/0" element={<WebBasicsPage />} />
          <Route path="modules/0.1" element={<Module01 />} />
          <Route path="modules/0.2" element={<Module02 />} />
          <Route path="modules/0.project" element={<Level0Project />} />

          {/* New HTML Course Dynamic Route */}
          <Route path="modules/html/:moduleId" element={<HtmlModule />} />
          <Route path="modules/css/:moduleId" element={<CssModule />} />

          <Route path="modules/1" element={<Level1Dashboard />} />
          <Route path="modules/1.1" element={<Module11 />} />
          <Route path="modules/1.project" element={<Level1Project />} />

          <Route path="modules/2" element={<Level2Dashboard />} />
          <Route path="modules/2.1" element={<Module21 />} />

          <Route path="modules/3" element={<Level3Dashboard />} />
          <Route path="modules/3.1" element={<Module31 />} />
          <Route path="modules/3.2" element={<Module32 />} />
          <Route path="modules/3.3" element={<Module33 />} />
          <Route path="modules/3.4" element={<Module34 />} />
          <Route path="modules/3.5" element={<Module35 />} />
          <Route path="modules/3.6" element={<Module36 />} />
          <Route path="modules/3.7" element={<Module37 />} />
          <Route path="modules/3.project" element={<Level3Project />} />

          <Route path="modules/4" element={<ReactPage />} />
          <Route path="modules/5" element={<Level45Dashboard />} />
          <Route path="modules/5.1" element={<Module51 />} />

          {/* Legacy Routes (Keep for direct access if needed, or redirect) */}
          <Route path="react" element={<ReactPage />} />
          <Route path="node" element={<NodePage />} />
          <Route path="mongo" element={<MongoPage />} />
          <Route path="flow" element={<FlowPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

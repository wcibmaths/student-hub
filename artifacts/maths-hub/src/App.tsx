import { useState } from 'react';
import './index.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { IGCSE4MA1 } from './pages/IGCSE4MA1';
import { IGCSE4PM1 } from './pages/IGCSE4PM1';
import { IALMaths } from './pages/IALMaths';
import { IALFurtherMaths } from './pages/IALFurtherMaths';
import { ModuleDetail, type ModuleKey } from './pages/ModuleDetail';
import { FormulaSheets } from './pages/FormulaSheets';
import { Specifications } from './pages/Specifications';
import { AllPastPapers } from './pages/AllPastPapers';

export type View =
  | 'home'
  | 'igcse-4ma1'
  | 'igcse-4pm1'
  | 'ial-maths'
  | 'ial-fm'
  | 'module-detail'
  | 'formula-sheets'
  | 'specifications'
  | 'all-past-papers';

interface ModuleState {
  mod: ModuleKey;
  parent: 'ial-maths' | 'ial-fm';
}

function App() {
  const [view, setView] = useState<View>('home');
  const [moduleState, setModuleState] = useState<ModuleState | null>(null);
  const [mainRef, setMainRef] = useState<HTMLElement | null>(null);

  const nav = (v: View) => {
    setView(v);
    if (mainRef) mainRef.scrollTop = 0;
  };

  const openModule = (mod: ModuleKey, parent: 'ial-maths' | 'ial-fm') => {
    setModuleState({ mod, parent });
    setView('module-detail');
    if (mainRef) mainRef.scrollTop = 0;
  };

  const sidebarView = view === 'module-detail' && moduleState
    ? moduleState.parent
    : view;

  return (
    <div className="app-layout">
      <Sidebar current={sidebarView as View} onNav={nav} />
      <main className="main" ref={el => setMainRef(el)}>
        {view === 'home' && <Home onNav={nav} />}
        {view === 'igcse-4ma1' && <IGCSE4MA1 onNav={nav} />}
        {view === 'igcse-4pm1' && <IGCSE4PM1 onNav={nav} />}
        {view === 'ial-maths' && <IALMaths onNav={nav} onModule={openModule} />}
        {view === 'ial-fm' && <IALFurtherMaths onNav={nav} onModule={openModule} />}
        {view === 'module-detail' && moduleState && (
          <ModuleDetail mod={moduleState.mod} parent={moduleState.parent} onNav={nav} />
        )}
        {view === 'formula-sheets' && <FormulaSheets onNav={nav} />}
        {view === 'specifications' && <Specifications onNav={nav} />}
        {view === 'all-past-papers' && <AllPastPapers onNav={nav} />}
      </main>
    </div>
  );
}

export default App;

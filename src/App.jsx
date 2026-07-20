import './App.css'
import { Toaster } from "@/components/ui/toaster"
import AccountingAgro from './pages/AccountingAgro';
import AccountingFurniture from './pages/AccountingFurniture';
import AccountingSchool from './pages/AccountingSchool';
import AccountingLegal from './pages/AccountingLegal';
import AccountingRecruiting from './pages/AccountingRecruiting';
import AccountingAutoService from './pages/AccountingAutoService';
import AccountingConstruction from './pages/AccountingConstruction';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={
      <LayoutWrapper currentPageName={mainPageKey}>
        <MainPage />
      </LayoutWrapper>
    } />
    {Object.entries(Pages).map(([path, Page]) => (
      <Route
        key={path}
        path={`/${path}`}
        element={
          <LayoutWrapper currentPageName={path}>
            <Page />
          </LayoutWrapper>
        }
      />
    ))}
    <Route path="/AccountingAgro" element={<LayoutWrapper currentPageName="AccountingAgro"><AccountingAgro /></LayoutWrapper>} />
    <Route path="/AccountingFurniture" element={<LayoutWrapper currentPageName="AccountingFurniture"><AccountingFurniture /></LayoutWrapper>} />
    <Route path="/AccountingSchool" element={<LayoutWrapper currentPageName="AccountingSchool"><AccountingSchool /></LayoutWrapper>} />
    <Route path="/AccountingLegal" element={<LayoutWrapper currentPageName="AccountingLegal"><AccountingLegal /></LayoutWrapper>} />
    <Route path="/AccountingRecruiting" element={<LayoutWrapper currentPageName="AccountingRecruiting"><AccountingRecruiting /></LayoutWrapper>} />
    <Route path="/AccountingAutoService" element={<LayoutWrapper currentPageName="AccountingAutoService"><AccountingAutoService /></LayoutWrapper>} />
    <Route path="/AccountingConstruction" element={<LayoutWrapper currentPageName="AccountingConstruction"><AccountingConstruction /></LayoutWrapper>} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AppRoutes />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App

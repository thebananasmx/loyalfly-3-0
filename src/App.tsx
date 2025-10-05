
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';

import MainLayout from './layouts/MainLayout';
import AppLayout from './layouts/AppLayout';

import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import TermsPage from './pages/TermsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CardCreatorPage from './pages/CardCreatorPage';

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const auth = useAuth();
    if (auth.loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
            </div>
        );
    }
    return auth.user ? children : <Navigate to="/login" />;
};


const App: React.FC = () => {
  return (
    <AuthProvider>
        <HashRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/terminos" element={<TermsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route
                    path="/app"
                    element={
                        <PrivateRoute>
                            <AppLayout />
                        </PrivateRoute>
                    }
                >
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="tarjeta" element={<CardCreatorPage />} />
                    <Route index element={<Navigate to="dashboard" />} />
                </Route>
                 <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </HashRouter>
    </AuthProvider>
  );
}

export default App;
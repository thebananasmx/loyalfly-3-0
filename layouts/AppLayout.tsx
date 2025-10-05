
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CreditCard, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const AppHeader: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };
    
    const navLinkClasses = ({ isActive }: { isActive: boolean }): string => 
      `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
      }`;

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                         <h1 className="text-2xl font-bold text-black">
                            Loyalfly
                        </h1>
                        <nav className="hidden md:flex items-center space-x-4">
                            <NavLink to="/app/dashboard" className={navLinkClasses}>
                                <LayoutDashboard className="w-4 h-4 mr-2" />
                                Dashboard
                            </NavLink>
                            <NavLink to="/app/tarjeta" className={navLinkClasses}>
                                <CreditCard className="w-4 h-4 mr-2" />
                                Tarjeta
                            </NavLink>
                        </nav>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center justify-center px-4 py-2 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

const AppLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;

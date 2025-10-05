
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-black">
                            Loyalfly
                        </Link>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        <Link to="/pricing" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                            Pricing
                        </Link>
                        <Link to="/terminos" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                            Terms
                        </Link>
                    </nav>
                    <div className="flex items-center">
                        <button 
                            onClick={() => navigate('/login')}
                            className="flex items-center justify-center px-4 py-2 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors"
                        >
                            <LogIn className="w-4 h-4 mr-2" />
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import LoyaltyCardPreview from '../components/LoyaltyCardPreview';

const lightColors = ['#FFFFFF', '#F9FAFB', '#F3F4F6', '#E5E7EB'];

const CardCreatorPage: React.FC = () => {
    const [businessName, setBusinessName] = useState('Mi Negocio');
    const [rewardText, setRewardText] = useState('Café gratis');
    const [stamps, setStamps] = useState(4);
    const [bgColor, setBgColor] = useState('#FFFFFF');

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-white p-6 rounded-lg border border-gray-200">
                <h1 className="text-2xl font-bold mb-6">Crear Tarjeta</h1>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Nombre del Negocio</label>
                        <input 
                            type="text" 
                            id="businessName"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                        />
                    </div>
                     <div>
                        <label htmlFor="rewardText" className="block text-sm font-medium text-gray-700">Recompensa</label>
                        <input 
                            type="text" 
                            id="rewardText"
                            value={rewardText}
                            onChange={(e) => setRewardText(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Color de Fondo</label>
                         <div className="mt-2 flex space-x-2">
                            {lightColors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setBgColor(color)}
                                    className={`w-8 h-8 rounded-full border ${bgColor === color ? 'ring-2 ring-offset-1 ring-black' : 'border-gray-300'}`}
                                    style={{ backgroundColor: color }}
                                ></button>
                            ))}
                        </div>
                    </div>
                     <div>
                        <label htmlFor="stamps" className="block text-sm font-medium text-gray-700">Simular Sellos: {stamps}</label>
                         <input 
                            type="range" 
                            id="stamps"
                            min="0"
                            max="10"
                            value={stamps}
                            onChange={(e) => setStamps(parseInt(e.target.value, 10))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                        />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
                <div className="sticky top-24">
                   <LoyaltyCardPreview 
                        businessName={businessName}
                        rewardText={rewardText}
                        stamps={stamps}
                        bgColor={bgColor}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardCreatorPage;
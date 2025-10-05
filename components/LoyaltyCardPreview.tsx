
import React from 'react';
import { Check, Star } from 'lucide-react';

interface LoyaltyCardPreviewProps {
    businessName: string;
    rewardText: string;
    stamps: number;
    bgColor: string;
}

const Stamp: React.FC<{ active: boolean }> = ({ active }) => {
    if (active) {
        return (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center">
                <Check className="w-6 h-6 text-accent-green" />
            </div>
        );
    }
    return (
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 border border-black"></div>
    );
};

const LoyaltyCardPreview: React.FC<LoyaltyCardPreviewProps> = ({
    businessName,
    rewardText,
    stamps,
    bgColor,
}) => {
    const isRedeemable = stamps >= 10;
    const rewardDisplay = isRedeemable ? '¡Tienes una recompensa activa! Canjear' : rewardText;

    const tornEdgeStyle: React.CSSProperties = {
        maskImage: 'radial-gradient(circle at center 7px, transparent 0, transparent 4px, black 4px)',
        maskSize: '20px 10px',
        WebkitMaskImage: 'radial-gradient(circle at center 7px, transparent 0, transparent 4px, black 4px)',
        WebkitMaskSize: '20px 10px',
    };

    return (
        <div 
            className="w-full max-w-sm mx-auto rounded-t-lg shadow-lg relative overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor }}
        >
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <h2 className="text-xl font-bold">{businessName}</h2>
                
                <div className="my-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                        <Star className="w-12 h-12 text-gray-400" />
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-600 mb-1">Nombre del Cliente</p>
                    <p className="text-sm font-semibold">{`${stamps}/10 Sellos para tu próxima recompensa`}</p>
                </div>
            </div>
            
            <div className="relative p-6">
                <div 
                    className={`text-center font-bold p-3 rounded ${isRedeemable ? 'text-accent-green animate-pulse' : ''}`}
                >
                    {rewardDisplay}
                </div>
                <div className="grid grid-cols-5 gap-2 mt-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex justify-center">
                            <Stamp active={i < stamps} />
                        </div>
                    ))}
                </div>
            </div>

            <div 
                className="h-2.5 bg-transparent"
                style={tornEdgeStyle}
            ></div>
        </div>
    );
};

export default LoyaltyCardPreview;

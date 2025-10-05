
import React from 'react';
import { PricingPlan } from '../types';
import { Check } from 'lucide-react';

interface PricingCardProps {
    plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
    return (
        <div className={`border ${plan.highlight ? 'border-black' : 'border-gray-200'} rounded-lg p-6 flex flex-col`}>
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-2 text-gray-500">{plan.clientLimit}</p>
            <p className="mt-4 text-4xl font-bold">{plan.price}</p>
            <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-accent-green flex-shrink-0 mr-2 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-auto pt-6">
                <button className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${plan.highlight ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                    Comenzar
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
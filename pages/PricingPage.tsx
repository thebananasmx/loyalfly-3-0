
import React from 'react';
import PricingCard from '../components/PricingCard';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
    {
        name: 'Gratis',
        price: '$0',
        clientLimit: 'Hasta 10 clientes',
        features: [
            'Tarjeta de lealtad digital',
            'Personalización básica',
            'Soporte por email'
        ]
    },
    {
        name: 'Entrepreneur',
        price: '$19/mes',
        clientLimit: 'Hasta 100 clientes',
        features: [
            'Todo en Gratis, más:',
            'Personalización avanzada',
            'Exportar datos de clientes',
            'Soporte prioritario'
        ],
        highlight: true
    },
    {
        name: 'Pro',
        price: '$49/mes',
        clientLimit: '100+ clientes',
        features: [
            'Todo en Entrepreneur, más:',
            'Integraciones API',
            'Analíticas avanzadas',
            'Manager de cuenta dedicado'
        ]
    }
];

const PricingPage: React.FC = () => {
    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight">Planes simples y transparentes</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Elige el plan que mejor se adapte al tamaño de tu negocio.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map(plan => (
                    <PricingCard key={plan.name} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default PricingPage;

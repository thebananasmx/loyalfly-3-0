
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Users, Gift } from 'lucide-react';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <section className="py-20 sm:py-32">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    Fidelidad, simplificada.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                    Loyalfly es la herramienta minimalista y poderosa que necesitas para crear tarjetas de lealtad digitales y mantener a tus clientes volviendo.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <button 
                        onClick={() => navigate('/pricing')}
                        className="px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Ver Precios
                    </button>
                    <button 
                        onClick={() => navigate('/login')}
                        className="px-8 py-3 bg-white text-black font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </section>

            <section className="py-16 bg-gray-50 rounded-lg">
                 <h2 className="text-3xl font-bold tracking-tight">¿Por qué Loyalfly?</h2>
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-gray-200">
                           <Star className="h-6 w-6 text-black"/>
                        </div>
                         <h3 className="mt-5 text-lg font-semibold">Fácil de Usar</h3>
                         <p className="mt-2 text-base text-gray-600">Crea y gestiona tarjetas de lealtad en minutos con una interfaz limpia y sin distracciones.</p>
                     </div>
                     <div className="flex flex-col items-center">
                         <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-gray-200">
                           <Users className="h-6 w-6 text-black"/>
                        </div>
                         <h3 className="mt-5 text-lg font-semibold">Conecta con Clientes</h3>
                         <p className="mt-2 text-base text-gray-600">Fortalece la relación con tus clientes y anímalos a volver con recompensas atractivas.</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white border border-gray-200">
                           <Gift className="h-6 w-6 text-black"/>
                        </div>
                         <h3 className="mt-5 text-lg font-semibold">Recompensas Flexibles</h3>
                         <p className="mt-2 text-base text-gray-600">Define las recompensas que mejor se adapten a tu negocio y a los gustos de tu clientela.</p>
                     </div>
                 </div>
            </section>
        </div>
    );
};

export default LandingPage;

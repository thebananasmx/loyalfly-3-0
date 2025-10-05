
import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
            <div className="space-y-6 text-gray-700">
                <p>Bienvenido a Loyalfly. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Loyalfly.</p>
                
                <h2 className="text-2xl font-semibold pt-4">1. Introducción</h2>
                <p>Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de Loyalfly si no aceptas todos los términos y condiciones establecidos en esta página.</p>

                <h2 className="text-2xl font-semibold pt-4">2. Licencia</h2>
                <p>A menos que se indique lo contrario, Loyalfly y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Loyalfly. Todos los derechos de propiedad intelectual están reservados. Puedes ver y/o imprimir páginas desde https://loyalfly.example.com para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.</p>

                <p>No debes:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Volver a publicar material de https://loyalfly.example.com</li>
                    <li>Vender, alquilar o sublicenciar material de https://loyalfly.example.com</li>
                    <li>Reproducir, duplicar o copiar material de https://loyalfly.example.com</li>
                </ul>

                <h2 className="text-2xl font-semibold pt-4">3. Cuentas de Usuario</h2>
                <p>Cuando creas una cuenta con nosotros, garantizas que la información que nos proporcionas es precisa, completa y actualizada en todo momento. La información inexacta, incompleta u obsoleta puede resultar en la terminación inmediata de tu cuenta en nuestro servicio.</p>

                <h2 className="text-2xl font-semibold pt-4">4. Limitación de Responsabilidad</h2>
                <p>En ningún caso Loyalfly, ni ninguno de sus funcionarios, directores y empleados, será responsable de nada que surja de o esté relacionado de alguna manera con tu uso de este sitio web, ya sea que dicha responsabilidad esté bajo contrato, agravio o de otra manera.</p>
            </div>
        </div>
    );
};

export default TermsPage;
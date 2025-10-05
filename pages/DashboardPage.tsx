
import React, { useEffect, useState, useMemo } from 'react';
import { getClients } from '../services/firestoreService';
import { Client } from '../types';
import { Search, ArrowUpDown, Download } from 'lucide-react';

type SortKey = keyof Client;
type SortOrder = 'asc' | 'desc';

const DashboardPage: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; order: SortOrder } | null>({ key: 'enrollmentDate', order: 'desc' });

    useEffect(() => {
        const fetchClients = async () => {
            setLoading(true);
            try {
                const clientData = await getClients();
                setClients(clientData);
            } catch (error) {
                console.error("Failed to fetch clients:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    const filteredClients = useMemo(() => {
        return clients.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [clients, searchTerm]);

    const sortedClients = useMemo(() => {
        let sortableItems = [...filteredClients];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.order === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.order === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredClients, sortConfig]);

    const requestSort = (key: SortKey) => {
        let order: SortOrder = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.order === 'asc') {
            order = 'desc';
        }
        setSortConfig({ key, order });
    };
    
    const SortableHeader: React.FC<{ sortKey: SortKey; children: React.ReactNode }> = ({ sortKey, children }) => (
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button onClick={() => requestSort(sortKey)} className="flex items-center space-x-1 group">
                <span>{children}</span>
                 <ArrowUpDown className="w-4 h-4 text-gray-400 group-hover:text-black" />
            </button>
        </th>
    );


    if (loading) {
        return <div className="text-center p-8">Cargando clientes...</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                 <h1 className="text-2xl font-bold">Clientes Activos</h1>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar cliente..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black"
                        />
                    </div>
                     <button className="flex items-center justify-center px-4 py-2 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors whitespace-nowrap">
                         <Download className="w-4 h-4 mr-2" />
                        Exportar
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <SortableHeader sortKey="name">Nombre</SortableHeader>
                            <SortableHeader sortKey="email">Email</SortableHeader>
                            <SortableHeader sortKey="enrollmentDate">Inscripción</SortableHeader>
                            <SortableHeader sortKey="stamps">Sellos</SortableHeader>
                            <SortableHeader sortKey="redeemedRewards">Recompensas</SortableHeader>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedClients.map(client => (
                            <tr key={client.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">{client.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.enrollmentDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.stamps}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.redeemedRewards}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             {sortedClients.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    <p>No se encontraron clientes.</p>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;

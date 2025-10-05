
import { Client } from '../types';

const mockClients: Client[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', phone: '555-0101', enrollmentDate: '2023-01-15', stamps: 8, redeemedRewards: 2 },
    { id: '2', name: 'Bob Williams', email: 'bob@example.com', phone: '555-0102', enrollmentDate: '2023-02-20', stamps: 10, redeemedRewards: 1 },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '555-0103', enrollmentDate: '2023-03-10', stamps: 3, redeemedRewards: 0 },
    { id: '4', name: 'Diana Miller', email: 'diana@example.com', phone: '555-0104', enrollmentDate: '2023-04-05', stamps: 5, redeemedRewards: 0 },
    { id: '5', name: 'Ethan Davis', email: 'ethan@example.com', phone: '555-0105', enrollmentDate: '2023-05-12', stamps: 7, redeemedRewards: 1 },
    { id: '6', name: 'Fiona Garcia', email: 'fiona@example.com', phone: '555-0106', enrollmentDate: '2023-06-18', stamps: 2, redeemedRewards: 0 },
    { id: '7', name: 'George Rodriguez', email: 'george@example.com', phone: '555-0107', enrollmentDate: '2023-07-22', stamps: 9, redeemedRewards: 3 },
];

// Placeholder for Firebase Firestore logic
export const getClients = (): Promise<Client[]> => {
    console.log("Fetching clients from mock service...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Clients fetched.");
            resolve([...mockClients]);
        }, 1000); // Simulate network latency
    });
};
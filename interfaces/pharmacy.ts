export interface Pharmacy {
    // Name of the pharmacy
    name: string;
    // Address of the pharmacy        
    address: string;
    // Contact phone number        
    phone: string;
    // Regular opening hours
    openingHours: string;
     // Geographical coordinates
    coordinates: {
        latitude: number;
        longitude: number;
    };
    // Link to RRSS
    link?: string,
    // Indicates if the pharmacy is on duty
    isOnDuty: boolean; 
    // List of offered services (e.g., "Vaccinations", "Home Delivery")       
    services: string[];
}

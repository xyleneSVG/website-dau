export interface ServiceItem {
    id: string | number;
    title: string;
    description: string;
    url: string;
    icon?: {
        filename: string;
    };
}
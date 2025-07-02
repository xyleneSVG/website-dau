export interface ClientItem {
    id: string | number;
    clientName: string;
    clientLogo: ClientLogo
}

export interface ClientLogo {
    id: number;
    filename: string
}
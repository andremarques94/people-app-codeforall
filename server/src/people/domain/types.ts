export type People = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    picture: string;
    company?: Company | undefined;
};

export type Company = {
    id: number;
    name: string;
    symbol: string;
    industry: string;
};

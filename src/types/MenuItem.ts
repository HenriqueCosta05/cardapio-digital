type Feature = 'Novo!' | 'Popular' | 'Tempo Limitado';

export type MenuItem = {
    id?: string;
    name: string;
    description: string;
    pricing: number;
    feature?: Feature;
    imageUrl?: string;
}
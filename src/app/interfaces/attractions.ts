export interface iImage {
    src: string;
    title: string;
    description: string;
}

export interface iAttractions {
    city_name: string;
    attractions: iImage[];
}
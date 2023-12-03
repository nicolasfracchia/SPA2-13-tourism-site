import { iAttractions } from "../../interfaces/attractions";

/*
export interface Image {
    src: string;
    title: string;
    description: string;
}

export interface iAttractions {
    city_name: string;
    attractions: Image[];
}
*/

export const description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dolor urna, in commodo ipsum porttitor vitae. Fusce venenatis lectus eu gravida feugiat. Aliquam sollicitudin mollis facilisis. Curabitur mauris nisi, pellentesque vitae metus non, tincidunt eleifend odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ligula velit, semper id nibh at, sodales rutrum felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br><br> Donec suscipit velit in augue tempor, non porttitor sapien placerat. Nullam luctus magna eu diam posuere pretium. Donec a imperdiet ipsum. Donec elementum odio non tincidunt varius. Mauris vel luctus magna. Nullam sed pretium sapien. Etiam elementum volutpat nunc in tincidunt. Ut consectetur ante vel suscipit iaculis. Proin sit amet dignissim lacus, sed dignissim odio. <br><br> Quisque ex orci, varius eu vehicula eget, sollicitudin id magna. Vestibulum rhoncus, justo ac rhoncus ultrices, sapien lectus scelerisque neque, sed laoreet neque lectus vitae urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Ut tristique sodales malesuada. Curabitur aliquam maximus tellus, ut ultrices purus tristique sagittis. Aliquam erat volutpat. Mauris egestas hendrerit quam, at blandit nulla elementum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus velit nisl.";

export const attractionsData: iAttractions[] = [
    {
        city_name: "Buenos Aires",
        attractions: [
            {src: "assets/images/cities/buenos aires/cementerio-recoleta.jpg", title: "Cementerio de Recoleta", description: description},
            {src: "assets/images/cities/buenos aires/la-boca.jpg", title: "Barrio La Boca", description: description},
            {src: "assets/images/cities/buenos aires/obelisco.jpg", title: "Obelisco", description: description},
            {src: "assets/images/cities/buenos aires/plaza-de-mayo.webp", title: "Plaza de Mayo", description: description},
            {src: "assets/images/cities/buenos aires/teatro-colon.jpg", title: "Teatro Colon", description: description},
        ]
    }
];
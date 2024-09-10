import indoorpool from "./images/indoorpool.jpg";
import bar from "./images/bar.jpg";
import standard from "./images/standard.jpg";
import outdoorpool from "./images/outdoorpool.jpg";
import executive from "./images/executive.jpg";
import withbalcony from "./images/withbalcony.jpg";
import juniorsuite from "./images/juniorsuite.jpg";
import suite from "./images/suite.jpg";

const mockData=[
    {
        src:indoorpool,
        title:"our indoor pool",
        description:"25m long indoor with hammocks and sauna",
    },
    {
        src:bar,
        title:"Cocktail bar",
        description:"esplendid classic cocktail bar with live music",
    },
    {
        scr:standard,
        title:"Standard room",
        description:"20 sqm rooms with full amenities",
        cat:"room",
        price:140,
        stock:12,
        notAvaiblablestart:new Date(2024,9,6).getTime(),
        notAvaiblableend:new Date(2024,9,6).getTime(),
    },
    {
        src:outdoorpool,
        title:"Outdoor pool",
        description:"Infinity pool with breath taking Ocean views",
    },
    {
        src:executive,
        title:"Executive room",
        description:"Our business rooms with lounge access",
        cat:"room",
        price:170,
        stock:9,
        notAvaiblablestart:new Date(2024,9,6).getTime(),
        notAvaiblableend:new Date(2024,9,6).getTime(),
    },
    {
        src:withbalcony,
        title:"Rooms with balcony",
        description:"Rooms with amazing sea views",
        cat:"room",
        price:175,
        stock:15,
        notAvaiblablestart:new Date(2024,9,6).getTime(),
        notAvaiblableend:new Date(2024,9,6).getTime(),
    },
    {
        src: juniorsuite,
        title:"Junior Suite wiyh kitchnette",
        description:"Our Junior Suites areperfect for families",
        price:225,
        stock:10,
        notAvaiblablestart:new Date(2024,9,6).getTime(),
        notAvaiblableend:new Date(2024,9,6).getTime(),
    },
    {
        src:suite,
        title:"Our corner Suite",
        description:"Discrete and luxurious with butler service",
        price:350,
        stock:4,
        notAvaiblablestart:new Date(2024,9,20).getTime(),
        notAvaiblableend:new Date(2024,9,26).getTime(),
    },
];

export const chips=[
    {key:0, label:"Cancellation Flexibility"},
    {key:1, label:"Standard rooms"},
    {key:2, label:"Executive rooms"},
    {key:3, label:"Access to lounge"},
    {key:4, label:"more filters"},
];
export default mockData;
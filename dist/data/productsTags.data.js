"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsTagsSales = exports.addProductsTags1 = exports.productsTagsWithoutCode = exports.productsTags = void 0;
exports.productsTags = [
    {
        name: "Antico",
        code: "H30506_P9",
        tags: "Dining Space, Kitchen, Bathroom, Outdoor",
    },
    {
        name: "Antico",
        code: "H30506_P14",
        tags: "Dining Space, Kitchen, Bedroom, Outdoor",
    },
    {
        name: "Motivo",
        code: "H30502_P2",
        tags: "Living Room, Kitchen, Bathroom, Outdoor",
    },
    {
        name: "Rombo",
        code: "S30019",
        tags: "Dining Space, Kitchen, Bathroom, Outdoor",
    },
    {
        name: "Bosque",
        code: "H63090",
        tags: "Living Room, Kitchen, Bathroom, Outdoor",
    },
    { name: "Bosque", code: "H63091", tags: "Living Room, Kitchen, Bathroom" },
    { name: "Estetico", code: "H63094", tags: "Dining Space, Kitchen, Bathroom" },
    { name: "Morbido", code: "H63062", tags: "Dining Space" },
    {
        name: "Morbido",
        code: "H63063",
        tags: "Living Room, Bathroom, Office Space",
    },
    { name: "Morbido", code: "H63064", tags: "Living Room, Kitchen, Bedroom" },
    { name: "Morbido", code: "H63066", tags: "Bathroom" },
    {
        name: "Striscia",
        code: "C63044",
        tags: "Living Room, Dining Space, Outdoor",
    },
    { name: "Striscia", code: "C63045", tags: "Bathroom, Outdoor" },
    { name: "Striscia", code: "C63046", tags: "Living Room, Bathroom, Outdoor" },
    {
        name: "Striscia",
        code: "C63047",
        tags: "Living Room, Bathroom, Office Space, Outdoor",
    },
    {
        name: "Celula",
        code: "H63094",
        tags: "Living Room, Kitchen, Feature Wall",
    },
    { name: "Celula", code: "H63095", tags: "Living Room, Bathroom" },
    { name: "Marmette", code: "W63000S", tags: "Living Room, Kitchen, Bathroom" },
    {
        name: "Siltstone",
        code: "H63112",
        tags: "Living Toom, Bathroom, Kitchen, Outdoor",
    },
    { name: "Archistra", code: "ACH-1001", tags: "Outdoor" },
    {
        name: "Archistra",
        code: "ACH-1002",
        tags: "Bedroom, Bathroom, Office Space",
    },
    {
        name: "Archistra",
        code: "ACH-1003",
        tags: "Living Room, Kitchen, Bathroom",
    },
    { name: "Archistra", code: "ACH-2001", tags: "Office Space, Feature Walls" },
    {
        name: "Archistra",
        code: "ACH-2002",
        tags: "Living Room, Kitchen, Outdoor",
    },
    { name: "Archistra", code: "ACH-2003", tags: "Kitchen, Bedroom, Bathroom" },
    { name: "Archistra", code: "ACH-2051", tags: "Bedroom, Bathroom" },
    { name: "Archistra", code: "ACH-4001", tags: "Living Room, Feature Wall" },
    {
        name: "Archistra",
        code: "ACH-4002",
        tags: "Bedroom, Bathroom, Office Space",
    },
    { name: "Archistra", code: "ACH-4003", tags: "Kitchen, Bathroom" },
    {
        name: "Archistra",
        code: "ACH-4004",
        tags: "Living Room, Dining Space, Outdoor",
    },
    {
        name: "Archistra",
        code: "ACH-4005",
        tags: "Living Room, Dining Space, Bedroom, Office Space",
    },
    {
        name: "Archistra",
        code: "ACH-4006",
        tags: "Living Room, Bedroom, Outdoor",
    },
    { name: "Brick Veneer", code: "AR-3001-GM-01", tags: "Living Room, Outdoor" },
    {
        name: "Brick Veneer",
        code: "AR-3004-GM-16",
        tags: "Kitchen, Office Space",
    },
    { name: "Brick Veneer", code: "BK-1203", tags: "Kitchen, Outdoor" },
    { name: "Brick Veneer", code: "BK-1204", tags: "Living Room, Outdoor" },
    {
        name: "Brick Veneer",
        code: "BK-3101-GM-12",
        tags: "Dining Space, Outdoor",
    },
    {
        name: "Brick Veneer",
        code: "BK-3106-GM-16",
        tags: "Bedroom, Office Space",
    },
    { name: "Brick Veneer", code: "BK-3107-GM-11", tags: "Bathroom, Outdoor" },
    {
        name: "Brick Veneer",
        code: "BK-3108-GM-16",
        tags: "Living Room, Outdoor, Feature Wall",
    },
    { name: "Brick Veneer", code: "BK-7101-GM-16", tags: "Kitchen, Outdoor" },
    { name: "Brick Veneer", code: "BK-7102-GM-11", tags: "Living Room, Bedroom" },
    {
        name: "Brick Veneer",
        code: "BL-6101-GM-11",
        tags: "Kitchen, Outdoor, Feature Wall",
    },
    {
        name: "Brick Veneer",
        code: "BL-6104-GM-12",
        tags: "Dining Space, Outdoor",
    },
    { name: "Edge", code: "EG-101", tags: "Outdoor, Feature Walls" },
    { name: "Edge", code: "EG-202", tags: "Living Room, Office Space, Outdoor" },
    { name: "Edge", code: "EG-302", tags: "Kitchen, Bathroom" },
    {
        name: "Stone Veneer",
        code: "DS-001",
        tags: "Living Room, Outdoor, Feature Wall",
    },
    {
        name: "Stone Veneer",
        code: "DS-001",
        tags: "Living Room, Outdoor, Feature Wall",
    },
    {
        name: "Stone Veneer",
        code: "DS-001",
        tags: "Living Room, Outdoor, Feature Wall",
    },
    {
        name: "Stone Veneer",
        code: "DS-004",
        tags: "Dining Space, Outdoor, Feature Wall",
    },
    {
        name: "Stone Veneer",
        code: "DS-004",
        tags: "Dining Space, Outdoor, Feature Wall",
    },
    {
        name: "Stone Veneer",
        code: "DS-004",
        tags: "Dining Space, Outdoor, Feature Wall",
    },
    { name: "Stone Veneer", code: "DS-016", tags: "Outdoor, Feature Walls" },
    { name: "Stone Veneer", code: "DS-016", tags: "Outdoor, Feature Walls" },
    { name: "Stone Veneer", code: "DS-016", tags: "Outdoor, Feature Walls" },
    { name: "Stone Veneer", code: "DS-017", tags: "Outdoor, Feature Walls" },
    { name: "Stone Veneer", code: "DS-017", tags: "Outdoor, Feature Walls" },
    { name: "Stone Veneer", code: "DS-017", tags: "Outdoor, Feature Walls" },
    {
        name: "Stone Veneer",
        code: "DS-101",
        tags: "Kitchen, Outdoor, Feature Wall",
    },
    { name: "Stone Veneer", code: "DS-106", tags: "Office Space, Feature Walls" },
    { name: "Stone Veneer", code: "DS-114", tags: "Bedroom, Bathroom" },
    { name: "Stone Veneer", code: "DS-117", tags: "Living Room, Office Space" },
    { name: "Stone Veneer", code: "DS-305", tags: "Living Room, Office Space" },
    { name: "Stone Veneer", code: "DS-807", tags: "Outdoor, Feature Walls" },
    {
        name: "Stone Veneer",
        code: "DS-809",
        tags: "Bedroom, Outdoor, Feature Wall",
    },
    {
        name: "Stone Veneer",
        code: "PS-2002",
        tags: "Living Room, Bedroom, Outdoor",
    },
    { name: "Stone Veneer", code: "PS-2006", tags: "Living Room, Office Space" },
    { name: "Stone Veneer", code: "WS-3002", tags: "Kitchen, Bathroom" },
    {
        name: "Stone Veneer",
        code: "WS-3005",
        tags: "Bedroom, Office Space, Outdoor",
    },
    { name: "Casa Tiles", code: "FT-IT-TF1210", tags: "Kitchen, Bathroom" },
    { name: "Casa Tiles", code: "FT-IT-TF1217", tags: "Living Room, Kitchen" },
    { name: "Casa Tiles", code: "FT-IT-TF1219", tags: "Kitchen, Bathroom" },
    {
        name: "Casa Tiles",
        code: "FT-IT-TF1252",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Casa Tiles",
        code: "FT-IT-TF1273",
        tags: "Dining Space, Kitchen, Outdoor",
    },
    { name: "Casa Tiles", code: "FT-IT-TF1278", tags: "Kitchen, Bathroom" },
    { name: "Casa Tiles", code: "FT-IT-TF1356", tags: "Kitchen, Bathroom" },
    { name: "Casa Tiles", code: "FT-IT-TF1359", tags: "Kitchen, Bathroom" },
    {
        name: "Casa Tiles",
        code: "FT-IT-TF1361",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Casa Tiles",
        code: "FT-IT-TF1369",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Casa Tiles",
        code: "FT-IT-TF1373",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    { name: "Lampang Tiles", code: "FA48511", tags: "Outdoor, Bathroom" },
    {
        name: "Lampang Tiles",
        code: "FA48614",
        tags: "Outdoor, Retails store, Spa and Wellness Centre",
    },
    { name: "Lampang Tiles", code: "XFB48003", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", code: "XFB48011", tags: "Outdoor, Feature Wall" },
    { name: "Lampang Tiles", code: "XFB48016", tags: "Outdoor, Feature Wall" },
    {
        name: "Lampang Tiles",
        code: "XFB48025",
        tags: "Outdoor, Retails store, Spa and Wellness Centre",
    },
    { name: "Lampang Tiles", code: "XFB48030", tags: "Outdoor, Feature Wall" },
    { name: "Lampang Tiles", code: "XFB48034", tags: "Outdoor, Feature Wall" },
    { name: "Turkish Tiles", code: "AC-3A", tags: "Kitchen" },
    { name: "Turkish Tiles", code: "AC-4", tags: "Kitchen" },
    { name: "Turkish Tiles", code: "AC-6", tags: "Kitchen" },
    { name: "Turkish Tiles", code: "AC-79L", tags: "Kitchen" },
    {
        name: "Insert Tiles",
        code: "GIT-4009",
        tags: "Dining Space, Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Insert Tiles",
        code: "GIT-4023",
        tags: "Dining Space, Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Insert Tiles",
        code: "GIT-20315",
        tags: "Dining Space, Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Carved Tiles",
        code: "VA63E901BR",
        tags: "Kitchen, Bathroom, Retails Store",
    },
    {
        name: "Carved Tiles",
        code: "VA63E901GR",
        tags: "Living Room, Bathroom, Feature Walls, Retails Store",
    },
    {
        name: "Carved Tiles",
        code: "VA63R902TC",
        tags: "Living Room, Kitchen, Bathroom, Feature Walls, Retails Store",
    },
    {
        name: "Carved Tiles",
        code: "VA63E903YG",
        tags: "Living Room, Dining Space, Kitchen, Feature Walls, Retails Store",
    },
    {
        name: "Carved Tiles",
        code: "VA63E903RG",
        tags: "Bedroom, Feature Walls, Retail Store",
    },
    {
        name: "Natura Tiles",
        code: "VA63M901BE",
        tags: "Bathroom, Kitchen, Retails Store",
    },
    {
        name: "Natura Tiles",
        code: "VA63M901GR",
        tags: "Kitchen, Bathroom, Spa and Wellness",
    },
    {
        name: "Natura Tiles",
        code: "VA63M901OW",
        tags: "Kitchen, Bathroom, Office Space, Retail Store",
    },
    {
        name: "Natura Tiles",
        code: "VA63M902BK",
        tags: "Bathroom, Laundry Room, Feature Walls",
    },
    {
        name: "Natura Tiles",
        code: "VA63M902GR",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Natura Tiles",
        code: "VA63M902OW",
        tags: "Living Room, Bathroom, Laundry Room, Spa and Wellness",
    },
    {
        name: "Marble-like Tiles",
        code: "VA63M907BE",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Marble-like Tiles",
        code: "VA63M907BR",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Wood Tiles",
        code: "VA63M909BR",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Wood Tiles",
        code: "VA63M909GR",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Carrara Tiles",
        code: "LA36106CRR",
        tags: "Kitchen, Bathroom, Outdoor, Feature Walls",
    },
    {
        name: "Carrara Tiles",
        code: "LA36107CRR",
        tags: "Kitchen, Bathroom, Outdoor, Feature Walls",
    },
    {
        name: "Emperado Tiles",
        code: "LA36108BE",
        tags: "Kitchen, Bathroom, Feature Walls",
    },
    {
        name: "Emperado Tiles",
        code: "LA36108BR",
        tags: "Bathroom, Laundry Room, Spa and Wellness",
    },
    {
        name: "Emperado Tiles",
        code: "LA36108DGR",
        tags: "Bathroom, Outdoor, Feature Walls",
    },
    {
        name: "Emperado Tiles",
        code: "LA36108LGR",
        tags: "Kitchen, Bathroom, Laundry Room",
    },
    {
        name: "Emperado Tiles",
        code: "LA36109BE",
        tags: "Bathroom, Laundry Room, Feature Walls, Spa and Wellness",
    },
    { name: "Emperado Tiles", code: "LA36109DBE", tags: "Kitchen, Bathroom" },
    {
        name: "Emperado Tiles",
        code: "LA36109GR",
        tags: "Bathroom, Laundry Room, Retail Store",
    },
    {
        name: "Emperado Tiles",
        code: "LA36110LBE",
        tags: "Bathroom, Feature Wall, Hotel Space",
    },
    { name: "Emperado Tiles", code: "LA36110MBE", tags: "Kitchen, Bathroom" },
    {
        name: "Emperado Tiles",
        code: "LA36110LGR",
        tags: "Bathroom, Laundry Room, Hotel Space, Spa and Wellness",
    },
    { name: "Emperado Tiles", code: "LA36110MGR", tags: "Kitchen, Bathroom" },
    {
        name: "Emperado Tiles",
        code: "LA36111LBE",
        tags: "Kitchen, Feature Walls",
    },
    {
        name: "Emperado Tiles",
        code: "LA36111MBE",
        tags: "Bathroom, Laundry Room",
    },
    {
        name: "Emperado Tiles",
        code: "LA3611LGR",
        tags: "Kitchen, Bathroom, Office Space, Laundry Room, Hotel Space, Spa and Wellness",
    },
    {
        name: "Emperado Tiles",
        code: "LA3611MGR",
        tags: "Bathroom, Laundry Room, Hotel Space, Spa and Wellness",
    },
    {
        name: "Strutturato Tiles",
        code: "VA63R902BK",
        tags: "Kitchen, Feature Walls, Retails Store",
    },
    {
        name: "Strutturato Tiles",
        code: "VA63R902GR",
        tags: "Living Room, Bathroom, Feature Walls",
    },
    {
        name: "Strutturato Tiles",
        code: "VA63R902TC",
        tags: "Kitchen, Outdoor, Feature Walls",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66831GR",
        tags: "Living Room, Kitchen, Bathroom, Hotel Space",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66831YL",
        tags: "Dining Space, Kitchen, Bathroom,",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66833GR",
        tags: "Living Room, Bathroom, Office Space, Hotel Space",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66833YL",
        tags: "Dining Space, Living Room, Kitchen, Bathroom",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66835GR",
        tags: "Kitchen, Bathroom, Hotel Space",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66835YL",
        tags: "Living Room, Bathroom, Office Space, Hotel Space",
    },
    { name: "Lucidato Tiles", code: "LA66836BE", tags: "Dining Space, Kitchen" },
    { name: "Lucidato Tiles", code: "LA66836GR", tags: "Living Room, Bathroom" },
    {
        name: "Lucidato Tiles",
        code: "LA66731GR",
        tags: "Living Room, Bedroom, Bathroom",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66731YL",
        tags: "Dining Space, Kitchen, Bathroom",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66701",
        tags: "Living Room, Kitchen, Bathroom, Hotel Space",
    },
    {
        name: "Lucidato Tiles",
        code: "LA66702",
        tags: "Dining Space, Kitchen, Hotel Space",
    },
    {
        name: "Neo Wood Tiles",
        code: "LA66832BE",
        tags: "Dining Space, Kitchen, Bathroom",
    },
    {
        name: "Neo Wood Tiles",
        code: "LA66832GR",
        tags: "Living Room, Bathroom, Office Space, Hotel Space",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66728",
        tags: "Living Room, Kitchen, Bathroom, Hotel Space",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66729",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66330DBK",
        tags: "Kitchen, Bathroom, Office Space, Hotel Space",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66331DBK",
        tags: "Living Room, Kitchen, Bathroom, Hotel Space",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66335DBK",
        tags: "Kitchen, Bathroom, Hotel Space",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66336DBK",
        tags: "Kitchen, Bathroom, Office Space",
    },
    {
        name: "Nero Stone Tiles",
        code: "LA66379DBK",
        tags: "Dining Space, Office Space, Hotel Space",
    },
    { name: "Opaco Tiles", code: "VA66M901CR", tags: "Kitchen, Bathroom" },
    {
        name: "Opaco Tiles",
        code: "VA66M902BK",
        tags: "Dining Space, Bedroom, Office Space, Feature Walls",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M902GR",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M902MC",
        tags: "Dining Space, Office Space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M902OW",
        tags: "Living Room, Kitchen, Office Space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M903BE",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M903BK",
        tags: "Office Space, Feature Walls, Retails Store",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M903MG",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M905BK",
        tags: "Dining Space, Office Space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M905LG",
        tags: "Living Room, Bathroom, Office Space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M905MG",
        tags: "Living Room, Kitchen, Office space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M906BE",
        tags: "Living Room, Kitchen, Bathroom, Office Space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M906GR",
        tags: "Living Room, Kitchen, Office Space",
    },
    { name: "Opaco Tiles", code: "VA66M907BE", tags: "Living Room" },
    {
        name: "Opaco Tiles",
        code: "VA66M907GR",
        tags: "Living Room, Bathroom, Office Space",
    },
    {
        name: "Opaco Tiles",
        code: "VA66M908BE",
        tags: "Kitchen, Bathroom, Office Space",
    },
    {
        name: "Strutturato Tiles",
        code: "LA66360MT",
        tags: "Living Room, Kitchen, Bathroom, Bedroom, Feature Walls",
    },
    {
        name: "Strutturato Tiles",
        code: "LA66360RG",
        tags: "Living Room, Bedroom, Office Space, Feature Walls, Retail Store",
    },
    {
        name: "Terrazzo Tiles",
        code: "LA66803",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Terrazzo Tiles",
        code: "LA66733LG",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Terrazzo Tiles",
        code: "LA66733MG",
        tags: "Living Room, Kitchen, Bathroom, Office Space",
    },
    {
        name: "Terrazzo Tiles",
        code: "VA66M909GR",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Terrazzo Tiles",
        code: "VA66M909CL",
        tags: "Living Room, Kitchen, Bathroom",
    },
    { name: "Terrazzo Tiles", code: "LAC6093", tags: "Kitchen, Bathroom" },
    {
        name: "Terrazzo Tiles",
        code: "TKMJ6907",
        tags: "Living Room, Bathroom, Feature Wall",
    },
    {
        name: "Terrazzo Tiles",
        code: "TZ-6031",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Terrazzo Tiles",
        code: "TZ-S6A01",
        tags: "Living Room, Kitchen, Office Space",
    },
    {
        name: "Terrazzo Tiles",
        code: "TZ-S6A03",
        tags: "Kitchen, Bathroom, Feature Wall",
    },
    {
        name: "Terrazzo Tiles",
        code: "TZ-S6015",
        tags: "Living Room, Kitchen, Bathroom",
    },
    { name: "Terrazzo Tiles", code: "TZ-SM6934X", tags: "Living Room, Kitchen" },
    {
        name: "Marble-like Tiles",
        code: "LA88301",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88900",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88901",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88921",
        tags: "Living Room, Kitchen, Bathroom, Office Space",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88922",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88923",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88925",
        tags: "Living Room, Dining Space, Office Space",
    },
    {
        name: "Marble-like Tiles",
        code: "LA88926",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Wood Tiles",
        code: "LA21030MP",
        tags: "Living Room, Bedroom, Outdoor",
    },
    { name: "Wood Tiles", code: "LA21030PP", tags: "Kitchen, Bathroom, Outdoor" },
    {
        name: "Wood Tiles",
        code: "LA21030RB",
        tags: "Living Room, Bedroom, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21030RO",
        tags: "Living Room, Kitchen, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21031DW",
        tags: "Living Room, Dining Space, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21031EB",
        tags: "Living Room, Dining Space, Kitchen, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21031HM",
        tags: "Living Room, Bedroom, Bathroom, Office Space, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21031SW",
        tags: "Living Room, Dining Space, Kitchen, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21230EC",
        tags: "Living Room, Dining Space, Kitchen, Outdoor, Retail Store",
    },
    {
        name: "Wood Tiles",
        code: "LA21230NT",
        tags: "Living Room, Dining Space, Kitchen, Bathroom, Outdoor, Retail Store",
    },
    {
        name: "Wood Tiles",
        code: "LA21230PN",
        tags: "Living Room, Dining Space, Kitchen, Outdoor",
    },
    {
        name: "Wood Tiles",
        code: "LA21230WO",
        tags: "Living Room, Kitchen, Outdoor",
    },
    {
        name: "Tenue Tiles",
        code: "SP15PHT36T",
        tags: "Dining Space, Feature Wall",
    },
    { name: "Tenue Tiles", code: "SP15PHT55T", tags: "Living Room, Bathroom" },
    {
        name: "Tenue Tiles",
        code: "SP15PHT57T",
        tags: "Living Room, Bathroom, Office Space",
    },
    {
        name: "Tenue Tiles",
        code: "YK15PHT15",
        tags: "Living Room, Bathroom, Feature Wall, Hotel Space, Retail Store",
    },
    {
        name: "Grande Classic",
        code: "GF-YB1B189805",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "GF-YB1B189806",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "GF-YB1H189841",
        tags: "Living Room, Bedroom, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "GF-YB3B189861",
        tags: "Living Room, Dining Space, Office Space",
    },
    {
        name: "Grande Classic",
        code: "GF-RQ189017",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "GF-RQ189018",
        tags: "Living Room, Dining Space, Kitchen",
    },
    {
        name: "Grande Classic",
        code: "GF-RQ189019",
        tags: "Living Room, Dining Space, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "GF-RQ189071",
        tags: "Living Room, Kitchen, Office Space",
    },
    {
        name: "Grande Classic",
        code: "GF-YQ1B189803",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "GF-YQB189867",
        tags: "Dining Space, Bathroom",
    },
    {
        name: "Grande Classic",
        code: "SF-RQ189021",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Star Diamond",
        code: "SF-RQS189091",
        tags: "Living Room, Bathroom, Hotel Space",
    },
    {
        name: "Star Diamond",
        code: "SF-RQS189092",
        tags: "Dining Space, Office Space, Feature Walls",
    },
    {
        name: "Magic Slate",
        code: "GB-K1A180910-001",
        tags: "Living Room, Bathroom, Office Space, Hotel Space",
    },
    {
        name: "Magic Slate",
        code: "GB-K1A180910-003",
        tags: "Kitchen, Bathroom, Retail Store",
    },
    {
        name: "Magic Slate",
        code: "GB-K1B180910-007",
        tags: "Living Room, Dining Space, Hotel Space",
    },
    {
        name: "Imprint",
        code: "GF-B260809-237",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Imprint",
        code: "GF-B260809-252",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Imprint",
        code: "GF-B260809-196",
        tags: "Living Room, Kitchen, Bedroom, Bathroom",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-104",
        tags: "Living Room, Dining Space, Office Space",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-110",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-190",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-193",
        tags: "Living Room, Bathroom, Office Space",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-240",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-243",
        tags: "Living Room, Kitchen, Bathroom",
    },
    {
        name: "Pearl Slate",
        code: "GF-Q260809-285",
        tags: "Living Room, Kitchen, Bathroom",
    },
];
exports.productsTagsWithoutCode = [
    { name: "Lampang Tiles", color: "Aqsa Blue", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Black", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Brown", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Celadon Blue", tags: "Bathroom, Outdoor" },
    {
        name: "Lampang Tiles",
        color: "Celadon Dark Green",
        tags: "Bathroom, Outdoor",
    },
    {
        name: "Lampang Tiles",
        color: "Celadon Light Green",
        tags: "Bathroom, Outdoor",
    },
    { name: "Lampang Tiles", color: "null", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Dark Blue", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Golden Yellow", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Grey", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Medium Black", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Ocean Blue", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Summer Green", tags: "Bathroom, Outdoor" },
    { name: "Lampang Tiles", color: "Turquoise Blue", tags: "Bathroom, Outdoor" },
    {
        name: "Lampang Tiles",
        color: "Turquoise Green",
        tags: "Bathroom, Outdoor",
    },
    { name: "Lampang Tiles", color: "White", tags: "Bathroom, Outdoor" },
    {
        name: "Spain Handmade",
        color: "Blue",
        tags: "Kitchen, Bathroom, Laundry Room",
    },
    {
        name: "Spain Handmade",
        color: "Cream",
        tags: "Living Room, Bathroom, Feature Wall",
    },
    {
        name: "Spain Handmade",
        color: "Light Green",
        tags: "Kitchen, Bathroom, Outdoor",
    },
    {
        name: "Spain Handmade",
        color: "Mint Blue",
        tags: "Kitchen, Bathroom, Laundry Room",
    },
    { name: "Spain Handmade", color: "Green Emerald", tags: "Kitchen, Bathroom" },
    { name: "Spain Handmade", color: "Metallic Gold", tags: "Kitchen, Bathroom" },
    {
        name: "Spain Handmade",
        color: "Metallic Silver",
        tags: "Kitchen, Bathroom",
    },
    { name: "Spain Handmade", color: "Sky Blue", tags: "Kitchen, Bathroom" },
    {
        name: "Spain Handmade",
        color: "Vintage Casti Blue",
        tags: "Kitchen, Bathroom",
    },
];
exports.addProductsTags1 = [
    {
        name: "Natura Tiles",
        code: "VA63M903BE",
        tags: "Kitchen, Bathroom, Retail Store",
    },
    {
        name: "Natura Tiles",
        code: "VA63M903BK",
        tags: "Kitchen, Bathroom, Retail Store, Accent Walls, Feature Walls",
    },
    {
        name: "Natura Tiles",
        code: "VA63M903GR",
        tags: "Kitchen, Bathroom, Retail Store",
    },
    {
        name: "Natura Tiles",
        code: "VA63M903MC",
        tags: "Kitchen, Bathroom, Retail Store",
    },
];
exports.productsTagsSales = [
    {
        size: "300 x 600mm",
        tags: "10 Percent, "
    },
    {
        size: "200 x 1000mm",
        tags: "10 Percent, "
    },
    {
        size: "600 x 600mm",
        tags: "20 Percent, "
    },
    {
        size: "900 x 1800mm",
        tags: "20 Percent, "
    },
    {
        size: "200 x 1200mm",
        tags: "20 Percent, "
    },
    {
        size: "800 x 2600mm",
        tags: "20 Percent, "
    }
];
//# sourceMappingURL=productsTags.data.js.map
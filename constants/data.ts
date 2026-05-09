import { image } from "./images"


// Use exchange-rate API to convert TZS to USD
const convertTZStoUSD = async () => {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/TZS");
    const data = await response.json();
    return data.rates.USD;
}

// Data to be export for the App uses
export const data = {
    metal_details: [
        {
            id: 0,
            image: image.allunium,
            title: "Alluminium",
            description: "Lightweight and corrosion resistant metal.",
            price: 200000
        },
        {
            id: 1,
            image: image.brass,
            title: "Brass",
            description: "Gold-like alloy made from copper and zinc.",
            price: 3242532
        },
        {
            id: 2,
            image: image.bronze,
            title: "Bronze",
            description: "Strong copper alloy commonly used in machinery.",
            price: 2342422
        },
        {
            id: 3,
            image: image.copper,
            title: "Copper",
            description: "Highly conductive metal used in electrical wiring.",
            price: 3242532
        },
        {
            id: 4,
            image: image.iron,
            title: "Iron",
            description: "Strong ferrous metal widely used in construction.",
            price: 200000
        },
        {
            id: 5,
            image: image.lead,
            title: "Lead",
            description: "Heavy soft metal commonly used in batteries.",
            price: 3242532
        },
        {
            id: 6,
            image: image.platinum,
            title: "Platinum",
            description: "Rare precious metal with high corrosion resistance.",
            price: 2342422
        },
        {
            id: 7,
            image: image.silver,
            title: "Silver",
            description: "Precious metal with excellent electrical conductivity.",
            price: 3242532
        },
        {
            id: 8,
            image: image.steel,
            title: "Steel",
            description: "Durable iron alloy used in buildings and tools.",
            price: 2342422
        },
        {
            id: 9,
            image: image.zinc,
            title: "Zinc",
            description: "Protective metal often used for galvanizing steel.",
            price: 3242532
        }
    ],

    mass_unit: [
        {
            id: 0,
            title: "Gram",
            symbol: "g",
            relation_to_kg: 0.001
        },
        {
            id: 1,
            title: "Kilogram",
            symbol: "kg",
            relation_to_kg: 1
        },
        {
            id: 2,
            title: "Metric Tonne",
            symbol: "t",
            relation_to_kg: 1000
        }
    ], 

    currency: [
        {
            id: 0,
            title: "Tz Shilling",
            symbol: "TZS",
            relation_to_tzs: 1
        },
        {
            id: 1,
            title: "US Dollar",
            symbol: "USD",
            relation_to_tzs: 0.000385
        }
    ],

    activities: [
        {
            id: 0,
            title: "Profile",
            description: "",
            icon_name: "address-book-o",
            icon_size: 12
        },
        {
            id: 1,
            title: "Payment",
            description: "",
            icon_name: "credit-card",
            icon_size: 12
        },
        {
            id: 2,
            title: "Taxes",
            description: "",
            icon_name: "balance-scale",
            icon_size: 12
        },
        {
            id: 3,
            title: "Language",
            description: "",
            icon_name: "language",
            icon_size: 12
        }
    ]
}
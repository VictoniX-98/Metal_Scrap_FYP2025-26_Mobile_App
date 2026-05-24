import { image } from "./images";

// Use exchange-rate API to convert TZS to USD
const convertTZStoUSD = async () => {
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/TZS",
  );
  const data = await response.json();
  return data.rates.USD;
};

// Data to be export for the App uses
export const data = {
  mass_unit: [
    {
      id: 0,
      title: "Gram",
      symbol: "g",
      relation_to_kg: 0.001,
    },
    {
      id: 1,
      title: "Kilogram",
      symbol: "kg",
      relation_to_kg: 1,
    },
    {
      id: 2,
      title: "Metric Tonne",
      symbol: "t",
      relation_to_kg: 1000,
    },
  ],

  currency: [
    {
      id: 0,
      title: "Tz Shilling",
      symbol: "TZS",
      relation_to_tzs: 1,
    },
    {
      id: 1,
      title: "US Dollar",
      symbol: "USD",
      relation_to_tzs: 0.000385,
    },
  ],

  activities: [
    {
      id: 0,
      title: "Profile",
      hint: "View and edit your personal information",
      icon_name: "address-book-o",
    },
    {
      id: 1,
      title: "Payment",
      hint: "Record your payment services",
      icon_name: "credit-card",
    },
    {
      id: 2,
      title: "Taxes",
      hint: "View and manage your tax information",
      icon_name: "balance-scale",
    },
    {
      id: 3,
      title: "Language",
      hint: "Change app language",
      icon_name: "language",
    },
  ],

  help_instruction: `
    Welcome to the application. 
    This platform is designed to provide users with a simple, fast, and reliable experience while accessing different services and features. 
    Before using the application, please ensure that all provided information is accurate and up to date. 
    Carefully follow all instructions displayed on each screen to avoid errors during usage. 
    For the best experience, keep your internet connection stable and regularly update the application whenever a new version becomes available. 
    By continuing to use this application, you agree to follow the platform guidelines and use the services responsibly.

    Welcome to the application. 
    This platform is designed to provide users with a simple, fast, and reliable experience while accessing different services and features. 
    Before using the application, please ensure that all provided information is accurate and up to date. 
    Carefully follow all instructions displayed on each screen to avoid errors during usage. 
    For the best experience, keep your internet connection stable and regularly update the application whenever a new version becomes available. 
    By continuing to use this application, you agree to follow the platform guidelines and use the services responsibly.

    Welcome to the application. 
    This platform is designed to provide users with a simple, fast, and reliable experience while accessing different services and features. 
    Before using the application, please ensure that all provided information is accurate and up to date. 
    Carefully follow all instructions displayed on each screen to avoid errors during usage. 
    For the best experience, keep your internet connection stable and regularly update the application whenever a new version becomes available. 
    By continuing to use this application, you agree to follow the platform guidelines and use the services responsibly.

    Welcome to the application. 
    This platform is designed to provide users with a simple, fast, and reliable experience while accessing different services and features. 
    Before using the application, please ensure that all provided information is accurate and up to date. 
    Carefully follow all instructions displayed on each screen to avoid errors during usage. 
    For the best experience, keep your internet connection stable and regularly update the application whenever a new version becomes available. 
    By continuing to use this application, you agree to follow the platform guidelines and use the services responsibly.

    Welcome to the application. 
    This platform is designed to provide users with a simple, fast, and reliable experience while accessing different services and features. 
    Before using the application, please ensure that all provided information is accurate and up to date. 
    Carefully follow all instructions displayed on each screen to avoid errors during usage. 
    For the best experience, keep your internet connection stable and regularly update the application whenever a new version becomes available. 
    By continuing to use this application, you agree to follow the platform guidelines and use the services responsibly.

    Welcome to the application. 
    This platform is designed to provide users with a simple, fast, and reliable experience while accessing different services and features. 
    Before using the application, please ensure that all provided information is accurate and up to date. 
    Carefully follow all instructions displayed on each screen to avoid errors during usage. 
    For the best experience, keep your internet connection stable and regularly update the application whenever a new version becomes available. 
    By continuing to use this application, you agree to follow the platform guidelines and use the services responsibly.
  `,


  //////////////////////////////////////////////////////////////////////////////////////////
  ////  This data need to come from Server (They will be deleted After app completing)  ////
  //////////////////////////////////////////////////////////////////////////////////////////
  
  // Price page
  // Metal details for price display
  metal_details: [
    {
      id: 0,
      image: image.allunium,
      title: "Alluminium",
      description: "Lightweight and corrosion resistant metal.",
      price: 200000,
    },
    {
      id: 1,
      image: image.brass,
      title: "Brass",
      description: "Gold-like alloy made from copper and zinc.",
      price: 3242532,
    },
    {
      id: 2,
      image: image.bronze,
      title: "Bronze",
      description: "Strong copper alloy commonly used in machinery.",
      price: 2342422,
    },
    {
      id: 3,
      image: image.copper,
      title: "Copper",
      description: "Highly conductive metal used in electrical wiring.",
      price: 3242532,
    },
    {
      id: 4,
      image: image.iron,
      title: "Iron",
      description: "Strong ferrous metal widely used in construction.",
      price: 200000,
    },
    {
      id: 5,
      image: image.lead,
      title: "Lead",
      description: "Heavy soft metal commonly used in batteries.",
      price: 3242532,
    },
    {
      id: 6,
      image: image.platinum,
      title: "Platinum",
      description: "Rare precious metal with high corrosion resistance.",
      price: 2342422,
    },
    {
      id: 7,
      image: image.silver,
      title: "Silver",
      description: "Precious metal with excellent electrical conductivity.",
      price: 3242532,
    },
    {
      id: 8,
      image: image.steel,
      title: "Steel",
      description: "Durable iron alloy used in buildings and tools.",
      price: 2342422,
    },
    {
      id: 9,
      image: image.zinc,
      title: "Zinc",
      description: "Protective metal often used for galvanizing steel.",
      price: 3242532,
    }
  ],

  // Index page
  // Top Buyers
  top_buyers: [
    {
      id: 0,
      name: "John Joseph",
      image: image.buyer0
    },
    {
      id: 1,
      name: "Sarehe Haule",
      image: image.buyer1
    },
    {
      id: 2,
      name: "Joshua John",
      image: image.buyer2
    },
    {
      id: 3,
      name: "Paul Vicent",
      image: image.buyer3
    },
    {
      id: 4,
      name: "Ramadhan Omary",
      image: image.buyer4
    },
    {
      id: 5,
      name: "Steven Kessy",
      image: image.buyer5
    },
    {
      id: 6,
      name: "Hamis Sarehe",
      image: image.buyer6
    },
    {
      id: 7,
      name: "Juma Hasani",
      image: image.buyer7
    },
    {
      id: 8,
      name: "Kessy Joseph",
      image: image.buyer8
    },
    {
      id: 9,
      name: "Amani Amani",
      image: image.buyer9
    },
    {
      id: 10,
      name: "Sarehe Omary",
      image: image.buyer10
    }
  ]
};

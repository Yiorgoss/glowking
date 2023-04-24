export const categories = [
    {
        title: 'Car Wash',
        description: 'Wash Your Car',
        imageUrl: 'biological.jpg'
    },
    {
        title: 'Yacht',
        description: 'Wash Your Yacht',
        imageUrl: 'yacht.jpg'
    }
];

export const subtypes = [
    {
        title: 'Suv',
        description: 'Wash Suv',
        imageUrl: 'glowking_logo_2.jpeg'
    },
    {
        title: 'Mini',
        description: 'Wash Mini',
        imageUrl: 'home_services.jpg'
    }
];

export const categorySubtypes = [
    { categoryId: 1, subtypeId: 1 },
    { categoryId: 1, subtypeId: 2 }
];

export const packages = [
    {
        title: 'Standard',
        description: 'standard Package',
        tailwindColor: 'bg-green-500'
    },
    {
        title: 'Gold',
        description: 'Gold Package',
        tailwindColor: 'bg-cyan-500'
    },
    {
        title: 'Premium',
        description: 'Premium Package',
        tailwindColor: 'bg-purple-500'
    }
];

export const subtypePackages = [
    { subtypeId: 1, packageId: 1 },
    { subtypeId: 1, packageId: 2 },
    { subtypeId: 1, packageId: 3 }
];

export const extras = [
    {
        title: 'Rim Cleaning',
        description: 'Clean Rims',
        imageUrl: 'external.jpeg',
        price: 1,
        time: 1.4
    },
    {
        title: 'Clean Undercarriage',
        description: 'Clean Undercarriage',
        imageUrl: 'external.jpeg',
        price: 1,
        time: 1.4
    },
    {
        title: 'Clean Windows',
        description: 'Clean windows',
        imageUrl: 'external.jpeg',
        price: 1,
        time: 1.4
    }
];
export const packageExtras = [
    { packageId: 1, extraId: 1 },
    { packageId: 2, extraId: 1 },
    { packageId: 2, extraId: 2 },
    { packageId: 3, extraId: 1 },
    { packageId: 3, extraId: 2 },
    { packageId: 3, extraId: 3 }
];

export const categories = [
    {
        title: 'Car',
        description: '',
        imageUrl: '',
        categoryELId: 1
    },
    {
        title: 'Motorbike',
        description: '',
        imageUrl: '',
        categoryELId: 2
    },
    {
        title: 'Yacht',
        description: '',
        imageUrl: '',
        categoryELId: 3
    },
    {
        title: 'Outdoor Home',
        description: '',
        imageUrl: '',
        categoryELId: 4
    },
    {
        title: 'Indoor Home',
        description: '',
        imageUrl: '',
        categoryELId: 5
    }
];

export const categoriesEL = [
    {
        title: 'Αυτοκίνητο',
        description: ''
    },
    {
        title: 'Μοτοσικλέτα',
        description: ''
    },
    {
        title: 'Σκάφος',
        description: ''
    },
    {
        title: 'Εξωτερικό Σπίτι',
        description: ''
    },
    {
        title: 'Εσωτερικό σπίτι',
        description: ''
    }
];

export const subtypes = [
    {
        title: 'Smart',
        description: '',
        imageUrl: '',
        subtypeELId: 1
    },
    {
        title: 'IX',
        description: '',
        imageUrl: '',
        subtypeELId: 2
    },
    {
        title: 'SUV',
        description: '',
        imageUrl: '',
        subtypeELId: 3
    },
    {
        title: 'Wagon',
        description: '',
        imageUrl: '',
        subtypeELId: 4
    },
    {
        title: 'Supercar',
        description: '',
        imageUrl: '',
        subtypeELId: 5
    },
    {
        title: '',
        description: '',
        imageUrl: '',
        subtypeELId: 6
    }
];

export const subtypesEL = [
    {
        title: 'Smart',
        description: '',
    },
    {
        title: 'IX',
        description: '',
    },
    {
        title: 'SUV',
        description: '',
    },
    {
        title: 'Wagon',
        description: '',
    },
    {
        title: 'Supercar',
        description: '',
    }
];

export const categorySubtypes = [
    { categoryId: 1, subtypeId: 1 },
    { categoryId: 1, subtypeId: 2 },
    { categoryId: 1, subtypeId: 3 },
    { categoryId: 1, subtypeId: 4 },
    { categoryId: 1, subtypeId: 5 }
];

export const packages = [
    {
        title: 'Standard',
        description: '',
        tailwindColor: '',
        packageELId: 1
    },
    {
        title: 'Gold',
        description: '',
        tailwindColor: '',
        packageELId: 2
    },
    {
        title: 'Premium',
        description: '',
        tailwindColor: '',
        packageELId: 3
    }
];

export const packagesEL = [
    {
        title: 'Standard',
        description: '',
    },
    {
        title: 'Gold',
        description: '',
    },
    {
        title: 'Premium',
        description: '',
    }
];

export const subtypePackages = [
    { subtypeId: 1, packageId: 1 },
    { subtypeId: 1, packageId: 2 },
    { subtypeId: 1, packageId: 3 },
    { subtypeId: 2, packageId: 1 },
    { subtypeId: 2, packageId: 2 },
    { subtypeId: 2, packageId: 3 },
    { subtypeId: 3, packageId: 1 },
    { subtypeId: 3, packageId: 2 },
    { subtypeId: 3, packageId: 3 },
    { subtypeId: 4, packageId: 1 },
    { subtypeId: 4, packageId: 2 },
    { subtypeId: 4, packageId: 3 },
    { subtypeId: 5, packageId: 1 },
    { subtypeId: 5, packageId: 2 },
    { subtypeId: 5, packageId: 3 }
];

export const extras = [
    {
        title: `WASHABLE FROM BELOW`,
        description: `Washing the bottom of the car, removes mud, salts (from the winter season) and dirt that has accumulated over time.`,
        imageUrl: '/media/images/car-optionals/car_under.jpg',
        time: 1.5,
        price: 10,
        extraELId: 1
    },
    {
        title: `REMOVING ODORS + MICROBES`,
        description: `Odors are not covered but neutralized. For odors such as Cigarettes, Animals and other persistent odors.`,
        price: 8,
        time: 1.5,
        imageUrl: '/media/images/car-optionals/car2.jpg',
        extraELId: 2
    },
    {
        title: `TIRE INFLATION`,
        description: `Tire pressure check & inflation.`,
        price: 0,
        time: 1.5,
        imageUrl: '/media/images/car-optionals/car2.jpg',
        extraELId: 3
    },
    {
        title: `POLISHING – CERAMIC COATING`,
        description: `Hand polishing, removal of deposits with plasticine and CERAMIC ceramic coating. It offers a super hydrophobic protection and an amazing polish & finish, it lasts for 3 months.`,
        price: -1,
        time: 1.5,
        imageUrl: '/media/images/car-optionals/car2.jpg',
        extraELId: 4
    },
    {
        title: `PREMIUM AUTOGLYM WAX`,
        description: `Wax with AUTOGLYM wax, with a duration of 2 months, gives an extra protection to the surface of your car.`,
        imageUrl: '/media/images/car-optionals/car2.jpg',
        time: 1.5,
        price: 15,
        extraELId: 5
    },
    {
        title: `HYDROPHOBIC & ANTI-FOG GLASS COATING`,
        description: `Special glass coating that offers external hydrophobic and internal anti-fog protection, ideal for the winter months.`,
        imageUrl: '/media/images/car-optionals/window.jpg',
        time: 1.5,
        price: 30,
        extraELId: 6
    },
    {
        title: `LIQUID SOAP FOR WINDSHIELD WIPERS`,
        description: `Refilling of cleaning liquid soap for the windshield wipers.`,
        imageUrl: '/media/images/car-optionals/window.jpg',
        time: 1.5,
        price: 3,
        extraELId: 7
    },
    {
        title: `HOOD WATERPROOFING & MAINTENANCE`,
        description: `Hood cleaning, maintenance and waterproofing for a convertible car.`,
        imageUrl: '/media/images/car-optionals/hood.jpg',
        time: 1.5,
        price: 50,
        extraELId: 8
    },
    {
        title: `CLEANING AIR CONDITIONER`,
        description: `We clean your air condition unit`,
        imageUrl: '/media/images/car-optionals/hood.jpg',
        time: 1.5,
        price: 15,
        extraELId: 9
    },
    {
        title: `PET HAIR REMOVAL`,
        description: `Removing very fine pet hair from seats and carpeting.`,
        imageUrl: '/media/images/car-optionals/dog.jpg',
        time: 1.5,
        price: 13,
        extraELId: 10
    },
    {
        title: `CHILD SEAT`,
        description: `Biological cleaning of a child seat.`,
        imageUrl: '/media/images/car-optionals/baby.jpg',
        time: 1.5,
        price: 15,
        extraELId: 11
    },
    {
        title: `2 CHILDREN'S SEATS`,
        description: `Biological cleaning of 2 children's seats.`,
        imageUrl: '/media/images/car-optionals/baby.jpg',
        time: 1.5,
        price: 25,
        extraELId: 12
    }
];

export const extrasEL = [
    {
        title: 'ΠΛΥΣΙΜΟ ΑΠΟ ΚΑΤΩ',
        description:
            'Πλύσιμο του κάτω μέρους του αυτοκινήτου, αφαιρεί λάσπες,αλάτια (από την χειμερινή περίοδο) και ρύπους που έχουν μαζευτεί με τον καιρό.'
    },
    {
        title: 'ΑΦΑΙΡΕΣΗ ΟΣΜΩΝ + ΜΙΚΡΟΒΙΩΝ',
        description:
            'Οι οσμές δεν καλύπτονται αλλά εξουδετερώνονται. Για οσμές όπως Τσιγάρων, Ζώων και λοιπών επίμονων οσμών.'
    },
    {
        title: 'ΓΥΑΛΙΣΜΑ – ΚΕΡΑΜΙΚΗ ΕΠΙΣΤΡΩΣΗ',
        description:
            'Γυάλισμα στο χέρι, αφαίρεση επικαθίσεων με πλαστελίνη και κεραμική επίστρωση CERAMIC. Προσφέρει μια super υδροφοβική προστασία και ένα απίθανο γυάλισμα & φινίρισμα, έχει 3 μήνες διάρκεια.'
    },
    {
        title: 'ΥΔΡΟΦΟΒΙΚΗ & ΑΝΤΙΘΑΜΒΩΤΙΚΗ ΕΠΙΚΑΛΥΨΗ ΤΖΑΜΙΩΝ',
        description:
            'Ειδική επικάλυψη τζαμιών που προσφέρει εξωτερικά υδροφοβική και εσωτερικά αντιθαμβωτική προστασία, ιδανικό για τους χειμερινούς μήνες.'
    },
    {
        title: 'ΦΟΥΣΚΩΜΑ ΕΛΑΣΤΙΚΩΝ',
        description: 'Έλεγχος πίεσης & φούσκωμα ελαστικών.'
    },
    {
        title: 'ΥΓΡΟ ΣΑΠΟΥΝΙΟΥ ΓΙΑ ΥΑΛΟΚΑΘΑΡΙΣΤΗΡΕΣ',
        description:
            'Συμπλήρωση καθαριστικού υγρού σαπουνιού για τους υαλοκαθαριστήρες.'
    },
    {
        title: 'ΑΔΙΑΒΡΟΧΟΠΟΙΗΣΗ & ΣΥΝΤΗΡΗΣΗ ΚΟΥΚΟΥΛΑΣ',
        description:
            'Καθαρισμός, συντήρηση και αδιαβροχοποίηση κουκούλας για κάμπριο αυτοκίνητο.'
    },
    {
        title: 'ΚΑΘΑΡΙΣΜΟΣ ΕΡΚΟΝΤΙΣΙΟΝ',
        description: 'Καθαρίζουμε το κλιματιστικό σας'
    },
    {
        title: 'ΑΦΑΙΡΕΣΗ ΤΡΙΧΩΝ ΚΑΤΟΙΚΙΔΙΟΥ',
        description:
            'Αφαίρεση τριχών κατοικιδίου από τα καθίσματα και την μοκέτα.'
    },
    {
        title: 'ΠΑΙΔΙΚΟ ΚΑΘΙΣΜΑΤΑΚΙ',
        description: 'Βιολογικός καθαρισμός παιδικού καθίσματος.'
    },
    {
        title: '2 ΠΑΙΔΙΚΑ ΚΑΘΙΣΜΑΤΑΚΙΑ',
        description: 'Βιολογικός καθαρισμός 2 παιδικών καθισμάτων.'
    },
    {
        title: 'PREMIUM ΚΕΡΩΜΑ AUTOGLYM',
        description:
            'Κέρωμα με κερί AUTOGLYM, με διάρκεια 2 μήνες, δίνει μια επιπλέον προστασία στην επιφάνεια του αυτοκινήτου σας.'
    }
];
export const packageExtras = [
    { packageId: 1, extraId: 1 },
    { packageId: 1, extraId: 2 },
    { packageId: 1, extraId: 3 },
    { packageId: 1, extraId: 4 },
    { packageId: 1, extraId: 5 },
    { packageId: 1, extraId: 6 },
    { packageId: 1, extraId: 7 },
    { packageId: 1, extraId: 8 },
    { packageId: 1, extraId: 9 },
    { packageId: 1, extraId: 10 },
    { packageId: 1, extraId: 11 },
    { packageId: 1, extraId: 12 },

    { packageId: 2, extraId: 3 },
    { packageId: 2, extraId: 4 },
    { packageId: 2, extraId: 5 },
    { packageId: 2, extraId: 6 },
    { packageId: 2, extraId: 7 },
    { packageId: 2, extraId: 8 },
    { packageId: 2, extraId: 9 },
    { packageId: 2, extraId: 10 },
    { packageId: 2, extraId: 11 },

    { packageId: 3, extraId: 1 },
    { packageId: 3, extraId: 2 },
    { packageId: 3, extraId: 3 },
    { packageId: 3, extraId: 4 },
    { packageId: 3, extraId: 5 },
    { packageId: 3, extraId: 6 },
    { packageId: 3, extraId: 7 },
    { packageId: 3, extraId: 8 },
    { packageId: 3, extraId: 9 },
    { packageId: 3, extraId: 10 },
    { packageId: 3, extraId: 11 },
    { packageId: 3, extraId: 12 }
];

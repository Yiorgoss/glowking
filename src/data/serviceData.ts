import { t, defineMessage } from '@lingui/macro';

export const carServiceSubCategory = [
    {
        title: defineMessage({
            id: `serviceData.car-sub-category.1`,
            message: `Car Wash`
        }),
        href: '/services/detail-car-wash/car-cleaning'
    },
    {
        title: defineMessage({
            id: `serviceData.car-sub-category.2`,
            message: `Detailing`
        }),
        href: '/services/detail-car-wash/detailing-info'
    },
    {
        title: defineMessage({
            id: `serviceData.car-sub-category.3`,
            message: `Motorbike Wash`
        }),
        href: '/services/detail-car-wash/motorbike-clean'
    }
];
export const carServiceExtras = [
    {
        title: defineMessage({
            id: `car-service-extras.1.title`,
            message: `WASHABLE FROM BELOW`
        }),
        content: defineMessage({
            id: `car-service-extras.1.content`,
            message: `Washing the bottom of the car, removes mud, salts (from the winter season) and dirt that has accumulated over time.`
        }),
        price: 10,
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.2.title`,
            message: `REMOVING ODORS + MICROBES`
        }),
        content: defineMessage({
            id: `car-service-extras.2.content`,
            message: `Odors are not covered but neutralized. For odors such as Cigarettes, Animals and other persistent odors.`
        }),
        price: 8,
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.5.title`,
            message: `TIRE INFLATION`
        }),
        content: defineMessage({
            id: `car-service-extras.5.content`,
            message: `Tire pressure check & inflation.`
        }),
        price: defineMessage({
            id: `car-service-extras.5.price`,
            message: `FREE`
        }),
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.3.title`,
            message: `POLISHING – CERAMIC COATING`
        }),
        content: defineMessage({
            id: `car-service-extras.3.content`,
            message: `Hand polishing, removal of deposits with plasticine and CERAMIC ceramic coating. It offers a super hydrophobic protection and an amazing polish & finish, it lasts for 3 months.`
        }),
        price: defineMessage({
            id: `car-service-extras.3.price`,
            message: `Request a Quote`
        }),
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.12.title`,
            message: `PREMIUM AUTOGLYM WAX`
        }),
        content: defineMessage({
            id: `car-service-extras.12.content`,
            message: `Wax with AUTOGLYM wax, with a duration of 2 months, gives an extra protection to the surface of your car.`
        }),
        price: 15,
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.4.title`,
            message: `HYDROPHOBIC & ANTI-FOG GLASS COATING`
        }),
        content: defineMessage({
            id: `car-service-extras.4.content`,
            message: `Special glass coating that offers external hydrophobic and internal anti-fog protection, ideal for the winter months.`
        }),
        price: 30,
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.6.title`,
            message: `LIQUID SOAP FOR WINDSHIELD WIPERS`
        }),
        content: defineMessage({
            id: `car-service-extras.6.content`,
            message: `Refilling of cleaning liquid soap for the windshield wipers.`
        }),
        price: 3,
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.7.title`,
            message: `HOOD WATERPROOFING & MAINTENANCE`
        }),
        content: defineMessage({
            id: `car-service-extras.7.content`,
            message: `Hood cleaning, maintenance and waterproofing for a convertible car.`
        }),
        price: 50,
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.8.title`,
            message: `CLEANING AIR CONDITIONER`
        }),
        content: defineMessage({
            id: `car-service-extras.8.content`,
            message: `We clean your air condition unit`
        }),
        price: 15,
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.9.title`,
            message: `PET HAIR REMOVAL`
        }),
        content: defineMessage({
            id: `car-service-extras.9.content`,
            message: `Removing very fine pet hair from seats and carpeting.`
        }),
        price: 13,
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.10.title`,
            message: `CHILD SEAT`
        }),
        content: defineMessage({
            id: `car-service-extras.10.content`,
            message: `Biological cleaning of a child seat.`
        }),
        price: 15,
        src:"",
        href: ''
    },
    {
        title: defineMessage({
            id: `car-service-extras.11.title`,
            message: `2 CHILDREN'S SEATS`
        }),
        content: defineMessage({
            id: `car-service-extras.11.content`,
            message: `Biological cleaning of 2 children's seats.`
        }),
        price: 25,
        src:"",
        href: ''
    }
];
export const homeServiceSubCategory = [
    {
        title: defineMessage({
            id: `serviceData.home-sub-category.1`,
            message: `Couches`
        }),
        href: '/services/home-cleaning-couches/couches'
    },
    {
        title: defineMessage({
            id: `serviceData.home-sub-category.2`,
            message: `Carpets`
        }),
        href: '/services/home-cleaning-couches/carpets'
    },
    {
        title: defineMessage({
            id: `serviceData.home-sub-category.3`,
            message: `Mattresses`
        }),
        href: '/services/home-cleaning-couches/mattresses'
    }
];
export const sidebarLinks = [
    {
        title: defineMessage({
            id: 'services-side-bar.layout.1',
            message: 'Car Wash and Detailing'
        }),
        path: '/services/detail-car-wash/car-cleaning',
        subPaths: carServiceSubCategory
    },
    {
        title: defineMessage({
            id: 'services-side-bar.layout.2',
            message: 'Home Cleaning'
        }),
        path: '/services/home-cleaning-couches/couches',
        subPaths: homeServiceSubCategory
    },
    {
        title: defineMessage({
            id: 'services-side-bar.layout.3',
            message: 'Yacht Cleaning'
        }),
        path: '/services/yacht-cleaning-boat'
    },
    {
        title: defineMessage({
            id: 'services-side-bar.layout.4',
            message: 'Property Cleaning'
        }),
        path: '/services/property-cleaning-garage-driveways'
    }
];
export const serviceData = [
    {
        header: defineMessage({
            id: `Services-simple-list.one.header`,
            message: 'External Wash'
        }),
        content: defineMessage({
            id: `Services-simple-list.one.content`,
            message:
                "External cleaning is done without the use of a brush or sponge, but only with the use of hot water for less damage to the car's exterior paint.At Glow King we offer you a complete exterior cleaning with pre-washing and mainly washing the vehicle with active foam, cleaning the domes and rims, removing insects, protective wax and rinsing the car with deionized water!The vehicle is then thoroughly wiped."
        }),
        image: '/media/images/external.jpeg',
        className: 'col-span-3',
        path: '/services/detail-car-wash/car-cleaning'
    },
    {
        header: defineMessage({
            id: `Services-simple-list.two.header`,
            message: 'Internal Cleaning'
        }),
        content: defineMessage({
            id: `Services-simple-list.two.content`,
            message:
                'In internal cleaning, with respect for people and the environment as our guiding principle, we use ecologically biodegradable products.Internally we blow the vehicle to remove the dust and then vacuum the cabin and the luggage compartment, cleaning the windows and all glass surfaces.Finally, we proceed with cleaning and maintenance of all leather and plastic surfaces, dry cleaning of carpets and perfuming the cabin area.'
        }),
        image: '/media/images/internal.jpeg',
        className: 'col-span-3',
        path: '/services/detail-car-wash/car-cleaning'
    },
    {
        header: defineMessage({
            id: `Services-simple-list.three.header`,
            message: 'Full Detailing'
        }),
        content: defineMessage({
            id: `Services-simple-list.three.content`,
            message:
                'Car detailing is the service that offers you the detailing you deserve! Top quality materials and top staff are the ultimate combination for top results. A result with a protagonist...you!'
        }),
        image: '/media/images/internal.jpeg',
        className: 'col-span-3',
        path: '/services/detail-car-wash/car-cleaning'
    },
    {
        header: defineMessage({
            id: `Services-simple-list.four.header`,
            message: 'Yacht Services'
        }),
        content: defineMessage({
            id: `Services-simple-list.four.content`,
            message:
                'Your boat has found its master! Our company undertakes both the interior and exterior cleaning of your boat. Our trusted staff combined with the top quality of our products will make your boat shine!'
        }),
        image: '/media/images/yacht.jpg',
        className: 'col-span-2',
        path: '/services/yacht-cleaning-boat'
    },
    {
        header: defineMessage({
            id: `Services-simple-list.five.header`,
            message: 'Home Services'
        }),
        content: defineMessage({
            id: `Services-simple-list.five.content`,
            message:
                'Biocleaning sofa is the most complete sofa cleaning process and more generally fabric surfaces that you can find. This method concerns the best way to clean a fabric surface since it cleans stains refreshes colors, disinfects the entire surface and deodorizes the unpleasant ones smells. The surfaces are then fresh for a few hours.'
        }),
        image: '/media/images/pavement.png',
        className: 'col-span-2',
        path: '/services/property-cleaning-garage'
    },
    {
        header: defineMessage({
            id: `Services-simple-list.six.header`,
            message: 'Property Services'
        }),
        content: defineMessage({
            id: `Services-simple-list.six.content`,
            message:
                'A garage full of dust, mud and clutter? Our company undertakes a complete cleaning of your garage. Our trusted staff combined with the top quality of our products will make your garage shine!'
        }),
        image: '/media/images/pavement.png',
        className: 'col-span-2',
        path: '/services/home-cleaning-couches/couches'
    }
];

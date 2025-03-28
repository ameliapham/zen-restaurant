import { LocalizedString } from "i18n"

import restoImage from 'assets/resto3.webp'
import restoImage2 from "assets/resto4.webp"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logoDark from 'assets/logoDark.svg'
import logoLight from 'assets/logoLight.svg'
import logoColor from 'assets/logoColor.svg'

type PropsRestaurantDetail = {
    logoUrl: {
        logoDark: string;
        logoLight: string;
        logoColor?: string;
    };
    description: LocalizedString;
    openingTime: LocalizedString[];
    address: string;
    phone: string;
    socialUrl: {
        name: string;
        url: string;
        Icon: React.ElementType;
    }[];
    illustrations: {
        photos: {
            url: string;
            alt: string;
        }[];
    };
}

export const restaurantDetail: PropsRestaurantDetail = {
    logoUrl: {
        logoDark: logoDark,
        logoLight: logoLight,
        logoColor: logoColor,
    },
    description: {
        en: "Just a short walk from the heart of Paris, our ZenAsia restaurant is the ideal spot for a lunch or dinner before exploring the city. ZenAsia offers a refreshing ambiance and authentic Asian flavours right in the centre of Europe. Our establishment features traditional sunken tables for a unique dining experience. We recommend booking these in advance, as they are highly sought after.",
        fr: "À deux pas du cœur de Paris, notre restaurant ZenAsia est l'endroit idéal pour déjeuner ou dîner avant de partir à la découverte de la ville. ZenAsia propose une ambiance rafraîchissante et des saveurs asiatiques authentiques en plein centre de l'Europe. Notre établissement dispose de tables traditionnelles encastrées pour une expérience culinaire unique. Nous vous recommandons de les réserver à l'avance, car elles sont très demandées."
    },
    openingTime: [
        {
            en : "Monday - Friday: 12:00 - 22:00",
            fr : "Lundi - Vendredi: 12:00 - 22:00",
        },
        {
            en: "Saturday - Sunday: 10:00 - 23:00",
            fr: "Samedi - Dimanche: 10:00 - 23:00",
        }
    ],
    address: "Rue de la Paix 75002 Paris",
    phone: "+33 1 23 45 67 89",
    socialUrl: [
        {
            name: 'facebook',
            url: "https://www.facebook.com/",
            Icon: FacebookIcon,
        },
        {
            name: 'instagram',
            url: "https://www.instagram.com/",
            Icon: InstagramIcon,
        },
        {
            name: 'twitter',
            url: "https://twitter.com/",
            Icon: TwitterIcon,
        }
    ],    
    illustrations: {
        photos: [
            {
                url: restoImage,
                alt: "restoImage"
            },
            {
                url: restoImage2,
                alt: "restoImage2"
            }
        ]
    }
}
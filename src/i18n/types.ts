import type { GenericTranslations } from "i18nifty";

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type ComponentKey =
	| typeof import('pages/Home/DesignOfHomePage').i18n 
	| typeof import('components/AppBar').i18n 
    | typeof import('components/NavigationMenu').i18n
    | typeof import('pages/About').i18n
    | typeof import('pages/About/DesignOfAboutPage').i18n
    | typeof import('pages/Reservation').i18n
    | typeof import('pages/Reservation/ReservationForm').i18n
    | typeof import('pages/Reservation/DesignOfReservationPage').i18n
    | typeof import('pages/Menu').i18n
    ;

export type Translations<L extends Language> = GenericTranslations<ComponentKey, Language, typeof fallbackLanguage, L>;

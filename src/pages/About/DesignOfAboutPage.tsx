import { tss } from 'tss-react/mui'
import { Carousel } from './Carousel'
import { Map } from 'components/Map'
import Typography from '@mui/material/Typography';
import { restaurantDetail } from "data/RestaurantDetail";
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
import { useResolveLocalizedString } from "i18n";

type PropsDesignOfAboutPage = {
    className?: string;
}

export function DesignOfAboutPage(props: PropsDesignOfAboutPage) {

    const { className } = props

    const { resolveLocalizedString } = useResolveLocalizedString({
        "labelWhenMismatchingLanguage": true
    });
    
    const { t } = useTranslation({ DesignOfAboutPage })
    const { cx, classes } = useStyles()
    const { logoColor } = restaurantDetail.logoUrl

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.about}>
                <img
                    src={logoColor}
                    alt="logo"
                    className={classes.logo}
                />
                <Typography
                    variant="body2"
                    className={classes.describe}
                >
                    {resolveLocalizedString(restaurantDetail.description)}
                </Typography>
            </div>

            <div className={classes.carousel}>
                <Carousel />
            </div>

            <div className={classes.info}>
                <div className={classes.infoDetail}>
                    <Typography
                        variant='body1'
                        className={classes.infoHeading}
                    >
                        {t("opening times")}
                    </Typography>

                    {restaurantDetail.openingTime.map((time, index) => (
                        <Typography key={index} variant="body2">
                            {resolveLocalizedString(time)}
                        </Typography>
                    ))}
                </div>

                <div className={classes.infoDetail}>
                    <Typography
                        variant='body1'
                        className={classes.infoHeading}
                    >
                        {t("find us")}
                    </Typography>

                    <Map
                        className={classes.map}
                        center={{
                            lat: 48.8477,
                            lng: 2.3446,
                        }}
                    />
 
                    <Typography
                        variant='body2'
                    >
                        {restaurantDetail.address}
                    </Typography>
                    
                    <Typography
                        variant='body2'
                    >
                        {restaurantDetail.phone}
                    </Typography>
                </div>
            </div>

            <div className={classes.social}>
                {restaurantDetail.socialUrl.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noreferrer">
                        <social.Icon className={classes.icon} />
                    </a>
                ))}
            </div>

        </div>

    )
}

const useStyles = tss
    .withName({ DesignOfAboutPage })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": theme.spacing(2),

            [theme.breakpoints.down('desktop')]: {
                "paddingTop": theme.spacing(2),
            },
        },
        "about": {
            "display": "flex",
            "gap": theme.spacing(3),
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": theme.spacing(2),
            "padding": theme.spacing(3),
            "alignItems": "flex-end",
            "justifyContent": "space-between",

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
                "alignItems": "flex-start",
            },
        },
        "logo": {
            "flex": 1,
            "maxWidth": "200px",

        },
        "describe": {
            "margin": 0,
            "padding": 0,
            "width": "70%",
            "fontWeight": theme.typography.caption.fontWeight,

            [theme.breakpoints.only('tablet')]: {
                "width": "60%",
            },

            [theme.breakpoints.only('mobile')]: {
                "width": "100%",
            },
        },
        "carousel": {
            "flexGrow": 2,

            [theme.breakpoints.down('desktop')]: {
                "height": theme.spacing(40),
            },
        },
        "info": {
            "display": "flex",
            "flexDirection": "row",
            "gap": theme.spacing(2),
            "flexGrow": 1,

            [theme.breakpoints.down('desktop')]: {
                "height": theme.spacing(40),
            },
        },
        "infoHeading": {
            "color": theme.palette.secondary.dark,
        },
        "infoDetail": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(2),
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": theme.spacing(2),
            "padding": theme.spacing(2),
            "flexGrow": 1,
            "overflow": "hidden",
        },
        "map": {
            "borderRadius": theme.spacing(2),
            [theme.breakpoints.only('mobile')]: {
                "display": "none",
            },
        },
        "social": {
            "display": "flex",
            "gap": theme.spacing(2),
            "justifyContent": "center",
            "alignItems": "center",
            "border": `1px solid ${theme.palette.secondary.light}`,
            "borderRadius": theme.spacing(2),
            "height": theme.spacing(6),
        },
        "icon": {
            "width": "25px",
            "height": "25px",
            "color": theme.palette.secondary.dark,
        },
    }))

export const { i18n } = declareComponentKeys<
    | "opening times"
    | "find us"
>()({ DesignOfAboutPage });
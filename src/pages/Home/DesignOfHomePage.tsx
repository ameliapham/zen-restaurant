import { tss } from 'tss-react/mui'
import { CustomCard } from 'components/CustomCard'
import firstImage from "assets/food-nem.webp"
import secondImage from "assets/reservation2.webp"
import thirdImage from "assets/resto4.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
import { useSelectedPage } from 'hooks/useSelectedPage';
import { keyframes } from "tss-react";


type PropsDesignOfHomePage = {
    className?: string;
}

export function DesignOfHomePage(props: PropsDesignOfHomePage) {

    const { className } = props
    const { t } = useTranslation({ DesignOfHomePage})
    const { setSelectedPage } = useSelectedPage()
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <CustomCard
                className={classes.card}
                backgroundImageUrl={firstImage}
                onClick={() => setSelectedPage("menu")}
            >
                {t("menu")}
            </CustomCard>

            <CustomCard
                className={classes.card}
                backgroundImageUrl={secondImage}
                onClick={() => setSelectedPage("reservation")}
            >
                {t("reservation")}
            </CustomCard>
            <CustomCard
                className={classes.card}
                backgroundImageUrl={thirdImage}
                onClick={() => setSelectedPage("about")}
            >
                {t("our restaurant")}
            </CustomCard>
        </div>

    )
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(200px, 0px)",
        filter: "blur(2px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});


const useStyles = tss
    .withName({ DesignOfHomePage })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "boxSizing": "border-box",
            "gap": theme.spacing(2),

            [theme.breakpoints.only('tablet')]: {
                "flexDirection": "row",
            },

            [theme.breakpoints.only("mobile")]: {
                "paddingTop": theme.spacing(2),
            },
        },
        "card": {
            "flex": 1,
            opacity: 0,
            animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

            [theme.breakpoints.only("mobile")]: {
                "flex": theme.spacing(40),
            },
        },
    }))

export const { i18n } = declareComponentKeys<
    | "menu"
    | "reservation"
    | "our restaurant"
>()({ DesignOfHomePage });
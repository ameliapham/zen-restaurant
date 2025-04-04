import { tss } from 'tss-react/mui'
import Typography from '@mui/material/Typography'
import { useResolveLocalizedString } from "i18n";
import { Dish } from 'data/dish';

type PropsFoodItemStructure = {
    className?: string;
    dishes: Dish[];
}

export function FoodItemStructure(props: PropsFoodItemStructure) {

    const { className, dishes } = props

    const { cx, classes } = useStyles()

    const { resolveLocalizedString } = useResolveLocalizedString({
        "labelWhenMismatchingLanguage": true
    });

    return (
        <div>
            {dishes.map((dishes, i) => (
                <div key={i} className={cx(classes.root, className)}>
                    <div
                        className={classes.illustration}
                        style={{ backgroundImage: `url(${dishes.illustration})` }}
                    ></div>

                    <div className={classes.textZone}>
                        <div className={classes.nameVsPrice}>
                            <Typography
                                variant='body1'
                            >
                                {resolveLocalizedString(dishes.title)}
                            </Typography>

                            <Typography
                                variant='body1'
                            >
                                {dishes.price}
                            </Typography>
                        </div>

                        {dishes.description !== undefined &&
                            <Typography
                                variant='caption'
                                className={classes.details}
                            >
                                {resolveLocalizedString(dishes.description)}
                            </Typography>
                        }
                    </div>
                </div>
            ))
            }

        </div >

    )
}

const useStyles = tss
    .withName("FoodItem")
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "gap": theme.spacing(2),
            "alignItems": "center",
            "paddingBottom": theme.spacing(2),

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
            },
        },
        "illustration": {
            "background": "center center/cover",
            "width": "30%",
            "height": "100%",
            "minHeight": theme.spacing(12),
            "maxHeight": theme.spacing(12),
            "maxWidth": theme.spacing(12),
        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(1),
            "width": "70%",

            [theme.breakpoints.only('mobile')]: {
                "width": "90%",
            },
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "color": theme.palette.text.primary,
            "gap": theme.spacing(1),
        },
        "details": {
            "textAlign": "left",
            "color": theme.palette.text.primary,
            "fontWeight": "lighter",
        },
    }))

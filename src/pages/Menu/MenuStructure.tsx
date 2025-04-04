import Divider from '@mui/material/Divider';
import { FoodItemStructure } from './FoodItemStructure'
import { tss } from 'tss'
import Typography from '@mui/material/Typography'
import { useAsync } from 'tools/useAsync';
import { getDishes } from 'data/dish';

type PropsMenuStructure = {
    className?: string;
    heading: string;
    dishCategoryId: number;
}

export function MenuStructure(props: PropsMenuStructure) {

    const { className, heading, dishCategoryId } = props

    console.log("dishCategoryId", dishCategoryId)

    const { classes, cx } = useStyles()

    const dishes = useAsync(getDishes);

    console.log("dishes", dishes)

    if( dishes === undefined ) {
        return <div>Loading...</div>
    }

    const dishes_selected = dishes.filter(dish => dish.dishCategory.id === dishCategoryId);

    console.log("dishes_selected", dishes_selected)

    return (

        <div className={cx(classes.root, className)}>

            <div className={classes.objectHeading}>
                <Divider
                    component="div"
                    role="presentation"
                    className={classes.divider}
                    textAlign='center'>

                    <Typography
                        variant="h6"
                        className={classes.h6}
                    >
                        {heading}
                    </Typography>

                </Divider>

            </div>
            <div className={classes.foodList}>
                <FoodItemStructure dishes={dishes_selected} />
            </div>


        </div>
    )
}

const useStyles = tss
    .withName("FoodList")
    .create(({ theme, scrollbarStyles }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(3),
            "height": "100%",
            "overflow": "auto",
            "boxSizing": "border-box",
        },
        "objectHeading": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "color": theme.palette.text.primary,
        },
        "divider": {
            "width": "90%",
        },
        "h6": {
            "textTransform": "uppercase",
            "color": theme.palette.secondary.dark,
        },
        "foodList": {
            "overflow": "auto",
            ...scrollbarStyles,
        },

    }))
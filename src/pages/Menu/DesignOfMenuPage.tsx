import { useEffect } from "react";
import { tss } from "tss-react/mui";
import { MenuStructure } from "./MenuStructure";
import { useState } from "react";
import { Divider } from "@mui/material";
import { HashtagButton } from "./HashtagButton";
import { getDishCategories } from "data/dishCategory";
import { useAsync } from "tools/useAsync";

type PropsDesignOfMenuPage = {
  className?: string;
};

export function DesignOfMenuPage(props: PropsDesignOfMenuPage) {
  const { className } = props;
  const { cx, classes } = useStyles({ selected: false });
  const [dishCategoryId_selected, setDishCategoryId_selected] = useState<
    number | undefined
  >(undefined);

  const dishCategories = useAsync(getDishCategories);

  useEffect(
    ()=> {

        if( dishCategories === undefined ){
            return;
        }

        if( dishCategoryId_selected !== undefined ){
            return;
        }

        setDishCategoryId_selected(dishCategories[0].id);

    },
    [dishCategories]
  );

  if (dishCategories === undefined || dishCategoryId_selected === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.hashtag}>
        {dishCategories.map((category) => {
          return (
            <>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                className={classes.divider}
              />
              <HashtagButton
                onClick={() => setDishCategoryId_selected(category.id)}
                selected={category.id === dishCategoryId_selected}
              >
                {category.title}
              </HashtagButton>
            </>
          );
        })}
      </div>

      <MenuStructure
        heading={dishCategories.find((category) => category.id === dishCategoryId_selected)!.title}
        dishCategoryId={dishCategoryId_selected}
      ></MenuStructure>
    </div>
  );
}

const useStyles = tss
  .withName({ DesignOfMenuPage })
  .withParams<{ selected: boolean }>()
  .create(({ theme }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      gap: theme.spacing(5),
      borderRadius: theme.spacing(2),
      padding: `${theme.spacing(2)}`,
      border: `1px solid ${theme.palette.secondary.light}`,
      overflow: "hidden",
      height: "100%",

      [theme.breakpoints.down("desktop")]: {
        marginTop: `${theme.spacing(2)}`,
      },
    },
    hashtag: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    divider: {
      background: theme.palette.secondary.light,
    },
  }));


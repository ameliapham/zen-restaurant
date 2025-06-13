import { tss } from "tss-react/mui";
import { MenuStructure } from "./MenuStructure";
import { useState } from "react";
import { Divider } from "@mui/material";
import { HashtagButton } from "./HashtagButton";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";
import { keyframes } from "tss-react";

type PropsDesignOfMenuPage = {
  className?: string;
};

type FoodCategory = "starters" | "mains" | "desserts" | "drinks";

export function DesignOfMenuPage(props: PropsDesignOfMenuPage) {
  const { className } = props;
  const { cx, classes } = useStyles({ selected: false });
  const [selectedCategory, setSelectedCategory] =
    useState<FoodCategory>("starters");
  const { t } = useTranslation({ DesignOfMenuPage });

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.hashtag}>
        <HashtagButton
          onClick={() => setSelectedCategory("starters")}
          selected={selectedCategory === "starters"}
        >
          {t("starters")}
        </HashtagButton>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <HashtagButton
          onClick={() => setSelectedCategory("mains")}
          selected={selectedCategory === "mains"}
        >
          {t("mains")}
        </HashtagButton>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <HashtagButton
          onClick={() => setSelectedCategory("desserts")}
          selected={selectedCategory === "desserts"}
        >
          {t("desserts")}
        </HashtagButton>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <HashtagButton
          onClick={() => setSelectedCategory("drinks")}
          selected={selectedCategory === "drinks"}
        >
          {t("drinks")}
        </HashtagButton>
      </div>

      <MenuStructure
        heading={
          selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
        }
        foods={selectedCategory}
      ></MenuStructure>
    </div>
  );
}

const animate = keyframes({
  from: {
    opacity: 0,
    transform: "translate(200px, 0px)",
    filter: "blur(2px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0)",
    filter: "blur(0)",
  },
});

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
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

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

export const { i18n } = declareComponentKeys<
  "starters" | "mains" | "desserts" | "drinks"
>()({ DesignOfMenuPage });

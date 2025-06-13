import { forwardRef, ReactNode } from "react";
import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import { AppBar } from "components/AppBar";
import { keyframes } from "tss-react";

type PropsHeroSection = {
  className?: string;
  backgroundImageUrl: string;
  heroText: ReactNode;
};

export const HeroSection = forwardRef<HTMLDivElement, PropsHeroSection>(
  (props, ref) => {
    const { className, backgroundImageUrl, heroText } = props;
    const { cx, classes } = useStyles({ backgroundImageUrl });

    return (
      <div ref={ref} className={cx(classes.root, className)}>
        <AppBar />

        <Typography variant="h1" className={classes.heroText}>
          {heroText}
        </Typography>
      </div>
    );
  }
);

const animate = keyframes({
  from: {
    opacity: 0,
    transform: "translate(0, 100px)",
    filter: "blur(30px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0)",
    filter: "blur(0)",
  },
});

const useStyles = tss
  .withName({ HeroSection })
  .withParams<{ backgroundImageUrl: string }>()
  .create(({ theme, backgroundImageUrl }) => ({
    root: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: `url(${backgroundImageUrl}) center center/cover`,
      borderRadius: theme.spacing(2),
      color: "#f6edde",
      overflow: "hidden",

      [theme.breakpoints.only("desktop")]: {
        padding: "30px 50px 30px 50px",
      },

      [theme.breakpoints.down("desktop")]: {
        padding: "30px 0 30px 0",
        alignItems: "center",
      },
    },
    heroText: {
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

      [theme.breakpoints.only("tablet")]: {
        textAlign: "center",
      },

      [theme.breakpoints.only("mobile")]: {
        textAlign: "center",
        fontSize: theme.typography.h2.fontSize,
      },
    },
  }));

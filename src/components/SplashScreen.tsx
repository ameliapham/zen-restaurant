import { keyframes } from "tss-react";
import { tss } from "tss-react/mui";
import LogoSplashScreen from "assets/logoSplashScreen.svg?react";

type Props = {
  className?: string;
};

export function SplashScreen(props: Props) {
  const { className } = props;
  const { cx, classes } = useStyles();

  return <LogoSplashScreen className={cx(classes.root, className)} />;
}

const getAnimationVertical = (delay: string, iterationCount: string) =>
  `${keyframes`
0% {
    opacity: 0;
    clip-path: inset(0 0 100% 0)
}
40% {
    opacity: 1;
    clip-path: inset(0 0 0 0)
}
60%, 100% {
    opacity: 1;
}
`} 2s ease-in-out ${delay} ${iterationCount}`;

const getAnimationVerticalMoving = (delay: string, iterationCount: string) =>
  `${keyframes`
0% {
    opacity: 0;
    clip-path: inset(0 0 100% 0)
    transform: translateY(100%);
}
40% {
    opacity: 1;
    clip-path: inset(0 0 0 0)
    transform: translateY(0);
}
60%, 100% {
    opacity: 1;
}
`} 2s ease-in-out ${delay} ${iterationCount}`;

const useStyles = tss.withName("SplashScreen").create(({ theme }) => ({
  root: {
    "& .path1": {
      opacity: 0,
      fill: theme.palette.text.primary,
      animation: getAnimationVertical("0s", "1"),
    },
    "& .path2": {
      opacity: 0,

      fill: theme.palette.text.primary,
      animation: getAnimationVertical("0.5s", "1"),
    },
    "& .path3": {
      opacity: 0,
      fill: theme.palette.text.primary,
      animation: getAnimationVertical("1s", "1"),
    },
    "& .path4": {
      opacity: 0,
      backgroundColor: theme.palette.text.primary,
      animation: getAnimationVerticalMoving("1s", "1"),
    },
    "& .path5": {
      opacity: 0,
      backgroundColor: theme.palette.text.primary,
      animation: getAnimationVerticalMoving("1s", "1"),
    },
  },
}));

import { tss, keyframes } from "tss-react";
import LogoSplashScreen from 'assets/logoSplashScreen.svg?react';

type Props = {
    className?: string;
}

export function SplashScreen(props : Props) {
    const { className } = props;
    const { cx, classes } = useStyles();

    return <LogoSplashScreen className={cx(classes.root, className)} />
}

const getAnimationHorizontal = (delay: string) =>
    `${keyframes`
0% {
    opacity: 0;
    clip-path: inset(0 100% 0 0)
}
40% {
    opacity: 1;
    clip-path: inset(0 0 0 0)
}
60%, 100% {
    opacity: 1;
}
`} ${delay} infinite ease-in-out`;

const useStyles = tss.withName({ SplashScreen }).create(() => ({
    root: {
        border: "1px solid yellow",
        "& .path1": {
            fill : "red",
            animation: getAnimationHorizontal("1s"),
        },
        "& .path2": {
            fill : "red",
            animation: getAnimationHorizontal("1s"),

        },
    }
}))
import { GlobalStyles } from "tss-react";
import { tss } from "tss";
import { useEffect, Suspense, lazy } from "react";
import { useSelectedPage } from "hooks/useSelectedPage";
import { SplashScreen } from "components/SplashScreen";
import { useDelay } from "tools/useDelay";

const Home = lazy(() => import("pages/Home"));
const Menu = lazy(() => import("pages/Menu"));
const About = lazy(() => import("pages/About"));
const Reservation = lazy(() => import("pages/Reservation"));

export function App() {
  const { selectedPage } = useSelectedPage();
  const { classes, theme, scrollbarStyles } = useStyles();
  const { isDelayed } = useDelay(2000);

  // This is for the theme color of the browser, it will take effect when the user is on mobile
  useEffect(() => {
    const existingMeta = document.querySelector("meta[name='theme-color']");
    if (existingMeta !== null) {
      existingMeta.remove();
    }

    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = theme.palette.background.default;
    document.head.appendChild(meta);
  }, [theme.palette.mode]);

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
          },
          html: {
            colorScheme: theme.palette.mode,
            backgroundColor: theme.palette.background.default,
          },
          body: {
            ...scrollbarStyles,
          },
        }}
      />
      <div className={classes.root}>
        <Suspense
          fallback={
            <div className={classes.fallback}>
              <SplashScreen className={classes.splashScreen} />
            </div>
          }
        >
          {isDelayed ? (
            <div className={classes.fallback}>
              <SplashScreen className={classes.splashScreen} />
            </div>
          ) : (
            <div className={classes.root}>
              {(() => {
                switch (selectedPage) {
                  case "home":
                    return <Home />;
                  case "menu":
                    return <Menu />;
                  case "about":
                    return <About />;
                  case "reservation":
                    return <Reservation />;
                }
              })()}
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
}

const useStyles = tss.create(({ theme }) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    color: theme.palette.text.primary,

    [theme.breakpoints.down("desktop")]: {
      overflow: "unset",
      height: "unset",
    },
  },
  fallback: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  splashScreen: {},
}));

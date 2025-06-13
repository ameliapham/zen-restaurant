import { tss } from "tss-react/mui";
//import Divider from '@mui/material/Divider'
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { keyframes } from "tss-react";
import { ReservationForm } from "pages/Reservation/ReservationForm";
import { CustomButton } from "components/CustomButton";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";

type PropsDesignOfReservationPage = {
  className?: string;
};

export function DesignOfReservationPage(props: PropsDesignOfReservationPage) {
  const { className } = props;
  const { cx, classes } = useStyles();
  const { t } = useTranslation({ DesignOfReservationPage });

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.objectHeading}>
        <Typography variant="h6">{t("reservation")}</Typography>
      </div>

      <Typography variant="body2" className={classes.text}>
        {t("punchline")}
      </Typography>

      <ReservationForm className={classes.inputForm} />

      <CustomButton className={classes.reservation}>
        {t("reserve now")}
      </CustomButton>
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
  .withName({ DesignOfReservationPage })
  .create(({ theme }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      gap: theme.spacing(5),
      alignItems: "center",
      borderRadius: theme.spacing(2),
      padding: `${theme.spacing(10)} ${theme.spacing(3)}`,
      border: `1px solid ${theme.palette.secondary.light}`,
      overflow: "hidden",
      justifyContent: "center",

      [theme.breakpoints.down("desktop")]: {
        marginTop: theme.spacing(2),
      },
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
    },
    objectHeading: {
      color: theme.palette.secondary.dark,
      textTransform: "uppercase",
    },
    text: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
    },
    inputForm: {
      width: "100%",
    },
    reservation: {
      border: `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
    },
  }));

export const { i18n } = declareComponentKeys<
  "reservation" | "punchline" | "reserve now"
>()({ DesignOfReservationPage });

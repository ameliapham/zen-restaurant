import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"
import { HeroSection } from "components/HeroSection"
import { DesignOfHomePage } from "./DesignOfHomePage"
import backgroundImageUrl from "assets/food-pho.webp"
import { useHeight } from "hooks/useHeightContext"
import { useDomRect } from "powerhooks/useDomRect"
import { useAsync } from "tools/useAsync";
import { getHomepage } from "data/homepageData";
//import { getCats } from "data/cat";


export function Home() {

    const { ref, domRect: { height } } = useDomRect()
    const { setHeight } = useHeight()

    useEffect(()=>{
        setHeight(height);
    }, [height]);


    const [checked, setChecked] = useState(false)

    const { classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    const homepage = useAsync(getHomepage);
    //const cats = useAsync(getCats);

    /*
    if(cats === undefined){
        return null;
    }
    */

    if(homepage === undefined){
        //return <h1>Loading API data ...</h1>;
        return null;
    }

    return (
        <Fade
            in={checked}
            timeout={800}
        >
            <div className={classes.root}>
                <HeroSection
                    ref={ref}
                    className={classes.left}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={
                        <span 
                            dangerouslySetInnerHTML={{__html: homepage.title}}
                        />
                    }
                />
                <DesignOfHomePage
                    className={classes.right}
                />
                {cats.map(cat => (<div key={cat.id}>{cat.name}</div>))}
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Home })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",

            [theme.breakpoints.only('tablet')]: {
                "flexDirection": "column",
                "height": "100vh",
            },

            [theme.breakpoints.only("mobile")]: {
                "display": "block",
                "height": "unset",
            },
        },
        "left": {
            "width": "75%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": "70%",
            },

            [theme.breakpoints.only("mobile")]: {
                "width": "unset",
                "height": theme.spacing(40),
            },
        },
        "right": {
            "flex": "1",
        },
    }));
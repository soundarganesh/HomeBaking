import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Home from "../Source/home.png";
import Logo from "../Source/hb.png";
import Baking from "../Source/baking.png"
import "./index.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        alignItems: "flex-end",
    },
    menu: {
        flexBasis: "51%",
        backgroundColor: "white",
        textAlign: "end",

    },
    menuImg: {
        animation: "2s ease-out 0s 1 slideInFromTop",
        height: "5vh",
        width: "13vh",
    },
    logo: {
        flexBasis: "8%",
        height: "12vh",
        width: "12vh",
        textAlign: "center",

    },
    logoImage: {
        animation: "fadeInAnimation ease 10s",
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain"
    },
    socialMedia: {
        flexBasis: "51%",
    }
  }));

export function HeaderComponent() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.menu}>
                <img src={Home}  className={classes.menuImg} alt=""></img>
            </div>
            <div className={classes.logo}>
                <img src={Logo} className={classes.logoImage} alt="" ></img>
            </div>
            <div className={classes.socialMedia}>
                <img src={Baking}  className={classes.menuImg} alt=""></img>
            </div>
        </div>
    );
}
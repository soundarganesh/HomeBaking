import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Cake from "../Source/cake2.png";
import Smoke from "../Source/smoke.gif";
import "./index.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        textAlign: "center",
        alignItems: "center"
    },
    pic: {
        flexBasis: "50%",
    },
    picImage: {
        animation: "2s ease-in 0s 1 slideInFromLeft",
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain"
    },
    content: {
        flexBasis: "50%",
    },
    contentHeader: {
        animation: "fadeInAnimation ease 10s",
        height: "100%",
        width: "100%",
        fontFamily: "Adine Kirnberg",
        fontSize: "30vh",
        color: "#E9B001",
        textAlign: "start"
    },
    contentCakes: {
        animation: "fadeInAnimation ease 10s",
        fontFamily: "Courier New, monospace",
        fontWeight: "bold",
        color: "black"
    },
    contentLaunching: {
        fontFamily: "Adine Kirnberg",
        fontSize: "10vh",
        color: "#8D6E63",
        textAlign: "start"
    },
    smokeStyle: {
        height: "12vh",
        width: "14vh",
    },
  }));

export function Maincomponent() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.pic}>
                <img src={Cake} className={classes.picImage} alt=""></img>
            </div>
            <div className={classes.content}> 
                <div className={classes.contentHeader}>Delicious</div>
                <div className={classes.contentCakes}>- CAKES FOR YOU</div><br></br><br></br><br></br><br></br>
                <div className={classes.contentLaunching}>
                    Baking in Progress 
                    <img src={Smoke} className={classes.smokeStyle} alt=""></img></div>
            </div>
        </div>
    );
}
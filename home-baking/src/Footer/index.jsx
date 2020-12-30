import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import YouTube from "../Source/youtube.svg";
import Instagram from "../Source/insta.svg";
import Facebook from "../Source/fb.svg";
import "./index.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    socialIcons: {
        animation: "2s ease-in 0s 1 slideInFromBottom",
        cursor: "pointer",
        height: "3vh",
        width: "6vh",
    }
  }));

export function FooterComponent() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={Instagram} alt="" className={classes.socialIcons} onClick={() => window.open("https://instagram.com/homebaking.deeps?igshid=kbxw38iyqfp3")}></img>
            <img src={YouTube} alt="" className={classes.socialIcons} onClick={() => window.open("https://www.youtube.com/channel/UCxUYKpLdcWdoYxdjaQEM8vw/videos")}></img>
            <img src={Facebook} alt="" className={classes.socialIcons} onClick={() => window.open("https://www.facebook.com/home.baking.7355")}></img>
        </div>
    
    );
}
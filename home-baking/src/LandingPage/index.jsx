import React from "react";
import { HeaderComponent } from "../Header";
import { Maincomponent } from "../Main";
import { makeStyles } from '@material-ui/core/styles';
import { FooterComponent } from '../Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    header: {
        flexBasis: "15%",
        backgroundColor: "white",
        marginLeft: "7%",
        marginRight: "7%",
        borderBottom: "1px solid #D6DBDF"
    },
    body: {
        flexBasis: "78%",
        marginLeft: "7%",
        marginRight: "7%",
        backgroundColor: "#F4F4F4",
        // backgroundImage: `url(${CakeBg})`,
        // backgroundSize: "cover"
    },
    footer: {
        flexBasis: "7%",
        backgroundColor: "white",
        marginLeft: "5%",
        marginRight: "5%",
        // borderTop: "1px solid #D6DBDF"
    }
  }));

export function LandingPageComponent() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <div className={classes.header}><HeaderComponent /></div>
            <div className={classes.body}><Maincomponent /></div>
            <div className={classes.footer}><FooterComponent /></div>
        </div>
    )
}
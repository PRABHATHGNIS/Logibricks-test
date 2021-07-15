import React from 'react';
import { Box, Button, Checkbox, Container, Icon, makeStyles } from '@material-ui/core';
import colorsConfig from '../../config/colors.config';
import { disatpchThemeBackgroundColor } from '../../redux/dispatcher/app-theme.dispatcher';
const useStyles = makeStyles((theme) => ({
    pureBlack: {
        color: "white",
        background:colorsConfig.PURE_BLACK,
    },
    pureWhite: {
        color: "black",
        background:colorsConfig.PURE_WHITE ,
    },
    pureBlack50: {
        color: "black",
        background:colorsConfig.PURE_BLACK_TRANSPARENT,
    },
    DarkGrey: {
        color: "black",
        background: colorsConfig.DARK_GREY,
    },
    grey: {
        color: "black",
        background: colorsConfig.GREY,
    },
    lightbackgroundgrey: {
        color: "black",
        background:colorsConfig.LIGHT_BACKGROUND_GREY,
    },

    
}));
const BackgroundSwitch = (props) => {
    const onColorSwitch = (color) => disatpchThemeBackgroundColor(color);
    const styles = useStyles();
    return (
        <div>
            <div className={'buttonContainer'}>
                <Button className={styles.pureBlack}
                    variant="contained"
                    onClick={() => onColorSwitch(colorsConfig.PURE_BLACK)} >
                    Pure Black
                </Button></div>

            <div className={'buttonContainer'}><Button variant="contained" onClick={() => onColorSwitch(colorsConfig.PURE_WHITE)} className={styles.pureWhite}>Pure White</Button></div>

            <div className={'buttonContainer'}>
                <Button  className={styles.pureBlack50}variant="contained" onClick={() => onColorSwitch(colorsConfig.PURE_BLACK_TRANSPARENT)} color="primary">Pure Back 50% Transparency</Button>
            
            
            </div>

            <div className={'buttonContainer'}>
                <Button className={styles.DarkGrey}variant="contained" onClick={() => onColorSwitch(colorsConfig.DARK_GREY)} color="primary">Dark Grey</Button></div>


            <div className={'buttonContainer'}><Button className={styles.grey} variant="contained" onClick={() => onColorSwitch(colorsConfig.GREY)} color="primary">Grey</Button></div>
            <div className={'buttonContainer'}><Button className={styles.lightbackgroundgrey}variant="contained" onClick={() => onColorSwitch(colorsConfig.LIGHT_BACKGROUND_GREY)} color="primary">Light Background Grey</Button></div>
        </div>
    )
};

export default BackgroundSwitch;
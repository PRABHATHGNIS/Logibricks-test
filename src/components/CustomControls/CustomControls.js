import React from 'react';
import { Box, Button, Checkbox, Container, Icon } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxPlusIcon from '@material-ui/icons/Add';
import CheckBoxRemoveIcon from '@material-ui/icons/Remove';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { connect } from 'react-redux';
const CustomControls = (props) => {
    return (
        <div fixed>
            <Box flexDirection="column">
                <div className={'buttonContainer'}><Button variant="contained" color="primary">Primary</Button></div>
                <div className={'buttonContainer'}><Button variant="outlined" color="primary">Primary</Button></div>
                <div className={'buttonContainer'}><Button color="primary">Primary</Button></div>
            </Box>
            <Box>
                <Checkbox
                    defaultChecked
                    color="primary"
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Checkbox
                    defaultChecked
                    color="primary"
                    checkedIcon={<CheckBoxRemoveIcon color="primary" fontSize="small" />}
                    icon={<RemoveOutlinedIcon color="primary" fontSize="small" />}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Checkbox
                    defaultChecked
                    color="primary"
                    checkedIcon={<CheckBoxPlusIcon fill fontSize="small" />}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Box>
        </div>
    )
};
export default CustomControls;
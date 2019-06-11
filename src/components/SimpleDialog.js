import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        top: 0,
        color: theme.palette.grey[500],
    },
});


function createMarkup(html) {
    return { __html: html };
};

function SimpleDialog(props) {
    const { selectedValue, open, classes, onClose } = props;
    return (
        <Dialog open={open} aria-labelledby="simple-dialog-title">
            <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <div style={{ height: 'auto', width: '560px', paddingTop: '50px' }} dangerouslySetInnerHTML={createMarkup(selectedValue)} />
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    selectedValue: PropTypes.string,
    classes: PropTypes.object
};

export default withStyles(styles)(SimpleDialog);
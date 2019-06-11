import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import SimpleDialog from './SimpleDialog';

const useStyles = makeStyles({
    wrapper: {
        background: 'rgba(38,50,56 ,1)',
        padding: '15px'
    },
    card: {
        maxWidth: '100%',
        height: 'auto',
        background: 'rgba(55,71,79 ,1)'
    },
    media: {
        height: 300,
    },
    highlightVideo: {
        height: 300,
    }
});

function Video(props) {
    const { videoList } = props;
    const classes = useStyles();
    const [video, setVideo] = useState('')
    const [open, setOpen] = useState(false);

    function handleClickOpen(videoUrl) {
        setOpen(true);
        setVideo(videoUrl);
    }

    function handleClose() {
        setOpen(false);
    };

    return (
        <div className={classes.wrapper}>
            <Typography gutterBottom variant="h1" align={'center'} component="h1" style={{ color: 'white', fontFamily: 'Fira Sans', fontSize: 42, padding: 20 }}>
                Recent Football Highlights
            </Typography>
            <Grid container spacing={3}>
                {videoList.map(video => (
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={video.thumbnail}
                                    title="Contemplative Reptile"
                                    onClick={() => handleClickOpen(video.embed)}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2" style={{ color: 'white', fontFamily: 'Fira Sans' }}>
                                        {video.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'white', fontFamily: 'Fira Sans' }}>
                                        {video.competition.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <SimpleDialog selectedValue={video} open={open} onClose={handleClose} />
        </div>
    );
}

Video.prototypes = {
    videoList: PropTypes.array
}

export default Video;

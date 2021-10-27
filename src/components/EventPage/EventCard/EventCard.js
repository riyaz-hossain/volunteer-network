import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        // boxShadow: "3px 0 5px 0   gray",
        borderRadius: 10,
    },
    media: {
        height: 225,
    },
    cardContent: {
        height: "85px"
    }
});

const EventCard = (props) => {


    const classes = useStyles();
    let { title, date } = props.eventsItem;

    return (
        <div className='col-md-4 mt-5'
        >

            <Card className={`${classes.root}`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='https://i.postimg.cc/BQ2JVMyd/21.png'
                        title={title}
                    />
                    <CardContent className={`${classes.cardContent} d-flex justify-content-center align-items-center`} style={{ textTransform: "capitalize" }} >
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                    </CardContent>
                    <div className="mb-3">
                    <button className="btn btn-danger">
                        Cancel
                    </button>
                    </div>
                </CardActionArea>
            </Card>


        </div>
    );
};

export default EventCard;
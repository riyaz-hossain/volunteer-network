import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


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


const CardDetails = (props) => {
    const { name, img, background } = props.data;
    const classes = useStyles();
    return (
        <div className="col-md-3 mb-5 col-sm-6 col-12">
            <Link to={`/volunteer/${name}`}>
                <div className="event-area">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img}
                                title={name}
                            />
                            <CardContent className={`${classes.cardContent} text-light d-flex justify-content-center align-items-center`} style={{ backgroundColor: `${background}`, textTransform:"capitalize" }} >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Link>
        </div>
    );
};

export default CardDetails;
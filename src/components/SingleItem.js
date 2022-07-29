import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { getImage } from '../utils/helpers';

const useStyles = makeStyles(() => ({

    card: {
        width: 300,
        height: 350,
        marginRight: 0,
    },
    img: {
        width: 250,
        height: 200,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 2,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis"
    },
    description: {
        fontSize: 14,
        marginTop: 4,
        marginBottom: 4,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis"
    }
}))

const SingleItem = ({ data, id }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>{data.title}</Typography>
                <Typography className={classes.description}>{data.description}</Typography>
                <CardMedia><img src={getImage(data)} className={classes.img} alt="img" /></CardMedia>
            </CardContent>
            <Button
                variant='outlined'
                onClick={() => history.push(`/articles/${id}`)}
            >
                READ FULL ARTICLE
            </Button>
        </Card>
    )
}

export default SingleItem;
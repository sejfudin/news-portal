import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImage, showDate } from '../utils/helpers';
import { clearNews } from '../redux/actions/newsActions';
import { useHistory } from 'react-router-dom';

import { Button, CardActions, Container } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
        marginTop: 15,
        alignContent: 'center',
    },
    desc: {
        marginBottom: 10,
    },
    img: {
        maxWidth: 800,
    },
    date: {
        margin: 2,
    },
    button: {
        marginBottom: 15,
        marginTop: -15,
        justifyContent: 'center'
    }
}))

const Details = ({ match }) => {
    const [details, setDetails] = useState({});
    const { news } = useSelector(state => state.news);
    const { id } = match.params;
    const article = news[id];

    const dispatch = useDispatch();
    const history = useHistory()
    const classes = useStyles()

    useEffect(() => {
        if (article) {
            setDetails(article)
        }
    }, [article])

    const handleButton = () => {
        dispatch(clearNews());
        history.goBack();
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h5'>{details?.source?.name}</Typography>
                    <Typography variant='h6'>{details?.author}</Typography>
                    <Typography variant='h4'>{details?.title}</Typography>
                    <Typography className={classes.desc}>{details?.description}</Typography>
                    <CardMedia><img src={getImage(details)} alt="img" className={classes.img} /></CardMedia>
                    <Typography className={classes.date}>{showDate(details?.publishedAt)}</Typography>
                    <CardContent variant='body'>{details?.content}</CardContent>
                </CardContent>
                <CardActions className={classes.button}>
                    <Button variant='outlined' onClick={handleButton}>Back to Home</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Details
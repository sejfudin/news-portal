import moment from 'moment';
import { DATE_FORMAT, NO_IMAGE_URL } from './constants';

export const showDate = (date) => {
    const formatDate = moment(date).format(DATE_FORMAT);
    return formatDate;
}

export const getImage = (item) => {
    const imageUrl = item.urlToImage ? item.urlToImage : NO_IMAGE_URL;
    return imageUrl;
}
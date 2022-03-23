import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { PropTypes } from '@material-ui/core';

interface Props {
    className: string;
    mediaClass: string;
    imageUrl: string;
    title: string;
    color: PropTypes.Color | 'textPrimary' | 'textSecondary' | 'error';
    description: string;
    contentClass: string;
}

/**
 * card is functional component that takes card as functional component data
 * @param props
 */
const card: React.FC<Props> = props => {
    return (
        <>
            <Card className={props.className}>
                <CardActionArea>
                    <CardMedia component='img' className={props.mediaClass} image={props.imageUrl} title={props.title} />
                    <CardContent className={props.contentClass}>
                        <Typography gutterBottom={true} variant='h5' component='h2'>
                            {props.title}
                        </Typography>
                        <Typography variant='body2' color={props.color} component='p'>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions classes={{
                        root: 'border-1px-s primary-color',
                        action: 'primary-color'
                    }}>
                    {props.children}
                </CardActions>

            </Card>
        </>
    );
};

export default card;

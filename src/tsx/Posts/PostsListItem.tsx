import React from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

import customStyles from '../MuiStyles';
import { IPost } from '../types';

const PostsListItem: React.FunctionComponent<IPost> = props => {
	const classes = customStyles();
	const [src, srcLoad] = React.useState('');
	const { path } = useRouteMatch();

	const date = React.useMemo(() => {
		let date = new Date(props.timestamp);
		let normolize = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		return normolize;
	}, [props.timestamp]);

	React.useEffect(() => {
		let loadTrigger = (event: any) => srcLoad(event.target.src);
		let img = document.createElement('img');
		img.src = props.image;
		img.addEventListener('load', loadTrigger, {once: true});
	}, []);

	return (
		<Card className={classes.cardList} data-id={props.id}>
			<CardMedia
				className={`${classes.cardMedia} ${classes.cardMediaList} ${(src != '') ? '' : 'loading'}`}
				image={src != '' ? src : '#'}
				title={props.title}
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5">{props.title}</Typography>
				<Typography variant="body1">{(props.timestamp > 0) ? date : '\xa0'}</Typography>
			</CardContent>
			<CardActions>
				{props.id > -1 ? (
					<Link className={classes.cardLink} to={{ pathname: `${path}/${props.id}` }}>
						<Button size="small" className={classes.cardButton}>Открыть</Button>
					</Link>
				) : (
						<Button size="small" className={classes.cardButton}>&nbsp;</Button>
					)
				}
			</CardActions>
		</Card>
	);
}
export default PostsListItem;
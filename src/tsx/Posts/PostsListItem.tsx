import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

import customStyles from '../MuiStyles';
import { IPost } from '../types';

const PostsListItem: React.FunctionComponent<IPost> = props => {
	const classes = customStyles();
	const isAuthorize = useSelector((state: any) => state.app.isAuthorize);
	const [src, srcLoad] = React.useState('');

	const date = React.useMemo(() => {
		let date = new Date(props.timestamp);
		let normolize = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
		return normolize;
	}, [props.timestamp]);

	React.useEffect(() => {
		let loadTrigger = (event: any) => srcLoad(event.target.src);
		let img = document.createElement('img');
		img.src = props.image;
		img.addEventListener('load', loadTrigger);

		return () => {
			img.removeEventListener('load', loadTrigger);
		}
	}, []);

	return (
		<Card className={classes.cardList} data-id={props.id}>
			<CardMedia
				className={src != '' ? classes.cardMedia : (classes.cardMedia + ' loading')}
				image={src != '' ? src : '#'}
				title={props.title}
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5">{props.title}</Typography>
				<Typography variant="body1">{(props.timestamp > 0) ? date : '\xa0'}</Typography>
			</CardContent>
			<CardActions>
				{isAuthorize &&
					props.id > -1 ? (
						<Button size="small" className={classes.cardButton}>Открыть</Button>
					) : (
						<Button size="small" className={classes.cardButton}>&nbsp;</Button>
					)
				}
			</CardActions>
		</Card>
	);
}
export default PostsListItem;
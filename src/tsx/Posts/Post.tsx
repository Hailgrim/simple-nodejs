import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import customStyles from '../MuiStyles';
import { getUser } from '../redux/actions';

const Post: React.FunctionComponent = (props: any) => {
	const classes = customStyles();
	const dispatch = useDispatch();
	const isAuthorize = useSelector((state: any) => state.app.isAuthorize);
	const [src, srcLoad] = React.useState('');
	const user = useSelector((state: any) => state.users.user);

	React.useEffect(() => {
		let loadTrigger = (event: any) => srcLoad(event.target.src);
		let img = document.createElement('img');
		img.src = props.user.avatar;
		img.addEventListener('load', loadTrigger);

		dispatch(getUser(location.search));

		return () => {
			img.removeEventListener('load', loadTrigger);
		}
	}, []);

	return (
		<Card data-id={props.user.id}>
			<CardMedia
				className={src != '' ? classes.cardMedia : (classes.cardMedia + ' loading')}
				image={src != '' ? src : '#'}
				title={props.user.first_name + ' ' + props.user.last_name}
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h4">{props.user.first_name + ' ' + props.user.last_name}</Typography>
				<Typography gutterBottom variant="h5">{props.user.email}</Typography>
				<Typography gutterBottom variant="body1">{props.user.email}</Typography>
			</CardContent>
			<CardActions>
				{isAuthorize &&
					props.user.id != 0 ? (
						<Button size="small" className={classes.cardButton}>Изменить</Button>
					) : (
						<Button size="small" className={classes.cardButton}>&nbsp;</Button>
					)
				}
			</CardActions>
		</Card>
	);
}
export default Post;
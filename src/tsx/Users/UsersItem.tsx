import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

import customStyles from '../MUIStyles';
import { IUser } from '../types';

export default function Users(props: any) {
	const classes = customStyles();
	const dispatch = useDispatch();
	const isAuthorize = useSelector((state: any) => state.app.isAuthorize);
	const [src, srcLoad] = React.useState('');

	React.useEffect(() => {
		let loadTrigger = (event: any) => srcLoad(event.target.src);
		let img = document.createElement('img');
		img.src = props.user.avatar;
		img.addEventListener('load', loadTrigger);

		return () => {
			img.removeEventListener('load', loadTrigger);
		}
	}, []);

	return (
		<React.Fragment>
			<Card className={classes.card} data-id={props.user.id}>
				<CardMedia
					className={src != '' ? classes.cardMedia : (classes.cardMedia + ' loading')}
					image={src != '' ? src : '#'}
					title={props.user.first_name + ' ' + props.user.last_name}
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">{props.user.first_name + ' ' + props.user.last_name}</Typography>
					<Typography>{props.user.email}</Typography>
				</CardContent>
				<CardActions>
					{isAuthorize &&
						props.user.id != 0 ? (
							<React.Fragment>
								<Button size="small" className={classes.cardButton}>Открыть</Button>
								<Button size="small" className={classes.cardButton}>Изменить</Button>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Button size="small" className={classes.cardButton}>&nbsp;</Button>
								<Button size="small" className={classes.cardButton}>&nbsp;</Button>
							</React.Fragment>
						)
					}
				</CardActions>
			</Card>
		</React.Fragment>
	);
}
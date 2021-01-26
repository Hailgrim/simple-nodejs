import { IUser } from './../typescript';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, hideLoader } from '../redux/actions';

import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import customStyles from '../MUIStyles';

import NewUser from './NewUser';

export default function Users() {
	const classes = customStyles();
	const dispatch = useDispatch();
	const isAuthorize = useSelector((state: any) => state.app.isAuthorize);
	const users = useSelector((state: any) => state.users.list);

	React.useEffect(() => {
		dispatch(getUsers());

		return () => {
			dispatch(hideLoader());
		}
	}, []);

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h1" className={classes.h1} color="inherit" gutterBottom>Пользователи</Typography>
			<Grid container spacing={4}>
				{users.map((item: IUser) =>
					<Grid item key={item.id} xs={12} sm={6} md={4}>
						<Card className={classes.card} data-id={item.id}>
							<CardMedia
								className={classes.cardMedia}
								image={item.avatar}
								title={item.first_name + ' ' + item.last_name}
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5" component="h2">{item.first_name + ' ' + item.last_name}</Typography>
								<Typography>{item.email}</Typography>
							</CardContent>
							<CardActions>
								{isAuthorize &&
									item.id != 0 ? (
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
					</Grid>
				)}
				<Grid item xs={12}>
					<NewUser />
				</Grid>
			</Grid>
		</Container>
	);
}
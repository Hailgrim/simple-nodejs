import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@material-ui/core';

import { getUsers, hideLoader } from '../redux/actions';
import customStyles from '../MUIStyles';
import { IUser } from '../types';
import NewUser from './NewUser';
import UsersItem from './UsersItem';
import UsersPagination from './UsersPagination';

export default function Users() {
	const classes = customStyles();
	const dispatch = useDispatch();
	const list = useSelector((state: any) => state.users.list);
	const page = useSelector((state: any) => state.users.page);
	const total_pages = useSelector((state: any) => state.users.total_pages);

	React.useEffect(() => {
		dispatch(getUsers(location.search));

		return () => {
			dispatch(hideLoader());
		}
	}, []);

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h1" className={classes.h1} color="inherit" gutterBottom>Пользователи</Typography>
			<Grid container spacing={4}>
				{list.map((usersItem: any) =>
					<Grid item key={usersItem.id} xs={12} sm={6} md={4}>
						<UsersItem user={usersItem} />
					</Grid>
				)}
				<Grid item xs={8}>
					<NewUser />
				</Grid>
				<Grid item xs={4}>
					<UsersPagination page={page} total_pages={total_pages} />
				</Grid>
			</Grid>
		</Container>
	);
}
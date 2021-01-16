import React from 'react';

import {
	Container,
	Typography,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button
} from '@material-ui/core';
import customStyles from './../CustomStyles';

interface IUser {
	id: number;
	avatar: string;
	email: string;
	first_name: string;
	last_name: string;
}

export default function Users(props: any) {
	const classes = customStyles();
	const [usersList, updateUsers] = React.useState<IUser[]>([]);

	if (usersList.length == 0) {
		for (let i = 0; i < 6; i++) {
			usersList.push({
				id: 0,
				avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNITEz8DwAEbQIj5vmLagAAAABJRU5ErkJggg==',
				email: '\xa0',
				first_name: '\xa0',
				last_name: '\xa0'
			});
		}
	}

	React.useEffect(() => {

		fetch('https://reqres.in/api/users')
			.then(response => response.json())
			.then(result => {
				let tmpUsers: IUser[] = [];
				result?.data?.forEach((item: IUser) => {
					tmpUsers.push(item);
				});
				updateUsers(() => {
					usersList.length = 0;
					return usersList.concat(tmpUsers);
				});
			});

	}, []);

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h1" className={classes.h1} color="inherit" gutterBottom>Пользователи</Typography>
			<Grid container spacing={4}>
				{usersList.map((item: IUser, index) =>
					<Grid item key={index} xs={12} sm={6} md={4}>
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
								{props.auth.isAuthorize &&
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
			</Grid>
		</Container>
	);
}
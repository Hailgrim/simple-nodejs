import React, {
	useState
} from 'react';

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

export default function Users() {
	const [usersList, updateUsers] = useState<IUser[]>([]);
	const classes = customStyles();

	React.useEffect(() => {

		fetch('https://reqres.in/api/users')
			.then(response => response.json())
			.then(result => {
				let tmpUsers: IUser[] = [];
				result?.data?.forEach((item: IUser) => {
					tmpUsers.push(item);
				});
				updateUsers(usersList.concat(tmpUsers));
			});

	}, []);

	return (
		<React.Fragment>
			<Container className={classes.cardGrid} maxWidth="md">
				<Typography variant="h1" color="inherit" gutterBottom>
					Users
				</Typography>
				<Grid container spacing={4}>
					{usersList.map((item: IUser, index) => {
						return (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card className={classes.card} test-prop={item.id}>
									<CardMedia
										className={classes.cardMedia}
										image={item.avatar}
										title={item.first_name + ' ' + item.last_name}
									/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant="h5" component="h2">
											{item.first_name + ' ' + item.last_name}
										</Typography>
										<Typography>
											{item.email}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">
											View
										</Button>
										<Button size="small">
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
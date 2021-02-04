import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@material-ui/core';

import { getPosts, hideLoader } from '../redux/actions';
import customStyles from '../MuiStyles';
import { IPost } from '../types';
import PostsListItem from './PostsListItem';
import PostsPagination from './PostsPagination';

export default function Posts() {
	const classes = customStyles();
	const dispatch = useDispatch();
	const list = useSelector((state: any) => state.posts.list);
	const page = useSelector((state: any) => state.posts.page);
	const total_pages = useSelector((state: any) => state.posts.total_pages);

	React.useEffect(() => {
		dispatch(getPosts(location.search));
		let handlePopstateTrigger = (event: any) => {
			dispatch(getPosts(location.search));
		}
		window.addEventListener('popstate', handlePopstateTrigger);

		return () => {
			dispatch(hideLoader());
			window.removeEventListener('popstate', handlePopstateTrigger);
		}
	}, []);

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h3" component="h1" className={classes.h1} color="inherit" gutterBottom>Статьи</Typography>
			<Grid container spacing={4}>
				{list.map((post: IPost) =>
					<Grid item key={post.id} xs={12} sm={6} md={4}>
						<PostsListItem {...post} />
					</Grid>
				)}
				<Grid item xs={12}>
					<PostsPagination page={page} total_pages={total_pages} />
				</Grid>
			</Grid>
		</Container>
	);
}
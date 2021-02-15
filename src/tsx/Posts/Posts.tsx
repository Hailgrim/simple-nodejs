import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import { clearPosts, getPosts } from '../redux/actions';
import customStyles from '../MuiStyles';
import { IPost } from '../types';
import PostsListItem from './PostsListItem';
import PostsPagination from './PostsPagination';
import Alert from '../Parts/Alert';

const Posts: React.FunctionComponent = () => {
	const classes = customStyles();
	const dispatch = useDispatch();
	const list = useSelector((state: any) => state.posts.list);
	const page = useSelector((state: any) => state.posts.page);
	const total_pages = useSelector((state: any) => state.posts.total_pages);
	const listError = useSelector((state: any) => state.posts.listError);
	const query = useLocation().search;

	React.useEffect(() => {
		dispatch(getPosts(query));
	}, [query]);

	React.useEffect(() => {
		dispatch(clearPosts());
	}, []);

	return (
		<Container className={classes.container} maxWidth="md">
			<Typography variant="h3" component="h1" className={classes.h1} color="inherit" gutterBottom>Статьи</Typography>
			<Grid container spacing={4}>
				{listError &&
					<Grid item xs={12}>
						<Alert content={listError} />
					</Grid>
				}
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
export default Posts;
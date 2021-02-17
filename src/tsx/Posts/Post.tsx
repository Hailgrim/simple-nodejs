import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import customStyles from '../MuiStyles';
import { clearPost, getPost } from '../redux/actions';
import { IPost, PostRouterParams, rootReducerContainer } from '../types';
import Alert from '../Parts/Alert';

const Post: React.FunctionComponent = () => {
	const classes = customStyles();
	const dispatch = useDispatch();
	const [src, srcLoad] = React.useState('');
	const post = useSelector<rootReducerContainer, IPost>((state) => state.posts.post);
	const postError = useSelector<rootReducerContainer, string | boolean>((state) => state.posts.postError);
	const { id } = useParams() as PostRouterParams;

	const date = React.useMemo(() => {
		let date = new Date(post.timestamp);
		let normolize = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		return normolize;
	}, [post.timestamp]);

	React.useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(getPost(id));

		return () => {
			dispatch(clearPost());
		};
	}, []);

	React.useEffect(() => {
		if (post.image != '') {
			let loadTrigger = (event: any) => srcLoad(event.target.src);
			let img = document.createElement('img');
			img.src = post.image;
			img.addEventListener('load', loadTrigger, { once: true });
		}
	}, [post.image]);

	return (

		<Container className={classes.container} maxWidth="md">
			{postError ? (
				<Alert content={postError} />
			) : (
					<Typography variant="h3" component="h1" className={classes.h1} color="inherit" gutterBottom>{post.title}</Typography>
				)
			}
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Card data-id={post.id}>
						<CardMedia
							className={`${classes.cardMedia} ${classes.cardMediaSolo} ${(src != '') ? '' : 'loading'}`}
							image={src != '' ? src : '#'}
							title={post.title}
						/>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant="body2">{(post.timestamp > 0) ? date : '\xa0'}</Typography>
							<Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.text }} />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>

	);
}
export default Post;
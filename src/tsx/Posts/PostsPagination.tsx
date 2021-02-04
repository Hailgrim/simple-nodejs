import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../redux/actions';
import { swapGetParam } from '../functions';

interface PostsPaginationProps {
	page: number,
	total_pages: number
}

const PostsPagination: React.FunctionComponent<PostsPaginationProps> = props => {
	const dispatch = useDispatch();

	const handlePageChange = (event: React.SyntheticEvent<HTMLDivElement>) => {
		dispatch(getPosts(swapGetParam(location.search, 'page', event.currentTarget.dataset.page!.toString())));
	}

	return (
		<Box textAlign="center">
			{[...new Array(props.total_pages)].map((_, key) =>
				<Link to={'/posts' + swapGetParam(location.search, 'page', (key + 1).toString())} key={key}>
					{props.page == (key + 1) ? (
						<Button component="div" size="small" variant="outlined" disabled>{key + 1}</Button>
					) : (
							<Button component="div" size="small" variant="outlined" data-page={key + 1} onClick={handlePageChange}>{key + 1}</Button>
						)}
				</Link>
			)}
		</Box>
	);
}
export default PostsPagination;
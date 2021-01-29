import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsers } from '../redux/actions';

function swapGetParam(query: string, param: string, value: string): string {
	let getParams = new Map();
	let result = '';
	query.substr(1).split('&').forEach((item) => {
		if (item == '') return;
		let tmp = item.split('=');
		if (tmp[0] == param) {
			getParams.set(tmp[0], value);
		} else {
			getParams.set(tmp[0], tmp[1]);
		}
	});
	if (!getParams.has(param)) getParams.set(param, value);
	for (let item of getParams) {
		if (item[1]) {
			result += '&' + item[0] + '=' + item[1];
		} else {
			result += '&' + item[0];
		}
	}
	if (result.length > 0) result = result.replace('&', '?');
	return result;
}

export default function UsersPagination(props: any) {
	const dispatch = useDispatch();

	const handlePageChange = (event: any, page: number) => {
		dispatch(getUsers(swapGetParam(location.search, 'page', page.toString())));
	}

	return (
		<Box textAlign="right">
			{[... new Array(props.total_pages)].map((item, key) =>
				<Link to={'/users' + swapGetParam(location.search, 'page', (key + 1).toString())} key={key}>
					{props.page == (key + 1) ? (
						<Button component="div" variant="outlined" disabled onClick={(event: any) => { handlePageChange(event, key + 1) }}>{key + 1}</Button>
					) : (
							<Button component="div" variant="outlined" onClick={(event: any) => { handlePageChange(event, key + 1) }}>{key + 1}</Button>
						)}
				</Link>
			)}
		</Box>
	);
}
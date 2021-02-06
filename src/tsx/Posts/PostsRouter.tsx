import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Posts from './Posts';
import Post from './Post';

const PostsRouter: React.FunctionComponent = () => {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={path}>
				<Posts />
			</Route>
			<Route path={`${path}/:id`}>
				<Post />
			</Route>
		</Switch>
	);
}
export default PostsRouter;
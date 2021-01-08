import React, {
	useState
} from 'react';

interface IUser {
	id: number;
	avatar: string;
	email: string;
	first_name: string;
	last_name: string;
}

export default function Users() {
	const [usersList, updateUsers] = useState<IUser[]>([]);
	const usersDOM = [];

	console.log(usersList);

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
		<>
			Users
			{usersList.map((item: IUser) => {
				return (
					<div>{item.first_name} {item.last_name}</div>
				);
			})}
		</>
	);
}
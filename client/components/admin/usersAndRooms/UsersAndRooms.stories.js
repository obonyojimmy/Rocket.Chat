import React from 'react';

import { UsersAndRooms } from '.';

export default {
	title: 'admin/settings/GroupPage',
	component: UsersAndRooms,
	// decorators: [
	// 	(storyFn) => <SettingsState>
	// 		{storyFn()}
	// 	</SettingsState>,
	// ],
};

export const _default = () =>
	<UsersAndRooms />;

// export const withGroup = () =>
// 	<UsersAndRooms
// 		_id='General'
// 		i18nLabel='General'
// 	/>;

// export const skeleton = () =>
// 	<UsersAndRooms.Skeleton />;

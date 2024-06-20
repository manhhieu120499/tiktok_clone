// Layout
import { HeaderOnly } from '~/layouts';

// Routes config
import config from '~/config';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';
import LivePage from '~/pages/Live';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: FollowingPage },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.upload, component: UploadPage, layout: HeaderOnly },
    { path: config.routes.live, component: LivePage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

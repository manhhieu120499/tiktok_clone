// Layout
import { HeaderOnly } from '~/components/Layout';

// Routes config
import routesConfig from '~/config/routes';

import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import UploadPage from '~/pages/Upload';

//Public routes
const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.profile, component: ProfilePage },
    { path: routesConfig.upload, component: UploadPage, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

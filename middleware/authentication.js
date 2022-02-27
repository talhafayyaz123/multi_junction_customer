export default function ({ route, redirect, $auth }) {

    if (!$auth.loggedIn) {
        if (route.path !== '/account/login' && route.path !== '/account/register'
            && route.path !== '/account/reset' && route.path !== '/account/forgot-password'
            && route.path !== '/email/verify'
            // && !route.query.hasOwnProperty('expires')
            // && !route.query.hasOwnProperty('signature')

        ) {
            return redirect('/account/login');
        }
    }
}

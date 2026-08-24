import { redirect } from '@sveltejs/kit';
import {sessions} from '$lib/server/session'

// check if user is logged in via cookie, if not send back to login.
export const load = async ({cookies}) => {
    const sessionToken = cookies.get('adminSession');

    if (!sessionToken || typeof sessions[sessionToken] === "undefined" || Date.now() >= sessions[sessionToken].getTime()) {
        throw redirect(302, '/login');
    }
    return {};
}
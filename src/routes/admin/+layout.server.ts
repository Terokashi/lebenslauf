import { redirect } from '@sveltejs/kit';
import {sessions} from '$lib/server/session'

export const load = async ({cookies}) => {
    const sessionToken = cookies.get('adminSession');

    if (!sessionToken || Date.now() >= sessions[sessionToken].getTime()) {
        throw redirect(302, '/login');
    }
    return {};
}
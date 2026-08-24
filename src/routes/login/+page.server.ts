import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import {compare} from 'bcrypt';
import crypto from 'crypto';
import {sessions, cleanupSessions} from '$lib/server/session';
import { env } from '$env/dynamic/private';

export const actions: Actions = {
    // login function
    login: async ({ request, cookies }) =>{
        // console.log(env.ADMIN_PASSWORD_HASH);
        
        const data = request.formData(); // gets the password that was input
        const password = (await data).get('password');
        
        if (!env.ADMIN_PASSWORD_HASH ) {
            throw new Error('env.ADMIN_PASSWORD_HASH is not set in environment');
        }

        if (!password || typeof password !== "string") {
            throw new Error('Invalid password');
        }
       
        /*
        console.log('Password from form:', JSON.stringify(password));
        console.log('Hash from env:', JSON.stringify(env.ADMIN_PASSWORD_HASH)); // oder process.env.env.ADMIN_PASSWORD_HASH, je nachdem was du nutzt
        */
        // is password correct? If yes cleanup!
        if ((await compare(password, env.ADMIN_PASSWORD_HASH ))) {
            cleanupSessions();
            const sessionToken = crypto.randomBytes(32).toString('hex');

            sessions[sessionToken] = new Date(Date.now() + 3600000); // cookie valid one hour
            const cookie = {
                path: '/',
                httpOnly: true
            };
            cookies.set('adminSession', sessionToken, cookie)
            throw redirect(302, '/admin') // password was correct, cookie for 1 hour access is set, send user to admin dashboard
            
        } else {
            return { status: 401, body: {message: 'Invalid password'}}; // nothing happens besides invalid password message displayed
        }
    }
};
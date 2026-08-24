import type { Actions } from './$types';

export const actions: Actions = {
    saveContact: async ({request}) =>{
        const data = await request.formData();
        
        const name = data.get('name');
        const email = data.get('email');

        // check name and email if actually set and proper type
        if (!name || typeof name !== "string"){
            return { success: false, message: 'Please input name'};
        }
        if (!email || typeof email !== "string"){
            return { success: false, message: 'Please input email'};
        }
        
        // construct contactData and try to post it via hono API
        const contactData = {name, email}
        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactData)
            });
            if (response.ok) {
                return{ success: true, message: 'Contact saved successfully' };
            } else {
                return { success: false, message: 'Error saving contact' };
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: 'An error occured while saving the contact' };
        }
    }
}
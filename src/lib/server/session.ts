type Sessions = {[key: string]: Date};

export const sessions: Sessions = {};

// cleanup cookies if old cookies exist
// called on every successfull login attempt
export function cleanupSessions() {
    for (const token in sessions) {
        if (Date.now() >= sessions[token].getTime()) {
            delete sessions[token];
        }
    }
}
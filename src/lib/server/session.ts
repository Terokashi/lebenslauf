type Sessions = {[key: string]: Date};

export const sessions: Sessions = {};

export function cleanupSessions() {
    for (const token in sessions) {
        if (Date.now() >= sessions[token].getTime()) {
            delete sessions[token];
        }
    }
}
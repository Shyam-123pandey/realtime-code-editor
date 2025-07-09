import { io } from 'socket.io-client';
const backend_url = 'http://localhost:5000';
export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    return io(backend_url, options);
};

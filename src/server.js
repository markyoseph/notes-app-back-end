const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        //Untuk CORS pada webserver (Cross-Origin resource sharing)
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    //Ini mengacu ke routes.js
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();
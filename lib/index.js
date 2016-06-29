// const internals = {};

exports.register = function(server, options, next){

    const path = options.path || '/process-info';
    server.route({
        path: path,
        method: 'GET',
        config: {
        },
        handler: function(request, reply) {

            return reply({
                platform: process.platform,
                arch: process.arch,
                version: process.version,
                pid: process.pid,
                title: process.title,
                memoryUsage: process.memoryUsage()
            });
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'hapi-process-info'
};

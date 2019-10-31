// Some key features of PM2 are -
// 1). automatic application load balancing,
// 2). declarative application configuration,
// 3). deployment system and monitoring.
// 4). does net let your app to crash.

/**
 *
 * Cluster mode allows networked Node.js applications (http(s)/tcp/udp server) to be scaled accross all CPUs available,
 * without any code modifications. This greatly increases the performance and reliability of your applications,
 * depending on the number of CPUs available.
 * Under the hood, this uses the Node.js cluster module such that the scaled application’s child processes
 * can automatically share server ports.
 *
 *
 * pm2 start app.js -i max
 * max means that PM2 will auto detect the number of available CPUs and run as many processes as possible
 *
 * To start server with 3 processes - pm2 start index.js -i 3
 * To see list - pm2 list
 * To see logs - pm2 logs
 * To kill Node server - pm2 delete all
 *
 *
 * A Node.js application runs on a single thread.
 * On multicore machines that means that the load isn’t distributed over all cores.
 * Using the cluster module that comes with Node it’s easy to spawn a child process per CPU.
 * Each child process maintains its own event loop and the master process transparently distributes the load between all childs.
 *
 * ** */

/***
 *
 * Nginx, pronounced like “engine - ex”, is an open - source web server that,
 * since its initial success as a web server, is now also used as a reverse proxy, HTTP cache, and load balancer.
 *
 * In computer networks, a reverse proxy is a type of proxy server that retrieves resources on behalf
 * of a client from one or more servers. These resources are then returned to the client,
 * appearing as if they originated from the proxy server itself.
 *
 * A proxy server is a go‑between or intermediary server that forwards requests for
 * content from multiple clients to different servers across the Internet.
 * A reverse proxy protects web servers from attacks and can provide performance and reliability benefits.
 *
 * How Does Nginx Work?
 * Nginx is built to offer low memory usage and high concurrency.
 * Rather than creating new processes for each web request, Nginx uses an asynchronous,
 * event-driven approach where requests are handled in a single thread.
 * With Nginx, one master process can control multiple worker processes.
 * The master maintains the worker processes, while the workers do the actual processing.
 * Because Nginx is asynchronous, each request can be executed by the worker concurrently without blocking other requests.
 * Some common features seen in Nginx include:
 * Reverse proxy with caching
 * IPv6
 * Load balancing
 * FastCGI support with caching
 * WebSockets
 * Handling of static files, index files, and auto-indexing
 * TLS/SSL with SNI
 *
 * Security
 * Limiting number of connections
 * Limiting the request rate
 *
 * ** */

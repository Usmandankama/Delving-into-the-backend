const server = Bun.serve({
    port: process.env.PORT || 3000,
    fetch(request) {
        return new Response("Hello, The name is Usman!");
    }
});

console.log(`Server running at http://localhost:${server.port}/`);
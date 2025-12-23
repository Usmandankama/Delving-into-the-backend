import figlet from "figlet";
import index from "./index.html";

const server = Bun.serve({
    port: process.env.PORT || 3000,
    routes:{
        "/": index,
        "/figlet": () => {
            const body = figlet.textSync('My name is Usman!');
            return new Response(body);  
        }
    },
    fetch(request) {
        return new Response("Hello, The name is Usman!");
    },
});

console.log(`Server running at http://localhost:${server.port}/`);
const server = Bun.serve({
    port: 3000,
    fetch(req){
        if(req.method === 'POST '){
            return req.json().then(data => {
                return new Response( JSON.stringify(data))
            })
        }

        return new Response('Hello backend')
    }
})


console.log(`🚀 Server running on http://localhost:${server.port}`);
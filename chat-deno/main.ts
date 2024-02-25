import { Application, Router } from "https://deno.land/x/oak@v13.2.5/mod.ts";

const connectedUsers = new Map();

const app = new Application();
const port = 3001;
const router = new Router();

// send a message to all connected clients
function broadcast(message: string) {
    for (const client of connectedUsers.values()) {
        client.send(message);
    }
}

// send updated users list to all connected clients
function broadcast_usernames() {
    const usernames = [...connectedUsers.keys()];
    console.log(
        "Sending updated username list to all clients: " + JSON.stringify(usernames)
    );
    broadcast(
        JSON.stringify({
            event: "update-users",
            usernames: usernames,
        })
    );
}

router.get("/start_web_socket", (ctx) => {
    const socket = ctx.upgrade();
    const username = ctx.request.url.searchParams.get("username");
    if (connectedUsers.has(username)) {
        socket.close(1008, `Username ${username} is already taken`);
        return;
    }
    
    connectedUsers.set(username, socket);
    console.log(`New user connected: ${username}`);

    // broadcast the active users list when a new user logs in
    socket.onopen = () => {
        broadcast_usernames();
    };

    // when a client disconnects, remove them from the connected clients list
    // and broadcast the active users list
    socket.onclose = () => {
        console.log(`User ${username} disconnected`);
        connectedUsers.delete(username);
        broadcast_usernames();
    };

    // broadcast new message if someone sent one
    socket.onmessage = (m) => {
        const data = JSON.parse(m.data);
        switch (data.event) {
            case "send-message":
                broadcast(
                    JSON.stringify({
                        event: "send-message",
                        username: username,
                        message: data.message,
                    })
                );
                break;
        }
    };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
    await context.send({
        root: `${Deno.cwd()}/`,
        index: "public/index.html",
    });
});

console.log("Listening at http://localhost:" + port);
await app.listen({ port });
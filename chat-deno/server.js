import {listenAndServe} from 'https://deno.land/std@0.58.0/http/server.ts'
import * as ws from 'https://deno.land/std@0.58.0/ws/mod.ts'
import chat from './chat.js'

const PORT = 3000

listenAndServe({port: PORT}, async (req)=>{
    if(req.method == 'GET' && req.url == '/ws'){
        if(ws.acceptable(req)){
            ws.acceptWebSocket({
                conn: req.conn,
                bufReader: req.r,
                bufWriter: req.w,
                headers: req.headers
            }).then(chat)
            console.log(req.method)
        }
    }
})

console.log(`server started on port ${PORT}`)
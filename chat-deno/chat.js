import * as ws from 'https://deno.land/std@0.58.0/ws/mod.ts'
import * as uuid from 'https://deno.land/std@0.58.0/uuid/mod.ts'

const usersMap = new Map()
const groupMap = new Map()
const messageMap = new Map()

export default async function chat(ws){
    const userId = uuid.v4.generate()

    console.log(userId)
}
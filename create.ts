import { ENV, KY } from "../deps.ts"
import { GlobalApplicationCommand } from "../@types/index.d.ts"

const BOT_TOKEN = "OTg1ODM5ODg5NTI0MzQ2ODkw.G7Jh0Z.l_AoYR9ZGGoQaAqVd5DxtRyEARbpDhjKqfaQao"
const Application_ID = "985839889524346890"

const url = `https://discord.com/api/v10/applications/${Application_ID}/commands`;

const headers = {
    Authorization: `Bot ${BOT_TOKEN}`
}

const body:GlobalApplicationCommand = {
    name: "omikuji",
    description: "omikuji",
}

try {
    await KY.post(url, {headers:headers, json: body }).json()
} catch (e) {
    console.log("error");
    console.error(e)
    Deno.exit()
}

console.log("success");
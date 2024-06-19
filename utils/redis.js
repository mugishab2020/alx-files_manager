import { createClient } from "redis";
import {promisify} from 'util';


class RedisClient{
    constructor(){
        this.client = createClient();
        this.client.on("error", (error) => {
            console.log(`Not connected to teh server: ${error}`);
        });

    }
    isAlive() {
        if(this.client.connected) {
            return true;
        } else {
            return false;
        }
    }
    async set(key, value, duration){
        const redisSetex = promisify(this.client.setex).bind(this.client);
        await redisSetex(key, duration, value);
    }
    async get(key) {
        const redisGet = promisify(this.client.get).bind(this.client);
        const value = await redisGet(key);
        return value;

    }
    async del(key) {
        const redisDel = promisify(this.client.del).bind(this.client);
        await redisDel(key);
    }
}
const redisClient = new RedisClient;

module.exports = redisClient;
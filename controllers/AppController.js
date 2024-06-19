import redisClient from "../utils/redis";
import dbClient from "../utils/db";

class AppController{
    static getStatus(req, res){
        const redis_status = redisClient.isAlive();
        const db_status = dbClient.isAlive();
        res.status(200).send({ redis: redis_status, db: db_status });
    }
    
    static getStats(req, res){
        const nbUsers = dbClient.nbUsers();
        const nbFiles = dbClient.nbFiles();
        res.status(200).send({ users: nbUsers, files: nbFiles });
    }
}

export default AppController;
// utils/db.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

class DBClient {
    constructor() {
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';
        const url = `mongodb://${host}:${port}`;

        this.client = new MongoClient(url, { useUnifiedTopology: true });

        this.client.connect()
            .then(() => {
                this.db = this.client.db(database);
                console.log('Connected to MongoDB');
            })
            .catch((err) => {
                console.error('Connection failed', err);
            });
    }

    isAlive() {
        return this.client && this.client.isConnected();;
    }

    async nbUsers() {
        try {
            const usersCollection = this.db.collection('users').countDocuments();
            return await usersCollection;
        } catch (err) {
            console.error('Error counting users:', err);
            return 0;
        }
    }

    async nbFiles() {
        try {
            const filesCollection = this.db.collection('files').countDocuments();
            return await filesCollection;
        } catch (err) {
            console.error('Error counting files:', err);
            return 0;
        }
    }
}

const dbClient = new DBClient();
export default dbClient;

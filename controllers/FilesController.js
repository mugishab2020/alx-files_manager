class FilesController{
    static async postUpload(req, res){
        const file = req.file;
        if(!file){
            res.status(400).json({ error: 'Missing file' });
            return;
        }
        const myCollection = dbClient.client.db().collection('files');
        await myCollection.insertOne(file);
        res.status(201).json(file);
    }
}
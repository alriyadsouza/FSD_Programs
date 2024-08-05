const {MongoClient}= require('mongodb');
const uri= 'mongodb://localhost:27017';
const dbName='SampleDB';
const client= new MongoClient(uri,{useNewUrlParser:true, useUnifiedTopology:true});

async function main(){
    try{
        await client.connect();
        console.log("Connected");
        const db=client.db(dbName);

        
        await insertDocument(db);
        await findDocument(db);
    }
    catch(err){
        console.error(err);
    }
    finally{
        await client.close();
        console.log('Disconnectec');
    }
}

async function insertDocument(db){
    const collection=db.collection('documents');
    const result= await collection.insertOne({name:'Joh',age:30});
    console.log(`Document in inserted with id: ${result.insertedId}`);
}

async function findDocument(db){
    const collection = db.collection('documents');
    const cursor= collection.find();
    await cursor.forEach(doc=>{
        console.log(doc);}
    );
}
main().catch(console.error);
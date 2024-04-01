import mongoose, {Mongoose} from "mongoose";

const MONGODB_URL=process.env.MONGODB_URL;
// const MONGODB_URL= "mongodb+srv://aashishsarva:asd123123@cluster0.ae52tv0.mongodb.net/?retryWrites=true&w=majority";


interface MongooseConnection{
    conn:Mongoose | null;
    promise:Promise<Mongoose> | null
}

let cached:MongooseConnection=(global as any).mongoose
if(!cached){
    cached=(global as any ).mongoose={
        conn:null, promise:null
    }
}


// caching the conection 
export const connectToDatabase= async ()=>{
    if(cached.conn) return cached.conn

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise= cached.promise || mongoose.connect(MONGODB_URL,{dbName:'snapSmart',bufferCommands:false})


    cached.conn = await cached.promise;

    return cached.conn
}
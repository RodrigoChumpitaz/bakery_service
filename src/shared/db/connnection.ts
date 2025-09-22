import { connect } from "mongoose";

export class DatabaseConnection {
    static async default(){
        const db = await connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/bakery_db')
        console.log("Database connected:", db.connection.name);
    }
}
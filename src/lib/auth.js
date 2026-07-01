import { betterAuth } from "better-auth";
import dns from "dns/promises";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://jony_mia:jony_mia_db@cluster0.faotqao.mongodb.net/?appName=Cluster0");
// const client = new MongoClient("mongodb://localhost:27017/startup_forge");
const db = client.db("users");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true
  },
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  user:{
    additionalFields: {
    role: {      
        defaultValue:"founder"
    }
}
  }

});

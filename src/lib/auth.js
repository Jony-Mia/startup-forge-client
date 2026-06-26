import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns/promises";
dns.setServers(["1.1.1.1","8.8.8.8"]);

const client = new MongoClient("mongodb+srv://jony_mia:jony_mia_db@cluster0.faotqao.mongodb.net/?appName=Cluster0");
const db = client.db();

export const auth = betterAuth({
  emailAndPassword:{
    enabled:true
  },
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders:{
    google:{
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  
});

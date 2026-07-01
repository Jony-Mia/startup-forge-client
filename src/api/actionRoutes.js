import axios from "axios";
import { redirect } from "next/navigation";

const API = axios.create({
    baseURL: "https://startup-forge-backend-iota.vercel.app" 
})
const IMAGE = axios.create({
    baseURL:"https://api.imgbb.com/1"
})
export const GetRoute = async ()=>{
    let getOpportunities = await API.get("/opportunities");
    let opportunities = await getOpportunities.data
    return opportunities;
}
export const PostRoute = async(data)=>{
    const newOpportunintes = await API.post("/opportunities", data);
    const resend = await newOpportunintes.data;
    return resend;
}
export const GetStartup = async ()=>{
    const startupList = await API.get("/getStartup");
    const startupData = await startupList.data;

    return startupData;
}
export const deleteOpportunities = async (id)=>{
    const deleteId = await API.delete(`/deleteOpportunities/${id}`);
    const deleteData = await deleteId.data;
    redirect("/opportunities")
    return deleteData;
}
export const createStartup = async (startup)=>{
    const startupData = await API.post("/createStartup",startup);
    const data = await startupData.data;
    return data;
}

export const ImageUpload = async (image)=>{
    let data = await IMAGE.post("/upload?key=3400c5b9c87c9fadca80817ae1c398a6",image);
    let imageURI = data.data.data.url
    console.log(imageURI);

    return imageURI
}
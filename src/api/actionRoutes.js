import axios from "axios";
import { redirect } from "next/navigation";

const API = axios.create({
    baseURL:"http://localhost:4400"
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
export const deleteOpportunities = async (id)=>{
    const deleteId = await API.delete(`/deleteOpportunities/${id}`);
    const deleteData = await deleteId.data;
    redirect("/opportunities")
    return deleteData;
}
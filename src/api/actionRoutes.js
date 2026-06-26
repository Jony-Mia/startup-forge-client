import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:4400"
})
export const GetRoute = async ()=>{
    let getOpportunities = (await API.get("/opportunities")).data;
    return getOpportunities;
}
export const PostRoute = async(data)=>{
    const newOpportunintes = await API.post("/opportunities", data);
    const resend = await newOpportunintes.data;
    return resend;
}

import dbConnection from "@/lib/dbConnect";



const registerUser=async(payload)=>{
    const userCollection = dbConnection("stylemartUsers")
    const {email,password}=payload
}


export default registerUser;
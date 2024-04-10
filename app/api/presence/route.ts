import { NextApiRequest , NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(req:NextApiRequest, res:NextApiResponse){
 try{
   const response = await fetch('https://api.lanyard.rest/v1/users/1018532712455352330',
    {
        headers:{
            'Content-Type':'application/json',
        },
        method:'GET'
    }
   )
   const responseJson = await response.json();
   return NextResponse.json({response:responseJson } , {status:200})
 }catch(err){
    return NextResponse.json({response:err } , {status:500})
 }
}
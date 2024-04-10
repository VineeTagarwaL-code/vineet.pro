"use client"
import { useEffect , useState} from "react";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import { get } from "http";
const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const DiscordPresence = () => {


    const [presence, setPresence] = useState<any>({})
    const {data,error} = useSWR('/api/presence', fetcher, { refreshInterval: 1 })
    useEffect (()=>{

      if(data){
        setPresence(data.response.data.activities[0])

        console.log(data.response.data.activities[0])
      }
    },[data])
    return (
        <div>
        <img
        src="mp:external/Joitre7BBxO-F2IaS7R300AaAcixAvPu3WD1YchRgdc/https/raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/vscode.png"
        alt="Picture of the author"
        width={100}
        height={100}
        className="rounded-[3rem] z-[10] relative shadow-md shadow-black"
        />
        </div>
    )
}
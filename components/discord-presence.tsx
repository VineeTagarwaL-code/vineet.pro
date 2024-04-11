"use client"
import { use, useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import Image from "next/image";
import vs from '../assests/images/vs.png'
import code from '../assests/images/image-removebg-preview.png'
import { user } from "../lib/user";
import type { Spotify } from "@/lib/types";
import spotify from '../assests/images/spotify-1759471_1280.webp'
import monkey from '../assests/images/depositphotos_551580522-stock-illustration-galactic-apes-pixel-art-nft.webp'
import image from '../assests/images/image.jpg'
import Link from "next/link";
import { act } from "react-dom/test-utils";
export const DiscordPresence = () => {
  const [activity, setActivity] = useState(`@${user.username}`);
  const [username, setUserName] = useState(user.username)
  const [details, setDetails] = useState('Fetching...');
  const [activityImage, setActivityImage] = useState<any>(image);
  const [pulse, setPulse] = useState(30000);
  const [activityNumber, setActivityNumber] = useState(0);
  const [state, setState] = useState('');
  const [workingFile, setWorkingFile] = useState('')
  const [smallImage, setSmallImage] = useState('');
  const [isSpotify, setIsSpotify] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [songLink, setSongLink] = useState('');
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState('');
  const [spotifyTotal, setSpotifyTotal] = useState(0);
  const [currentSetInterval, setCurrentSetInterval] = useState(null);
  const [currentRequestAnimationFrame, setCurrentRequestAnimationFrame] = useState(0);

  function localTime() {
    setState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }))
  }

  const images: { [key: string]: string } = {
    "CLIP STUDIO PAINT": "https://i.imgur.com/IUVs3RB.png",
  };


  function musicProgress(spotify: Spotify) {
    let spotifyTotal = spotify?.timestamps?.end - spotify?.timestamps?.start;
    let progress =
      100 -
      (100 * (spotify?.timestamps?.end - new Date().getTime())) / spotifyTotal;
    setSpotifyTotal(spotifyTotal);
    setProgress(progress);
  }

  function elapsedTime(timestampStart: number) {
    const elapsedMs = new Date().getTime() - timestampStart;
    let elapsedTimeString = new Date(elapsedMs).toISOString().slice(14, 19);
    setElapsed(elapsedTimeString);
  }
  useEffect(() => {
    localTime(); // Call localTime once to initialize the state
    const intervalId = setInterval(localTime, 1000); // Update local time every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  useEffect(() => {
    async function connect() {
      let lanyard = new WebSocket('wss://api.lanyard.rest/socket');
      lanyard.onopen = () => console.log('Connected to Lanyard');

      lanyard.onmessage = (event) => {
        let json = JSON.parse(event.data);
        let opcode = json.op;
        let data: any = json.d;


        function tick() {
          if (isSpotify) {
            musicProgress(data.spotify);
          }
          else if (isActivity) {
            elapsedTime(data.activities[activityNumber].timestamps.start);
          } else if (!isActivity) {
            setCurrentRequestAnimationFrame(requestAnimationFrame(tick))
          }
        }

        const heartbeatInterval = setInterval(() => {
          console.log('Sending heartbeat');
          if (lanyard) {
            lanyard.send(JSON.stringify({ op: 3 }));
          }
        }, 1000);

        if (opcode === 1) {
          setPulse(data.heartbeat_interval);
          lanyard.send(JSON.stringify({ op: 2, d: { subscribe_to_id: user.id } }));
        }

        if (opcode === 0) {
          setIsSpotify(data.listening_to_spotify);
          setIsActivity(!!data.activities[0])

          if (data.listening_to_spotify) {
            const { album, track_id, artist, song, timestamps, album_art_url } = data.spotify;
            setActivity(song);
            setDetails(artist);
            setActivityImage(album_art_url);
            setSongLink(`https://open.spotify.com/track/${track_id}`)
            musicProgress(data.spotify);
            setSmallImage('')
            elapsedTime(timestamps.start);
            tick();
          } else if (isActivity || data.activities[activityNumber]) {

            const { name, timestamps, assets, state, details } = data.activities[activityNumber];
            console.log(data.activities[activityNumber])
            let acImage = assets.large_image ?
              `https://cdn.discordapp.com/app-assets/${data.activities[activityNumber].application_id}/${data.activities[activityNumber].assets.large_image}.webp?size=512`
              : images[name] || "/question_mark.png"


            setActivityImage(acImage);
            setActivity(name);
            setDetails(details);
            setWorkingFile(state)
            elapsedTime(timestamps.start);
            tick();
          } else if (!isActivity) {
            setActivity(`@${user.username}`);
            let details = data.discord_status.charAt(0).toUpperCase() + data.discord_status.slice(1)
            setDetails(`${details === 'Dnd' ? 'Do Not Disturb' : details === 'Idle' ? 'Away' : details === 'Online' ? 'Active' : 'Offline'}`)

            cancelAnimationFrame(currentRequestAnimationFrame);
            tick();
          }
          lanyard.onclose = () => {
            clearInterval(heartbeatInterval);
            setTimeout(() => connect(), 2500);
          }
        }
      };
    }
    connect();
  }, []);

  return (
    <div className="px-4">
      {
        isSpotify ? <div className="flex justify-start items-center gap-4">
          <div className="relative">
            <Image
              src={activityImage}
              alt="Activity Image"
              width={150}
              height={150}
              className="rounded-3xl z-[10] relative shadow-md"
            />

            <Image
              src={spotify}
              alt="Spotify"
              width={30}
              height={30}
              className="rounded-full shadow-2xl shadow-green-400 z-[10]   absolute right-0 bottom-[-10px]"
            />
          </div>
          <div className="flex gap-2 flex-col justify-start items-start">
            <h4 className="font-grotesk text-3xl cursor-pointer text-[#ffbe6f]"><Link href={songLink}>{activity.length > 15 ? `${activity.slice(0, 15)}...` : activity}</Link></h4>
            {details && <h4 className="font-grotesk text-xl text-foreground">{
              details.length > 20 ? `${details.slice(0, 20)}...` : details
            }</h4>}
            <div className="flex justify-center items-center gap-3 flex-row-reverse">
              <Progress value={progress} className="w-[200px] h-[3px] text-red-500" />
              <p className="text-white font-jetbrain">{elapsed}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#ffbe6f] font-jetbrain text-xl">@{username} •</p>
              <p className="text-cyan-300 font-grotesk text-xl">{state}</p>

            </div>
          </div>
        </div> : isActivity ? <div className="flex justify-start items-center gap-4">


        <div className="relative">
            <Image
              src={code}
              alt="Activity Image"
              width={150}
              height={150}
              className="rounded-3xl z-[10] relative shadow-md bg-black"
            />

            <Image
              src={vs}
              alt="Spotify"
              width={30}
              height={30}
              className="rounded-full shadow-2xl shadow-green-400 z-[10]   absolute right-0 bottom-[-10px]"
            />
          </div>
          <div className="flex gap-2 flex-col justify-start items-start">
            <h4 className="font-grotesk text-3xl cursor-pointer text-[#ffbe6f]">{activity}</h4>
            {details && <h4 className="font-jetbrain text-xl text-foreground">{
              details
            }</h4>}

            <p className="font-grotesk text-xl text-gray-200">{workingFile?.length> 20 ? `${workingFile?.slice(0,30)}....` : workingFile}</p>   
            <div className="flex gap-2 flex-col">
              <p className="text-gray-400 font-jetbrain text-xl">ELAPSED: <span className="text-green-400">{elapsed}</span></p>
              <div className="flex gap-3 ">
              <p className="text-[#ffbe6f] font-jetbrain text-xl">@{username} • </p>
              <p className="text-cyan-300 font-grotesk text-xl">{' '}{state}</p>
                </div>



            </div>
          </div>
        </div> : <div className="flex justify-start items-center gap-4">
          <div className="relative">
            <Image
              src={monkey}
              alt="Activity Image"
              width={200}
              height={200}
              className="rounded-3xl z-[10] relative shadow-md"
            />


          </div>
          <div className="flex gap-2 flex-col justify-start items-start">
            <h4 className="font-grotesk text-3xl cursor-pointer text-[#ffbe6f]"><Link href={songLink}>{activity.length > 15 ? `${activity.slice(0, 15)}...` : activity}</Link></h4>
            {details && <h4 className="font-grotesk text-xl text-foreground">{
              details.length > 20 ? `${details.slice(0, 20)}...` : details
            }</h4>}

            <p className="text-gray-400 text-xl font-jetbrain">Workspace • Home</p>
            <div className="flex gap-2">

              <p className="text-cyan-300 font-grotesk text-xl">{state}</p>

            </div>
          </div>
        </div>
      }
    </div>

  )
}
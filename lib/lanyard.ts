import { useEffect, useState } from 'react';
import { user } from './user';

export const useStatus = () => {
  const [pulse, setPulse] = useState(0);
  const [status, setStatus] = useState<any>({});
  let lanyard: WebSocket ;
  useEffect(() => {


    async function connect() {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lanyard = new WebSocket(`wss://api.lanyard.rest/socket`);
      lanyard.onopen = () => {
        console.log('Connected to Lanyard');
      };

      lanyard.onmessage = (event) => {
        const json = JSON.parse(event.data);
        const { op, d } = json;

        if (op === 1) {
          setPulse(d.heartbeat_interval);
          lanyard.send(
            JSON.stringify({
              op: 2,
              d: { subscribe_to_id: user.id }
            })
          );
        }

        if (op === 0) {
          setStatus(d);
        }
      };
    }

    connect();

    return () => {
      lanyard?.close();
    };
  }, []); // Run once on mount

  useEffect(() => {
    const interval = setInterval(() => {
      if (lanyard) {
        lanyard.send(JSON.stringify({ op: 3 }));
      }
    }, pulse);

    return () => {
      clearInterval(interval);
    };
  }, [pulse]);

  console.log(status, 'status');
  return status;
};

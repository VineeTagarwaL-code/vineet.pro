// "use client"
// import { useState, useEffect } from 'react';

// const CursorFollower = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event:any) => {
//       const { clientX, clientY } = event;
//       setCursorPosition({ x: clientX, y: clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="cursor-follower" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
//       <span>Cursor</span>
//     </div>
//   );
// };

// export default CursorFollower;

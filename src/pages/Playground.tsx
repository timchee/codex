// import { title } from "process";
// import style from "../styles/components/Playground.module.css"
// import { ReactNode, useState } from "react";
// import {data, setData} from "./Main"
// // import Handler from "../../utils/apiRequest";

// interface Data {
//   [x: string]: ReactNode;
//   name: ReactNode;
//   message: string;
//   id: string;
// }
// export default function MainPage(){

//   const [data, setData] = useState<Data>({
//     message: "help",
//     name: undefined,
//     id
//   });

//   async function fetchData() {
//     const response = await fetch(
//       `{https://api.codex.gjirafa.dev/v2/codex-dev/models/codexguidearticles${id}}`,
//       {
//         headers: {
//           authorization:
//             "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkU2MzY5NjQ0RTk5RTMzRTZFODRBRkNGOThDMjZEMTQwMzlGREQwMjBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjVqYVdST21lTS1ib1N2ejVqQ2JSUURuOTBDQSJ9.eyJuYmYiOjE2NzkwNDI0ODIsImV4cCI6MTY3OTIxNTI4MiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmdqaXJhZmEudGVjaCIsImF1ZCI6WyJDb2RleF9WdWVfQWRtaW5fQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiY2xpZW50X2lkIjoiY29kZXhfdnVlX2FkbWluIiwic3ViIjoiMmQyMzQwZTQtMDQ3MS00MjE2LWE5MGYtYTE4YzgwNDAyMjFiIiwiYXV0aF90aW1lIjoxNjc3NTkzMjYwLCJpZHAiOiJHb29nbGUiLCJuYW1lIjoiU2hwZWp0aW0gVWthaiIsImdpdmVuX25hbWUiOiJTaHBlanRpbSIsImZhbWlseV9uYW1lIjoiVWthaiIsInBpY3R1cmUiOiJodHRwczovL3Rvam5odTRtdnAuZ2ppcmFmYS5uZXQvcHJvZmlsZXBpY3R1cmVzLzg3VnlUMGdOa1RPejhzUzdRaEczVVhmdTVRSC9qOGlqbUtBSFVOM0o5TW89Lzk5NzYwMDYwLjI1NzM2OTQuanBnIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2hwZWp0aW0udWthakBsaWZlLmdqaXJhZmEuY29tIiwiZW1haWwiOiJzaHBlanRpbS51a2FqQGxpZmUuZ2ppcmFmYS5jb20iLCJqdGkiOiIzNUREQjdBOURDODg2NTEwOUIxNURBRUI2RDc0RDQ0RSIsImlhdCI6MTY3OTA0MjQ4Miwic2NvcGUiOlsiQ29kZXhfVnVlX0FkbWluX0FwaSIsIm9wZW5pZCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJleHRlcm5hbCJdfQ.dI6RiVDDTBSEkyfcHIwX9pjizj_h_17dtxk6uLqoDNnqXzoqZce-fzcmB7VZAkf9Nn4unkFvd8qDYqQVJ1p_ZXaovGTD3mCve2zkVX9xRBVbVttQfZk6lYOVx9KnjIJXumGaJ6nfB82xU_GE_WOdIM1OpmYSncus07cytt0_zeF1pJKKwAW4V3Ro0AzlALVP-TT9Rd4-wAt0-ICzVvJH4G8eZ5kgmZ0PiKGb7C7BZvQ_dAKw1jFrszrkjnzfET3eBMvLDcWWEtAREiA1sCVltobU7YDko1oM1gkEuV3sVnalqdWInesSCCOn-jF90vG4PclVmNOkWJdWdfFd0jTHqQ",
//         },
//       }
//     );

//     const data = await response.json();
//     setData(data);
//     console.log(data);
//     console.log(response);
//     console.log(response.type);
    

    
//   }
//   return (
//     <>

//         {/* <body onLoad={fetchData}></body> */}
//         <h1 className={style.h1__center}>{data.name}</h1>
//         <button onClick={fetchData}>fetch</button>
        
//       <div>
//       </div>
//     </>
//   );
// }

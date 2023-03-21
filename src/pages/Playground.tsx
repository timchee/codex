import { gql } from "@apollo/client";
import client from "../../apollo-client";







// interface Post {
//     id: number;
//     title: string;
//     body: string;
//     comments: Comment[];
//   }
  
//   interface Comment {
//     id: number;
//     postId: number;
//     body: string;
//   }
  
//   export default function MyPage({ posts }: { posts: Post[] }) {
//     return (
//       <div>
//         {posts.map((post) => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//             <h3>Comments</h3>
//             <ul>
//               {post.comments.map((comment) => (
//                 <li key={comment.id}>{comment.body}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export async function getServerSideProps() {
//     const response = await fetch(
//         "https://api.codex.gjirafa.dev/v2/codex-dev/entries?SiteId=sicBPetCCe&Model=codexguidearticles",
//         {
//           headers: {
//             Accept: 'accept: */*',
//             Authorization:
//               "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkU2MzY5NjQ0RTk5RTMzRTZFODRBRkNGOThDMjZEMTQwMzlGREQwMjBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjVqYVdST21lTS1ib1N2ejVqQ2JSUURuOTBDQSJ9.eyJuYmYiOjE2NzkyNjU1MjcsImV4cCI6MTY3OTQzODMyNywiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmdqaXJhZmEudGVjaCIsImF1ZCI6WyJDb2RleF9WdWVfQWRtaW5fQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiY2xpZW50X2lkIjoiY29kZXhfdnVlX2FkbWluIiwic3ViIjoiMmQyMzQwZTQtMDQ3MS00MjE2LWE5MGYtYTE4YzgwNDAyMjFiIiwiYXV0aF90aW1lIjoxNjc3NTkzMjYwLCJpZHAiOiJHb29nbGUiLCJuYW1lIjoiU2hwZWp0aW0gVWthaiIsImdpdmVuX25hbWUiOiJTaHBlanRpbSIsImZhbWlseV9uYW1lIjoiVWthaiIsInBpY3R1cmUiOiJodHRwczovL3Rvam5odTRtdnAuZ2ppcmFmYS5uZXQvcHJvZmlsZXBpY3R1cmVzLzg3VnlUMGdOa1RPejhzUzdRaEczVVhmdTVRSC9qOGlqbUtBSFVOM0o5TW89Lzk5NzYwMDYwLjI1NzM2OTQuanBnIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2hwZWp0aW0udWthakBsaWZlLmdqaXJhZmEuY29tIiwiZW1haWwiOiJzaHBlanRpbS51a2FqQGxpZmUuZ2ppcmFmYS5jb20iLCJqdGkiOiI2RTg5RTRGRDYzN0IyODZBRDMzQ0MxRDU5OEIyQUU4RSIsImlhdCI6MTY3OTI2NTUyNywic2NvcGUiOlsiQ29kZXhfVnVlX0FkbWluX0FwaSIsIm9wZW5pZCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJleHRlcm5hbCJdfQ.tnIymzM07bomP48bfSQtMiCqVHlt4PT2Roci_ZqSAJWUigISoNTnpLo5gahxtx_E8J8EgHyCLX1rVPoO3FKJ1wze1yc_gSD-1i_FX8jGFVrgys43qxTTPncfD7O-DyrZFveYA4Omqq4zVSH27R37IHptBBp97cSOk62ephBXDJevQumZ71we-2lbYkH7HYR9D7mlcPzgzHjinm4QotUbXEFeeKryOuP_Ef08MdIyu2J6w3fdf8VAfkZ9sQ2Gx0wm7TESjmk91VCmNCm9L94qbI7TVg0Zyua4q8aCSCz4wWGMf6suhmnKutowjl-zq0hrVryeU3Q0yZ8QitIofmIkvQ",
//           },
//         })
//     const posts: Post[] = await response.json();
  
//     return {
//       props: { posts },
//     };
//   }
// import { NextResponse } from "next/server";
// import mongoose from "@/DB/connect";
// import navModel from "@/DB/model/NavSchema";

//  export async function GET() {
//     const navData = new navModel({
//         nav_titleOne: "Aditya",
//         nav_titleTwo: "Aryan",
//         nav_links: [
//             {
//                 links_title: "Home",
//                 links_link: "#home"
//             },{
//                 links_title: "About",
//                 links_link: "#about"
//             },{
//                 links_title: "Project",
//                 links_link: "#project"
//             },{
//                 links_title: "Skills",
//                 links_link: "#skills"
//             },{
//                 links_title: "Contact",
//                 links_link: "#contact"
//             },
//         ]
//     })

//     await navData.save()
//     return NextResponse.json(navData)
// }
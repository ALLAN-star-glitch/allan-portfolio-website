// // components/projects/ProjectCard.tsx
// import Image from "next/image";
// import Link from "next/link";

// import { motion } from "framer-motion";
// import { Project } from "@/lib/types";

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <motion.article
//       whileHover={{ y: -6 }}
//       className="bg-white border rounded-lg shadow-sm overflow-hidden"
//     >
//       <div className="h-44 w-full relative">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           style={{ objectFit: "cover" }}
//         />
//       </div>

//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{project.title}</h3>
//         <p className="text-sm text-gray-600 mt-2 line-clamp-3">{project.description}</p>
//         <div className="mt-3 flex flex-wrap gap-2">
//           {project.tags.map((t) => (
//             <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-md">
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="mt-4 flex items-center justify-between">
//           <Link
//             href={project.liveUrl || "#"}
//             className="text-sm text-[#2979FF] font-medium"
//           >
//             Live
//           </Link>
//           <Link
//             href={project.githubUrl || "#"}
//             className="text-sm text-gray-500"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Source
//           </Link>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

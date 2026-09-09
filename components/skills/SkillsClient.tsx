"use client";

import { motion, Variants } from "framer-motion";
import { 
  SiNestjs, 
  SiNextdotjs, 
  SiGo, 
  SiKotlin, 
  SiPostgresql, 
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiTypescript,
  SiTailwindcss,
  SiJetpackcompose,
  SiAngular,
  SiSpringboot,
  SiPython,
  SiJavascript,
  SiAmazon,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiGit,
  SiJenkins,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiApache,
  SiNginx,
  SiLinux,
  SiAndroid,
} from "react-icons/si";
import { 
  FaRobot, 
  FaDatabase, 
  FaCloud, 
  FaCode, 
  FaMobile, 
  FaServer, 
  FaShieldAlt, 
  FaTools,
  FaApple,
  FaWindows
} from "react-icons/fa";

export default function SkillsClient() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="w-6 h-6 text-cyan-400" />,
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF" },
        { name: "Golang", icon: SiGo, color: "#00ADD8" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "MySQL", icon: SiPostgresql, color: "#4479A1" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="w-6 h-6 text-sky-400" />,
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
        { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        { name: "Nginx", icon: SiNginx, color: "#009639" },
      ],
    },
    {
      title: "Message Queues & Communication",
      icon: <FaRobot className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
        { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
        { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        { name: "gRPC", icon: SiGo, color: "#244C5A" },
        { name: "REST APIs", icon: SiExpress, color: "#FFFFFF" },
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: <FaTools className="w-6 h-6 text-orange-400" />,
      skills: [
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
        { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
        { name: "Logstash", icon: SiLogstash, color: "#005571" },
        { name: "Kibana", icon: SiKibana, color: "#005571" },
      ],
    },
    {
      title: "Security",
      icon: <FaShieldAlt className="w-6 h-6 text-red-400" />,
      skills: [
        { name: "OAuth 2.0", icon: SiGo, color: "#E0234E" },
        { name: "JWT", icon: SiGo, color: "#000000" },
        { name: "SSO", icon: SiGo, color: "#4285F4" },
        { name: "LDAP", icon: SiGo, color: "#009639" },
      ],
    },
    {
      title: "Mobile",
      icon: <FaMobile className="w-6 h-6 text-emerald-400" />,
      skills: [
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
        { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
        { name: "Ionic", icon: SiAngular, color: "#3880FF" },
        { name: "Cordova", icon: SiApache, color: "#E8E8E8" },
      ],
    },
    {
      title: "Operating Systems",
      icon: <FaServer className="w-6 h-6 text-gray-400" />,
      skills: [
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Windows", icon: FaWindows, color: "#0078D4" },
        { name: "Unix", icon: FaApple, color: "#999999" },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0B1120] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-sm font-medium text-blue-400">
            My Expertise
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h1>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with daily to build scalable, modern applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                <span className="ml-auto text-sm text-gray-500">{category.skills.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5"
                    >
                      <Icon
                        className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-cyan-400">20+</div>
            <div className="text-sm text-gray-400 mt-1">Technologies</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-cyan-400">9</div>
            <div className="text-sm text-gray-400 mt-1">Skill Categories</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-3xl font-bold text-cyan-400">3+</div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
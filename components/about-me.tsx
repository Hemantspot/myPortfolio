"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Digital Notebook - A Digital Marketing Agency",
    role: "Social Media Intern",
    period: "February 2023 - May 2023",
    location: "Noida sec-63",
    type: "Internship",
    logo: "/images/digital-notebook-logo.jpg",
    skills: ["Content Ideation", "Post Design", "Influencer Outreach", "Community Management"],
    tools: ["Facebook", "Instagram", "Canva", "CapCut"],
    achievements: ["Visually appealing content strategy", "Influencer marketing campaigns"],
  },
  {
    id: 2,
    company: "Tech2Globe",
    role: "Social Media Marketing Intern",
    period: "August 2023 - February 2024",
    location: "New Delhi, Delhi, India",
    type: "Internship",
    logo: "/images/tech2globe-logo.jpg",
    skills: ["Post Design", "Caption Writing", "AI-Enhanced Visuals", "Influencer Coordination"],
    tools: ["Facebook", "Instagram", "Canva", "Meta Ads", "ChatGPT", "Influencity"],
    achievements: ["Steady engagement growth", "Micro-influencer partnerships"],
  },
  {
    id: 3,
    company: "Tech2Globe",
    role: "Social Media Executive",
    period: "March 2024 - Present",
    location: "Delhi, India",
    type: "Full-time",
    logo: "/images/tech2globe-logo.jpg",
    skills: ["Daily Content Management", "AI Video Creation", "Content Calendar", "LinkedIn Polls"],
    tools: ["Instagram", "LinkedIn", "YouTube", "Canva", "HeyGen", "Notion", "ChatGPT"],
    achievements: ["Full-spectrum content strategy", "AI-powered video content", "Consistent brand presence"],
  },
]

const skillsData = {
  "Core Marketing Skills": [
    { name: "Social Media Marketing", proficiency: 95 },
    { name: "Content Creation", proficiency: 90 },
    { name: "Influencer Marketing", proficiency: 85 },
    { name: "Community Management", proficiency: 80 },
    { name: "Data Analysis", proficiency: 75 },
  ],
  "Creative & Technical": [
    { name: "Visual Branding", proficiency: 90 },
    { name: "Video Editing", proficiency: 85 },
    { name: "Copywriting", proficiency: 88 },
    { name: "AI Tools", proficiency: 80 },
    { name: "Trend Analysis", proficiency: 85 },
  ],
  "Tools & Platforms": [
    { name: "Instagram", proficiency: 95 },
    { name: "Canva", proficiency: 90 },
    { name: "CapCut", proficiency: 85 },
    { name: "ChatGPT", proficiency: 80 },
    { name: "Meta Ads", proficiency: 75 },
  ],
  "Soft Skills": [
    { name: "Project Management", proficiency: 85 },
    { name: "Communication", proficiency: 90 },
    { name: "Leadership", proficiency: 80 },
    { name: "Teamwork", proficiency: 88 },
  ],
}

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Marketing, Creativity & Me
            </span>
            <span className="ml-2">📱💡</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/images/hemant-profile.jpg"
                  alt="Hemant Mandal"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Social Media Executive obsessed with strategy, storytelling, and scroll-stopping content. From meme
                  pages to brand campaigns, creativity with purpose is my game! 🚀✨
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀{" "}
                    <strong>
                      Hey, I'm a Social Media Executive who's obsessed with strategy, storytelling, and scroll-stopping
                      content.
                    </strong>
                  </p>
                  <p className="mb-4">
                    From running my personal meme page with <strong>millions of reach</strong> to handling diverse
                    brands — I've learned that{" "}
                    <strong>creativity is cool, but creativity with purpose is unbeatable</strong>. I don't just post
                    for the sake of posting — I love digging into what works, why it works, and how it can be 10x
                    better.
                  </p>
                  <p className="mb-4">
                    <strong>What really excites me?</strong>
                    <br />📌 Building smart content strategies
                    <br />💡 Coming up with fresh, on-brand ideas
                    <br />📈 Marketing experiments that actually perform
                  </p>
                  <p className="mb-4">
                    I stay super active when it comes to <strong>new trends, AI tools, and digital tricks</strong> —
                    because this space changes fast, and I love keeping up.
                  </p>
                  <p>
                    <strong>A little fun, a lot of focus</strong> — that's how I roll in the social media game.
                    <br />
                    <strong>Let's make the internet interesting.</strong> 🎯✨
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Journey
              </span>
              <span className="ml-2 text-white">🛤️</span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0 p-1">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <span
                              key={achievementIndex}
                              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-300 border border-green-500/20"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.tools && item.tools.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-1 mt-2">
                          {item.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-gray-500/10 to-gray-400/10 text-gray-400 border border-gray-500/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Education & Certifications
              </span>
              <span className="ml-2 text-white">🎓</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-2">Bachelor's of Commerce (B.Com)</h4>
                <p className="text-purple-400 mb-2">School of Open Learning (Delhi University)</p>
                <p className="text-gray-400 text-sm">June 2020 - July 2023</p>
                <p className="text-gray-300 mt-2">Commerce specialization with focus on business fundamentals</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-2">Digital Marketing Planner</h4>
                <p className="text-purple-400 mb-2">Digiperform</p>
                <p className="text-gray-400 text-sm">July 2022 - November 2022</p>
                <p className="text-gray-300 mt-2">Marketing & Advertising certification program</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Marketing Arsenal
              </span>
              <span className="ml-2 text-white">⚔️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Brand Portfolio Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Brands I've Worked With
              </span>
              <span className="ml-2 text-white">🏢</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BrandCard
                title="Gritfit"
                handle="@gritfitnutri"
                description="Grew from 0 to 620+ followers in 5 months with 15,000+ monthly organic reach"
                achievements={["UGC Content Strategy", "Influencer Partnerships", "Meta Ads Campaigns"]}
                tools={["Instagram", "Canva", "Meta Ads", "ChatGPT", "CapCut"]}
              />
              <BrandCard
                title="Tech2Globe"
                handle="@tech2globeweb"
                description="Full-spectrum content strategy with daily posts and AI-powered videos"
                achievements={["Daily Content Management", "AI Video Creation", "LinkedIn Polls"]}
                tools={["Instagram", "LinkedIn", "Canva", "HeyGen", "Notion"]}
              />
              <BrandCard
                title="Hyperchiller"
                handle="@thehyperchiller"
                description="Strategic support for USA-based D2C coffee accessory brand"
                achievements={["Global Brand Strategy", "Cross-platform Content", "US Market Focus"]}
                tools={["Instagram", "Canva", "ChatGPT", "Leonardo"]}
              />
              <BrandCard
                title="Juvea"
                handle="@juvea"
                description="Daily content creation for premium sleep brand with AI-enhanced visuals"
                achievements={["Daily Scheduling", "AI Content Generation", "Brand Consistency"]}
                tools={["Instagram", "Canva", "CapCut", "Meta Business Suite"]}
              />
              <BrandCard
                title="Digital Notebook"
                handle="@digitalnotebookofficial"
                description="Social media management for digital marketing agency"
                achievements={["Content Strategy", "Visual Branding", "Engagement Growth"]}
                tools={["Instagram", "Facebook", "Canva", "CapCut"]}
              />
              <BrandCard
                title="Other Notable Brands"
                handle="15+ Brands"
                description="HC Interior, UC Interior, Freshmist, Mr. Syrups, Shopelite Gourmet, Modern Snacks, and more"
                achievements={["Multi-brand Management", "Diverse Industries", "Consistent Growth"]}
                tools={["Various Platforms", "Multiple Tools", "Custom Strategies"]}
              />
            </div>
          </div>

          {/* Tools & AI Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Tools & AI Arsenal
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ToolCategory title="Video Editing" tools={["CapCut", "VN", "Veed.io", "HeyGen"]} icon="🎬" />
              <ToolCategory
                title="Creative Image Creation"
                tools={["Canva", "ChatGPT", "Leonardo", "Getimg", "Adobe Firefly"]}
                icon="🎨"
              />
              <ToolCategory
                title="Video Creation"
                tools={["Canva", "Veed.io", "HeyGen", "Getimg", "Kling"]}
                icon="📹"
              />
              <ToolCategory
                title="Research & Analysis"
                tools={["Instagram", "ChatGPT", "Semrush", "Google Trends", "Facebook Ad Library"]}
                icon="📊"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}

function BrandCard({ title, handle, description, achievements, tools }) {
  return (
    <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-purple-400 text-sm mb-3">{handle}</p>
      <p className="text-gray-300 text-sm mb-4">{description}</p>

      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h5>
        <div className="flex flex-wrap gap-1">
          {achievements.map((achievement, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-sm font-semibold text-gray-400 mb-2">Tools Used:</h5>
        <div className="flex flex-wrap gap-1">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToolCategory({ title, tools, icon }) {
  return (
    <div className="p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-2">{icon}</span>
        <h4 className="text-lg font-bold text-white">{title}</h4>
      </div>
      <div className="space-y-2">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="text-sm px-3 py-1 rounded-md bg-gray-800/50 text-gray-300 hover:text-white transition-colors"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  )
}

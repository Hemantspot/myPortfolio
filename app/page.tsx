"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Linkedin, Calendar, Instagram, TrendingUp, BarChart3, Target, Cpu, ExternalLink, PenTool } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hey! It's Hemant Mandal
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🚀 Digital Marketer | Social Media Marketing Professional | Content Creator
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Instagram className="w-10 h-10 text-purple-500" />}
                title="Social Media Marketing"
                description="Creating engaging content and building strong brand presence across platforms like Instagram, LinkedIn, and Facebook - all driven by insights and performance data."
              />
              <ServiceCard
                icon={<PenTool className="w-10 h-10 text-pink-500" />}
                title="Content Creation"
                description="Crafting compelling content (reels, carousels, and captions) that resonates with target audiences and drives real engagement using trends, storytelling, and creative hooks."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-purple-500" />}
                title="AI-Powered Content Strategy"
                description="Leveraging AI tools like ChatGPT, Notion AI, and Canva Magic tools to brainstorm ideas, write faster, analyze trends, and generate creative content calendars efficiently."
              />
              <ServiceCard
                icon={<TrendingUp className="w-10 h-10 text-pink-500" />}
                title="Digital Marketing Strategy"
                description="Planning full-funnel strategies for growth - including audience research, platform targeting, and campaign flow to align with business objectives and KPIs."
              />
              <ServiceCard
                icon={<Target className="w-10 h-10 text-purple-500" />}
                title="Brand Building"
                description="Helping brands shape their tone, identity, and narrative across social media — ensuring consistency and connection with the audience through voice, visuals, and value."
              />
              <ServiceCard
                icon={<BarChart3 className="w-10 h-10 text-pink-500" />}
                title="Creative Experimentation & Trend Innovation"
                description="Exploring new formats, trends, and creative hooks to keep content fresh and engaging. Experimenting with new reel concepts, trending audio, and unconventional captions."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                What I've Accomplished
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>

            {/* Visual Portfolio Section */}
            <div className="mb-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-xl border border-purple-500/30"
              >
                <h3 className="text-2xl font-bold mb-4">
                  <a
                    href="https://drive.google.com/drive/folders/1XKHBB-ajL9HFO_ZOtmKmzJVtG9yyA8lh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-300 hover:to-pink-400 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Visual Portfolio
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </a>
                </h3>
                <p className="text-gray-300 text-lg">Reels, graphics, and content samples from campaigns.</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Social Media Campaigns"
                description="Successfully planned and executed social media campaigns across Instagram and LinkedIn, leading to a 200% boost in engagement."
                tags={["Instagram", "LinkedIn", "Campaign Management", "Engagement Growth"]}
              />
              <ProjectCard
                title="Creative Content Development"
                description="Designed and produced engaging visual content (reels, carousels, stories) using Canva and Adobe Express, aligned with brand goals."
                tags={["Visual Content", "Canva", "Adobe Express", "Brand Alignment"]}
              />
              <ProjectCard
                title="Content Marketing Success"
                description="Built content strategies that generated viral posts and increased impressions organically across multiple platforms."
                tags={["Viral Content", "Organic Growth", "Content Strategy", "Multi-platform"]}
              />
              <ProjectCard
                title="Gritfit Growth Strategy"
                description="Managed @gritfitnutri from 0 to 620+ followers in 5 months with 15,000+ monthly organic reach using UGC content and influencer partnerships."
                tags={["UGC Content", "Influencer Marketing", "Organic Growth", "Meta Ads"]}
              />
              <ProjectCard
                title="Tech2Globe Content Management"
                description="Executed full-spectrum content strategy with daily posts, AI-powered videos, and interactive LinkedIn polls for consistent brand presence."
                tags={["Daily Content", "AI Videos", "LinkedIn Polls", "Content Calendar"]}
              />
              <ProjectCard
                title="Hyperchiller Brand Strategy"
                description="Contributed to @thehyperchiller, a USA-based D2C coffee brand, through strategic brainstorming and lightweight execution for global audience."
                tags={["D2C Brand", "USA Market", "Strategic Planning", "Global Audience"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Let's Connect
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Prefer to call directly?</p>
                  <div className="flex justify-center">
                    <a
                      href="tel:+919315889059"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Call: +91 9315889059
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/hemant-mandal-701739229"
              label="LinkedIn"
            />
            <SocialIcon icon={<Instagram />} href="https://www.instagram.com/_hemantspot_/" label="Instagram" />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Hemant Mandal. All rights reserved.</p>
            <p className="mt-1">📍 Sec-110 Noida, Uttar Pradesh, India</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:hemantmandal9315@gmail.com" className="text-purple-400 hover:text-purple-300">
        hemantmandal9315@gmail.com
      </a>
    </div>
  )
}

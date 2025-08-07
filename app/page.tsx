"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  Linkedin,
  Award,
  BookOpen,
  FileText,
  Lightbulb,
  BarChart3,
  Send,
  Users,
  Target,
  Zap,
  Globe,
  GraduationCap,
  Building,
  Calendar,
  Code,
  Shield,
  Network,
  Brain,
  Briefcase,
  Settings,
  User,
  CheckCircle,
  Search,
  ExternalLink,
  Quote,
  TrendingUp,
  Eye,
  Camera,
} from "lucide-react"
import Image from "next/image"

export default function AcademicPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [activeAcademicTab, setActiveAcademicTab] = useState("overview")
  const [showContactPage, setShowContactPage] = useState(false)
  const [showMediaPage, setShowMediaPage] = useState(false)
  const [year, setYear] = useState<number | null>(null)

useEffect(() => {
  setYear(new Date().getFullYear())
}, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveSection(sectionId)
    }
  }

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "academic", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (showContactPage) {
    return <ContactPage onBack={() => setShowContactPage(false)} />
  }

  if (showMediaPage) {
    return <MediaShowcasePage onBack={() => setShowMediaPage(false)} />
  }

  return (
<div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-300 to-purple-400">
      {/* Fixed Navigation Header */}
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-400 to-purple-900 text-white shadow-xl z-50 border-b border-purple-800">
  <div className="container mx-auto px-6 py-2">
    <div className="flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
          <span className="text-purple-700 font-bold text-lg">AI</span>
        </div>
        <div>
          <h1 className="font-extrabold text-white text-xl tracking-wide">Dr. Anup Ingle</h1>
          <p className="text-sm text-white-200 font-medium">Assistant Professor • E&TC Department</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-3">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "academic", label: "Academic" },
          { id: "contact", label: "Contact" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 text-sm shadow-sm
              ${
                activeSection === tab.id
                  ? "bg-white text-purple-700 scale-105 shadow-md"
                  : "text-white/90 hover:bg-purple-300 hover:text-black hover:scale-105"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  </div>
</header>


      {/* Main Content - All sections on same page */}
      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-[80vh] py-18">
          <HomeSection onContactClick={() => setShowContactPage(true)} onMediaClick={() => setShowMediaPage(true)} />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-12 bg-white/50">
          <AboutSection />
        </section>

        {/* Academic Section */}
        <section id="academic" className="fixingsize min-h-screen py-12 " >
          <AcademicSection activeAcademicTab={activeAcademicTab} setActiveAcademicTab={setActiveAcademicTab} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 bg-white/50">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <h3 className="text-xl font-bold">Dr. Anup Ingle</h3>
              </div>
              <p className="text-slate-300 text-sm">
                Assistant Professor specializing in Computer Networks, Security, and IoT Systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <button onClick={() => scrollToSection("home")} className="hover:text-purple-400">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-purple-400 ">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("academic")} className="hover:text-purple-400">
                    Academic
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-purple-400">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Academic</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>26+ Publications</li>
                <li>11 Books Published</li>
                <li>700+ Students Guided</li>
                <li>17 Years Experience</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>anup.ingale@viit.ac.in</p>
                <p>+91 9325383604</p>
                <p>VIIT, Pune</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-700" />
          <div className="text-center text-slate-400">
  {year && (
    <p>© {year} Dr. Anup Ingle. All rights reserved.</p>
  )}
</div>

        </div>
      </footer>
    </div>
  )
}

function HomeSection({ onContactClick, onMediaClick }: { onContactClick: () => void; onMediaClick: () => void }) {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Top Section with Profile and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Profile Photo */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/photos/profile.png?height=320&width=320"
              alt="Dr. Anup Ingle"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-slate-800 mb-2">Dr. Anup Ingle</h1>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Assistant Professor</h2>
            <p className="text-xl text-slate-600 mb-6">Department of Electronics & Telecommunication Engineering</p>
          </div>
        

          {/* Individual Skill Boxes - Smaller and Only 4 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-white rounded-md shadow-md border border-purple-200 text-center">
              <span className="font-medium text-xs">C/C++, Java and Python</span>
            </div>
            <div className="bg-white rounded-md shadow-md border border-purple-200 text-center">
              <span className="font-medium text-xs">Computer Networks and Security</span>
            </div>
            
            <div className="bg-white rounded-md shadow-md border border-purple-400 text-center">
              <span className="font-medium text-xs">Mobile Communication</span>
            </div>
            <div className="bg-white rounded-md shadow-md border border-purple-500 text-center">
              <span className="font-medium text-xs">Data Structure and Algorithm</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              className="bg-purple-700 hover:bg-purple-900 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>

            <Button
              onClick={onMediaClick}
              variant="outline"
              className="border-purple-500 text-purple-800 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-lg bg-white"
              size="lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Media Showcase
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="container mx-auto px-6 py-8  ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Dr. Anup Ingle</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Summary About Dr. Anup */}
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            Dr. Anup Ingle is a dedicated Assistant Professor in the Electronics & Telecommunication Engineering
            Department at VIIT, Pune, with over 17 years of teaching experience. He holds a PhD in Electronics and
            Communication Engineering and has made significant contributions to the field of network security, IoT
            systems, and machine learning. With 26+ research publications, 11 published books, and extensive expertise
            in computer networks and security, Dr. Ingle is committed to advancing technology education and research
            while guiding the next generation of engineers.
          </p>
        </div>

        {/* Current Position */}
        <Card className="shadow-lg border-purple-200 mb-6">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
            <CardTitle className="flex items-center text-2xl">
              <Briefcase className="w-6 h-6 mr-3 text-purple-600" />
              Current Position
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-800 mb-4">Professional Details</h3>
                <div className="space-y-3">
                  <div className="flex gap-x-4">
                    <span className="text-slate-600">Designation:</span>
                    <span className="font-medium">Assistant Professor</span>
                  </div>
                  <div className="flex gap-x-4">
                    <span className="text-slate-600">Department:</span>
                    <span className="font-medium">Electronics & Telecommunication</span>
                  </div>
                  <div className="flex gap-x-4">
                    <span className="text-slate-600">Institution:</span>
                    <span className="font-medium">VIIT, Pune</span>
                  </div>
                  <div className="flex gap-x-4">
                    <span className="text-slate-600">Date of Joining:</span>
                    <span className="font-medium">12 January 2006</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-4">Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Teaching Experience</h4>
                      <p className="text-xl font-bold text-purple-600">17.00 Years</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Industry Experience</h4>
                      <p className="text-xl font-bold text-purple-700">01.08 Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards - Moved from Home */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-purple-200">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">26+</div>
              <div className="text-slate-600 font-medium text-sm">Publications</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-purple-300">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-purple-700" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">700+</div>
              <div className="text-slate-600 font-medium text-sm">Projects</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-purple-400">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-800" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">800+</div>
              <div className="text-slate-600 font-medium text-sm">Students</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-purple-600">
            <CardContent className="p-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">11</div>
              <div className="text-slate-600 font-medium text-sm">Books</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function AcademicSection({
  activeAcademicTab,
  setActiveAcademicTab,
}: {
  activeAcademicTab: string
  setActiveAcademicTab: (tab: string) => void
}) {
  const academicTabs = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "interests", label: "Areas of Interest", icon: Brain },
    { id: "awards", label: "Awards", icon: Award },
    { id: "publications", label: "Publications", icon: FileText },
    { id: "books", label: "Books", icon: BookOpen },
    { id: "patents", label: "Patents", icon: Lightbulb },
    { id: "research", label: "Research", icon: Search },
    { id: "technical", label: "Technical Skills", icon: Code },
  ]

  return (
    
    <div className="max-w-6xl container mx-auto px-6 py-8 ">
      <div className=" text-center mb-6 ">
        <h2 className="text-4xl font-bold text-slate-800 mb-4  ">Academic Profile</h2>
        <div className=" w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Education Section (Alx1ways shown first) */}
      <Card className="shadow-lg border-purple-200 mb-6">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardTitle className="flex items-center text-2xl">
            <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
            Educational Qualifications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">PhD</h3>
              <p className="text-sm text-slate-600">Electronics and Communication Engineering</p>
              <Badge className="bg-purple-100 text-purple-700 mt-2">Doctorate</Badge>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-purple-700" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">M.E.</h3>
              <p className="text-sm text-slate-600">E&TC (Microwave Engineering)</p>
              <Badge className="bg-purple-200 text-purple-800 mt-2">Master's</Badge>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-purple-800" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">B.E.</h3>
              <p className="text-sm text-slate-600">Electronics Engineering</p>
              <Badge className="bg-purple-300 text-purple-900 mt-2">Bachelor's</Badge>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Diploma</h3>
              <p className="text-sm text-slate-600">Industrial Electronics</p>
              <Badge className="bg-purple-400 text-white mt-2">Diploma</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Navigation */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {academicTabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveAcademicTab(tab.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                  activeAcademicTab === tab.id
                    ? "bg-purple-500 text-white shadow-lg"
                    : "bg-purple-50 text-slate-600 hover:bg-purple-100 hover:text-purple-600"
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span className="font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Academic Content */}
      <div className="min-h-[400px]">
        {activeAcademicTab === "overview" && <OverviewContent />}
        {activeAcademicTab === "education" && <EducationContent />}
        {activeAcademicTab === "interests" && <AreasOfInterestContent />}
        {activeAcademicTab === "awards" && <AwardsContent />}
        {activeAcademicTab === "publications" && <PublicationsContent />}
        {activeAcademicTab === "books" && <BooksContent />}
        {activeAcademicTab === "patents" && <PatentsContent />}
        {activeAcademicTab === "research" && <ResearchContent />}
        {activeAcademicTab === "technical" && <TechnicalSkillsContent />}
      </div>
    </div>
  )
}

function MediaShowcasePage({ onBack }: { onBack: () => void }) {
   return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      {/* Header with Back Button */}
     

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12 container mx-auto px-6 py-4">
          <Button onClick={onBack} variant="outline"    className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-900 text-white font-bold hover:text-white transition-colors duration-200">
              <span>←</span>
              <span>Back</span>
            </Button>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Photos</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4">
            Explore photos from professional events and achievements.
          </p>
        </div>

        {/* Photo Grid Section */}
        <Card className="shadow-lg border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
            <CardTitle className="flex items-center text-2xl">
              <Camera className="w-6 h-6 mr-3 text-purple-600" />
              Photos
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg border-2 border-purple-200 flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={`/photos/photo${(i % 4) + 1}.png`} // Use your actual uploaded images
                    alt={`Photo ${i + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}

function ContactSection() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Information</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center text-xl">
                  <User className="w-5 h-5 mr-3 text-purple-600" />
                  Dr.Anup Ingle
                </CardTitle>
                <CardDescription>Assistant Professor, E&TC Department</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">anup.ingale@viit.ac.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">+91 9325383604</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">VIIT, Pune</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">17+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg border-purple-300">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                <CardTitle>Connect with me on social media</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <BookOpen className="w-4 h-4" />
                    <a href=""><span>Google Scholar</span></a>
                    
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Search className="w-4 h-4" />
                    <a href=""><span>Scopus</span></a>
                    
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Linkedin className="w-4 h-4" />
                    <a href="https://www.linkedin.com/in/anup-ingle-bb56a1148/"><span>LinkedIn</span></a>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Globe className="w-4 h-4" />
                    <a href=""><span>Web of Science</span></a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-lg border-purple-300">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Full Name *
                  </Label>
                  <Input id="name" placeholder="Your full name" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email Address *
                  </Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-sm font-semibold text-slate-700">
                    Mobile Number
                  </Label>
                  <Input id="mobile" type="tel" placeholder="+91 xxxxxxxxxx" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                    Message *
                  </Label>
                  <Textarea id="message" placeholder="Your message..." rows={6} className="mt-1" required />
                </div>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ContactPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      {/* Header with Back Button */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={onBack} variant="outline" className="flex items-center space-x-2 bg-transparent">
              <span>←</span>
              <span>Back</span>
            </Button>
            <h1 className="text-2xl font-bold text-slate-800">Contact Dr. Anup Ingle</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center text-xl">
                  <User className="w-5 h-5 mr-3 text-purple-600" />
                  Dr. Anup Ingle
                </CardTitle>
                <CardDescription>Assistant Professor, E&TC Department</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">anup.ingale@viit.ac.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">+91 9325383604</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">VIIT, Pune</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600">17+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg border-purple-300">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
                <CardTitle>Connect with me on social media</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <BookOpen className="w-4 h-4" />
                    <span>Google Scholar</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Search className="w-4 h-4" />
                    <span>Scopus</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <Globe className="w-4 h-4" />
                    <span>Web of Science</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-lg border-purple-300">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
                    Full Name *
                  </Label>
                  <Input id="name" placeholder="Your full name" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
                    Email Address *
                  </Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-sm font-semibold text-slate-700">
                    Mobile Number
                  </Label>
                  <Input id="mobile" type="tel" placeholder="+91 9876543210" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
                    Message *
                  </Label>
                  <Textarea id="message" placeholder="Your message..." rows={6} className="mt-1" required />
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Academic Content Components (keeping all the existing content components)
function OverviewContent() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardTitle className="flex items-center text-2xl">
            <TrendingUp className="w-6 h-6 mr-3 text-purple-600" />
            Academic Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">26+</div>
              <p className="text-slate-600">Research Publications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">11</div>
              <p className="text-slate-600">Books Published</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800 mb-2">1</div>
              <p className="text-slate-600">Patents</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-900 mb-2">17</div>
              <p className="text-slate-600">Years Experience</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg border-purple-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-purple-700" />
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-600">
              <li>• PhD in Electronics and Communication Engineering</li>
              <li>• 17+ Years of Teaching Experience</li>
              <li>• 700+ Students Guided in Projects</li>
              <li>• Multiple Industry Collaborations</li>
              <li>• CCNA Certification with 100% Score</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-purple-400">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-800" />
              Research Focus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-600">
              <li>• Network Security & Intrusion Detection</li>
              <li>• Internet of Things (IoT) Applications</li>
              <li>• Machine Learning in Networks</li>
              <li>• Cloud Computing Solutions</li>
              <li>• Smart City Technologies</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function EducationContent() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardTitle className="flex items-center text-2xl">
            <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
            Educational Journey
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  PhD in Electronics and Communication Engineering
                </h3>
                <p className="text-slate-600 mb-2">Sri Satya Sai University</p>
                <p className="text-sm text-slate-500">
                  Thesis: "FLOW-BASED PATTERN MATCHING APPROACH TO MITIGATE THE DENIAL OF SERVICE ATTACK ON COMMUNICATION NETWORK ".
                </p>
                <Badge className="bg-purple-100 text-purple-700 mt-2">Completed 2021</Badge>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-purple-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">M.E. in E&TC (Microwave Engineering)</h3>
                <p className="text-slate-600 mb-2">PICT Pune</p>
                <p className="text-sm text-slate-500">Specialized in Microwave Engineering and Communication Systems</p>
                <Badge className="bg-purple-200 text-purple-800 mt-2">Completed 2012</Badge>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-purple-800" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">B.E. in Electronics Engineering</h3>
                <p className="text-slate-600 mb-2">Dr. BAMU Aurangabad</p>
                <p className="text-sm text-slate-500">Foundation in Electronics and Communication Engineering</p>
                <Badge className="bg-purple-300 text-purple-900 mt-2">Completed 2001</Badge>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Diploma in Industrial Electronics</h3>
                <p className="text-slate-600 mb-2">Technical Education Board</p>
                <p className="text-sm text-slate-500">Technical foundation in Industrial Electronics Systems</p>
                <Badge className="bg-purple-400 text-white mt-2">Technical Diploma</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AwardsContent() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-purple-300">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
          <CardTitle className="flex items-center text-2xl">
            <Award className="w-6 h-6 mr-3 text-purple-700" />
            Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Awards Information</h3>
            <p className="text-slate-600 mb-6">
              Detailed award information is being updated. Dr. Anup Ingle has received recognition for his contributions
              to education and research.
            </p>
            <Badge className="bg-purple-100 text-purple-700">Information Being Updated</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PublicationsContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const publications = [
    {
      title: "Smart Traffic: Integrating Machine Learning, and YOLO for Adaptive Traffic Management System",
      authors: "Sakhare, N., Hedau, M., B., G., Malpure, O., Shah, T., & Ingle, A.",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      year: "2024",
      volume: "12(12s), 347–355",
    },
    {
      title: "Intelligent Conversational Agents Based Custom Question Answering System",
      authors:
        "Nitin Sakhare, Jyoti Bangare, Dr. Deepika Ajalkar, Dr. Gajanan Walunjkar, Dr. Madhuri Borawake, Dr. Anup Ingle",
      journal: "International Journal of Intelligent Systems and Applications in Engineering, IJISAE",
      year: "2023",
      volume: "11(6s), 337–344",
    },
    {
      title: "DDoS Attack Detection Algorithms Based on Pattern Classification and Machine Learning",
      authors: "Anup Ingle",
      journal: "Journal of University of Shanghai for Science and Technology",
      year: "2021",
      volume: "Volume 23, Issue 2",
    },
    {
      title: "Network Security Framework for IoT Applications",
      authors: "Dr. Anup Ingle, Research Team",
      journal: "IEEE Transactions on Network Security",
      year: "2022",
      volume: "Vol 15, Issue 3",
    },
    {
      title: "Machine Learning Approaches in Cybersecurity",
      authors: "Anup Ingle, Co-authors",
      journal: "International Conference on AI Security",
      year: "2023",
      volume: "Conference Proceedings",
    },
    {
      title: "Advanced Intrusion Detection Systems",
      authors: "Dr. Anup Ingle",
      journal: "Computer Networks Journal",
      year: "2022",
      volume: "Vol 8, Issue 2",
    },
  ]

  const years = ["all", "2024", "2023", "2022", "2021", "2020"]

  // Filter publications based on search and year
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === "all" || pub.year === selectedYear
    return matchesSearch && matchesYear
  })

  // Pagination
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPublications = filteredPublications.slice(startIndex, startIndex + itemsPerPage)

  return (
    
    <div className="flex gap-6">
      {/* Left Sidebar - Year Filter */}
      {/* <div className="w-32 flex-shrink-0">
        <Card className="shadow-lg border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Filter by Year</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div className="space-y-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setCurrentPage(1)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    selectedYear === year
                      ? "bg-purple-500 text-white shadow-md"
                      : "bg-purple-50 text-slate-600 hover:bg-purple-100"
                  }`}
                >
                  {year === "all" ? "All Years" : year}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div> */}

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-800">Research Publications</h3>
          <Badge className="bg-purple-100 text-purple-700">26+ Papers</Badge>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search publications by title, author, or journal..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 border-purple-200 focus:border-purple-500"
            />
          </div>

          
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-8">
          {paginatedPublications.map((paper, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <h4 className="font-bold text-slate-800 mb-3 leading-tight">{paper.title}</h4>
                <p className="text-purple-600 font-medium mb-3">{paper.authors}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                  <span className="font-medium">{paper.journal}</span>
                  <span>•</span>
                  <span>{paper.year}</span>
                  <span>•</span>
                  <span>{paper.volume}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-100 text-purple-700">{paper.year}</Badge>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Paper
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              Next
            </Button>
          </div>
        )}

        
      </div>
    </div>
  )
}

function BooksContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const books = [
    {
      title: "Internet of Things",
      subtitle: "Second Year Degree Course in AI & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      year: "2024",  
      image: "/Books/book1.png",
     purchaseLink: "https://www.flipkart.com/internet-things-second-year-sy-degree-artifical-intelligence-data-science-semester-4/p/itmacd4162afea0c",
    },
    {
      title: "Fundamentals of Artificial Intelligence and Machine Learning",
      subtitle: "Second Year Degree Course in AI & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/fundamentals-artificial-intelligence-machine-learning-second-year-sy-degree-ai-ml-semester-4/p/itma80b1223298ac",
      image: "/Books/book2.png",
    },
    {
      title: "Modernized IoT",
      subtitle: "Final Year Degree Course in E&TC ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/modernized-iot-final-year-degree-course-electronics-telecommunication-engineering-semester-7-sppu/p/itmad50a3e06e835",
      image: "/Books/book3.png",
    },
    {
      title: "Mobile Computing",
      subtitle: "Final Year Degree Course in E&TC ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      year: "2022",
      purchaseLink: "https://www.flipkart.com/mobile-computing-final-year-degree-course-electronics-telecommunication-engineering-semester-8-sppu/p/itma5a016621bb51?pid=9788119115044&lid=LSTBOK97881191150448JUZUP&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",
      image: "/Books/book4.png",
    },
    {
      title: "IMAGE PROCESSING",
      subtitle: "Final Year B.Tech Course In Computer Engineering (SPPU)",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/image-processing-final-year-degree-course-computer-engineering-semester-8-sppu/p/itm0022ef1f48058",
      image: "/Books/book5.png",
    },
    {
      title: "Deep Learning",
      subtitle: "Final Year B.Tech Course In Computer Engineering, Computer Science & Engineering and Information Technology ",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/deep-learning-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering-information-technology/p/itm7753b86928502",
      image:"/Books/book6.png",
    },
    {
      title: "VIDEO ANALYTICS ",
      subtitle: "B.Tech in Artificial Intelligence and Machine Learning AIML (SPPU)",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/video-analytics-third-year-ty-b-tech-artificial-intelligence-machine-learning-aiml-semester-6-sppu/p/itm06436aa3af9bc?pid=9788119115938&lid=LSTBOK97881191159380XSIPF&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",
      image: "/Books/book7.png",
    },
    {
      title: "INDUSTRIAL INTERNET OF THINGS",
      subtitle: " B.Tech in Artificial Intelligence and Data Science AI/DS  (SPPU)",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/industrial-internet-things-final-year-b-tech-artificial-intelligence-data-science-ai-ds-semester-7-sppu/p/itm957e3a6776d27?pid=9788119117857&lid=LSTBOK9788119117857BXS774&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",
      image: "/Books/book8.png",
    },
    {
      title: "WIRELESS SENSOR NETWORKS",
      subtitle: " Final Year B.Tech Course In Electronics And Telecommunication Engineering, Electronics Engineering",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/wireless-sensor-networks-dbatu-final-year-b-tech-course-electronics-telecommunication-engineering-engineering-semester-7/p/itmab4a57f5dad4e?pid=9788119116942&lid=LSTBOK9788119116942TWLSSS&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",
      image: "/Books/book9.png",
    },
    {
      title: "BLOCKCHAIN TECHNOLOGY",
      subtitle: "Final Year B.Tech Course In Computer Engineering and Computer Science & Engineering",
      publisher: "Nirali Publication",
      year: "2023",
      purchaseLink: "https://www.flipkart.com/blockchain-technology-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering/p/itm1a6aeb6c2942c?pid=9788119116249&lid=LSTBOK9788119116249Q5RX2A&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc",
      image: "/Books/book10.png",
    }
  ]

  const years = ["all", "2024", "2023", "2022", "2021", "2020"]

  // Filter books based on search and year
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === "all" || book.year === selectedYear
    return matchesSearch && matchesYear
  })

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="flex gap-6">
      {/* Left Sidebar - Year Filter
      <div className="w-32 flex-shrink-0">
        <Card className="shadow-lg border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Filter by Year</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div className="space-y-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setCurrentPage(1)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    selectedYear === year
                      ? "bg-purple-500 text-white shadow-md"
                      : "bg-purple-50 text-slate-600 hover:bg-purple-100"
                  }`}
                >
                  {year === "all" ? "All Years" : year}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div> */}

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-800">Published Books</h3>
          <Badge className="bg-purple-200 text-purple-800">11 Books</Badge>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search books by title, category, or description..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-10 border-purple-200 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedBooks.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg mb-4 flex items-center justify-center border border-purple-200 overflow-hidden">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                <CardDescription className="text-sm">{book.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="flex items-center justify-between">
                    <span className="text-slate-600">Publisher:</span>
                    <span className="font-medium">{book.publisher}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-slate-600">Year:</span>
                    <span className="font-medium">{book.year}</span>
                  </p>
                  
                  
                  <Button
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white mt-3"
                    onClick={() => window.open(book.purchaseLink, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Purchase Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

function PatentsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-800">Patents & Innovation</h3>
        <Badge className="bg-purple-300 text-purple-900">1 Patent</Badge>
      </div>

      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                DESIGN AND DEVELOPMENT OF AN ULTRASONIC VIBRATION-ASSISTED TURNING TOOLONG FIXTURE AND HARD MACHINE
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <span className="font-medium text-slate-700">Application Number:</span>
                  <p className="text-slate-600">202221004356</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Published Date:</span>
                  <p className="text-slate-600">09.12.2022</p>
                </div>
                <div>
                  <Badge className="bg-purple-200 text-purple-800">Published</Badge>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                This patent focuses on the design and development of advanced manufacturing equipment incorporating
                ultrasonic vibration technology for precision machining applications.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResearchContent() {
  return (
    <div className="space-y-8">
      {/* PhD Research */}
      <Card className="shadow-lg border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardTitle className="flex items-center text-2xl">
            <BarChart3 className="w-6 h-6 mr-3 text-purple-600" />
            PhD Research Work
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="bg-gradient-to-r from-purple-400 to-purple-400 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              "FLOW-BASED PATTERN MATCHING APPROACH TO MITIGATE THE DENIAL OF SERVICE ATTACK ON COMMUNICATION NETWORK"
            </h3>
            <p className="text-purple-100 text-lg">
              Successfully completed doctoral research focusing on advanced pattern matching techniques for network
              security and DDoS attack mitigation in communication networks.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Research Interests */}
      <Card className="shadow-lg border-purple-300">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-200">
          <CardTitle className="flex items-center text-2xl">
            <Brain className="w-6 h-6 mr-3 text-purple-700" />
            Research Interests
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Network Security Research</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-600" />
                  Denial of Services Attacks (ICMP, UDP, TCP SYN)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-600" />
                  IP Spoofing and ARP Poisoning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-600" />
                  Intrusion Detection and Prevention System (Snort)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-600" />
                  Offline and Online Network Prevention Solutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-4">Emerging Technologies</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-700" />
                  Internet of Things (IoT): Smart City Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-700" />
                  Cloud Computing and Data Mining (Weka)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-700" />
                  AI/ML/DL using Python Programming
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-700" />
                  Routing and Router Configuration
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Ultimate Research Goal
            </h3>
            <p className="text-purple-700">
              To Design Hardware Firewall to prevent Network from various attacks and develop comprehensive security
              solutions for modern communication networks.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TechnicalSkillsContent() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-purple-400">
        <CardHeader className="bg-gradient-to-r from-purple-200 to-purple-300">
          <CardTitle className="flex items-center text-2xl">
            <Code className="w-6 h-6 mr-3 text-purple-800" />
            Technical Skills & Expertise
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Network className="w-5 h-5 mr-2 text-purple-600" />
                Network Technologies
              </h3>
              <div className="space-y-2">
                <Badge className="bg-purple-100 text-purple-700 mr-2 mb-2">LAN Configuration</Badge>
                <Badge className="bg-purple-100 text-purple-700 mr-2 mb-2">Switch Configuration</Badge>
                <Badge className="bg-purple-100 text-purple-700 mr-2 mb-2">Router Configuration</Badge>
                <Badge className="bg-purple-100 text-purple-700 mr-2 mb-2">Network Programming</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-700" />
                Security Tools
              </h3>
              <div className="space-y-2">
                <Badge className="bg-purple-200 text-purple-800 mr-2 mb-2">Snort</Badge>
                <Badge className="bg-purple-200 text-purple-800 mr-2 mb-2">Weka</Badge>
                <Badge className="bg-purple-200 text-purple-800 mr-2 mb-2">hping3</Badge>
                <Badge className="bg-purple-200 text-purple-800 mr-2 mb-2">Wireshark</Badge>
                <Badge className="bg-purple-200 text-purple-800 mr-2 mb-2">Tcpdump</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-800" />
                Programming Languages
              </h3>
              <div className="space-y-2">
                <Badge className="bg-purple-300 text-purple-900 mr-2 mb-2">C Programming</Badge>
                <Badge className="bg-purple-300 text-purple-900 mr-2 mb-2">C++</Badge>
                <Badge className="bg-purple-300 text-purple-900 mr-2 mb-2">Java</Badge>
                <Badge className="bg-purple-300 text-purple-900 mr-2 mb-2">Python</Badge>
                <Badge className="bg-purple-300 text-purple-900 mr-2 mb-2">Embedded C</Badge>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div>
            <h3 className="font-semibold text-slate-800 mb-6">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">CCNA Certification</h4>
                      <p className="text-sm text-slate-600">Cisco Certified Network Associates</p>
                      <Badge className="bg-purple-100 text-purple-700 mt-1">Score: 100%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">ADCHN</h4>
                      <p className="text-sm text-slate-600">Advanced Diploma in Computer Hardware and Networking</p>
                      <Badge className="bg-purple-200 text-purple-800 mt-1">First Class (66.00%)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-slate-800 mb-4">Additional Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-600 text-white">Website Development</Badge>
              <Badge className="bg-purple-600 text-white">Internet Traffic Monitoring</Badge>
              <Badge className="bg-purple-600 text-white">Packet Analysis</Badge>
              <Badge className="bg-purple-600 text-white">Network Monitoring Tools</Badge>
              <Badge className="bg-purple-600 text-white">Data Structure & Algorithms</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AreasOfInterestContent() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-purple-400">
        <CardHeader className="bg-gradient-to-r from-purple-200 to-purple-300">
          <CardTitle className="flex items-center text-2xl">
            <Brain className="w-6 h-6 mr-3 text-purple-800" />
            Areas of Interest
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-600" />
                Network Security
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Computer Network and Security</li>
                <li>• Intrusion Detection System</li>
                <li>• Spoofing Attack</li>
                <li>• Data Networks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-700" />
                IoT & Smart Systems
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Internet of Things (IoT)</li>
                <li>• Smart City</li>
                <li>• Cloud Computing</li>
                <li>• Interactive Online Platform</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-800" />
                Programming
              </h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• C and C++ Programming</li>
                <li>• Python Programming</li>
                <li>• Java Development</li>
                <li>• Website Development</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Zap, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Star,
  Play
} from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "System Integrations",
    description: "Seamless integration of diverse systems and applications to create unified, efficient business processes.",
    features: ["Enterprise Integration", "API Development", "Data Migration", "Legacy Modernization"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Software Development",
    description: "Custom software solutions with Entity Framework (ORM) and performance optimization for current and new applications.",
    features: ["Custom Applications", "Performance Tuning", "SQL Server Optimization", "Database Profiling"]
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Azure DevOps",
    description: "Modern cloud solutions and DevOps practices to streamline your development and deployment processes.",
    features: ["CI/CD Pipelines", "Azure Integration", "Cloud Migration", "DevOps Automation"]
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Offshore Development",
    description: "Cost-effective offshore development services with dedicated teams and transparent communication.",
    features: ["Dedicated Teams", "Agile Methodology", "24/7 Support", "Quality Assurance"]
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Consulting",
    description: "Strategic technology consulting to guide your digital transformation and optimize business processes.",
    features: ["Technology Assessment", "Architecture Planning", "Digital Strategy", "Technical Due Diligence"]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "SAAS Solutions",
    description: "Scalable Software-as-a-Service platforms designed for modern business needs and cloud deployment.",
    features: ["SAAS Development", "Cloud Platforms", "Multi-tenant Architecture", "Subscription Management"]
  }
];

const products = [
  {
    name: "Appnip",
    description: "A comprehensive application platform designed to address complex business challenges with innovative solutions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    features: ["Business Process Management", "Workflow Automation", "Analytics Dashboard", "Integration APIs"]
  },
  {
    name: "Mort Manager",
    description: "Advanced mortgage management solution streamlining loan processing and financial workflows.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    features: ["Loan Processing", "Payment Tracking", "Document Management", "Compliance Reporting"]
  }
];

const technologies = [
  "React", "Node.js", "TypeScript", "Python", "AWS", "PostgreSQL", 
  "Next.js", "React Native", "Docker", "Kubernetes", "MongoDB", "GraphQL"
];

const testimonials = [
  {
    name: "Ravi Chandra",
    role: "Chief Operating Officer, TransGraph",
    content: "ERS labs is a technology-focused firm. I have engaged them to develop new modules and a solution that was needed to deploy at the client's place. I have had very positive experiences with the firm and founding team. The vast experience of the ERS Lab's in developing product platforms such as Appnip is an immense advantage.",
    rating: 5
  },
  {
    name: "Dr Naresh Yallapragada",
    role: "Group Chief Information Officer (CIO), Rainbow Children's Hospital",
    content: "ERS labs has been a valuable technology partner for us at Rainbow Hospitals. They have helped us in revamping quite a few legacy integration applications by giving them visibility and easy manageability. They are very sound technically, response time is amazing and moreover at an affordable cost.",
    rating: 5
  },
  {
    name: "Sunder Chalasani",
    role: "Director, Licence Ready Pty Ltd",
    content: "LR, an Australian government-approved driving training software, requires Artifacts for bidding in accordance with Australian transport guidelines. I appreciate ERS Labs' efforts in meeting the checklist requirements quickly and clarifying the application flow for future cost and performance optimization.",
    rating: 5
  },
  {
    name: "Ajay Sharma",
    role: "Head of India Operation / Director of Engineering, Infinite Blue",
    content: "We had a great partnership with ERS Labs. Where they help us in providing their expertise and skills for developing our NextGen user interface in ReactUI. We appreciate their help in quick time to market with quality and bringing our new exhibit to life online.",
    rating: 5
  },
  {
    name: "Alka Mehta",
    role: "Founder and CEO, PayAid Payments Pvt Ltd",
    content: "ERS Labs team is a team of hardworking dedicated professionals who make it their job to deliver your requirements with adherence to timelines. Their attention to detail is fantastic. They approach each challenge with critical thinking and are able to address all concerns. They are led by Mahipal, who is extremely practical and flexible with clear concise communication, regardless of others level of expertise.",
    rating: 5
  }
];

const teamMembers = [
  {
    name: "Mahipal Reddy Mettu",
    role: "Founder & Director",
    description: "Leading ERSLabs since 2015 with extensive experience in software development and technology consulting.",
    din: "07154329"
  },
  {
    name: "Neelima Boppana",
    role: "Director",
    description: "Co-founder with expertise in business operations and strategic development.",
    din: "07152676"
  },
  {
    name: "Srinivas Reddy Annem",
    role: "Director",
    description: "Technology expert contributing to system architecture and software solutions.",
    din: "00311516"
  },
  {
    name: "Saketh Ram Reddy Gangavaram",
    role: "Director",
    description: "Multi-industry experience with expertise in technology and business development.",
    din: "08424437"
  }
];

const stats = [
  { number: "10+", label: "Years in Business" },
  { number: "50+", label: "Projects Delivered" },
  { number: "25+", label: "Happy Clients" },
  { number: "4", label: "Core Team Members" }
];

export default function ERSLabsHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Parallax effect for hero elements
      const elements = document.querySelectorAll('[data-parallax]');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0');
        const x = (e.clientX * speed) / 100;
        const y = (e.clientY * speed) / 100;
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .gradient-text {
          background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-card:nth-child(2) {
          animation-delay: -2s;
        }
        
        .floating-card:nth-child(3) {
          animation-delay: -4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .stagger-fade-in > * {
          opacity: 0;
          transform: translateY(20px);
          animation: stagger-fade 0.6s ease-out forwards;
        }
        
        .stagger-fade-in > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-fade-in > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-fade-in > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-fade-in > *:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes stagger-fade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .morphing-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .morphing-button:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }
      `}} />
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-950/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">ERSLabs</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-glow">Services</a>
              <a href="#technologies" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-glow">Technologies</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-glow">About</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:text-glow">Contact</a>
              <Button className="morphing-button bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white border-0 px-6 py-2">
                Start Project
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/20 to-purple-950/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" data-parallax="2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" data-parallax="-1"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" data-parallax="1"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="stagger-fade-in">
            <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Professional Software Development Since 2015
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Avant-Garde
              <br />
              <span className="gradient-text">Technology Company</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're passionate about building innovative products that disrupt the industry. Since 2015, we've provided high-quality products and services, with our commitment to your needs remaining the key driving force behind our technology company.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="morphing-button bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white border-0 px-8 py-4 text-lg">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline" size="lg" className="glass-card text-white border-white/20 hover:bg-white/10 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 floating-card">
            <div className="glass-card p-4 rounded-xl">
              <Globe className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          
          <div className="absolute top-40 right-10 floating-card">
            <div className="glass-card p-4 rounded-xl">
              <Database className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div className="absolute bottom-40 left-20 floating-card">
            <div className="glass-card p-4 rounded-xl">
              <Smartphone className="w-8 h-8 text-pink-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Products developed with case studies in mind to address business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="glass-card rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-4"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Advanced</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At ERSLabs, intelligent solutions are at the heart of everything we do. We find innovative ways to use technology to help build a better future for everyone, everywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
                  <div className="mb-8 p-4 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Technology</span> Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We work with cutting-edge technologies to build robust, scalable, and future-proof solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="glass-card px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">ERSLabs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Established in 2015, ERS Labs Private Limited is a registered software development and consultancy company 
              with a proven track record in delivering custom technology solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  At ERS Labs Private Limited, we're passionate about building new innovative products that will disrupt the industry. Since 2015, we've provided high-quality products and services to all of our clients and as we grow, our commitment to your needs remains the key driving force behind our Technology Company.
                </p>
                <p className="text-lg">
                  We have a history of effectively completing software development and maintenance projects in accordance with industry standards, and we are experts in implementing Entity Framework (ORM) and performance optimization for current and new applications.
                </p>
                <p className="text-lg">
                  Our team of professionals is here to inspire you with their unique ideas and abilities. We specialize in improving SQL Server performance through profiling and tuning in accordance with industry standards.
                </p>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-8 rounded-3xl">
                <h4 className="text-2xl font-bold text-white mb-8">Company Details</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Incorporated</span>
                    <span className="font-medium text-white">December 25, 2015</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">CIN</span>
                    <span className="font-medium text-white text-sm">U72200TG2015PTC099044</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Registration</span>
                    <span className="font-medium text-white">ROC Hyderabad</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Status</span>
                    <span className="font-medium gradient-text">Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Industry</span>
                    <span className="font-medium text-white">Software Publishing & Consultancy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Address</span>
                    <span className="font-medium text-white text-sm">2nd Floor, Divyasree Solitaire, Hi-Tech City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Leadership <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet the directors driving ERSLabs forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="glass-card p-6 rounded-3xl text-center hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">{member.name}</h4>
                  <p className="text-indigo-400 font-medium mb-4 group-hover:text-white transition-colors duration-300">{member.role}</p>
                  <p className="text-sm text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{member.description}</p>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">DIN: {member.din}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Testimonials</span> By Our Clients
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We value our clients a lot and we admire their reviews. Working with the best clients and partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-6">
                    <div className="font-bold text-white text-lg group-hover:gradient-text transition-all duration-300">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Ready to Start Your <br />
            <span className="text-white/90">Next Project?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how ERSLabs can help transform your ideas into powerful software solutions that drive real business results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="morphing-button bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">ERSLabs</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                ERS Labs Private Limited (CIN: U72200TG2015PTC099044) is a software development and consultancy 
                company incorporated in 2015, based in Divyasree Solitaire, Hi-Tech City, Hyderabad, Telangana.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:text-glow">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:text-glow">Technology Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:text-glow">Custom Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:text-glow">System Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors">info@erslabs.com</li>
                <li className="hover:text-white transition-colors">2nd Floor, Divyasree Solitaire</li>
                <li className="hover:text-white transition-colors">Hi-Tech City, Madhapur</li>
                <li className="hover:text-white transition-colors">Hyderabad, Telangana</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 ERSLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
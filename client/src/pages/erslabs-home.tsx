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
  Star
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Custom web applications, business software, and enterprise solutions built with modern technologies and best practices.",
    features: ["Custom Software Development", "Web Applications", "Business Solutions", "System Integration"]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: ["React Native", "Native Development", "App Store Publishing", "Cross-Platform Solutions"]
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Backend Systems",
    description: "Enterprise backend systems, database solutions, and software architecture designed for scalability and performance.",
    features: ["Database Design", "API Development", "Microservices", "System Architecture"]
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Consultancy Services",
    description: "Software consultancy, technology advisory, and custom solutions tailored to your specific business needs.",
    features: ["Technology Consulting", "Software Architecture", "Process Optimization", "Digital Strategy"]
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
    name: "Phani Teja",
    role: "Co-Founder, PayAid",
    content: "ERS Labs team is a team of hardworking dedicated professionals who make it their job to deliver your requirements with adherence to timelines. Their attention to detail is fantastic. They approach each challenge with critical thinking and are able to address all concerns.",
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
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">ERSLabs</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Services</a>
              <a href="#technologies" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Technologies</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">Contact</a>
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                Get Quote
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              Professional Software Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build the Future with 
              <span className="text-primary block">Custom Software</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded in 2015 and based in Hyderabad's Hi-Tech City, ERSLabs is a technology company specializing in 
              software development, consultancy, and custom solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-3">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work with modern, proven technologies to build robust and scalable solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About ERSLabs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Established in 2015, ERS Labs Private Limited is a registered software development and consultancy company 
              with a proven track record in delivering custom technology solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2015 and incorporated under the Ministry of Corporate Affairs, ERSLabs has been 
                  serving clients with comprehensive software publishing, consultancy, and supply services.
                </p>
                <p>
                  Based in Cyber Towers, Hi-Tech City, Hyderabad - one of India's leading technology hubs - 
                  we leverage our strategic location and expertise to deliver world-class software solutions.
                </p>
                <p>
                  Our focus spans custom software development, business applications, system integration, 
                  and technology consulting for organizations across various industries.
                </p>
              </div>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Company Details</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Incorporated</span>
                      <span className="font-medium text-gray-900 dark:text-white">December 25, 2015</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">CIN</span>
                      <span className="font-medium text-gray-900 dark:text-white">U72200TG2015PTC099044</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Registration</span>
                      <span className="font-medium text-gray-900 dark:text-white">ROC Hyderabad</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Status</span>
                      <span className="font-medium text-primary">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Industry</span>
                      <span className="font-medium text-gray-900 dark:text-white">Software Publishing & Consultancy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the directors driving ERSLabs forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{member.description}</p>
                  <div className="text-xs text-gray-500">DIN: {member.din}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by leading organizations across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how ERSLabs can help transform your ideas into powerful software solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold">ERSLabs</span>
              </div>
              <p className="text-gray-300 mb-6">
                ERS Labs Private Limited (CIN: U72200TG2015PTC099044) is a software development and consultancy 
                company incorporated in 2015, based in Cyber Towers, Hi-Tech City, Hyderabad, Telangana.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                  <Users className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>info@erslabs.com</li>
                <li>Cyber Towers, Hi-Tech City</li>
                <li>Madhapur, Hyderabad 500081</li>
                <li>Telangana, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ERSLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
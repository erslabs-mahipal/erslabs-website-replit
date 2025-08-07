import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home,
  Calculator,
  FileText,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Play,
  Download,
  Globe,
  Smartphone
} from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Optimizing Collection Process",
    description: "Streamline payment collection activities with automated processes and real-time tracking."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Easy Implementation",
    description: "Simple integration with existing applications and ERP systems for seamless operations."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "QR Code Generation",
    description: "Generate unique QR codes for each loan collection, eliminating cash handling risks."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Role-Based Access",
    description: "Secure access control with customizable roles and permissions for different users."
  },
  {
    icon: <Calculator className="w-8 h-8 text-primary" />,
    title: "Live Dashboards",
    description: "Real-time collection reports and MIS dashboards for better decision-making and business growth."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "White Label Solution",
    description: "Fully customizable platform that can be branded with your company logo and name."
  }
];

const problems = [
  "High fees for cash deposits",
  "High volume of customer support calls due to disputed transactions",
  "Security concerns with direct cash handling by field executives",
  "Manual errors in collection posting",
  "Need for more personnel to carry out business operations",
  "Substantial operational costs",
  "Lack of transparency in payment collections",
  "Unsatisfactory customer satisfaction levels"
];

const solutions = [
  "Eliminate risk of cash loss or deposit delays",
  "Reduce human error through automated posting",
  "Live transaction transparency",
  "Absolutely no cash deposit fees",
  "Minimize overall operational costs",
  "Focus on business objectives with immediate reconciliation",
  "Higher customer satisfaction levels",
  "Reduce workforce requirements"
];

export default function MortManagerPage() {
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="mb-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 mb-6">
              <Home className="w-4 h-4 mr-2" />
              Mortgage Management Solution
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Mort Manager</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The one-stop solution for handling payment collection activities in microfinance Fintech organizations. Optimize operations turnaround time, improve reconciliations, and avoid manual mistakes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
                <Play className="w-5 h-5 mr-2" />
                View Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools designed to streamline mortgage operations and enhance lending efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
                  <div className="mb-6 p-4 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions Section */}
      <section className="py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              We Make Things <span className="gradient-text">Easier</span> for You
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Mort Manager addresses common challenges in payment collection and provides comprehensive solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problems */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-red-400 mb-6">Common Problems</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="glass-card p-4 rounded-2xl hover:bg-red-500/10 transition-all duration-300">
                    <div className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      {problem}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-green-400 mb-6">Our Solutions</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="glass-card p-4 rounded-2xl hover:bg-green-500/10 transition-all duration-300">
                    <div className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Simple integration process with your existing ERP or MOSS applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Upload", description: "Upload loan data to the system", step: "1" },
              { title: "Generate QR Code", description: "System generates unique QR codes for each loan", step: "2" },
              { title: "Scan & Pay", description: "Customers scan and make payments", step: "3" },
              { title: "Import Payments", description: "Automatic payment reconciliation", step: "4" }
            ].map((step, index) => (
              <div key={index} className="group text-center">
                <div className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <div className="glass-card p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">API Integration</h3>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Loan Creation</li>
                <li>• Dynamic QR-Code Generation</li>
                <li>• Get Payment Collections</li>
              </ul>
              <p className="text-gray-300 mt-4">Integration with your ERP or MOSS applications is simple.</p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Webhook</h3>
              <p className="text-gray-300">
                Get your live collection transactions into your ERP and MOSS applications automatically through webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Built with <span className="gradient-text">Modern Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge technologies to deliver secure, scalable, and reliable mortgage management solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Cloud Infrastructure", "Real-time Processing", "Advanced Security", "API Integration"].map((tech, index) => (
              <div key={index} className="group">
                <div className="glass-card p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {tech}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform Your <span className="gradient-text">Mortgage Operations</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join leading financial institutions who trust Mort Manager for their lending operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 px-12 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">ERSLabs</span>
              </Link>
              <p className="text-gray-300 mt-2">Mort Manager - Advanced Mortgage Solutions</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">Contact us for enterprise solutions</p>
              <p className="text-white font-semibold">info@erslabs.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
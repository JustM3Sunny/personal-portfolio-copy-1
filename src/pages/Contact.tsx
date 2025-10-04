import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen portfolio-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in text-center">
            <h1 className="text-hero portfolio-text-dark mb-8">
              Let's Work
              <br />
              Together
            </h1>
            <p className="text-xl portfolio-accent max-w-2xl mx-auto leading-relaxed">
              Ready to bring your digital vision to life? Let's discuss your project 
              and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="bg-background rounded-lg p-8 shadow-xl">
                <h2 className="text-2xl font-light portfolio-text-dark mb-6">
                  Start a Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium portfolio-text-dark">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium portfolio-text-dark">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium portfolio-text-dark">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium portfolio-text-dark">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">€5,000 - €10,000</option>
                        <option value="10k-25k">€10,000 - €25,000</option>
                        <option value="25k-50k">€25,000 - €50,000</option>
                        <option value="50k+">€50,000+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium portfolio-text-dark">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell me about your project, goals, and timeline..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send size={16} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="animate-fade-in space-y-8">
              <div>
                <h2 className="text-2xl font-light portfolio-text-dark mb-6">
                  Let's Connect
                </h2>
                <p className="text-lg portfolio-accent leading-relaxed mb-8">
                  I'm always excited to discuss new projects and opportunities. 
                  Whether you have a clear vision or just an idea, let's explore 
                  how we can bring it to life.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium portfolio-text-dark">Email</p>
                    <p className="text-sm portfolio-accent">hello@dennissnellenberg.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium portfolio-text-dark">Phone</p>
                    <p className="text-sm portfolio-accent">+31 6 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium portfolio-text-dark">Location</p>
                    <p className="text-sm portfolio-accent">Amsterdam, Netherlands</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock size={20} className="portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium portfolio-text-dark">Response Time</p>
                    <p className="text-sm portfolio-accent">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Process */}
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-lg font-medium portfolio-text-dark mb-4">
                  What happens next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={16} className="portfolio-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium portfolio-text-dark">Initial Discussion</p>
                      <p className="text-xs portfolio-accent">We'll discuss your project goals and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={16} className="portfolio-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium portfolio-text-dark">Proposal & Timeline</p>
                      <p className="text-xs portfolio-accent">I'll provide a detailed proposal with timeline and pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={16} className="portfolio-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium portfolio-text-dark">Project Kickoff</p>
                      <p className="text-xs portfolio-accent">We'll start bringing your vision to life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-light portfolio-text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg portfolio-accent">
              Common questions about working together.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary depending on complexity. A simple website takes 2-4 weeks, while complex web applications can take 8-16 weeks. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide. I'm comfortable with remote collaboration and have experience working across different time zones."
              },
              {
                question: "What's included in your development services?",
                answer: "My services include design consultation, development, testing, deployment, and post-launch support. I also provide training and documentation to help you manage your project."
              },
              {
                question: "How do you handle project communication?",
                answer: "I believe in transparent communication. We'll have regular check-ins via video calls, and I'll provide progress updates throughout the project. You'll always know where things stand."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="border-b pb-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-medium portfolio-text-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm portfolio-accent leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
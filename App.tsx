import React from 'react';
import { GraduationCap, Globe, Users, Phone, Mail, MapPin, CheckCircle, Building2, BookOpen, Award, Briefcase, Clock, Target, ChevronRight, Calendar, School } from 'lucide-react';

// Logo component
const SRLogo = () => (
  <div className="flex flex-col items-center">
    <div className="relative w-48">
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="text-4xl font-bold tracking-wider text-blue-600 flex items-center">
            <span className="mr-1">S</span>
            <span>R</span>
          </div>
          <GraduationCap className="absolute -top-4 -right-4 w-6 h-6 text-blue-600" />
        </div>
      </div>
      <div className="text-blue-600 font-bold text-sm tracking-[0.2em] text-center mt-1">
        CONSULTANCY
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <SRLogo />
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">Destinations</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Students studying abroad"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">SR Overseas Consultancy</h1>
            <p className="text-xl mb-8">Your Trusted Partner for International Education </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center">
                Get Free Consultation <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-sm">Students Placed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm">University Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-sm">Visa Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose SR Overseas?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive support throughout your journey to study abroad, from university selection to visa approval.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="Expert Counselling"
              description="Personalized guidance from experienced counsellors who understand your goals"
            />
            <ServiceCard 
              icon={<Target className="w-8 h-8 text-blue-600" />}
              title="University Selection"
              description="Strategic university recommendations based on your profile and aspirations"
            />
            <ServiceCard 
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Application Support"
              description="End-to-end assistance with university applications and documentation"
            />
            <ServiceCard 
              icon={<Globe className="w-8 h-8 text-blue-600" />}
              title="Visa Guidance"
              description="Complete support for student visa applications with high success rate"
            />
            <ServiceCard 
              icon={<Briefcase className="w-8 h-8 text-blue-600" />}
              title="Career Counselling"
              description="Professional advice on career paths and job opportunities abroad"
            />
            <ServiceCard 
              icon={<Building2 className="w-8 h-8 text-blue-600" />}
              title="Accommodation"
              description="Assistance in finding suitable and affordable accommodation"
            />
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Study Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore opportunities in world-renowned universities across these countries</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                country: 'USA',
                image: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&q=80',
                features: ['Ivy League Universities', 'Optional Practical Training', 'Research Opportunities', 'Cultural Diversity']
              },
              {
                country: 'UK',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
                features: ['Russell Group Unis', 'Graduate Route Visa', 'Quality Education', 'Historic Heritage']
              },
              {
                country: 'Canada',
                image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80',
                features: ['Post-Study Work', 'Affordable Education', 'Quality of Life', 'Immigration Options']
              },
              {
                country: 'Australia',
                image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80',
                features: ['Group of Eight Unis', 'Post-Study Work Rights', 'High Living Standards', 'Multicultural Society']
              }
            ].map((item) => (
              <div key={item.country} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.country}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{item.country}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to start your journey towards studying abroad</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Free Consultation", description: "Meet our experts to discuss your goals" },
              { icon: <School className="w-8 h-8" />, title: "University Selection", description: "Choose the best-fit universities" },
              { icon: <Calendar className="w-8 h-8" />, title: "Application Process", description: "Complete documentation and apply" },
              { icon: <GraduationCap className="w-8 h-8" />, title: "Visa Success", description: "Get your visa and fly to your dream destination" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Get in touch with us for a free consultation and start your journey today</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-500" />
                  <p>Narasaraopet, Andhra Pradesh, India</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-500" />
                  <p>+919705979799</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-500" />
                  <p>sreduoverseasconsultancy@gmail.com</p>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Office Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition">
                <option value="">Preferred Study Destination</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center">
                Send Message <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <SRLogo />
              </div>
              <p className="text-sm">SR Overseas Consultancy is your trusted partner for international education, providing expert guidance and support for students aspiring to study abroad.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Study Destinations</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Study Destinations</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Study in USA</a></li>
                <li><a href="#" className="hover:text-white transition">Study in UK</a></li>
                <li><a href="#" className="hover:text-white transition">Study in Canada</a></li>
                <li><a href="#" className="hover:text-white transition">Study in Australia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">University Admission</a></li>
                <li><a href="#" className="hover:text-white transition">Visa Assistance</a></li>
                <li><a href="#" className="hover:text-white transition">Career Counselling</a></li>
                <li><a href="#" className="hover:text-white transition">Accommodation Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 SR Overseas Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition group">
      <div className="mb-4 text-blue-600 group-hover:scale-110 transition duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;

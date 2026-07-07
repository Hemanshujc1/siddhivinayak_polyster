import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for contacting us. We will get back to you shortly.');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Contact Siddhi Vinayak Polyester for general inquiries, support, and business partnerships." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">We'd love to hear from you</p>
        </div>
      </div>

      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-primary p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-gray-300 mb-10 opacity-80">Whether you have a question about our products, pricing, or need technical support, our team is ready to answer all your questions.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Corporate Office</h4>
                      <p className="text-sm opacity-80 mb-4">123 Textile Hub, MIDC, Mumbai, Maharashtra, India - 400001</p>
                      
                      <h4 className="font-bold mb-1">Factory Unit 1 (POY/FDY)</h4>
                      <p className="text-sm opacity-80 mb-4">Plot No 45, Industrial Area Phase II, Silvassa, D&NH, India - 396230</p>
                      
                      <h4 className="font-bold mb-1">Factory Unit 2 (DTY/Spun)</h4>
                      <p className="text-sm opacity-80">Survey No 112, Vapi Industrial Estate, Gujarat, India - 396195</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-sm opacity-80">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-sm opacity-80">export@siddhivinayakpoly.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-5 bg-white/10 rounded-xl border border-white/20">
                  <h4 className="font-bold mb-2 text-accent-light">Plan a Visit or Request Samples</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    We welcome international buyers and domestic partners to visit our corporate office and factory units to verify our stringent quality controls and deal with complete assurance. You can also use this form to request product samples before placing a bulk order.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-10">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      {...register("name", { required: true })} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                      {...register("company")} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      {...register("phone")} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    {...register("subject", { required: true })} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                  {errors.subject && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    {...register("message", { required: true })} 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    placeholder="Your message details..."
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

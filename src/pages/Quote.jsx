import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Send, FileText } from 'lucide-react';

const Quote = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const location = useLocation();

  useEffect(() => {
    // Check if product ID is passed in URL query
    const params = new URLSearchParams(location.search);
    const product = params.get('product');
    if (product) {
      // Basic mapping for demo purposes
      if(product.includes('fdy')) setValue('yarnType', 'FDY');
      else if(product.includes('poy')) setValue('yarnType', 'POY');
      else if(product.includes('dty')) setValue('yarnType', 'DTY');
      else if(product.includes('aty')) setValue('yarnType', 'ATY');
      else setValue('yarnType', 'Spun');
    }
  }, [location, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    alert('Quote Request Submitted! Our sales team will contact you within 24 hours.');
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote | Siddhi Vinayak Polyester</title>
        <meta name="description" content="Request a bulk quote for our premium polyester yarns." />
      </Helmet>
      
      <div className="bg-gradient-to-br from-primary-dark to-primary py-24 text-white relative">
        {/* <ScrollThread pathsData={[
          { d: "M 50 0 C 90 30, 90 70, 50 100", color: "var(--color-accent)", strokeWidth: 4 },
          { d: "M 45 0 C 10 40, 90 60, 45 100", color: "var(--color-primary-light)", strokeWidth: 3 },
          { d: "M 55 0 C 60 20, 10 80, 55 100", color: "rgba(255,255,255,0.2)", strokeWidth: 2 }
        ]} /> */}
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Request a Quote</h1>
          <p className="text-xl text-gray-300">Get competitive pricing for bulk polyester yarn</p>
        </div>
      </div>

      <section className="py-20 bg-neutral-light min-h-[60vh] relative">
        {/* <ScrollThread pathsData={[
          { d: "M 50 0 C 10 30, 50 70, 50 100", color: "var(--color-accent)", strokeWidth: 4 },
          { d: "M 45 0 C 90 20, 10 80, 45 100", color: "var(--color-primary)", strokeWidth: 3 },
          { d: "M 55 0 C 40 40, 90 60, 55 100", color: "var(--color-primary-dark)", strokeWidth: 2 }
        ]} /> */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="bg-accent/10 p-4 rounded-full text-accent">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-dark">Quote Request Form</h2>
                <p className="text-gray-600">Please provide detailed requirements for an accurate estimate.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Company Details */}
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-4">1. Company Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input 
                      {...register("company", { required: true })} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    {errors.company && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                    <input 
                      {...register("contactName", { required: true })} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    {errors.contactName && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input 
                      type="email"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    {errors.email && <span className="text-red-500 text-xs">Valid email required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      {...register("phone", { required: true })} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                </div>
              </div>

              {/* Product Requirements */}
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-4">2. Product Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Yarn Type *</label>
                    <select 
                      {...register("yarnType", { required: true })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
                    >
                      <option value="">Select Yarn Type</option>
                      <option value="FDY">FDY (Fully Drawn Yarn)</option>
                      <option value="POY">POY (Partially Oriented Yarn)</option>
                      <option value="DTY">DTY (Draw Textured Yarn)</option>
                      <option value="ATY">ATY (Air Textured Yarn)</option>
                      <option value="Spun">Spun Polyester</option>
                      <option value="Specialty">Specialty / Other</option>
                    </select>
                    {errors.yarnType && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Denier / Count *</label>
                    <input 
                      {...register("denier", { required: true })} 
                      placeholder="e.g. 150D/48F"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    {errors.denier && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity (in kg/tons) *</label>
                    <input 
                      {...register("quantity", { required: true })} 
                      placeholder="e.g. 5000 kg"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                    {errors.quantity && <span className="text-red-500 text-xs">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Term / Incoterm</label>
                    <select 
                      {...register("incoterm")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
                    >
                      <option value="FOB">FOB (Mumbai)</option>
                      <option value="CIF">CIF</option>
                      <option value="EXW">EXW (Ex-Works)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes / End Use</label>
                <textarea 
                  {...register("notes")} 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent outline-none transition-colors"
                  placeholder="Please specify end application (e.g. weaving, knitting) and any special requirements..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-accent hover:bg-accent-light text-white font-bold py-3 px-10 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Submit Request
                </button>
              </div>

            </form>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Quote;

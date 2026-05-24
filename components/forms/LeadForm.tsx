'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  destination: z.string().min(1, 'Please select a destination'),
  travelDate: z.string().min(1, 'Please select a travel date'),
  travelers: z.string().min(1, 'Please select number of travelers'),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-teal-50 border border-teal-100 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-16 h-16 text-teal-500 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
        <p className="text-slate-600">
          Thank you for reaching out. One of our expert travel consultants will get back to you within 24 hours with a personalized quote.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-teal-600 font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClasses = "w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Full Name *</label>
          <input
            {...register('name')}
            disabled={isSubmitting}
            className={cn(inputClasses, errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Phone Number *</label>
          <input
            {...register('phone')}
            type="tel"
            disabled={isSubmitting}
            className={cn(inputClasses, errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
            placeholder="+94 7X XXX XXXX"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">Email Address (Optional)</label>
        <input
          {...register('email')}
          type="email"
          disabled={isSubmitting}
          className={cn(inputClasses, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="space-y-1 sm:col-span-1">
          <label className="text-sm font-medium text-slate-700">Destination *</label>
          <select
            {...register('destination')}
            disabled={isSubmitting}
            className={cn(inputClasses, "bg-white", errors.destination && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          >
            <option value="">Select...</option>
            {siteConfig.destinations.map(d => (
              <option key={d.slug} value={d.title}>{d.title}</option>
            ))}
            <option value="Other">Other / Custom</option>
          </select>
          {errors.destination && <p className="text-red-500 text-sm">{errors.destination.message}</p>}
        </div>

        <div className="space-y-1 sm:col-span-1">
          <label className="text-sm font-medium text-slate-700">Travel Date *</label>
          <input
            {...register('travelDate')}
            type="date"
            disabled={isSubmitting}
            min={new Date().toISOString().split('T')[0]}
            className={cn(inputClasses, errors.travelDate && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          />
          {errors.travelDate && <p className="text-red-500 text-sm">{errors.travelDate.message}</p>}
        </div>

        <div className="space-y-1 sm:col-span-1">
          <label className="text-sm font-medium text-slate-700">Travelers *</label>
          <select
            {...register('travelers')}
            disabled={isSubmitting}
            className={cn(inputClasses, "bg-white", errors.travelers && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          >
            <option value="">Select...</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3-5">3 - 5 People</option>
            <option value="6-10">6 - 10 People</option>
            <option value="10+">10+ People</option>
          </select>
          {errors.travelers && <p className="text-red-500 text-sm">{errors.travelers.message}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">Additional Details / Message (Optional)</label>
        <textarea
          {...register('message')}
          disabled={isSubmitting}
          rows={4}
          className={cn(inputClasses, "resize-none")}
          placeholder="Tell us about your preferences, special requirements, or any questions you have."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-600/70 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          'Request a Quote'
        )}
      </button>
    </form>
  );
}

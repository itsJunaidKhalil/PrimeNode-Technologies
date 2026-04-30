"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

type ServiceType =
  | "on-site-support"
  | "data-center"
  | "staging"
  | "validation"
  | "assurance"
  | "coordination"
  | "other";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: ServiceType;
  projectLocation: string;
  message: string;
}

const serviceOptions: { value: ServiceType; label: string }[] = [
  { value: "on-site-support", label: "On-site IT Support" },
  { value: "data-center", label: "Data Center Services" },
  { value: "staging", label: "Staging Services" },
  { value: "validation", label: "Pre-Deployment Validation" },
  { value: "assurance", label: "Deployment Assurance" },
  { value: "coordination", label: "Local Coordination" },
  { value: "other", label: "Multiple / Not Sure Yet" },
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClasses = clsx(
    "w-full px-4 py-3 rounded-xl border border-brand-blue/20 bg-white text-slate-900 placeholder-slate-400 text-sm",
    "focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent",
    "transition-all duration-200"
  );

  const errorClasses = "border-red-300 focus:ring-red-400";

  if (submitStatus === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12 text-center shadow-sm">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-emerald-800 mb-2">Message Sent!</h3>
        <p className="text-emerald-700 mb-6">
          Thank you for reaching out. We&apos;ll review your project details and get back to you within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-hover transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur rounded-2xl border border-brand-blue/20 p-8 shadow-[0_20px_52px_rgba(11,82,236,0.18)]">
      <h3 className="text-xl font-bold text-brand-navy mb-2">Project Enquiry</h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill in the details below and we&apos;ll prepare a tailored proposal for your China project.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="John Smith"
              className={clsx(inputClasses, errors.name && errorClasses)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              {...register("company", { required: "Company is required" })}
              placeholder="Acme IT Services"
              className={clsx(inputClasses, errors.company && errorClasses)}
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
            )}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="john@company.com"
              className={clsx(inputClasses, errors.email && errorClasses)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Phone <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+1 234 567 8900"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Service + Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              {...register("service", { required: "Please select a service" })}
              className={clsx(inputClasses, "cursor-pointer", errors.service && errorClasses)}
            >
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              Project Location <span className="text-red-500">*</span>
            </label>
            <input
              {...register("projectLocation", { required: "Location is required" })}
              placeholder="e.g. Shenzhen, Shanghai"
              className={clsx(inputClasses, errors.projectLocation && errorClasses)}
            />
            {errors.projectLocation && (
              <p className="text-red-500 text-xs mt-1">{errors.projectLocation.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message", {
              required: "Please describe your project",
              minLength: { value: 20, message: "Please provide at least 20 characters" },
            })}
            rows={5}
            placeholder="Describe your project: scope, timeline, equipment, specific requirements..."
            className={clsx(inputClasses, "resize-none", errors.message && errorClasses)}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Error State */}
        {submitStatus === "error" && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
            <AlertCircle size={18} className="text-red-500 shrink-0" />
            <p className="text-red-700 text-sm">
              Something went wrong. Please try again or email us directly at{" "}
              <a href="mailto:info@primenodetech.com" className="font-semibold underline">
                info@primenodetech.com
              </a>
            </p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="w-full bg-brand-blue text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(11,82,236,0.3)] hover:bg-brand-blue-hover hover:-translate-y-0.5"
        >
          {submitStatus === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Enquiry
            </>
          )}
        </button>

        <p className="text-slate-400 text-xs text-center">
          We respond to all enquiries within 24 business hours.
        </p>
      </form>
    </div>
  );
}

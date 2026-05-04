"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { clsx } from "clsx";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n/messages";

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

const serviceOptions: { value: ServiceType; labelKey: MessageKey }[] = [
  { value: "on-site-support", labelKey: "nav.svc.onsite" },
  { value: "data-center", labelKey: "nav.svc.datacenter" },
  { value: "staging", labelKey: "nav.svc.staging" },
  { value: "validation", labelKey: "nav.svc.validation" },
  { value: "assurance", labelKey: "nav.svc.assurance" },
  { value: "coordination", labelKey: "nav.svc.coordination" },
  { value: "other", labelKey: "form.opt.other" },
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { t } = useI18n();
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
        <h3 className="text-2xl font-bold text-emerald-800 mb-2">{t("form.successTitle")}</h3>
        <p className="text-emerald-700 mb-6">{t("form.successBody")}</p>
        <button
          type="button"
          onClick={() => setSubmitStatus("idle")}
          className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-hover transition-colors"
        >
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur rounded-2xl border border-brand-blue/20 p-8 shadow-[0_20px_52px_rgba(11,82,236,0.18)]">
      <h3 className="text-xl font-bold text-brand-navy mb-2">{t("form.title")}</h3>
      <p className="text-slate-500 text-sm mb-6">{t("form.subtitle")}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              {t("form.name")} <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name", { required: t("form.err.name") })}
              placeholder={t("form.ph.name")}
              className={clsx(inputClasses, errors.name && errorClasses)}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              {t("form.company")} <span className="text-red-500">*</span>
            </label>
            <input
              {...register("company", { required: t("form.err.company") })}
              placeholder={t("form.ph.company")}
              className={clsx(inputClasses, errors.company && errorClasses)}
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              {t("form.email")} <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email", {
                required: t("form.err.email"),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t("form.err.emailPattern"),
                },
              })}
              type="email"
              placeholder={t("form.ph.email")}
              className={clsx(inputClasses, errors.email && errorClasses)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              {t("form.phone")}{" "}
              <span className="text-slate-400 font-normal">{t("form.phoneOpt")}</span>
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder={t("form.ph.phone")}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              {t("form.service")} <span className="text-red-500">*</span>
            </label>
            <select
              {...register("service", { required: t("form.err.service") })}
              className={clsx(inputClasses, "cursor-pointer", errors.service && errorClasses)}
            >
              <option value="">{t("form.servicePlaceholder")}</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {t(opt.labelKey)}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
              {t("form.location")} <span className="text-red-500">*</span>
            </label>
            <input
              {...register("projectLocation", { required: t("form.err.location") })}
              placeholder={t("form.ph.location")}
              className={clsx(inputClasses, errors.projectLocation && errorClasses)}
            />
            {errors.projectLocation && (
              <p className="text-red-500 text-xs mt-1">{errors.projectLocation.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
            {t("form.details")} <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message", {
              required: t("form.err.message"),
              minLength: { value: 20, message: t("form.err.messageMin") },
            })}
            rows={5}
            placeholder={t("form.ph.message")}
            className={clsx(inputClasses, "resize-none", errors.message && errorClasses)}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {submitStatus === "error" && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
            <AlertCircle size={18} className="text-red-500 shrink-0" />
            <p className="text-red-700 text-sm">
              {t("form.err.generic")}{" "}
              <a href="mailto:info@primenodetech.com" className="font-semibold underline">
                info@primenodetech.com
              </a>
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="w-full bg-brand-blue text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(11,82,236,0.3)] hover:bg-brand-blue-hover hover:-translate-y-0.5"
        >
          {submitStatus === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {t("form.sending")}
            </>
          ) : (
            <>
              <Send size={18} />
              {t("form.submit")}
            </>
          )}
        </button>

        <p className="text-slate-400 text-xs text-center">{t("form.footerNote")}</p>
      </form>
    </div>
  );
}

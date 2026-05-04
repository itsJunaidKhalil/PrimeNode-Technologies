import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "@/components/pages/ServiceDetailClient";
import { services } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getServiceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} />;
}

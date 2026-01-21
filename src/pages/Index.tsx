import { Layout } from "@/components/layout/Layout";
import Hero  from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ClientsPreview } from "@/components/home/ClientsPreview";
import {CertificationsSection}  from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
     
      <CertificationsSection />
    </Layout>
  );
};

export default Index;

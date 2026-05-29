import { Hero } from "@/components/site/Hero";
import { Philosophy } from "@/components/site/Philosophy";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <NewsletterSignup />
    </>
  );
}

import ProductCard from "@/components/card";
import Editors from "@/components/editorspick";
import FeaturedPosts from "@/components/featuredproducts";
import Footer from "@/components/footer";
import TopHeader from "@/components/header";
import HeroSection from "@/components/hero";
import Summer2020Section from "@/components/summer2020";

export default function Home() {
  return (
    <div>
      <TopHeader/>
      <HeroSection/>
      <Editors/>
      <ProductCard/>
      <Summer2020Section/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
};
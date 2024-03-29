import TimelineComponent from "@/components/timeline";
import FAQ from "@/sections/FAQ";
import Landing from "@/sections/Landing";
import Footer from "@/sections/Footer";
export default function page() {
  return (
    <main className="flex  justify-center items-center flex-col">
      <Landing />

      <TimelineComponent></TimelineComponent>
      <FAQ></FAQ>
      <Footer />
    </main>
  );
}

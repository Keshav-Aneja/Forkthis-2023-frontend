import TimelineComponent from "@/components/timeline";
import FAQ from "@/sections/FAQ";
import Landing from "@/sections/Landing";

export default function page() {
  return (
    <div>
      <Landing />
      <FAQ></FAQ>
      <TimelineComponent></TimelineComponent>
    </div>
  );
}

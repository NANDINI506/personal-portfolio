import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionHeading
            number="02 — About"
            title="A bit about me"
            subtitle="Beyond the skill tags — who I am and how I approach building software."
          />

          <div className="space-y-6 lg:pt-10">
            <p className="text-[#b0b0c0] text-lg leading-relaxed">{profile.bio}</p>

            <div className="grid grid-cols-2 gap-3">
              {["Problem solver", "Team player", "Fast learner", "Detail oriented"].map(
                (trait) => (
                  <div
                    key={trait}
                    className="surface-card px-4 py-3 text-sm text-[#d4d4e0] text-center"
                  >
                    {trait}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ArrowUp, Check, Copy, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="section-wrap">
        <SectionHeading
          number="05 — Contact"
          title="Let's connect"
          subtitle="Open to internships, collaborations, and full-time roles."
          align="center"
        />

        <div className="surface-card max-w-2xl mx-auto p-8 md:p-10 text-center">
          <p className="text-[#8b8b9e] mb-8 leading-relaxed">
            Drop me an email or find me on GitHub and LinkedIn. I usually reply
            within a day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button type="button" onClick={copyEmail} className="btn-fill">
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy email
                </>
              )}
            </button>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
          </div>

          <div className="flex gap-3 justify-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl surface-card flex items-center justify-center text-[#8b8b9e] hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl surface-card flex items-center justify-center text-[#8b8b9e] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-[#6b6b80] hover:text-[#fb7185] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}

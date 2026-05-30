import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const chips = [
  'Once every 4 months',
  '8 Seats Only',
  'K3,000 per person',
  'Adults Only',
]

export default function FamilyExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.family-content > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
      gsap.fromTo(
        '.family-image-wrap',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="family-experience"
      className="relative py-24 sm:py-32 overflow-hidden bg-ysm-deepest"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="family-content">
            <div className="opacity-0">
              <span className="inline-block font-inter text-[11px] tracking-[0.15em] uppercase text-ysm-terracotta bg-ysm-terracotta/10 border border-ysm-terracotta/20 px-4 py-1.5 rounded-full mb-6">
                New · Starting September 2026
              </span>
            </div>
            <div className="opacity-0">
              <p className="section-label">EXCLUSIVE EVENT</p>
              <h2 className="section-heading mt-3">
                The YSM Brand
                <br />
                <em className="text-ysm-terracotta not-italic">Family Experience</em>
              </h2>
            </div>
            <p className="section-body mt-6 opacity-0">
              A super exclusive dinner experience every 4 months — only 8
              members, 6 PM to midnight. The ultimate dining experience: luxury,
              connection, and community.
            </p>

            <ul className="mt-5 opacity-0 grid grid-cols-2 gap-x-6 gap-y-2">
              {['Charcuterie Board', 'Full 3-Course Meal', 'Wine (Red, White, Rosé)', 'Pure Fruit Juice & Water', 'Board Games', 'Goodie Bags'].map((item) => (
                <li key={item} className="flex items-center gap-2 font-inter text-sm text-ysm-mist">
                  <span className="w-1.5 h-1.5 rounded-full bg-ysm-terracotta flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6 opacity-0">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-block bg-ysm-terracotta/15 text-ysm-clay text-[11px] font-inter font-medium tracking-wider uppercase px-4 py-1.5 rounded-full border border-ysm-terracotta/20"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0">
              <a
                href="https://wa.me/260975228899?text=Hi%20The%20YSM%20Brand,%20I%20would%20like%20to%20secure%20my%20spot%20for%20the%20YSM%20Family%20Experience%20dinner%20club"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button-primary"
              >
                Secure Your Spot
              </a>
            </div>
          </div>

          <div className="family-image-wrap opacity-0">
            <div className="relative rounded-2xl overflow-hidden border border-ysm-clay/15">
              <img
                src="/ysm-family-experience.jpg"
                alt="The YSM Brand Family Experience"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(10,8,6,0.6) 100%)',
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-playfair font-semibold text-ysm-glow text-xl">
                  K3,000 per person
                </p>
                <p className="font-inter text-ysm-mist text-sm mt-1">
                  Lusaka, Zambia · Every 4 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

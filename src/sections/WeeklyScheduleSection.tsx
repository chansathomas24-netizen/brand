import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const days = [
  { emoji: '🥗', day: 'Sunday', theme: 'Meal Prep Sundays', color: 'text-ysm-terracotta' },
  { emoji: '🌿', day: 'Monday', theme: 'Meatless Mondays', color: 'text-ysm-clay' },
  { emoji: '🥦', day: 'Wednesday', theme: 'Low Carb Wednesdays', color: 'text-ysm-clay' },
  { emoji: '🍔', day: 'Friday', theme: 'Cheat Fridays', color: 'text-ysm-terracotta' },
  { emoji: '🥞', day: 'Saturday', theme: 'Pancake & French Toast Saturdays', color: 'text-ysm-terracotta' },
]

export default function WeeklyScheduleSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.schedule-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
      gsap.fromTo(
        '.day-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.days-strip',
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0806 0%, #1a1008 50%, #0A0806 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="schedule-header opacity-0 text-center mb-16">
          <p className="section-label">YOUR WEEK, SORTED</p>
          <h2 className="section-heading mt-4">
            Every day has a
            <br />
            flavour at YSM.
          </h2>
        </div>

        <div className="days-strip grid grid-cols-1 sm:grid-cols-5 gap-4">
          {days.map((d) => (
            <div
              key={d.day}
              className="day-card opacity-0 glass-card-hover rounded-2xl p-6 text-center flex flex-col items-center gap-3 border border-ysm-clay/15 bg-ysm-earth/60"
            >
              <span className="text-4xl">{d.emoji}</span>
              <p className="font-inter font-semibold text-xs tracking-[0.12em] uppercase text-ysm-mist">
                {d.day}
              </p>
              <p className={`font-playfair font-semibold text-base leading-tight ${d.color}`}>
                {d.theme}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-inter text-sm text-ysm-mist/60 mt-10">
          All orders and bookings through WhatsApp ·{' '}
          <a
            href="https://wa.me/260975228899?text=Hi%20The%20YSM%20Brand,%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ysm-clay hover:text-ysm-terracotta transition-colors"
          >
            0975 228 899
          </a>
        </p>
      </div>
    </section>
  )
}

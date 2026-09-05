import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import ValueCard from '../components/ValueCard.jsx'
import TeamCard from '../components/TeamCard.jsx'
import EdgeFrame from '../components/EdgeFrame.jsx'
import Icon from '../components/Icons.jsx'
import CTA from '../components/CTA.jsx'
import zplMark from '../assets/zpl-mark.png'

const values = [
  { title: 'Ownership', description: 'Every project deserves our full commitment.', icon: 'ownership' },
  { title: 'Integrity', description: 'We communicate honestly and deliver responsibly.', icon: 'integrity' },
  {
    title: 'Continuous Learning',
    description: 'Technology changes every day. So do we.',
    icon: 'learning',
  },
  {
    title: 'Innovation',
    description: 'We question existing processes and search for better solutions.',
    icon: 'innovation',
  },
  {
    title: 'Long-Term Relationships',
    description: 'Great partnerships are built on trust.',
    icon: 'partnership',
    large: true,
  },
]

const highlights = [
  'Growing Portfolio',
  'Recurring Clients',
  'Multiple Business Industries',
  'Student-Led Team',
  'Real Client Projects',
  'Growing Every Month',
]

const teamMembers = [
  {
    name: 'Vishva Harini',
    role: 'Script Writing',
    description: 'Writes engaging scripts, hooks & CTAs for videos and ads.',
  },
  {
    name: 'Srinitha',
    role: 'Script Writing',
    description: 'Researches topics and refines content for clarity and impact.',
  },
  {
    name: 'Niranjan',
    role: 'Brand Ambassador',
    description: 'The face of ZeroPoint Labs — builds brand awareness and audience trust.',
  },
  {
    name: 'Hari',
    role: 'Shooting / Editing',
    description: 'Shoots and edits reels, shorts, and promotional videos.',
  },
  {
    name: 'Anjana',
    role: 'App / Web Developer (Lead)',
    description: 'Leads planning, development & delivery of web/app projects.',
  },
  {
    name: 'Santhosh',
    role: 'App / Web Developer (Lead)',
    description: 'Leads planning, development & delivery of web/app projects.',
  },
  {
    name: 'Dhivyadharshini',
    role: 'App / Web Developer',
    description: 'Learning member — assists in development and future project prep.',
  },
  {
    name: 'Sai Pooja',
    role: 'App / Web Developer',
    description: 'Learning member — assists in development and future project prep.',
  },
  {
    name: 'Jayashri',
    role: 'App / Web Developer',
    description: 'Learning member — assists in development and future project prep.',
  },
  {
    name: 'Divyadharshini',
    role: 'Sales',
    description: 'Finds and reaches out to potential clients, builds long-term relationships.',
  },
  {
    name: 'Aravind',
    role: 'Video Editor',
    description: 'Edits and polishes video content for a consistent, on-brand look.',
  },
]

export default function About() {
  return (
    <>
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Team />
      <Statistics />
      <Achievements />
      <CTA
        heading="Ready To Build Something Bigger Than A Website?"
        highlight="Website"
        text="Let's create digital solutions that help your business grow."
      />
    </>
  )
}

/* ── 1. COMPANY STORY ────────────────────────────────────────────────── */
function CompanyStory() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-radial-fade"
      />
      <div className="zp-container relative pb-20 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="zp-label text-[12.5px] sm:text-[13px]">Our Story</p>
              <h1 className="zp-h1 mt-5">
                Every Company Starts With An <span className="zp-script">Idea</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.15} className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="space-y-5">
                <p className="zp-refined">
                  ZeroPoint Labs began with a simple realization: many businesses invest in
                  digital solutions but never receive solutions designed around their actual
                  business needs.
                </p>
                <p className="zp-refined">
                  What started as freelance website development gradually evolved into a growing
                  team focused on creating meaningful digital products for businesses across
                  multiple industries.
                </p>
              </div>
              <div>
                <p className="zp-refined">
                  Today, we continue helping companies modernize their digital presence while
                  preparing for a future built around innovative technology products.
                </p>
              </div>
            </Reveal>
          </div>

          {/* abstract idea → technology → growth motif */}
          <Reveal delay={0.25} className="relative lg:col-span-5">
            <div className="relative mx-auto flex h-72 w-full max-w-sm items-center justify-center lg:h-full lg:max-h-[380px]">
              <div
                aria-hidden
                className="pointer-events-none absolute h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.20),transparent_70%)] blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-6 animate-spin-slow rounded-full border border-accent-bright/[0.16]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-14 animate-spin-slow-reverse rounded-full border border-dashed border-white/[0.10]"
              />

              <span className="pointer-events-none absolute left-[12%] top-[62%] h-2 w-2 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />
              <span className="pointer-events-none absolute right-[16%] top-[20%] h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />

              {/* central glowing "idea" mark */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-accent-bright/40 bg-white/[0.03] shadow-[0_0_50px_-8px_rgba(64,184,239,0.7)] backdrop-blur-sm">
                <Icon name="idea" size={34} className="text-accent-bright" />
              </div>

              <svg viewBox="0 0 220 220" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
                <circle cx="40" cy="170" r="3.5" fill="#40B8EF" opacity="0.85" />
                <circle cx="180" cy="45" r="3" fill="#40B8EF" opacity="0.8" />
                <path
                  d="M40 170 Q100 150 110 110"
                  stroke="rgba(64,184,239,0.3)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  fill="none"
                />
                <path
                  d="M180 45 Q140 70 112 108"
                  stroke="rgba(64,184,239,0.3)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  fill="none"
                />
              </svg>

              <div className="pointer-events-none absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-6 text-[10px] font-semibold uppercase tracking-widest2 text-ink-muted">
                <span className="zp-script text-[13px] normal-case tracking-normal">Idea</span>
                <span>Technology</span>
                <span className="zp-script text-[13px] normal-case tracking-normal">Growth</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── 2 & 3. MISSION / VISION ─────────────────────────────────────────── */
function MissionVision() {
  return (
    <section className="zp-section border-t border-hairline bg-bg-deep/60">
      <div className="zp-container grid gap-6 sm:grid-cols-2 sm:gap-7">
        <Reveal className="zp-glass zp-corner-tl p-8 sm:p-11">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-white/[0.03] text-accent-bright">
            <Icon name="compass" size={18} />
          </span>
          <p className="zp-label mt-7 text-[13px] font-bold sm:text-sm">Mission</p>
          <p className="font-elegant relative mt-4 text-[17px] font-light leading-[1.85] text-ink-primary sm:text-[18.5px]">
            To build reliable digital solutions that help businesses operate smarter, grow
            faster, and create better customer experiences.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="zp-glass zp-corner-br p-8 sm:p-11">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-white/[0.03] text-accent-bright">
            <Icon name="eye" size={18} />
          </span>
          <p className="zp-label mt-7 text-[13px] font-bold sm:text-sm">Vision</p>
          <p className="font-elegant relative mt-4 text-[17px] font-light leading-[1.85] text-ink-primary sm:text-[18.5px]">
            To transform ZeroPoint Labs into a technology company that builds impactful software
            products while empowering businesses through innovation and practical engineering.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ── 4. CORE VALUES ──────────────────────────────────────────────────── */
function CoreValues() {
  return (
    <section className="zp-section">
      <div className="zp-container">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="zp-label">What Drives Us</p>
          <h2 className="zp-h2 mt-4">Core Values</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <ValueCard
              key={v.title}
              index={i + 1}
              title={v.title}
              description={v.description}
              icon={v.icon}
              large={v.large}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5. TEAM ──────────────────────────────────────────────────────────── */
function Team() {
  return (
    <section className="zp-section border-t border-hairline bg-bg-deep/60">
      <div className="zp-container">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="zp-label">Our Team</p>
          <h2 className="zp-h2 mt-4">
            A Team Built Around <span className="zp-script">Growth</span>
          </h2>
          <p className="zp-refined mx-auto mt-4 text-center">
            ZeroPoint Labs is powered by a collaborative team of developers, designers,
            marketers, editors, strategists and creative thinkers working together toward one
            shared vision.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(60%_80%_at_50%_50%,rgba(64,184,239,0.20),transparent_75%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[24px] border border-accent-bright/30 bg-bg-panel/40 shadow-[0_40px_100px_-30px_rgba(64,184,239,0.45)]">
              <img
                src="/team-photo.jpg"
                alt="ZeroPoint Labs Team"
                className="aspect-[16/9] w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/[0.08]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_0_0_0_1px_rgba(64,184,239,0.18)]"
              />
            </div>
          </div>
          <p className="mt-5 text-center text-[13px] font-medium uppercase tracking-widest2 text-ink-muted">
            The ZeroPoint Labs Team
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 6. STATISTICS (qualitative) ─────────────────────────────────────── */
function Statistics() {
  return (
    <section className="zp-section">
      <div className="zp-container">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="zp-label text-[12.5px] sm:text-[13px]">Where We Stand</p>
          <h2 className="zp-h2 mt-4">
            <span className="text-ink-primary">Momentum, </span>
            <span className="text-accent-bright">Not Metrics</span>
            <span className="text-ink-primary"> We&rsquo;d Have To Fake</span>
          </h2>
        </Reveal>

        <EdgeFrame className="mt-14">
          {/* connected-node trajectory — no invented numbers, just the approved
              qualitative points laid out as a company progress path */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent-bright/40 via-white/10 to-transparent sm:block"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="zp-glass relative flex items-center gap-4 px-6 py-6"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-bright/40 text-[11px] font-semibold text-accent-bright">
                    {i + 1}
                  </span>
                  <p className="font-elegant text-[14px] font-normal text-ink-primary">{h}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </EdgeFrame>
      </div>
    </section>
  )
}

const capabilities = [
  { label: 'Website Development', icon: 'layers' },
  { label: 'Business Software', icon: 'node' },
  { label: 'CRM Systems', icon: 'partnership' },
  { label: 'Digital Marketing', icon: 'growth' },
  { label: 'Social Media Growth', icon: 'target' },
]

/* ── 7. ACHIEVEMENTS ─────────────────────────────────────────────────── */
function Achievements() {
  return (
    <section className="zp-section border-t border-hairline bg-bg-deep/60">
      <div className="zp-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="zp-label">What We&rsquo;ve Delivered</p>
          <h2 className="zp-h2 mt-4">Achievements</h2>
          <p className="zp-refined mx-auto mt-6 text-center">
            Successfully delivered websites, business software, CRM systems, digital marketing
            campaigns and social media growth strategies for businesses across different sectors.
          </p>
        </Reveal>

        {/* capability map — central mark with connected capability nodes */}
        <Reveal delay={0.15} className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(64,184,239,0.08),transparent_70%)]"
          />
          <div className="relative flex flex-col items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-bright/40 bg-white/[0.03] shadow-glow-sm">
              <img src={zplMark} alt="ZeroPoint Labs" className="h-8 w-8 object-contain" />
            </span>
            <span className="mt-3 text-[10.5px] font-semibold uppercase tracking-widest2 text-ink-muted">
              ZeroPoint Labs
            </span>

            <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-5">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="zp-glass flex flex-col items-center gap-3 px-4 py-6 text-center"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-white/[0.03] text-ink-secondary">
                    <Icon name={c.icon} size={16} />
                  </span>
                  <p className="text-[12.5px] font-medium leading-snug text-ink-primary">
                    {c.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

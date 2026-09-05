import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import ResultCard from '../components/ResultCard.jsx'
import WhyCard from '../components/WhyCard.jsx'
import EdgeFrame from '../components/EdgeFrame.jsx'
import HeroVisual from '../components/HeroVisual.jsx'
import Icon from '../components/Icons.jsx'

const problems = [
  { title: 'Struggle to generate leads', icon: 'leads' },
  { title: 'Lose customers due to outdated systems', icon: 'outdated' },
  { title: 'Lack of professional digital presence', icon: 'presence' },
]

const whyPoints = [
  {
    title: 'Built Around Results',
    description: 'We measure success through business outcomes rather than just completed projects.',
    icon: 'target',
  },
  {
    title: 'Modern Technology',
    description: 'Fast. Secure. Scalable. Future-ready.',
    icon: 'layers',
  },
  {
    title: 'Founder-Led Execution',
    description: 'Every project is personally reviewed before delivery.',
    icon: 'ownership',
  },
  {
    title: 'Long-Term Partnership',
    description: "Our relationship doesn't end when your website goes live.",
    icon: 'partnership',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <WhyChooseUs />
      <Results />
      <Insights />
      <FinalCTA />
    </>
  )
}

/* ── 1. HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:64px_64px] opacity-[0.25] [mask-image:radial-gradient(60%_50%_at_50%_0%,#000_0%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.10),transparent_70%)] blur-3xl"
      />
      {/* subtle permanent ambient glow — sits behind the hero visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-28 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.14),transparent_70%)] blur-[90px] opacity-70"
      />

      <div className="zp-container relative grid items-center gap-14 pb-24 sm:pb-32 lg:grid-cols-12 lg:gap-8 lg:pb-40">
        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="zp-eyebrow"
          >
            Digital Systems &amp; Software
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="zp-h1 mt-5"
          >
            Building Digital Systems That Power Business{' '}
            <span className="zp-script">Growth</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl space-y-4"
          >
            <p className="zp-refined">
              At ZeroPoint Labs, we don&rsquo;t just build websites&mdash;we engineer digital
              experiences that help businesses attract customers, streamline operations, and scale
              confidently.
            </p>
            <p className="zp-refined">
              From business websites and custom software to SEO, branding, and digital marketing,
              every solution is designed with measurable business outcomes in mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="contact" className="zp-btn-primary">
              Start Your Project
            </a>
            <a href="#work" className="zp-btn-secondary">
              View Our Work
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

/* ── 2. COMPANY INTRODUCTION ─────────────────────────────────────────── */
function CompanyIntro() {
  return (
    <section className="zp-section border-t border-hairline">
      <div className="zp-container">
        <Reveal>
          <p className="zp-eyebrow">The Problem We Solve</p>
          <h2 className="zp-h2 mt-4 max-w-2xl">
            Technology That <span className="zp-script">Solves</span> Business Problems.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* problem → solution flow */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-3">
              {problems.map((p, i) => (
                <div key={p.title} className="flex flex-1 items-center gap-3 sm:contents">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3 }}
                    className="zp-glass flex flex-1 items-center gap-3 self-stretch rounded-2xl border-accent/10 p-5 shadow-[0_0_36px_-20px_rgba(64,184,239,0.55)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-white/[0.03] text-accent-bright">
                      <Icon name={p.icon} size={15} />
                    </span>
                    <p className="text-[12.5px] font-medium leading-snug text-ink-primary">
                      {p.title}
                    </p>
                  </motion.div>
                  {i < problems.length - 1 && (
                    <span className="hidden shrink-0 text-ink-muted sm:flex sm:items-center">
                      <Icon name="arrowRight" size={14} />
                    </span>
                  )}
                </div>
              ))}
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex shrink-0 items-center justify-center self-center text-accent-bright"
              >
                <Icon name="arrowRight" size={18} />
              </motion.span>
            </div>
          </div>

          <Reveal delay={0.18} className="space-y-5 lg:col-span-5">
            <p className="zp-refined">
              Every business has unique challenges. Some struggle to generate leads. Some lose
              customers because of outdated systems. Others simply lack a professional digital
              presence.
            </p>
            <p className="zp-refined">
              ZeroPoint Labs exists to solve those challenges through thoughtfully designed
              technology. We partner with businesses to build digital products that create
              long-term value&mdash;not temporary trends.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── 4. WHY CHOOSE US ────────────────────────────────────────────────── */
function WhyChooseUs() {
  return (
    <section className="zp-section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_0%,rgba(64,184,239,0.10),transparent_70%)] blur-3xl"
      />
      <div className="zp-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="zp-label">Why Choose Us</p>
          <h2 className="zp-h2 mt-5">
            We Think Like Business <span className="zp-script">Owners</span>.
          </h2>
          <p className="zp-refined mx-auto mt-6 max-w-lg text-center">
            Technology should support your business&mdash;not complicate it. Every project
            starts by understanding your goals before a single design or line of code is
            created.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {whyPoints.map((point, i) => (
            <WhyCard
              key={point.title}
              index={i + 1}
              title={point.title}
              description={point.description}
              icon={point.icon}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5. RESULTS ───────────────────────────────────────────────────────── */
function Results() {
  return (
    <section className="zp-section relative overflow-hidden border-t border-hairline bg-bg-deep/60">
      {/* subtle permanent ambient glow behind the proof grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.07),transparent_70%)] blur-[100px]"
      />
      <div className="zp-container relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="zp-label">Proof, Not Promises</p>
          <h2 className="zp-h2 mt-5">Results That Speak For Themselves</h2>
        </Reveal>

        <EdgeFrame className="mt-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <ResultCard
              value="14,500+"
              label="YouTube Subscribers Generated"
              sublabel="Within just 11 Shorts"
              icon="growth"
            />
            <ResultCard
              value="50+"
              label="Qualified Leads Generated Through Meta Ads"
              sublabel="In One Month"
              icon="target"
              delay={0.08}
            />
            <ResultCard
              value="CRM · Billing"
              label="Business Websites &amp; Automation"
              sublabel="Successfully Delivered"
              icon="layers"
              delay={0.16}
            />
            <ResultCard
              value="Confidential"
              label="Some Projects Remain Private"
              sublabel="To respect our clients"
              icon="ownership"
              delay={0.24}
            />
          </div>
        </EdgeFrame>
      </div>
    </section>
  )
}

/* ── 6. LATEST BLOG / INSIGHTS ───────────────────────────────────────── */
const insightTopics = [
  { icon: 'network', label: 'Technology' },
  { icon: 'marketing', label: 'Marketing' },
  { icon: 'seo', label: 'SEO' },
  { icon: 'growth', label: 'Business Growth' },
]

function Insights() {
  return (
    <section className="zp-section relative overflow-hidden border-t border-hairline">
      {/*
        NOTE FOR INTEGRATION: no article data was provided, so this is a
        compact editorial placeholder — sized and styled to slot in the
        team's Blog page/data source later without needing a rebuild.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-radial-fade opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:64px_64px] opacity-[0.12] [mask-image:radial-gradient(55%_45%_at_50%_0%,#000_0%,transparent_100%)]"
      />

      <div className="zp-container relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="zp-label">Latest Insights</p>
          <h2 className="zp-h2 mt-5">
            Insights, Ideas &amp; <span className="text-accent-bright">Digital Growth</span>
          </h2>
          <p className="zp-refined mx-auto mt-5 max-w-lg text-center">
            Articles that help business owners understand technology, marketing, branding and
            digital transformation.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {insightTopics.map((t, i) => (
            <motion.div
              key={t.icon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative flex aspect-square flex-col items-center justify-center gap-4 overflow-hidden rounded-[20px] border border-white/[0.09] bg-bg-panel/45 p-4 shadow-[0_0_40px_-26px_rgba(64,184,239,0.55)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent-bright/30 hover:shadow-[0_32px_80px_-30px_rgba(64,184,239,0.45)]"
            >
              {/* ambient illustration glow — visible by default, warms further on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_35%,rgba(64,184,239,0.10),transparent_75%)] opacity-100 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.04] text-accent-bright/80 transition-all duration-500 group-hover:border-accent-bright/50 group-hover:text-accent-bright group-hover:shadow-[0_0_24px_-6px_rgba(64,184,239,0.65)]">
                <Icon name={t.icon} size={20} />
              </span>
              <span className="relative text-[12px] font-semibold uppercase tracking-wider text-ink-secondary transition-colors duration-500 group-hover:text-ink-primary">
                {t.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 7. FINAL CTA ─────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="zp-section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-fade opacity-50"
      />
      <div className="zp-container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-bg-panel/45 px-6 py-16 text-center shadow-[0_0_70px_-28px_rgba(64,184,239,0.45)] backdrop-blur-xl sm:px-12 sm:py-20"
        >
          {/* deep ambient glow orbs — permanent, subtle depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.16),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(64,184,239,0.12),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-[0.08] [mask-image:radial-gradient(55%_55%_at_50%_40%,#000_0%,transparent_100%)]"
          />

          {/* subtle floating light particles */}
          <span className="pointer-events-none absolute left-[16%] top-[24%] h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />
          <span className="pointer-events-none absolute right-[18%] top-[32%] h-1 w-1 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />
          <span className="pointer-events-none absolute left-[28%] bottom-[22%] h-1 w-1 animate-pulse-glow rounded-full bg-accent-bright shadow-[0_0_10px_2px_rgba(64,184,239,0.7)]" />

          {/* corner brackets for the same premium UI-frame language used elsewhere */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-5 top-5 h-4 w-4 border-l border-t border-accent-bright/40"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 border-b border-r border-accent-bright/40"
          />

          <h2 className="zp-h2 relative mx-auto max-w-2xl">
            Ready To Build Something Bigger Than A <span className="zp-script">Website</span>?
          </h2>
          <p className="zp-refined relative mx-auto mt-6 max-w-lg text-center">
            Let&rsquo;s create digital solutions that help your business grow.
          </p>
          <div className="relative mt-9">
            <a href="#contact" className="zp-btn-primary">
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

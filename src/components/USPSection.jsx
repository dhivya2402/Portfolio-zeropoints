import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: "website",
    number: "01",
    title: "Build a Powerful Digital Presence",
    description:
      "Create a modern, responsive website that communicates your brand and turns visitors into customers.",
    result: "Web Development",
    tag: "Digital Presence",
  },
  {
    id: "automation",
    number: "02",
    title: "Make Work Smarter",
    description:
      "Simplify repetitive tasks, improve workflows, and help your business operate more efficiently.",
    result: "Software & Automation",
    tag: "Smart Operations",
  },
  {
    id: "ai",
    number: "03",
    title: "Turn Ideas into Intelligent Solutions",
    description:
      "Explore AI-powered applications and intelligent digital experiences built around your goals.",
    result: "AI & Intelligent Solutions",
    tag: "Future Ready",
  },
  {
    id: "security",
    number: "04",
    title: "Build with Confidence",
    description:
      "Strengthen digital security and develop technology solutions with reliability and trust in mind.",
    result: "Cybersecurity & Secure Development",
    tag: "Digital Trust",
  },
];

const benefits = [
  {
    number: "01",
    title: "Purpose-Driven",
    description: "Every solution begins with understanding your actual goals.",
  },
  {
    number: "02",
    title: "Built Around You",
    description: "Technology choices shaped around your unique requirements.",
  },
  {
    number: "03",
    title: "Growth-Focused",
    description: "Solutions designed to support your next stage of growth.",
  },
];

export default function USPSection() {
  const [selected, setSelected] = useState("website");

  const activeSolution = solutions.find(
    (solution) => solution.id === selected
  );

  return (
    <section
      id="usp"
      className="relative overflow-hidden bg-[#211A15] px-6 py-24 text-[#F3EDE0] md:px-12 lg:px-20"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#A88960]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#A88960]">
            The ZeroPoint Advantage
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Your ambition.
            <br />
            <span className="font-normal italic text-[#C9B69B]">
              Our innovation.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#C9B69B] md:text-lg">
            Every challenge has an opportunity hidden inside it. We help you
            find the right technology, turn ideas into practical solutions,
            and take your next step with confidence.
          </p>
        </motion.div>

        {/* Interactive Growth Finder */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#A88960]/25 bg-[#30251E] p-6 md:p-9"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#A88960]">
                  Interactive Experience
                </p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  ZeroPoint Growth Finder
                </h3>
              </div>

              <span className="text-3xl text-[#A88960]" aria-hidden="true">
                ↗
              </span>
            </div>

            <p className="mb-6 leading-7 text-[#C9B69B]">
              What would you like to achieve?
            </p>

            <div className="space-y-3">
              {solutions.map((solution) => {
                const isSelected = selected === solution.id;

                return (
                  <button
                    key={solution.id}
                    type="button"
                    onClick={() => setSelected(solution.id)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-[#A88960] bg-[#A88960]/10"
                        : "border-[#C9B69B]/15 hover:border-[#A88960]/60"
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        isSelected ? "text-[#A88960]" : "text-[#C9B69B]/60"
                      }`}
                    >
                      {solution.number}
                    </span>

                    <span className="flex-1 text-sm font-medium leading-6 md:text-base">
                      {solution.title}
                    </span>

                    <span
                      className={`text-xl transition-transform ${
                        isSelected
                          ? "translate-x-1 text-[#A88960]"
                          : "text-[#C9B69B]/50"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Recommended solution */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#A88960]/25 bg-[#F3EDE0] p-7 text-[#211A15] md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <span className="inline-block rounded-full border border-[#A88960]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#806543]">
                  {activeSolution.tag}
                </span>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-[#806543]">
                  Your Potential Solution
                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  {activeSolution.result}
                </h3>

                <p className="mt-5 leading-8 text-[#5D4C3C]">
                  {activeSolution.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 border-t border-[#A88960]/30 pt-6">
              <p className="text-sm leading-7 text-[#5D4C3C]">
                Great solutions start with the right conversation. Let's
                explore what is possible for you.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#211A15] px-6 py-4 text-sm font-semibold text-[#F3EDE0] transition hover:bg-[#493629]"
              >
                Let's Build Something
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* What makes ZeroPoint different */}
        <div className="mt-20 grid gap-8 border-t border-[#A88960]/25 pt-10 md:grid-cols-3 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="text-sm text-[#A88960]">
                {benefit.number}
              </span>

              <h4 className="mt-4 text-xl font-semibold">
                {benefit.title}
              </h4>

              <p className="mt-3 max-w-sm leading-7 text-[#C9B69B]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


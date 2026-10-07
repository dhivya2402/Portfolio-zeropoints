
import { motion } from 'framer-motion'

export default function TeamCard({ member, delay = 0 }) {
  const imagePosition = member.focus
    ? `${member.focus.x * 100}% ${member.focus.y * 100}%`
    : '50% 50%'

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      <div
        className="
          group relative mx-auto
          h-[330px] w-full max-w-[280px]
          overflow-hidden
          rounded-[30px]
          border border-white/[0.08]
          bg-bg-panel/60
          shadow-[0_25px_60px_-25px_rgba(64,184,239,0.25)]
          transition-all duration-500 ease-in-out
          hover:rounded-tl-[55px]
        "
      >

        {/* ================= IMAGE ================= */}
        <div
          className="
            absolute
            left-[3px] top-[3px]
            z-[1]
            h-[calc(100%-6px)]
            w-[calc(100%-6px)]
            overflow-hidden
            rounded-[27px]
            border-0
            transition-all duration-500
            ease-in-out
            group-hover:left-[10px]
            group-hover:top-[10px]
            group-hover:h-[100px]
            group-hover:w-[100px]
            group-hover:rounded-full
            group-hover:border-[6px]
            group-hover:border-accent-bright
            group-hover:shadow-[0_5px_20px_rgba(64,184,239,0.25)]
          "
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="
                h-full w-full
                object-cover
                scale-100
                transition-all duration-700
                ease-in-out
                group-hover:scale-[1.7]
              "
              style={{
                objectPosition: imagePosition,
              }}
            />
          ) : (
            <div
              className="
                flex h-full w-full
                items-center justify-center
                bg-gradient-to-br
                from-accent-bright/20
                to-bg-deep
              "
            >
              <span className="text-4xl font-semibold text-accent-bright">
                {member.name?.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* ================= BOTTOM CONTENT ================= */}
        <div
          className="
            absolute
            bottom-[3px]
            left-[3px]
            right-[3px]
            top-[78%]
            z-[2]
            overflow-hidden
            rounded-[27px]
            bg-[#071522]/95
            shadow-[rgba(64,184,239,0.12)_0px_5px_12px_0px_inset]
            backdrop-blur-md
            transition-all duration-500
            ease-[cubic-bezier(0.645,0.045,0.355,1)]
            
            group-hover:top-[24%]
            group-hover:rounded-[75px_27px_27px_27px]
          "
        >

          {/* ================= CONTENT ================= */}
          <div
            className="
              absolute
              bottom-0
              left-6
              right-6
              h-[210px]
            "
          >

            {/* NAME */}
            <span
              className="
                absolute
                left-0
                top-[2px]
                block
                text-[17px]
                font-bold
                text-white
                transition-all duration-500
                group-hover:text-[20px]
              "
            >
              {member.name}
            </span>

            {/* ROLE */}
            <span
              className="
                absolute
                left-0
                top-[30px]
                block
                text-[9px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-accent-bright
                transition-all duration-500
                group-hover:top-[38px]
                group-hover:text-[10px]
              "
            >
              {member.role}
            </span>

            {/* DESCRIPTION */}
            <div
              className="
                absolute
                left-0
                right-0
                top-[68px]
                opacity-0
                transition-all duration-500
                group-hover:opacity-100
              "
            >
              <ul className="space-y-2">
                {member.lines?.map((line, index) => (
                  <li
                    key={index}
                    className="
                      flex gap-2
                      text-[11.5px]
                      leading-[1.45]
                      text-ink-secondary
                    "
                  >
                    <span
                      className="
                        mt-[5px]
                        h-1 w-1
                        shrink-0
                        rounded-full
                        bg-accent-bright
                      "
                    />

                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ================= CARD GLOW ================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[4]
            rounded-[30px]
            ring-1
            ring-inset
            ring-white/[0.05]
            transition-all duration-500
            group-hover:ring-accent-bright/20
          "
        />

      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]
const sans = "'Helvetica Neue', Arial, sans-serif"

const letters = [
  { char: 'Z', y: 152 },
  { char: 'P', y: 217 },
  { char: 'L', y: 282 },
]

/**
 * Animated ZeroPoint Labs logo (pure SVG + framer-motion, no image file).
 * Sequence: ring draws in -> inner pill fades in -> Z / P / L drop in ->
 * wordmark, divider and tagline reveal -> gentle float + glow loop.
 */
export default function ZeroPointLogo({ className = '', showText = true }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -8, 0],
        filter: [
          'drop-shadow(0 0 18px rgba(168,137,96,0.22))',
          'drop-shadow(0 0 34px rgba(168,137,96,0.45))',
          'drop-shadow(0 0 18px rgba(168,137,96,0.22))',
        ],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3.2 }}
    >
      <svg
        viewBox={showText ? '0 0 400 500' : '0 10 400 370'}
        role="img"
        aria-label="ZeroPoint Labs — Code. Create. Elevate."
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id="zp-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8D5AE" />
            <stop offset="45%" stopColor="#BFA070" />
            <stop offset="100%" stopColor="#8A6F45" />
          </linearGradient>
          <linearGradient id="zp-gold-text" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E3CFA6" />
            <stop offset="100%" stopColor="#B08C57" />
          </linearGradient>
          <linearGradient id="zp-shade" x1="0.2" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="zp-inner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#120d0a" />
            <stop offset="100%" stopColor="#241a13" />
          </linearGradient>
        </defs>

        {/* outer ribbon ring — draws itself */}
        <motion.rect
          x="131.5"
          y="52"
          width="137"
          height="288"
          rx="68.5"
          fill="none"
          stroke="url(#zp-gold)"
          strokeWidth="48"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.9, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* fold shading on the ribbon (gives the twisted-band depth) */}
        <motion.rect
          x="131.5"
          y="52"
          width="137"
          height="288"
          rx="68.5"
          fill="none"
          stroke="url(#zp-shade)"
          strokeWidth="48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* inner dark pill with a thin gold lip */}
        <motion.rect
          x="156"
          y="76"
          width="88"
          height="240"
          rx="44"
          fill="url(#zp-inner)"
          stroke="#C9A76E"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: '200px 196px' }}
          transition={{ duration: 0.9, delay: 1.3, ease }}
        />

        {/* light sweep running along the ring */}
        <motion.rect
          x="107.5"
          y="28"
          width="185"
          height="336"
          rx="92.5"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.5"
          strokeWidth="2"
          pathLength="1"
          strokeDasharray="0.07 0.93"
          initial={{ strokeDashoffset: 0, opacity: 0 }}
          animate={{ strokeDashoffset: [0, -1], opacity: 0.8 }}
          transition={{
            strokeDashoffset: { duration: 5, repeat: Infinity, ease: 'linear', delay: 2.2 },
            opacity: { duration: 1, delay: 2.2 },
          }}
        />

        {/* Z / P / L */}
        {letters.map((l, i) => (
          <motion.g
            key={l.char}
            initial={{ opacity: 0, y: -26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7 + i * 0.22, ease }}
          >
            <text
              x="200"
              y={l.y}
              textAnchor="middle"
              fontSize="58"
              fontWeight="800"
              fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
              fill="url(#zp-gold-text)"
            >
              {l.char}
            </text>
          </motion.g>
        ))}

        {showText && (
          <>
            {/* wordmark */}
            <motion.g
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2.5, ease }}
            >
              <text
                x="200"
                y="422"
                textAnchor="middle"
                fontSize="26"
                letterSpacing="6"
                fontFamily={sans}
                fill="url(#zp-gold-text)"
              >
                ZEROPOINT LABS
              </text>
            </motion.g>

            {/* divider with diamond */}
            <motion.g
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              style={{ transformOrigin: '200px 448px' }}
              transition={{ duration: 0.9, delay: 2.8, ease }}
            >
              <line x1="80" y1="448" x2="186" y2="448" stroke="#A88960" strokeOpacity="0.7" />
              <line x1="214" y1="448" x2="320" y2="448" stroke="#A88960" strokeOpacity="0.7" />
              <rect
                x="196"
                y="444"
                width="8"
                height="8"
                fill="#C9A76E"
                transform="rotate(45 200 448)"
              />
            </motion.g>

            {/* tagline */}
            <motion.text
              x="200"
              y="481"
              textAnchor="middle"
              fontSize="13"
              letterSpacing="4"
              fill="#B8955A"
              fontFamily={sans}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 3.1 }}
            >
              CODE. CREATE. ELEVATE.
            </motion.text>
          </>
        )}
      </svg>
    </motion.div>
  )
}

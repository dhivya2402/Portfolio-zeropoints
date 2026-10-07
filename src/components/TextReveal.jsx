import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * TextReveal
 * ----------
 * Adds a masked word-by-word reveal to the page's EXISTING headings
 * (.zp-h1 / .zp-h2). It renders nothing and edits no JSX or text: on mount
 * it wraps each word of the heading's existing text nodes in a clipping
 * span (nested markup such as <span class="zp-script"> is preserved), then
 * a ScrollTrigger slides the words up into place once the heading enters
 * view. On unmount it restores the original markup.
 *
 * Usage: drop <TextReveal /> once inside a page component.
 * Respects prefers-reduced-motion (does nothing).
 */
const SELECTOR = '.zp-h1, .zp-h2'
const HAS_WORD_CHAR = /[\p{L}\p{N}]/u

function splitTextNodes(root, words) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)

  nodes.forEach((node) => {
    const text = node.nodeValue
    if (!text || !text.trim()) return
    const frag = document.createDocumentFragment()
    // keep whitespace as plain text so wrapping behaves exactly as before
    text.split(/(\s+)/).forEach((token) => {
      if (!token) return
      if (/^\s+$/.test(token) || !HAS_WORD_CHAR.test(token)) {
        frag.appendChild(document.createTextNode(token))
        return
      }
      const mask = document.createElement('span')
      mask.style.cssText =
        'display:inline-block;overflow:hidden;vertical-align:bottom;padding:0.06em 0.05em 0.16em;margin:-0.06em -0.05em -0.16em;'
      const inner = document.createElement('span')
      inner.style.cssText = 'display:inline-block;will-change:transform;'
      inner.textContent = token
      mask.appendChild(inner)
      frag.appendChild(mask)
      words.push(inner)
    })
    node.parentNode.replaceChild(frag, node)
  })
}

export default function TextReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const headings = Array.from(document.querySelectorAll(SELECTOR)).filter(
      (el) => !el.closest('nav, header, footer') && !el.dataset.zpSplit,
    )
    const originals = new Map()

    const ctx = gsap.context(() => {
      headings.forEach((el) => {
        originals.set(el, el.innerHTML)
        el.dataset.zpSplit = '1'
        const words = []
        splitTextNodes(el, words)
        if (!words.length) return

        gsap.set(words, { yPercent: 115 })
        gsap.to(words, {
          yPercent: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.055,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })
    })

    return () => {
      ctx.revert()
      originals.forEach((html, el) => {
        el.innerHTML = html
        delete el.dataset.zpSplit
      })
    }
  }, [])

  return null
}

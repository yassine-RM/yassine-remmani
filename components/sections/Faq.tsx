/**
 * A page's questions, visible.
 *
 * This renders the same array that `faqNode` turns into `FAQPage` markup, and
 * that is the whole point of it existing as a component rather than as JSX
 * copied into each page: structured data describing an answer the reader
 * cannot see is a guideline violation, and three hand-maintained copies would
 * drift apart on the first edit.
 *
 * ## Why `<h2>` per question rather than an accordion
 *
 * An answer engine extracts a question and the text immediately beneath it. A
 * heading makes that pairing explicit, and native `<details>` would hide the
 * answer behind a disclosure — still in the DOM, still crawlable, but it costs
 * a reader a click to confirm what a snippet claimed. These answers are three
 * sentences; there is nothing to collapse.
 *
 * The section heading is an `<h2>` and each question an `<h3>`, so the page
 * keeps one `h1` and a hierarchy that does not skip a level.
 */
export interface FaqItem {
  question: string
  answer: string
}

export function Faq({ title, items }: { title: string; items: readonly FaqItem[] }) {
  if (!items.length) return null

  return (
    <section aria-labelledby="faq-heading" className="mt-12 pt-8 border-t border-border">
      <h2 id="faq-heading" className="font-heading text-xl font-semibold mb-6">
        {title}
      </h2>
      <dl className="space-y-6">
        {items.map((item) => (
          <div key={item.question}>
            {/* dt carries the heading so the question is both a landmark for a
                reader and a definition-list term for anything parsing pairs. */}
            <dt>
              <h3 className="font-heading text-base font-semibold mb-2">{item.question}</h3>
            </dt>
            <dd className="text-[var(--foreground-muted)] leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

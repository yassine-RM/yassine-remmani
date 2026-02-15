'use client'

import React from 'react'

/**
 * Minimal markdown renderer for blog posts. Supports:
 * ## / ### headings, **bold**, `code`, ```fenced code```, tables, paragraphs.
 * No extra dependencies.
 */
export function SimpleMarkdown({ content }: { content: string }) {
  const blocks = splitBlocks(content)
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => (
        <React.Fragment key={i}>{renderBlock(block)}</React.Fragment>
      ))}
    </div>
  )
}

function splitBlocks(content: string): string[] {
  const lines = content.split(/\r?\n/)
  const blocks: string[] = []
  let current: string[] = []
  let inFenced = false
  let fenceChar = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const fenced = line.match(/^(`{3,}|~{3,})(.*)$/)
    if (fenced && !inFenced) {
      flushParagraph(blocks, current)
      inFenced = true
      fenceChar = fenced[1]
      current = [line]
      continue
    }
    if (inFenced) {
      current.push(line)
      if (line.startsWith(fenceChar)) {
        blocks.push(current.join('\n'))
        current = []
        inFenced = false
      }
      continue
    }
    if (line.startsWith('## ') || line.startsWith('### ')) {
      flushParagraph(blocks, current)
      blocks.push(line)
      current = []
      continue
    }
    if (line.startsWith('|') && line.endsWith('|')) {
      flushParagraph(blocks, current)
      const tableRows: string[] = [line]
      while (i + 1 < lines.length && lines[i + 1].startsWith('|')) {
        i++
        tableRows.push(lines[i])
      }
      blocks.push(tableRows.join('\n'))
      current = []
      continue
    }
    if (line.trim() === '') {
      flushParagraph(blocks, current)
      current = []
    } else {
      current.push(line)
    }
  }
  flushParagraph(blocks, current)
  return blocks
}

function flushParagraph(blocks: string[], current: string[]) {
  if (current.length > 0) {
    blocks.push(current.join('\n'))
    current.length = 0
  }
}

function renderBlock(block: string): React.ReactNode {
  const trimmed = block.trim()
  if (!trimmed) return null

  if (trimmed === '---') {
    return <hr className="border-[var(--border-color)] my-6" />
  }
  if (trimmed.startsWith('### ')) {
    return (
      <h3 className="font-heading text-lg font-bold mt-8 mb-2">
        {inline(trimmed.slice(4))}
      </h3>
    )
  }
  if (trimmed.startsWith('## ')) {
    return (
      <h2 className="font-heading text-xl font-bold mt-10 mb-3">
        {inline(trimmed.slice(3))}
      </h2>
    )
  }
  if (trimmed.startsWith('```')) {
    const lines = trimmed.split(/\r?\n/)
    const lang = lines[0].slice(3).trim()
    const end = lines.length > 1 && /^`{3,}\s*$/.test(lines[lines.length - 1].trim()) ? lines.length - 1 : lines.length
    const code = lines.slice(1, end).join('\n')
    return (
      <pre className="overflow-x-auto rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 text-sm my-4">
        <code className={lang ? `language-${lang}` : ''}>{code}</code>
      </pre>
    )
  }
  if (trimmed.startsWith('|') && trimmed.includes('|', 1)) {
    return renderTable(trimmed)
  }
  return <p className="text-[var(--text-secondary)] leading-relaxed">{inline(trimmed)}</p>
}

function renderTable(md: string): React.ReactNode {
  const rows = md.split(/\r?\n/).filter((r) => r.trim())
  if (rows.length < 2) return <p>{inline(md)}</p>
  const headerCells = rows[0].split('|').map((c) => c.trim()).filter(Boolean)
  const alignRow = rows[1]
  const dataRows = rows.slice(2)
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headerCells.map((cell, j) => (
              <th
                key={j}
                className="border border-[var(--border-color)] px-3 py-2 text-left font-semibold bg-[var(--bg-surface)]"
              >
                {inline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, i) => {
            const cells = row.split('|').map((c) => c.trim()).filter(Boolean)
            if (cells.length === 0) return null
            return (
              <tr key={i}>
                {cells.map((cell, j) => (
                  <td
                    key={j}
                    className="border border-[var(--border-color)] px-3 py-2 text-[var(--text-secondary)]"
                  >
                    {inline(cell)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

let inlineKey = 0
function inline(text: string): React.ReactNode {
  inlineKey += 1
  const baseKey = inlineKey
  const parts: React.ReactNode[] = []
  let remaining = text
  while (remaining.length > 0) {
    const bold = remaining.match(/\*\*([^*]+)\*\*/)
    const code = remaining.match(/`([^`]+)`/)
    let match: RegExpMatchArray | null = null
    let type: 'bold' | 'code' = 'bold'
    if (bold && (!code || (code && bold.index! <= code.index!))) {
      match = bold
      type = 'bold'
    } else if (code) {
      match = code
      type = 'code'
    }
    if (!match) {
      parts.push(remaining)
      break
    }
    const idx = match.index!
    if (idx > 0) parts.push(remaining.slice(0, idx))
    if (type === 'bold') {
      parts.push(<strong key={`${baseKey}-${parts.length}`}>{match[1]}</strong>)
    } else {
      parts.push(
        <code key={`${baseKey}-${parts.length}`} className="rounded bg-[var(--bg-surface)] px-1.5 py-0.5 text-sm font-mono">
          {match[1]}
        </code>
      )
    }
    remaining = remaining.slice(idx + match[0].length)
  }
  if (parts.length === 1 && typeof parts[0] === 'string') return parts[0]
  return <>{parts}</>
}

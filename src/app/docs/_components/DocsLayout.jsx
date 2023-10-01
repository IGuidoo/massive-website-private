import { DocsHeader } from '@/app/docs/_components/DocsHeader'
import { PrevNextLinks } from '@/app/docs/_components/PrevNextLinks'
import { Prose } from '@/app/docs/_components/Prose'
import { TableOfContents } from '@/app/docs/_components/TableOfContents'
import { collectSections } from '@/lib/sections'

export function DocsLayout({ children, frontmatter: { title }, nodes }) {
  let tableOfContents = collectSections(nodes)

  return (
    <>
      <div className="min-w-0 flex-auto px-4 py-16  lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
      </div>
      <TableOfContents tableOfContents={tableOfContents} />
    </>
  )
}

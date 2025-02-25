import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function PolicyLayout({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <>
      <Header />
      <main>
        <Container className="py-16 md:py-20">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <div className="mt-8 prose prose-slate max-w-none prose-headings:font-display prose-headings:font-normal prose-lead:text-slate-500 prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

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
      <Container className="mt-16 mb-24">
        <div className="prose prose-slate mx-auto max-w-3xl">
          <h1 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <div className="mt-8">{children}</div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

'use client'

import { useQuery } from '@apollo/client/react'
import { GET_PAGE } from '@/lib/graphql'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApolloWrapper from '@/lib/apollo-wrapper'
import { motion } from 'framer-motion'

function AboutContent() {
  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: { slug: 'about', language: 'mn' }
  })

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>

  const page = (data as any)?.cpPage

  return (
    <main className="min-h-screen bg-deep-space">
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
              БИДНИЙ ТУХАЙ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-starlight mb-8">
              {page?.name || 'Монгол ТВ-ийн тухай'}
            </h1>
            <div 
              className="prose prose-invert max-w-none text-silver"
              dangerouslySetInnerHTML={{ __html: page?.content || 'Монгол ТВ нь 2009 онд үүсгэн байгуулагдсан Монголын хамгийн том телевизүүдийн нэг.' }}
            />
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function AboutPage() {
  return (
    <ApolloWrapper>
      <AboutContent />
    </ApolloWrapper>
  )
}

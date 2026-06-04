'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POSTS } from '@/lib/graphql'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApolloWrapper from '@/lib/apollo-wrapper'
import { motion } from 'framer-motion'

function BlogContent() {
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { language: 'mn', status: 'published' }
  })

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>

  const posts = (data as any)?.cpPosts || []

  return (
    <main className="min-h-screen bg-deep-space">
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
              МЭДЭЭ МЭДЭЭЛЭЛ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-starlight">
              Блог
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post: any, index: number) => (
              <motion.article
                key={post._id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-graphite rounded-2xl p-8 hover:bg-graphite/80 transition-colors"
              >
                <h2 className="text-xl font-semibold text-starlight mb-4">
                  {post.title}
                </h2>
                <p className="text-silver mb-4">
                  {post.excerpt}
                </p>
                <span className="text-mercury-blue text-sm">
                  {new Date(post.publishedDate).toLocaleDateString('mn-MN')}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function BlogPage() {
  return (
    <ApolloWrapper>
      <BlogContent />
    </ApolloWrapper>
  )
}

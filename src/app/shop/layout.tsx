import React, { Suspense } from 'react'
import ListCategory from '@/components/ListCategory'
import SelectCategory from '@/components/SelectCategory'
import Loading from '@/components/Loading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tienda',
  description: 'Todos los productos por categoria'
}

function page ({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen mx-[--width-page] pt-[var(--header-height)] md:pt-[calc(var(--header-height)+2rem)] grid grid-cols-1 md:grid-cols-shop">
      <section className='hidden md:block'>
        <ListCategory />
      </section>

      <section className='text-sm grid place-content-center md:hidden my-5'>
        <SelectCategory />
      </section>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </main>
  )
}

export default page

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница фильма',
}

export default function Layuot({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Вопрос ответ',
}

export default function Layuot({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
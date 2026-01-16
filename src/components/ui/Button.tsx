import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  showArrow?: boolean
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  showArrow = false,
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const classes = `${baseClasses} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}

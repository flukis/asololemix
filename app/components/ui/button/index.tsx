import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/classnames'

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-gray-900 text-white hover:bg-gray-800/90',
				danger: 'bg-pink-800 text-white hover:bg-red-500/90',
				outline: 'border bg-gray-100 border-gray-200 hover:bg-gray-200 hover:text-gray-800',
				secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-200/80',
				ghost: 'hover:bg-gray-200 hover:text-gray-800',
				link: 'text-gray-800 underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 px-3',
				lg: 'h-11 px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
	return (
		<button
			role={variant === 'link' ? 'link' : 'button'}
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	)
})
Button.displayName = 'Button'

export { Button, buttonVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gothicButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-gothic text-primary-foreground hover:bg-gothic-red-dark shadow-gothic",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gothic-gold bg-background hover:bg-gothic-gray hover:text-accent-foreground shadow-gold",
        secondary:
          "bg-gothic-gray text-secondary-foreground hover:bg-gothic-gray-light",
        ghost: "hover:bg-gothic-gray hover:text-accent-foreground",
        link: "text-gothic-gold underline-offset-4 hover:underline",
        elegant: "bg-gradient-gold text-gothic-black hover:bg-gothic-gold-dark shadow-gold font-bold",
        warning: "bg-gradient-gothic text-primary-foreground hover:opacity-90 animate-glow border border-gothic-gold"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GothicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gothicButtonVariants> {
  asChild?: boolean
}

const GothicButton = React.forwardRef<HTMLButtonElement, GothicButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gothicButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GothicButton.displayName = "GothicButton"

export { GothicButton, gothicButtonVariants }
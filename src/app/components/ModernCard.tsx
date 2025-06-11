"use client";

import { ReactNode } from "react";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "gradient";
  hover?: boolean;
  glow?: boolean;
}

export default function ModernCard({
  children,
  className = "",
  variant = "glass",
  hover = true,
  glow = false,
}: ModernCardProps) {
  const baseClasses = "rounded-2xl transition-all duration-300 ease-out";

  const variantClasses = {
    glass: `
      glass-card
      border border-gold-500/20
      dark:border-gold-500/30
      shadow-glass
      dark:shadow-glass-dark
    `,
    solid: `
      bg-black/90
      dark:bg-black/95
      border border-gold-500/30
      dark:border-gold-500/40
      shadow-web3
    `,
    gradient: `
      bg-gradient-modern
      border border-gold-500/40
      dark:border-gold-500/50
      shadow-glass
    `,
  };

  const hoverClasses = hover
    ? `
    hover:transform hover:scale-[1.02]
    hover:shadow-glow-lg
    hover:border-gold-400/60
    cursor-pointer
  `
    : "";

  const glowClasses = glow ? "animate-pulse-glow" : "";

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${hoverClasses}
        ${glowClasses}
        ${className}
      `}>
      {children}
    </div>
  );
}

// Service Card Component
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  className = "",
}: ServiceCardProps) {
  return (
    <ModernCard className={`p-8 group ${className}`} variant="glass" hover>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-xl bg-gradient-gold text-black shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white ml-4 group-hover:text-gold-400 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-gold mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </ModernCard>
  );
}

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <ModernCard className={`p-6 ${className}`} variant="gradient" hover>
      <h4 className="text-lg font-semibold text-gold-400 mb-3">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </ModernCard>
  );
}

// Stats Card Component
interface StatsCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatsCard({
  value,
  label,
  icon,
  className = "",
}: StatsCardProps) {
  return (
    <ModernCard className={`p-6 text-center ${className}`} variant="glass" glow>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-gradient-gold text-black">
            {icon}
          </div>
        </div>
      )}
      <div className="text-3xl font-bold text-gold-400 mb-2">{value}</div>
      <div className="text-gray-400 font-medium">{label}</div>
    </ModernCard>
  );
}

// Modern Button Component
interface ModernButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function ModernButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}: ModernButtonProps) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 ease-out inline-flex items-center justify-center";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "btn-modern",
    secondary: "btn-glass text-gold-400 hover:text-black",
    glass: "btn-glass text-gold-400",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}>
      {children}
    </Component>
  );
}

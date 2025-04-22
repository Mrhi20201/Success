'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';
import { Home, Star, Briefcase, Target, Building2, User, Code, HelpCircle } from 'lucide-react';

const routes = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/careers', label: 'Careers', icon: Briefcase },
  { path: '/success', label: 'Success', icon: Target },
  { path: '/house-prices', label: 'Housing', icon: Building2 },
  { path: '/starred', label: 'Starred', icon: Star },
  { path: '/questions', label: 'Questions', icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r bg-background/80 backdrop-blur-lg transition-all duration-300",
        isExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex h-16 items-center justify-center">
        <ModeToggle />
      </div>
      
      <nav className="flex flex-1 flex-col gap-2 p-2">
        {routes.map((route) => {
          const Icon = route.icon;
          const isActive = pathname === route.path;
          
          return (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "group flex h-12 items-center gap-3 rounded-lg px-3 transition-all duration-200",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              )}
            >
              <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              <span 
                className={cn(
                  "whitespace-nowrap opacity-0 transition-all duration-200",
                  isExpanded && "opacity-100"
                )}
              >
                {route.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
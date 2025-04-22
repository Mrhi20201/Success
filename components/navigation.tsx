'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, Star, Briefcase, Target, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';

const routes = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/careers', label: 'Careers', icon: Briefcase },
  { path: '/starred', label: 'Starred', icon: Star },
  { path: '/success', label: 'Success', icon: Target },
  { path: '/house-prices', label: 'Housing', icon: Building2 },
];

export function Navigation() {
  const pathname = usePathname();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('taskbar')?.getBoundingClientRect();
      if (!rect) return;

      // Calculate the mouse position relative to the taskbar
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const taskbarStyle = {
    transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${
      mousePosition.x * 2
    }deg)`,
  };

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-2xl px-4">
      <nav
        id="taskbar"
        className="flex h-14 items-center justify-between rounded-xl border bg-background/80 px-4 shadow-lg backdrop-blur-lg transition-all duration-300 hover:bg-background/90"
        style={taskbarStyle}
      >
        <div className="flex items-center gap-4">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  'group flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-foreground/10',
                  pathname === route.path
                    ? 'bg-foreground/10'
                    : 'text-foreground/60'
                )}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">{route.label}</span>
              </Link>
            );
          })}
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}
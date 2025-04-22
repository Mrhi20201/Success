import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-4 py-8 md:flex-row md:justify-between md:py-12">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
          The rights are reserved.
          </p>
        </div>
        <div className="flex gap-4">
        </div>
      </div>
    </footer>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useStarredStore } from '@/lib/store';

export function StarButton({ careerId }: { careerId: number }) {
  const { toggleStar, isStarred } = useStarredStore();
  const starred = isStarred(careerId);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 bg-background/50 backdrop-blur-sm"
      onClick={() => toggleStar(careerId)}
      aria-label={starred ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Star
        className={`h-5 w-5 transition-all ${
          starred ? 'fill-yellow-400 text-yellow-400' : ''
        }`}
      />
    </Button>
  );
}
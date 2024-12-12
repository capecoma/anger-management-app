import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CopingStrategies() {
  const strategies = [
    {
      title: 'Deep Breathing',
      description: 'Take 5 slow, deep breaths. Inhale for 4 counts, hold for 4, exhale for 4.',
    },
    {
      title: 'Progressive Muscle Relaxation',
      description: 'Tense and relax each muscle group, starting from your toes and moving up.',
    },
    {
      title: 'Time-Out',
      description: 'Step away from the situation for 10-15 minutes to cool down.',
    },
    {
      title: 'Mindful Observation',
      description: 'Focus on describing 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.',
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-2xl font-semibold">Coping Strategies</h2>
      
      <div className="space-y-4">
        {strategies.map((strategy, index) => (
          <div key={index} className="rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-medium">{strategy.title}</h3>
            <p className="mb-3 text-gray-600">{strategy.description}</p>
            <Button
              variant="outline"
              onClick={() => alert(`Starting ${strategy.title}...`)}
              className="w-full"
            >
              Try This Strategy
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
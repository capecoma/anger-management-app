import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

export function AngerTracker() {
  const [intensity, setIntensity] = useState(0);

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Anger Intensity Tracker</h2>
      
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">How intense is your anger right now?</label>
        <Slider
          value={[intensity]}
          onValueChange={(value) => setIntensity(value[0])}
          max={10}
          step={1}
          className="py-4"
        />
        <div className="mt-2 text-center text-lg font-semibold">{intensity}/10</div>
      </div>

      <Button
        className="w-full"
        onClick={() => {
          // Save intensity logic here
          alert('Anger intensity logged!');
        }}
      >
        Log Intensity
      </Button>
    </div>
  );
}
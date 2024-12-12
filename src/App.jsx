import React from 'react';
import { AngerTracker } from './components/AngerTracker';
import { EmotionLog } from './components/EmotionLog';
import { CopingStrategies } from './components/CopingStrategies';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Anger Management Assistant</h1>
        <p className="mt-2 text-gray-600">Track, understand, and manage your emotions</p>
      </header>
      
      <main className="container mx-auto grid gap-8 md:grid-cols-2">
        <AngerTracker />
        <EmotionLog />
        <CopingStrategies />
      </main>
    </div>
  );
}
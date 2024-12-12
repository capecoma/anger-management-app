import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function EmotionLog() {
  const [logs, setLogs] = useState([]);
  const [newLog, setNewLog] = useState({ trigger: '', thoughts: '', physical: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogs([...logs, { ...newLog, timestamp: new Date() }]);
    setNewLog({ trigger: '', thoughts: '', physical: '' });
  };

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-2xl font-semibold">Emotion Log</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">What triggered your anger?</label>
          <Input
            value={newLog.trigger}
            onChange={(e) => setNewLog({ ...newLog, trigger: e.target.value })}
            placeholder="Describe the situation"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">What were your thoughts?</label>
          <Textarea
            value={newLog.thoughts}
            onChange={(e) => setNewLog({ ...newLog, thoughts: e.target.value })}
            placeholder="Write your thoughts here"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Physical sensations:</label>
          <Input
            value={newLog.physical}
            onChange={(e) => setNewLog({ ...newLog, physical: e.target.value })}
            placeholder="How did your body feel?"
          />
        </div>

        <Button type="submit" className="w-full">Add Log Entry</Button>
      </form>

      <div className="mt-6 space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="rounded-lg border p-4">
            <p className="text-sm text-gray-500">{log.timestamp.toLocaleString()}</p>
            <p><strong>Trigger:</strong> {log.trigger}</p>
            <p><strong>Thoughts:</strong> {log.thoughts}</p>
            <p><strong>Physical Sensations:</strong> {log.physical}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
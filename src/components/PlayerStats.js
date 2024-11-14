import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { User, Award, Trophy, Timer, Target, TrendingUp } from 'lucide-react';

// Rest of the code remains exactly the same until the Key Stats section where we replace Cricket icon with Trophy

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-blue-500" />
              <div>
                <div className="text-sm text-gray-500">Matches</div>
                <div className="text-2xl font-bold">{currentStats.matches}</div>
              </div>
            </div>
          </CardContent>
        </Card>

{/* Rest of the component code remains exactly the same... */}

export default PlayerStats;
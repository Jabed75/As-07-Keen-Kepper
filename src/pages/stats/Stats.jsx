import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Stats = () => {
  
  const data = [
    { name: 'Text', value: 25, color: '#8B5CF6' },  
    { name: 'Call', value: 45, color: '#2D4B3B' },  
    { name: 'Video', value: 30, color: '#45B36B' }, 
  ];

  return (
    <div style={{ 
      background: '#FFFFFF', 
      padding: '40px', 
      borderRadius: '16px', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      maxWidth: '600px',
      margin: '20px auto',
      fontFamily: 'sans-serif'
    }}>
      
      <h2 style={{ color: '#1E293B', fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>
        Friendship Analytics
      </h2>
      
      <div style={{ position: 'relative', height: '300px' }}>
        <p style={{ color: '#1F4D36', fontSize: '14px', fontWeight: '600', position: 'absolute', top: 0 }}>
          By Interaction Type
        </p>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="85%"
              paddingAngle={10}    // Segments er moddhe gap
              cornerRadius={40}    // Rounded edges
              dataKey="value"
              stroke="none"        // Border remove korar jonno
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '10px' 
      }}>
        {data.map((entry) => (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: entry.color 
            }} />
            <span style={{ fontSize: '13px', color: '#64748B' }}>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
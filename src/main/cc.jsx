import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Users, 
  MessageCircle, 
  Calendar, 
  Folder 
} from 'lucide-react';

const ResponsiveDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dashboardStats = [
    { icon: Users, value: 55, label: 'Mes Eleves', color: 'bg-teal-500' },
    { icon: Calendar, value: '3/10', label: 'Progression', color: 'bg-yellow-500' },
    { icon: FileText, value: '20h', label: 'Temps', color: 'bg-red-500' }
  ];

  const topClasses = [
    { name: 'CP 2', color: 'bg-pink-500', percentage: 60 },
    { name: 'CP 1', color: 'bg-green-500', percentage: 75 },
    { name: 'CP 4', color: 'bg-yellow-500', percentage: 40 },
    { name: 'CP 3', color: 'bg-red-500', percentage: 20 }
  ];

  const recentLessons = [
    { subject: 'Francais', class: 'Class P2', time: '10:30 PM' },
    { subject: 'Francais', class: 'Class P1', time: '12:00 PM' },
    { subject: 'Francais', class: 'Class C1', time: '6:00 PM' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Folder className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-blue-900 text-white 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-4 flex items-center justify-between">
          <div className="text-xl font-bold">L'espoir</div>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="md:hidden"
          >
            ✕
          </button>
        </div>
        <nav className="mt-10">
          {[
            { icon: <BookOpen />, label: 'Main' },
            { icon: <FileText />, label: 'Notes' },
            { icon: <Folder />, label: 'Demande' },
            { icon: <Users />, label: 'Absence' },
            { icon: <MessageCircle />, label: 'Messagerie' }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 hover:bg-blue-700 cursor-pointer"
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {dashboardStats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.color} text-white p-4 rounded-lg flex items-center`}
            >
              <stat.icon className="w-8 h-8 mr-4" />
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Wave Chart Placeholder */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="h-48 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg"></div>
          </div>

          {/* Top Classes Chart */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Top 5 des classes</h2>
            <div className="space-y-2">
              {topClasses.map((cls, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className={`w-10 h-10 ${cls.color} rounded-full mr-4`}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>{cls.name}</span>
                      <span>{cls.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${cls.color} h-2.5 rounded-full`} 
                        style={{width: `${cls.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Lessons */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Cours récents</h2>
          {recentLessons.map((lesson, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center py-3 border-b last:border-b-0"
            >
              <div>
                <div className="font-medium">{lesson.subject}</div>
                <div className="text-sm text-gray-500">{lesson.class}</div>
              </div>
              <div className="text-sm text-gray-600">{lesson.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDashboard;
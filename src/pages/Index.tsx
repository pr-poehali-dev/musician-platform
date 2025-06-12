import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileWindow from "@/components/ProfileWindow";
import VideoLessons from "@/components/VideoLessons";
import AudioEditor from "@/components/AudioEditor";
import ActivityRating from "@/components/ActivityRating";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const menuItems = [
    {
      id: "profile",
      title: "Профиль",
      icon: "User",
      gradient: "bg-gradient-purple",
      description: "Управление профилем музыканта",
    },
    {
      id: "lessons",
      title: "Видеоуроки",
      icon: "Play",
      gradient: "bg-gradient-blue",
      description: "Обучение игре на инструментах",
    },
    {
      id: "editor",
      title: "Аудиоредактор",
      icon: "Music",
      gradient: "bg-gradient-orange",
      description: "Создание и редактирование треков",
    },
    {
      id: "rating",
      title: "Рейтинг",
      icon: "Trophy",
      gradient: "bg-gradient-rainbow",
      description: "Таблица лидеров и достижения",
    },
  ];

  const renderActiveWindow = () => {
    switch (activeWindow) {
      case "profile":
        return <ProfileWindow onClose={() => setActiveWindow(null)} />;
      case "lessons":
        return <VideoLessons onClose={() => setActiveWindow(null)} />;
      case "editor":
        return <AudioEditor onClose={() => setActiveWindow(null)} />;
      case "rating":
        return <ActivityRating onClose={() => setActiveWindow(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-music relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-music-yellow/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-music-orange/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-music-purple/20 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-music-blue/20 rounded-full animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.poehali.dev/files/d85d6883-9541-4edc-bd74-0512a43c1366.jpg"
              alt="Music Bridge Logo"
              className="w-40 h-40 object-contain animate-pulse-slow"
            />
          </div>
          <h1 className="text-5xl font-montserrat font-bold text-white mb-4 drop-shadow-lg">
            Music Bridge
          </h1>
          <p className="text-xl text-white/90 font-medium">
            🎵 Платформа для музыкантов всех уровней
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => setActiveWindow(item.id)}
              className={`${item.gradient} h-32 flex-col gap-3 text-white border-0 music-shadow hover:scale-105 transition-all duration-300 group`}
              size="lg"
            >
              <Icon
                name={item.icon as any}
                size={32}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg font-montserrat font-semibold">
                {item.title}
              </span>
              <span className="text-xs opacity-90 text-center">
                {item.description}
              </span>
            </Button>
          ))}
        </div>

        {/* Features Preview */}
        <div className="text-center text-white/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="glass-effect p-4 rounded-lg">
              <Icon name="Headphones" size={24} className="mx-auto mb-2" />
              <p>Профессиональные инструменты</p>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <Icon name="Users" size={24} className="mx-auto mb-2" />
              <p>Сообщество музыкантов</p>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <Icon name="Award" size={24} className="mx-auto mb-2" />
              <p>Система достижений</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Window Modal */}
      {activeWindow && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {renderActiveWindow()}
        </div>
      )}
    </div>
  );
};

export default Index;

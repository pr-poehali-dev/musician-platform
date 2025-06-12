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
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/d85d6883-9541-4edc-bd74-0512a43c1366.jpg"
                alt="Music Bridge Logo"
                className="w-48 h-48 object-contain animate-pulse-slow hover:scale-110 transition-transform duration-500 cursor-pointer pulse-glow rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-rainbow opacity-20 rounded-full animate-spin-slow"></div>
            </div>
          </div>
          <h1 className="text-6xl font-montserrat font-bold text-white mb-6 drop-shadow-2xl gradient-text">
            Music Bridge
          </h1>
          <p className="text-2xl text-white/90 font-medium mb-4">
            🎵 Платформа для музыкантов всех уровней
          </p>
          <div className="flex justify-center gap-4 text-white/70">
            <span className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              2,847+ музыкантов
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Music" size={20} />
              15,239 треков
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Play" size={20} />
              3,521 урок
            </span>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {menuItems.map((item, index) => (
            <Button
              key={item.id}
              onClick={() => setActiveWindow(item.id)}
              className={`${item.gradient} h-40 flex-col gap-4 text-white border-0 music-shadow hover-lift group relative overflow-hidden`}
              size="lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Icon
                name={item.icon as any}
                size={40}
                className="group-hover:scale-125 transition-all duration-300 drop-shadow-lg z-10"
              />
              <span className="text-xl font-montserrat font-bold z-10">
                {item.title}
              </span>
              <span className="text-sm opacity-90 text-center z-10 px-2">
                {item.description}
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Button>
          ))}
        </div>

        {/* Features Preview */}
        <div className="text-center text-white max-w-6xl mx-auto">
          <h2 className="text-3xl font-montserrat font-bold mb-8 text-white/90">
            ✨ Возможности платформы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-2xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">
                Профессиональные инструменты
              </h3>
              <p className="text-white/80">
                Полнофункциональный аудиоредактор с эффектами и микшером
              </p>
            </div>
            <div className="glass-effect p-6 rounded-2xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">
                Сообщество музыкантов
              </h3>
              <p className="text-white/80">
                Общайтесь, учитесь и соревнуйтесь с музыкантами со всего мира
              </p>
            </div>
            <div className="glass-effect p-6 rounded-2xl hover-lift group">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-2">
                Система достижений
              </h3>
              <p className="text-white/80">
                Получайте награды за прогресс и участие в активностях
              </p>
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

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface VideoLessonsProps {
  onClose: () => void;
}

const VideoLessons = ({ onClose }: VideoLessonsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "Все уроки", icon: "BookOpen", color: "bg-gray-500" },
    { id: "guitar", name: "Гитара", icon: "Guitar", color: "bg-music-orange" },
    {
      id: "piano",
      name: "Фортепиано",
      icon: "Piano",
      color: "bg-music-purple",
    },
    { id: "drums", name: "Барабаны", icon: "Drum", color: "bg-music-blue" },
    { id: "vocal", name: "Вокал", icon: "Mic", color: "bg-music-yellow" },
  ];

  const lessons = [
    {
      id: 1,
      title: "Основы игры на гитаре",
      category: "guitar",
      duration: "15 мин",
      level: "Начинающий",
      progress: 75,
      thumbnail:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Аккорды для новичков",
      category: "guitar",
      duration: "22 мин",
      level: "Начинающий",
      progress: 30,
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Базовые упражнения на пианино",
      category: "piano",
      duration: "18 мин",
      level: "Средний",
      progress: 90,
      thumbnail:
        "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Ритмы для барабанщика",
      category: "drums",
      duration: "25 мин",
      level: "Продвинутый",
      progress: 0,
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
    {
      id: 5,
      title: "Техника дыхания в вокале",
      category: "vocal",
      duration: "12 мин",
      level: "Начинающий",
      progress: 60,
      thumbnail:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=200&fit=crop",
    },
    {
      id: 6,
      title: "Джазовые гармонии",
      category: "piano",
      duration: "28 мин",
      level: "Продвинутый",
      progress: 15,
      thumbnail:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=200&fit=crop",
    },
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesCategory =
      selectedCategory === "all" || lesson.category === selectedCategory;
    const matchesSearch = lesson.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начинающий":
        return "bg-green-500";
      case "Средний":
        return "bg-music-orange";
      case "Продвинутый":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-2 border-music-blue/30">
      <CardHeader className="bg-gradient-blue text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-montserrat font-bold">
            🎬 Видеоуроки
          </CardTitle>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Search and Categories */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Icon
              name="Search"
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Поиск уроков..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                className={
                  selectedCategory === category.id
                    ? `${category.color} text-white`
                    : ""
                }
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mb-6 p-4 bg-gradient-to-r from-music-blue/10 to-music-purple/10 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center">
            <Icon
              name="TrendingUp"
              size={18}
              className="mr-2 text-music-blue"
            />
            Ваш прогресс
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-music-blue">128</div>
              <div className="text-gray-600">Уроков пройдено</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-music-purple">47</div>
              <div className="text-gray-600">Часов обучения</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-music-orange">15</div>
              <div className="text-gray-600">Сертификатов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-music-yellow">92%</div>
              <div className="text-gray-600">Средний результат</div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLessons.map((lesson) => (
            <Card
              key={lesson.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={lesson.thumbnail}
                  alt={lesson.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    className={`${getLevelColor(lesson.level)} text-white text-xs`}
                  >
                    {lesson.level}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {lesson.duration}
                </div>
              </div>

              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {lesson.title}
                </h4>

                {lesson.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Прогресс</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <Progress value={lesson.progress} className="h-2" />
                  </div>
                )}

                <Button
                  size="sm"
                  className={
                    lesson.progress === 0
                      ? "bg-music-blue hover:bg-music-blue/90"
                      : "bg-music-purple hover:bg-music-purple/90"
                  }
                  style={{ width: "100%" }}
                >
                  <Icon
                    name={lesson.progress === 0 ? "Play" : "RotateCcw"}
                    size={16}
                    className="mr-2"
                  />
                  {lesson.progress === 0 ? "Начать урок" : "Продолжить"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Icon
              name="Search"
              size={48}
              className="mx-auto mb-4 text-gray-300"
            />
            <p>Уроки не найдены</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoLessons;

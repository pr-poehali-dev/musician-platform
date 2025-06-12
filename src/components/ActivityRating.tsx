import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface ActivityRatingProps {
  onClose: () => void;
}

const ActivityRating = ({ onClose }: ActivityRatingProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const leaderboard = [
    {
      rank: 1,
      name: "Анна Мелодия",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b2e84c9b?w=60&h=60&fit=crop&crop=face",
      points: 2847,
      streak: 12,
      instrument: "Фортепиано",
      change: "+3",
    },
    {
      rank: 2,
      name: "Максим Ритм",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      points: 2651,
      streak: 8,
      instrument: "Барабаны",
      change: "±0",
    },
    {
      rank: 3,
      name: "София Гармония",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      points: 2398,
      streak: 15,
      instrument: "Вокал",
      change: "+1",
    },
    {
      rank: 4,
      name: "Мария Аккордова",
      avatar:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face",
      points: 2247,
      streak: 6,
      instrument: "Гитара",
      change: "+2",
      isCurrentUser: true,
    },
    {
      rank: 5,
      name: "Дмитрий Басс",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      points: 2156,
      streak: 4,
      instrument: "Бас-гитара",
      change: "-2",
    },
  ];

  const achievements = [
    {
      name: "Недельный рекорд",
      description: "7 дней подряд",
      icon: "Calendar",
      earned: true,
    },
    {
      name: "Мастер гамм",
      description: "100 упражнений",
      icon: "Target",
      earned: true,
    },
    {
      name: "Композитор",
      description: "10 треков создано",
      icon: "Music",
      earned: false,
    },
    {
      name: "Наставник",
      description: "Помощь новичкам",
      icon: "Users",
      earned: false,
    },
  ];

  const weeklyActivity = [
    { day: "Понедельник", hours: 2.5, completed: true },
    { day: "Вторник", hours: 1.8, completed: true },
    { day: "Среда", hours: 3.2, completed: true },
    { day: "Четверг", hours: 0.5, completed: false },
    { day: "Пятница", hours: 2.1, completed: true },
    { day: "Суббота", hours: 4.0, completed: true },
    { day: "Воскресенье", hours: 1.2, completed: false },
  ];

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-music-yellow text-black";
      case 2:
        return "bg-gray-400 text-white";
      case 3:
        return "bg-music-orange text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getChangeColor = (change: string) => {
    if (change.startsWith("+")) return "text-green-500";
    if (change.startsWith("-")) return "text-red-500";
    return "text-gray-500";
  };

  return (
    <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-2 border-music-yellow/30">
      <CardHeader className="bg-gradient-rainbow text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-montserrat font-bold">
            🏆 Рейтинг активности
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
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="leaderboard">Таблица лидеров</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="activity">Активность</TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="space-y-4">
            {/* Period Selector */}
            <div className="flex gap-2 mb-4">
              {["week", "month", "all"].map((period) => (
                <Button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                >
                  {period === "week" && "Неделя"}
                  {period === "month" && "Месяц"}
                  {period === "all" && "Все время"}
                </Button>
              ))}
            </div>

            {/* Current User Stats */}
            <div className="bg-gradient-to-r from-music-purple/10 to-music-blue/10 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-3 flex items-center">
                <Icon
                  name="User"
                  size={18}
                  className="mr-2 text-music-purple"
                />
                Ваша статистика
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-music-purple">4</div>
                  <div className="text-gray-600">Место</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-music-blue">
                    2,247
                  </div>
                  <div className="text-gray-600">Очки</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-music-orange">6</div>
                  <div className="text-gray-600">Дней подряд</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-music-yellow">+2</div>
                  <div className="text-gray-600">Изменение</div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="space-y-2">
              {leaderboard.map((user) => (
                <Card
                  key={user.rank}
                  className={`p-4 ${user.isCurrentUser ? "ring-2 ring-music-purple bg-music-purple/5" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge
                        className={`${getRankBadgeColor(user.rank)} min-w-[28px] h-7 rounded-full flex items-center justify-center`}
                      >
                        #{user.rank}
                      </Badge>

                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {user.name}
                          {user.isCurrentUser && (
                            <Badge variant="secondary" className="text-xs">
                              Вы
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {user.instrument}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {user.points.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">🔥 {user.streak}</span>
                        <span
                          className={`font-medium ${getChangeColor(user.change)}`}
                        >
                          {user.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`p-4 ${achievement.earned ? "bg-gradient-to-r from-music-yellow/10 to-music-orange/10" : "opacity-60"}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.earned ? "bg-music-yellow" : "bg-gray-300"}`}
                    >
                      <Icon
                        name={achievement.icon as any}
                        size={20}
                        className={
                          achievement.earned ? "text-black" : "text-gray-500"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{achievement.name}</div>
                      <div className="text-sm text-gray-600">
                        {achievement.description}
                      </div>
                    </div>
                    {achievement.earned && (
                      <Badge className="bg-music-yellow text-black">
                        <Icon name="Check" size={14} className="mr-1" />
                        Получено
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            {/* Weekly Chart */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4 flex items-center">
                <Icon
                  name="BarChart3"
                  size={18}
                  className="mr-2 text-music-blue"
                />
                Активность за неделю
              </h3>
              <div className="space-y-3">
                {weeklyActivity.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-20 text-sm font-medium">
                        {day.day.slice(0, 3)}
                      </div>
                      <Progress
                        value={(day.hours / 4) * 100}
                        className="flex-1 h-3"
                      />
                      <div className="w-16 text-sm text-right">
                        {day.hours}ч
                      </div>
                    </div>
                    <div className="ml-3">
                      {day.completed ? (
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-green-500"
                        />
                      ) : (
                        <Icon
                          name="Circle"
                          size={16}
                          className="text-gray-300"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-music-blue mb-1">
                  15.3
                </div>
                <div className="text-sm text-gray-600">Часов за неделю</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-music-purple mb-1">
                  28
                </div>
                <div className="text-sm text-gray-600">Треков создано</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-music-orange mb-1">
                  92%
                </div>
                <div className="text-sm text-gray-600">Выполнение целей</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-music-yellow mb-1">
                  6
                </div>
                <div className="text-sm text-gray-600">Дней подряд</div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ActivityRating;

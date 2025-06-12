import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface ProfileWindowProps {
  onClose: () => void;
}

const ProfileWindow = ({ onClose }: ProfileWindowProps) => {
  const instruments = ["Гитара", "Фортепиано", "Барабаны", "Вокал"];
  const achievements = [
    { name: "Первый трек", icon: "Music", color: "bg-music-purple" },
    { name: "Мастер ритма", icon: "Drum", color: "bg-music-orange" },
    { name: "100 уроков", icon: "BookOpen", color: "bg-music-blue" },
    { name: "Звезда недели", icon: "Star", color: "bg-gradient-rainbow" },
  ];

  return (
    <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-md border-2 border-music-purple/30">
      <CardHeader className="bg-gradient-purple text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-montserrat font-bold">
            🎭 Профиль музыканта
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info */}
          <div className="lg:col-span-1">
            <div className="text-center mb-6">
              <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-music-purple/30">
                <AvatarImage src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-purple text-white">
                  МА
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2">
                Мария Аккордова
              </h3>
              <Badge className="bg-music-purple text-white">
                <Icon name="Crown" size={14} className="mr-1" />
                Про музыкант
              </Badge>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  📊 Статистика
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Треков создано:</span>
                    <span className="font-bold text-music-purple">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Уроков пройдено:</span>
                    <span className="font-bold text-music-blue">128</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рейтинг:</span>
                    <span className="font-bold text-music-orange">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Instruments */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold text-gray-800 mb-3 flex items-center">
                <Icon
                  name="Guitar"
                  size={20}
                  className="mr-2 text-music-orange"
                />
                Мои инструменты
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {instruments.map((instrument, index) => (
                  <div
                    key={instrument}
                    className="bg-gradient-to-r from-music-blue/10 to-music-purple/10 p-3 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{instrument}</span>
                      <Badge variant="secondary" className="text-xs">
                        Уровень {Math.floor(Math.random() * 5) + 1}
                      </Badge>
                    </div>
                    <Progress value={20 + index * 25} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold text-gray-800 mb-3 flex items-center">
                <Icon
                  name="Trophy"
                  size={20}
                  className="mr-2 text-music-yellow"
                />
                Достижения
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                    >
                      <Icon
                        name={achievement.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      {achievement.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div>
              <h4 className="text-lg font-montserrat font-semibold text-gray-800 mb-3 flex items-center">
                <Icon
                  name="Settings"
                  size={20}
                  className="mr-2 text-gray-600"
                />
                Настройки профиля
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start">
                  <Icon name="Edit" size={16} className="mr-2" />
                  Редактировать профиль
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="Camera" size={16} className="mr-2" />
                  Изменить фото
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="Lock" size={16} className="mr-2" />
                  Приватность
                </Button>
                <Button variant="outline" className="justify-start">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Уведомления
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileWindow;

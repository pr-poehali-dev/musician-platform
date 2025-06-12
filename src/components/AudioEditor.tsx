import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface AudioEditorProps {
  onClose: () => void;
}

const AudioEditor = ({ onClose }: AudioEditorProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [trackSettings, setTrackSettings] = useState({
    reverb: [30],
    delay: [20],
    distortion: [0],
    chorus: [15],
  });

  const tracks = [
    {
      id: 1,
      name: "Вокал",
      color: "bg-music-purple",
      level: [85],
      muted: false,
    },
    {
      id: 2,
      name: "Гитара",
      color: "bg-music-orange",
      level: [70],
      muted: false,
    },
    {
      id: 3,
      name: "Барабаны",
      color: "bg-music-blue",
      level: [90],
      muted: false,
    },
    { id: 4, name: "Бас", color: "bg-music-yellow", level: [65], muted: true },
  ];

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setIsPlaying(false);
    }
  };

  return (
    <Card className="w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white border-2 border-music-orange/30">
      <CardHeader className="bg-gradient-orange text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-montserrat font-bold">
            🎛️ Аудиоредактор
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

      <CardContent className="p-6 bg-gray-900">
        {/* Transport Controls */}
        <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-gray-800 rounded-lg">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-gray-700"
          >
            <Icon name="SkipBack" size={20} />
          </Button>

          <Button
            onClick={togglePlayback}
            className={`w-16 h-16 rounded-full ${isPlaying ? "bg-music-orange hover:bg-music-orange/90" : "bg-music-blue hover:bg-music-blue/90"}`}
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-gray-700"
          >
            <Icon name="SkipForward" size={20} />
          </Button>

          <div className="h-8 w-px bg-gray-600 mx-2"></div>

          <Button
            onClick={toggleRecording}
            className={`w-12 h-12 rounded-full ${isRecording ? "bg-red-500 animate-pulse" : "bg-gray-600 hover:bg-red-500/80"}`}
          >
            <Icon name="Mic" size={20} />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-gray-700"
          >
            <Icon name="Square" size={20} />
          </Button>
        </div>

        {/* Waveform Visualization */}
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Звуковая дорожка</h3>
            <Badge className="bg-music-purple">
              {Math.floor(currentTime / 60)}:
              {(currentTime % 60).toString().padStart(2, "0")} / 3:42
            </Badge>
          </div>

          <div className="relative h-24 bg-gray-700 rounded overflow-hidden">
            {/* Simulated waveform */}
            <div className="flex items-center h-full px-2">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1 mx-px rounded ${i < (currentTime / 222) * 100 ? "bg-music-orange" : "bg-gray-500"}`}
                  style={{
                    height: `${Math.random() * 80 + 20}%`,
                  }}
                />
              ))}
            </div>

            {/* Playhead */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-music-yellow shadow-lg"
              style={{ left: `${(currentTime / 222) * 100}%` }}
            />
          </div>

          <Slider
            value={[currentTime]}
            onValueChange={(value) => setCurrentTime(value[0])}
            max={222}
            step={1}
            className="mt-2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mixer */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon
                  name="Sliders"
                  size={20}
                  className="mr-2 text-music-blue"
                />
                Микшер треков
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tracks.map((track) => (
                  <div key={track.id} className="bg-gray-700 p-3 rounded-lg">
                    <div className="text-center mb-3">
                      <div
                        className={`w-8 h-8 ${track.color} rounded-full mx-auto mb-2 flex items-center justify-center`}
                      >
                        <Icon name="Music" size={16} className="text-white" />
                      </div>
                      <div className="text-sm font-medium">{track.name}</div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">
                          Громкость
                        </div>
                        <Slider
                          value={track.level}
                          onValueChange={(value) => {
                            // Update track level logic here
                          }}
                          max={100}
                          className="mb-2"
                        />
                        <div className="text-xs text-center text-gray-400">
                          {track.level[0]}%
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant={track.muted ? "default" : "outline"}
                          className="flex-1 text-xs"
                        >
                          <Icon name="VolumeX" size={12} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs"
                        >
                          <Icon name="Headphones" size={12} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Effects */}
          <div>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Zap" size={20} className="mr-2 text-music-yellow" />
                Эффекты
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Реверб</span>
                    <span>{trackSettings.reverb[0]}%</span>
                  </div>
                  <Slider
                    value={trackSettings.reverb}
                    onValueChange={(value) =>
                      setTrackSettings({ ...trackSettings, reverb: value })
                    }
                    max={100}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Задержка</span>
                    <span>{trackSettings.delay[0]}%</span>
                  </div>
                  <Slider
                    value={trackSettings.delay}
                    onValueChange={(value) =>
                      setTrackSettings({ ...trackSettings, delay: value })
                    }
                    max={100}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Искажение</span>
                    <span>{trackSettings.distortion[0]}%</span>
                  </div>
                  <Slider
                    value={trackSettings.distortion}
                    onValueChange={(value) =>
                      setTrackSettings({ ...trackSettings, distortion: value })
                    }
                    max={100}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Хорус</span>
                    <span>{trackSettings.chorus[0]}%</span>
                  </div>
                  <Slider
                    value={trackSettings.chorus}
                    onValueChange={(value) =>
                      setTrackSettings({ ...trackSettings, chorus: value })
                    }
                    max={100}
                  />
                </div>
              </div>
            </div>

            {/* Master Volume */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon
                  name="Volume2"
                  size={20}
                  className="mr-2 text-music-purple"
                />
                Мастер
              </h3>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Громкость</span>
                  <span>{volume[0]}%</span>
                </div>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  className="mb-4"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  className="bg-music-blue hover:bg-music-blue/90"
                >
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить
                </Button>
                <Button size="sm" variant="outline">
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioEditor;

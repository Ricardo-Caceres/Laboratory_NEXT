'use client';

import { useState } from 'react';

// Complex Subsystems
class DVDPlayer {
  private movie: string = '';

  on(): string {
    return '📀 DVD Player: Turning on';
  }

  off(): string {
    return '📀 DVD Player: Turning off';
  }

  play(movie: string): string {
    this.movie = movie;
    return `📀 DVD Player: Playing "${movie}"`;
  }

  stop(): string {
    return `📀 DVD Player: Stopped "${this.movie}"`;
  }

  eject(): string {
    return '📀 DVD Player: Ejecting disc';
  }
}

class Projector {
  on(): string {
    return '📽️ Projector: Turning on';
  }

  off(): string {
    return '📽️ Projector: Turning off';
  }

  wideScreenMode(): string {
    return '📽️ Projector: Setting to widescreen mode (16:9)';
  }

  normalMode(): string {
    return '📽️ Projector: Setting to normal mode (4:3)';
  }
}

class SoundSystem {
  on(): string {
    return '🔊 Sound System: Turning on';
  }

  off(): string {
    return '🔊 Sound System: Turning off';
  }

  setVolume(level: number): string {
    return `🔊 Sound System: Volume set to ${level}`;
  }

  setSurroundSound(): string {
    return '🔊 Sound System: Surround sound enabled (5.1)';
  }

  setStereo(): string {
    return '🔊 Sound System: Stereo mode enabled';
  }
}

class Lights {
  private brightness: number = 100;

  on(): string {
    this.brightness = 100;
    return '💡 Lights: Turning on (100%)';
  }

  off(): string {
    this.brightness = 0;
    return '💡 Lights: Turning off';
  }

  dim(level: number): string {
    this.brightness = level;
    return `💡 Lights: Dimmed to ${level}%`;
  }
}

class StreamingService {
  login(username: string): string {
    return `📺 Streaming: Logged in as ${username}`;
  }

  logout(): string {
    return '📺 Streaming: Logged out';
  }

  playMovie(movie: string): string {
    return `📺 Streaming: Now playing "${movie}"`;
  }

  stop(): string {
    return '📺 Streaming: Stopped';
  }
}

// Facade
class HomeTheaterFacade {
  private dvd: DVDPlayer;
  private projector: Projector;
  private sound: SoundSystem;
  private lights: Lights;
  private streaming: StreamingService;

  constructor() {
    this.dvd = new DVDPlayer();
    this.projector = new Projector();
    this.sound = new SoundSystem();
    this.lights = new Lights();
    this.streaming = new StreamingService();
  }

  watchMovie(movie: string): string[] {
    const steps: string[] = [];
    steps.push('🎬 Starting movie mode...');
    steps.push(this.lights.dim(10));
    steps.push(this.projector.on());
    steps.push(this.projector.wideScreenMode());
    steps.push(this.sound.on());
    steps.push(this.sound.setVolume(70));
    steps.push(this.sound.setSurroundSound());
    steps.push(this.dvd.on());
    steps.push(this.dvd.play(movie));
    steps.push('🎬 Enjoy your movie!');
    return steps;
  }

  endMovie(): string[] {
    const steps: string[] = [];
    steps.push('🎬 Shutting down movie mode...');
    steps.push(this.dvd.stop());
    steps.push(this.dvd.eject());
    steps.push(this.dvd.off());
    steps.push(this.sound.off());
    steps.push(this.projector.off());
    steps.push(this.lights.on());
    steps.push('🎬 Movie mode ended');
    return steps;
  }

  watchStreaming(service: string, movie: string): string[] {
    const steps: string[] = [];
    steps.push('📺 Starting streaming mode...');
    steps.push(this.lights.dim(20));
    steps.push(this.projector.on());
    steps.push(this.projector.normalMode());
    steps.push(this.sound.on());
    steps.push(this.sound.setVolume(60));
    steps.push(this.sound.setStereo());
    steps.push(this.streaming.login(service));
    steps.push(this.streaming.playMovie(movie));
    steps.push('📺 Enjoy your stream!');
    return steps;
  }

  listenToMusic(): string[] {
    const steps: string[] = [];
    steps.push('🎵 Starting music mode...');
    steps.push(this.lights.dim(30));
    steps.push(this.sound.on());
    steps.push(this.sound.setVolume(50));
    steps.push(this.sound.setSurroundSound());
    steps.push('🎵 Music system ready!');
    return steps;
  }

  allOff(): string[] {
    const steps: string[] = [];
    steps.push('🔴 Shutting down all systems...');
    steps.push(this.dvd.off());
    steps.push(this.streaming.logout());
    steps.push(this.sound.off());
    steps.push(this.projector.off());
    steps.push(this.lights.on());
    steps.push('✅ All systems off');
    return steps;
  }
}

export default function FacadePatternExample() {
  const [theater] = useState(() => new HomeTheaterFacade());
  const [log, setLog] = useState<string[]>([]);
  const [movieTitle, setMovieTitle] = useState('The Matrix');

  const executeSequence = (steps: string[]) => {
    setLog([]);
    let delay = 0;
    steps.forEach((step, index) => {
      setTimeout(() => {
        setLog(prev => [...prev, step]);
      }, delay);
      delay += 300;
    });
  };

  const handleWatchMovie = () => {
    executeSequence(theater.watchMovie(movieTitle));
  };

  const handleEndMovie = () => {
    executeSequence(theater.endMovie());
  };

  const handleWatchStreaming = () => {
    executeSequence(theater.watchStreaming('Netflix', movieTitle));
  };

  const handleListenToMusic = () => {
    executeSequence(theater.listenToMusic());
  };

  const handleAllOff = () => {
    executeSequence(theater.allOff());
  };

  const clearLog = () => {
    setLog([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Facade Pattern</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Simplified Home Theater Control
            </p>
          </div>

          {/* Movie Title Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Movie Title:
            </label>
            <input
              type="text"
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="Enter movie title..."
            />
          </div>

          {/* Control Panel */}
          <div className="mb-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-300">
            <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">
              🎮 One-Button Controls
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={handleWatchMovie}
                className="px-6 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">🎬</span>
                <span>Watch Movie (DVD)</span>
              </button>
              <button
                onClick={handleWatchStreaming}
                className="px-6 py-4 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">📺</span>
                <span>Watch Streaming</span>
              </button>
              <button
                onClick={handleListenToMusic}
                className="px-6 py-4 bg-pink-600 text-white font-bold rounded-lg shadow-md hover:bg-pink-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">🎵</span>
                <span>Listen to Music</span>
              </button>
              <button
                onClick={handleEndMovie}
                className="px-6 py-4 bg-orange-600 text-white font-bold rounded-lg shadow-md hover:bg-orange-700 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">⏹️</span>
                <span>End Movie</span>
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleAllOff}
                className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                🔴 Power Off All
              </button>
              <button
                onClick={clearLog}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                🧹 Clear Log
              </button>
            </div>
          </div>

          {/* System Components */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              System Components:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { icon: '📀', name: 'DVD' },
                { icon: '📽️', name: 'Projector' },
                { icon: '🔊', name: 'Sound' },
                { icon: '💡', name: 'Lights' },
                { icon: '📺', name: 'Streaming' },
              ].map(({ icon, name }) => (
                <div key={name} className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="text-xs text-gray-600 font-medium">{name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Activity Log ({log.length})
            </h3>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {log.length === 0 ? (
                <p className="text-gray-500 italic text-sm text-center py-8">
                  Click a button to start using your home theater
                </p>
              ) : (
                log.map((entry, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg text-sm shadow-sm animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-indigo-600 font-bold mr-2">#{index + 1}</span>
                    <span className="text-gray-700">{entry}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <p className="text-sm text-gray-700">
              <strong className="text-indigo-700">Facade Pattern:</strong> The HomeTheaterFacade provides a simple interface (watchMovie, endMovie, etc.) that coordinates multiple complex subsystems (DVD, Projector, Sound, Lights, Streaming) behind the scenes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

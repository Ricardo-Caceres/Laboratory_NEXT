'use client';

import React, { useState } from 'react';
import { CheckCircle, Circle, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  color: string;
  lessons: string[];
}

export default function TDDLearningModules() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  const modules: Module[] = [
    {
      id: 1,
      title: "Fundamentos de TDD",
      description: "Conceptos básicos y filosofía del desarrollo guiado por pruebas",
      color: "bg-blue-500",
      lessons: [
        "¿Qué es TDD? El ciclo Red-Green-Refactor",
        "Beneficios y casos de uso de TDD",
        "Diferencia entre unit tests, integration tests y e2e tests",
        "Anatomía de un test: arrange, act, assert",
        "Mocking y stubbing: conceptos básicos"
      ]
    },
    {
      id: 2,
      title: "Testing en React",
      description: "Pruebas para componentes y hooks de React",
      color: "bg-cyan-500",
      lessons: [
        "Configuración: Jest + React Testing Library",
        "Testing de componentes funcionales básicos",
        "Testing de props, state y eventos",
        "Testing de hooks personalizados",
        "Snapshot testing: cuándo usarlo (y cuándo no)",
        "Testing de contexto y providers",
        "Mocking de módulos y dependencias"
      ]
    },
    {
      id: 3,
      title: "Testing en Next.js",
      description: "Pruebas específicas para aplicaciones Next.js",
      color: "bg-purple-500",
      lessons: [
        "Configuración de testing en Next.js",
        "Testing de páginas y routing",
        "Testing de API routes",
        "Testing de Server Components (App Router)",
        "Testing de getServerSideProps y getStaticProps",
        "Testing de middleware",
        "Mocking de next/router y next/navigation"
      ]
    },
    {
      id: 4,
      title: "Testing en React Native",
      description: "Pruebas para aplicaciones móviles React Native",
      color: "bg-pink-500",
      lessons: [
        "Configuración: Jest + React Native Testing Library",
        "Testing de componentes nativos",
        "Testing de navegación (React Navigation)",
        "Testing de gestos y animaciones",
        "Mocking de módulos nativos",
        "Testing de permisos y APIs nativas",
        "Testing en iOS vs Android: consideraciones"
      ]
    },
    {
      id: 5,
      title: "Prácticas Avanzadas",
      description: "Técnicas y patrones para mejorar tus tests",
      color: "bg-green-500",
      lessons: [
        "Testing de código asíncrono y promesas",
        "Testing de llamadas a APIs (MSW - Mock Service Worker)",
        "Cobertura de código: métricas y objetivos realistas",
        "Tests flaky: cómo identificarlos y solucionarlos",
        "Performance testing y optimización",
        "CI/CD: integración de tests en pipelines",
        "TDD en equipos: mejores prácticas"
      ]
    }
  ];

  const toggleModule = (moduleId: number): void => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const toggleLesson = (moduleId: number, lessonIndex: number): void => {
    const key = `${moduleId}-${lessonIndex}`;
    setCompletedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getModuleProgress = (moduleId: number): number => {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const completed = module.lessons.filter((_, idx) => 
      completedLessons[`${moduleId}-${idx}`]
    ).length;
    
    return Math.round((completed / module.lessons.length) * 100);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            TDD para React Ecosystem
          </h1>
          <p className="text-slate-600">
            Guía completa de Test-Driven Development para React, Next.js y React Native
          </p>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((module) => {
            const isExpanded = expandedModule === module.id;
            const progress = getModuleProgress(module.id);
            
            return (
              <div 
                key={module.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md"
              >
                {/* Module Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-6 flex items-start gap-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-xl">{module.id}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold text-slate-800 mb-1">
                      {module.title}
                    </h2>
                    <p className="text-slate-600 text-sm mb-3">
                      {module.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${module.color} transition-all duration-300`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-600 w-12 text-right">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="shrink-0 text-slate-400">
                    {isExpanded ? <ChevronDown /> : <ChevronRight />}
                  </div>
                </button>

                {/* Lessons */}
                {isExpanded && (
                  <div className="border-t border-slate-200 bg-slate-50">
                    <div className="p-6 space-y-2">
                      {module.lessons.map((lesson, idx) => {
                        const lessonKey = `${module.id}-${idx}`;
                        const isCompleted = completedLessons[lessonKey];
                        
                        return (
                          <button
                            key={lessonKey}
                            onClick={() => toggleLesson(module.id, idx)}
                            className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors text-left group"
                          >
                            <div className="shrink-0 mt-0.5">
                              {isCompleted ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
                              )}
                            </div>
                            <span className={`text-sm ${
                              isCompleted 
                                ? 'text-slate-500 line-through' 
                                : 'text-slate-700 group-hover:text-slate-900'
                            }`}>
                              {lesson}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Tips */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Tips para aprender TDD</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Empieza escribiendo tests simples antes de aprender patrones complejos</li>
            <li>• Practica el ciclo Red-Green-Refactor en proyectos pequeños</li>
            <li>• Lee tests de proyectos open source para ver ejemplos reales</li>
            <li>• No busques 100% de cobertura, enfócate en tests que aporten valor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
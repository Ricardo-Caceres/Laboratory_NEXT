'use client';

import { useState } from 'react';

// Command Interface
interface Command {
  execute(): void;
  undo(): void;
  getDescription(): string;
}

// Receiver - TextEditor
class TextEditor {
  private content: string = '';

  getText(): string {
    return this.content;
  }

  insertText(text: string, position: number): void {
    this.content = this.content.slice(0, position) + text + this.content.slice(position);
  }

  deleteText(position: number, length: number): void {
    this.content = this.content.slice(0, position) + this.content.slice(position + length);
  }

  setText(text: string): void {
    this.content = text;
  }
}

// Concrete Commands
class InsertTextCommand implements Command {
  private editor: TextEditor;
  private text: string;
  private position: number;

  constructor(editor: TextEditor, text: string, position: number) {
    this.editor = editor;
    this.text = text;
    this.position = position;
  }

  execute(): void {
    this.editor.insertText(this.text, this.position);
  }

  undo(): void {
    this.editor.deleteText(this.position, this.text.length);
  }

  getDescription(): string {
    return `Insert "${this.text}" at position ${this.position}`;
  }
}

class DeleteTextCommand implements Command {
  private editor: TextEditor;
  private position: number;
  private length: number;
  private deletedText: string = '';

  constructor(editor: TextEditor, position: number, length: number) {
    this.editor = editor;
    this.position = position;
    this.length = length;
  }

  execute(): void {
    const text = this.editor.getText();
    this.deletedText = text.slice(this.position, this.position + this.length);
    this.editor.deleteText(this.position, this.length);
  }

  undo(): void {
    this.editor.insertText(this.deletedText, this.position);
  }

  getDescription(): string {
    return `Delete ${this.length} characters at position ${this.position}`;
  }
}

class ToUpperCaseCommand implements Command {
  private editor: TextEditor;
  private previousText: string = '';

  constructor(editor: TextEditor) {
    this.editor = editor;
  }

  execute(): void {
    this.previousText = this.editor.getText();
    this.editor.setText(this.previousText.toUpperCase());
  }

  undo(): void {
    this.editor.setText(this.previousText);
  }

  getDescription(): string {
    return 'Convert to UPPERCASE';
  }
}

// Invoker - CommandHistory
class CommandHistory {
  private history: Command[] = [];
  private currentIndex: number = -1;

  execute(command: Command): void {
    command.execute();
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(command);
    this.currentIndex++;
  }

  undo(): boolean {
    if (this.currentIndex >= 0) {
      this.history[this.currentIndex].undo();
      this.currentIndex--;
      return true;
    }
    return false;
  }

  redo(): boolean {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      this.history[this.currentIndex].execute();
      return true;
    }
    return false;
  }

  canUndo(): boolean {
    return this.currentIndex >= 0;
  }

  canRedo(): boolean {
    return this.currentIndex < this.history.length - 1;
  }

  getHistory(): Command[] {
    return this.history.slice(0, this.currentIndex + 1);
  }
}

export default function CommandPatternExample() {
  const [editor] = useState(() => new TextEditor());
  const [history] = useState(() => new CommandHistory());
  const [text, setText] = useState('');
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const updateState = () => {
    setText(editor.getText());
    setCanUndo(history.canUndo());
    setCanRedo(history.canRedo());
    setCommandLog(history.getHistory().map(cmd => cmd.getDescription()));
  };

  const handleInsert = (insertText: string) => {
    const command = new InsertTextCommand(editor, insertText, editor.getText().length);
    history.execute(command);
    updateState();
  };

  const handleDelete = () => {
    const currentText = editor.getText();
    if (currentText.length > 0) {
      const command = new DeleteTextCommand(editor, currentText.length - 5, Math.min(5, currentText.length));
      history.execute(command);
      updateState();
    }
  };

  const handleUpperCase = () => {
    const command = new ToUpperCaseCommand(editor);
    history.execute(command);
    updateState();
  };

  const handleUndo = () => {
    if (history.undo()) {
      updateState();
    }
  };

  const handleRedo = () => {
    if (history.redo()) {
      updateState();
    }
  };

  const handleClear = () => {
    editor.setText('');
    updateState();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Command Pattern</h1>
            <p className="text-base sm:text-lg text-gray-600">
              Text Editor with Undo/Redo functionality
            </p>
          </div>

          {/* Editor Display */}
          <div className="mb-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 min-h-[120px]">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <span className="font-semibold text-gray-700">Editor Content:</span>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 font-mono text-sm min-h-[60px] break-words">
              {text || <span className="text-gray-400 italic">Empty document...</span>}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <button
              onClick={() => handleInsert('Hello ')}
              className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              + Add "Hello"
            </button>
            <button
              onClick={() => handleInsert('World!')}
              className="px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              + Add "World!"
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              🗑 Delete 5 chars
            </button>
            <button
              onClick={handleUpperCase}
              className="px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              ⬆️ UPPERCASE
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              🧹 Clear
            </button>
          </div>

          {/* Undo/Redo Controls */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleUndo}
              disabled={!canUndo}
              className={`flex-1 px-6 py-4 font-bold rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                canUndo
                  ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              Undo
            </button>
            <button
              onClick={handleRedo}
              disabled={!canRedo}
              className={`flex-1 px-6 py-4 font-bold rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                canRedo
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Redo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
              </svg>
            </button>
          </div>

          {/* Command History */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Command History ({commandLog.length})
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {commandLog.length === 0 ? (
                <p className="text-gray-500 italic text-sm">No commands executed yet</p>
              ) : (
                commandLog.map((cmd, index) => (
                  <div key={index} className="bg-white px-3 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm">
                    <span className="text-purple-600 font-bold">#{index + 1}</span>
                    <span className="text-gray-700">{cmd}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm text-gray-700">
              <strong className="text-purple-700">Command Pattern:</strong> Each action (insert, delete, uppercase) is encapsulated as a command object with execute() and undo() methods. The CommandHistory acts as an invoker, managing the execution and reversal of commands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

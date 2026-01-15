import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function CommandPatternPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Command Pattern"
        description="⚡ **Command Pattern** - Encapsula acciones como objetos ejecutables

El Command Pattern es un patrón comportamental GoF que convierte solicitudes en objetos independientes con toda la información necesaria. Es el fundamento de sistemas undo/redo, transacciones, event sourcing y Redux.

**🎯 ¿Cuándo usarlo?**
- Implementar **undo/redo** en editores o aplicaciones
- Crear **sistemas de transacciones** reversibles
- Implementar **cola de tareas** o job queues
- Arquitecturas **Event Sourcing** y **CQRS**
- **Redux actions** en aplicaciones React
- **Macros** que ejecutan secuencias de operaciones

**🔑 Conceptos Clave:**
- **Command**: Interfaz con método <code>execute()</code> y <code>undo()</code>
- **ConcreteCommand**: Implementación específica del comando
- **Invoker**: Ejecuta comandos sin conocer detalles
- **Receiver**: Objeto que realiza la acción real
- **Client**: Crea comandos y los asocia a invokers

**✅ Ventajas:**
- 🔄 **Undo/Redo**: Fácil implementar reversión de operaciones
- 🔓 **Open/Closed**: Nuevos comandos sin modificar código existente
- 📝 **Logging**: Registra historial de comandos ejecutados
- 📦 **Queuing**: Cola comandos para ejecución async
- 🧪 **Testeable**: Fácil testear comandos de forma aislada

**📐 Estructura:**
\`\`\`typescript
interface Command {
  execute(): void;
  undo(): void;
}

class ConcreteCommand implements Command {
  constructor(private receiver: Receiver) {}
  
  execute() {
    this.receiver.action();
  }
  
  undo() {
    this.receiver.reverseAction();
  }
}

class Invoker {
  private history: Command[] = [];
  
  executeCommand(cmd: Command) {
    cmd.execute();
    this.history.push(cmd);
  }
  
  undo() {
    this.history.pop()?.undo();
  }
}
\`\`\`

**💡 Casos de Uso Reales:**
- **Photoshop/Figma**: Cada operación (resize, rotate, color) es un Command
- **Git**: Commits son Commands, revert es undo
- **Redux**: Actions son Commands, reducers son Receivers
- **VS Code**: Multi-cursor edits son Commands ejecutados en batch
- **Database**: Transacciones como Commands ejecutables/reversibles

**🆚 Command vs Strategy:**
- **Command**: Encapsula operaciones con undo/redo
- **Strategy**: Intercambia algoritmos sin undo

**Ejemplo del código:**
Sistema de undo/redo para un editor de texto con comandos <code>InsertText</code>, <code>DeleteText</code>, y <code>ReplaceText</code>."
        codeContent={[
          {
            filePath: 'patterns/command-undo-redo.ts',
            content: `// ✅ Command Pattern: Undo/Redo System
interface Command {
  execute(): void;
  undo(): void;
}

// Text Editor Receiver
class TextEditor {
  private content = '';
  
  insert(text: string, position: number) {
    this.content = 
      this.content.slice(0, position) + 
      text + 
      this.content.slice(position);
  }
  
  delete(position: number, length: number) {
    this.content = 
      this.content.slice(0, position) + 
      this.content.slice(position + length);
  }
  
  getText() { return this.content; }
}

// Concrete Commands
class InsertTextCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string,
    private position: number
  ) {}
  
  execute() {
    this.editor.insert(this.text, this.position);
  }
  
  undo() {
    this.editor.delete(this.position, this.text.length);
  }
}

class DeleteTextCommand implements Command {
  private deletedText = '';
  
  constructor(
    private editor: TextEditor,
    private position: number,
    private length: number
  ) {}
  
  execute() {
    this.deletedText = this.editor.getText()
      .slice(this.position, this.position + this.length);
    this.editor.delete(this.position, this.length);
  }
  
  undo() {
    this.editor.insert(this.deletedText, this.position);
  }
}

// Invoker with History
class CommandManager {
  private history: Command[] = [];
  private currentIndex = -1;
  
  execute(command: Command) {
    command.execute();
    // Remove forward history
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(command);
    this.currentIndex++;
  }
  
  undo() {
    if (this.currentIndex >= 0) {
      this.history[this.currentIndex].undo();
      this.currentIndex--;
    }
  }
  
  redo() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      this.history[this.currentIndex].execute();
    }
  }
}

// Usage
const editor = new TextEditor();
const manager = new CommandManager();

manager.execute(new InsertTextCommand(editor, 'Hello', 0));
manager.execute(new InsertTextCommand(editor, ' World', 5));
console.log(editor.getText()); // "Hello World"

manager.undo(); // Remove " World"
console.log(editor.getText()); // "Hello"

manager.redo(); // Re-add " World"
console.log(editor.getText()); // "Hello World"`,
          },
          {
            filePath: 'patterns/command-redux.ts',
            content: `// Redux as Command Pattern
type State = { count: number };

// Commands (Actions)
interface Action {
  type: string;
  payload?: any;
}

class IncrementCommand implements Action {
  type = 'INCREMENT';
  constructor(public payload: number = 1) {}
}

class DecrementCommand implements Action {
  type = 'DECREMENT';
  constructor(public payload: number = 1) {}
}

// Receiver (Reducer)
function counterReducer(state: State = { count: 0 }, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

// Invoker (Store)
class Store {
  private state: State;
  private history: Action[] = [];
  
  constructor(private reducer: typeof counterReducer, initialState: State) {
    this.state = initialState;
  }
  
  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
    this.history.push(action);
  }
  
  getState() {
    return this.state;
  }
  
  getHistory() {
    return this.history;
  }
}

// Usage
const store = new Store(counterReducer, { count: 0 });
store.dispatch(new IncrementCommand(5));
store.dispatch(new IncrementCommand(3));
store.dispatch(new DecrementCommand(2));
console.log(store.getState()); // { count: 6 }
console.log(store.getHistory()); // All commands executed`,
          },
          {
            filePath: 'patterns/command-macro.ts',
            content: `// Macro Command: Execute multiple commands
class MacroCommand implements Command {
  constructor(private commands: Command[]) {}
  
  execute() {
    this.commands.forEach(cmd => cmd.execute());
  }
  
  undo() {
    // Undo in reverse order
    [...this.commands].reverse().forEach(cmd => cmd.undo());
  }
}

// Usage: Create a "Save & Exit" macro
const saveAndExit = new MacroCommand([
  new SaveDocumentCommand(doc),
  new CloseWindowCommand(window),
  new LogActivityCommand('Document closed')
]);

manager.execute(saveAndExit); // Executes all 3 commands
manager.undo(); // Undoes all 3 in reverse`,
          }
        ]}
      />
      <RightPanel>
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="text-center max-w-md">
            <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Command Pattern</h2>
            <p className="text-gray-600 mb-6">Encapsulate actions as executable objects with undo/redo support</p>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <code className="text-sm text-gray-800 block">
                manager.execute(command)<br/>
                manager.undo()<br/>
                manager.redo()
              </code>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}

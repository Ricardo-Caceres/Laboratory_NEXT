'use client';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = 'javascript', filename }: CodeBlockProps) {
  // Simple syntax highlighting con regex
  const highlightCode = (code: string) => {
    let highlighted = code;

    // Escapar HTML
    highlighted = highlighted
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Keywords de JavaScript/TypeScript
    const keywords = /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|class|extends|import|export|from|default|async|await|yield|typeof|instanceof|void|delete|in|of|this|super|static|get|set|constructor|null|undefined|true|false)\b/g;
    highlighted = highlighted.replace(keywords, '<span class="code-keyword">$1</span>');

    // Strings (simple y doble comilla)
    const strings = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
    highlighted = highlighted.replace(strings, '<span class="code-string">$&</span>');

    // Comentarios // 
    const lineComments = /(\/\/.*$)/gm;
    highlighted = highlighted.replace(lineComments, '<span class="code-comment">$1</span>');

    // Comentarios /* */
    const blockComments = /(\/\*[\s\S]*?\*\/)/g;
    highlighted = highlighted.replace(blockComments, '<span class="code-comment">$1</span>');

    // Números
    const numbers = /\b(\d+\.?\d*)\b/g;
    highlighted = highlighted.replace(numbers, '<span class="code-number">$1</span>');

    // Funciones (word seguido de paréntesis)
    const functions = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g;
    highlighted = highlighted.replace(functions, '<span class="code-function">$1</span>');

    // JSX Tags
    const jsxTags = /(&lt;\/?[A-Z][a-zA-Z0-9]*)/g;
    highlighted = highlighted.replace(jsxTags, '<span class="code-tag">$1</span>');

    // Properties (objeto.propiedad)
    const properties = /\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
    highlighted = highlighted.replace(properties, '.<span class="code-property">$1</span>');

    return highlighted;
  };

  const highlightedCode = highlightCode(code);

  return (
    <div className="bg-gray-950 rounded-xl border border-gray-800 shadow-lg overflow-hidden">
      {/* Header con círculos de ventana */}
      <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {filename && (
          <span className="text-gray-400 text-xs font-mono ml-2">{filename}</span>
        )}
      </div>
      
      {/* Código */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code 
            className="text-gray-100"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}

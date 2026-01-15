import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example_demo'));

export default function ControlledUncontrolledPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Controlled vs Uncontrolled Components"
        description="🎮 **Controlled vs Uncontrolled** - Dos filosofías para manejar inputs en React

La diferencia entre componentes controlados y no controlados es fundamental en React. **Controlled**: React controla el valor (single source of truth). **Uncontrolled**: DOM controla el valor (acceso via refs).

**🎯 ¿Cuándo usar cada uno?**

**Controlled (Recomendado):**
- Validación en **tiempo real**
- **Conditional rendering** basado en input
- **Disable/enable** submit button dinámicamente
- **Format** input mientras usuario escribe
- Múltiples inputs **sincronizados**

**Uncontrolled:**
- **Formularios simples** que no necesitan validación inmediata
- Integrar **librerías no-React** (jQuery plugins, etc)
- **File inputs** (siempre uncontrolled)
- **Performance crítica** con muchos campos

**🔑 Conceptos Clave:**
- **Controlled**: <code>value</code> prop + <code>onChange</code>, React es source of truth
- **Uncontrolled**: Sin <code>value</code> prop, usa <code>ref</code> para acceder DOM
- **DefaultValue**: Valor inicial para uncontrolled
- **Single Source of Truth**: Controlled garantiza consistencia

**✅ Ventajas Controlled:**
- ✨ **Validación inmediata** mientras usuario escribe
- 🔄 **Sincronización** automática con state
- 🧪 **Testeable**: Fácil simular inputs en tests
- 📊 **Debugging**: Valor siempre visible en React DevTools
- 🎯 **Predecible**: Comportamiento consistente

**✅ Ventajas Uncontrolled:**
- ⚡ **Performance**: Menos re-renders
- 🎯 **Simple**: Código más corto para casos básicos
- 🔧 **Legacy**: Fácil integrar con código no-React
- 📁 **File inputs**: Única opción para files

**📐 Controlled:**
\`\`\`tsx
function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
\`\`\`

**📐 Uncontrolled:**
\`\`\`tsx
function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };
  
  return <input ref={inputRef} defaultValue='' />;
}
\`\`\`

**💡 Casos de Uso Reales:**
- **Controlled**: Login forms, search bars, filters, calculators
- **Uncontrolled**: Newsletter signup, simple contact forms
- **File Upload**: <code>&lt;input type='file' ref={fileRef} /&gt;</code> (always uncontrolled)
- **Form Libraries**: React Hook Form usa uncontrolled para performance

**🆚 Controlled vs Uncontrolled:**
| Aspect | Controlled | Uncontrolled |
|--------|-----------|-------------|
| Source of Truth | React state | DOM |
| Access Value | state variable | ref.current.value |
| Validation | Real-time | On submit |
| Re-renders | Every keystroke | Manual |
| Initial Value | value prop | defaultValue prop |

**⚠️ Consideraciones:**
- **NO mezcles**: <code>value</code> + <code>defaultValue</code> causa warnings
- **File inputs**: Siempre uncontrolled (security)
- **Performance**: Si tienes 100+ inputs, considera uncontrolled o React Hook Form
- **Testing**: Controlled más fácil de testear

**Regla general**: **Usa Controlled** por defecto, Uncontrolled solo cuando:
1. Performance es crítica
2. Integrando código legacy
3. File inputs
4. Formulario muy simple

**Ejemplo del código:**
Dos inputs lado a lado - uno controlled (React maneja valor), otro uncontrolled (DOM maneja valor via ref)."
        codeContent={[
          {
            filePath: 'patterns/controlled-component.tsx',
            content: `// Controlled Component
import { useState } from 'react';

function ControlledForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Real-time validation
  const validateEmail = (value: string) => {
    if (!value.includes('@')) {
      setErrors(prev => ({ ...prev, email: 'Invalid email' }));
    } else {
      setErrors(prev => {
        const { email, ...rest } = prev;
        return rest;
      });
    }
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log('Submit:', { email, password });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={errors.email ? 'border-red-500' : ''}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={8}
      />
      
      <button 
        type="submit" 
        disabled={!email || !password || Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
}`,
          },
          {
            filePath: 'patterns/uncontrolled-component.tsx',
            content: `// Uncontrolled Component
import { useRef } from 'react';

function UncontrolledForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Access values only on submit
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    console.log('Submit:', { email, password });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={emailRef}
        type="email"
        defaultValue=""
        name="email"
      />
      
      <input
        ref={passwordRef}
        type="password"
        defaultValue=""
        name="password"
        minLength={8}
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}

// File input (ALWAYS uncontrolled)
function FileUpload() {
  const fileRef = useRef<HTMLInputElement>(null);
  
  const handleUpload = () => {
    const files = fileRef.current?.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append('file', files[0]);
      // Upload formData
    }
  };
  
  return (
    <div>
      <input 
        type="file" 
        ref={fileRef}
        accept="image/*"
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}`,
          },
          {
            filePath: 'patterns/hybrid-react-hook-form.tsx',
            content: `// React Hook Form - Best of both worlds
import { useForm } from 'react-hook-form';

function HybridForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch 
  } = useForm();
  
  // Uncontrolled performance + Controlled features
  const password = watch('password');
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
            message: 'Invalid email'
          }
        })}
        type="email"
      />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input
        {...register('password', {
          required: true,
          minLength: {
            value: 8,
            message: 'Min 8 characters'
          }
        })}
        type="password"
      />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

// Ventajas:
// - Performance de uncontrolled (refs internos)
// - Features de controlled (validation, errors)
// - Menos re-renders
// - Built-in validation`,
          }
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}

export const metadata = {
  title: 'Controlled vs Uncontrolled Components | Design Patterns',
  description: 'Understanding the difference between controlled and uncontrolled form inputs',
};

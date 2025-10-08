export default function HexagonalArchitecturePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mb-6 p-4 sm:p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Hexagonal Architecture</h1>
          <div className="text-sm sm:text-base text-gray-300 space-y-4">
            <p>
              <strong className="text-cyan-400">Hexagonal Architecture</strong> (también conocida como Ports and Adapters) separa la lógica de negocio del código de infraestructura mediante puertos y adaptadores.
            </p>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Componentes principales:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li><strong>Core/Domain:</strong> Lógica de negocio pura</li>
                <li><strong>Ports:</strong> Interfaces que definen cómo interactuar con el core</li>
                <li><strong>Adapters:</strong> Implementaciones concretas de los ports</li>
                <li><strong>Primary/Driving Side:</strong> UI, API, Tests</li>
                <li><strong>Secondary/Driven Side:</strong> DB, APIs externas, Servicios</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Ventajas:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Altamente testeable</li>
                <li>Independiente de frameworks</li>
                <li>Fácil de mantener y evolucionar</li>
                <li>Permite cambiar implementaciones fácilmente</li>
              </ul>
            </div>

            <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-700">
              <p className="text-purple-200 text-sm">
                <strong>Uso en React:</strong> Los hooks personalizados pueden actuar como ports, mientras que los servicios API son adapters. El core contiene la lógica de negocio pura.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hexagonal Architecture</h2>
            <p className="text-gray-600">Ports and Adapters Pattern</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="bg-white rounded p-3 font-mono text-xs overflow-x-auto border border-gray-300">
                <pre className="text-gray-800">{`// Port (Interface)
interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User>;
}

// Core Domain
class UserService {
  constructor(private repo: UserRepository) {}
  
  async createUser(data: UserData) {
    const user = new User(data);
    await this.repo.save(user);
    return user;
  }
}

// Adapter (Implementation)
class APIUserRepository implements UserRepository {
  async save(user: User) {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

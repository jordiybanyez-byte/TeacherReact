interface BuscadorProps {
  valor: string;
  onCambio: (valor: string) => void;
  isDark: boolean;
}

export function Buscador({ valor, onCambio, isDark }: BuscadorProps) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Buscar por nombre o email..."
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
          isDark 
            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
        }`}
      />
    </div>
  );
}
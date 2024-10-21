import Calculator from './components/Calculator';

export default function Home() {
  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="text-3xl text-center mb-6">Calculator</h1>
      {/* Render the Calculator (Client Component) */}
      <Calculator />
    </div>
  );
}

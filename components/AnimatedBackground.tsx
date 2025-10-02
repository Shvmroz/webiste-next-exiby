'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Bubbles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#2684FC]/5 to-[#4A90E2]/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-[#4A90E2]/5 to-[#2684FC]/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-r from-[#2684FC]/3 to-[#4A90E2]/3 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-[#2684FC]/20 rounded-full animate-bounce`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 500}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`
          }}
        ></div>
      ))}
    </div>
  );
}
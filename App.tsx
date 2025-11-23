import React, { useState } from 'react';
import ScalpMap from './components/ScalpMap';
import { Gender } from './types';
import { User, Sparkles, ArrowRight } from 'lucide-react';
import VietBeautyLogo from './components/VietBeautyLogo';

const App: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col font-sans">
      
      <header className="w-full bg-white shadow-sm border-b border-slate-100 py-4 z-10 relative">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center gap-6 pr-28">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Hair Analysis Tool</h1>
            <p className="text-slate-500 text-sm">Công cụ trực quan hóa sức khỏe da đầu</p>
          </div>
          <div className="flex items-center gap-4">
            {selectedGender && (
              <button
                onClick={() => setSelectedGender(null)}
                className="text-sm text-slate-500 hover:text-rose-500 font-medium transition-colors"
              >
                Đổi giới tính
              </button>
            )}
          </div>
        </div>
        <a
          href="https://minoxidil.com.vn/"
          target="_blank"
          rel="noreferrer"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-50 rounded-full px-3 py-2 hover:bg-emerald-100 transition-colors shadow-sm"
          aria-label="Viet Beauty - Dược mỹ phẩm chính hãng"
        >
          <VietBeautyLogo />
        </a>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        {!selectedGender ? (
          // SELECTION SCREEN
          <div className="max-w-4xl w-full animate-fadeIn">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-3">Chọn đối tượng phân tích</h2>
              <p className="text-slate-500">Đặc điểm rụng tóc và vùng da đầu có sự khác biệt giữa Nam và Nữ</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
              {/* Male Card */}
              <button
                onClick={() => setSelectedGender('male')}
                className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:border-blue-300 hover:shadow-blue-100/50 transition-all duration-300 text-left flex flex-col items-center md:items-start"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <User size={32} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                  Nam giới
                </h3>
                <p className="text-slate-500 mb-6 text-center md:text-left">
                  Phân tích theo mô hình rụng tóc hói kiểu nam (Androgenetic Alopecia), chữ M, hói đỉnh.
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  BẮT ĐẦU <ArrowRight size={16} />
                </div>
              </button>

              {/* Female Card */}
              <button
                onClick={() => setSelectedGender('female')}
                className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:border-rose-300 hover:shadow-rose-100/50 transition-all duration-300 text-left flex flex-col items-center md:items-start"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <Sparkles size={32} strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-rose-600 transition-colors">
                  Nữ giới
                </h3>
                <p className="text-slate-500 mb-6 text-center md:text-left">
                  Phân tích theo mô hình rụng tóc lan tỏa, thưa đỉnh và đường rẽ ngôi (Ludwig Scale).
                </p>

                <div className="mt-auto flex items-center gap-2 text-rose-600 font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  BẮT ĐẦU <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>
        ) : (
          // MAP COMPONENT
          <ScalpMap 
            gender={selectedGender} 
            onBack={() => setSelectedGender(null)} 
          />
        )}
      </main>

      <footer className="w-full py-6 text-center text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} Scalp Health Visualizer. Disclaimer: For informational purposes only.</p>
      </footer>
    </div>
  );
};

export default App;
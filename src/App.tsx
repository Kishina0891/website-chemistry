import React, { useState, useEffect } from 'react';
import { BookOpen, FlaskConical, Recycle, Zap, Award, Users, BookMarked, MonitorPlay, Flame, Droplets, CheckCircle2, XCircle, GripHorizontal, ArrowRight, Play, Thermometer, Battery, Beaker } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Header ---
const Header = ({ currentPage, setCurrentPage }: { currentPage: number, setCurrentPage: (p: number) => void }) => (
  <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 md:px-20 py-6 text-white z-20 bg-black/20 backdrop-blur-sm">
    <div className="text-2xl md:text-3xl font-bold tracking-wider cursor-pointer flex items-center gap-2" onClick={() => setCurrentPage(0)}>
      <FlaskConical className="text-cyan-400" />
      <span>Bài <span className="text-cyan-400">15</span></span>
    </div>
    <nav className="hidden md:flex gap-8 font-medium">
      <button onClick={() => setCurrentPage(0)} className={`hover:text-cyan-300 transition ${currentPage === 0 ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Giới thiệu</button>
      <button onClick={() => setCurrentPage(1)} className={`hover:text-cyan-300 transition ${currentPage === 1 ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Bài học</button>
      <button onClick={() => setCurrentPage(2)} className={`hover:text-cyan-300 transition ${currentPage === 2 ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Thí nghiệm</button>
      <button onClick={() => setCurrentPage(3)} className={`hover:text-cyan-300 transition ${currentPage === 3 ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Bài tập</button>
    </nav>
  </header>
);

// --- Next Page Button ---
const NextPageButton = ({ onClick, text }: { onClick: () => void, text: string }) => (
  <div className="flex justify-center mt-16 mb-8">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:shadow-[0_0_60px_rgba(6,182,212,0.7)]"
    >
      <span className="mr-3 text-lg">{text}</span>
      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </motion.button>
  </div>
);

// --- Page 0: Home / Intro ---
const HomePage = ({ setCurrentPage }: { key?: string, setCurrentPage: (p: number) => void }) => {
  const features = [
    { icon: <FlaskConical size={40} />, title: 'NGUYÊN TẮC TÁCH', desc: 'Tìm hiểu cách khử ion kim loại trong hợp chất thành nguyên tử tự do.' },
    { icon: <Flame size={40} />, title: 'CÁC PHƯƠNG PHÁP', desc: 'Nhiệt luyện, thủy luyện và điện phân - 3 phương pháp cốt lõi.' },
    { icon: <Recycle size={40} />, title: 'TÁI CHẾ', desc: 'Bảo vệ môi trường và tiết kiệm tài nguyên thông qua tái chế.' },
    { icon: <BookOpen size={40} />, title: 'THỰC HÀNH & ÔN TẬP', desc: 'Làm thí nghiệm ảo và củng cố kiến thức qua bài tập tương tác.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-50 pb-20">
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50"></div>
        </div>
        <div className="relative z-10 max-w-5xl px-4 mt-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <span className="px-4 py-1.5 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-sm font-semibold tracking-wider uppercase mb-6 inline-block">
              Hóa Học 12
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200"
          >
            TÁCH KIM LOẠI & TÁI CHẾ
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-10 font-light text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Khám phá các phương pháp điều chế kim loại từ quặng trong tự nhiên và tầm quan trọng của việc tái chế kim loại đối với sự phát triển bền vững.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-500/30 transform rotate-3">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <NextPageButton onClick={() => setCurrentPage(1)} text="Bắt đầu Bài học" />
    </motion.div>
  );
};

// --- Page 1: Lesson Content ---
const LessonPage = ({ setCurrentPage }: { key?: string, setCurrentPage: (p: number) => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Nội Dung Bài Học</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* I. Nguyên tắc */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-bl-full -z-10 opacity-50"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-cyan-100 text-cyan-600 rounded-2xl shadow-inner">
              <FlaskConical size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">I. Nguyên tắc tách kim loại</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Trong tự nhiên, hầu hết các kim loại tồn tại dưới dạng hợp chất (trừ các kim loại rất yếu như Au, Pt...). Để thu được kim loại tự do, ta cần <strong>khử ion kim loại thành nguyên tử kim loại</strong>. Quá trình này thường được thực hiện từ các loại quặng kim loại có trong tự nhiên.
              </p>
              <div className="bg-[#1e3a8a] px-10 py-8 rounded-2xl shadow-xl inline-block border border-blue-700">
                <p className="text-3xl font-mono text-center text-white font-bold tracking-wider">
                  M<sup>n+</sup> + ne &rarr; M
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img src="https://vast.gov.vn/documents/20182/9475886/phamtichxuan.1.jpg/2298f059-09b4-4270-8644-b2e1898693f7?t=1638862602598" alt="Quặng kim loại" className="rounded-2xl shadow-md w-full object-cover h-64" referrerPolicy="no-referrer" />
              <p className="text-sm text-center text-gray-500 mt-2 italic">Các loại quặng kim loại tự nhiên tại Việt Nam</p>
            </div>
          </div>
        </motion.div>

        {/* II. Các phương pháp */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">II. Các phương pháp tách kim loại</h2>
          
          {/* 1. Nhiệt luyện - CHÚ TRỌNG NHẤT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-t-8 border-orange-500 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full -z-10 opacity-60"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/40">
                <Flame size={36} />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">1. Phương pháp nhiệt luyện</h3>
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
              Là phương pháp phổ biến nhất trong công nghiệp luyện kim, dùng để điều chế các kim loại hoạt động trung bình và yếu (đứng sau Al trong dãy HĐHH như Zn, Fe, Sn, Pb, Cu...).
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-4 text-2xl flex items-center gap-2">
                  <Thermometer className="text-orange-500" /> Nguyên tắc cốt lõi
                </h4>
                <p className="text-gray-800 mb-4 text-lg">
                  Sử dụng các chất khử mạnh như <strong>C, CO, H<sub>2</sub></strong>, hoặc kim loại mạnh (như <strong>Al</strong>) để khử ion kim loại trong hợp chất oxide ở nhiệt độ rất cao.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold flex-shrink-0">C</div>
                    <p className="text-gray-700"><strong>Cacbon (C) & CO:</strong> Thường dùng trong công nghiệp quy mô lớn (VD: luyện gang, thép trong lò cao từ quặng hematit).</p>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">H₂</div>
                    <p className="text-gray-700"><strong>Khí Hydro (H<sub>2</sub>):</strong> Dùng để điều chế kim loại có độ tinh khiết cao (VD: W, Mo, Cu) vì sản phẩm phụ là hơi nước, không làm lẫn tạp chất.</p>
                  </li>
                  <li className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold flex-shrink-0">Al</div>
                    <p className="text-gray-700"><strong>Nhôm (Al) - Nhiệt nhôm:</strong> Dùng điều chế kim loại khó nóng chảy (Cr, Mn) hoặc dùng để hàn đường ray tàu hỏa tại chỗ.</p>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-bold text-gray-900 text-2xl border-b-2 border-orange-200 pb-3">Các phản ứng tiêu biểu</h4>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group">
                  <p className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-wider">Khử bằng CO (Luyện gang trong lò cao):</p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-lg text-center mb-3 flex items-center justify-center gap-2">
                    Fe<sub>2</sub>O<sub>3</sub> + 3CO 
                    <div className="inline-flex flex-col items-center align-middle mx-1">
                      <span className="text-[10px] text-white leading-none">t°</span>
                      <span className="text-white leading-none mt-[-2px]">&rarr;</span>
                    </div>
                    2Fe + 3CO<sub>2</sub>&uarr;
                  </div>
                  <p className="text-sm text-gray-600">Phản ứng diễn ra qua nhiều giai đoạn ở các nhiệt độ khác nhau trong tháp luyện kim khổng lồ.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group">
                  <p className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-wider">Khử bằng H<sub>2</sub> (Thu kim loại tinh khiết):</p>
                  <div className="bg-gray-900 text-blue-400 p-4 rounded-xl font-mono text-lg text-center mb-3 flex items-center justify-center gap-2">
                    CuO + H<sub>2</sub> 
                    <div className="inline-flex flex-col items-center align-middle mx-1">
                      <span className="text-[10px] text-white leading-none">t°</span>
                      <span className="text-white leading-none mt-[-2px]">&rarr;</span>
                    </div>
                    Cu + H<sub>2</sub>O
                  </div>
                  <p className="text-sm text-gray-600">Bột CuO màu đen chuyển dần sang màu đỏ gạch của Cu nguyên chất.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group">
                  <p className="text-sm font-bold text-orange-600 mb-2 uppercase tracking-wider">Phản ứng nhiệt nhôm (Hàn đường ray):</p>
                  <div className="bg-gray-900 text-orange-400 p-4 rounded-xl font-mono text-lg text-center mb-3 flex items-center justify-center gap-2">
                    Fe<sub>2</sub>O<sub>3</sub> + 2Al 
                    <div className="inline-flex flex-col items-center align-middle mx-1">
                      <span className="text-[10px] text-white leading-none">t°</span>
                      <span className="text-white leading-none mt-[-2px]">&rarr;</span>
                    </div>
                    Al<sub>2</sub>O<sub>3</sub> + 2Fe
                  </div>
                  <p className="text-sm text-gray-600">Phản ứng tỏa nhiệt rất mạnh (lên tới 2500°C), làm sắt sinh ra ở trạng thái nóng chảy, chảy vào khe hở của đường ray.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" alt="Luyện kim" className="w-full h-80 object-cover rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <p className="text-center text-gray-500 mt-3 italic">Quy trình nhiệt luyện trong nhà máy công nghiệp</p>
            </div>
          </motion.div>

          {/* 2 & 3. Thủy luyện & Điện phân */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Thủy luyện */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-blue-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Droplets size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">2. Phương pháp thủy luyện</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Hòa tan quặng bằng dung dịch thích hợp (như H<sub>2</sub>SO<sub>4</sub>, NaOH, NaCN...), sau đó dùng kim loại có tính khử mạnh hơn để đẩy kim loại yếu ra khỏi dung dịch muối của nó.
              </p>
              <div className="bg-blue-50 p-5 rounded-2xl mb-6">
                <p className="text-sm font-bold text-blue-800 uppercase mb-2">Phạm vi áp dụng:</p>
                <p className="text-gray-800">Thường dùng để điều chế các kim loại hoạt động yếu (Au, Ag, Cu...).</p>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-xl font-mono text-center">
                Fe + CuSO<sub>4</sub> &rarr; FeSO<sub>4</sub> + Cu&darr;
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Sắt đẩy đồng ra khỏi dung dịch muối đồng(II) sulfate.</p>
            </motion.div>

            {/* Điện phân */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-yellow-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center">
                  <Zap size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">3. Phương pháp điện phân</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Dùng dòng điện một chiều để khử ion kim loại. Đây là phương pháp vạn năng, có thể điều chế được hầu hết các kim loại, đặc biệt là các kim loại rất mạnh.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-yellow-50 p-4 rounded-2xl">
                  <p className="font-bold text-yellow-800 mb-1">Điện phân nóng chảy (ĐPNC):</p>
                  <p className="text-gray-800 text-sm">Dùng cho kim loại mạnh (K, Na, Ca, Mg, Al). VD: Điện phân Al<sub>2</sub>O<sub>3</sub> nóng chảy để sản xuất Nhôm.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-2xl">
                  <p className="font-bold text-yellow-800 mb-1">Điện phân dung dịch (ĐPDD):</p>
                  <p className="text-gray-800 text-sm">Dùng cho kim loại trung bình và yếu (Zn, Cu, Ag...).</p>
                </div>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-xl font-mono text-center flex items-center justify-center gap-2">
                CuCl<sub>2</sub> 
                <div className="inline-flex flex-col items-center align-middle mx-1">
                  <span className="text-[10px] text-yellow-400 leading-none">đpdd</span>
                  <span className="text-white leading-none mt-[-2px]">&rarr;</span>
                </div>
                Cu + Cl<sub>2</sub>&uarr;
              </div>
            </motion.div>
          </div>
        </div>

        {/* III. Tái chế */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-emerald-200 text-emerald-800 rounded-2xl shadow-inner">
                  <Recycle size={36} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">III. Tái chế kim loại</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Tái chế kim loại là quá trình thu hồi kim loại từ các phế thải, vật liệu cũ để tạo ra sản phẩm mới. Đây là một quy trình sống còn trong nền kinh tế tuần hoàn hiện đại.
              </p>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">Tiết kiệm tài nguyên thiên nhiên</strong>
                    <p className="text-gray-600">Giảm sự phụ thuộc vào quặng tự nhiên đang ngày càng cạn kiệt trên Trái Đất.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">Bảo vệ môi trường sinh thái</strong>
                    <p className="text-gray-600">Giảm lượng rác thải rắn khổng lồ, giảm ô nhiễm đất và nước từ quá trình khai thác quặng độc hại.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="mt-1 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <strong className="text-gray-900 text-lg block mb-1">Tiết kiệm năng lượng & Kinh tế</strong>
                    <p className="text-gray-600">Quá trình tái chế tiêu tốn ít năng lượng hơn nhiều. Ví dụ: Tái chế nhôm tiết kiệm đến 95% năng lượng.</p>
                  </div>
                </li>
              </ul>

              <div className="bg-white p-8 rounded-3xl shadow-inner border border-emerald-100">
                <h4 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                  <MonitorPlay className="text-emerald-500" /> Các bước tái chế kim loại
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "1. Thu gom rác thải kim loại",
                    "2. Phân loại và làm sạch",
                    "3. Nghiền nhỏ và nén",
                    "4. Nóng chảy trong lò luyện",
                    "5. Tinh chế kim loại",
                    "6. Đúc phôi & Sản xuất mới"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-900 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500" /> {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <img 
                src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop" 
                alt="Khối kim loại tái chế" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[550px] border-4 border-white transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

      </div>
      <NextPageButton onClick={() => setCurrentPage(2)} text="Chuyển sang phần Thí nghiệm" />
    </motion.div>
  );
};

// --- Page 2: Experiments ---
const ExperimentPage = ({ setCurrentPage }: { key?: string, setCurrentPage: (p: number) => void }) => {
  const [labMode, setLabMode] = useState<'simulation' | 'sorting'>('simulation');
  const [selectedReactants, setSelectedReactants] = useState<string[]>([]);
  const [reactionResult, setReactionResult] = useState<any>(null);
  const [isReacting, setIsReacting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Sorting Lab State
  const [items, setItems] = useState([
    { id: 1, name: 'Lon nhôm', type: 'metal', color: 'bg-gray-300', icon: <Recycle size={20} /> },
    { id: 2, name: 'Đinh sắt', type: 'metal', color: 'bg-slate-400', icon: <GripHorizontal size={20} /> },
    { id: 3, name: 'Vỏ trái cây', type: 'organic', color: 'bg-orange-300', icon: <Droplets size={20} /> },
    { id: 4, name: 'Lá cây khô', type: 'organic', color: 'bg-yellow-600', icon: <Droplets size={20} /> },
    { id: 5, name: 'Chai nhựa', type: 'plastic', color: 'bg-blue-300', icon: <Droplets size={20} /> },
    { id: 6, name: 'Mảnh đồng', type: 'metal', color: 'bg-orange-400', icon: <Zap size={20} /> },
    { id: 7, name: 'Túi nilon', type: 'plastic', color: 'bg-blue-100', icon: <Droplets size={20} /> },
    { id: 8, name: 'Lõi ngô', type: 'organic', color: 'bg-amber-200', icon: <Droplets size={20} /> },
    { id: 9, name: 'Dây đồng', type: 'metal', color: 'bg-orange-500', icon: <Zap size={20} /> },
    { id: 10, name: 'Nắp chai', type: 'plastic', color: 'bg-blue-400', icon: <Droplets size={20} /> },
  ]);
  const [sorted, setSorted] = useState<{ metal: any[], organic: any[], plastic: any[] }>({
    metal: [],
    organic: [],
    plastic: []
  });
  const [message, setMessage] = useState('Kéo các chất/vật liệu vào đúng thùng xử lý để tách chúng ra!');

  const substances = [
    { id: 'fe2o3', name: 'Sắt(III) oxit (Fe₂O₃)', phase: 'Rắn', color: 'text-red-400' },
    { id: 'al', name: 'Nhôm (Al)', phase: 'Rắn', color: 'text-gray-300' },
    { id: 'fe', name: 'Sắt (Fe)', phase: 'Rắn', color: 'text-slate-400' },
    { id: 'cuso4', name: 'Dung dịch CuSO₄', phase: 'Lỏng', color: 'text-blue-400' },
    { id: 'cucl2', name: 'Dung dịch CuCl₂', phase: 'Lỏng', color: 'text-cyan-400' },
    { id: 'c', name: 'Cacbon (Than chì)', phase: 'Rắn', color: 'text-gray-500' },
    { id: 'co', name: 'Khí CO', phase: 'Khí', color: 'text-gray-400' },
    { id: 'h2', name: 'Khí H₂', phase: 'Khí', color: 'text-blue-200' },
    { id: 'cuo', name: 'Đồng(II) oxit (CuO)', phase: 'Rắn', color: 'text-black' },
    { id: 'mg', name: 'Magie (Mg)', phase: 'Rắn', color: 'text-gray-200' },
    { id: 'zn', name: 'Kẽm (Zn)', phase: 'Rắn', color: 'text-slate-300' },
    { id: 'agno3', name: 'Dung dịch AgNO₃', phase: 'Lỏng', color: 'text-gray-100' },
    { id: 'al2o3', name: 'Nhôm oxit (Al₂O₃)', phase: 'Rắn', color: 'text-white' },
    { id: 'elec', name: 'Dòng điện một chiều', phase: 'Năng lượng', color: 'text-yellow-400' },
  ];

  const reactions = [
    {
      reactants: ['fe2o3', 'al'],
      title: "Phản ứng Nhiệt Nhôm",
      animation: "🔥 Phản ứng tỏa nhiệt dữ dội, phát sáng chói lóa...",
      products: ["Sắt (Fe) nóng chảy", "Nhôm oxit (Al₂O₃)"],
      equation: "Fe₂O₃ + 2Al → Al₂O₃ + 2Fe",
      desc: "Phản ứng tỏa nhiệt rất mạnh làm sắt sinh ra ở trạng thái nóng chảy. Ứng dụng để hàn đường ray.",
      color: "orange"
    },
    {
      reactants: ['fe2o3', 'co'],
      title: "Khử oxit sắt bằng CO (Lò cao)",
      animation: "🏭 Khí CO khử oxit sắt trong lò cao ở nhiệt độ cao...",
      products: ["Sắt (Fe)", "Khí CO₂"],
      equation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
      desc: "Nguyên tắc sản xuất gang trong công nghiệp.",
      color: "orange"
    },
    {
      reactants: ['fe', 'cuso4'],
      title: "Thủy luyện: Sắt đẩy Đồng",
      animation: "💧 Dung dịch nhạt màu dần, có lớp kim loại đỏ bám vào đinh sắt...",
      products: ["Dung dịch FeSO₄", "Đồng (Cu)"],
      equation: "Fe + CuSO₄ → FeSO₄ + Cu↓",
      desc: "Sắt có tính khử mạnh hơn Đồng nên đẩy Đồng ra khỏi dung dịch muối.",
      color: "blue"
    },
    {
      reactants: ['cucl2', 'elec'],
      title: "Điện phân dung dịch CuCl₂",
      animation: "⚡ Có bọt khí thoát ra ở Anot, kim loại bám vào Catot...",
      products: ["Khí Clo (Cl₂)", "Đồng (Cu)"],
      equation: "CuCl₂ → Cu + Cl₂↑",
      desc: "Dòng điện một chiều khử ion Cu²⁺ thành Cu và oxi hóa Cl⁻ thành Cl₂.",
      color: "yellow"
    },
    {
      reactants: ['al2o3', 'elec'],
      title: "Điện phân nóng chảy Al₂O₃",
      animation: "⚡ Nhôm oxit nóng chảy bị dòng điện phân tách...",
      products: ["Nhôm (Al) lỏng", "Khí Oxi (O₂)"],
      equation: "2Al₂O₃ → 4Al + 3O₂↑",
      desc: "Phương pháp duy nhất để sản xuất nhôm trong công nghiệp.",
      color: "yellow"
    },
    {
      reactants: ['cuo', 'h2'],
      title: "Khử CuO bằng H₂",
      animation: "🔥 Luồng khí H₂ đi qua bột CuO đen, tạo ra lớp đồng đỏ...",
      products: ["Đồng (Cu)", "Hơi nước (H₂O)"],
      equation: "CuO + H₂ → Cu + H₂O",
      desc: "Phương pháp nhiệt luyện điều chế đồng tinh khiết.",
      color: "orange"
    },
    {
      reactants: ['zn', 'cuso4'],
      title: "Thủy luyện: Kẽm đẩy Đồng",
      animation: "💧 Kẽm tan dần, đồng đỏ bám vào thanh kẽm...",
      products: ["Dung dịch ZnSO₄", "Đồng (Cu)"],
      equation: "Zn + CuSO₄ → ZnSO₄ + Cu↓",
      desc: "Kẽm đẩy đồng ra khỏi dung dịch muối.",
      color: "blue"
    },
    {
      reactants: ['cu', 'agno3'],
      title: "Thủy luyện: Đồng đẩy Bạc",
      animation: "💧 Dung dịch chuyển sang màu xanh, tinh thể bạc bám vào dây đồng...",
      products: ["Dung dịch Cu(NO₃)₂", "Bạc (Ag)"],
      equation: "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag↓",
      desc: "Đồng đẩy bạc ra khỏi dung dịch muối bạc nitrat.",
      color: "blue"
    }
  ];

  const handleDrop = (item: any, zone: 'metal' | 'organic' | 'plastic') => {
    if (item.type === zone) {
      setSorted({ ...sorted, [zone]: [...sorted[zone], item] });
      setItems(items.filter(i => i.id !== item.id));
      setMessage(`Chính xác! ${item.name} đã được đưa vào khu vực ${zone === 'metal' ? 'tái chế kim loại' : zone === 'organic' ? 'xử lý hữu cơ' : 'tái chế nhựa'}.`);
    } else {
      setMessage(`Không đúng rồi! ${item.name} không thuộc khu vực này.`);
    }
  };

  const resetSorting = () => {
    setItems([
      { id: 1, name: 'Lon nhôm', type: 'metal', color: 'bg-gray-300', icon: <Recycle size={20} /> },
      { id: 2, name: 'Đinh sắt', type: 'metal', color: 'bg-slate-400', icon: <GripHorizontal size={20} /> },
      { id: 3, name: 'Vỏ trái cây', type: 'organic', color: 'bg-orange-300', icon: <Droplets size={20} /> },
      { id: 4, name: 'Lá cây khô', type: 'organic', color: 'bg-yellow-600', icon: <Droplets size={20} /> },
      { id: 5, name: 'Chai nhựa', type: 'plastic', color: 'bg-blue-300', icon: <Droplets size={20} /> },
      { id: 6, name: 'Mảnh đồng', type: 'metal', color: 'bg-orange-400', icon: <Zap size={20} /> },
      { id: 7, name: 'Túi nilon', type: 'plastic', color: 'bg-blue-100', icon: <Droplets size={20} /> },
      { id: 8, name: 'Lõi ngô', type: 'organic', color: 'bg-amber-200', icon: <Droplets size={20} /> },
      { id: 9, name: 'Dây đồng', type: 'metal', color: 'bg-orange-500', icon: <Zap size={20} /> },
      { id: 10, name: 'Nắp chai', type: 'plastic', color: 'bg-blue-400', icon: <Droplets size={20} /> },
    ]);
    setSorted({ metal: [], organic: [], plastic: [] });
    setMessage('Kéo các chất/vật liệu vào đúng thùng xử lý để tách chúng ra!');
  };

  const handleSelectSubstance = (id: string) => {
    if (selectedReactants.includes(id)) {
      setSelectedReactants(selectedReactants.filter(r => r !== id));
      setReactionResult(null);
      setShowResult(false);
    } else if (selectedReactants.length < 2) {
      setSelectedReactants([...selectedReactants, id]);
      setReactionResult(null);
      setShowResult(false);
    }
  };

  const runExperiment = () => {
    if (selectedReactants.length === 0) return;
    
    setIsReacting(true);
    setShowResult(false);
    
    setTimeout(() => {
      setIsReacting(false);
      const match = reactions.find(r => 
        r.reactants.length === selectedReactants.length &&
        r.reactants.every(reactant => selectedReactants.includes(reactant))
      );
      
      if (match) {
        setReactionResult(match);
      } else {
        setReactionResult({ error: "Không có phản ứng xảy ra giữa các chất này trong điều kiện thông thường." });
      }
      setShowResult(true);
    }, 2000);
  };

  const resetExperiment = () => {
    setSelectedReactants([]);
    setReactionResult(null);
    setIsReacting(false);
    setShowResult(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-900 text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Phòng Thí Nghiệm Ảo</h1>
          <p className="text-gray-400 text-lg">Mô phỏng các phương pháp tách kim loại</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => setLabMode('simulation')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${labMode === 'simulation' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-400'}`}
          >
            Mô phỏng phản ứng
          </button>
          <button 
            onClick={() => setLabMode('sorting')}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${labMode === 'sorting' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-400'}`}
          >
            Thực hành phân tách & Tái chế
          </button>
        </div>

        {labMode === 'simulation' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Substance List */}
            <div className="lg:col-span-1 bg-gray-800 rounded-3xl p-6 border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Beaker className="text-cyan-400" /> Danh sách hóa chất
              </h3>
              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {substances.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSubstance(s.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center ${selectedReactants.includes(s.id) ? 'bg-cyan-600 border-cyan-400 shadow-lg' : 'bg-gray-900 border-gray-700 hover:border-gray-500'}`}
                  >
                    <div>
                      <div className={`font-bold ${s.color}`}>{s.name}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest">{s.phase}</div>
                    </div>
                    {selectedReactants.includes(s.id) && <CheckCircle2 size={18} className="text-white" />}
                  </button>
                ))}
              </div>
              <button 
                onClick={resetExperiment}
                className="mt-6 w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-xl text-sm font-bold transition-colors"
              >
                Làm mới thí nghiệm
              </button>
            </div>

            {/* Reaction Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-xl min-h-[400px] flex flex-col">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">Ống nghiệm ảo</h3>
                
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-8 mb-12">
                    {/* Slot 1 */}
                    <div className={`w-32 h-32 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 text-center transition-all ${selectedReactants[0] ? 'bg-gray-900 border-cyan-500' : 'bg-gray-900/50 border-gray-700'}`}>
                      {selectedReactants[0] ? (
                        <>
                          <div className={`font-bold text-sm ${substances.find(s => s.id === selectedReactants[0])?.color}`}>
                            {substances.find(s => s.id === selectedReactants[0])?.name}
                          </div>
                        </>
                      ) : (
                        <span className="text-gray-600 text-xs">Chọn chất 1</span>
                      )}
                    </div>

                    <div className="text-4xl font-bold text-gray-700">+</div>

                    {/* Slot 2 */}
                    <div className={`w-32 h-32 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 text-center transition-all ${selectedReactants[1] ? 'bg-gray-900 border-cyan-500' : 'bg-gray-900/50 border-gray-700'}`}>
                      {selectedReactants[1] ? (
                        <>
                          <div className={`font-bold text-sm ${substances.find(s => s.id === selectedReactants[1])?.color}`}>
                            {substances.find(s => s.id === selectedReactants[1])?.name}
                          </div>
                        </>
                      ) : (
                        <span className="text-gray-600 text-xs">Chọn chất 2</span>
                      )}
                    </div>
                  </div>

                  {!isReacting && !showResult ? (
                    <button 
                      onClick={runExperiment}
                      disabled={selectedReactants.length === 0}
                      className="px-12 py-4 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl shadow-lg transition-all transform hover:scale-105"
                    >
                      Bắt đầu phản ứng
                    </button>
                  ) : isReacting ? (
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto border-4 border-t-cyan-500 border-gray-700 rounded-full animate-spin mb-6"></div>
                      <p className="text-cyan-400 font-bold animate-pulse">Đang tiến hành phản ứng...</p>
                    </div>
                  ) : (
                    <div className="w-full">
                      {reactionResult?.error ? (
                        <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl text-center">
                          <XCircle className="mx-auto text-red-500 mb-4" size={48} />
                          <p className="text-red-200 font-medium">{reactionResult.error}</p>
                          <button onClick={() => setShowResult(false)} className="mt-4 text-sm text-red-400 underline">Thử lại</button>
                        </div>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`bg-${reactionResult.color}-900/20 border border-${reactionResult.color}-500/50 p-8 rounded-3xl`}
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <CheckCircle2 className={`text-${reactionResult.color}-500`} size={32} />
                            <h4 className="text-2xl font-bold">{reactionResult.title}</h4>
                          </div>
                          <p className={`text-${reactionResult.color}-400 mb-6 font-medium italic`}>{reactionResult.animation}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-700">
                              <p className="text-xs text-gray-500 uppercase mb-2">Sản phẩm tạo thành:</p>
                              <div className="flex flex-wrap gap-2">
                                {reactionResult.products.map((p: string, i: number) => (
                                  <span key={i} className="bg-gray-800 px-3 py-1 rounded-lg text-sm font-bold text-emerald-400">{p}</span>
                                ))}
                              </div>
                            </div>
                            <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-700">
                              <p className="text-xs text-gray-500 uppercase mb-2">Phương trình hóa học:</p>
                              <p className="font-mono text-cyan-300">{reactionResult.equation}</p>
                            </div>
                          </div>
                          <p className="mt-6 text-gray-400 text-sm leading-relaxed">{reactionResult.desc}</p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-cyan-900/10 border border-cyan-500/20 p-6 rounded-3xl">
                <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                  <Zap size={18} /> Gợi ý thí nghiệm:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Thử kết hợp <strong>Fe₂O₃</strong> với <strong>Al</strong> hoặc <strong>CO</strong>.</li>
                  <li>• Thử cho <strong>Fe</strong> vào <strong>CuSO₄</strong>.</li>
                  <li>• Thử dùng <strong>Dòng điện</strong> với <strong>CuCl₂</strong> hoặc <strong>Al₂O₃</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center text-emerald-400">Thí nghiệm Phân tách & Tái chế</h2>
            <p className="text-center text-gray-400 mb-8">{message}</p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Source Area */}
              <div className="lg:col-span-1 bg-gray-900 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-lg font-bold text-gray-300 mb-4 flex items-center gap-2">
                  <GripHorizontal size={20} className="text-cyan-400" /> Hỗn hợp vật liệu
                </h3>
                <div className="flex flex-wrap lg:flex-col gap-3">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${item.color} text-gray-900 p-4 rounded-xl font-bold cursor-pointer flex items-center gap-3 shadow-lg`}
                      >
                        {item.icon} {item.name}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {items.length === 0 && (
                    <div className="text-center py-10 text-gray-500 italic">
                      Đã phân loại xong!
                    </div>
                  )}
                </div>
                <button 
                  onClick={resetSorting}
                  className="mt-6 w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                >
                  Làm lại
                </button>
              </div>

              {/* Drop Zones */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Metal Zone */}
                <div 
                  className={`p-6 rounded-2xl border-2 border-dashed transition-all flex flex-col items-center min-h-[300px] ${sorted.metal.length > 0 ? 'bg-orange-900/20 border-orange-500/50' : 'bg-gray-900/50 border-gray-700'}`}
                >
                  <div className="w-16 h-16 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mb-4">
                    <Recycle size={32} />
                  </div>
                  <h3 className="font-bold text-orange-400 mb-2">Tái chế Kim loại</h3>
                  <p className="text-xs text-gray-500 text-center mb-6 italic">Dành cho sắt, nhôm, đồng...</p>
                  
                  <div className="w-full space-y-2">
                    {sorted.metal.map(item => (
                      <div key={item.id} className="bg-orange-500/20 border border-orange-500/30 p-2 rounded-lg text-sm flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-orange-500" /> {item.name}
                      </div>
                    ))}
                    {items.map(item => (
                      <button 
                        key={item.id} 
                        onClick={() => handleDrop(item, 'metal')}
                        className="w-full py-2 border border-gray-700 rounded-lg text-xs text-gray-500 hover:bg-orange-500/10 hover:text-orange-400 transition-all"
                      >
                        Thả {item.name} vào đây
                      </button>
                    ))}
                  </div>
                </div>

                {/* Organic Zone */}
                <div 
                  className={`p-6 rounded-2xl border-2 border-dashed transition-all flex flex-col items-center min-h-[300px] ${sorted.organic.length > 0 ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-gray-900/50 border-gray-700'}`}
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <Droplets size={32} />
                  </div>
                  <h3 className="font-bold text-emerald-400 mb-2">Xử lý Hữu cơ</h3>
                  <p className="text-xs text-gray-500 text-center mb-6 italic">Dành cho thức ăn thừa, lá cây...</p>
                  
                  <div className="w-full space-y-2">
                    {sorted.organic.map(item => (
                      <div key={item.id} className="bg-emerald-500/20 border border-emerald-500/30 p-2 rounded-lg text-sm flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500" /> {item.name}
                      </div>
                    ))}
                    {items.map(item => (
                      <button 
                        key={item.id} 
                        onClick={() => handleDrop(item, 'organic')}
                        className="w-full py-2 border border-gray-700 rounded-lg text-xs text-gray-500 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all"
                      >
                        Thả {item.name} vào đây
                      </button>
                    ))}
                  </div>
                </div>

                {/* Plastic Zone */}
                <div 
                  className={`p-6 rounded-2xl border-2 border-dashed transition-all flex flex-col items-center min-h-[300px] ${sorted.plastic.length > 0 ? 'bg-blue-900/20 border-blue-500/50' : 'bg-gray-900/50 border-gray-700'}`}
                >
                  <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Recycle size={32} />
                  </div>
                  <h3 className="font-bold text-blue-400 mb-2">Tái chế Nhựa</h3>
                  <p className="text-xs text-gray-500 text-center mb-6 italic">Dành cho chai lọ, bao bì nhựa...</p>
                  
                  <div className="w-full space-y-2">
                    {sorted.plastic.map(item => (
                      <div key={item.id} className="bg-blue-500/20 border border-blue-500/30 p-2 rounded-lg text-sm flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-500" /> {item.name}
                      </div>
                    ))}
                    {items.map(item => (
                      <button 
                        key={item.id} 
                        onClick={() => handleDrop(item, 'plastic')}
                        className="w-full py-2 border border-gray-700 rounded-lg text-xs text-gray-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all"
                      >
                        Thả {item.name} vào đây
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <NextPageButton onClick={() => setCurrentPage(3)} text="Chuyển sang phần Bài tập" />
    </motion.div>
  );
};

// --- Page 3: Exercises ---
const ExercisePage = ({ setCurrentPage }: { key?: string, setCurrentPage: (p: number) => void }) => {
  const [activeTab, setActiveTab] = useState('mcq');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Bài Tập Ôn Tập</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
          <div className="flex flex-wrap justify-center gap-4 bg-white p-2 rounded-full shadow-sm inline-flex">
            <button onClick={() => setActiveTab('mcq')} className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'mcq' ? 'bg-cyan-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Trắc nghiệm</button>
            <button onClick={() => setActiveTab('fill')} className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'fill' ? 'bg-cyan-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Điền vào chỗ trống</button>
            <button onClick={() => setActiveTab('balance')} className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'balance' ? 'bg-cyan-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>Cân bằng PT</button>
          </div>
        </div>

        {activeTab === 'mcq' && <MultipleChoice />}
        {activeTab === 'fill' && <FillInBlanksQuiz />}
        {activeTab === 'balance' && <BalancingQuiz />}
      </div>
      <NextPageButton onClick={() => setCurrentPage(0)} text="Quay lại Trang chủ" />
    </motion.div>
  );
};

// --- Quiz Components ---
const MultipleChoice = () => {
  const questions = [
    {
      id: 1,
      question: "Phương pháp nhiệt luyện được ứng dụng chủ yếu để điều chế các kim loại nào?",
      options: ["A. Kim loại rất mạnh (K, Na, Ca...)", "B. Kim loại hoạt động trung bình và yếu (Zn, Fe, Cu...)", "C. Kim loại rất yếu (Au, Pt...)", "D. Tất cả các kim loại"],
      correct: 1
    },
    {
      id: 2,
      question: "Trong công nghiệp, quặng sắt được luyện thành gang bằng cách sử dụng chất khử chủ yếu nào sau đây?",
      options: ["A. H2", "B. Al", "C. CO", "D. C"],
      correct: 2
    },
    {
      id: 3,
      question: "Phản ứng nhiệt nhôm (dùng Al làm chất khử) thường được ứng dụng trong thực tế để làm gì?",
      options: ["A. Sản xuất nhôm nguyên chất", "B. Hàn đường ray tàu hỏa", "C. Luyện thép", "D. Khử trùng nước"],
      correct: 1
    },
    {
      id: 4,
      question: "Để thu được kim loại Cu có độ tinh khiết cao từ CuO, người ta ưu tiên sử dụng chất khử nào ở nhiệt độ cao?",
      options: ["A. Khí CO", "B. Cacbon (C)", "C. Nhôm (Al)", "D. Khí H2"],
      correct: 3
    },
    {
      id: 5,
      question: "Phương pháp nào sau đây là duy nhất để sản xuất nhôm (Al) trong công nghiệp hiện nay?",
      options: ["A. Nhiệt luyện bằng CO", "B. Thủy luyện", "C. Điện phân nóng chảy Al₂O₃", "D. Điện phân dung dịch AlCl₃"],
      correct: 2
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => { if (!showResult) setSelected(index); };
  const checkAnswer = () => { if (selected !== null) setShowResult(true); };
  const nextQuestion = () => {
    if (currentQ < questions.length - 1) { setCurrentQ(currentQ + 1); setSelected(null); setShowResult(false); }
    else { setCurrentQ(0); setSelected(null); setShowResult(false); }
  };

  const q = questions[currentQ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
      <div className="mb-8 flex justify-between items-center border-b pb-4">
        <span className="text-lg font-bold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full">Câu hỏi {currentQ + 1} / {questions.length}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">{q.question}</h3>
      <div className="space-y-4 mb-10">
        {q.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-5 rounded-2xl border-2 transition-all text-lg font-medium ";
          if (showResult) {
            if (idx === q.correct) btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-md";
            else if (idx === selected) btnClass += "border-red-500 bg-red-50 text-red-800";
            else btnClass += "border-gray-100 text-gray-400 opacity-50";
          } else {
            if (idx === selected) btnClass += "border-cyan-500 bg-cyan-50 text-cyan-800 shadow-md transform scale-[1.01]";
            else btnClass += "border-gray-200 hover:border-cyan-300 hover:bg-slate-50 text-gray-700";
          }
          return <button key={idx} onClick={() => handleSelect(idx)} className={btnClass} disabled={showResult}>{opt}</button>;
        })}
      </div>
      <div className="flex justify-end">
        {!showResult ? (
          <button onClick={checkAnswer} disabled={selected === null} className="px-10 py-4 bg-cyan-500 text-white font-bold text-lg rounded-2xl hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-cyan-500/30">Kiểm tra đáp án</button>
        ) : (
          <button onClick={nextQuestion} className="px-10 py-4 bg-gray-900 text-white font-bold text-lg rounded-2xl hover:bg-black transition-all shadow-lg">{currentQ < questions.length - 1 ? 'Câu tiếp theo' : 'Làm lại từ đầu'}</button>
        )}
      </div>
    </div>
  );
};

const FillInBlanksQuiz = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    { id: 'q1', text: "Trong công nghiệp luyện kim, quặng sắt được luyện thành gang trong ...", correct: "lò cao" },
    { id: 'q2', text: "Chất khử chính được sử dụng trong lò cao là khí ...", correct: "CO" },
    { id: 'q3', text: "Phản ứng ... tỏa nhiệt rất mạnh, được dùng để hàn đường ray tàu hỏa.", correct: "nhiệt nhôm" },
    { id: 'q4', text: "Để điều chế các kim loại rất mạnh như Al, người ta dùng phương pháp ...", correct: "điện phân nóng chảy" },
    { id: 'q5', text: "Tái chế nhôm giúp tiết kiệm khoảng ... năng lượng so với sản xuất mới.", correct: "95%" }
  ];

  const checkAnswers = () => setShowResults(true);
  const reset = () => { setAnswers({ q1: '', q2: '', q3: '', q4: '', q5: '' }); setShowResults(false); };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">Điền từ hoặc cụm từ thích hợp vào chỗ trống:</h3>
      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q.id} className="flex flex-col gap-3">
            <p className="text-lg text-gray-700 font-medium">{q.text}</p>
            <div className="relative">
              <input 
                type="text" 
                value={answers[q.id as keyof typeof answers]} 
                onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                disabled={showResults}
                placeholder="Nhập câu trả lời..."
                className={`w-full p-4 rounded-xl border-2 transition-all outline-none ${showResults ? (answers[q.id as keyof typeof answers].toLowerCase().trim() === q.correct.toLowerCase() ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50') : 'border-gray-200 focus:border-cyan-500'}`}
              />
              {showResults && (
                <div className="mt-2 text-sm font-bold">
                  {answers[q.id as keyof typeof answers].toLowerCase().trim() === q.correct.toLowerCase() ? (
                    <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 size={14} /> Chính xác!</span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1"><XCircle size={14} /> Sai rồi. Đáp án đúng: {q.correct}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-end gap-4">
        {showResults ? (
          <button onClick={reset} className="px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg">Làm lại</button>
        ) : (
          <button onClick={checkAnswers} className="px-10 py-4 bg-cyan-500 text-white font-bold rounded-2xl hover:bg-cyan-600 transition-all shadow-lg">Kiểm tra đáp án</button>
        )}
      </div>
    </div>
  );
};

const BalancingQuiz = () => {
  const [currentEq, setCurrentEq] = useState(0);
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [showResult, setShowResult] = useState(false);

  const equations = [
    {
      text: ["Fe₂O₃ + ", "CO → ", "Fe + ", "CO₂"],
      correct: ["1", "3", "2", "3"],
      hint: "Gợi ý: Đếm số nguyên tử Oxi ở 2 vế."
    },
    {
      text: ["CuO + ", "H₂ → ", "Cu + ", "H₂O"],
      correct: ["1", "1", "1", "1"],
      hint: "Gợi ý: Đây là phản ứng khử CuO bằng H₂."
    },
    {
      text: ["Al + ", "Fe₂O₃ → ", "Al₂O₃ + ", "Fe"],
      correct: ["2", "1", "1", "2"],
      hint: "Gợi ý: Phản ứng nhiệt nhôm."
    }
  ];

  const eq = equations[currentEq];

  const checkAnswer = () => setShowResult(true);
  const nextEq = () => {
    if (currentEq < equations.length - 1) {
      setCurrentEq(currentEq + 1);
      setInputs(['', '', '', '']);
      setShowResult(false);
    } else {
      setCurrentEq(0);
      setInputs(['', '', '', '']);
      setShowResult(false);
    }
  };

  const isCorrect = inputs.every((val, idx) => val === eq.correct[idx]);

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
      <div className="mb-8 flex justify-between items-center border-b pb-4">
        <span className="text-lg font-bold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full">Phương trình {currentEq + 1} / {equations.length}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Cân bằng phương trình hóa học sau:</h3>
      <p className="text-gray-600 mb-10">Nhập hệ số thích hợp vào các ô trống (nhập '1' nếu hệ số là 1).</p>
      
      <div className="flex flex-wrap items-center justify-center gap-4 text-2xl md:text-3xl font-mono font-bold bg-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-inner mb-10">
        {eq.text.map((part, idx) => (
          <React.Fragment key={idx}>
            <input 
              type="number" 
              min="1" 
              value={inputs[idx]} 
              onChange={e => {
                const newInputs = [...inputs];
                newInputs[idx] = e.target.value;
                setInputs(newInputs);
              }}
              disabled={showResult}
              className={`w-14 h-14 md:w-16 md:h-16 text-center text-gray-900 rounded-xl border-4 focus:outline-none transition-all ${showResult ? (inputs[idx] === eq.correct[idx] ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50') : 'border-cyan-500 focus:ring-4 focus:ring-cyan-300'}`} 
            />
            <span>{part}</span>
          </React.Fragment>
        ))}
      </div>

      {showResult && (
        <div className={`mb-8 p-6 rounded-2xl border flex items-center gap-4 font-bold text-lg ${isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
          {isCorrect ? (
            <><CheckCircle2 className="text-emerald-500 w-8 h-8" /> Chính xác! Bạn đã cân bằng đúng.</>
          ) : (
            <><XCircle className="text-red-500 w-8 h-8" /> {eq.hint}</>
          )}
        </div>
      )}
      
      <div className="flex justify-end">
        {!showResult ? (
          <button onClick={checkAnswer} disabled={inputs.some(v => !v)} className="px-10 py-4 bg-cyan-500 text-white font-bold text-lg rounded-2xl hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg">Kiểm tra</button>
        ) : (
          <button onClick={nextEq} className="px-10 py-4 bg-gray-900 text-white font-bold text-lg rounded-2xl hover:bg-black transition-all shadow-lg">{currentEq < equations.length - 1 ? 'Phương trình tiếp theo' : 'Làm lại từ đầu'}</button>
        )}
      </div>
    </div>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-center gap-2 mb-6">
        <FlaskConical className="text-cyan-500" size={28} />
        <span className="text-2xl font-bold text-white">Bài <span className="text-cyan-500">15</span></span>
      </div>
      <p className="mb-2">Dự án học tập Hóa Học 12 - Bài 15: Tách kim loại và tái chế kim loại.</p>
      <p className="text-sm opacity-60">© 2026 Bài 15. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 overflow-x-hidden selection:bg-cyan-200 selection:text-cyan-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 0 && <HomePage key="home" setCurrentPage={setCurrentPage} />}
        {currentPage === 1 && <LessonPage key="lesson" setCurrentPage={setCurrentPage} />}
        {currentPage === 2 && <ExperimentPage key="exp" setCurrentPage={setCurrentPage} />}
        {currentPage === 3 && <ExercisePage key="ex" setCurrentPage={setCurrentPage} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

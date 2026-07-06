"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Sparkles, X, Check, Play, Pause } from "lucide-react";

export default function Home() {
  const [rejectAttempts, setRejectAttempts] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [rejectPosition, setRejectPosition] = useState({ x: 0, y: 0 });
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRejectClick = () => {
    if (rejectAttempts >= 2) {
      setRejectAttempts(3);
      return;
    }

    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setRejectPosition({ x: randomX, y: randomY });
    setRejectAttempts(rejectAttempts + 1);
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleSongClick = (songUrl: string) => {
    if (currentSong === songUrl && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(songUrl);
      setIsPlaying(true);
    }
  };

  const songs = [
    { id: 1, title: "أغنيتنا المفضلة", emoji: "🎵", url: "/favorite-song.mpeg" },
  ];

  const rejectMessages = [
    "متزعليش مني 🥺",
    "أنا عملت الويبسايت ده كله عشانك 😭",
    "حلوة، خلاص ما فيش رفض 😂",
  ];

  return (
    <main className="min-h-screen bg-cream text-slate">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 text-rose mx-auto fill-rose" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-rose"
          >
            أنا آسف
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-slate/80 max-w-2xl mx-auto"
          >
            أنا أعرف إنك زعلانه واني مت فعينك، بس انا عينك دي انا مقدرش اعيش منغيرها وأنا آسف بجد على اللي حصل
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            👇
          </motion.div>
        </motion.div>
      </section>

      {/* Truth Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-lavender/30">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-rose"
          >
            حصل إيه بالظبط؟
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed text-slate/90"
          >
            أنا غلطت، ومش بحاول أبرر نفسي. الكلام اللي قلته كان مش محتاج يتقال، وأنا فاهم إنه جرحك. 
            أنا مش بس آسف على الكلام، أنا آسف إني وصلت للمرحلة دي أصلاً.
          </motion.p>
        </motion.div>
      </section>

      {/* Memories Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-rose"
          >
            أيامنا الحلوة 🌟
          </motion.h2>
          
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain"
            >
              <source src="/memories-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "🎬", text: "أفلام ليلتنا" },
              { emoji: "🌅", text: "مشاويرنا" },
              { emoji: "😂", text: "ضحكنا اللي ملوش حل" },
            ].map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-5xl mb-3">{memory.emoji}</div>
                <p className="text-lg font-semibold text-slate">{memory.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Favorite Songs Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-lavender/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-rose"
          >
            أغنيتنا المفضلة 🎵
          </motion.h2>
          
          <div className="flex justify-center">
            {songs.map((song, index) => {
              const isCurrent = currentSong === song.url;
              const showArtwork = !isCurrent || !isPlaying;

              return (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleSongClick(song.url)}
                  className={`w-full max-w-[430px] relative overflow-hidden rounded-[2rem] shadow-xl cursor-pointer transition-all ${
                    isCurrent && isPlaying ? "ring-4 ring-rose" : ""
                  }`}
                  style={{
                    backgroundImage: "url(/song-background.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="aspect-[3/4] w-full relative">
                    <AnimatePresence mode="wait">
                      {showArtwork && (
                        <motion.div
                          key="artwork"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-white/35 backdrop-blur-sm"
                        >
                          <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
                            <div className="text-7xl mb-4">{song.emoji}</div>
                            <p className="text-2xl font-bold text-slate">{song.title}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    {isCurrent && isPlaying && (
                      <motion.div
                        key="player"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="px-4 pb-4 pt-2"
                      >
                        <audio
                          ref={audioRef}
                          src={song.url}
                          onEnded={() => setIsPlaying(false)}
                          className="w-full"
                          controls
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Apology Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-lavender/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <Heart className="w-20 h-20 text-rose mx-auto fill-rose" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-rose"
          >
            أنا آسف بجد ❤️
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed text-slate/90"
          >
            أنا ملزم أغير، ومش هكرر الموضوع ده تاني. أنا قدامك عشان أصلح اللي اتكسر، 
            ومش هسيبك تاني في الموقف ده.
          </motion.p>
        </motion.div>
      </section>

      {/* Emotional Video Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-cream/80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-rose"
          >
            معقول حبيبي اهون؟ 🥺
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed text-slate/90 mb-8"
          >
           مقدرش اعيش منغيرك 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-2xl overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain"
            >
              <source src="/whatsapp-video.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-6xl"
          >
            👁️😢
          </motion.div>
        </motion.div>
      </section>

      {/* Promises Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-rose"
          >
            وعودي ليكِ ✨
          </motion.h2>
          
          <div className="space-y-6">
            {[
              "هسمعك أكتر وأفهمك قبل أتكلم",
              "هحتويكي اكتر منغير متتكلمي",
              "هتحكم في أعصابي ومش هخرج عني",
              "هقدر قيمتك أكتر وأحترمك",
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="flex-shrink-0 w-12 h-12 bg-rose/20 rounded-full flex items-center justify-center"
                >
                  <Check className="w-6 h-6 text-rose" />
                </motion.div>
                <p className="text-xl text-slate">{promise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Interactive Decision Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-lavender/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-rose"
          >
            قراركِ؟
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl mb-12 text-slate/80"
          >
            أنا مستعد لأي قرار بتاخديه
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative min-h-[200px]">
            {/* Accept Button */}
            <motion.button
              onClick={handleAccept}
              initial={{ scale: 1 }}
              animate={{ scale: accepted ? 1.2 : 1 + rejectAttempts * 0.1 }}
              whileHover={{ scale: accepted ? 1.2 : 1.1 + rejectAttempts * 0.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all z-10"
            >
              أنا مسمحاك ❤️
            </motion.button>

            {/* Reject Button */}
            <AnimatePresence>
              {rejectAttempts < 3 && (
                <motion.button
                  onClick={handleRejectClick}
                  animate={{
                    x: rejectPosition.x,
                    y: rejectPosition.y,
                    scale: 1 - rejectAttempts * 0.2,
                  }}
                  initial={{ scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="bg-slate/20 text-slate px-8 py-4 rounded-full text-xl font-bold border-2 border-slate/30"
                >
                  أنا زعلانة
                </motion.button>
              )}
            </AnimatePresence>

            {/* Reject Message */}
            <AnimatePresence>
              {rejectAttempts > 0 && rejectAttempts < 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full mt-4 text-lg text-slate/70"
                >
                  {rejectMessages[rejectAttempts - 1]}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Confetti Animation on Accept */}
          <AnimatePresence>
            {accepted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl text-rose font-bold"
                >
                  أحبك ❤️
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* WhatsApp CTA Section */}
      {accepted && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center px-4 py-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-rose"
            >
              نكمل؟
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-12 text-slate/80"
            >
              ابعتلي رسالة على واتساب ونبدأ من جديد
            </motion.p>

            <motion.a
              href="https://wa.me/201027202595?text=أنا%20سامحاك،%20بس%20لازم%20تتعلّم%20من%20الموضوع%20ده%20😂%20نقابل%20ونكمل؟"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              ابعتلي على واتساب
              <Sparkles className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.section>
      )}
    </main>
  );
}

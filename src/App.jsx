import { useEffect, useState } from "react";
import { Shield, Video, Zap, LineChart, BadgeCheck, Lock, BellRing, Smartphone, Cpu, Cloud, Building2, Factory, Banknote, Warehouse, Camera, CircleHelp } from "lucide-react";
import fabrika from "./assets/fabrika.jpg";

export default function LuxReportLanding() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    document.title = "LuxReport";
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

   // örnek frame ve tespitler (fabrika görseline uygun dummy data)
  const detections = [
    { id: 1, label: "Kerem", score: 0.96, x: 32, y: 35, w: 20, h: 60 },
    { id: 2, label: "Tuna",  score: 0.94, x: 57, y: 35, w: 20, h: 60 },
    { id: 3, label: "Çalışma Tezgahı", score: 0.89, x: 0,  y: 65, w: 100, h: 15 },
  ];

  return (
    <div className="min-h-screen text-zinc-100 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 selection:bg-emerald-500/30 selection:text-emerald-50">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 28s linear infinite; }
      `}</style>

      {/* Navbar */}
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-neutral-900/70 border-b border-white/5" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center shadow-[0_0_20px_rgba(16,185,129,.35)]">
                <Shield className="h-4 w-4 text-neutral-950" />
              </div>
              <span className="font-semibold tracking-tight text-zinc-100">LuxReport</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-zinc-300">
              <a href="#features" className="hover:text-white">Özellikler</a>
              <a href="#how" className="hover:text-white">Nasıl Çalışır</a>
              <a href="#pricing" className="hover:text-white">Fiyatlandırma</a>
              <a href="#faq" className="hover:text-white">SSS</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#demo" className="hidden sm:inline-block rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5">Demo İzle</a>
              <a href="https://cal.com/kerem-bukucu" className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-400">Demo Talep Et</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 right-1/3 h-[28rem] w-[28rem] rounded-full bg-teal-400/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 py-16 md:grid-cols-[1fr_0.8fr] md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <BadgeCheck className="h-3.5 w-3.5" /> Kurumsal seviye CV platformu
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Kameralar artık <span className="text-emerald-400">konuşuyor</span>
              </h1>
              <p className="mt-6 max-w-xl text-zinc-300">
                <span className="font-semibold">LuxReport</span>, mevcut güvenlik kameralarınızı
                <span className="text-emerald-400"> yapay zekâ asistanına</span> dönüştürür. 
                Çalışanlarınızı saatlerce izlemek yerine, olaylar anında tespit edilir, riskler ölçülür ve size 
                günlük raporlar sunulur — üstelik ek donanım gerekmeden.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-neutral-950 hover:bg-emerald-400">Başlayın</a>
                <a href="#demo" className="rounded-2xl border border-white/10 px-5 py-3 text-zinc-200 hover:bg-white/5">90 saniye demo izle</a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2"><Lock className="h-4 w-4"/>Cihaz üzerinde sansürleme</div>
                <div className="flex items-center gap-2"><Cloud className="h-4 w-4"/>Edge veya Cloud</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4"/>200ms altında uyarılar</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/0 blur-2xl"/>
              <div className="rounded-[2rem] border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-4 shadow-2xl">
                {/* Görsel + overlay container */}
                <div className="aspect-[7/7] max-w-[320px] md:max-w-[360px] overflow-hidden rounded-xl border border-white/10 bg-neutral-950 mx-auto">
                  <div className="relative h-full w-full">
                    <img
                      src={fabrika}
                      alt="camera feed"
                      className="h-full w-full object-cover opacity-80"
                    />

                    {/* overlay — görselin içine daha oranlı oturur */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* İç çerçeve: kenarlardan %4 boşluk bırakır */}
                      <div className="relative h-[92%] w-[92%]">
                        

                        {/* Üst sağ: max confidence */}
                        <div className="absolute right-0 top-0 rounded-xl border border-emerald-400/40 bg-black/50 px-3 py-1.5 text-[11px] text-emerald-300">
                          Güven {Math.max(...detections.map(d => d.score)).toFixed(2)}
                        </div>

                        {/* Kutular */}
                        {detections.map((d) => (
                          <div
                            key={d.id}
                            className="absolute rounded-md border-2 border-emerald-400/70"
                            style={{
                              left:  `${d.x}%`,
                              top:   `${d.y}%`,
                              width: `${d.w}%`,
                              height:`${d.h}%`,
                            }}
                          >
                            <div className="absolute -top-5 left-0 rounded bg-black/70 px-2 py-0.5 text-[10px] text-emerald-200">
                              {d.label} · {(d.score * 100).toFixed(0)}%
                            </div>
                          </div>
                        ))}

                        
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alt bilgi kartları */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-zinc-300">
                  {[
                    {icon: <BellRing className="h-4 w-4"/>, label: "Anında uyarılar"},
                    {icon: <LineChart className="h-4 w-4"/>, label: "Günlük KPI'lar"},
                    {icon: <Cpu className="h-4 w-4"/>, label: "Edge hazır"}
                  ].map((i,idx)=> (
                    <div key={idx} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      {i.icon}{i.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moving logo strip */}
        <div className="border-y border-white/5 bg-neutral-950/50 py-6">
          <div className="mx-auto max-w-7xl overflow-hidden">
            <div className="flex gap-14 whitespace-nowrap marquee-track will-change-transform">
              {["AC Foods","Nordsec","Anecoop","Redland","Mouton","Unifrutti","Clover AI","Sentinel","TrueWatch","Greyline"].concat(["AC Foods","Nordsec","Anecoop","Redland","Mouton","Unifrutti","Clover AI","Sentinel","TrueWatch","Greyline"]).map((brand, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-zinc-400/80">
                  <div className="h-6 w-6 rounded-md bg-white/10" />
                  <span className="font-medium tracking-wide">{brand}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {icon: <Video className="h-5 w-5"/>, title: "Gerçek zamanlı tespit", desc: "İnsanlar, araçlar, izinsiz giriş, KKD, sürekli kalma, çizgi geçişi ve özel kurallar."},
            {icon: <Lock className="h-5 w-5"/>, title: "Tasarımda gizlilik öncelikli", desc: "Cihaz üzerinde yüz bulanıklaştırma, rol tabanlı erişim ve tam denetim izi."},
            {icon: <LineChart className="h-5 w-5"/>, title: "Uygulanabilir analitik", desc: "Günlük e-posta raporları ve ısı haritaları ile trendler içeren canlı dashboard."},
          ].map((f, idx) => (
            <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500/15 px-3 py-1 text-emerald-300">
                {f.icon}
                <span className="text-sm">Özellik</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-white">Nasıl Çalışır</h2>
          <p className="text-zinc-400">Mevcut NVR/DVR/IP kameralarınızla tak-çalıştır.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {icon: <Camera className="h-5 w-5"/>, title: "Bağlan", desc: "CCTV'nizden RTSP/ONVIF akışı. Yeni donanım gerekmez."},
            {icon: <Cpu className="h-5 w-5"/>, title: "Analiz Et", desc: "Edge kutusu veya bulut modeli kareleri 30 FPS'e kadar işler."},
            {icon: <BellRing className="h-5 w-5"/>, title: "Harekete Geç", desc: "WhatsApp, Slack, e-posta uyarıları gönderin veya webhook'ları tetikleyin."},
          ].map((s, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[.03] p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="mb-8 text-3xl font-semibold">Nerede Parlar</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {icon: <Building2 className="h-5 w-5"/>, title: "Perakende", desc: "Kuyruk & hırsızlık analitiği"},
            {icon: <Factory className="h-5 w-5"/>, title: "Üretim", desc: "Güvenlik & KKD"},
            {icon: <Warehouse className="h-5 w-5"/>, title: "Depolar", desc: "İzinsiz giriş & bölgeler"},
            {icon: <Smartphone className="h-5 w-5"/>, title: "Akıllı şehirler", desc: "Trafik & kalabalık"},
          ].map((c, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1 text-zinc-200">{c.icon}<span className="text-sm">{c.title}</span></div>
              <p className="text-zinc-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KPI Banner */}
      <section className="border-y border-white/5 bg-white/[.03] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            {k:"200ms", t:"Ort. uyarı gecikmesi"},
            {k:"98.7%", t:"Test setinde hassasiyet"},
            {k:"+37%", t:"Daha hızlı olay müdahalesi"},
            {k:"<10 dk", t:"Kamera başına kurulum"},
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 text-center">
              <div className="text-2xl font-semibold text-white">{s.k}</div>
              <div className="mt-1 text-sm text-zinc-400">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Basit fiyatlandırma</h2>
          <p className="mt-2 text-zinc-400">Küçük başlayın. Yüzlerce kameraya ölçeklendirin.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {name:"Başlangıç", price:"10,000₺", unit:"/kamera/ay", features:["3 kurala kadar","E-posta uyarıları","Haftalık rapor","Kişi tanımlama"]},
            {name:"Pro", price:"50,000₺", unit:"/kamera/ay", featured:true, features:["Sınırsız kural","Webhook/Slack/WhatsApp","Günlük rapor","Öncelikli destek"]},
            {name:"Kurumsal", price:"Özel", unit:"", features:["SLA & SSO","Şirket içi kurulum","Denetim kayıtları","Entegrasyon desteği"]}
          ].map((p, i) => (
            <div key={i} className={`rounded-3xl border ${p.featured?"border-emerald-400/50 bg-gradient-to-b from-emerald-500/10 to-white/[.03]":"border-white/10 bg-white/5"} p-6`}>
              <div className="mb-2 text-sm tracking-wide text-zinc-300">{p.name}</div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-semibold text-white">{p.price}</div>
                <div className="text-zinc-400">{p.unit}</div>
              </div>
              <ul className="mt-4 space-y-2 text-zinc-300">
                {p.features.map((f,idx)=>(
                  <li key={idx} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-400"/>{f}</li>
                ))}
              </ul>
              <a href="https://cal.com/kerem-bukucu" className={`mt-6 inline-block w-full rounded-2xl px-4 py-3 text-center ${p.featured?"bg-emerald-500 text-neutral-950 hover:bg-emerald-400":"bg-white/10 text-white hover:bg-white/15"}`}>{p.name === 'Kurumsal' ? 'Satış ekibiyle görüş' : 'Deneme başlat'}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="mb-8 text-3xl font-semibold">SSS</h2>
        <div className="space-y-4">
          {[
            {q:"Hangi kameraları destekliyorsunuz?", a:"RTSP/ONVIF uyumlu herhangi bir IP kamera, NVR/DVR akışları veya S3 video dosyaları."},
            {q:"Veriler nerede işleniyor?", a:"Edge cihazı veya AB bulutumuzu seçin. Yüzler/plakalar sahadan ayrılmadan önce bulanıklaştırılabilir."},
            {q:"Özel dedektörler oluşturabilir misiniz?", a:"Evet. Modelleri ortamınız ve metrikleriniz için hassaslaştırırız."},
            {q:"Deneme süresi?", a:"4 kameraya kadar 14 günlük ücretsiz pilot."},
          ].map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between text-white">
                <span>{f.q}</span>
                <CircleHelp className="h-5 w-5 text-zinc-400 transition-transform group-open:rotate-45"/>
              </summary>
              <p className="mt-3 text-zinc-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/5 bg-neutral-950/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center">
                <Shield className="h-4 w-4 text-neutral-950" />
              </div>
              <div>
                <div className="font-semibold">LuxReport</div>
                <div className="text-sm text-zinc-400">Daha güvenli alanlar için bilgisayarlı görü</div>
              </div>
            </div>
            <form className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-2 sm:flex sm:items-center sm:gap-2">
              <input type="email" placeholder="İş e-postası" className="w-full rounded-xl border-0 bg-transparent px-3 py-3 text-sm text-white placeholder:text-zinc-400 focus:outline-none" />
              <a href="https://cal.com/kerem-bukucu" className="mt-2 w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-medium text-neutral-950 hover:bg-emerald-400 sm:mt-0 sm:w-auto">Demo talep et</a>
            </form>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-400">
            <div>© {new Date().getFullYear()} LuxReport Inc.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Gizlilik</a>
              <a href="#" className="hover:text-white">Güvenlik</a>
              <a href="#" className="hover:text-white">Durum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

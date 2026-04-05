/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Shield, 
  Sun, 
  EyeOff, 
  Car, 
  Home, 
  Building2, 
  CheckCircle2, 
  Phone, 
  Instagram, 
  Facebook,
  Mail,
  MapPin, 
  Clock,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState, FormEvent } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    projectType: "Residencial"
  });

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. Gostaria de um orçamento para um projeto ${formData.projectType}. Meu WhatsApp é ${formData.whatsapp}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/351926258225?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      title: "Residencial & Office",
      description: "Películas térmicas de alta performance que reduzem o calor em até 80%, protegendo móveis e garantindo conforto térmico absoluto.",
      icon: <Home className="w-8 h-8 text-[#81C3D7]" />,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Decorativas & Fosco",
      description: "Privacidade e sofisticação para divisórias de vidro, salas de reunião e janelas com acabamentos foscos e jateados tecnológicos.",
      icon: <Building2 className="w-8 h-8 text-[#81C3D7]" />,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Linha Automotiva",
      description: "O toque final de tecnologia para seu veículo com proteção UV extrema e controle solar de última geração.",
      icon: <Car className="w-8 h-8 text-[#81C3D7]" />,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const benefits = [
    {
      title: "Eficiência Energética",
      description: "Reduza drasticamente o uso de ar-condicionado em sua casa ou escritório.",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Proteção de Interiores",
      description: "Evite o desbotamento de pisos, cortinas e móveis causado pelos raios UV.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Privacidade Inteligente",
      description: "Soluções foscas e decorativas que garantem discrição sem perder a luz natural.",
      icon: <EyeOff className="w-6 h-6" />
    },
    {
      title: "Segurança de Vidros",
      description: "Películas de segurança que evitam estilhaços em caso de quebra acidental.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                2F<span className="text-[#81C3D7] text-neon">PELÍCULAS</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-sm font-medium text-slate-400 hover:text-[#81C3D7] transition-colors">Início</a>
              <a href="#servicos" className="text-sm font-medium text-slate-400 hover:text-[#81C3D7] transition-colors">Arquitetura</a>
              <a href="#beneficios" className="text-sm font-medium text-slate-400 hover:text-[#81C3D7] transition-colors">Benefícios</a>
              <a href="#contato" className="bg-[#81C3D7] text-[#050505] px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-neon transition-all">
                Orçamento Grátis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10 px-4 pt-2 pb-6 space-y-4"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-400">Início</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-400">Arquitetura</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-400">Benefícios</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#81C3D7] text-[#050505] py-3 rounded-xl font-bold">
              Orçamento Grátis
            </a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(129,195,215,0.1)_0%,transparent_100%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-[#81C3D7]/10 border border-[#81C3D7]/20 px-3 py-1 rounded-full mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-[#81C3D7] animate-pulse shadow-neon" />
                  <span className="text-xs font-bold text-[#81C3D7] uppercase tracking-wider">Soluções em Películas</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  Conforto Térmico e <span className="text-[#81C3D7] text-neon">Privacidade</span> para seu Ambiente.
                </h1>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                  Especialistas em películas arquitetônicas de alta performance. Reduza o calor, proteção UV e modernize seu ambiente com tecnologia de ponta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contato" className="flex items-center justify-center bg-[#81C3D7] text-[#050505] px-8 py-4 rounded-2xl font-bold hover:shadow-neon-strong transition-all group">
                    Solicitar Orçamento
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#servicos" className="flex items-center justify-center bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                    Ver Soluções
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                    alt="Arranha-céu moderno espelhado" 
                    className="w-full h-auto object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#111] p-6 rounded-2xl shadow-xl border border-white/10 hidden sm:block">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#81C3D7]/10 p-3 rounded-xl">
                      <Sun className="w-6 h-6 text-[#81C3D7]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Redução Térmica</p>
                      <p className="text-xs text-slate-500">Até 80% menos calor</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#81C3D7] uppercase tracking-[0.2em] mb-4">Nossas Soluções</h2>
              <p className="text-4xl font-extrabold text-white tracking-tight">Especialistas em Vidros</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 rounded-3xl p-8 border border-white/10 transition-all hover:border-[#81C3D7]/30"
                >
                  <div className="mb-6 drop-shadow-[0_0_8px_rgba(129,195,215,0.4)]">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="rounded-2xl overflow-hidden h-48 border border-white/5">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-24 bg-[#050505] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-[#81C3D7] uppercase tracking-[0.2em] mb-4">Por que escolher a 2F?</h2>
                <p className="text-4xl font-extrabold tracking-tight mb-8">Tecnologia Arquitetônica</p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-3">
                      <div className="bg-[#81C3D7]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#81C3D7] shadow-neon">
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-lg">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Ambiente com películas de proteção solar" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-[#81C3D7]/5 rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#81C3D7] rounded-full blur-[120px] opacity-10" />
              
              <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h2 className="text-4xl font-extrabold tracking-tight mb-6">Pronto para modernizar seu ambiente?</h2>
                  <p className="text-slate-400 text-lg mb-10">Especialistas em projetos residenciais e corporativos em **TODO PORTUGAL**. Solicite uma visita técnica.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <Phone className="w-6 h-6 text-[#81C3D7]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">WhatsApp</p>
                        <a href="https://wa.me/351926258225" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:text-[#81C3D7] transition-colors">+351 926258225</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <Mail className="w-6 h-6 text-[#81C3D7]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">E-mail</p>
                        <a href="mailto:Fabssis2@gmail.com" className="font-bold text-xl hover:text-[#81C3D7] transition-colors">Fabssis2@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                        <MapPin className="w-6 h-6 text-[#81C3D7]" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Morada</p>
                        <p className="font-bold text-sm leading-tight">Rua José Ferreira Cleto 7, Santa Iria de Azoia, Lisboa, código postal 2690-417</p>
                        <p className="text-[#81C3D7] text-xs font-bold mt-1 uppercase tracking-widest">Atendimento em TODO PORTUGAL</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-3xl p-8 text-white shadow-2xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
                  <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                    <div>
                      <label className="block text-sm font-semibold text-slate-400 mb-1">Nome Completo</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-[#81C3D7] focus:border-transparent outline-none transition-all" 
                        placeholder="Seu nome" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-400 mb-1">WhatsApp</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-[#81C3D7] focus:border-transparent outline-none transition-all" 
                        placeholder="+351 000 000 000" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-400 mb-1">Tipo de Projeto</label>
                      <select 
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-[#81C3D7] focus:border-transparent outline-none transition-all appearance-none"
                      >
                        <option className="bg-[#111]">Residencial</option>
                        <option className="bg-[#111]">Escritório / Comercial</option>
                        <option className="bg-[#111]">Automotivo</option>
                        <option className="bg-[#111]">Outros</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-[#81C3D7] text-[#050505] py-4 rounded-xl font-bold hover:shadow-neon transition-all mt-4">
                      Receber msg no WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                2F<span className="text-[#81C3D7] text-neon">PELÍCULAS</span>
              </span>
              <p className="text-slate-500 text-sm mt-2">© 2026 2F Películas. Especialistas em Arquitetura de Vidros.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/2fpeliculas?igsh=OWpqZGJ6bnhrOTQz" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#81C3D7] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1Qe7BC24QK/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#81C3D7] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://wa.me/351926258225" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#81C3D7] transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/351926258225" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

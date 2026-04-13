<template>
  <div class="flex flex-col h-screen bg-[#F7F9FB] font-sans text-slate-900 overflow-hidden">
    
    <transition name="fade">
      <div v-if="!isLoggedIn" class="fixed inset-0 z-[100] bg-white flex flex-col p-9 justify-center">
        <div class="text-center mb-12">
          <div class="w-24 h-24 mx-auto mb-6 bg-slate-50 rounded-3xl flex items-center justify-center shadow-sm">
            <img src="../assets/images/logo.png" class="w-16 h-16 object-contain" />
          </div>
          <h1 class="text-2xl font-black tracking-tight text-slate-900">稚影智能诊断平台</h1>
          <p class="text-slate-400 text-[10px] mt-2 font-bold uppercase tracking-[0.2em]">Mobile Diagnostic Terminal</p>
        </div>

        <div class="space-y-4">
          <input type="text" placeholder="医号 / 账号" class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-[rgb(56,184,232)]" />
          <input type="password" placeholder="访问密码" class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-[rgb(56,184,232)]" />
          <button @click="isLoggedIn = true" class="w-full bg-[rgb(56,184,232)] text-white py-4 rounded-2xl font-black shadow-lg mt-4 active:scale-[0.98] transition-all">
            进入诊断系统
          </button>
        </div>
      </div>
    </transition>

    <header class="bg-white px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <button @click="showHistory = true" class="p-2 text-slate-500 active:bg-slate-50 rounded-full transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      <div class="flex flex-col items-center">
        <span class="font-black text-[15px] tracking-tight">稚小影智能助手</span>
        <span class="text-[9px] text-green-500 font-bold flex items-center">
          <span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span> 实时辅助中
        </span>
      </div>
      <div class="w-9 h-9 rounded-full bg-[rgb(56,184,232,0.1)] border border-[rgb(56,184,232,0.2)] flex items-center justify-center overflow-hidden">
        <svg class="w-5 h-5 text-[rgb(56,184,232)]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
      </div>
    </header>

    <div class="flex-1 overflow-y-auto p-4 space-y-7 custom-scrollbar pb-28">
      
      <div class="flex flex-row-reverse items-start animate-fade-in-up">
        <div class="w-9 h-9 rounded-full bg-slate-200 ml-3 flex-shrink-0 flex items-center justify-center text-slate-500 shadow-sm border border-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm border border-slate-100 max-w-[82%]">
          <p class="text-[13px] leading-relaxed text-slate-700 mb-3 text-justify">
            患者，14个月。发现右侧肾上腺肿物，LDH指标升高。请结合以下病理切片进行分析。
          </p>
          <div class="rounded-xl overflow-hidden border border-slate-100 shadow-inner">
            <img src="../assets/images/wsi-sample.jpg" class="w-full object-cover aspect-video" />
          </div>
        </div>
      </div>

      <div class="flex items-start animate-fade-in-up" style="animation-delay: 0.4s;">
        <div class="w-9 h-9 rounded-full bg-white mr-3 flex-shrink-0 flex items-center justify-center shadow-sm border border-slate-100 overflow-hidden">
          <img src="../assets/images/logo.png" class="w-full h-full object-contain p-1" />
        </div>
        
        <div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%]">
          <div class="text-[13px] text-slate-600 leading-[1.7] space-y-4 text-justify">
            <p v-for="(step, index) in report.reasoningChain" :key="index">{{ step }}</p>
          </div>

          <div class="mt-5 bg-[rgb(56,184,232,0.04)] border-l-4 border-[rgb(56,184,232)] p-4 rounded-r-xl">
            <h4 class="text-[rgb(56,184,232)] font-black text-[10px] uppercase tracking-wider mb-2 flex items-center">
               <svg class="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
               AI 综合诊断意见
            </h4>
            <div class="mb-3">
              <p class="text-sm font-black text-slate-900">{{ report.finalConclusion.type }}</p>
              <p class="text-[10px] text-slate-400 font-bold">{{ report.finalConclusion.subtype }} · {{ report.finalConclusion.mki }}</p>
            </div>
            <p class="text-[12px] text-slate-600 leading-relaxed italic border-t border-[rgb(56,184,232,0.1)] pt-3">
              {{ report.finalConclusion.summary }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center gap-3 pb-8">
      <button class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-50 active:scale-90 transition-all">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      </button>

      <div class="flex-1 bg-slate-100 rounded-2xl px-5 py-3 text-slate-400 text-xs font-medium">
        输入临床指标或提问...
      </div>
      
      <button class="bg-[rgb(56,184,232)] text-white w-10 h-10 rounded-xl shadow-lg shadow-[rgb(56,184,232,0.2)] flex items-center justify-center active:scale-90 transition-transform">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
      </button>
    </div>

    <transition name="slide">
      <div v-if="showHistory" class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm" @click="showHistory = false">
        <div class="w-[80%] h-full bg-white p-6 shadow-2xl" @click.stop>
          <h3 class="font-black text-xl mb-8 pt-4">诊断历史记录</h3>
          <div class="space-y-4 overflow-y-auto">
            <div v-for="i in 3" :key="i" class="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span class="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-500 font-bold tracking-tighter">CASE #00{{i}}</span>
              <p class="text-sm font-bold text-slate-800 mt-2">神经母细胞瘤 (NB)</p>
              <p class="text-[11px] text-slate-400 mt-1">2024-03-22</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { diagnosticReport } from '../mock/patientData.js';

const report = diagnosticReport;
const isLoggedIn = ref(false); 
const showHistory = ref(false);
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { display: none; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease-out; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
.text-justify { text-align: justify; }
</style>
<template>
  <div class="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
    <div class="max-w-4xl w-full">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-black text-white mb-4 tracking-tight">稚影智能诊断系统 <span class="text-[rgb(56,184,232)]">Zhiying AI</span></h1>
        <p class="text-slate-400 font-medium">请选择您要进入的诊断终端版本</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button @click="$router.push('/pc')" class="group text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-[rgb(56,184,232)] rounded-3xl p-8 transition-all duration-300">
          <div class="w-16 h-16 bg-[rgb(56,184,232,0.2)] text-[rgb(56,184,232)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">PC 专业工作站</h2>
          <p class="text-slate-400 text-sm leading-relaxed">双屏多模态联合分析，适用于病理科桌面环境，提供完整的 WSI 阅片与思维链推导功能。</p>
        </button>

        <button @click="$router.push('/mobile')" class="group text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-green-400 rounded-3xl p-8 transition-all duration-300">
          <div class="w-16 h-16 bg-green-400/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white mb-2">Mobile 移动助手</h2>
          <p class="text-slate-400 text-sm leading-relaxed">对话流诊断模式，适用于临床医生随时随地查阅报告、追踪历史记录与快速决策。</p>
        </button>
      </div>
    </div>
  </div>
</template>
<template>
  <aside class="w-72 bg-slate-50 text-slate-800 flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.05)] z-20 relative shrink-0 border-r border-slate-200">
    
    <div class="p-8 pb-4">
    <div class="flex items-center space-x-3">
        <div class="w-10 h-10 flex items-center justify-center overflow-hidden">
        <img 
            src="../assets/images/logo.png" 
            alt="稚影科技 Logo" 
            class="w-full h-full object-contain"
        />
        </div>
        <div class="flex flex-col">
        <span class="text-xl font-black tracking-wider text-slate-900">稚影科技</span>
        <span class="text-[10px] font-bold text-[rgb(56,184,232)] tracking-[0.2em] uppercase">Zhiying Tech</span>
        </div>
    </div>
    </div>

    <nav class="flex-1 px-4 py-6 space-y-2">
      <a href="#" class="flex items-center space-x-4 px-4 py-3.5 bg-[rgb(56,184,232,0.1)] text-[rgb(56,184,232)] rounded-xl font-bold transition-all shadow-sm">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <span>智能辅助诊断</span>
      </a>

      <a href="#" class="flex items-center space-x-4 px-4 py-3.5 text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 rounded-xl font-semibold transition-all group">
        <svg class="w-5 h-5 text-slate-400 group-hover:text-[rgb(56,184,232)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        <span>病理案例库</span>
      </a>

      <a href="#" class="flex items-center space-x-4 px-4 py-3.5 text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 rounded-xl font-semibold transition-all group">
        <svg class="w-5 h-5 text-slate-400 group-hover:text-[rgb(56,184,232)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        <span>诊断报告管理</span>
      </a>

      <a href="#" class="flex items-center space-x-4 px-4 py-3.5 text-slate-600 hover:bg-slate-200/50 hover:text-slate-900 rounded-xl font-semibold transition-all group">
        <svg class="w-5 h-5 text-slate-400 group-hover:text-[rgb(56,184,232)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        <span>系统设置</span>
      </a>
    </nav>

    <div class="p-6">
      <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">算力资源</span>
          <span class="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">运行中</span>
        </div>
        <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div class="bg-[rgb(56,184,232)] h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(56,184,232,0.4)]"></div>
        </div>
        <p class="text-[10px] text-slate-500 mt-2.5 font-medium italic">GPU 节点: NVIDIA A100 x 2</p>
      </div>
    </div>
  </aside>
</template>
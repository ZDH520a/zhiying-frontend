<template>
  <header class="h-16 flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b-2 border-[rgb(63,188,234)]/60 z-10 shrink-0 sticky top-0 transition-all shadow-sm">
    
    <div class="flex items-center">
      <div class="w-2 h-7 bg-[rgb(63,188,234)] rounded-sm mr-4 shadow-md"></div>
      <h1 class="text-xl font-extrabold text-slate-900 tracking-tight flex items-center">
        稚影科技
        <span class="w-1.5 h-1.5 bg-[rgb(63,188,234)] rounded-full mx-2.5"></span>
        <span class="text-slate-600 font-bold text-lg">儿童母细胞瘤辅助诊断系统</span>
      </h1>
    </div>
    
    <div class="flex-1 max-w-sm px-6 relative">
      <input type="text" placeholder="搜索患者 ID, 报告编号..." class="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 pl-10 text-sm outline-none focus:ring-2 focus:ring-[rgb(63,188,234)]/50 focus:bg-white focus:border-[rgb(63,188,234)] transition" readOnly />
      <svg class="w-4 h-4 absolute left-10 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>

    <div class="flex items-center space-x-6 text-sm font-semibold text-slate-600">
      <span class="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-100 flex items-center">
        <div class="w-1.5 h-1.5 bg-teal-500 rounded-full mr-1.5"></div>
        系统就绪
      </span>

      <div class="flex items-center space-x-4">
        <button class="text-slate-400 hover:text-[rgb(63,188,234)] transition-colors p-1.5 rounded-lg hover:bg-blue-50 relative">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <div class="absolute top-1 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
        </button>

        <a href="#" class="hover:text-[rgb(63,188,234)] transition-colors">控制台</a>
        <a href="#" class="hover:text-[rgb(63,188,234)] transition-colors">团队介绍</a>
        <div class="w-px h-5 bg-slate-200"></div>
        
        <button class="flex items-center space-x-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 px-4 py-2 rounded-full transition-colors group shadow-inner border border-slate-100">
          <div class="w-7 h-7 bg-[rgb(63,188,234)] rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-105 transition shadow-sm">Doc</div>
          <span class="font-bold">陈医生</span>
          <svg class="w-4 h-4 text-slate-400 group-hover:text-[rgb(63,188,234)] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>
    </div>
  </header>
</template>
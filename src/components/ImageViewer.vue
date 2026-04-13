<template>
  <div class="flex flex-col space-y-6">
    <div class="bg-white rounded-2xl shadow-xl border-2 border-[rgb(63,188,234)]/40 p-6 transition hover:shadow-2xl">
      <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <h3 class="text-slate-900 font-extrabold flex items-center">
          <span class="bg-blue-50 text-[rgb(56,184,232)] p-1.5 rounded-lg mr-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </span>
          数字病理切片 (WSI)
        </h3>
      </div>
      
      <div class="w-full aspect-[5/4] max-h-[350px] rounded-xl overflow-hidden relative border border-slate-200 bg-slate-50 flex items-center justify-center group">
        <img src="../assets/images/wsi-sample.jpg" class="w-full h-full object-cover transition-transform group-hover:scale-105" @error="handleImageError" />
        <div class="absolute bottom-4 right-4 bg-white/90 px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-[10px] font-bold text-slate-500">
          已加载: Case_2024_NB001.svs
        </div>
      </div>
      
      <button class="mt-4 w-full py-2.5 border-2 border-dashed border-[rgb(56,184,232)]/40 rounded-xl text-[rgb(56,184,232)] text-sm font-bold hover:bg-[rgb(56,184,232)]/5 transition-all">
        + 更换病理图像
      </button>
    </div>

    <div class="bg-white rounded-2xl shadow-xl border-2 border-[rgb(63,188,234)]/40 p-6">
      <h3 class="text-slate-900 font-extrabold mb-4 flex items-center">
        <span class="bg-amber-50 text-amber-600 p-1.5 rounded-lg mr-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </span>
        临床多模态信息输入
      </h3>
      
      <div class="space-y-4">
        <div>
          <label class="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">临床症状与指标描述</label>
          <textarea 
            rows="3" 
            class="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[rgb(56,184,232)] focus:border-transparent outline-none transition-all"
            placeholder="请输入患儿年龄、临床表现、生化指标（如LDH、VMA）等..."
          >患儿14个月，右侧肾上腺肿物，影像学显示包绕大血管。实验室检查示LDH显著升高，NSE阳性。</textarea>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <button class="flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l3-3m-3 3l-3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <span>导入HIS病例</span>
          </button>
          
          <button class="flex items-center justify-center space-x-2 py-3 rounded-xl bg-[rgb(56,184,232)] text-white font-bold text-sm shadow-lg shadow-[rgb(56,184,232,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span>启动 AI 联合分析</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
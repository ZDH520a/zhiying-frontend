<template>
  <div class="bg-white rounded-2xl shadow-xl border-2 border-[rgb(63,188,234)]/40 p-7 flex flex-col h-full transition hover:shadow-2xl">
    
    <div class="flex-1 overflow-y-auto space-y-5 pr-1 pt-2 custom-scrollbar text-slate-700">
      
      <section class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <div class="flex items-center text-slate-400 font-bold mb-4 text-[10px] uppercase tracking-[0.2em]">
          AI 推理分析记录
        </div>
        
        <div class="text-[13px] leading-[1.7] space-y-4 text-slate-600">
          <p v-for="(step, index) in report.reasoningChain" :key="index" class="indent-8 text-justify">
            {{ step }}
          </p>
        </div>
      </section>

      <section class="bg-[rgb(56,184,232,0.06)] border border-[rgb(56,184,232,0.2)] rounded-xl p-5 shadow-sm">
        <div class="flex items-center text-[rgb(56,184,232)] font-bold mb-4 text-sm">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2.5"></path></svg>
          结构化诊断结果
        </div>

        <div class="grid grid-cols-4 gap-2 mb-5 bg-white/60 p-3 rounded-lg border border-[rgb(56,184,232,0.1)]">
          <div v-for="(val, key) in {'肿瘤类型': report.finalConclusion.type, '组织分型': report.finalConclusion.subtype, '分化程度': report.finalConclusion.differentiation, 'MKI指数': report.finalConclusion.mki}" :key="key" class="text-center border-r last:border-r-0 border-slate-200 px-1">
            <span class="text-[9px] text-slate-400 font-bold block mb-1 truncate">{{ key }}</span>
            <p class="text-[11px] font-extrabold text-slate-800 leading-tight">{{ val }}</p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgb(56,184,232,0.1)]">
          <span class="text-[11px] text-slate-500 font-bold uppercase tracking-wider block mb-2">综合诊断意见与建议</span>
          <div class="text-[13px] leading-[1.7] text-slate-800 font-medium text-justify bg-white/40 p-4 rounded-lg border-l-4 border-[rgb(56,184,232)] shadow-sm whitespace-pre-line">
            {{ report.finalConclusion.summary }}
          </div>
        </div>
      </section>
    </div>

    <div class="mt-5">
      <button class="w-full bg-[rgb(56,184,232)] text-white py-3.5 rounded-xl font-bold hover:shadow-lg transition-all active:scale-[0.97]">
        确认并同步至 HIS
      </button>
    </div>
  </div>
</template>

<script setup>
// 这里导入你的数据
import { diagnosticReport } from '../mock/patientData.js';
const report = diagnosticReport;
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
</style>
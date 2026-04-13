<template>
  <div class="flex h-screen bg-[#f8fafc] font-sans text-slate-800 overflow-hidden relative">
    
    <Sidebar />

    <main class="flex-1 flex flex-col relative h-full">
      
      <TopHeader />

      <div class="flex-1 overflow-y-auto p-8">
        <div class="max-w-7xl mx-auto h-[calc(100vh-12rem)] min-h-[600px]">
          
          <div class="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-8">
            <ImageViewer />
            <DiagnosisReport />
          </div>
          
        </div>
      </div>

      </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import TopHeader from '../components/TopHeader.vue';
import ImageViewer from '../components/ImageViewer.vue';
import DiagnosisReport from '../components/DiagnosisReport.vue';
</script>
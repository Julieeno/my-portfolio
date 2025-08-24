<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60" @click="closeOnBackdrop">
    <div class="relative w-full max-w-7xl bg-sage-900 rounded-lg overflow-hidden shadow-xl" @click.stop>
      <div class="aspect-video">
        <iframe 
          v-if="processedVideoUrl"
          class="w-full h-full"
          :src="processedVideoUrl"
          frameborder="0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div v-else class="w-full h-full flex items-center justify-center bg-sage-800">
          <p class="text-white">Unable to load video. Please try again later.</p>
        </div>
      </div>
    </div>

    <button 
      @click="close" 
      class="absolute top-4 right-4 text-white hover:text-sage-300 transition-colors bg-black bg-opacity-50 p-2 rounded-full"
      aria-label="Close video player"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  videoUrl: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

const processedVideoUrl = computed(() => {
  if (!props.videoUrl) return '';
  
  if (props.videoUrl.includes('youtube.com') || props.videoUrl.includes('youtu.be')) {
    let videoId = '';
    
    if (props.videoUrl.includes('youtube.com/embed/')) {
      videoId = props.videoUrl.split('youtube.com/embed/')[1].split('?')[0];
    } else if (props.videoUrl.includes('youtube.com/watch?v=')) {
      videoId = props.videoUrl.split('watch?v=')[1].split('&')[0];
    } else if (props.videoUrl.includes('youtu.be/')) {
      videoId = props.videoUrl.split('youtu.be/')[1].split('?')[0];
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`;
    }
  }
  
  return props.videoUrl.startsWith('http') ? props.videoUrl : `https://${props.videoUrl}`;
});

const close = () => {
  emit('close');
};

const closeOnBackdrop = (event) => {
  if (event.target === event.currentTarget) {
    close();
  }
};

watch(() => props.isOpen, (value) => {
  if (value) {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
  } else {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
  }
});

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    close();
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

div[v-if="isOpen"] {
  animation: fadeIn 0.3s ease-out;
}

.aspect-video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.aspect-video iframe,
.aspect-video > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
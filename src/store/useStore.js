// src/store/useStore.js
import { create } from 'zustand';
import api from '@/lib/axios';

export const useStore = create((set, get) => ({

  // ---- UI State ----
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),

  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  // ---- Theme ----
  themeColor: '0.627 0.135 192.312',
  setThemeColor: (color) => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--primary', `oklch(${color})`);
      document.documentElement.style.setProperty('--ring',    `oklch(${color})`);
      localStorage.setItem('theme-color', color);
    }
    set({ themeColor: color });
  },
  initTheme: () => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('theme-color');
    if (saved) {
      document.documentElement.style.setProperty('--primary', `oklch(${saved})`);
      document.documentElement.style.setProperty('--ring',    `oklch(${saved})`);
      set({ themeColor: saved });
    }
  },

  // ---- Skills ----
  skills: [],
  isLoading: false,
  fetchSkills: async () => {
    set({ isLoading: true });
    try {
      const res = await api.get('/skills');
      set({ skills: res.data });
    } finally { set({ isLoading: false }); }
  },

  // ---- Projects ----
  projects: [],
  isLoadingProjects: false,
  fetchProjects: async () => {
    set({ isLoadingProjects: true });
    try {
      const res = await api.get('/projects');
      set({ projects: res.data });
    } finally { set({ isLoadingProjects: false }); }
  },

  // ---- Certificates ----
  certificates: [],
  isLoadingCertificates: false,
  fetchCertificates: async () => {
    set({ isLoadingCertificates: true });
    try {
      const res = await api.get('/certificates');
      set({ certificates: res.data });
    } finally { set({ isLoadingCertificates: false }); }
  },

  // ---- CV ----
  cv: null,
  isLoadingCv: false,
  fetchCv: async () => {
    set({ isLoadingCv: true });
    try {
      const res = await api.get('/cv');
      set({ cv: res.data });
    } finally { set({ isLoadingCv: false }); }
  },

  // ---- Messages ----
  messages: [],
  isLoadingMessages: false,
  fetchMessages: async () => {
    set({ isLoadingMessages: true });
    try {
      const res = await api.get('/contact');
      set({ messages: res.data });
    } finally { set({ isLoadingMessages: false }); }
  },
  submitContact: async (data) => {
    const res = await api.post('/contact', data);
    return res.data;
  },

  // ---- Languages ----
  languages: [],
  isLoadingLanguages: false,
  fetchLanguages: async () => {
    set({ isLoadingLanguages: true });
    try {
      const res = await api.get('/languages');
      set({ languages: res.data });
    } finally { set({ isLoadingLanguages: false }); }
  },

  // ---- Experiences ----
  experiences: [],
  isLoadingExperiences: false,
  fetchExperiences: async () => {
    set({ isLoadingExperiences: true });
    try {
      const res = await api.get('/experience');
      set({ experiences: res.data });
    } finally { set({ isLoadingExperiences: false }); }
  },
}));
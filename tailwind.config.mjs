/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-flow': 'dataflow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 3s infinite',
      },
      keyframes: {
        dataflow: {
          '0%, 100%': {
            transform: 'translateY(-10px)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(10px)',
            opacity: '1'
          }
        }
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors: {
        // Pipeline stage colors
        pipeline: {
          ingestion: {
            light: '#DBEAFE', // blue-100
            dark: '#1E3A8A',  // blue-900
          },
          validation: {
            light: '#DCFCE7', // green-100
            dark: '#14532D',  // green-900
          },
          transformation: {
            light: '#F3E8FF', // purple-100
            dark: '#581C87',  // purple-900
          },
          storage: {
            light: '#DBEAFE', // blue-100
            dark: '#1E3A8A',  // blue-900
          },
          orchestration: {
            light: '#F3E8FF', // purple-100
            dark: '#581C87',  // purple-900
          },
          monitoring: {
            light: '#DCFCE7', // green-100
            dark: '#14532D',  // green-900
          },
          delivery: {
            light: '#FEE2E2', // red-100
            dark: '#7F1D1D',  // red-900
          },
        }
      },
      backgroundImage: {
        'gradient-pipeline': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'data-grid': 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'data-grid': '20px 20px',
      },
    },
  },
  plugins: [],
}
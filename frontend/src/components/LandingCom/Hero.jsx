import React from 'react'

export const Hero = () => {
  return (
    <div>
        <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500/30">
  <nav class="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
    <div class="text-2xl font-bold tracking-tight">Quiety</div>
    <ul class="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
      <li class="hover:text-white cursor-pointer">Home</li>
      <li class="hover:text-white cursor-pointer">Find Jobs</li>
      <li class="hover:text-white cursor-pointer">Find Expert</li>
      <li class="hover:text-white cursor-pointer">Pages</li>
      <li class="hover:text-white cursor-pointer">Blog</li>
      <li class="hover:text-white cursor-pointer">Contact</li>
    </ul>
    <button class="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all">
      Post a Job <span class="bg-white text-indigo-600 rounded-full p-0.5">→</span>
    </button>
  </nav>

  <header class="relative max-w-7xl mx-auto px-10 pt-16 pb-32 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/20 via-slate-900 to-slate-950 border border-slate-800/50">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="z-10">
        <h1 class="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
          Talent Hiring Process <br/>
          <span class="text-slate-400">with AI solution</span>
        </h1>
        <p class="mt-8 text-slate-400 max-w-md text-lg leading-relaxed">
          Experience the future of recruitment with AI-powered automation. From 
          <span class="text-yellow-400 underline decoration-indigo-500 underline-offset-4">resume screening</span> to candidate assessment.
        </p>
        
        <div class="mt-10 flex p-1 bg-slate-800/50 border border-slate-700 rounded-full backdrop-blur-md max-w-xl">
          <input type="text" placeholder="Search Your talent" class="bg-transparent px-6 py-3 w-full outline-none text-sm" />
          <select class="bg-transparent border-l border-slate-700 px-4 text-sm text-slate-400 outline-none">
            <option>Web Development</option>
          </select>
          <button class="bg-slate-900 p-3 rounded-full hover:bg-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end">
        <div class="absolute -inset-10 bg-indigo-500/20 blur-[100px] rounded-full"></div>
        <img src="YOUR_IMAGE_URL" alt="Hiring" class="relative z-10 w-full max-w-md rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
      </div>
    </div>
  </header>

  <section class="bg-white text-slate-900 py-24 px-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-20">
        <div class="space-y-6">
          <span class="text-indigo-600 font-semibold tracking-widest uppercase text-xs">Our Story</span>
          <h2 class="text-4xl font-bold leading-snug">
            We’re a next-gen hiring platform built to <span class="text-slate-400">bridge the gap between employers and job seekers.</span>
          </h2>
          <p class="text-slate-500 text-lg">
            Profiles, & a simple process—we make hiring faster, smarter, more human.
          </p>
          <img src="YOUR_TEAM_IMAGE" class="rounded-2xl shadow-2xl w-full" />
        </div>
        
        <div class="flex flex-col justify-center space-y-16">
          <div>
            <h3 class="text-8xl font-black tracking-tighter">93%</h3>
            <p class="mt-4 text-slate-500 max-w-xs leading-relaxed">
              of companies utilizing Quiety platform report a significant increase in the quality and retention of their hires.
            </p>
          </div>
          <div class="border-t border-slate-100 pt-10">
            <h3 class="text-8xl font-black tracking-tighter">04Y+</h3>
            <p class="mt-4 text-slate-500">Years of experience with top talent.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}

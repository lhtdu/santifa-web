"use client";

import { useState } from "react";
import { TrendingDown, TrendingUp, ChevronDown, X } from "lucide-react";
import Gauge from "./Gauge";

type MetricTab = "Impressions" | "Clicks";
type VideoTab = "Video Clicks" | "Video Starts";

export default function DashboardPreview() {
  const [metricTab, setMetricTab] = useState<MetricTab>("Impressions");
  const [videoTab, setVideoTab] = useState<VideoTab>("Video Clicks");

  return (
    <div className="px-3 sm:px-4 w-full">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

          {/* Card 1 — Clicks */}
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-[#ef4d23]">Clicks</span>
                <span className="text-[13px] text-neutral-400">This Month</span>
              </div>
            </div>

            {/* Big number + trend */}
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-semibold text-[#0b0f1a] leading-none">6,896</span>
              <span className="flex items-center gap-1 bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px] font-medium mb-0.5">
                <TrendingDown size={10} />
                -3,382 (33%)
              </span>
            </div>

            {/* Compared to */}
            <p className="text-[12px] text-neutral-400 -mt-2">Compared to yesterday</p>

            {/* Center label */}
            <p className="text-center text-[12px] text-neutral-500">Month Target achieved</p>

            {/* Gauge */}
            <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />

            {/* Toggle pill */}
            <div className="flex bg-neutral-100 rounded-full p-1 gap-1">
              <button
                onClick={() => setMetricTab("Impressions")}
                className={`flex-1 text-[12px] rounded-full py-1.5 px-3 font-medium transition-all ${
                  metricTab === "Impressions"
                    ? "bg-white text-[#0b0f1a] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Impressions
              </button>
              <button
                onClick={() => setMetricTab("Clicks")}
                className={`flex-1 text-[12px] rounded-full py-1.5 px-3 font-medium transition-all ${
                  metricTab === "Clicks"
                    ? "bg-white text-[#0b0f1a] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Clicks
              </button>
            </div>
          </div>

          {/* Card 2 — Form */}
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
            <p className="text-[13px] font-medium text-neutral-700 mb-1">Ste targets</p>

            {/* Dropdowns */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] text-neutral-700">Show figures for</label>
                <button className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-600 hover:border-neutral-300 transition-colors w-full">
                  This month
                  <ChevronDown size={14} className="text-neutral-400" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] text-neutral-700">Compare period by</label>
                <button className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-600 hover:border-neutral-300 transition-colors w-full">
                  Month-to-date (MTD)
                  <ChevronDown size={14} className="text-neutral-400" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] text-neutral-700">Ste targets (This month)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[13px]">#</span>
                  <input
                    type="number"
                    defaultValue={10}
                    className="w-full border border-neutral-200 rounded-lg pl-7 pr-3 py-2 text-[13px] text-neutral-600 hover:border-neutral-300 transition-colors focus:outline-none focus:border-[#ef4d23]/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] text-neutral-700">Ste targets (This year)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[13px]">#</span>
                  <input
                    type="number"
                    defaultValue={100}
                    className="w-full border border-neutral-200 rounded-lg pl-7 pr-3 py-2 text-[13px] text-neutral-600 hover:border-neutral-300 transition-colors focus:outline-none focus:border-[#ef4d23]/50"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 mt-auto pt-2">
              <button className="flex items-center gap-1 bg-[#ef4d23] hover:bg-[#d94420] text-white rounded-lg px-5 py-2 text-[13px] font-medium transition-colors">
                Save
              </button>
              <button className="text-[13px] text-neutral-500 hover:text-neutral-700 underline underline-offset-2 transition-colors">
                Cancel
              </button>
              <button className="ml-auto text-neutral-400 hover:text-neutral-600 transition-colors p-1" aria-label="Close">
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Card 3 — Video Starts */}
          <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-[#ef4d23]">Video Starts</span>
              <span className="text-[13px] text-neutral-400">today</span>
            </div>

            {/* Big number + trend */}
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-semibold text-[#0b0f1a] leading-none">0</span>
              <span className="flex items-center gap-1 bg-neutral-100 text-neutral-500 rounded-full px-2 py-0.5 text-[11px] font-medium mb-0.5">
                <TrendingUp size={10} />
                0
              </span>
            </div>

            <p className="text-[12px] text-neutral-400 -mt-2">Compared to yesterday</p>

            {/* Gauge */}
            <Gauge value={68} color="#9ca3af" />

            {/* Toggle pill */}
            <div className="flex bg-neutral-100 rounded-full p-1 gap-1">
              <button
                onClick={() => setVideoTab("Video Clicks")}
                className={`flex-1 text-[12px] rounded-full py-1.5 px-3 font-medium transition-all ${
                  videoTab === "Video Clicks"
                    ? "bg-white text-[#0b0f1a] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Video Clicks
              </button>
              <button
                onClick={() => setVideoTab("Video Starts")}
                className={`flex-1 text-[12px] rounded-full py-1.5 px-3 font-medium transition-all ${
                  videoTab === "Video Starts"
                    ? "bg-white text-[#0b0f1a] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Video Starts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

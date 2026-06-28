import React, { useState } from "react";
import { marketplaceProducts } from "./marketplaceProducts";
import {
  Search,
  Settings,
  Compass,
  Bell,
  Mail,
  ShoppingBag,
  ShieldAlert,
  Tag,
  Plus,
  MapPin,
  Car,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
export default function Marketplace() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F0F2F5] text-[#1C1E21] font-sans antialiased overflow-hidden">
      {/* --- SIDEBAR PANEL --- */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-[360px] bg-white border-r border-[#E4E6EB] flex flex-col p-4 transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-[24px] font-bold tracking-tight text-black">
            Marketplace
          </h1>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 bg-[#E4E6EB] hover:bg-[#D8DADF] transition rounded-full flex items-center justify-center text-black">
              <Settings size={20} />
            </button>
            <button
              className="lg:hidden w-9 h-9 bg-[#E4E6EB] rounded-full flex items-center justify-center"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Inner Search Field */}
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-2.5 text-[#65676B]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Marketplace"
            className="w-full bg-[#F0F2F5] pl-10 pr-4 py-2 text-[15px] rounded-full placeholder-[#65676B] focus:outline-none"
          />
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
          <ul className="space-y-0.5">
            <SidebarMenuLink
              icon={<Compass size={20} className="text-white" />}
              label="Browse all"
              active
              bgClass="bg-[#1877F2]"
            />
            <SidebarMenuLink icon={<Bell size={20} />} label="Notifications" />
            <SidebarMenuLink icon={<Mail size={20} />} label="Inbox" />
            <SidebarMenuLink
              icon={<ShieldAlert size={20} />}
              label="Marketplace access"
            />
            <SidebarMenuLink
              icon={<ShoppingBag size={20} />}
              label="Buying"
              hasArrow
            />
            <SidebarMenuLink
              icon={<Tag size={20} />}
              label="Selling"
              hasArrow
            />
          </ul>

          {/* Action Callout Button */}
          <div className="pt-2 px-2">
            <button className="w-full bg-[#E7F3FF] text-[#1877F2] font-semibold text-[15px] py-2 rounded-md hover:bg-[#DBE7F2] transition flex items-center justify-center gap-2">
              <Plus size={18} /> Create new listing
            </button>
          </div>

          <hr className="border-[#E4E6EB] my-4" />

          {/* Location Configuration widget */}
          <div className="px-2 mb-4">
            <h3 className="text-[17px] font-bold mb-1 text-black">Location</h3>
            <button className="text-[#1877F2] text-[15px] font-medium text-left hover:underline">
              Islamabad, Pakistan · Within 65 km
            </button>
          </div>

          <hr className="border-[#E4E6EB] my-4" />

          {/* Categories Grid Setup */}
          <div className="px-2">
            <h3 className="text-[17px] font-bold mb-2 text-black">
              Categories
            </h3>
            <ul>
              <SidebarMenuLink icon={<Car size={20} />} label="Vehicles" />
            </ul>
          </div>
        </div>
      </aside>

      {/* Backdrop for handling dynamic responsive state overlays */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* --- RECONSTRUCTED FEEDS BODY --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header toolbar layout for compact device setups */}
        <header className="lg:hidden h-14 bg-white border-b border-[#E4E6EB] flex items-center justify-between px-4 shrink-0">
          <button
            className="p-2 hover:bg-[#F0F2F5] rounded-full"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-[18px]">Marketplace</span>
          <div className="w-8"></div> {/* Visual counter-balance */}
        </header>

        {/* Infinite Grid Flow Scroller */}
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 max-w-[1200px] mx-auto w-full">
          {/* Sub-headline controls block */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-bold text-black tracking-tight">
              Today's picks
            </h2>
            <button className="flex items-center gap-1.5 text-[#1877F2] text-[15px] font-medium hover:bg-white/60 px-3 py-1.5 rounded-md transition">
              <MapPin size={16} /> Islamabad · 65 km
            </button>
          </div>

          {/* --- RESPONSIVE CARD COLUMNS MATRIX --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {marketplaceProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer flex flex-col bg-transparent rounded-lg overflow-hidden"
              >
                {/* Visual Cover aspect lock frame */}
                <div className="relative aspect-square w-full bg-[#E4E6EB] rounded-lg overflow-hidden border border-black/5">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:opacity-95 transition"
                  />
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-white text-black font-semibold text-[12px] px-2 py-0.5 rounded-md shadow-sm">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Typography Metadata Blocks */}
                <div className="pt-2 pb-1 px-1 flex flex-col flex-1">
                  <span className="text-[17px] font-bold text-[#1C1E21] leading-snug">
                    {product.price}
                  </span>
                  <h3 className="text-[15px] text-[#050505] line-clamp-2 leading-tight font-normal mt-0.5">
                    {product.title}
                  </h3>
                  <span className="text-[13px] text-[#65676B] font-normal mt-auto pt-1">
                    {product.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// --- SUB-REUSABLE SIDEBAR STRUCTURAL ATOMS ---

function SidebarMenuLink({
  icon,
  label,
  active,
  bgClass = "bg-[#E4E6EB]",
  hasArrow,
}) {
  return (
    <li>
      <div
        className={`
        flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors
        ${active ? "bg-[#F0F2F5]" : "hover:bg-[#F0F2F5]"}
      `}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 ${active ? bgClass : "bg-[#E4E6EB]"} rounded-full flex items-center justify-center text-black shrink-0`}
          >
            {icon}
          </div>
          <span
            className={`text-[15px] ${active ? "font-semibold text-[#1877F2]" : "font-semibold text-[#050505]"}`}
          >
            {label}
          </span>
        </div>
        {hasArrow && <ChevronRight size={18} className="text-[#65676B]" />}
      </div>
    </li>
  );
}

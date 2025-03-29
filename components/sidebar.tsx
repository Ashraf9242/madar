"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  FileText,
  User,
  HelpCircle,
  DollarSign,
  Bell,
  Calendar,
  Mic,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  color: string
}

export default function Sidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(true)

  const navItems: NavItem[] = [
    {
      title: "الرئيسية",
      href: "/",
      icon: <Home className="h-5 w-5" />,
      color: "text-primary hover:text-primary",
    },
    {
      title: "الخدمات",
      href: "/services",
      icon: <FileText className="h-5 w-5" />,
      color: "text-purple hover:text-purple",
    },
    {
      title: "حسابي",
      href: "/account",
      icon: <User className="h-5 w-5" />,
      color: "text-teal hover:text-teal",
    },
    {
      title: "المساعدة",
      href: "/assistance",
      icon: <HelpCircle className="h-5 w-5" />,
      color: "text-orange hover:text-orange",
    },
    {
      title: "المالية",
      href: "/finance",
      icon: <DollarSign className="h-5 w-5" />,
      color: "text-green-600 hover:text-green-500",
    },
    {
      title: "الإشعارات",
      href: "/notifications",
      icon: <Bell className="h-5 w-5" />,
      color: "text-red-600 hover:text-red-500",
    },
    {
      title: "المواعيد",
      href: "/appointments",
      icon: <Calendar className="h-5 w-5" />,
      color: "text-blue-600 hover:text-blue-500",
    },
    {
      title: "المساعد الصوتي",
      href: "/voice",
      icon: <Mic className="h-5 w-5" />,
      color: "text-purple hover:text-purple",
    },
    {
      title: "الدعم",
      href: "/support",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "text-teal hover:text-teal",
    },
    {
      title: "الإعدادات",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
      color: "text-gray-600 hover:text-gray-500",
    },
  ]

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className={cn("group relative flex flex-col border-l bg-background p-2", expanded ? "w-64" : "w-[70px]")}
        initial={false}
        animate={{ width: expanded ? 256 : 70 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-3 top-6 z-10 h-6 w-6 rounded-full border bg-background p-0 shadow-md"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>

          <nav className="grid gap-1 px-2 py-3">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent" : "transparent",
                    item.color,
                  )}
                >
                  <motion.div className="mr-2" whileHover={{ rotate: 5, scale: 1.1 }} transition={{ duration: 0.2 }}>
                    {item.icon}
                  </motion.div>
                  {expanded && <span className="truncate">{item.title}</span>}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}


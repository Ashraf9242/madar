"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Send,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  ThumbsUp,
  ThumbsDown,
  Search,
} from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

export default function SupportPage() {
  const [message, setMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      content: "مرحباً بك في خدمة الدعم، كيف يمكنني مساعدتك اليوم؟",
      sender: "agent",
      time: "10:30 صباحاً",
    },
  ])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  const tickets = [
    {
      id: 1,
      title: "مشكلة في تحديث البيانات الشخصية",
      description: "لا أستطيع تحديث رقم الجوال في الملف الشخصي",
      date: "قبل 3 أيام",
      status: "open",
      priority: "medium",
      category: "technical",
    },
    {
      id: 2,
      title: "استفسار عن خصم التأمين الصحي",
      description: "لماذا تم خصم مبلغ إضافي من المعاش للتأمين الصحي؟",
      date: "قبل أسبوع",
      status: "closed",
      priority: "high",
      category: "financial",
    },
    {
      id: 3,
      title: "طلب إعادة إصدار بطاقة المتقاعد",
      description: "فقدت بطاقة المتقاعد وأحتاج إلى إصدار بديل",
      date: "قبل أسبوعين",
      status: "in-progress",
      priority: "low",
      category: "document",
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "كيف يمكنني تقديم شكوى؟",
      answer:
        "يمكنك تقديم شكوى من خلال الضغط على زر 'تقديم شكوى جديدة' في صفحة الدعم، أو التواصل مع خدمة العملاء على الرقم 920001234.",
    },
    {
      id: 2,
      question: "ما هي مدة معالجة الشكاوى؟",
      answer:
        "يتم معالجة الشكاوى خلال 3-5 أيام عمل من تاريخ تقديمها، وسيتم إشعارك بنتيجة الشكوى عبر البريد الإلكتروني أو رسالة نصية.",
    },
    {
      id: 3,
      question: "كيف يمكنني متابعة حالة الشكوى؟",
      answer:
        "يمكنك متابعة حالة الشكوى من خلال الانتقال إلى صفحة 'الدعم' ثم اختيار تبويب 'الشكاوى والطلبات' ومن ثم الضغط على رقم الشكوى.",
    },
  ]

  const sendMessage = () => {
    if (message.trim() === "") return

    // Add user message
    setChatMessages([
      ...chatMessages,
      {
        id: chatMessages.length + 1,
        content: message,
        sender: "user",
        time: "الآن",
      },
    ])

    setMessage("")

    // Simulate agent response after 1 second
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          content:
            "شكراً لتواصلك معنا. سيقوم أحد ممثلي خدمة العملاء بالرد عليك في أقرب وقت ممكن. يمكنك أيضاً تصفح الأسئلة الشائعة للحصول على إجابات سريعة.",
          sender: "agent",
          time: "الآن",
        },
      ])
    }, 1000)
  }

  const getFilteredTickets = (filter) => {
    let filtered = tickets

    if (filter !== "all") {
      filtered = tickets.filter((ticket) => ticket.status === filter)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (ticket) => ticket.title.includes(searchQuery) || ticket.description.includes(searchQuery),
      )
    }

    return filtered
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">الدعم</h1>
        <p className="text-muted-foreground">تواصل معنا للحصول على المساعدة وحل المشكلات</p>
      </motion.div>

      <Tabs defaultValue="chat" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="chat">الدردشة المباشرة</TabsTrigger>
          <TabsTrigger value="tickets">الشكاوى والطلبات</TabsTrigger>
          <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-6">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                الدردشة المباشرة
              </CardTitle>
              <CardDescription>تواصل مباشرة مع فريق خدمة العملاء</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="flex-shrink-0">
                      {msg.sender === "agent" ? (
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Agent" />
                          <AvatarFallback className="bg-primary text-primary-foreground">دع</AvatarFallback>
                        </Avatar>
                      ) : (
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                          <AvatarFallback>أنت</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t p-4">
              <div className="flex w-full items-center gap-2">
                <Input
                  placeholder="اكتب رسالتك هنا..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage()
                    }
                  }}
                  className="flex-1"
                />
                <Button onClick={sendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث عن الشكاوى..."
                className="w-full pr-10 bg-muted/30 focus:bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>تقديم شكوى جديدة</Button>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="open">المفتوحة</TabsTrigger>
              <TabsTrigger value="closed">المغلقة</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                {getFilteredTickets("all").length > 0 ? (
                  getFilteredTickets("all").map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                      <p className="text-muted-foreground text-center">لا توجد شكاوى أو طلبات</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="open" className="space-y-4">
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                {getFilteredTickets("open").length > 0 ? (
                  getFilteredTickets("open").map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                      <p className="text-muted-foreground text-center">لا توجد شكاوى مفتوحة</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="closed" className="space-y-4">
              <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                {getFilteredTickets("closed").length > 0 ? (
                  getFilteredTickets("closed").map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <FileText className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                      <p className="text-muted-foreground text-center">لا توجد شكاوى مغلقة</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                الأسئلة الشائعة
              </CardTitle>
              <CardDescription>إجابات على الأسئلة الأكثر شيوعاً</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="space-y-2">
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      مفيد
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      غير مفيد
                    </Button>
                  </div>
                  {faq.id !== faqs.length && <hr className="my-4" />}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                عرض المزيد من الأسئلة
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                لم تجد إجابة لسؤالك؟
              </CardTitle>
              <CardDescription>يمكنك التواصل معنا مباشرة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم</Label>
                    <Input id="name" placeholder="أدخل اسمك الكامل" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input id="subject" placeholder="أدخل موضوع الرسالة" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="h-[158px]" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">إلغاء</Button>
              <Button>إرسال</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TicketCard({ ticket }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Clock className="h-3 w-3 mr-1" />
            مفتوحة
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="outline" className="bg-orange/10 text-orange border-orange/20">
            <Clock className="h-3 w-3 mr-1" />
            قيد المعالجة
          </Badge>
        )
      case "closed":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            مغلقة
          </Badge>
        )
      default:
        return null
    }
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200">
            <AlertTriangle className="h-3 w-3 mr-1" />
            عالية
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-orange/10 text-orange border-orange/20">
            <AlertTriangle className="h-3 w-3 mr-1" />
            متوسطة
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
            <AlertTriangle className="h-3 w-3 mr-1" />
            منخفضة
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
      <Card className="card-hover overflow-hidden">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{ticket.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{ticket.description}</p>
              <div className="flex items-center text-xs text-muted-foreground mt-2">
                <Clock className="h-3 w-3 mr-1" />
                {ticket.date}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {getStatusBadge(ticket.status)}
              {getPriorityBadge(ticket.priority)}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm">
              عرض التفاصيل
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


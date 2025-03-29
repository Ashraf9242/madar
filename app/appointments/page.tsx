"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, MapPin, User, Phone, FileText, Plus, CheckCircle, XCircle, Search } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { ar } from "date-fns/locale"

export default function AppointmentsPage() {
  const [date, setDate] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState("")

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

  const appointments = [
    {
      id: 1,
      title: "موعد مراجعة طبية",
      date: "15 مايو 2023",
      time: "10:00 صباحاً",
      location: "مستشفى الملك فهد التخصصي",
      doctor: "د. أحمد الشمري",
      department: "قسم القلب",
      status: "upcoming",
      type: "medical",
    },
    {
      id: 2,
      title: "تجديد البطاقة الشخصية",
      date: "20 مايو 2023",
      time: "11:30 صباحاً",
      location: "الأحوال المدنية - فرع العليا",
      department: "قسم الخدمات",
      status: "upcoming",
      type: "government",
    },
    {
      id: 3,
      title: "فحص دوري للسكري",
      date: "5 يونيو 2023",
      time: "9:00 صباحاً",
      location: "مركز السكري التخصصي",
      doctor: "د. سارة العتيبي",
      department: "قسم الغدد الصماء",
      status: "upcoming",
      type: "medical",
    },
    {
      id: 4,
      title: "مراجعة المعاش التقاعدي",
      date: "10 أبريل 2023",
      time: "1:00 ظهراً",
      location: "مؤسسة التقاعد - المقر الرئيسي",
      department: "قسم خدمة المتقاعدين",
      status: "completed",
      type: "financial",
    },
    {
      id: 5,
      title: "فحص النظر السنوي",
      date: "2 مارس 2023",
      time: "4:30 عصراً",
      location: "مركز البصريات التخصصي",
      doctor: "د. محمد القحطاني",
      department: "قسم العيون",
      status: "cancelled",
      type: "medical",
    },
  ]

  const getFilteredAppointments = (filter) => {
    let filtered = appointments

    if (filter !== "all") {
      filtered = appointments.filter((appointment) => appointment.status === filter)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (appointment) => appointment.title.includes(searchQuery) || appointment.location.includes(searchQuery),
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
        <h1 className="text-3xl font-bold tracking-tight">المواعيد</h1>
        <p className="text-muted-foreground">إدارة وحجز المواعيد الخاصة بك</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1"
        >
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                التقويم
              </CardTitle>
              <CardDescription>اختر تاريخاً لعرض المواعيد</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={date} onSelect={setDate} locale={ar} className="rounded-md border" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                حجز موعد جديد
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2"
        >
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث عن المواعيد..."
                className="w-full pr-10 bg-muted/30 focus:bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">جميع المواعيد</TabsTrigger>
                <TabsTrigger value="upcoming">المواعيد القادمة</TabsTrigger>
                <TabsTrigger value="completed">المواعيد السابقة</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {getFilteredAppointments("all").length > 0 ? (
                    getFilteredAppointments("all").map((appointment) => (
                      <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <CalendarIcon className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                        <p className="text-muted-foreground text-center">لا توجد مواعيد</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-6">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {getFilteredAppointments("upcoming").length > 0 ? (
                    getFilteredAppointments("upcoming").map((appointment) => (
                      <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <CalendarIcon className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                        <p className="text-muted-foreground text-center">لا توجد مواعيد قادمة</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                  {getFilteredAppointments("completed").length > 0 ? (
                    getFilteredAppointments("completed").map((appointment) => (
                      <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <CalendarIcon className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                        <p className="text-muted-foreground text-center">لا توجد مواعيد سابقة</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2 text-primary" />
            حجز موعد جديد
          </CardTitle>
          <CardDescription>اختر نوع الموعد الذي ترغب في حجزه</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center p-6 rounded-lg border text-center hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">الخدمات الحكومية</h3>
              <p className="text-sm text-muted-foreground">تجديد الوثائق والمستندات الرسمية</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center p-6 rounded-lg border text-center hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-teal" />
              </div>
              <h3 className="font-medium mb-2">المواعيد الطبية</h3>
              <p className="text-sm text-muted-foreground">حجز مواعيد المراجعات والفحوصات الطبية</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center p-6 rounded-lg border text-center hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="h-16 w-16 rounded-full bg-orange/10 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-orange" />
              </div>
              <h3 className="font-medium mb-2">استشارات عن بعد</h3>
              <p className="text-sm text-muted-foreground">مواعيد الاستشارات الهاتفية أو عبر الفيديو</p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AppointmentCard({ appointment }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "upcoming":
        return (
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Clock className="h-3 w-3 mr-1" />
            قادم
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            مكتمل
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200">
            <XCircle className="h-3 w-3 mr-1" />
            ملغي
          </Badge>
        )
      default:
        return null
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "medical":
        return "text-teal bg-teal/10"
      case "government":
        return "text-primary bg-primary/10"
      case "financial":
        return "text-orange bg-orange/10"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "medical":
        return <User className="h-5 w-5" />
      case "government":
        return <FileText className="h-5 w-5" />
      case "financial":
        return <FileText className="h-5 w-5" />
      default:
        return <CalendarIcon className="h-5 w-5" />
    }
  }

  return (
    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
      <Card className={`card-hover overflow-hidden ${appointment.status === "upcoming" ? "border-primary/30" : ""}`}>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${getTypeColor(appointment.type)}`}
            >
              {getTypeIcon(appointment.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{appointment.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {appointment.location}
                    </div>
                  </div>
                  {appointment.doctor && (
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <User className="h-4 w-4 mr-1" />
                      {appointment.doctor} - {appointment.department}
                    </div>
                  )}
                </div>
                <div>{getStatusBadge(appointment.status)}</div>
              </div>

              {appointment.status === "upcoming" && (
                <div className="flex justify-end mt-4 gap-2">
                  <Button variant="outline" size="sm">
                    إعادة جدولة
                  </Button>
                  <Button variant="destructive" size="sm">
                    إلغاء
                  </Button>
                </div>
              )}

              {appointment.status === "completed" && (
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm">
                    طلب تقرير
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


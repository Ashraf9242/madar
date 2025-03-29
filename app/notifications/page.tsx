"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Calendar,
  CreditCard,
  FileText,
  Heart,
  Info,
  CheckCircle,
  Trash,
  CheckCheck,
  Mail,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "تم إيداع المعاش",
      message: "تم إيداع معاش شهر مايو في حسابك البنكي بمبلغ 5,280 ريال",
      date: "منذ يومين",
      type: "financial",
      icon: <CreditCard className="h-5 w-5" />,
      color: "text-primary bg-primary/10",
      read: false,
    },
    {
      id: 2,
      title: "تذكير بموعد المراجعة الطبية",
      message: "لديك موعد للمراجعة الطبية يوم الأحد القادم الساعة 10:00 صباحاً",
      date: "منذ 3 أيام",
      type: "appointment",
      icon: <Calendar className="h-5 w-5" />,
      color: "text-teal bg-teal/10",
      read: false,
    },
    {
      id: 3,
      title: "تحديث بيانات التأمين الصحي",
      message: "تم تحديث بيانات التأمين الصحي الخاص بك. يرجى مراجعة التفاصيل",
      date: "منذ أسبوع",
      type: "health",
      icon: <Heart className="h-5 w-5" />,
      color: "text-red-500 bg-red-500/10",
      read: true,
    },
    {
      id: 4,
      title: "إصدار شهادة المعاش",
      message: "تم إصدار شهادة المعاش بنجاح. يمكنك تحميلها من صفحة الوثائق",
      date: "منذ أسبوع",
      type: "document",
      icon: <FileText className="h-5 w-5" />,
      color: "text-orange bg-orange/10",
      read: true,
    },
    {
      id: 5,
      title: "تحديث في سياسة الخصوصية",
      message: "تم تحديث سياسة الخصوصية الخاصة بالمنصة. يرجى الاطلاع عليها",
      date: "منذ أسبوعين",
      type: "system",
      icon: <Info className="h-5 w-5" />,
      color: "text-purple bg-purple/10",
      read: true,
    },
    {
      id: 6,
      title: "عرض خاص للمتقاعدين",
      message: "استفد من العرض الخاص للمتقاعدين على تذاكر الطيران بخصم 15%",
      date: "منذ أسبوعين",
      type: "offer",
      icon: <Bell className="h-5 w-5" />,
      color: "text-green-600 bg-green-600/10",
      read: true,
    },
  ])

  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    push: true,
    financial: true,
    appointment: true,
    health: true,
    document: true,
    system: false,
    offer: false,
  })

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

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getFilteredNotifications = (filter) => {
    if (filter === "all") {
      return notifications
    } else if (filter === "unread") {
      return notifications.filter((notification) => !notification.read)
    } else {
      return notifications.filter((notification) => notification.type === filter)
    }
  }

  const handleSettingChange = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    })
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">الإشعارات</h1>
        <p className="text-muted-foreground">إدارة الإشعارات والتنبيهات الخاصة بك</p>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList className="grid w-full max-w-md grid-cols-5">
            <TabsTrigger value="all">الكل</TabsTrigger>
            <TabsTrigger value="unread">غير المقروءة</TabsTrigger>
            <TabsTrigger value="financial">المالية</TabsTrigger>
            <TabsTrigger value="appointment">المواعيد</TabsTrigger>
            <TabsTrigger value="health">الصحية</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <CheckCheck className="h-4 w-4 mr-2" />
              تعيين الكل كمقروء
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            {getFilteredNotifications("all").length > 0 ? (
              getFilteredNotifications("all").map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  markAsRead={markAsRead}
                  deleteNotification={deleteNotification}
                />
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Bell className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                  <p className="text-muted-foreground text-center">لا توجد إشعارات</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="unread" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
            {getFilteredNotifications("unread").length > 0 ? (
              getFilteredNotifications("unread").map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  markAsRead={markAsRead}
                  deleteNotification={deleteNotification}
                />
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <CheckCircle className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                  <p className="text-muted-foreground text-center">لا توجد إشعارات غير مقروءة</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </TabsContent>

        {["financial", "appointment", "health"].map((filter) => (
          <TabsContent key={filter} value={filter} className="space-y-6">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
              {getFilteredNotifications(filter).length > 0 ? (
                getFilteredNotifications(filter).map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    markAsRead={markAsRead}
                    deleteNotification={deleteNotification}
                  />
                ))
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Bell className="h-12 w-12 text-muted-foreground opacity-50 mb-4" />
                    <p className="text-muted-foreground text-center">لا توجد إشعارات في هذه الفئة</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </TabsContent>
        ))}

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-primary" />
                إعدادات الإشعارات
              </CardTitle>
              <CardDescription>تخصيص طريقة استلام الإشعارات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">طرق الاستلام</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <Label htmlFor="email-notifications">البريد الإلكتروني</Label>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={notificationSettings.email}
                      onCheckedChange={() => handleSettingChange("email")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <Label htmlFor="sms-notifications">الرسائل النصية</Label>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={notificationSettings.sms}
                      onCheckedChange={() => handleSettingChange("sms")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <Label htmlFor="push-notifications">إشعارات التطبيق</Label>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={notificationSettings.push}
                      onCheckedChange={() => handleSettingChange("push")}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">أنواع الإشعارات</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <Label htmlFor="financial-notifications">الإشعارات المالية</Label>
                    </div>
                    <Switch
                      id="financial-notifications"
                      checked={notificationSettings.financial}
                      onCheckedChange={() => handleSettingChange("financial")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-teal" />
                      <Label htmlFor="appointment-notifications">إشعارات المواعيد</Label>
                    </div>
                    <Switch
                      id="appointment-notifications"
                      checked={notificationSettings.appointment}
                      onCheckedChange={() => handleSettingChange("appointment")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <Label htmlFor="health-notifications">الإشعارات الصحية</Label>
                    </div>
                    <Switch
                      id="health-notifications"
                      checked={notificationSettings.health}
                      onCheckedChange={() => handleSettingChange("health")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-orange" />
                      <Label htmlFor="document-notifications">إشعارات الوثائق</Label>
                    </div>
                    <Switch
                      id="document-notifications"
                      checked={notificationSettings.document}
                      onCheckedChange={() => handleSettingChange("document")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-purple" />
                      <Label htmlFor="system-notifications">إشعارات النظام</Label>
                    </div>
                    <Switch
                      id="system-notifications"
                      checked={notificationSettings.system}
                      onCheckedChange={() => handleSettingChange("system")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-green-600" />
                      <Label htmlFor="offer-notifications">العروض والخصومات</Label>
                    </div>
                    <Switch
                      id="offer-notifications"
                      checked={notificationSettings.offer}
                      onCheckedChange={() => handleSettingChange("offer")}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">إعادة تعيين</Button>
              <Button>حفظ التغييرات</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationItem({ notification, markAsRead, deleteNotification }) {
  return (
    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
      <Card className={`card-hover overflow-hidden ${!notification.read ? "border-primary/50 bg-primary/5" : ""}`}>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color}`}
            >
              {notification.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                </div>
                <div className="flex items-center gap-2">
                  {!notification.read && (
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      جديد
                    </Badge>
                  )}
                  <span className="text-xs text-muted-foreground">{notification.date}</span>
                </div>
              </div>
              <div className="flex justify-end mt-2 gap-2">
                {!notification.read && (
                  <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => markAsRead(notification.id)}>
                    <CheckCircle className="h-4 w-4 mr-1" />
                    تعيين كمقروء
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-destructive hover:text-destructive"
                  onClick={() => deleteNotification(notification.id)}
                >
                  <Trash className="h-4 w-4 mr-1" />
                  حذف
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, DollarSign, FileText, HelpCircle, Mic, User, Bell, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

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

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">مرحباً بك، محمد</h1>
        <p className="text-muted-foreground">
          هذه لوحة التحكم الخاصة بك، يمكنك من خلالها الوصول إلى جميع الخدمات والمعلومات المهمة.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">الكل</TabsTrigger>
          <TabsTrigger value="financial">المالية</TabsTrigger>
          <TabsTrigger value="services">الخدمات</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    المعاش الشهري
                  </CardTitle>
                  <CardDescription>آخر تحديث: 1 مايو 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5,280 ريال</div>
                  <p className="text-xs text-muted-foreground mt-1">تم إيداع المبلغ في حسابك البنكي</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>المتبقي من الميزانية</span>
                      <span className="font-medium">66%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    تفاصيل المعاش
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-teal">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-teal" />
                    المواعيد القادمة
                  </CardTitle>
                  <CardDescription>لديك 2 مواعيد قادمة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-teal-light p-3">
                    <div className="font-medium">موعد مراجعة طبية</div>
                    <div className="text-sm text-muted-foreground">15 مايو، 10:00 صباحاً</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <div className="font-medium">تجديد البطاقة الشخصية</div>
                    <div className="text-sm text-muted-foreground">20 مايو، 11:30 صباحاً</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    جميع المواعيد
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-orange">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-orange" />
                    آخر الإشعارات
                  </CardTitle>
                  <CardDescription>3 إشعارات جديدة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-orange-light p-3">
                    <div className="font-medium">تم إيداع المعاش</div>
                    <div className="text-sm text-muted-foreground">منذ يومين</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <div className="font-medium">تذكير بموعد المراجعة الطبية</div>
                    <div className="text-sm text-muted-foreground">منذ 3 أيام</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    جميع الإشعارات
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>الخدمات السريعة</CardTitle>
                <CardDescription>الوصول السريع للخدمات الأكثر استخداماً</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <FileText className="h-8 w-8 mb-2 text-primary" />
                    <span className="text-sm font-medium">طلب شهادة</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-teal/10 hover:bg-teal/20 transition-colors"
                  >
                    <User className="h-8 w-8 mb-2 text-teal" />
                    <span className="text-sm font-medium">تحديث البيانات</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-orange/10 hover:bg-orange/20 transition-colors"
                  >
                    <BarChart3 className="h-8 w-8 mb-2 text-orange" />
                    <span className="text-sm font-medium">التقارير المالية</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-purple/10 hover:bg-purple/20 transition-colors"
                  >
                    <HelpCircle className="h-8 w-8 mb-2 text-purple" />
                    <span className="text-sm font-medium">طلب مساعدة</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    المعاش الشهري
                  </CardTitle>
                  <CardDescription>آخر تحديث: 1 مايو 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5,280 ريال</div>
                  <p className="text-xs text-muted-foreground mt-1">تم إيداع المبلغ في حسابك البنكي</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>المتبقي من الميزانية</span>
                      <span className="font-medium">66%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    تفاصيل المعاش
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-orange">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-orange" />
                    تحليل المصروفات
                  </CardTitle>
                  <CardDescription>آخر 30 يوم</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المصاريف الثابتة</span>
                        <span className="font-medium">2,100 ريال</span>
                      </div>
                      <Progress value={40} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المصاريف المتغيرة</span>
                        <span className="font-medium">1,800 ريال</span>
                      </div>
                      <Progress value={34} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المدخرات</span>
                        <span className="font-medium">1,380 ريال</span>
                      </div>
                      <Progress value={26} className="h-2 bg-muted" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    تحليل مفصل
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-teal">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-teal" />
                    المواعيد القادمة
                  </CardTitle>
                  <CardDescription>لديك 2 مواعيد قادمة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-teal-light p-3">
                    <div className="font-medium">موعد مراجعة طبية</div>
                    <div className="text-sm text-muted-foreground">15 مايو، 10:00 صباحاً</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3">
                    <div className="font-medium">تجديد البطاقة الشخصية</div>
                    <div className="text-sm text-muted-foreground">20 مايو، 11:30 صباحاً</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    جميع المواعيد
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="card-hover border-t-4 border-t-purple">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Mic className="h-5 w-5 mr-2 text-purple" />
                    المساعد الصوتي
                  </CardTitle>
                  <CardDescription>تفاعل صوتي سهل</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center p-6">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      <Mic className="h-8 w-8 text-purple" />
                    </motion.div>
                    <p className="text-center text-sm">اضغط للتحدث مع المساعد الصوتي</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    فتح المساعد الصوتي
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, DollarSign, PieChart, TrendingUp, Download, AlertCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function FinancePage() {
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
        <h1 className="text-3xl font-bold tracking-tight">مخطط المعاش</h1>
        <p className="text-muted-foreground">إدارة معاشك ومواردك المالية بكفاءة وسهولة</p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-3">
        <motion.div variants={item} className="md:col-span-2">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-primary" />
                المعاش الشهري
              </CardTitle>
              <CardDescription>آخر تحديث: 1 مايو 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">5,280 ريال</div>
                  <p className="text-xs text-muted-foreground mt-1">تم إيداع المبلغ في حسابك البنكي</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    تحميل الإيصال
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>المتبقي من الميزانية</span>
                  <span className="font-medium">66%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0 ريال</span>
                  <span>5,280 ريال</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="card-hover bg-orange-light border-orange">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-orange" />
                تنبيه مالي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">لقد تجاوزت ميزانية "المطاعم" بنسبة 15% هذا الشهر. ننصح بمراجعة المصروفات.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full justify-between">
                عرض التفاصيل
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>

      <Tabs defaultValue="expenses" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="expenses">المصروفات</TabsTrigger>
          <TabsTrigger value="savings">المدخرات</TabsTrigger>
          <TabsTrigger value="forecast">التوقعات</TabsTrigger>
        </TabsList>

        <TabsContent value="expenses" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
            <motion.div variants={item}>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    تحليل المصروفات
                  </CardTitle>
                  <CardDescription>آخر 30 يوم</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المصاريف الثابتة</span>
                        <span className="font-medium">2,100 ريال (40%)</span>
                      </div>
                      <Progress value={40} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المصاريف المتغيرة</span>
                        <span className="font-medium">1,800 ريال (34%)</span>
                      </div>
                      <Progress value={34} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المدخرات</span>
                        <span className="font-medium">1,380 ريال (26%)</span>
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

            <motion.div variants={item}>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-primary" />
                    توزيع المصروفات
                  </CardTitle>
                  <CardDescription>حسب الفئة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 rounded-md bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span>السكن</span>
                      </div>
                      <span className="font-medium">1,200 ريال</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md bg-green-50 dark:bg-green-900/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>الطعام</span>
                      </div>
                      <span className="font-medium">850 ريال</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md bg-purple-50 dark:bg-purple-900/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span>الصحة</span>
                      </div>
                      <span className="font-medium">650 ريال</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md bg-orange-50 dark:bg-orange-900/20">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                        <span>الترفيه</span>
                      </div>
                      <span className="font-medium">450 ريال</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-md bg-gray-50 dark:bg-gray-800">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>أخرى</span>
                      </div>
                      <span className="font-medium">750 ريال</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
            <motion.div variants={item}>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-teal" />
                    نمو المدخرات
                  </CardTitle>
                  <CardDescription>آخر 6 أشهر</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-end justify-between gap-2">
                    {[30, 45, 25, 60, 75, 90].map((height, i) => (
                      <div key={i} className="relative flex flex-col items-center">
                        <div
                          className="w-10 bg-teal rounded-t-md animate-float"
                          style={{ height: `${height * 2}px` }}
                        ></div>
                        <span className="text-xs mt-2">{`شهر ${6 - i}`}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between">
                    تحليل المدخرات
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
            <motion.div variants={item}>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    التوقعات المالية
                  </CardTitle>
                  <CardDescription>الأشهر الثلاثة القادمة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border">
                      <div className="font-medium mb-2">يونيو 2023</div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المعاش المتوقع</span>
                        <span className="font-medium">5,280 ريال</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المصروفات المتوقعة</span>
                        <span className="font-medium">3,900 ريال</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-medium text-teal">
                        <span>المدخرات المتوقعة</span>
                        <span>1,380 ريال</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border">
                      <div className="font-medium mb-2">يوليو 2023</div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المعاش المتوقع</span>
                        <span className="font-medium">5,280 ريال</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>المصروفات المتوقعة</span>
                        <span className="font-medium">4,100 ريال</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-medium text-teal">
                        <span>المدخرات المتوقعة</span>
                        <span>1,180 ريال</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


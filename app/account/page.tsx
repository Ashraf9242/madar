"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Phone, Shield, FileText, Edit, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AccountPage() {
  const [profileCompletion, setProfileCompletion] = useState(85)

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
        <h1 className="text-3xl font-bold tracking-tight">حسابي</h1>
        <p className="text-muted-foreground">إدارة بياناتك الشخصية وتفضيلاتك في المنصة</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1"
        >
          <Card className="card-hover">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="محمد عبدالله" />
                  <AvatarFallback className="text-2xl">م ع</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">محمد أشرف علي </CardTitle>
              <CardDescription>متقاعد منذ 2020</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge className="mb-4">حساب موثق</Badge>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>اكتمال الملف الشخصي</span>
                  <span className="font-medium">{profileCompletion}%</span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" size="sm" className="w-full">
                <Edit className="h-4 w-4 mr-2" />
                تعديل الصورة
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-3"
        >
          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">البيانات الشخصية</TabsTrigger>
              <TabsTrigger value="contact">بيانات الاتصال</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
              <TabsTrigger value="documents">الوثائق</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    البيانات الشخصية
                  </CardTitle>
                  <CardDescription>المعلومات الأساسية للملف الشخصي</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">الاسم الكامل</Label>
                      <Input id="fullName" defaultValue="محمد أشرف علٍ " />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">رقم الهوية</Label>
                      <Input id="idNumber" defaultValue="1234567890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">تاريخ الميلاد</Label>
                      <Input id="birthDate" type="date" defaultValue="1960-05-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">الجنس</Label>
                      <select
                        id="gender"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="male"
                      >
                        <option value="male">ذكر</option>
                        <option value="female">أنثى</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">الجنسية</Label>
                      <Input id="nationality" defaultValue="عماني" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="retirementDate">تاريخ التقاعد</Label>
                      <Input id="retirementDate" type="date" defaultValue="2020-01-01" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">إلغاء</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    بيانات الاتصال
                  </CardTitle>
                  <CardDescription>معلومات الاتصال والعنوان</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" defaultValue="mohammed@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input id="phone" defaultValue="96110022" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alternativePhone">رقم جوال بديل</Label>
                      <Input id="alternativePhone" defaultValue="99884455" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">المدينة</Label>
                      <Input id="city" defaultValue="سمائل" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">العنوان</Label>
                      <Input id="address" defaultValue="المدرة ,لزغ" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">إلغاء</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    الأمان
                  </CardTitle>
                  <CardDescription>إعدادات الأمان وكلمة المرور</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium mb-4">التحقق بخطوتين</h3>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">التحقق برسائل SMS</p>
                          <p className="text-sm text-muted-foreground">تلقي رمز التحقق عبر رسالة نصية</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          مفعل
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">إلغاء</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    الوثائق
                  </CardTitle>
                  <CardDescription>الوثائق والمستندات الشخصية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">بطاقة الهوية الوطنية</p>
                          <p className="text-sm text-muted-foreground">تم التحديث قبل 6 أشهر</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          ساري
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">شهادة التقاعد</p>
                          <p className="text-sm text-muted-foreground">تم التحديث قبل سنتين</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          ساري
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">التأمين الصحي</p>
                          <p className="text-sm text-muted-foreground">تم التحديث قبل 3 أشهر</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-200">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          ينتهي قريباً
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">إضافة وثيقة جديدة</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}


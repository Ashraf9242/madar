"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Settings,
  Bell,
  Moon,
  Sun,
  Globe,
  Eye,
  Lock,
  User,
  LogOut,
  Smartphone,
  Save,
  Trash2,
  Check,
} from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState(16)
  const [contrastMode, setContrastMode] = useState("normal")
  const [language, setLanguage] = useState("ar")
  const [twoFactorAuth, setTwoFactorAuth] = useState(true)
  const [dataSharing, setDataSharing] = useState(false)
  const [cookieConsent, setCookieConsent] = useState(true)
  const [locationServices, setLocationServices] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(true)
  const [appNotifications, setAppNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [autoSave, setAutoSave] = useState(true)
  const [voiceCommands, setVoiceCommands] = useState(true)
  const [screenReader, setScreenReader] = useState(false)

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
        <h1 className="text-3xl font-bold tracking-tight">الإعدادات</h1>
        <p className="text-muted-foreground">تخصيص إعدادات المنصة وتفضيلاتك الشخصية</p>
      </motion.div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
          <TabsTrigger value="privacy">الخصوصية</TabsTrigger>
          <TabsTrigger value="accessibility">إمكانية الوصول</TabsTrigger>
          <TabsTrigger value="account">الحساب</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-primary" />
                    الإعدادات العامة
                  </CardTitle>
                  <CardDescription>تخصيص الإعدادات العامة للمنصة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="theme">المظهر</Label>
                          <p className="text-sm text-muted-foreground">اختر مظهر المنصة المفضل لديك</p>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Button
                            variant={theme === "light" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setTheme("light")}
                            className="flex items-center gap-2"
                          >
                            <Sun className="h-4 w-4" />
                            فاتح
                          </Button>
                          <Button
                            variant={theme === "dark" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setTheme("dark")}
                            className="flex items-center gap-2"
                          >
                            <Moon className="h-4 w-4" />
                            داكن
                          </Button>
                          <Button
                            variant={theme === "system" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setTheme("system")}
                            className="flex items-center gap-2"
                          >
                            <Settings className="h-4 w-4" />
                            تلقائي
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="language">اللغة</Label>
                          <p className="text-sm text-muted-foreground">اختر لغة واجهة المنصة</p>
                        </div>
                        <Select value={language} onValueChange={setLanguage}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="اختر اللغة" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ar">العربية</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="ur">اردو</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>الحفظ التلقائي</Label>
                          <p className="text-sm text-muted-foreground">حفظ البيانات تلقائياً أثناء التعديل</p>
                        </div>
                        <Switch checked={autoSave} onCheckedChange={setAutoSave} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>الأوامر الصوتية</Label>
                          <p className="text-sm text-muted-foreground">تفعيل ميزة التحكم بالأوامر الصوتية</p>
                        </div>
                        <Switch checked={voiceCommands} onCheckedChange={setVoiceCommands} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">إعادة تعيين</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-primary" />
                    إعدادات الإشعارات
                  </CardTitle>
                  <CardDescription>تخصيص طريقة استلام الإشعارات والتنبيهات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">طرق الاستلام</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>البريد الإلكتروني</Label>
                          <p className="text-sm text-muted-foreground">استلام الإشعارات عبر البريد الإلكتروني</p>
                        </div>
                        <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>الرسائل النصية</Label>
                          <p className="text-sm text-muted-foreground">استلام الإشعارات عبر الرسائل النصية</p>
                        </div>
                        <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>إشعارات التطبيق</Label>
                          <p className="text-sm text-muted-foreground">استلام الإشعارات داخل المنصة</p>
                        </div>
                        <Switch checked={appNotifications} onCheckedChange={setAppNotifications} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">أنواع الإشعارات</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>تحديثات المعاش</Label>
                          <p className="text-sm text-muted-foreground">إشعارات حول المعاش الشهري والتحديثات المالية</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>تذكير بالمواعيد</Label>
                          <p className="text-sm text-muted-foreground">تذكير بالمواعيد القادمة</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>العروض والخصومات</Label>
                          <p className="text-sm text-muted-foreground">
                            إشعارات حول العروض والخصومات الخاصة بالمتقاعدين
                          </p>
                        </div>
                        <Switch checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">إعادة تعيين</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-primary" />
                    إعدادات الخصوصية
                  </CardTitle>
                  <CardDescription>إدارة خصوصية بياناتك ومعلوماتك الشخصية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>التحقق بخطوتين</Label>
                          <p className="text-sm text-muted-foreground">تفعيل ميزة التحقق بخطوتين لتأمين حسابك</p>
                        </div>
                        <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>مشاركة البيانات</Label>
                          <p className="text-sm text-muted-foreground">
                            السماح بمشاركة بياناتك مع شركاء المنصة لتحسين الخدمات
                          </p>
                        </div>
                        <Switch checked={dataSharing} onCheckedChange={setDataSharing} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>ملفات تعريف الارتباط</Label>
                          <p className="text-sm text-muted-foreground">
                            الموافقة على استخدام ملفات تعريف الارتباط (الكوكيز)
                          </p>
                        </div>
                        <Switch checked={cookieConsent} onCheckedChange={setCookieConsent} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>خدمات الموقع</Label>
                          <p className="text-sm text-muted-foreground">
                            السماح للمنصة باستخدام موقعك الجغرافي لتقديم خدمات مخصصة
                          </p>
                        </div>
                        <Switch checked={locationServices} onCheckedChange={setLocationServices} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">حذف البيانات</h3>
                    <p className="text-sm text-muted-foreground">
                      يمكنك طلب حذف بياناتك من المنصة. هذا الإجراء لا يمكن التراجع عنه.
                    </p>
                    <Button variant="destructive" className="flex items-center gap-2">
                      <Trash2 className="h-4 w-4" />
                      طلب حذف البيانات
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">إعادة تعيين</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Accessibility Settings */}
        <TabsContent value="accessibility" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2 text-primary" />
                    إعدادات إمكانية الوصول
                  </CardTitle>
                  <CardDescription>تخصيص إعدادات إمكانية الوصول لتحسين تجربة استخدامك للمنصة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>حجم الخط</Label>
                      <p className="text-sm text-muted-foreground mb-4">تعديل حجم الخط في المنصة ({fontSize}px)</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs">أ</span>
                        <Slider
                          value={[fontSize]}
                          min={12}
                          max={24}
                          step={1}
                          onValueChange={(value) => setFontSize(value[0])}
                          className="flex-1"
                        />
                        <span className="text-xl">أ</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <Label>وضع التباين</Label>
                      <p className="text-sm text-muted-foreground mb-4">اختر وضع التباين المناسب لك</p>
                      <RadioGroup
                        value={contrastMode}
                        onValueChange={setContrastMode}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label htmlFor="normal">عادي</Label>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high">تباين عالي</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>قارئ الشاشة</Label>
                          <p className="text-sm text-muted-foreground">تفعيل التوافق مع قارئات الشاشة</p>
                        </div>
                        <Switch checked={screenReader} onCheckedChange={setScreenReader} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>تقليل الحركة</Label>
                          <p className="text-sm text-muted-foreground">تقليل الرسوم المتحركة والتأثيرات البصرية</p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">إعادة تعيين</Button>
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    إعدادات الحساب
                  </CardTitle>
                  <CardDescription>إدارة معلومات حسابك وكلمة المرور</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" defaultValue="mohammed@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input id="phone" defaultValue="96110022" />
                    </div>
                    <div className="space-y-2 pt-4 border-t">
                      <h3 className="text-lg font-medium mt-4">تغيير كلمة المرور</h3>
                      <div className="space-y-2">
                        <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="text-lg font-medium">الأجهزة المتصلة</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Smartphone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">iPhone 13</p>
                            <p className="text-sm text-muted-foreground">آخر تسجيل دخول: اليوم، 10:30 صباحاً</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                            <Check className="h-3 w-3 mr-1" />
                            الجهاز الحالي
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Globe className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">متصفح Chrome - Windows</p>
                            <p className="text-sm text-muted-foreground">آخر تسجيل دخول: أمس، 3:45 مساءً</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          تسجيل خروج
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">إعادة تعيين</Button>
                  <div className="flex gap-2">
                    <Button variant="destructive" className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      تسجيل الخروج من جميع الأجهزة
                    </Button>
                    <Button className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      حفظ التغييرات
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


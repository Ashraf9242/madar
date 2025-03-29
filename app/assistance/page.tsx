"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  Search,
  Book,
  FileQuestion,
  MessageSquare,
  Video,
  Phone,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"
import { motion } from "framer-motion"

export default function AssistancePage() {
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

  const faqs = [
    {
      question: "كيف يمكنني تحديث بياناتي الشخصية؟",
      answer:
        "يمكنك تحديث بياناتك الشخصية من خلال الانتقال إلى صفحة 'حسابي' ثم اختيار 'البيانات الشخصية' وتعديل المعلومات المطلوبة ثم الضغط على زر 'حفظ التغييرات'.",
    },
    {
      question: "متى يتم إيداع المعاش الشهري؟",
      answer:
        "يتم إيداع المعاش الشهري في اليوم الأول من كل شهر ميلادي. في حال صادف يوم الإيداع عطلة رسمية، يتم الإيداع في يوم العمل السابق.",
    },
    {
      question: "كيف يمكنني الحصول على شهادة المعاش؟",
      answer:
        "يمكنك الحصول على شهادة المعاش من خلال الانتقال إلى صفحة 'الخدمات' ثم اختيار 'شهادة المعاش' وتعبئة النموذج المطلوب. ستصلك الشهادة عبر البريد الإلكتروني خلال يوم عمل واحد.",
    },
    {
      question: "كيف يمكنني تغيير الحساب البنكي لإيداع المعاش؟",
      answer:
        "يمكنك تغيير الحساب البنكي من خلال الانتقال إلى صفحة 'الخدمات' ثم اختيار 'تحديث البيانات البنكية' وإدخال بيانات الحساب الجديد. سيتم تفعيل التغيير في دورة المعاش التالية.",
    },
    {
      question: "ما هي شروط الاستفادة من برنامج دعم السكن للمتقاعدين؟",
      answer:
        "للاستفادة من برنامج دعم السكن للمتقاعدين، يجب أن يكون المتقاعد سعودي الجنسية، وألا يكون مالكاً لمسكن، وألا يتجاوز دخله الشهري 14,000 ريال. يمكنك التقديم من خلال صفحة 'الخدمات' ثم اختيار 'بدل السكن'.",
    },
    {
      question: "كيف يمكنني الاستفادة من التأمين الصحي للمتقاعدين؟",
      answer:
        "يتم توفير التأمين الصحي تلقائياً لجميع المتقاعدين وأفراد أسرهم. يمكنك الاطلاع على تفاصيل التغطية والمستشفيات المعتمدة من خلال صفحة 'الخدمات' ثم اختيار 'التأمين الصحي'.",
    },
  ]

  const guides = [
    {
      title: "دليل استخدام المنصة",
      description: "شرح مفصل لكيفية استخدام منصة المدار الرقمي",
      icon: <Book className="h-10 w-10" />,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "الأسئلة الشائعة",
      description: "إجابات على الأسئلة الأكثر شيوعاً",
      icon: <FileQuestion className="h-10 w-10" />,
      color: "bg-orange/10 text-orange",
    },
    {
      title: "فيديوهات توضيحية",
      description: "شروحات مرئية لكيفية استخدام الخدمات",
      icon: <Video className="h-10 w-10" />,
      color: "bg-teal/10 text-teal",
    },
    {
      title: "التواصل مع الدعم",
      description: "تواصل مباشرة مع فريق الدعم الفني",
      icon: <MessageSquare className="h-10 w-10" />,
      color: "bg-purple/10 text-purple",
    },
  ]

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">المساعدة</h1>
        <p className="text-muted-foreground">نحن هنا لمساعدتك في أي استفسار أو مشكلة قد تواجهك</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="ابحث عن سؤال..."
          className="w-full pr-10 bg-muted/30 focus:bg-background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {guides.map((guide, index) => (
          <motion.div key={index} variants={item}>
            <Card className="card-hover h-full">
              <CardHeader className={`pb-2 ${guide.color}`}>
                <div className="rounded-full p-2 w-fit">{guide.icon}</div>
                <CardTitle className="text-lg mt-2">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2">
                <Button variant="ghost" className="w-full justify-between">
                  استعراض
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
          <TabsTrigger value="contact">اتصل بنا</TabsTrigger>
          <TabsTrigger value="tutorials">الدروس التعليمية</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                الأسئلة الشائعة
              </CardTitle>
              <CardDescription>إجابات على الأسئلة الأكثر شيوعاً</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-right">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-right">
                      <div className="p-4 rounded-lg bg-muted/30">{faq.answer}</div>
                      <div className="flex justify-end mt-2 gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          مفيد
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          غير مفيد
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                عرض المزيد من الأسئلة
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                اتصل بنا
              </CardTitle>
              <CardDescription>تواصل معنا للحصول على المساعدة</CardDescription>
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                معلومات الاتصال
              </CardTitle>
              <CardDescription>طرق أخرى للتواصل معنا</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center p-4 rounded-lg border text-center">
                  <Phone className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="font-medium">الهاتف</h3>
                  <p className="text-sm text-muted-foreground mt-1">920001234</p>
                  <p className="text-sm text-muted-foreground">من 8 صباحاً إلى 8 مساءً</p>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg border text-center">
                  <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="font-medium">البريد الإلكتروني</h3>
                  <p className="text-sm text-muted-foreground mt-1">support@madar.sa</p>
                  <p className="text-sm text-muted-foreground">الرد خلال 24 ساعة</p>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg border text-center">
                  <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                  <h3 className="font-medium">الدردشة المباشرة</h3>
                  <p className="text-sm text-muted-foreground mt-1">متاحة على المنصة</p>
                  <p className="text-sm text-muted-foreground">من 8 صباحاً إلى 12 مساءً</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-primary" />
                الدروس التعليمية
              </CardTitle>
              <CardDescription>فيديوهات توضيحية لاستخدام المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">كيفية تسجيل الدخول</h3>
                    <p className="text-sm text-muted-foreground">شرح خطوات تسجيل الدخول إلى المنصة</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>المدة: 2:30 دقيقة</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">كيفية تحديث البيانات الشخصية</h3>
                    <p className="text-sm text-muted-foreground">شرح خطوات تحديث البيانات الشخصية</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>المدة: 3:45 دقيقة</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">كيفية طلب شهادة المعاش</h3>
                    <p className="text-sm text-muted-foreground">شرح خطوات طلب شهادة المعاش</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>المدة: 4:10 دقيقة</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground opacity-50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">كيفية استخدام المساعد الصوتي</h3>
                    <p className="text-sm text-muted-foreground">شرح كيفية استخدام المساعد الصوتي</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>المدة: 3:20 دقيقة</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                عرض المزيد من الدروس
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  CreditCard,
  Home,
  Heart,
  Briefcase,
  GraduationCap,
  Car,
  Plane,
  Search,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
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

  const serviceCategories = [
    {
      id: "essential",
      name: "الخدمات الأساسية",
      description: "الخدمات الأكثر استخداماً للمتقاعدين",
    },
    {
      id: "financial",
      name: "الخدمات المالية",
      description: "خدمات متعلقة بالمعاش والأمور المالية",
    },
    {
      id: "health",
      name: "الخدمات الصحية",
      description: "خدمات الرعاية الصحية والتأمين",
    },
    {
      id: "social",
      name: "الخدمات الاجتماعية",
      description: "برامج وأنشطة اجتماعية للمتقاعدين",
    },
  ]

  const services = [
    {
      id: 1,
      title: "شهادة المعاش",
      description: "طلب شهادة تثبت قيمة المعاش الشهري",
      icon: <FileText className="h-10 w-10" />,
      category: "essential",
      color: "bg-primary/10 text-primary",
      popular: true,
      time: "5 دقائق",
    },
    {
      id: 2,
      title: "تحديث البيانات البنكية",
      description: "تحديث بيانات الحساب البنكي لإيداع المعاش",
      icon: <CreditCard className="h-10 w-10" />,
      category: "financial",
      color: "bg-orange/10 text-orange",
      popular: false,
      time: "10 دقائق",
    },
    {
      id: 3,
      title: "بدل السكن",
      description: "طلب بدل السكن للمتقاعدين المستحقين",
      icon: <Home className="h-10 w-10" />,
      category: "financial",
      color: "bg-teal/10 text-teal",
      popular: true,
      time: "15 دقيقة",
    },
    {
      id: 4,
      title: "التأمين الصحي",
      description: "إدارة التأمين الصحي للمتقاعد وأفراد الأسرة",
      icon: <Heart className="h-10 w-10" />,
      category: "health",
      color: "bg-red-500/10 text-red-500",
      popular: true,
      time: "10 دقائق",
    },
    {
      id: 5,
      title: "فرص عمل جزئية",
      description: "استعراض فرص العمل الجزئية المناسبة للمتقاعدين",
      icon: <Briefcase className="h-10 w-10" />,
      category: "social",
      color: "bg-blue-600/10 text-blue-600",
      popular: false,
      time: "فوري",
    },
    {
      id: 6,
      title: "برامج تدريبية",
      description: "دورات تدريبية مجانية للمتقاعدين",
      icon: <GraduationCap className="h-10 w-10" />,
      category: "social",
      color: "bg-purple/10 text-purple",
      popular: false,
      time: "فوري",
    },
    {
      id: 7,
      title: "خصومات المواصلات",
      description: "خصومات خاصة للمتقاعدين على وسائل النقل",
      icon: <Car className="h-10 w-10" />,
      category: "essential",
      color: "bg-green-600/10 text-green-600",
      popular: false,
      time: "فوري",
    },
    {
      id: 8,
      title: "خصومات السفر",
      description: "عروض وخصومات على تذاكر السفر والفنادق",
      icon: <Plane className="h-10 w-10" />,
      category: "social",
      color: "bg-cyan-500/10 text-cyan-500",
      popular: true,
      time: "فوري",
    },
    {
      id: 9,
      title: "الاستشارات الطبية",
      description: "استشارات طبية مجانية عن بعد للمتقاعدين",
      icon: <Heart className="h-10 w-10" />,
      category: "health",
      color: "bg-red-500/10 text-red-500",
      popular: false,
      time: "30 دقيقة",
    },
    {
      id: 10,
      title: "تقسيط المشتريات",
      description: "خدمة تقسيط المشتريات بدون فوائد للمتقاعدين",
      icon: <CreditCard className="h-10 w-10" />,
      category: "financial",
      color: "bg-orange/10 text-orange",
      popular: false,
      time: "يوم واحد",
    },
    {
      id: 11,
      title: "المساعدة المنزلية",
      description: "خدمات مساعدة منزلية بأسعار مخفضة",
      icon: <Home className="h-10 w-10" />,
      category: "essential",
      color: "bg-teal/10 text-teal",
      popular: false,
      time: "يومان",
    },
    {
      id: 12,
      title: "النوادي الاجتماعية",
      description: "عضويات مجانية في النوادي الاجتماعية",
      icon: <Briefcase className="h-10 w-10" />,
      category: "social",
      color: "bg-blue-600/10 text-blue-600",
      popular: false,
      time: "أسبوع",
    },
  ]

  const filteredServices = (category) => {
    return services.filter(
      (service) =>
        (category === "all" || service.category === category) &&
        (searchQuery === "" || service.title.includes(searchQuery) || service.description.includes(searchQuery)),
    )
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">الخدمات</h1>
        <p className="text-muted-foreground">استعرض جميع الخدمات المتاحة للمتقاعدين واستفد منها بكل سهولة</p>
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
          placeholder="ابحث عن الخدمات..."
          className="w-full pr-10 bg-muted/30 focus:bg-background"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">الكل</TabsTrigger>
          {serviceCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredServices("all").map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </TabsContent>

        {serviceCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredServices(category.id).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
      <Card className="card-hover overflow-hidden border">
        <CardHeader className={`pb-2 ${service.color}`}>
          <div className="flex justify-between items-start">
            <div className="rounded-full p-2">{service.icon}</div>
            <div className="flex gap-2">
              {service.popular && (
                <Badge
                  variant="secondary"
                  className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-500/30"
                >
                  <Star className="h-3 w-3 mr-1" />
                  شائع
                </Badge>
              )}
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {service.time}
              </Badge>
            </div>
          </div>
          <CardTitle className="text-lg mt-2">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">سهل الاستخدام</Badge>
            <Badge variant="outline">متاح إلكترونياً</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full justify-between">
            طلب الخدمة
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


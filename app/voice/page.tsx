"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Volume2, MessageSquare, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function VoiceAssistantPage() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [showResponse, setShowResponse] = useState(false)

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false)
      // Simulate receiving a response after stopping listening
      setTimeout(() => {
        setResponse(
          "مرحباً! كيف يمكنني مساعدتك اليوم؟ يمكنني مساعدتك في الاستعلام عن المعاش، أو حجز موعد، أو الإجابة على استفساراتك.",
        )
        setShowResponse(true)
      }, 1000)
    } else {
      setIsListening(true)
      setTranscript("")
      setResponse("")
      setShowResponse(false)
    }
  }

  // Simulate typing effect for transcript when listening
  useEffect(() => {
    if (isListening) {
      const messages = [
        "أريد معرفة موعد صرف المعاش",
        "متى يتم إيداع المعاش الشهري؟",
        "هل يمكنني معرفة موعد الإيداع القادم؟",
      ]

      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      let index = 0

      const typingInterval = setInterval(() => {
        if (index <= randomMessage.length) {
          setTranscript(randomMessage.substring(0, index))
          index++
        } else {
          clearInterval(typingInterval)
          // Automatically stop listening after typing is complete
          setTimeout(() => {
            setIsListening(false)
            // Simulate receiving a response
            setTimeout(() => {
              setResponse(
                "يتم إيداع المعاش في اليوم الأول من كل شهر ميلادي. المعاش القادم سيتم إيداعه يوم الأربعاء، 1 يونيو 2023.",
              )
              setShowResponse(true)
            }, 1000)
          }, 1000)
        }
      }, 100)

      return () => clearInterval(typingInterval)
    }
  }, [isListening])

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">المساعد الصوتي</h1>
        <p className="text-muted-foreground">تفاعل مع المنصة عن طريق الأوامر الصوتية بكل سهولة</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>المساعد الصوتي</CardTitle>
            <CardDescription>تحدث بصوتك للحصول على المساعدة</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <motion.div
              className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 ${
                isListening ? "bg-red-100 dark:bg-red-900/20" : "bg-primary/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                isListening
                  ? {
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0px 0px 0px rgba(0,0,0,0)",
                        "0px 0px 20px rgba(239,68,68,0.5)",
                        "0px 0px 0px rgba(0,0,0,0)",
                      ],
                    }
                  : {}
              }
              transition={{ repeat: isListening ? Number.POSITIVE_INFINITY : 0, duration: 1.5 }}
              onClick={toggleListening}
            >
              {isListening ? <MicOff className="h-16 w-16 text-red-500" /> : <Mic className="h-16 w-16 text-primary" />}
            </motion.div>

            <div className="text-center">
              <p className="font-medium mb-2">{isListening ? "جاري الاستماع..." : "اضغط للتحدث"}</p>
              <p className="text-sm text-muted-foreground">
                {isListening ? "تحدث بوضوح وببطء" : "يمكنك الاستفسار عن المعاش، حجز المواعيد، وأكثر"}
              </p>
            </div>

            <AnimatePresence>
              {transcript && (
                <motion.div
                  className="mt-6 p-4 rounded-lg bg-muted w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="text-sm font-medium mb-1">ما سمعته:</p>
                  <p className="text-sm">{transcript}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>الاستجابة</CardTitle>
            <CardDescription>رد المساعد الصوتي</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6 min-h-[300px]">
            <AnimatePresence>
              {showResponse ? (
                <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 flex-1">
                      <p>{response}</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      className="flex items-center gap-2 text-sm text-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setResponse("")
                        setShowResponse(false)
                      }}
                    >
                      <MessageSquare className="h-4 w-4" />
                      طرح سؤال آخر
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Volume2 className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
                  <p className="text-muted-foreground text-center">استخدم المساعد الصوتي للحصول على إجابة</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>أمثلة على الأوامر الصوتية</CardTitle>
          <CardDescription>جرب هذه الأوامر مع المساعد الصوتي</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <p className="font-medium mb-2">الاستعلام عن المعاش</p>
              <p className="text-sm text-muted-foreground">"متى يتم إيداع المعاش الشهري؟"</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <p className="font-medium mb-2">حجز موعد</p>
              <p className="text-sm text-muted-foreground">"أريد حجز موعد في مركز الخدمة"</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <p className="font-medium mb-2">طلب مساعدة</p>
              <p className="text-sm text-muted-foreground">"كيف يمكنني تحديث بياناتي الشخصية؟"</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <p className="font-medium mb-2">الاستعلام عن الخدمات</p>
              <p className="text-sm text-muted-foreground">"ما هي الخدمات المتاحة للمتقاعدين؟"</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <p className="font-medium mb-2">تقديم شكوى</p>
              <p className="text-sm text-muted-foreground">"أريد تقديم شكوى بخصوص الخدمة"</p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <p className="font-medium mb-2">طلب وثيقة</p>
              <p className="text-sm text-muted-foreground">"كيف أحصل على شهادة المعاش؟"</p>
            </motion.div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-between">
            عرض المزيد من الأوامر
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


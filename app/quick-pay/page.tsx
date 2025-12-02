"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Smartphone, Wallet, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

const paymentMethods = [
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Pay securely with your card",
    fees: "No additional fees",
  },
  {
    id: "upi",
    name: "UPI Payment",
    icon: CreditCard,
    description: "Pay instantly with UPI",
    fees: "No additional fees",
  },
  {
    id: "wallet",
    name: "Digital Wallet",
    icon: Wallet,
    description: "Pay with your digital wallet",
    fees: "No additional fees",
  },
]

const courseOptions = [
  { id: "beginner", name: "Beginner Course", price: 2999 },
  { id: "intermediate", name: "Intermediate Course", price: 4999 },
  { id: "advanced", name: "Advanced Course", price: 7999 },
  { id: "master", name: "Master Class", price: 12999 },
  { id: "online-1on1", name: "Online 1-on-1 Session", price: 1499 },
  { id: "tournament-prep", name: "Tournament Preparation", price: 5999 },
]

export default function QuickPayPage() {
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const selectedCourseData = courseOptions.find((course) => course.id === selectedCourse)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
    }, 3000)
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-cyan-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">Your payment has been processed successfully. You will receive a confirmation email shortly.</p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white"
            >
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">Quick Pay</h1>
            <p className="text-xl max-w-2xl mx-auto text-cyan-200">Fast, secure, and convenient payment for your chess courses</p>
          </motion.div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Details */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card className="shadow-xl bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Course Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-cyan-900">Select Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courseOptions.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.name} - ₹{course.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4 text-cyan-900">
                    <h3 className="font-semibold text-lg">Personal Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-cyan-900">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-cyan-900">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-cyan-900">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4 text-cyan-900">
                    <h3 className="font-semibold text-lg">Payment Method</h3>
                    <div className="grid gap-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                            selectedMethod === method.id ? "border-cyan-600 bg-cyan-50" : "border-gray-200 hover:border-cyan-400"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <method.icon className={`w-6 h-6 ${selectedMethod === method.id ? "text-cyan-600" : "text-gray-500"}`} />
                            <div className="flex-1">
                              <h4 className="font-medium">{method.name}</h4>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                            <span className="text-sm text-cyan-600">{method.fees}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card details */}
                  {selectedMethod === "card" && (
                    <div className="space-y-4 text-cyan-900">
                      <h4 className="font-medium">Card Details</h4>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" value={formData.cardNumber} onChange={(e) => handleInputChange("cardNumber", e.target.value)} placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" value={formData.expiryDate} onChange={(e) => handleInputChange("expiryDate", e.target.value)} placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" value={formData.cvv} onChange={(e) => handleInputChange("cvv", e.target.value)} placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI details */}
                  {selectedMethod === "upi" && (
                    <div className="space-y-4 text-cyan-900">
                      <h4 className="font-medium">UPI Details</h4>
                      <div>
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input id="upiId" value={formData.upiId} onChange={(e) => handleInputChange("upiId", e.target.value)} placeholder="yourname@upi" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Summary */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card className="shadow-xl bg-white/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedCourseData ? (
                    <>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-cyan-900">
                          <span className="font-medium">{selectedCourseData.name}</span>
                          <span className="font-semibold">₹{selectedCourseData.price}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center text-lg font-bold text-cyan-700">
                          <span>Total Amount</span>
                          <span>₹{selectedCourseData.price}</span>
                        </div>
                      </div>

                      <Button
                        onClick={handlePayment}
                        disabled={isProcessing || !selectedCourse || !formData.name || !formData.email}
                        className="w-full py-6 text-lg bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing Payment...</span>
                          </div>
                        ) : (
                          `Pay ₹${selectedCourseData.price}`
                        )}
                      </Button>
                    </>
                  ) : (
                    <div className="text-center text-gray-600 py-8">
                      <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                      <p>Please select a course to continue</p>
                    </div>
                  )}

                  {/* Security Features */}
                  <div className="space-y-3 border-t pt-6 text-cyan-900">
                    <h4 className="font-medium flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-700" />
                      Secure Payment
                    </h4>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-600" /> 256-bit SSL encryption
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-600" /> PCI DSS compliant
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-600" /> Instant confirmation
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

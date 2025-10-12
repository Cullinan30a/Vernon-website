import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Heart, 
  Star,
  ChevronRight,
  Menu,
  X,
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  Calendar,
  Trophy,
  Building,
  GraduationCap,
  Clock,
  Info,
  ExternalLink,
  RefreshCw,
  Sparkles,
  Zap,
  Play,
  Newspaper,
  Camera,
  Video,
  BookOpen,
  Globe,
  Target,
  CheckCircle,
  Briefcase,
  UserCheck,
  Lightbulb,
  HandHeart
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // 方法1: 使用Formspree (主要方案)
      const formspreeResponse = await fetch('https://formspree.io/f/xdkogqjb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          source: 'Vernon Cheuk 網站查詢'
        })
      })

      if (formspreeResponse.ok) {
        setSubmitStatus('success')
        setFormData({ message: '', name: '', phone: '', email: '' })
      } else {
        throw new Error('Formspree failed')
      }
    } catch (error) {
      console.log('Formspree failed, trying backup method...')
      
      try {
        // 方法2: 使用Netlify Forms (備用)
        const netlifyResponse = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'contact',
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message
          }).toString()
        })

        if (netlifyResponse.ok) {
          setSubmitStatus('success')
          setFormData({ message: '', name: '', phone: '', email: '' })
        } else {
          throw new Error('Netlify failed')
        }
      } catch (netlifyError) {
        console.log('Netlify failed, using mailto fallback...')
        
        // 方法3: Mailto 備用方案
        const subject = encodeURIComponent('網站查詢 - ' + formData.name)
        const body = encodeURIComponent(`\n查詢內容: ${formData.message}\n姓名: ${formData.name}\n電話: ${formData.phone}\n電郵: ${formData.email}\n\n提交時間: ${new Date().toLocaleString('zh-HK')}\n        `)
        
        window.location.href = `mailto:vernoncheuk@gmail.com?subject=${subject}&body=${body}`
        setSubmitStatus('mailto')
        setFormData({ message: '', name: '', phone: '', email: '' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // 服務項目數據
  const services = [
    {
      icon: Shield,
      title: "人壽保險規劃",
      description: "為您和家人提供全面的人壽保障，確保財務安全"
    },
    {
      icon: Heart,
      title: "醫療保險諮詢", 
      description: "專業醫療保險建議，保障您的健康與財富"
    },
    {
      icon: TrendingUp,
      title: "退休規劃",
      description: "制定適合的退休計劃，享受無憂的黃金歲月"
    },
    {
      icon: GraduationCap,
      title: "強積金服務",
      description: "專業MPF投資管理建議，助您累積退休財富"
    },
    {
      icon: BookOpen,
      title: "子女教育基金",
      description: "為子女教育提前規劃，確保教育資金充足"
    },
    {
      icon: Trophy,
      title: "財富傳承",
      description: "專業的財富管理和傳承規劃服務"
    },
    {
      icon: Building,
      title: "家族辦公室",
      description: "為高淨值家族提供全方位財富管理和傳承服務"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 導航欄 */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vernon Cheuk 卓君風
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-md">
                  <Sparkles className="w-3 h-3 mr-1" />
                  v6.0
                </Badge>
                <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-md">
                  <Calendar className="w-3 h-3 mr-1" />
                  2025.10.12
                </Badge>
              </div>
            </div>
            {/* ...existing code... */}
          </div>
          {/* ...existing code... */}
        </div>
      </nav>
      {/* ...existing code... */}
    </div>
  )
}

export default App
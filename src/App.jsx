import { useState } from 'react'
import { Button } from './components/ui/button.jsx'
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

// 導入圖片資源
import vernonCard from './assets/28f8e080-f726-477b-9da7-2bfbe3904f70.jpeg'
import vernonPhoto from './assets/ade6d802-4db4-43c4-a4fc-a134516d5ef1.jpeg'
import hkSkyline from './assets/hk_skyline.jpg'
import hkFinancial from './assets/hk_financial.jpg'
import hkBusiness from './assets/hk_business.jpg'
import hkDimsum from './assets/hk_dimsum.jpg'

// AI卡通人像作為裝飾
import aiVernonBusiness from './assets/vernon-business.jpg'
import aiVernonSport from './assets/vernon-sport.png'
import aiVernonMahjong from './assets/vernon-mahjong.png'
import aiVernonRecruit from './assets/vernon-recruit.png'

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
        setSubmitStatus('error')
        console.error('Netlify backup failed:', netlifyError)
      }
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>Vernon Cheuk 網站</h1>
        <p>歡迎來到 Vernon Cheuk 的官方網站！</p>
        <img src={vernonPhoto} alt="Vernon Cheuk" style={{maxWidth: 300}} />
      </section>

      {/* 關於我 Section */}
      <section>
        {/* 你的關於我內容 */}
      </section>

      {/* 服務項目 Section */}
      <section>
        {/* 你的服務項目內容 */}
      </section>

      {/* 聯絡表單 Section */}
      <section>
        {/* 你的聯絡表單內容 */}
      </section>

      {/* 其他 Section ... */}
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
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

// 導入圖片資源
import vernonCard from './assets/28f8e080-f726-477b-9da7-2bfbe3904f70.jpeg'
import vernonPhoto from './assets/ade6d802-4db4-43c4-a4fc-a134516d5ef1.jpeg'
import hkSkyline from './assets/hk_skyline.jpg'
import hkFinancial from './assets/hk_financial.jpg'
import hkBusiness from './assets/hk_business.jpg'
import hkDimsum from './assets/hk_dimsum.jpg'

// AI卡通人像作為裝飾
import aiVernonBusiness from '/ai-avatars/vernon-business.jpg'
import aiVernonSport from '/ai-avatars/vernon-sport.png'
import aiVernonMahjong from '/ai-avatars/vernon-mahjong.png'
import aiVernonRecruit from '/ai-avatars/vernon-recruit.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // 更新時間
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 處理表格提交
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // 方法1: 使用Formspree
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
          timestamp: new Date().toLocaleString('zh-HK'),
          source: 'Vernon Cheuk 網站查詢'
        })
      })

      if (formspreeResponse.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', email: '', message: '' })
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
          setFormData({ name: '', phone: '', email: '', message: '' })
        } else {
          throw new Error('Netlify failed')
        }
      } catch (netlifyError) {
        console.log('Netlify failed, using mailto fallback...')
        
        // 方法3: Mailto 備用方案
        const subject = encodeURIComponent('網站查詢 - ' + formData.name)
        const body = encodeURIComponent(`
姓名: ${formData.name}
電話: ${formData.phone}
電郵: ${formData.email}
查詢內容: ${formData.message}

提交時間: ${new Date().toLocaleString('zh-HK')}
        `)
        
        window.location.href = `mailto:vernoncheuk@gmail.com?subject=${subject}&body=${body}`
        setSubmitStatus('mailto')
        setFormData({ name: '', phone: '', email: '', message: '' })
      }
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    {
      title: "人壽保險規劃",
      description: "為您和家人提供全面的人壽保障，確保財務安全",
      icon: <Shield className="w-8 h-8" />,
      image: hkSkyline,
      manulifeLink: "https://www.manulife.com.hk/zh-hk/individual/products/life-insurance.html"
    },
    {
      title: "醫療保險諮詢", 
      description: "專業醫療保險建議，保障您的健康與財富",
      icon: <Heart className="w-8 h-8" />,
      image: hkBusiness,
      manulifeLink: "https://www.manulife.com.hk/zh-hk/individual/products/health-insurance.html"
    },
    {
      title: "退休規劃",
      description: "制定適合的退休計劃，確保您的退休生活無憂",
      icon: <Users className="w-8 h-8" />,
      image: hkFinancial,
      manulifeLink: "https://www.manulife.com.hk/zh-hk/individual/products/retirement-planning.html"
    }
  ]

  // 核心理念
  const coreValues = [
    {
      title: "真誠待人",
      description: "以誠待人，建立長遠的客戶關係，無論何金多寡都一視同仁",
      icon: <HandHeart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "追求卓越",
      description: "不斷提升專業知識和服務質素，為客戶提供最優質的方案",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "客戶為先",
      description: "以客戶利益為依歸，了解其財務狀況和實質需求，推介最合適的方案",
      icon: <UserCheck className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ]

  // 專業資格及殊榮
  const qualifications = [
    { title: "宏利保險區域總監", icon: <Building className="w-5 h-5" /> },
    { title: "35年保險業經驗 (1991-2026)", icon: <Calendar className="w-5 h-5" /> },
    { title: "百萬圓桌會終身會員 (MDRT)", icon: <Trophy className="w-5 h-5" /> },
    { title: "國際龍獎 (IDA)", icon: <Award className="w-5 h-5" /> },
    { title: "國際優質服務獎 (IQA)", icon: <Star className="w-5 h-5" /> },
    { title: "傑出人壽保險經理獎 (DMA)", icon: <Shield className="w-5 h-5" /> },
    { title: "GAMA最高管理成就獎 (MAA)", icon: <Trophy className="w-5 h-5" /> },
    { title: "GAMA管理發展獎 (FLA)", icon: <TrendingUp className="w-5 h-5" /> },
    { title: "GAMA管理卓越獎 (IMA)", icon: <Sparkles className="w-5 h-5" /> }
  ]

  // 媒體報導數據
  const mediaReports = [
    {
      title: "香港經濟日報專訪 - 保險風雲人物",
      description: "卓君風 真誠卓志 - 深度專訪Vernon的保險事業發展歷程和專業見解",
      type: "文章專訪",
      icon: <Newspaper className="w-6 h-6" />,
      link: "https://www.hket.com/article/3222616/%E5%8D%93%E5%90%9B%E9%A2%A8%20%E7%9C%9F%E8%AA%A0%E5%8D%93%E5%BF%97",
      date: "2024"
    },
    {
      title: "香港經濟日報採訪特輯 (第一集)",
      description: "Vernon分享保險行業專業見解和優質客戶服務心得",
      type: "YouTube影片",
      icon: <Youtube className="w-6 h-6" />,
      link: "https://youtu.be/87ENL-d9DA0?si=xAKjEMF5AyqcHb9M",
      date: "2024"
    },
    {
      title: "香港經濟日報採訪特輯 (第二集)",
      description: "深入探討現代保險規劃策略和理財投資建議",
      type: "YouTube影片", 
      icon: <Youtube className="w-6 h-6" />,
      link: "https://youtu.be/HzF4zLYvu_c?si=issh4hYRgHo8F_JV",
      date: "2024"
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
                  v3.1
                </Badge>
                <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-md">
                  <Calendar className="w-3 h-3 mr-1" />
                  2025.06.26
                </Badge>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">關於我</a>
              <a href="#values" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">核心理念</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">服務項目</a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">成就榮譽</a>
              <a href="#media" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">媒體報導</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">聯絡我</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* 移動端菜單 */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">關於我</a>
                <a href="#values" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">核心理念</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">服務項目</a>
                <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">成就榮譽</a>
                <a href="#media" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">媒體報導</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">聯絡我</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 主橫幅 */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* AI裝飾元素 - 浮動在背景 */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-20 animate-bounce hidden lg:block">
          <img src={aiVernonSport} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-16 h-16 opacity-15 animate-pulse hidden lg:block">
          <img src={aiVernonMahjong} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                    <Briefcase className="w-3 h-3 mr-1" />
                    宏利保險區域總監
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    卓君風
                  </span>
                  <br />
                  <span className="text-3xl lg:text-4xl text-gray-700">
                    Vernon Cheuk
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  從草根家庭出身到成為宏利保險區域總監，我始終堅持「真誠卓志」的理念，
                  以客戶利益為先，為每一位客戶提供最適合的保險及理財方案。
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  立即聯絡
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  觀看宣傳片
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">35年</div>
                  <div className="text-sm text-gray-600">保險經驗</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">MDRT</div>
                  <div className="text-sm text-gray-600">百萬圓桌</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">區域</div>
                  <div className="text-sm text-gray-600">總監</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={vernonCard} 
                  alt="Vernon Cheuk" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Star className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 關於我 */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-md mb-4">
              <UserCheck className="w-3 h-3 mr-1" />
              關於我
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                我的故事
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={vernonPhoto} 
                alt="Vernon Cheuk Professional" 
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">35年</div>
                <div className="text-sm">保險經驗</div>
              </div>
              
              {/* AI裝飾元素 */}
              <div className="absolute -top-4 -left-4 w-12 h-12 opacity-30 hidden lg:block">
                <img src={aiVernonBusiness} alt="" className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">從草根到總監的歷程</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    我成長於草根家庭，一家八口住在約三百呎的公屋單位。艱苦的生活環境讓我格外獨立成熟，
                    從小便立志要發奮圖強，為家人提供優渥的生活。
                  </p>
                  <p>
                    1991年投身保險業至今已有35年，從保險代理到成為宏利保險區域總監，
                    我始終相信「多勞多得」的公平原則，以真誠待人、信守承諾為宗旨。
                  </p>
                  <p>
                    現時領導VNITED團隊超過150人，直屬團隊有十多名經理。在短短10年間，
                    培訓出共計5名分區總監，團隊多次奪得宏利平均業績獎項。看著團隊成員從入行到事業有成，
                    從單身到結婚生子，這就是我最大的滿足感。
                  </p>
                  <p>
                    作為2024年GAMA LAMP Asia主席，我主辦了「傳承智慧，開創未來」亞洲保險業領袖高峰會，
                    致力推動行業的發展與創新。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心理念 */}
      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-md mb-4">
              <Lightbulb className="w-3 h-3 mr-1" />
              核心理念
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                我的服務理念
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              三十五年來在保險行業堅持的核心價值，以真誠、專業、客戶為先的理念服務每一位客戶
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-r ${value.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 服務項目 */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-md mb-4">
              <Shield className="w-3 h-3 mr-1" />
              服務項目
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                提供全方位的保險及理財規劃服務
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              為您和家人的未來保駕護航，提供最適合的保險和理財解決方案
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://www.manulife.com.hk/zh-hk.html', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              瀏覽宏利官方網站
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-blue-600">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open(service.manulifeLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    了解宏利產品詳情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 成就與榮譽 */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-md mb-4">
              <Trophy className="w-3 h-3 mr-1" />
              成就與榮譽
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                35年來在保險業界獲得的專業認可和領導地位
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">專業資格及殊榮</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-yellow-600 flex-shrink-0">
                    {qual.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{qual.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Building className="w-6 h-6 mr-2 text-blue-600" />
                  領導成就
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">VNITED團隊領導</div>
                    <div className="text-gray-600">領導超過150人的專業團隊</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">培訓成果</div>
                    <div className="text-gray-600">10年間培訓出5名分區總監</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">團隊榮譽</div>
                    <div className="text-gray-600">多次奪得宏利平均業績獎項</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Globe className="w-6 h-6 mr-2 text-green-600" />
                  行業貢獻
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Trophy className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">GAMA LAMP Asia主席</div>
                    <div className="text-gray-600">2024年亞洲保險業領袖</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">高峰會主辦</div>
                    <div className="text-gray-600">「傳承智慧，開創未來」亞洲保險業領袖高峰會</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">行業推動</div>
                    <div className="text-gray-600">致力推動保險行業的發展與創新</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 媒體報導區塊 */}
      <section id="media" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-md mb-4">
              <Newspaper className="w-3 h-3 mr-1" />
              媒體報導
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                權威媒體認可
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              香港經濟日報深度專訪報導，展現Vernon在保險行業的專業地位和卓越成就。
              透過權威媒體的認可，為客戶提供更多信心保障。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mediaReports.map((report, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-red-600">
                        {report.icon}
                      </div>
                      <Badge variant="outline" className="text-xs border-red-300 text-red-600">
                        {report.type}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{report.date}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {report.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6">{report.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => window.open(report.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {report.type === 'YouTube影片' ? '觀看影片' : '閱讀文章'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Trophy className="w-6 h-6 text-red-600" />
                <span className="text-lg font-semibold text-red-800">媒體認可</span>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                <strong>香港經濟日報</strong>作為香港權威財經媒體，對Vernon的專業能力和行業貢獻給予高度認可。
                這些報導不僅展現了他的專業實力，更體現了他在保險行業的領導地位。
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://youtu.be/87ENL-d9DA0?si=xAKjEMF5AyqcHb9M', '_blank')}
              >
                <Youtube className="w-5 h-5 mr-2" />
                重點推薦：觀看經濟日報專訪
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 招聘區塊 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-md mb-4">
                  <Users className="w-3 h-3 mr-1" />
                  團隊招聘
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    加入我們的專業團隊
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  我們正在尋找有志於保險行業發展的優秀人才。如果您對保險事業充滿熱忱，
                  希望在一個專業且充滿機遇的環境中發展，歡迎加入我們的團隊。
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">優厚的薪酬和晉升機會</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-gray-700">專業培訓和持續發展</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">團隊協作和支援</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Video className="w-5 h-5 mr-2" />
                觀看招聘宣傳片
              </Button>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={aiVernonRecruit} 
                  alt="Join Our Team" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 社交媒體推薦 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Instagram className="w-8 h-8 text-pink-600" />
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-lg">
                <Camera className="w-3 h-3 mr-1" />
                Instagram推薦
              </Badge>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                強烈推薦關注！
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              有興趣了解保險行業和理財知識的朋友，請加Vernon做朋友！
              帳戶內有好多有用的專業知識分享，同時可以更加深入了解佢的個人品味和專業見解。
            </p>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl mb-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">@vernon_cheuk</div>
              <div className="text-gray-600">保險專業帳戶 • 理財知識分享 • 行業見解</div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://instagram.com/vernon_cheuk', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              關注專業帳戶
            </Button>
          </div>
        </div>
      </section>

      {/* 聯絡表格 */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-md mb-4">
              <Mail className="w-3 h-3 mr-1" />
              聯絡我們
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                預約諮詢
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              歡迎聯絡我們，讓我為您提供專業的保險規劃建議
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  聯絡資訊
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-700">主要聯絡</div>
                      <div className="text-green-600">Vernoncheuk@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">公司電郵</div>
                      <div className="text-gray-600">vernon_cheuk@manulife.com.hk</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">專業牌照</div>
                      <div className="text-gray-600">IM8724 • 強積金中介人016087</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  服務時間
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div>星期一至五：9:00 AM - 6:00 PM</div>
                  <div>星期六：9:00 AM - 1:00 PM</div>
                  <div>星期日及公眾假期：預約制</div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">發送查詢</CardTitle>
                <CardDescription>
                  請填寫以下表格，我會盡快回覆您的查詢
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電話 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="請輸入您的電話"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      電郵 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="請輸入您的電郵地址"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      查詢內容 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="請詳細描述您的查詢內容..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        發送中...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        發送查詢
                      </>
                    )}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      ✅ 查詢已成功發送！我會盡快回覆您。
                    </div>
                  )}
                  
                  {submitStatus === 'mailto' && (
                    <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
                      📧 已為您打開郵件客戶端，請確認發送。
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vernon Cheuk 卓君風
              </div>
              <p className="text-gray-300 mb-4">
                宏利保險資深區域總監，致力為客戶提供最專業的保險規劃服務，創造長期價值。
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/vernon_cheuk" target="_blank" rel="noopener noreferrer" 
                   className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-lg hover:shadow-lg transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/vernon-cheuk" target="_blank" rel="noopener noreferrer"
                   className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg hover:shadow-lg transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtu.be/87ENL-d9DA0?si=xAKjEMF5AyqcHb9M" target="_blank" rel="noopener noreferrer"
                   className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg hover:shadow-lg transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">快速連結</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">關於我</a>
                <a href="#values" className="block text-gray-300 hover:text-white transition-colors">核心理念</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">服務項目</a>
                <a href="#achievements" className="block text-gray-300 hover:text-white transition-colors">成就榮譽</a>
                <a href="#media" className="block text-gray-300 hover:text-white transition-colors">媒體報導</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">聯絡我</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Vernoncheuk@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>牌照：IM8724</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>宏利保險區域總監</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  v3.1
                </Badge>
                <Badge variant="outline" className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30">
                  <Calendar className="w-3 h-3 mr-1" />
                  更新：2025.06.26
                </Badge>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2025 Vernon Cheuk 卓君風. 版權所有.</p>
              <p className="text-sm">專業保險規劃服務 • 35年經驗</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


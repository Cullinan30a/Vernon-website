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
        console.log('Netlify failed, using mailto fallback...')
        
        // 方法3: Mailto 備用方案
        const subject = encodeURIComponent('網站查詢 - ' + formData.name)
        const body = encodeURIComponent(`
查詢內容: ${formData.message}
姓名: ${formData.name}
電話: ${formData.phone}
電郵: ${formData.email}

提交時間: ${new Date().toLocaleString('zh-HK')}
        `)
        
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
      description: "為您和家人提供全面的人壽保障，確保財務安全",
      manulifeLink: "https://www.manulife.com.hk/zh-hk/individual/products/life-insurance.html"
    },
    {
      icon: Heart,
      title: "醫療保險諮詢", 
      description: "專業醫療保險建議，保障您的健康與財富",
      manulifeLink: "https://www.manulife.com.hk/zh-hk/individual/products/health-insurance.html"
    },
    {
      icon: TrendingUp,
      title: "退休規劃",
      description: "制定適合的退休計劃，享受無憂的黃金歲月",
      manulifeLink: "https://www.manulife.com.hk/zh-hk/individual/products/retirement-planning.html"
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
                  v3.2
                </Badge>
                <Badge variant="outline" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-md">
                  <Calendar className="w-3 h-3 mr-1" />
                  2025.07.23
                </Badge>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">關於我</a>
              <a href="#values" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">核心理念</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">服務項目</a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">成就榮譽</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">職業履歷</a>
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
                <a href="#career" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">職業履歷</a>
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
              {/* 重要頭銜 - 最顯眼位置 */}
              <div className="space-y-3 mb-6">
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg text-xs sm:text-sm px-3 py-2 sm:px-4 max-w-full whitespace-normal leading-tight">
                  <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="break-words">香港人壽保險經理協會（GAMAHK）壽險行業監管與發展關注組召集人</span>
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg text-xs sm:text-sm px-3 py-2 sm:px-4 max-w-full whitespace-normal leading-tight">
                  <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="break-words font-bold">宏利香港區域總監</span>
                </Badge>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg text-xs sm:text-sm px-3 py-2 sm:px-4 max-w-full whitespace-normal leading-tight">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="break-words">GAMAHK 前會長</span>
                </Badge>
              </div>

              <div className="space-y-4">
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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://www.manulife.com.hk/zh-hk.html', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  瀏覽宏利官方網站
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
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">從草根到成功</h3>
                <p className="text-gray-700 leading-relaxed">
                  我成長於草根家庭，一家八口住在約三百呎的公屋單位。艱苦的生活環境讓我格外獨立成熟，
                  從小便立志要發奮圖強，為家人提供優渥的生活。
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">35年保險路</h3>
                <p className="text-gray-700 leading-relaxed">
                  1991年投身保險業至今已有35年，從保險代理到成為宏利保險區域總監，
                  我始終相信「多勞多得」的公平原則，以真誠待人、信守承諾為宗旨。
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">團隊領導</h3>
                <p className="text-gray-700 leading-relaxed">
                  現時領導VNITED團隊超過150人，直屬團隊有十多名經理。在短短10年間，
                  培訓出共5名分區總監，團隊多次奪得宏利平均業績獎項。看著團隊成員從入行到事業有成，
                  從單身到結婚生子，這就是我最大的滿足感。
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">行業貢獻</h3>
                <p className="text-gray-700 leading-relaxed">
                  作為2024年GAMA LAMP Asia主席，我主辦了「傳承智慧，開創未來」亞洲保險業領袖高峰會，
                  致力推動行業的發展與創新。
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={vernonPhoto} 
                alt="Vernon Cheuk Professional" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心理念 */}
      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-md mb-4">
              <Heart className="w-3 h-3 mr-1" />
              核心理念
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                服務宗旨
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">真誠待人</h3>
                <p className="text-gray-600 leading-relaxed">
                  以誠待人，建立長遠的客戶關係，無論何金多寡都一視同仁
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">追求卓越</h3>
                <p className="text-gray-600 leading-relaxed">
                  不斷提升專業知識和服務質素，為客戶提供最優質的方案
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">客戶為先</h3>
                <p className="text-gray-600 leading-relaxed">
                  以客戶利益為依歸，了解其財務狀況和實質需求，推介最合適的方案
                </p>
              </CardContent>
            </Card>
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
                專業保險服務
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              提供全方位的保險及理財規劃服務，為您和家人的未來保駕護航
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    onClick={() => window.open(service.manulifeLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* 額外服務項目 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">強積金服務</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">專業MPF投資管理建議，助您累積退休財富</p>
                <Button 
                  variant="outline" 
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://www.manulife.com.hk/zh-hk/individual/products/mpf.html', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  了解更多
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-yellow-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">子女教育基金</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">為子女教育提前規劃，確保教育資金充足</p>
                <Button 
                  variant="outline" 
                  className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://www.manulife.com.hk/zh-hk/individual/products/education-savings.html', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  了解更多
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">財富傳承</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">專業的財富管理和傳承規劃服務</p>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://www.manulife.com.hk/zh-hk/individual/products/wealth-management.html', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  了解更多
                </Button>
              </CardContent>
            </Card>
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

          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-yellow-600" />
                  專業資格及殊榮
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <Star className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">宏利保險區域總監</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <Star className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">35年保險業經驗 (1991-2025)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-gray-900">百萬圓桌會終身會員 (MDRT)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <Star className="w-6 h-6 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">國際龍獎 (IDA)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                    <Star className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-gray-900">國際優質服務獎 (IQA)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
                    <Star className="w-6 h-6 text-indigo-600" />
                    <div>
                      <div className="font-semibold text-gray-900">傑出人壽保險經理獎 (DMA)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                    <Star className="w-6 h-6 text-teal-600" />
                    <div>
                      <div className="font-semibold text-gray-900">GAMA最高管理成就獎 (MAA)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <Star className="w-6 h-6 text-orange-600" />
                    <div>
                      <div className="font-semibold text-gray-900">GAMA管理發展獎 (FLA)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                    <Star className="w-6 h-6 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">GAMA管理卓越獎 (IMA)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 職業履歷 */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 shadow-md mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              職業履歷
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                完整職業發展歷程
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* 當前重要職位 */}
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Trophy className="w-6 h-6 mr-3 text-red-600" />
                  現任重要職位
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">香港人壽保險經理協會（GAMAHK）壽險行業監管與發展關注組召集人</div>
                      <div className="text-gray-600">現任</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">宏利香港區域總監</div>
                      <div className="text-gray-600">現任</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">GAMAHK 前會長</div>
                      <div className="text-gray-600">2020年及2019年</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 職業發展時間線 */}
            <Card className="bg-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                  職業發展時間線
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2024年</div>
                      <div className="text-gray-700">香港人壽保險經理協會領袖高峰會暨榮譽獎項頒獎禮（GAMA LAMP ASIA）籌委會主席</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2023年</div>
                      <div className="text-gray-700">香港人壽保險經理協會（GAMAHK）慈善基金委員</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2021年 - 2025年</div>
                      <div className="text-gray-700">香港人壽保險經理協會（GAMAHK）行業發展常務委員會主席</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2021年 - 2022年</div>
                      <div className="text-gray-700">宏利理財策劃協會（AFP）主席</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2020年及2019年</div>
                      <div className="text-gray-700">香港人壽保險經理協會（GAMAHK）會長</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2019年</div>
                      <div className="text-gray-700">亞太壽險大會製作總監</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2018年</div>
                      <div className="text-gray-700">晉升為區域總監（RD）</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2015年</div>
                      <div className="text-gray-700">晉升為高級分區總監（SDD）</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">2012、2016、2017、2020及2022年</div>
                      <div className="text-gray-700">擔任宏利圓桌會行政委員會（RTC）主席</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">1991年</div>
                      <div className="text-gray-700">加入宏利</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 媒體報導 */}
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
              獲得香港經濟日報等權威媒體的深度報導和專業認可
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 香港經濟日報專訪 */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Newspaper className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">香港經濟日報專訪</h3>
                    <p className="text-gray-600">保險風雲人物深度報導</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900">「卓君風 真誠卓志」</h4>
                  <p className="text-gray-600 leading-relaxed">
                    香港經濟日報深度專訪，詳細報導Vernon在保險業界的成就和理念，
                    展現其從草根出身到成為區域總監的勵志故事。
                  </p>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://www.hket.com/article/3222616/%E5%8D%93%E5%90%9B%E9%A2%A8%20%E7%9C%9F%E8%AA%A0%E5%8D%93%E5%BF%97', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  閱讀完整專訪
                </Button>
              </CardContent>
            </Card>

            {/* YouTube影片特輯 */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">YouTube影片特輯</h3>
                    <p className="text-gray-600">香港經濟日報採訪影片</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                      onClick={() => window.open('https://youtu.be/87ENL-d9DA0?si=xAKjEMF5AyqcHb9M', '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      觀看採訪特輯 (第一集)
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                      onClick={() => window.open('https://youtu.be/HzF4zLYvu_c?si=issh4hYRgHo8F_JV', '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      觀看採訪特輯 (第二集)
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  深度訪談內容涵蓋Vernon的職業發展歷程、管理理念和對保險業未來的展望。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 招聘區塊 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-md mb-4">
              <Users className="w-3 h-3 mr-1" />
              加入我們
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VNITED團隊招聘
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              加入我們超過150人的專業團隊，在重情重義的環境中發展您的保險事業
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">為什麼選擇VNITED？</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">完善培訓制度</h4>
                      <p className="text-gray-600">10年間培訓出5名分區總監的成功經驗</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">重情重義文化</h4>
                      <p className="text-gray-600">關心團隊成員的事業和人生發展</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">多元發展機會</h4>
                      <p className="text-gray-600">從顧問到區域總監的完整晉升階梯</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">招聘職位</h4>
                <div className="space-y-2 text-gray-700">
                  <div>• 保險顧問</div>
                  <div>• 高級顧問</div>
                  <div>• 經理</div>
                  <div>• 高級經理</div>
                  <div>• 分區總監</div>
                  <div>• 區域總監</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={aiVernonRecruit} 
                alt="VNITED Team Recruitment" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Users className="w-5 h-5 mr-2" />
                  立即申請加入
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram推薦 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Instagram專業帳戶</h3>
                <p className="text-gray-600">@vernon_cheuk</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong className="text-purple-600">強烈推薦關注</strong> Vernon的Instagram專業帳戶，
              獲取最新的保險知識、市場分析和專業見解。
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://www.instagram.com/vernon_cheuk/', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              關注 @vernon_cheuk
            </Button>
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
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
                      <div className="text-green-600">vernoncheuk@gmail.com</div>
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
                  {/* 查詢內容放在第一項 */}
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
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vernon Cheuk 卓君風</h3>
              <p className="text-gray-400 leading-relaxed">
                宏利保險區域總監，35年專業經驗，致力為客戶提供最優質的保險及理財規劃服務。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
              <div className="space-y-2 text-gray-400">
                <div>電郵：vernoncheuk@gmail.com</div>
                <div>牌照：IM8724 • 強積金中介人016087</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">關注我們</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.open('https://www.instagram.com/vernon_cheuk/', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Vernon Cheuk 卓君風. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


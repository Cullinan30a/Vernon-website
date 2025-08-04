import { useState } from 'react';
import { Button } from './components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card.jsx';
import { Badge } from './components/ui/badge.jsx';
import { Separator } from './components/ui/separator.jsx';
import { 
  Phone, Mail, MapPin, Award, Users, TrendingUp, Shield, Heart, Star,
  ChevronRight, Menu, X, Youtube, Instagram, Linkedin, Facebook, Calendar,
  Trophy, Building, GraduationCap, Clock, Info, ExternalLink, RefreshCw,
  Sparkles, Zap, Play, Newspaper, Camera, Video, BookOpen, Globe, Target,
  CheckCircle, Briefcase, UserCheck, Lightbulb, HandHeart, Crown, Scale,
  Building2, PiggyBank, Stethoscope
} from 'lucide-react';
import './App.css';

// 圖片資源
import vernonCard from './assets/28f8e080-f726-477b-9da7-2bfbe3904f70.jpeg';
import vernonPhoto from './assets/ade6d802-4db4-43c4-a4fc-a134516d5ef1.jpeg';
import moneyFinanceMagazine from './assets/money_finance_magazine.png';
import hkSkyline from './assets/hk_skyline.jpg';
import hkFinancial from './assets/hk_financial.jpg';
import hkBusiness from './assets/hk_business.jpg';
import hkDimsum from './assets/hk_dimsum.jpg';

// 服務項目背景圖片
import lifeInsuranceBg from './assets/life_insurance_planning.jpg';
import medicalInsuranceBg from './assets/medical_insurance_consultation.jpg';
import retirementPlanningBg from './assets/retirement_planning.jpg';
import mpfServicesBg from './assets/mpf_services.jpg';
import educationFundBg from './assets/education_fund.jpg';
import wealthInheritanceBg from './assets/wealth_inheritance.jpg';
import familyOfficeBg from './assets/family_office.png';

// AI 卡通肖像
import aiVernonBusiness from './assets/vernon-business.jpg';
import aiVernonSport from './assets/vernon-sport.png';
import aiVernonMahjong from './assets/vernon-mahjong.png';
import aiVernonRecruit from './assets/vernon-recruit.png';
import imoneyPdf from './assets/iMoney風雲人物專訪6Feb2021.pdf';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showRecruitVideo, setShowRecruitVideo] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formspreeResponse = await fetch('https://formspree.io/f/xdkogqjb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          source: 'Vernon Cheuk 網站查詢'
        })
      });

      if (formspreeResponse.ok) {
        setSubmitStatus('success');
        setFormData({ message: '', name: '', phone: '', email: '' });
      } else {
        throw new Error('Formspree failed');
      }
    } catch (error) {
      try {
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
        });

        if (netlifyResponse.ok) {
          setSubmitStatus('success');
          setFormData({ message: '', name: '', phone: '', email: '' });
        } else {
          throw new Error('Netlify failed');
        }
      } catch (netlifyError) {
        const subject = encodeURIComponent('網站查詢 - ' + formData.name);
        const body = encodeURIComponent(`
查詢內容: ${formData.message}
姓名: ${formData.name}
電話: ${formData.phone}
電郵: ${formData.email}

提交時間: ${new Date().toLocaleString('zh-HK')}
        `);
        window.location.href = `mailto:vernoncheuk@gmail.com?subject=${subject}&body=${body}`;
        setSubmitStatus('mailto');
        setFormData({ message: '', name: '', phone: '', email: '' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: Shield,
      title: "人壽保險規劃",
      description: "為您和家人提供全面的人壽保障，確保財務安全",
      backgroundImage: lifeInsuranceBg
    },
    {
      icon: Heart,
      title: "醫療保險諮詢", 
      description: "專業醫療保險建議，保障您的健康與財富",
      backgroundImage: medicalInsuranceBg
    },
    {
      icon: TrendingUp,
      title: "退休規劃",
      description: "制定適合的退休計劃，享受無憂的黃金歲月",
      backgroundImage: retirementPlanningBg
    },
    {
      icon: GraduationCap,
      title: "強積金服務",
      description: "專業MPF投資管理建議，助您累積退休財富",
      backgroundImage: mpfServicesBg
    },
    {
      icon: BookOpen,
      title: "子女教育基金",
      description: "為子女教育提前規劃，確保教育資金充足",
      backgroundImage: educationFundBg
    },
    {
      icon: Trophy,
      title: "財富傳承",
      description: "專業的財富管理和傳承規劃服務",
      backgroundImage: wealthInheritanceBg
    },
    {
      icon: Building,
      title: "家族辦公室",
      description: "為高淨值家族提供全方位財富管理和傳承服務",
      backgroundImage: familyOfficeBg
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Section */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
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
                  2025.08.05
                </Badge>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">關於我</a>
              <a href="#values" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">核心理念</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">服務項目</a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">成就榮譽</a>
              <a href="#career" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">職業亮點</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">聯絡我</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>關於我</a>
                <a href="#values" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>核心理念</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>服務項目</a>
                <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>成就榮譽</a>
                <a href="#career" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>職業亮點</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>聯絡我</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Dynamic Banner */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-3 px-4 animate-pulse">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <a
              href="https://youtube.com/shorts/-taAnlA7mSQ?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-200 transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4" />
              <span className="font-semibold text-sm sm:text-base">🔥 聚焦香港保險新局 🔥</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  卓君風
                </span>
                <br />
                <span className="text-xl sm:text-2xl lg:text-4xl text-gray-700">
                  Vernon Cheuk
                </span>
              </h1>
              
              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700" style={{ backgroundColor: '#6B46C1' }}></div>
                  <div className="relative z-10 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1">宏利區域總監</h3>
                    <p className="text-purple-50 leading-relaxed text-sm truncate">帶領四個分區，領導150人高效 VNITED 團隊，服務逾10,000名客戶，續保率達90%。</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800" style={{ backgroundColor: '#2D3748' }}></div>
                  <div className="relative z-10 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1">GAMA行業發展常務委員會主席</h3>
                    <p className="text-gray-50 leading-relaxed text-sm truncate">作為前 GAMA 會長，Vernon 現任行業發展常務委員會主席，領導全球保險行業專業發展與標準提升，通過教育資源及國際網絡合作推動 GAMA 在 25 個國家內的影響力。</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" style={{ backgroundColor: '#4C51BF' }}></div>
                  <div className="relative z-10 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1">壽險行業規管與發展關注組召集人</h3>
                    <p className="text-blue-50 leading-relaxed text-sm truncate">協同各保險公司與政府保險監管局，制定前瞻性行業規範，推動壽險業透明與可持續發展。</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Vernon 憑藉自1991年起積累的35年保險行業經驗，從前線銷售精英晉升為宏利區域總監，帶領四個分區的150人高效 VNITED 團隊，服務逾10,000名客戶，續保率達90%，展現卓越的領導力與客戶信任。作為前 GAMA 會長及現任行業發展常務委員會主席，他以實戰智慧推動行業進步。今明兩年，Vernon 擔任「壽險行業規管與發展關注組召集人」，帶領各保險公司代表與政府保險監管局協作，制定前瞻性行業規範，引領壽險業邁向更透明、更具持續性的未來。他的遠見與行動力，正持續為行業樹立新標杆。
              </p>
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

      {/* About Section */}
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
                  培訓出共4名分區總監，團隊多次奪得宏利平均業績獎項。看著團隊成員從入行到事業有成，
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
                className="w-full rounded-2xl shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://www.hket.com/article/3222616/卓君風%20真誠卓志', '_blank')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <span className="text-sm font-medium text-gray-700">點擊查看專訪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 媒體報道 Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                香港經濟日報專訪
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              獲得香港經濟日報等權威媒體的深度報導和專業認可
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 左邊 PDF 卡片 */}
            <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-1 text-center">經濟周刊 PDF</h3>
              <div className="text-gray-500 text-sm mb-2">iMoney 風雲人物專訪</div>
              <a
                href={imoneyPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <img
                  src={moneyFinanceMagazine}
                  alt="Money & Finance Magazine"
                  className="rounded-xl shadow-md mb-4 w-full object-cover"
                />
              </a>
              <a
                href={imoneyPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition mb-2"
              >
                <Download className="w-4 h-4 mr-2" />
                下載專訪 PDF
              </a>
            </div>
            {/* 中間 HKET 專訪卡片 */}
            <div className="bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-pink-700 mb-1 text-center">香港經濟日報專訪</h3>
              <div className="text-gray-500 text-sm mb-4">保險風雲人物深度報導</div>
              <div className="text-gray-700 text-base mb-6 text-center">
                「卓君風 真誠卓志」<br />
                詳細報導Vernon於保險業界的成就與理念，展現其從草根出身到成為區域總監的勵志故事。
              </div>
              <a
                href="https://www.hket.com/article/3222616/%E5%8D%93%E5%90%9B%E9%A2%A8%20%E7%9C%9F%E8%AA%A0%E5%8D%93%E5%BF%97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow hover:from-pink-600 hover:to-purple-600 transition text-lg font-semibold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                閱讀完整專訪
              </a>
            </div>
            {/* 右邊 YouTube 卡片 */}
            <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-1 text-center">YouTube 保險風雲人物專訪</h3>
              <div className="text-gray-500 text-sm mb-4">香港經濟日報採訪影片</div>
              <a
                href="https://www.youtube.com/watch?v=87ENL-d9DA0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 mb-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition"
              >
                <Play className="w-4 h-4 mr-2" />
                觀看採訪特輯（第一集）
              </a>
              <a
                href="https://www.youtube.com/watch?v=HzF4zLYvu_c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition"
              >
                <Play className="w-4 h-4 mr-2" />
                觀看採訪特輯（第二集）
              </a>
              <div className="text-gray-600 text-xs text-center">
                深度訪談內容涵蓋Vernon的職業發展歷程、管理理念和對保險業未來的展望。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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

      {/* Services Section */}
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
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>
                
                <CardContent className="relative z-10 p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/30">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-md">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-md mb-4">
              <Trophy className="w-3 h-3 mr-1" />
              專業里程碑與行業領導力
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                35年來在保險業界獲得的專業認可和領導地位
              </span>
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">專業資質與榮譽</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">宏利區域總監</h4>
                  <p className="text-sm text-gray-600">領導地位認證</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">MDRT 終身會員</h4>
                  <p className="text-sm text-gray-600">百萬圓桌會</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">IDA、IQA、DMA</h4>
                  <p className="text-sm text-gray-600">國際專業認證</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">GAMA 管理類大獎</h4>
                  <p className="text-sm text-gray-600">MAA / FLA / IMA</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">軟實力與領導魅力</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">專業專注</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>• 銷售細節掌控</div>
                    <div>• 客戶心理學</div>
                    <div>• 團隊管理智慧</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">生活品味</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>• 健身愛好者</div>
                    <div>• 生活品味實踐家</div>
                    <div>• 工作生活平衡</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">團隊領導</h4>
                  <div className="space-y-2 text-gray-600">
                    <div>• 150人團隊管理</div>
                    <div>• 人才培養專家</div>
                    <div>• 重情重義文化</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 shadow-md mb-4">
              <Star className="w-3 h-3 mr-1" />
              職業亮點
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                職業亮點
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              展示在宏利保險的長期服務與晉升歷程，以及在保險行業的領導角色與貢獻
            </p>
          </div>

          <div className="space-y-12">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-blue-600" />
                  長期服務與晉升
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">1991年</div>
                    <div className="text-gray-600">加入宏利，開啟其保險行業的職業生涯。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-purple-700">2015年</div>
                    <div className="text-gray-600">晉升為<strong>高級分區總監（SDD）</strong>，彰顯其領導才能與專業知識。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">2018年</div>
                    <div className="text-gray-600">進一步晉升為<strong>區域總監（RD）</strong>，展現其在宏利內部的穩步發展與影響力。</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                  <Trophy className="w-8 h-8 mr-3 text-amber-600" />
                  行業領導角色
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-red-700">2025-2026年</div>
                    <div className="text-gray-600">擔任<strong>壽險行業規管與發展關注組召集人</strong>，在行業政策與發展方向上發揮重要作用。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">2021-2025年</div>
                    <div className="text-gray-600">連續擔任<strong>香港人壽保險經理協會（GAMAHK）行業發展常務委員會主席</strong>，體現對行業發展的長期承諾。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-yellow-700">2019年及2020年</div>
                    <div className="text-gray-600">擔任<strong>GAMAHK會長</strong>，領導香港壽險經理協會。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-purple-700">2024年</div>
                    <div className="text-gray-600">擔任<strong>GAMA LAMPASIA籌委會主席</strong>，負責領導重要的行業領袖高峰會及榮譽獎項頒獎禮。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">2023年</div>
                    <div className="text-gray-600">成為<strong>GAMAHK慈善基金委員</strong>，參與社會責任項目。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-indigo-700">2021-2022年</div>
                    <div className="text-gray-600">擔任<strong>宏利理財策劃協會（AFP）主席</strong>，推動內部領導計劃。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-pink-700">2012、2016、2017、2020、2022年</div>
                    <div className="text-gray-600">多次擔任<strong>宏利圓桌會行政委員會（RTC）主席</strong>，展現其在公司內部的持續影響力。</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-teal-700">2019年</div>
                    <div className="text-gray-600">擔任<strong>亞太壽險大會製作總監</strong>，參與國際級行業盛事。</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* JoinUs Section */}
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
                      <p className="text-gray-600">10年間培訓出4名分區總監的成功經驗</p>
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
                className="w-full rounded-2xl shadow-2xl cursor-pointer"
                onClick={() => setShowRecruitVideo(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.hash = '#contact';
                    }
                  }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  立即申請加入
                </Button>
              </div>
              {/* YouTube 影片彈窗 */}
              {showRecruitVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                  <div className="relative w-full max-w-xl aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/qbZotO5_N2s?autoplay=1"
                      title="VNITED Team Recruitment"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full rounded-xl shadow-2xl border-4 border-white"
                    />
                    <button
                      className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
                      onClick={() => setShowRecruitVideo(false)}
                      aria-label="關閉影片"
                    >
                      <X className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
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

      {/* Contact Section */}
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
                        提交查詢
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">提交成功！我們將盡快與您聯絡。</p>
                  )}
                  {submitStatus === 'mailto' && (
                    <p className="text-yellow-600 text-center">提交失敗，已啟用郵件備用方式，請檢查您的郵件客戶端。</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;


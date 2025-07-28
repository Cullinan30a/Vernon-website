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
                  v5.9
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    卓君風
                  </span>
                  <br />
                  <span className="text-3xl lg:text-4xl text-gray-700">
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

              <div className="flex flex-wrap gap-4">
                {/* 這裡已經沒有任何按鈕或連結，直接留空即可 */}
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


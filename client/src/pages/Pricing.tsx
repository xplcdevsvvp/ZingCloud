import { useState } from 'react'

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('Basic')

  const plans = [
    {
      name: 'Starter',
      tag: '',
      description: 'Starter Server',
      price: 'N/A',
      specs: [
        'Intel/AMD',
        'RAM từ 1GB',
        'SSD NVMe',
        '10Gbps port',
        'Datacenter VPN',
        'Firewall AntiDDoS Pro'
      ],
      color: 'from-red-900 to-red-800'
    },
    {
      name: 'Dedicated Server',
      tag: 'TẠI NGUYÊN ĐỘC LẬP',
      description: 'Máy chủ vật lý độc lập',
      price: '600,000',
      specs: [
        'Intel/AMD',
        'RAM DDR4/GD5',
        'SSD NVMe',
        '10Gbps port',
        'Datacenter HCM',
        'Firewall AntiDDoS Pro'
      ],
      color: 'from-amber-900 to-amber-800'
    },
    {
      name: 'Basic',
      tag: '',
      description: 'Lựa chọn cơ bản',
      price: '25,000',
      specs: [
        'Intel® Xeon® E5 2697v3',
        'RAM từ 3GB',
        'SSD NVMe',
        '10Gbps port',
        'Datacenter VNPT',
        'Firewall AntiDDoS Pro'
      ],
      color: 'from-blue-900 to-blue-800',
      featured: true
    },
    {
      name: 'Balanced',
      tag: 'BEST SELLER',
      description: 'Cân bằng hiệu năng',
      price: '60,000',
      specs: [
        'Intel® Xeon® Gold 6150',
        'RAM từ 2GB',
        'SSD NVMe',
        '10Gbps port',
        'Datacenter VNPT',
        'Firewall AntiDDoS Pro'
      ],
      color: 'from-green-900 to-green-800',
      featured: true
    },
    {
      name: 'High',
      tag: '',
      description: 'Cấu hình cao',
      price: '400',
      specs: [
        'AMD® Ryzen™',
        'RAM từ 8GB',
        'SSD NVMe',
        '10Gbps port',
        'Datacenter VNPT',
        'Firewall AntiDDoS'
      ],
      color: 'from-purple-900 to-purple-800'
    }
  ]

  return (
    <section id="bang-gia" className="py-20 bg-[#0f1419]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in">
          Chọn gói phù hợp với nhu cầu của bạn
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto fade-in" style={{animationDelay: '0.2s'}}>
          Chúng tôi mang đến những gói giá linh hoạt, phù hợp với mọi nhu cầu và ngân sách của bạn
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 stagger-item ${
                selectedPlan === plan.name
                  ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/30 scale-105'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.tag && (
                <div className={`inline-block px-3 py-1 text-xs font-bold rounded mb-2 ${
                  plan.tag === 'BEST SELLER'
                    ? 'bg-green-500/20 text-green-400 animate-pulse'
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {plan.tag}
                </div>
              )}
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {plan.price}
                {plan.price !== 'N/A' && <span className="text-sm text-gray-400"> VND</span>}
              </div>
              {plan.featured && (
                <a href="#" className="text-blue-400 text-sm hover:text-blue-300 transition-colors group">
                  Xem chi tiết <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* View all plans button */}
        <div className="text-center fade-in" style={{animationDelay: '0.5s'}}>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 transform">
            Xem Chi Tiết Gói Dịch Vụ
          </button>
        </div>
      </div>
    </section>
  )
}

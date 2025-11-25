export default function HighPerformance() {
  const specs = [
    {
      icon: '🖥️',
      title: 'CPU Server CLC',
      description: 'Intel® Xeon® Gold series và AMD® Ryzen™ 9000 series - Chip server chuyên dụng chất lượng cao với hiệu năng vượt trội'
    },
    {
      icon: '💾',
      title: 'RAM DDR4 ECC',
      description: 'Bộ nhớ DDR4 ECC (Error Correcting Code) - Tự động phát hiện và sửa lỗi, đảm bảo ổn định'
    },
    {
      icon: '⚙️',
      title: 'SSD NVMe',
      description: 'Ổ cứng SSD NVMe tốc độ cao - Truy xuất dữ liệu nhanh chóng, giảm lag tối đa'
    },
    {
      icon: '🚀',
      title: 'Port 40Gbps',
      description: 'Kết nối mạng 40Gbps với băng thông không giới hạn - Trải nghiệm mượt mà, ping thấp nhất có thể'
    }
  ]

  const features = [
    'Datacenter F7/T/C/M/NPT',
    'Bảo và RAID phân cung',
    'Nguồn điện dự phòng',
    'Giám sát phân cung 24/7'
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Phân cung chất lượng cao
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Máy chủ của chúng tôi được xây dựng trên nền tảng phần cứng enterprise hàng đầu, đảm bảo hiệu năng on định và độ tin cậy cao nhất cho mọi máy chủ.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-800 bg-[#1a1f2e]">
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-lg font-bold mb-2">{spec.title}</h3>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=300&fit=crop" 
                alt="Server Hardware" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop" 
                alt="Server Infrastructure" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Server Quality Section */}
        <div className="mt-12 p-8 rounded-lg border border-gray-800 bg-gradient-to-r from-[#1a2a4e] to-[#1a1f2e]">
          <h3 className="text-2xl font-bold mb-6">Server chất lượng cao</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

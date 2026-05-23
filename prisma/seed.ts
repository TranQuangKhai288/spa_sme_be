import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seeding...");

  // Clear existing data in reverse order of dependencies
  await prisma.appointment.deleteMany();
  await prisma.treatmentProgress.deleteMany();
  await prisma.client.deleteMany();
  await prisma.therapist.deleteMany();
  await prisma.service.deleteMany();
  await prisma.workflow.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.revenueChartItem.deleteMany();
  await prisma.spaInfo.deleteMany();
  await prisma.currentUser.deleteMany();

  console.log("Existing data cleared.");

  // 1. Seed SpaInfo
  const spa = await prisma.spaInfo.create({
    data: {
      id: "spa-001",
      name: "ZenFlow Spa",
      tagline: "Dịch vụ chăm sóc sức khỏe cao cấp",
      phone: "1900 6868",
      email: "hello@zenflow.vn",
      address: "ZenFlow Sanctuary, Suite 402, 123 Serenity Blvd, Quận 1, TP. HCM",
      hoursWeekday: "09:00 - 21:00",
      hoursWeekend: "10:00 - 20:00",
      version: "2.4.5-pro",
    },
  });
  console.log("SpaInfo seeded.");

  // 2. Seed CurrentUser
  await prisma.currentUser.create({
    data: {
      id: "admin-001",
      name: "Emma Nguyễn",
      role: "Quản lý",
      avatar: "https://i.pravatar.cc/150?img=47",
      greeting: "Good Evening",
    },
  });
  console.log("CurrentUser seeded.");

  // 3. Seed Services
  const servicesData = [
    {
      id: "svc-001",
      name: "Tinh Chất Sáng Da",
      category: "Chăm sóc da",
      duration: 60,
      price: 1500000n,
      priceUSD: 95,
      description: "Liệu trình làm sạch và phục hồi da chuyên sâu, mang lại làn da tươi sáng và mềm mịn.",
      features: ["Làm sạch sâu", "Massage mặt", "Mặt nạ dưỡng ẩm"],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
      popular: false,
      featured: false,
    },
    {
      id: "svc-002",
      name: "Hòa điệu Zen",
      category: "Dịch vụ đặc trưng",
      duration: 90,
      price: 2300000n,
      priceUSD: 145,
      description: "Trải nghiệm toàn diện kết hợp aromatherapy và đá nóng, mang lại sự thư giãn tuyệt đối.",
      features: ["Tinh dầu toàn thân", "Đá nóng", "Trà thảo dược"],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
      popular: true,
      featured: true,
    },
    {
      id: "svc-003",
      name: "Phục hồi Hoàng gia",
      category: "Cao cấp",
      duration: 120,
      price: 3100000n,
      priceUSD: 195,
      description: "Gói trị liệu đẳng cấp hoàng gia, kết hợp toàn bộ các kỹ thuật cao cấp nhất.",
      features: ["Targeted muscle release", "Body wrap & Scalp treatment", "Signature gift set"],
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
      popular: false,
      featured: false,
    },
    {
      id: "svc-004",
      name: "Thủy trị liệu",
      category: "Toàn thân",
      duration: 60,
      price: 1900000n,
      priceUSD: 120,
      description: "Liệu pháp nước chuyên sâu giúp phục hồi cơ bắp và thư giãn toàn thân.",
      features: ["Water jet therapy", "Mineral bath", "Exfoliation"],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80",
      popular: false,
      featured: false,
    },
    {
      id: "svc-005",
      name: "Laser Carbon",
      category: "Advanced",
      duration: 60,
      price: 3200000n,
      priceUSD: 200,
      description: "Công nghệ laser carbon tiên tiến giúp trẻ hóa da và thu nhỏ lỗ chân lông.",
      features: ["Lột carbon", "Trẻ hóa bằng laser", "Thu nhỏ lỗ chân lông"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
      popular: false,
      featured: false,
    },
    {
      id: "svc-006",
      name: "Massage tinh dầu",
      category: "Massage",
      duration: 90,
      price: 1800000n,
      priceUSD: 150,
      description: "Massage toàn thân với hỗn hợp tinh dầu thiên nhiên cao cấp, giải tỏa căng thẳng tức thì.",
      features: ["Massage toàn thân", "Tinh dầu cao cấp", "Giảm căng thẳng"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
      popular: false,
      featured: false,
    },
  ];

  for (const s of servicesData) {
    await prisma.service.create({ data: s });
  }
  console.log("Services seeded.");

  // 4. Seed Therapists
  const therapistsData = [
    {
      id: "t001",
      name: "Hoàng Lan",
      avatar: "https://i.pravatar.cc/150?img=47",
      specialty: "Chuyên gia chăm sóc toàn diện",
      experience: "12 năm",
      rating: 5.0,
      totalReviews: 324,
      availability: "available",
      bio: "Chuyên gia chăm sóc sức khỏe toàn diện với hơn 12 năm kinh nghiệm trong lĩnh vực spa cao cấp.",
      services: ["Detox Toàn Thân", "Hot Stone Therapy", "Aromatherapy"],
    },
    {
      id: "t002",
      name: "Linh Đan",
      avatar: "https://i.pravatar.cc/150?img=5",
      specialty: "Chuyên gia da liễu",
      experience: "8 năm",
      rating: 4.9,
      totalReviews: 218,
      availability: "available",
      bio: "Chuyên gia da liễu và điều trị da chuyên sâu, nổi tiếng với các liệu trình trẻ hóa hiệu quả.",
      services: ["Organic Facial", "Laser Carbon", "Chemical Peel"],
    },
    {
      id: "t003",
      name: "Tuấn Kiệt",
      avatar: "https://i.pravatar.cc/150?img=15",
      specialty: "Chuyên viên massage trị liệu",
      experience: "5 năm",
      rating: 4.8,
      totalReviews: 156,
      availability: "busy",
      bio: "Chuyên viên massage trị liệu, được đào tạo theo tiêu chuẩn quốc tế tại Thái Lan.",
      services: ["Deep Tissue Massage", "Neck & Shoulder Relief", "Aromatherapy"],
    },
  ];

  for (const t of therapistsData) {
    await prisma.therapist.create({ data: t });
  }
  console.log("Therapists seeded.");

  // 5. Seed Clients
  const clientsData = [
    {
      id: "c001",
      name: "Nguyễn Minh Tú",
      avatar: "https://i.pravatar.cc/150?img=47",
      tier: "Kim Cương",
      phone: "0901 234 567",
      email: "mintu@gmail.com",
      totalVisits: 48,
      totalSpent: 72500000n,
      memberPoints: 2480,
      lastVisit: "2026-05-15",
      joinDate: "2024-01-10",
      notes: "Khách VIP. Ưa thích KTV Hoàng Lan. Dị ứng tinh dầu Lavender.",
    },
    {
      id: "c002",
      name: "Trần Anh Đức",
      avatar: "https://i.pravatar.cc/150?img=12",
      tier: "Mới",
      phone: "0912 345 678",
      email: "anhduc@gmail.com",
      totalVisits: 1,
      totalSpent: 850000n,
      memberPoints: 85,
      lastVisit: "2026-05-21",
      joinDate: "2026-05-21",
      notes: "Khách mới. Lần đầu trải nghiệm.",
    },
    {
      id: "c003",
      name: "Lê Phương Anh",
      avatar: "https://i.pravatar.cc/150?img=5",
      tier: "Vàng",
      phone: "0923 456 789",
      email: "phuonganh@gmail.com",
      totalVisits: 22,
      totalSpent: 28600000n,
      memberPoints: 1430,
      lastVisit: "2026-05-21",
      joinDate: "2024-08-15",
      notes: "Da nhạy cảm. Chỉ dùng sản phẩm organic.",
    },
    {
      id: "c004",
      name: "Phạm Minh Anh",
      avatar: "https://i.pravatar.cc/150?img=9",
      tier: "Bạch Kim",
      phone: "0934 567 890",
      email: "minhanh@gmail.com",
      totalVisits: 35,
      totalSpent: 52400000n,
      memberPoints: 2620,
      lastVisit: "2026-05-18",
      joinDate: "2023-11-20",
      notes: "Đang trong liệu trình Laser Carbon. Cần nhắc nhở lịch định kỳ.",
    },
    {
      id: "c005",
      name: "Nguyễn Thùy Dung",
      avatar: "https://i.pravatar.cc/150?img=32",
      tier: "Bạc",
      phone: "0945 678 901",
      email: "thuydung@gmail.com",
      totalVisits: 14,
      totalSpent: 16800000n,
      memberPoints: 840,
      lastVisit: "2026-05-10",
      joinDate: "2025-03-01",
      notes: "Thích massage thư giãn. Hay hủy lịch phút chót.",
    },
    {
      id: "c006",
      name: "Đặng Thu Thảo",
      avatar: "https://i.pravatar.cc/150?img=20",
      tier: "Kim Cương",
      phone: "0956 789 012",
      email: "thuthao@gmail.com",
      totalVisits: 55,
      totalSpent: 89200000n,
      memberPoints: 4460,
      lastVisit: "2026-05-19",
      joinDate: "2023-06-01",
      notes: "VIP tuyệt đối. Gần hoàn thành liệu trình Da Chuyên Sâu.",
    },
  ];

  for (const c of clientsData) {
    await prisma.client.create({ data: c });
  }
  console.log("Clients seeded.");

  // 6. Seed Appointments
  const appointmentsData = [
    {
      id: "apt-001",
      clientId: "c001",
      clientName: "Nguyễn Minh Tú",
      clientTier: "Kim Cương",
      clientAvatar: "https://i.pravatar.cc/150?img=47",
      service: "Liệu trình Detox Toàn thân",
      serviceIcon: "spa",
      therapist: "Hoàng Lan",
      therapistId: "t001",
      startTime: "14:00",
      endTime: "15:30",
      date: "2026-05-21",
      status: "confirmed",
      statusLabel: "Đã xác nhận",
      price: 2500000n,
    },
    {
      id: "apt-002",
      clientId: "c002",
      clientName: "Trần Anh Đức",
      clientTier: "Mới",
      clientAvatar: "https://i.pravatar.cc/150?img=12",
      service: "Massage Cổ vai gáy",
      serviceIcon: "face",
      therapist: "Tuấn Kiệt",
      therapistId: "t003",
      startTime: "16:00",
      endTime: "17:00",
      date: "2026-05-21",
      status: "in_progress",
      statusLabel: "Đang xử lý",
      price: 850000n,
    },
    {
      id: "apt-003",
      clientId: "c003",
      clientName: "Lê Phương Anh",
      clientTier: "Vàng",
      clientAvatar: "https://i.pravatar.cc/150?img=5",
      service: "Organic Facial Treatment",
      serviceIcon: "spa",
      therapist: "Linh Đan",
      therapistId: "t002",
      startTime: "10:00",
      endTime: "10:45",
      date: "2026-05-21",
      status: "completed",
      statusLabel: "Hoàn tất",
      price: 1200000n,
    },
    {
      id: "apt-004",
      clientId: "c004",
      clientName: "Phạm Minh Anh",
      clientTier: "Bạch Kim",
      clientAvatar: "https://i.pravatar.cc/150?img=9",
      service: "Laser Carbon Trẻ Hóa",
      serviceIcon: "auto_fix_high",
      therapist: "Hoàng Lan",
      therapistId: "t001",
      startTime: "11:30",
      endTime: "12:30",
      date: "2026-05-21",
      status: "confirmed",
      statusLabel: "Đã xác nhận",
      price: 3200000n,
    },
    {
      id: "apt-005",
      clientId: "c005",
      clientName: "Nguyễn Thùy Dung",
      clientTier: "Bạc",
      clientAvatar: "https://i.pravatar.cc/150?img=32",
      service: "Aromatherapy Massage",
      serviceIcon: "self_improvement",
      therapist: "Tuấn Kiệt",
      therapistId: "t003",
      startTime: "13:00",
      endTime: "14:30",
      date: "2026-05-21",
      status: "confirmed",
      statusLabel: "Đã xác nhận",
      price: 1800000n,
    },
  ];

  for (const a of appointmentsData) {
    await prisma.appointment.create({ data: a });
  }
  console.log("Appointments seeded.");

  // 7. Seed TreatmentProgress
  const treatmentProgressData = [
    {
      id: "tp-001",
      clientId: "c003",
      clientName: "Lê Thùy Chi",
      packageName: "Gói Giảm Béo Scizer",
      totalSessions: 10,
      completedSessions: 7,
      nextDate: "26/05",
      nextTime: "15:00",
      color: "jade",
    },
    {
      id: "tp-002",
      clientId: "c004",
      clientName: "Phạm Minh Anh",
      packageName: "Laser Carbon Trẻ Hóa",
      totalSessions: 10,
      completedSessions: 3,
      nextDate: "28/05",
      nextTime: "09:30",
      color: "gold",
    },
    {
      id: "tp-003",
      clientId: "c006",
      clientName: "Đặng Thu Thảo",
      packageName: "Trị Liệu Da Chuyên Sâu",
      totalSessions: 10,
      completedSessions: 9,
      nextDate: "24/05",
      nextTime: "17:30",
      color: "jade",
    },
  ];

  for (const tp of treatmentProgressData) {
    await prisma.treatmentProgress.create({ data: tp });
  }
  console.log("TreatmentProgress seeded.");

  // 8. Seed Workflows
  const workflowsData = [
    {
      id: "wf-001",
      name: "Nhắc lịch hẹn tự động",
      trigger: "1 ngày trước lịch hẹn",
      filter: "Confirmed",
      actions: [
        {
          type: "SMS",
          label: "Nhắc lịch tự động",
          channel: "SMS Brandname",
          icon: "sms",
        },
        {
          type: "Zalo",
          label: "Gửi ưu đãi đi kèm",
          channel: "Zalo Official Account",
          icon: "chat",
        },
      ],
      active: true,
      totalSent: 842,
    },
    {
      id: "wf-002",
      name: "Chào mừng khách mới",
      trigger: "Sau lần đặt lịch đầu tiên",
      filter: "New Client",
      actions: [
        {
          type: "Email",
          label: "Email chào mừng",
          channel: "Email Marketing",
          icon: "mail",
        },
        {
          type: "Voucher",
          label: "Tặng voucher 10%",
          channel: "Hệ thống",
          icon: "card_giftcard",
        },
      ],
      active: true,
      totalSent: 156,
    },
  ];

  for (const w of workflowsData) {
    await prisma.workflow.create({ data: w });
  }
  console.log("Workflows seeded.");

  // 9. Seed Notifications
  const notificationsData = [
    {
      id: "notif-001",
      type: "reminder",
      title: "Nhắc nhở hủy lịch",
      message: "Nguyễn Thùy Dung chưa xác nhận lịch hẹn 17:00 hôm nay",
      time: "30 phút trước",
      read: false,
      priority: "high",
    },
    {
      id: "notif-002",
      type: "success",
      title: "Check-in thành công",
      message: "Lê Phương Anh đã check-in lúc 09:58",
      time: "2 giờ trước",
      read: false,
      priority: "normal",
    },
    {
      id: "notif-003",
      type: "info",
      title: "Hoàn thành liệu trình",
      message: "Đặng Thu Thảo còn 1 buổi cuối liệu trình Da Chuyên Sâu",
      time: "3 giờ trước",
      read: true,
      priority: "normal",
    },
    {
      id: "notif-004",
      type: "warning",
      title: "Nhắc nhở sản phẩm",
      message: "Tinh dầu Lavender sắp hết hàng (còn 2 chai)",
      time: "5 giờ trước",
      read: true,
      priority: "medium",
    },
  ];

  for (const n of notificationsData) {
    await prisma.notification.create({ data: n });
  }
  console.log("Notifications seeded.");

  // 10. Seed RevenueChart
  const revenueChartData = [
    { day: "T2", amount: 18500000n },
    { day: "T3", amount: 22100000n },
    { day: "T4", amount: 19800000n },
    { day: "T5", amount: 26400000n },
    { day: "T6", amount: 31200000n },
    { day: "T7", amount: 35600000n },
    { day: "CN", amount: 24500000n },
  ];

  for (const rc of revenueChartData) {
    await prisma.revenueChartItem.create({ data: rc });
  }
  console.log("RevenueChart seeded.");

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

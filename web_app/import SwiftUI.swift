import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            ZStack {
                Color.white
                    .edgesIgnoringSafeArea(.all)
                VStack(spacing: 0) {
                    // Sticky Header
                    VStack(spacing: 0) {
                        // Status Bar
                        HStack {
                            Text("")
                                .font(.system(size: 18, weight: .semibold))
                                .foregroundColor(.black)
                            Spacer()
                        }
                        .padding(.horizontal, 16)
                        .padding(.top, 8)
                        .padding(.bottom, 4)
                        
                        // Icon Bar
                        HStack {
                            Button(action: {}) {
                                Image(systemName: "line.3.horizontal")
                                    .font(.system(size: 28, weight: .regular))
                                    .foregroundColor(Color(hex: "#1f5661"))
                                    .frame(width: 24, height: 24)
                            }
                            Spacer()
                            Image(systemName: "bell.badge")
                                .font(.system(size: 32, weight: .regular))
                                .foregroundColor(Color(hex: "#1f5661"))
                                .shadow(radius: 4)
                                .frame(width: 24, height: 24)
                        }
                        .padding(.horizontal, 24)
                        .padding(.vertical, 16)
                        
                        // Prompt Bar
                        HStack {
                            Button(action: {}) {
                                HStack(spacing: 8) {
                                    Text("Get help from your digital twin")
                                        .font(.system(size: 15, weight: .regular))
                                        .foregroundColor(Color(hex: "#1f5661"))
                                    Image(systemName: "arrow.right")
                                        .font(.system(size: 24, weight: .regular))
                                        .foregroundColor(Color(hex: "#1f5661"))
                                }
                                .padding(.vertical, 16)
                                .padding(.horizontal, 24)
                                .background(Color.white)
                                .cornerRadius(32)
                                .shadow(color: Color.black.opacity(0.03), radius: 2, x: 0, y: 1)
                            }
                        }
                        .padding(.horizontal, 32)
                        .padding(.bottom, 24)
                    }
                    .background(Color(hex: "#69f0f0"))
                    .clipShape(RoundedCorner(radius: 32, corners: [.bottomLeft, .bottomRight]))
                    .shadow(color: Color.black.opacity(0.08), radius: 8, x: 0, y: 4)
                    
                    // Main Content
                    ScrollView(.vertical, showsIndicators: false) {
                        VStack(alignment: .leading, spacing: 24) {
                            // Hero Horizontal Scroll Section
                            ScrollView(.horizontal, showsIndicators: false) {
                                HStack(spacing: 24) {
                                    GoalCardView(
                                        imageName: "swimmer",
                                        title: "Perimenopause tracking",
                                        subtitle: "8 weeks • Day 15 • 35-45 min pw"
                                    )
                                    GoalCardView(
                                        imageName: "yoga",
                                        title: "Yoga and Pilates",
                                        subtitle: "8 weeks • Day 15 • 35-45 min pw"
                                    )
                                    GoalCardView(
                                        imageName: "food",
                                        title: "Yoga and Pilates",
                                        subtitle: "8 weeks • Day 15 • 35-45 min pw"
                                    )
                                }
                                .padding(.horizontal, 16)
                                .padding(.vertical, 8)
                            }
                            // ... Add more content here as needed
                        }
                        .padding(.top, 16)
                        .padding(.bottom, 64)
                    }
                }
            }
            .navigationBarHidden(true)
        }
    }
}

struct GoalCardView: View {
    var imageName: String
    var title: String
    var subtitle: String
    
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            ZStack {
                if let uiImage = UIImage(named: imageName) {
                    Image(uiImage: uiImage)
                        .resizable()
                        .scaledToFill()
                        .frame(width: 345, height: 170)
                        .clipped()
                } else {
                    Rectangle()
                        .fill(Color.gray.opacity(0.2))
                        .frame(width: 345, height: 170)
                }
            }
            .cornerRadius(12, corners: [.topLeft, .topRight])
            .frame(width: 345, height: 170)
            VStack(alignment: .leading, spacing: 4) {
                HStack(alignment: .top) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(title)
                            .font(.system(size: 20, weight: .medium))
                            .foregroundColor(Color(hex: "#1f5661"))
                        Text(subtitle)
                            .font(.system(size: 14, weight: .regular))
                            .foregroundColor(Color(hex: "#1f5661").opacity(0.6))
                    }
                    Spacer()
                    Button(action: {}) {
                        Image(systemName: "ellipsis")
                            .rotationEffect(.degrees(90))
                            .foregroundColor(Color.gray)
                            .frame(width: 24, height: 24)
                    }
                }
            }
            .padding(.horizontal, 18)
            .padding(.vertical, 12)
        }
        .background(Color.white)
        .cornerRadius(16)
        .shadow(color: Color.black.opacity(0.08), radius: 6, x: 0, y: 2)
        .frame(width: 345)
    }
}

// MARK: - Helpers

struct RoundedCorner: Shape {
    var radius: CGFloat = 16.0
    var corners: UIRectCorner = .allCorners

    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(
            roundedRect: rect,
            byRoundingCorners: corners,
            cornerRadii: CGSize(width: radius, height: radius)
        )
        return Path(path.cgPath)
    }
}

extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue:  Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}


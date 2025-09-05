import SwiftUI

enum AppColors {
    static let textPrimary = Color(hex: "#1f5661")
    static let textSecondary = Color(hex: "#1f566199")
    static let primary = Color(hex: "#69f0f0")
    static let primaryDark = Color(hex: "#27cccc")
    static let background = Color.white
    static let error = Color(hex: "#d32f2f")
}

extension Color {
    init(hex: String) {
        var hexString = hex
        if hexString.hasPrefix("#") { hexString.removeFirst() }
        if hexString.count == 8 {
            // ARGB or RGBA with alpha; handle RGBA (#RRGGBBAA)
            let scanner = Scanner(string: hexString)
            var rgba: UInt64 = 0
            scanner.scanHexInt64(&rgba)
            let r = Double((rgba & 0xFF000000) >> 24) / 255.0
            let g = Double((rgba & 0x00FF0000) >> 16) / 255.0
            let b = Double((rgba & 0x0000FF00) >> 8) / 255.0
            let a = Double(rgba & 0x000000FF) / 255.0
            self = Color(red: r, green: g, blue: b, opacity: a)
            return
        }
        let scanner = Scanner(string: hexString)
        var rgb: UInt64 = 0
        scanner.scanHexInt64(&rgb)
        let r = Double((rgb & 0xFF0000) >> 16) / 255.0
        let g = Double((rgb & 0x00FF00) >> 8) / 255.0
        let b = Double(rgb & 0x0000FF) / 255.0
        self = Color(red: r, green: g, blue: b)
    }
}

enum AppFonts {
    static func nunito(_ size: CGFloat, weight: Font.Weight = .regular) -> Font {
        let fontName: String
        switch weight {
        case .bold:
            fontName = "NunitoSans-Bold"
        case .medium:
            fontName = "NunitoSans-Medium"
        default:
            fontName = "NunitoSans-Regular"
        }
        return .custom(fontName, size: size)
    }
}



import SwiftUI

struct HeaderView: View {
    var body: some View {
        VStack(spacing: 0) {
            // Status Bar with Blue Background
            Rectangle()
                .fill(AppColors.primary)
                .frame(height: 44)
                .padding(.vertical, 8) // Figma: py-2 (8px)
            
            // Icon Bar (Hamburger + Avatar)
            HStack {
                Image(systemName: "line.3.horizontal")
                    .font(.system(size: 20, weight: .semibold))
                    .foregroundStyle(AppColors.textPrimary)
                Spacer()
                ZStack {
                    Circle()
                        .fill(AppColors.primaryDark)
                        .frame(height: 28)
                        .frame(width: 28)
                    Image(systemName: "person.fill")
                        .font(.system(size: 14))
                        .foregroundStyle(.white)
                }
            }
            .padding(.vertical, 16) // Figma: py-4 (16px vertical only)
            .padding(.horizontal, 16) // Keep horizontal padding for content spacing
            
            // Prompt Bar (Button)
            Button {
            } label: {
                HStack(spacing: 8) {
                    Text("Get help from your digital twin")
                        .font(AppFonts.nunito(14, weight: .regular))
                        .foregroundStyle(AppColors.textPrimary)
                        .tracking(0.4) // Figma: tracking-[0.4px]
                    Image(systemName: "chevron.right")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(AppColors.textPrimary)
                }
                .padding(.horizontal, 22) // Figma: px-[22px]
                .padding(.vertical, 16) // Figma: py-4 (16px)
                .frame(maxWidth: .infinity)
                .background(AppColors.background)
                .clipShape(RoundedRectangle(cornerRadius: 32))
            }
            .buttonStyle(.plain)
            .padding(.horizontal, 24) // Figma: px-6 (24px)
            .padding(.top, 8) // Figma: pt-2 (8px)
            .padding(.bottom, 24) // Figma: pb-6 (24px)
        }
        .background(AppColors.primary)
        .clipShape(RoundedRectangle(cornerRadius: 32))
        .shadow(color: .black.opacity(0.15), radius: 12, y: 0) // Figma: shadow-[0px_0px_12px_0px_rgba(0,0,0,0.15)]
        .ignoresSafeArea(.all, edges: .top)
    }
}

struct HeroCard: Identifiable {
    let id = UUID()
    let title: String
    let subtitle: String
    let url: String?
}

struct Card01: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            // Background image with exact Figma positioning
            Image("help") // Using help image as placeholder for the specific image
                .resizable()
                .scaledToFill()
                .frame(width: 345, height: 170) // Exact Figma dimensions: 345/170 aspect ratio
                .clipped()
            
            // Content section with exact Figma padding
            VStack(alignment: .leading, spacing: 0) {
                HStack(spacing: 10) { // 10px gap (2.5 * 4) - exact Figma spacing
                    VStack(alignment: .leading, spacing: 4) { // 4px gap (1 * 4) - exact Figma spacing
                        Text("Perimenopause tracking")
                            .font(AppFonts.nunito(20, weight: .medium))
                            .foregroundStyle(AppColors.textPrimary)
                            .tracking(0.25) // Exact Figma tracking
                        Text("8 weeks • Day 15 • 35-45 min pw")
                            .font(AppFonts.nunito(14, weight: .medium))
                            .foregroundStyle(AppColors.textPrimary.opacity(0.6))
                            .tracking(0.1) // Exact Figma tracking
                    }
                    
                    Spacer()
                    
                    // Three-dot menu icon
                    Button {
                        // Action for menu
                    } label: {
                        Image(systemName: "ellipsis")
                            .font(.system(size: 16, weight: .medium))
                            .foregroundStyle(AppColors.textPrimary)
                            .frame(width: 24, height: 24)
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(.horizontal, 24) // 24px horizontal padding (6 * 4) - exact Figma spacing
            .padding(.vertical, 8) // 8px vertical padding (2 * 4) - exact Figma spacing
            .padding(.bottom, 16) // 16px bottom padding (4 * 4) - exact Figma spacing
        }
        .background(AppColors.background)
        .clipShape(RoundedRectangle(cornerRadius: 8))
        .overlay(
            RoundedRectangle(cornerRadius: 8)
                .stroke(AppColors.textPrimary.opacity(0.15), lineWidth: 1)
        )
        .shadow(color: .black.opacity(0.15), radius: 4, y: 0) // Exact Figma shadow
        .frame(width: 345) // Exact Figma width
    }
}

struct HeroScroller: View {
    let cards: [HeroCard]
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 24) { // 24px gap (6 * 4) - exact Figma spacing
                ForEach(cards) { card in
                    VStack(alignment: .leading, spacing: 0) {
                        // Image container with aspect ratio matching Figma design
                        ZStack {
                            if let imageUrl = card.url {
                                AsyncImage(url: URL(string: imageUrl)) { image in
                                    image
                                        .resizable()
                                        .aspectRatio(contentMode: .fill)
                                } placeholder: {
                                    Rectangle()
                                        .fill(Color(.systemGray5))
                                }
                            } else {
                                Rectangle()
                                    .fill(Color(.systemGray5))
                            }
                        }
                        .frame(width: 345, height: 170) // Exact Figma dimensions: 345/170 aspect ratio
                        .clipped()
                        
                        // Content section with exact Figma padding
                        VStack(alignment: .leading, spacing: 0) {
                            HStack(spacing: 10) { // 10px gap (2.5 * 4) - exact Figma spacing
                                VStack(alignment: .leading, spacing: 12) { // 12px gap (3 * 4) - exact Figma spacing
                                    VStack(alignment: .leading, spacing: 0) {
                                        Text(card.title)
                                            .font(AppFonts.nunito(20, weight: .medium))
                                            .foregroundStyle(AppColors.textPrimary)
                                            .tracking(0.25) // Exact Figma tracking
                                            .lineLimit(1)
                                    }
                                    .padding(.bottom, 4) // 4px bottom padding - exact Figma spacing
                                    
                                    Text(card.subtitle)
                                        .font(AppFonts.nunito(14, weight: .medium))
                                        .foregroundStyle(AppColors.textPrimary.opacity(0.6))
                                        .tracking(0.1) // Exact Figma tracking
                                        .lineLimit(1)
                                }
                                
                                Spacer(minLength: 0)
                                
                                // More options button (3 dots) - exact Figma design
                                Button {
                                    // More options action
                                } label: {
                                    // Custom ellipsis icon matching Figma design
                                    ZStack {
                                        // Top dot
                                        Circle()
                                            .fill(AppColors.textPrimary)
                                            .frame(width: 3, height: 3)
                                            .offset(y: -6)
                                        
                                        // Middle dot
                                        Circle()
                                            .fill(AppColors.textPrimary)
                                            .frame(width: 3, height: 3)
                                        
                                        // Bottom dot
                                        Circle()
                                            .fill(AppColors.textPrimary)
                                            .frame(width: 3, height: 3)
                                            .offset(y: 6)
                                    }
                                    .frame(width: 24, height: 24)
                                }
                                .buttonStyle(.plain)
                            }
                        }
                        .padding(.leading, 24) // 24px left (6 * 4) - exact Figma padding
                        .padding(.trailing, 12) // 12px right (3 * 4) - exact Figma padding
                        .padding(.top, 8) // 8px top (2 * 4) - exact Figma padding
                        .padding(.bottom, 16) // 16px bottom (4 * 4) - exact Figma padding
                    }
                    .frame(width: 345) // Exact Figma width
                    .background(AppColors.background)
                    .clipShape(RoundedRectangle(cornerRadius: 8)) // Exact Figma radius
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(AppColors.textPrimary.opacity(0.15), lineWidth: 1) // Exact Figma border
                    )
                    .shadow(color: .black.opacity(0.15), radius: 4, y: 0) // Exact Figma shadow
                }
                }
                .padding(.horizontal)
            }
        }
    }

struct TodayTile: Identifiable {
    let id = UUID()
    let title: String
    let detail: String
    let time: String
    let timeUnit: String
    let timeColor: Color
    let imageUrl: String
    let iconUrls: [String]
}

struct TodayScroller: View {
    let tiles: [TodayTile]
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 24) { // 24px gap - exact Figma spacing
                ForEach(tiles) { tile in
                    VStack(alignment: .leading, spacing: 0) {
                        // Top section: Title + divider + icons
                        VStack(alignment: .leading, spacing: 8) { // 8px gap - exact Figma spacing
                            Text(tile.title)
                                .font(AppFonts.nunito(14, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                                .tracking(0.15) // Exact Figma tracking
                                .lineLimit(1)
                            
                            // Divider line - using SVG from Figma
                            AsyncImage(url: URL(string: RemoteAssets.todayDivider)) { image in
                                image
                                    .resizable()
                                    .aspectRatio(contentMode: .fit)
                                    .frame(height: 1)
                            } placeholder: {
                                Rectangle()
                                    .fill(AppColors.primaryDark)
                                    .frame(height: 1)
                            }
                            
                            // Icons - using SVGs from Figma
                            HStack(spacing: 4) {
                                ForEach(tile.iconUrls, id: \.self) { iconUrl in
                                    AsyncImage(url: URL(string: iconUrl)) { image in
                                        image
                                            .resizable()
                                            .aspectRatio(contentMode: .fit)
                                            .frame(width: 9.618, height: 9.618) // Exact Figma icon size
                                    } placeholder: {
                                        Circle()
                                            .fill(AppColors.primaryDark)
                                            .frame(width: 9.618, height: 9.618)
                                    }
                                }
                            }
                            .frame(maxWidth: .infinity, alignment: .trailing)
                        }
                        
                        Spacer(minLength: 0)
                        
                        // Main image - using Figma image URL
                        AsyncImage(url: URL(string: tile.imageUrl)) { image in
                            image
                                .resizable()
                                .aspectRatio(contentMode: .fill)
                                .frame(maxWidth: .infinity, maxHeight: .infinity)
                                .clipped()
                        } placeholder: {
                            Rectangle()
                                .fill(Color(.systemGray5))
                                .frame(maxWidth: .infinity, maxHeight: .infinity)
                        }
                        
                        // Bottom section: Time + detail
                        VStack(alignment: .leading, spacing: 4) {
                            HStack(alignment: .bottom, spacing: 0) {
                                Text(tile.time)
                                    .font(AppFonts.nunito(20, weight: .medium))
                                    .foregroundStyle(AppColors.textPrimary)
                                    .tracking(0.25) // Exact Figma tracking
                                
                                Text(tile.timeUnit)
                                    .font(AppFonts.nunito(12.9, weight: .medium))
                                    .foregroundStyle(tile.timeColor)
                                    .tracking(0.25) // Exact Figma tracking
                                    .padding(.leading, 2)
                            }
                            
                            Text(tile.detail)
                                .font(AppFonts.nunito(14, weight: .regular))
                                .foregroundStyle(AppColors.textPrimary)
                                .tracking(0.17) // Exact Figma tracking
                                .lineLimit(1)
                        }
                    }
                    .padding(10) // Exact Figma padding
                    .frame(width: 153, height: 238) // Exact Figma dimensions
                    .background(AppColors.background)
                    .clipShape(RoundedRectangle(cornerRadius: 8)) // Exact Figma radius
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(AppColors.textPrimary.opacity(0.15), lineWidth: 1) // Exact Figma border
                    )
                }
            }
            .padding(.horizontal)
        }
    }
}

struct SuggestionCard: Identifiable {
    let id = UUID()
    let image: String?
    let title: String
    let description: String
    let reviews: String
    let users: String
}

struct SuggestionList: View {
    let cards: [SuggestionCard]
    var body: some View {
        VStack(spacing: 12) {
            ForEach(cards) { card in
                VStack(spacing: 0) {
                    // Header Section
                    HStack(alignment: .top, spacing: 8) {
                        if let imageName = card.image {
                            Image(imageName)
                                .resizable()
                                .scaledToFill()
                                .frame(width: 71.718, height: 74.341)
                                .clipped()
                                .clipShape(RoundedRectangle(cornerRadius: 8))
                        } else {
                            Rectangle().fill(Color(.systemGray5))
                                .frame(width: 71.718, height: 74.341)
                                .clipped()
                                .clipShape(RoundedRectangle(cornerRadius: 8))
                        }

                        VStack(alignment: .leading, spacing: 4) {
                            Text(card.title)
                                .font(AppFonts.nunito(20, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                                .tracking(0.25)
                            
                            // Rating and Reviews
                            HStack(spacing: 4) {
                                // 5 Star Rating
                                HStack(spacing: 2) {
                                    ForEach(0..<4) { _ in
                                        Image(systemName: "star.fill")
                                            .font(.system(size: 18))
                                            .foregroundStyle(AppColors.primaryDark)
                                    }
                                    // Half star
                                    ZStack {
                                        Image(systemName: "star.lefthalf.filled")
                                            .font(.system(size: 18))
                                            .foregroundStyle(AppColors.primaryDark)
                                    }
                                }
                                
                                Text("145 reviews")
                                    .font(AppFonts.nunito(14, weight: .medium))
                                    .foregroundStyle(AppColors.textPrimary.opacity(0.6))
                                    .tracking(0.1)
                            }
                            
                            Text("Used by 1024 people")
                                .font(AppFonts.nunito(14, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary.opacity(0.6))
                                .tracking(0.1)
                        }
                        
                        Spacer(minLength: 0)
                        
                        // More options button
                        Button {
                            // More options action
                        } label: {
                            Image(systemName: "ellipsis")
                                .font(.system(size: 16, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                                .frame(width: 24, height: 24)
                        }
                        .buttonStyle(.plain)
                    }
                    .padding(.horizontal, 16)
                    .padding(.top, 8)
                    .padding(.bottom, 16)
                    
                    // Divider
                    Rectangle()
                        .fill(AppColors.primaryDark)
                        .frame(height: 1)
                        .padding(.horizontal, 16)
                    
                    // Description Section
                    VStack(alignment: .leading, spacing: 8) {
                        Text(card.description)
                            .font(AppFonts.nunito(14, weight: .regular))
                            .foregroundStyle(AppColors.textPrimary)
                            .tracking(0.17)
                            .lineLimit(nil)
                            .multilineTextAlignment(.leading)
                    }
                    .padding(.horizontal, 16)
                    .padding(.top, 8)
                    .padding(.bottom, 16)
                }
                .background(AppColors.background)
                .clipShape(RoundedRectangle(cornerRadius: 8))
                .overlay(
                    RoundedRectangle(cornerRadius: 8)
                        .stroke(AppColors.textPrimary.opacity(0.15), lineWidth: 1)
                )
                .shadow(color: .black.opacity(0.15), radius: 4, y: 1)
            }
        }
        .padding(.horizontal)
    }
}

struct BottomDock: View {
    @State private var selectedTab = 0
    
    var body: some View {
        VStack(spacing: 0) {
            // Main Tab Bar
            HStack(spacing: 0) {
                // Home Tab
                Button {
                    selectedTab = 0
                } label: {
                    VStack(spacing: 4) {
                        Image(systemName: selectedTab == 0 ? "square.grid.2x2.fill" : "square.grid.2x2")
                            .font(.system(size: 20, weight: .medium))
                        Text("Home")
                            .font(AppFonts.nunito(12, weight: .medium))
                    }
                    .foregroundStyle(selectedTab == 0 ? AppColors.primaryDark : AppColors.textPrimary)
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(.plain)
                
                // Goals Tab
                Button {
                    selectedTab = 1
                } label: {
                    VStack(spacing: 4) {
                        Image(systemName: selectedTab == 1 ? "target.fill" : "target")
                            .font(.system(size: 20, weight: .medium))
                        Text("Goals")
                            .font(AppFonts.nunito(12, weight: .medium))
                    }
                    .foregroundStyle(selectedTab == 1 ? AppColors.primaryDark : AppColors.textPrimary)
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(.plain)
                
                // Progress Tab
                Button {
                    selectedTab = 2
                } label: {
                    VStack(spacing: 4) {
                        Image(systemName: selectedTab == 2 ? "chart.bar.fill" : "chart.bar")
                            .font(.system(size: 20, weight: .medium))
                        Text("Progress")
                            .font(AppFonts.nunito(12, weight: .medium))
                    }
                    .foregroundStyle(selectedTab == 2 ? AppColors.primaryDark : AppColors.textPrimary)
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(.plain)
                
                // Heart Tab
                Button {
                    selectedTab = 3
                } label: {
                    VStack(spacing: 4) {
                        Image(systemName: selectedTab == 3 ? "heart.fill" : "heart")
                            .font(.system(size: 20, weight: .medium))
                        Text("Heart")
                            .font(AppFonts.nunito(12, weight: .medium))
                    }
                    .foregroundStyle(selectedTab == 3 ? AppColors.primaryDark : AppColors.textPrimary)
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(.plain)
                
                // Profile Tab
                Button {
                    selectedTab = 4
                } label: {
                    VStack(spacing: 4) {
                        Image(systemName: selectedTab == 4 ? "person.fill" : "person")
                            .font(.system(size: 20, weight: .medium))
                        Text("Profile")
                            .font(AppFonts.nunito(12, weight: .medium))
                    }
                    .foregroundStyle(selectedTab == 4 ? AppColors.primaryDark : AppColors.textPrimary)
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(.plain)
            }
            .padding(.vertical, 12)
            .padding(.horizontal, 16)
            
            // Bottom Safe Area Extension
            Rectangle()
                .fill(AppColors.primary)
                .frame(height: 32) // 32px bottom padding
        }
        .background(AppColors.primary)
        .ignoresSafeArea(.all, edges: .bottom)
    }
}

// MARK: - Preview Providers
struct HomeViews_Previews: PreviewProvider {
    static var previews: some View {
        VStack(spacing: 20) {
            // Header Preview
            HeaderView()
                .frame(height: 200)
            
            // Hero Scroller Preview
            HeroScroller(cards: [
                HeroCard(title: "Sample Title", subtitle: "Sample Subtitle", url: nil),
                HeroCard(title: "Another Title", subtitle: "Another Subtitle", url: nil)
            ])
            .frame(height: 250)
            
            // Today Scroller Preview
            TodayScroller(tiles: [
                TodayTile(
                    title: "Meditation",
                    detail: "15 min relaxation",
                    time: "20.30",
                    timeUnit: "am",
                    timeColor: AppColors.textPrimary,
                    imageUrl: RemoteAssets.todayMeditation,
                    iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                ),
                TodayTile(
                    title: "Perimenapause",
                    detail: "Check weekly levels",
                    time: "567",
                    timeUnit: "High",
                    timeColor: AppColors.textPrimary,
                    imageUrl: RemoteAssets.todayMeditation,
                    iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                ),
                TodayTile(
                    title: "Meditation",
                    detail: "15 min relaxation",
                    time: "567",
                    timeUnit: "High",
                    timeColor: AppColors.textPrimary,
                    imageUrl: RemoteAssets.todayMeditation,
                    iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                ),
                TodayTile(
                    title: "Meditation",
                    detail: "15 min relaxation",
                    time: "20.30",
                    timeUnit: "am",
                    timeColor: AppColors.textPrimary,
                    imageUrl: RemoteAssets.todayMeditation,
                    iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                ),
                TodayTile(
                    title: "Meditation",
                    detail: "15 min relaxation",
                    time: "20.30",
                    timeUnit: "am",
                    timeColor: AppColors.textPrimary,
                    imageUrl: RemoteAssets.todayMeditation,
                    iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                ),
                
            ])
            .frame(height: 250)
            
            // Card 01 Preview
            Card01()
                .frame(height: 250)
            
            // Suggestion List Preview
            SuggestionList(cards: [
                SuggestionCard(image: nil, title: "Sample Suggestion", description: "This is a sample suggestion card with some description text.", reviews: "145 reviews", users: "Used by 1024 people")
            ])
            
            // Bottom Dock Preview
            BottomDock()
                .frame(height: 100)
        }
        .padding()
        .background(Color(.systemGroupedBackground))
        .previewLayout(.sizeThatFits)
        .previewDisplayName("All Components")
    }
}

// Individual Component Previews
struct HeaderView_Previews: PreviewProvider {
    static var previews: some View {
        HeaderView()
            .previewLayout(.sizeThatFits)
            .padding()
            .background(Color(.systemGroupedBackground))
            .previewDisplayName("Header Only")
    }
}

struct Card01_Previews: PreviewProvider {
    static var previews: some View {
        Card01()
            .previewLayout(.sizeThatFits)
            .padding()
            .background(Color(.systemGroupedBackground))
            .previewDisplayName("Card 01")
    }
}


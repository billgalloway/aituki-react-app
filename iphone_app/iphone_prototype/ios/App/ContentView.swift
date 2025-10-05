import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack(alignment: .bottom) {
            // Main Content Area
            VStack(spacing: 0) {
                // Fixed Header at Top
                HeaderView()
                    .zIndex(1)
                
                // Scrollable Content
                ScrollView {
                    VStack(spacing: 0) {
                        HeroScroller(cards: [
                            .init(title: "Perimenopause tracking", subtitle: "8 weeks • Day 15  • 35-45 min pw", url: RemoteAssets.hero1),
                            .init(title: "Yoga and Pilates", subtitle: "8 weeks • Day 15  • 35-45 min pw", url: RemoteAssets.hero2),
                            .init(title: "Mindfulness or meditation", subtitle: "8 weeks • Day 15  • 35-45 min pw", url: RemoteAssets.hero3),
                            .init(title: "Meal planning & Mindful eating", subtitle: "8 weeks • Day 15  • 35-45 min pw", url: RemoteAssets.hero4),
                            .init(title: "Sleep routine", subtitle: "8 weeks • Day 15  • 35-45 min pw", url: RemoteAssets.hero5),
                            .init(title: "Symptom tracking", subtitle: "8 weeks • Day 15  • 35-45 min pw", url: RemoteAssets.hero6)
                        ])

                        TodayScroller(tiles: [
                            .init(
                                title: "Meditation",
                                detail: "15 min relaxation",
                                time: "20.30",
                                timeUnit: "am",
                                timeColor: AppColors.textPrimary,
                                imageUrl: RemoteAssets.todayMeditation,
                                iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                            ),
                            .init(
                                title: "Perimenapause",
                                detail: "Check weekly levels",
                                time: "567",
                                timeUnit: "High",
                                timeColor: Color.red,
                                imageUrl: RemoteAssets.todayPerimenopause,
                                iconUrls: [RemoteAssets.todayIcon3]
                            ),
                            .init(
                                title: "Diet",
                                detail: "20 min cycling",
                                time: "12.30",
                                timeUnit: "am",
                                timeColor: AppColors.textPrimary,
                                imageUrl: RemoteAssets.todayDiet,
                                iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                            ),
                            .init(
                                title: "Adaptogen therapy",
                                detail: "Reushi mushroom",
                                time: "8.30",
                                timeUnit: "am",
                                timeColor: AppColors.textPrimary,
                                imageUrl: RemoteAssets.todayAdaptogen,
                                iconUrls: [RemoteAssets.todayIcon1]
                            ),
                            .init(
                                title: "Exercise",
                                detail: "20 min cycling",
                                time: "12.30",
                                timeUnit: "am",
                                timeColor: AppColors.textPrimary,
                                imageUrl: RemoteAssets.todayExercise,
                                iconUrls: [RemoteAssets.todayIcon1, RemoteAssets.todayIcon2]
                            )
                        ])
                        .padding(.top, 8)
                        
                        // Figma Button Component - "Create a new goal" (under today horizontal scroll)
                        Button {
                            // Create new goal action
                        } label: {
                            HStack(spacing: 8) {
                                Text("Create a new goal")
                                    .font(AppFonts.nunito(14, weight: .regular))
                                    .foregroundStyle(AppColors.textPrimary)
                                    .tracking(0.4) // Exact Figma tracking
                                
                                // Custom plus icon matching Figma design
                                ZStack {
                                    // Horizontal line
                                    Rectangle()
                                        .fill(AppColors.primary)
                                        .frame(width: 12, height: 2)
                                    
                                    // Vertical line
                                    Rectangle()
                                        .fill(AppColors.primary)
                                        .frame(width: 2, height: 12)
                                }
                                .frame(width: 18, height: 24) // Exact Figma dimensions
                            }
                            .frame(maxWidth: .infinity)
                            .frame(height: 40)
                            .padding(.horizontal, 22) // Exact Figma padding
                            .padding(.vertical, 8) // Exact Figma padding
                            .background(AppColors.background) // White background
                            .overlay(
                                RoundedRectangle(cornerRadius: 32) // Exact Figma radius
                                    .stroke(AppColors.primary, lineWidth: 1) // Teal border
                            )
                        }
                        .buttonStyle(.plain)
                        .padding(.horizontal, 16)
                        .padding(.top, 8)

                        SuggestionList(cards: [
                            SuggestionCard(image: RemoteAssets.contentCard1, title: "Hormone therapy", description: "Practical help and advice in transitioning through this challenging period of life", reviews: "145 reviews", users: "Used by 1024 people"),
                            SuggestionCard(image: RemoteAssets.contentCard2, title: "Managing your weight", description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes.", reviews: "145 reviews", users: "Used by 1024 people"),
                            SuggestionCard(image: RemoteAssets.contentCard3, title: "Fitness and strength", description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes.", reviews: "145 reviews", users: "Used by 1024 people"),
                            SuggestionCard(image: RemoteAssets.contentCard4, title: "Reducing stress", description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes.", reviews: "145 reviews", users: "Used by 1024 people"),
                            SuggestionCard(image: RemoteAssets.contentCard5, title: "Managing a condition", description: "Track, monitor, and understand your weight loss. Set realistic goals and timeframes.", reviews: "145 reviews", users: "Used by 1024 people")
                        ])
                        .padding(.top, 8)
                        
                        // Bottom spacing to account for sticky nav bar
                        Spacer(minLength: 100)
                    }
                }
                .scrollIndicators(.hidden)
            }
            
            // No duplicate bottom navigation here
        }
        .navigationTitle("Home")
        .tint(AppColors.textPrimary)
        .navigationBarHidden(true)
    }
}

struct MockScreen: View {
    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                Image(RemoteAssets.landingPreview)
                    .resizable()
                    .scaledToFit()
                    .frame(maxWidth: .infinity)
                    .frame(height: 200)
                    .clipShape(RoundedRectangle(cornerRadius: 16))

                Text("This screen mirrors the layout you design in Figma. We'll swap this placeholder with exported assets and SwiftUI views matching your selection.")
                    .font(.callout)
                    .foregroundStyle(.secondary)
                    .padding(.horizontal)
            }
            .padding()
        }
        .navigationTitle("Mock Screen")
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}



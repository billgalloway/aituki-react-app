import SwiftUI

struct GoalsView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 24) {
                    // Goal Setting Section
                    VStack(alignment: .leading, spacing: 16) {
                        Button {
                            // Add new goal action
                        } label: {
                            HStack {
                                Image(systemName: "plus.circle.fill")
                                    .font(.system(size: 20))
                                Text("Set a new goal")
                                    .font(AppFonts.nunito(16, weight: .medium))
                            }
                            .foregroundStyle(AppColors.primary)
                            .padding()
                            .frame(maxWidth: .infinity)
                            .background(AppColors.background)
                            .clipShape(RoundedRectangle(cornerRadius: 32))
                            .overlay(
                                RoundedRectangle(cornerRadius: 32)
                                    .stroke(AppColors.primary, lineWidth: 1)
                            )
                        }
                        .buttonStyle(.plain)
                        
                        VStack(alignment: .leading, spacing: 8) {
                            Text("Set achievable goals")
                                .font(AppFonts.nunito(18, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                            
                            Text("Tuki can help you to create any type of personal goal. We can create bespoke digital twin functionality for almost any health objective.")
                                .font(AppFonts.nunito(14))
                                .foregroundStyle(AppColors.textSecondary)
                                .lineLimit(nil)
                        }
                    }
                    .padding()
                    .background(AppColors.background)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .shadow(color: .black.opacity(0.1), radius: 8, y: 2)
                    .padding(.horizontal)
                    
                    // Goal Card
                    VStack(alignment: .leading, spacing: 16) {
                        Image(RemoteAssets.hero1)
                            .resizable()
                            .scaledToFill()
                            .frame(height: 170)
                            .clipped()
                            .clipShape(RoundedRectangle(cornerRadius: 8))
                        
                        VStack(alignment: .leading, spacing: 8) {
                            Text("Life a healthier life")
                                .font(AppFonts.nunito(20, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                            
                            Text("8 weeks • Day 15 • 35-45 min pw")
                                .font(AppFonts.nunito(14, weight: .medium))
                                .foregroundStyle(AppColors.textSecondary)
                        }
                    }
                    .padding()
                    .background(AppColors.background)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .shadow(color: .black.opacity(0.15), radius: 4, y: 1)
                    .padding(.horizontal)
                }
                .padding(.vertical)
            }
            .navigationTitle("Your Goals")
            .navigationBarTitleDisplayMode(.large)
            .background(Color(.systemGroupedBackground))
        }
    }
}

#Preview {
    GoalsView()
}

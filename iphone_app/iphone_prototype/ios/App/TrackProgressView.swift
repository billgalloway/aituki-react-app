import SwiftUI

struct TrackProgressView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 24) {
                    // Health Tracking Overview
                    VStack(alignment: .leading, spacing: 16) {
                        Text("Health tracking overview")
                            .font(AppFonts.nunito(20, weight: .medium))
                            .foregroundStyle(AppColors.textPrimary)
                        
                        Text("8 weeks • Day 15 • 35-45 min pw")
                            .font(AppFonts.nunito(14, weight: .medium))
                            .foregroundStyle(AppColors.textSecondary)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.horizontal)
                    
                    // Steps Tracker
                    VStack(alignment: .leading, spacing: 16) {
                        HStack {
                            Text("Steps")
                                .font(AppFonts.nunito(18, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                            Spacer()
                            Menu("This week") {
                                Button("This week") { }
                                Button("This month") { }
                                Button("This year") { }
                            }
                            .font(AppFonts.nunito(14))
                            .foregroundStyle(AppColors.textPrimary)
                        }
                        
                        VStack(alignment: .leading, spacing: 8) {
                            Text("8,767 Steps")
                                .font(AppFonts.nunito(32, weight: .bold))
                                .foregroundStyle(AppColors.textPrimary)
                            
                            Text("15% above average")
                                .font(AppFonts.nunito(14))
                                .foregroundStyle(AppColors.primaryDark)
                        }
                        
                        // Simple bar chart placeholder
                        HStack(spacing: 8) {
                            ForEach(0..<7) { _ in
                                RoundedRectangle(cornerRadius: 4)
                                    .fill(AppColors.primary)
                                    .frame(height: 60)
                                    .frame(maxWidth: .infinity)
                            }
                        }
                        
                        Button("View details >") {
                            // Navigation action
                        }
                        .font(AppFonts.nunito(14))
                        .foregroundStyle(AppColors.primaryDark)
                        .frame(maxWidth: .infinity, alignment: .trailing)
                    }
                    .padding()
                    .background(AppColors.background)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .shadow(color: .black.opacity(0.1), radius: 8, y: 2)
                    .padding(.horizontal)
                    
                    // Overall Progress
                    VStack(alignment: .leading, spacing: 16) {
                        HStack {
                            Text("Overall progress")
                                .font(AppFonts.nunito(18, weight: .medium))
                                .foregroundStyle(AppColors.textPrimary)
                            Spacer()
                            Menu("This week") {
                                Button("This week") { }
                                Button("This month") { }
                                Button("This year") { }
                            }
                            .font(AppFonts.nunito(14))
                            .foregroundStyle(AppColors.textPrimary)
                        }
                        
                        VStack(alignment: .leading, spacing: 8) {
                            Text("97%")
                                .font(AppFonts.nunito(32, weight: .bold))
                                .foregroundStyle(AppColors.textPrimary)
                            
                            Text("15% above average")
                                .font(AppFonts.nunito(14))
                                .foregroundStyle(AppColors.primaryDark)
                        }
                    }
                    .padding()
                    .background(AppColors.background)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .shadow(color: .black.opacity(0.1), radius: 8, y: 2)
                    .padding(.horizontal)
                }
                .padding(.vertical)
            }
            .navigationTitle("Track Progress")
            .navigationBarTitleDisplayMode(.large)
            .background(Color(.systemGroupedBackground))
        }
    }
}

#Preview {
    TrackProgressView()
}

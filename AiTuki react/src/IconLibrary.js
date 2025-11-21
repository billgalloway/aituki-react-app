import React from 'react';
import { Box } from '@mui/material';

// Icon Library Component - Uses Material Symbols Light Rounded
const IconLibrary = ({ 
  iconName, 
  size = 24, 
  color = '#1f5661', 
  sx = {},
  ...props 
}) => {
  // Map of icon names to Material Symbols icon names
  const iconMap = {
    // Navigation & UI
    'home': 'home',
    'menu': 'menu',
    'search': 'search',
    'user': 'person',
    'settings': 'settings',
    'notification': 'notifications',
    'heart': 'favorite',
    'star': 'star',
    'bookmark': 'bookmark',
    
    // Health & Wellness
    'health': 'local_hospital',
    'heartbeat': 'favorite_border',
    'sleep': 'bedtime',
    'exercise': 'fitness_center',
    'yoga': 'self_improvement',
    'meditation': 'psychology',
    'nutrition': 'restaurant',
    'water': 'water_drop',
    'medicine': 'local_pharmacy',
    'pill': 'medication',
    'brain': 'psychology',
    'psychology': 'psychology',
    
    // Activity & Sports
    'running': 'directions_run',
    'cycling': 'directions_bike',
    'swimming': 'pool',
    'walking': 'directions_walk',
    'weightlifting': 'sports_handball',
    'basketball': 'sports_basketball',
    'football': 'sports_soccer',
    'tennis': 'sports_tennis',
    
    // Food & Nutrition
    'apple': 'apple',
    'banana': 'banana',
    'carrot': 'carrot',
    'fish': 'fish',
    'chicken': 'chicken',
    'bread': 'bread',
    'rice': 'rice',
    
    // Technology & Devices
    'phone': 'phone',
    'laptop': 'laptop',
    'tablet': 'tablet',
    'watch': 'watch',
    'headphones': 'headphones',
    'bluetooth': 'bluetooth',
    'wifi': 'wifi',
    
    // Weather & Environment
    'sun': 'wb_sunny',
    'moon': 'nightlight',
    'cloud': 'cloud',
    'rain': 'water_drop',
    'snow': 'ac_unit',
    'wind': 'air',
    'temperature': 'thermostat',
    
    // Communication
    'message': 'message',
    'email': 'email',
    'phone-call': 'phone_in_talk',
    'video-call': 'videocam',
    'share': 'share',
    'like': 'thumb_up',
    'comment': 'comment',
    
    // Time & Calendar
    'clock': 'access_time',
    'calendar': 'calendar_today',
    'timer': 'timer',
    'stopwatch': 'timer_3',
    'schedule': 'schedule',
    
    // Arrows & Navigation
    'arrow-up': 'keyboard_arrow_up',
    'arrow-down': 'keyboard_arrow_down',
    'arrow-left': 'keyboard_arrow_left',
    'arrow-right': 'keyboard_arrow_right',
    'chevron-up': 'expand_less',
    'chevron-down': 'expand_more',
    'chevron-left': 'chevron_left',
    'chevron-right': 'chevron_right',
    
    // Status & Actions
    'check': 'check',
    'close': 'close',
    'plus': 'add',
    'minus': 'remove',
    'edit': 'edit',
    'delete': 'delete',
    'save': 'save',
    'download': 'download',
    'upload': 'upload',
    
    // Social & Media
    'facebook': 'facebook',
    'instagram': 'instagram',
    'twitter': 'twitter',
    'youtube': 'youtube',
    'linkedin': 'linkedin',
    'github': 'github',
    'group': 'group',
    'community': 'group',
    
    // Business & Finance
    'money': 'attach_money',
    'credit-card': 'credit_card',
    'wallet': 'account_balance_wallet',
    'shopping-cart': 'shopping_cart',
    'store': 'store',
    'chart': 'show_chart',
    'graph': 'bar_chart',
    
    // Education & Learning
    'book': 'menu_book',
    'graduation': 'school',
    'school': 'school',
    'teacher': 'person',
    'exam': 'timer',
    
    // Travel & Transportation
    'car': 'directions_car',
    'bus': 'directions_bus',
    'train': 'train',
    'plane': 'flight',
    'bike': 'directions_bike',
    'walk': 'directions_walk',
    'target': 'gps_fixed',
    'data': 'analytics',
    
    // Home & Living
    'house': 'home',
    'bed': 'hotel',
    'sofa': 'chair',
    'kitchen': 'kitchen',
    'bathroom': 'bathroom',
    'garden': 'park',
    
    // Work & Productivity
    'briefcase': 'work',
    'computer': 'computer',
    'printer': 'print',
    'folder': 'folder',
    'file': 'description',
    'clipboard': 'assignment',
    'calculator': 'calculate',
    
    // Entertainment & Hobbies
    'music': 'music_note',
    'movie': 'movie',
    'game': 'sports_esports',
    'paint': 'palette',
    'puzzle': 'extension',
    
    // Safety & Security
    'lock': 'lock',
    'unlock': 'lock_open',
    'shield': 'security',
    'key': 'vpn_key',
    'fingerprint': 'fingerprint',
    'eye': 'visibility',
    'eye-off': 'visibility_off',
    
    // Default fallback
    'default': 'home'
  };

  const symbolName = iconMap[iconName] || iconMap['default'];

  return (
    <Box
      component="span"
      className="material-symbols-rounded"
      sx={{
        fontFamily: 'Material Symbols Rounded',
        fontWeight: 300, // Light weight
        fontSize: size,
        color: color,
        display: 'inline-block',
        lineHeight: 1,
        textTransform: 'none',
        letterSpacing: 'normal',
        wordWrap: 'normal',
        whiteSpace: 'nowrap',
        direction: 'ltr',
        ...sx
      }}
      {...props}
    >
      {symbolName}
    </Box>
  );
};

export default IconLibrary;

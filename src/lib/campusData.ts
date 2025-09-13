// Mock campus data and AI response generator

const campusInfo = {
  library: {
    hours: {
      weekdays: "7:00 AM - 12:00 AM",
      saturday: "9:00 AM - 10:00 PM", 
      sunday: "10:00 AM - 12:00 AM"
    },
    services: ["Study rooms", "Computer lab", "Printing", "Research assistance", "Quiet zones", "Group study areas"],
    locations: ["Main Library (Building A)", "Science Library (Building C)", "24/7 Study Hall (Building B)"]
  },
  dining: {
    locations: [
      { name: "Campus Café", hours: "7:00 AM - 9:00 PM", type: "Casual dining" },
      { name: "The Grill", hours: "11:00 AM - 11:00 PM", type: "Fast food" },
      { name: "Healthy Bites", hours: "8:00 AM - 6:00 PM", type: "Healthy options" },
      { name: "Late Night Eats", hours: "6:00 PM - 2:00 AM", type: "24/7 snacks" }
    ],
    mealPlans: ["Unlimited", "14 meals/week", "10 meals/week", "Commuter plan"]
  },
  facilities: {
    academic: ["Lecture halls", "Computer labs", "Research centers", "Study spaces"],
    recreation: ["Gym", "Swimming pool", "Tennis courts", "Basketball courts", "Running track"],
    services: ["Health center", "Career services", "Counseling center", "Mail center"]
  },
  schedule: {
    classTypes: ["In-person", "Online", "Hybrid"],
    periods: ["8:00-9:30", "10:00-11:30", "12:00-1:30", "2:00-3:30", "4:00-5:30", "6:00-7:30"],
    registration: "Opens 2 weeks before each semester"
  },
  admin: {
    offices: [
      { name: "Registrar", location: "Admin Building, Room 101", hours: "8:00 AM - 5:00 PM" },
      { name: "Financial Aid", location: "Admin Building, Room 203", hours: "9:00 AM - 4:00 PM" },
      { name: "Student Services", location: "Student Center, 2nd Floor", hours: "8:00 AM - 6:00 PM" }
    ],
    procedures: ["Course registration", "Grade appeals", "Transcript requests", "ID card replacement"]
  },
  events: [
    "🎭 Theater Performance - Friday 7:00 PM",
    "📚 Study Group Sessions - Daily 6:00 PM", 
    "🏀 Basketball Game - Saturday 3:00 PM",
    "🎤 Open Mic Night - Wednesday 8:00 PM",
    "🍕 Pizza Night - Every Tuesday 6:00 PM"
  ]
};

export const getCampusResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Library queries
  if (message.includes('library') || message.includes('study') || message.includes('book')) {
    if (message.includes('hour')) {
      return `📚 Library Hours:\n\n• Weekdays: ${campusInfo.library.hours.weekdays}\n• Saturday: ${campusInfo.library.hours.saturday}\n• Sunday: ${campusInfo.library.hours.sunday}\n\nWe have multiple locations: ${campusInfo.library.locations.join(', ')}. Need help finding study spaces or specific services?`;
    }
    return `📚 Our library system offers:\n\n${campusInfo.library.services.map(service => `• ${service}`).join('\n')}\n\n📍 Locations:\n${campusInfo.library.locations.map(loc => `• ${loc}`).join('\n')}\n\nWould you like to know about hours or specific services?`;
  }
  
  // Dining queries
  if (message.includes('food') || message.includes('eat') || message.includes('dining') || message.includes('restaurant') || message.includes('hungry')) {
    return `🍽️ Campus Dining Options:\n\n${campusInfo.dining.locations.map(place => 
      `• **${place.name}** (${place.type})\n  Hours: ${place.hours}`
    ).join('\n\n')}\n\n💳 Meal Plans Available: ${campusInfo.dining.mealPlans.join(', ')}\n\nNeed help choosing a meal plan or want specific menu info?`;
  }
  
  // Schedule queries
  if (message.includes('schedule') || message.includes('class') || message.includes('course') || message.includes('registration')) {
    return `📅 Class Schedule Info:\n\n• **Registration**: ${campusInfo.schedule.registration}\n• **Class Formats**: ${campusInfo.schedule.classTypes.join(', ')}\n• **Time Slots**: ${campusInfo.schedule.periods.join(' | ')}\n\n📝 For registration help, visit the Registrar's office (Admin Building, Room 101) from 8:00 AM - 5:00 PM.\n\nNeed help with course planning or registration procedures?`;
  }
  
  // Facilities queries
  if (message.includes('facilities') || message.includes('gym') || message.includes('recreation') || message.includes('building')) {
    return `🏛️ Campus Facilities:\n\n**Academic:**\n${campusInfo.facilities.academic.map(f => `• ${f}`).join('\n')}\n\n**Recreation:**\n${campusInfo.facilities.recreation.map(f => `• ${f}`).join('\n')}\n\n**Services:**\n${campusInfo.facilities.services.map(f => `• ${f}`).join('\n')}\n\nNeed directions to a specific facility or hours of operation?`;
  }
  
  // Administrative queries
  if (message.includes('admin') || message.includes('office') || message.includes('registrar') || message.includes('financial aid') || message.includes('transcript')) {
    return `📋 Administrative Offices:\n\n${campusInfo.admin.offices.map(office => 
      `• **${office.name}**\n  📍 ${office.location}\n  🕒 ${office.hours}`
    ).join('\n\n')}\n\n📝 Common Procedures: ${campusInfo.admin.procedures.join(', ')}\n\nWhat specific administrative help do you need?`;
  }
  
  // Events queries
  if (message.includes('event') || message.includes('activity') || message.includes('happening') || message.includes('fun')) {
    return `🎉 Upcoming Campus Events:\n\n${campusInfo.events.map(event => `• ${event}`).join('\n')}\n\n🎯 Join our campus community! Check the student portal for more events and activities. Want details about a specific event?`;
  }
  
  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return `👋 Hey there! I'm here to help you navigate campus life! I can assist with:\n\n🍽️ Dining locations and hours\n📚 Library services and study spaces\n📅 Class schedules and registration\n🏛️ Campus facilities and recreation\n📋 Administrative procedures\n🎉 Campus events and activities\n\nWhat would you like to know about?`;
  }
  
  // Thank you responses
  if (message.includes('thank') || message.includes('thanks')) {
    return `😊 You're very welcome! I'm always here to help with campus questions. Feel free to ask about dining, library, schedules, facilities, or anything else you need to know!`;
  }
  
  // Default response
  return `🤔 I'd love to help you with that! I specialize in campus information including:\n\n• 🍽️ Dining and food options\n• 📚 Library services and hours\n• 📅 Class schedules and registration\n• 🏛️ Campus facilities and recreation\n• 📋 Administrative procedures\n• 🎉 Campus events and activities\n\nCould you be more specific about what you're looking for? Try using the quick action buttons above for common questions!`;
};
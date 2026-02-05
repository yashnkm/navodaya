import { useState, useMemo } from 'react';

const Appointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generate hourly time slots from 9 AM to 5 PM
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Generate calendar data
  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    
    // First day of the month and number of days in month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Generate calendar grid
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const todayStart = new Date(today);
      todayStart.setHours(0, 0, 0, 0);
      const isPast = date < todayStart;
      const isToday = date.toDateString() === today.toDateString();
      
      calendarDays.push({
        date,
        day,
        isPast,
        isToday,
        isWeekend: date.getDay() === 0 || date.getDay() === 6 // Sunday or Saturday
      });
    }
    
    return {
      year,
      month,
      monthName: firstDay.toLocaleDateString('en-US', { month: 'long' }),
      calendarDays
    };
  }, [currentDate]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
    setSelectedDate(null); // Reset selected date when changing months
  };

  const services = [
    "General Consultation",
    "Asthma Management",
    "COPD Treatment",
    "Sleep Apnea Evaluation",
    "Pulmonary Function Test",
    "TB Consultation",
    "Bronchoscopy",
    "Critical Care Follow-up"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Appointment request submitted! We will contact you regarding date availability and confirm your appointment.');
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-oxford-blue-1 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-sonic-silver text-lg max-w-2xl mx-auto font-lato">
            Schedule your respiratory consultation with Dr. Vishnudas Telbhare. We will contact you regarding date availability and confirm your appointment.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-light-gray overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Left Side - Doctor Info & Calendar */}
            <div className="bg-cultured p-8 lg:p-12">
              {/* Doctor Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <img
                    src="/assets/images/DSC_0560.JPG"
                    alt="Dr. Vishnudas Telbhare"
                    className="w-16 h-16 rounded-full object-cover object-top border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-oxford-blue-1 text-xl">Dr. Vishnudas Telbhare</h3>
                  <p className="text-sonic-silver text-sm">Pulmonologist & Critical Care Specialist</p>
                  <p className="text-teal-600 text-xs font-medium">Available for appointments</p>
                </div>
              </div>

              {/* Calendar Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-montserrat font-semibold text-oxford-blue-1 text-lg">Select Date & Time</h4>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-sonic-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="font-medium text-oxford-blue-1 min-w-[140px] text-center">
                      {calendarData.monthName} {calendarData.year}
                    </span>
                    <button 
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-sonic-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Week Days */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-sonic-silver p-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-6">
                  {calendarData.calendarDays.map((dayData, index) => {
                    if (!dayData) {
                      return <div key={index} className="p-3"></div>; // Empty cell
                    }

                    const isSelected = selectedDate && dayData.date.toDateString() === selectedDate.toDateString();
                    const isUnavailable = dayData.isPast || dayData.isWeekend;

                    return (
                      <button
                        key={dayData.day}
                        onClick={() => !isUnavailable && setSelectedDate(dayData.date)}
                        disabled={isUnavailable}
                        className={`
                          p-3 text-sm rounded-lg transition-all duration-200 relative
                          ${isSelected
                            ? 'bg-teal-600 text-white shadow-lg'
                            : dayData.isToday
                              ? 'bg-oxford-blue-1 text-white'
                              : isUnavailable
                                ? 'text-sonic-silver/40 cursor-not-allowed'
                                : 'text-oxford-blue-1 hover:bg-teal-600 hover:text-white'
                          }
                        `}
                      >
                        {dayData.day}
                        {dayData.isWeekend && !dayData.isPast && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Date Display */}
                {selectedDate && (
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <p className="text-sm text-sonic-silver">Selected Date</p>
                    <p className="font-semibold text-oxford-blue-1">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                )}

                {/* Time Slots */}
                <div>
                  <p className="text-sm font-medium text-oxford-blue-1 mb-3">
                    Available Times (9 AM - 5 PM)
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        disabled={!selectedDate} // Disable if no date selected
                        className={`
                          p-3 text-sm rounded-lg border transition-all duration-200
                          ${!selectedDate
                            ? 'border-light-gray text-sonic-silver/50 cursor-not-allowed'
                            : selectedTime === time
                              ? 'bg-teal-600 text-white border-teal-600 shadow-lg'
                              : 'border-light-gray hover:border-teal-600 hover:bg-teal-50 text-oxford-blue-1'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  
                  {!selectedDate && (
                    <p className="text-xs text-sonic-silver mt-2 italic">
                      Please select a date first to choose time
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="p-8 lg:p-12">
              <h4 className="font-montserrat font-bold text-oxford-blue-1 text-xl mb-6">Patient Information</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-oxford-blue-1 mb-2">Patient Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200"
                      placeholder="Enter patient's full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-oxford-blue-1 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-oxford-blue-1 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-oxford-blue-1 mb-2">Type of Service *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-oxford-blue-1 mb-2">Describe Your Symptoms</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200 resize-none"
                    placeholder="Briefly describe your breathing difficulties or symptoms..."
                  />
                </div>

                {/* Notice */}
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-oxford-blue-1">
                      <strong>Important:</strong> We will contact you within 24 hours to confirm date availability and finalize your appointment details.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
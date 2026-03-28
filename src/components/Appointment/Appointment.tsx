import { useState, useMemo, useEffect } from 'react';

// API base URL — production
const API_BASE = 'https://opd.techviewai.com/api';
const CLINIC_CODE = 'NAVODA425D'; // Navodaya Chest Care clinic code

interface DoctorInfo {
  doctorId: number;
  doctorName: string;
}

interface AppointmentTypeInfo {
  typeId: number;
  typeName: string;
  defaultDurationMinutes: number;
}

interface ClinicInfo {
  clinicName: string;
  doctors: DoctorInfo[];
  appointmentTypes: AppointmentTypeInfo[];
}

interface BookingResponse {
  appointmentNumber: string;
  appointmentDate: string;
  appointmentTime: string;
  doctorName: string;
  clinicName: string;
  patientName: string;
  message: string;
}

const Appointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  // API state
  const [clinicInfo, setClinicInfo] = useState<ClinicInfo | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Clinic timing: 6 PM to 9 PM, Thursday and Sunday off
  const CLINIC_START = '18:00';
  const CLINIC_END = '21:00';

  // Fetch clinic info on mount
  useEffect(() => {
    fetchClinicInfo();
  }, []);

  const fetchClinicInfo = async () => {
    try {
      const response = await fetch(`${API_BASE}/public/${CLINIC_CODE}`);
      if (response.ok) {
        const data = await response.json();
        setClinicInfo(data);
      }
    } catch (err) {
      console.error('Failed to fetch clinic info:', err);
    }
  };

  // Fetch available slots when date changes
  useEffect(() => {
    if (selectedDate && clinicInfo && clinicInfo.doctors.length > 0) {
      fetchAvailableSlots(selectedDate, clinicInfo.doctors[0].doctorId);
    }
  }, [selectedDate, clinicInfo]);

  const fetchAvailableSlots = async (date: Date, doctorId: number) => {
    setLoadingSlots(true);
    setAvailableSlots([]);
    setSelectedTime(null);
    try {
      const dateStr = formatDateISO(date);
      const response = await fetch(
        `${API_BASE}/public/${CLINIC_CODE}/slots?date=${dateStr}&doctorId=${doctorId}`
      );
      if (response.ok) {
        const slots: string[] = await response.json();
        // Filter to clinic hours (18:00 - 21:00)
        const filtered = slots.filter(slot => slot >= CLINIC_START && slot <= CLINIC_END);
        setAvailableSlots(filtered);
      }
    } catch (err) {
      console.error('Failed to fetch slots:', err);
      // Fallback to static slots
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const formatDateISO = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const formatTime12h = (time24: string) => {
    const [h, m] = time24.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${h12}:${String(m).padStart(2, '0')} ${period}`;
  };

  // Generate calendar data
  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendarDays = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push(null);
    }

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
        isHoliday: date.getDay() === 0 || date.getDay() === 4, // Sunday or Thursday
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
    setSelectedDate(null);
    setSelectedTime(null);
    setAvailableSlots([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!selectedDate || !selectedTime) {
      setError('Please select a date and time for your appointment.');
      return;
    }

    if (!clinicInfo || clinicInfo.doctors.length === 0) {
      setError('Unable to book at this time. Please try again later or call us.');
      return;
    }

    const appointmentTypeId = clinicInfo.appointmentTypes[0]?.typeId;
    if (!appointmentTypeId) {
      setError('No appointment types available. Please call us to book.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/public/${CLINIC_CODE}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email || null,
          doctorId: clinicInfo.doctors[0].doctorId,
          appointmentTypeId,
          appointmentDate: formatDateISO(selectedDate),
          appointmentTime: selectedTime,
          chiefComplaint: formData.message || '',
        }),
      });

      if (response.ok) {
        const result: BookingResponse = await response.json();
        setBookingResult(result);
      } else {
        const errData = await response.json().catch(() => null);
        setError(errData?.message || 'Failed to book appointment. Please try again or call us.');
      }
    } catch (err) {
      console.error('Booking error:', err);
      setError('Unable to connect to booking system. Please call us at +91 75074 68918.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetBooking = () => {
    setBookingResult(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
    setError(null);
  };

  // Success screen
  if (bookingResult) {
    return (
      <section id="appointment" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-light-gray overflow-hidden p-8 sm:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-oxford-blue-1 mb-4">
              Appointment Booked!
            </h2>
            <p className="text-sonic-silver text-lg mb-8">{bookingResult.message}</p>

            <div className="bg-cultured rounded-2xl p-6 space-y-3 text-left mb-8">
              <div className="flex justify-between items-center">
                <span className="text-sonic-silver text-sm">Appointment No.</span>
                <span className="font-semibold text-oxford-blue-1 font-mono">{bookingResult.appointmentNumber}</span>
              </div>
              <div className="border-t border-light-gray"></div>
              <div className="flex justify-between items-center">
                <span className="text-sonic-silver text-sm">Patient</span>
                <span className="font-semibold text-oxford-blue-1">{bookingResult.patientName}</span>
              </div>
              <div className="border-t border-light-gray"></div>
              <div className="flex justify-between items-center">
                <span className="text-sonic-silver text-sm">Doctor</span>
                <span className="font-semibold text-oxford-blue-1">{bookingResult.doctorName}</span>
              </div>
              <div className="border-t border-light-gray"></div>
              <div className="flex justify-between items-center">
                <span className="text-sonic-silver text-sm">Date</span>
                <span className="font-semibold text-oxford-blue-1">{bookingResult.appointmentDate}</span>
              </div>
              <div className="border-t border-light-gray"></div>
              <div className="flex justify-between items-center">
                <span className="text-sonic-silver text-sm">Time</span>
                <span className="font-semibold text-oxford-blue-1">{bookingResult.appointmentTime}</span>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-oxford-blue-1">
                <strong>Note:</strong> Please arrive 10 minutes before your scheduled time. Bring any previous medical reports.
              </p>
            </div>

            <button
              onClick={resetBooking}
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-200"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-oxford-blue-1 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-sonic-silver text-lg max-w-2xl mx-auto font-lato">
            Schedule your respiratory consultation with Dr. Vishnudas Telbhare.
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-sonic-silver">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Clinic Hours: 6:00 PM - 9:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Closed: Thursday & Sunday
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-light-gray overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left Side - Doctor Info & Calendar */}
            <div className="bg-cultured p-4 sm:p-6 lg:p-12">
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
                  <p className="text-teal-600 text-xs font-medium">Mon, Tue, Wed, Fri, Sat — 6 PM to 9 PM</p>
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
                    <div key={day} className={`text-center text-xs font-medium p-2 ${
                      day === 'Sun' || day === 'Thu' ? 'text-red-400' : 'text-sonic-silver'
                    }`}>
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-6">
                  {calendarData.calendarDays.map((dayData, index) => {
                    if (!dayData) {
                      return <div key={index} className="p-3"></div>;
                    }

                    const isSelected = selectedDate && dayData.date.toDateString() === selectedDate.toDateString();
                    const isUnavailable = dayData.isPast || dayData.isHoliday;

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
                        {dayData.isHoliday && !dayData.isPast && (
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 text-xs text-sonic-silver mb-4">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Holiday (Thu/Sun)
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-oxford-blue-1 rounded"></div>
                    Today
                  </span>
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
                    Available Times (6 PM - 9 PM)
                  </p>

                  {!selectedDate ? (
                    <p className="text-xs text-sonic-silver italic">
                      Please select a date first to see available times
                    </p>
                  ) : loadingSlots ? (
                    <div className="flex items-center gap-2 text-sm text-sonic-silver py-4">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Checking availability...
                    </div>
                  ) : availableSlots.length === 0 ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-700">
                        No available slots for this date. Please try another date or call us at +91 75074 68918.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            p-3 text-sm rounded-lg border transition-all duration-200
                            ${selectedTime === time
                              ? 'bg-teal-600 text-white border-teal-600 shadow-lg'
                              : 'border-light-gray hover:border-teal-600 hover:bg-teal-50 text-oxford-blue-1'
                            }
                          `}
                        >
                          {formatTime12h(time)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="p-4 sm:p-6 lg:p-12">
              <h4 className="font-montserrat font-bold text-oxford-blue-1 text-xl mb-6">Patient Information</h4>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-oxford-blue-1 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-oxford-blue-1 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-light-gray rounded-xl focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all duration-200"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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

                {/* Timing Notice */}
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm text-oxford-blue-1">
                      <p><strong>Clinic Hours:</strong> 6:00 PM - 9:00 PM</p>
                      <p><strong>Closed:</strong> Thursday & Sunday</p>
                      <p className="text-sonic-silver mt-1">Please arrive 10 minutes before your scheduled time.</p>
                    </div>
                  </div>
                </div>

                {/* Selected slot summary */}
                {selectedDate && selectedTime && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm font-medium text-green-800">
                      Selected: {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {formatTime12h(selectedTime)}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !selectedDate || !selectedTime}
                  className={`
                    w-full font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2
                    ${submitting || !selectedDate || !selectedTime
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:shadow-lg'
                    }
                  `}
                >
                  {submitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Appointment
                    </>
                  )}
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

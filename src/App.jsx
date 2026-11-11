import React, { useState } from 'react';
import { 
  Search, Plus, ShieldCheck, MapPin, Calendar, Clock, 
  MessageSquare, User, Tag, ArrowRight, CheckCircle2, 
  SlidersHorizontal, Sparkles, Building2, HelpCircle,
  AlertCircle, ChevronRight, Share2, DollarSign, Layers,
  ShoppingBag, Check, X, Filter
} from 'lucide-react';

const INITIAL_ITEMS = [
  {
    id: 1,
    title: 'Casio fx-570EX ClassWiz Calculator',
    category: 'Electronics',
    ratePerDay: 5,
    deposit: 30,
    faculty: 'FSKTM',
    owner: { name: 'Aiman Hafiz', matric: 'U2102834', rating: 4.9, reviews: 14, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80' },
    image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=600&q=80',
    available: true,
    pickupSpots: ['FSKTM Foyer', 'KK12 Dataran', 'Main Library']
  },
  {
    id: 2,
    title: 'Formal Black Blazer (Men Slim Fit - Size L)',
    category: 'Formal Wear',
    ratePerDay: 12,
    deposit: 50,
    faculty: 'Faculty of Business & Economics',
    owner: { name: 'Sarah Tan', matric: 'U2004921', rating: 5.0, reviews: 22, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
    available: true,
    pickupSpots: ['FBE Lobby', 'KK10', 'DTC (Dewan Tunku Canselor)']
  },
  {
    id: 3,
    title: 'Wireless Presenter Clicker with Red Laser',
    category: 'Electronics',
    ratePerDay: 4,
    deposit: 20,
    faculty: 'Faculty of Science',
    owner: { name: 'Jason Yiew', matric: 'U2108743', rating: 4.8, reviews: 9, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80' },
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80',
    available: true,
    pickupSpots: ['Science Library', 'KK8 Courtyard']
  },
  {
    id: 4,
    title: 'Sony Alpha A6400 (Body + 16-50mm Lens Kit)',
    category: 'Media Gear',
    ratePerDay: 45,
    deposit: 200,
    faculty: 'FSKTM',
    owner: { name: 'Kavitha R.', matric: 'U2109811', rating: 4.95, reviews: 31, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' },
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    available: true,
    pickupSpots: ['FSKTM Cafe', 'KK12']
  },
  {
    id: 5,
    title: 'Multi-Port USB-C Hub (HDMI 4K, 3x USB 3.0, PD)',
    category: 'Electronics',
    ratePerDay: 3,
    deposit: 25,
    faculty: 'FSKTM',
    owner: { name: 'Zulhelmi', matric: 'U2103321', rating: 4.7, reviews: 6, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    available: true,
    pickupSpots: ['FSKTM Block B', 'KK12']
  },
  {
    id: 6,
    title: 'Heavy Duty 4-Person Camping Tent for SUKMUM',
    category: 'Event Gear',
    ratePerDay: 20,
    deposit: 80,
    faculty: 'Faculty of Engineering',
    owner: { name: 'Bryan Wong', matric: 'U2001198', rating: 4.9, reviews: 18, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
    available: true,
    pickupSpots: ['Engineering Tower', 'KK1']
  }
];

const INITIAL_REQUESTS = [
  {
    id: 101,
    title: 'Need a USB-C to HDMI adapter for Viva Presentation!',
    faculty: 'FSKTM',
    requester: 'Lee Jia Wei',
    timeframe: 'Tomorrow, 9:00 AM - 1:00 PM',
    bounty: 'RM 8 for half day',
    status: 'Open',
    postedAgo: '15 mins ago'
  },
  {
    id: 102,
    title: 'Looking for Convocation Mortarboard & Gown for pre-shoot',
    faculty: 'Faculty of Arts and Social Sciences',
    requester: 'Nurul Izzah',
    timeframe: 'This Saturday (Full Day)',
    bounty: 'RM 25 / day',
    status: 'Open',
    postedAgo: '1 hour ago'
  },
  {
    id: 103,
    title: 'Microphone Rode Wireless GO II for club event coverage',
    faculty: 'Faculty of Engineering',
    requester: 'Darren Tan',
    timeframe: 'Friday 3 PM - Sunday',
    bounty: 'RM 35 / day',
    status: 'Open',
    postedAgo: '3 hours ago'
  }
];

export default function App() {
  const [currentUser] = useState({
    name: 'Jason Yiew',
    matric: 'U2108743',
    faculty: 'FSKTM',
    email: 'u2108743@siswa.um.edu.my',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  });

  const [activeTab, setActiveTab] = useState('browse'); // 'browse' | 'requests' | 'mybookings'
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterFacultyOnly, setFilterFacultyOnly] = useState(false);

  // Modals state
  const [selectedItemForBooking, setSelectedItemForBooking] = useState(null);
  const [isLendModalOpen, setIsLendModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [bookingSuccessModal, setBookingSuccessModal] = useState(false);

  // Booking Form State
  const [bookingDays, setBookingDays] = useState(1);
  const [bookingPickup, setBookingPickup] = useState('');

  // New Listing Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Electronics');
  const [newRate, setNewRate] = useState('');
  const [newDeposit, setNewDeposit] = useState('');
  const [newPickup, setNewPickup] = useState('FSKTM Foyer');

  // New Request Form State
  const [reqTitle, setReqTitle] = useState('');
  const [reqTimeframe, setReqTimeframe] = useState('');
  const [reqBounty, setReqBounty] = useState('');

  // Filtering
  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesFaculty = !filterFacultyOnly || item.faculty === currentUser.faculty;
    return matchesSearch && matchesCategory && matchesFaculty;
  });

  const handleConfirmBooking = () => {
    if (!selectedItemForBooking) return;
    const newBooking = {
      id: Date.now(),
      item: selectedItemForBooking,
      days: bookingDays,
      totalCost: selectedItemForBooking.ratePerDay * bookingDays,
      deposit: selectedItemForBooking.deposit,
      pickupSpot: bookingPickup || selectedItemForBooking.pickupSpots[0],
      status: 'Pending Confirmation',
      date: new Date().toLocaleDateString('en-MY', { day: 'numeric', month: 'short' })
    };
    setBookings([newBooking, ...bookings]);
    setSelectedItemForBooking(null);
    setBookingSuccessModal(true);
  };

  const handleCreateListing = (e) => {
    e.preventDefault();
    if (!newTitle || !newRate) return;

    const newItem = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      ratePerDay: Number(newRate),
      deposit: Number(newDeposit) || 0,
      faculty: currentUser.faculty,
      owner: { 
        name: currentUser.name, 
        matric: currentUser.matric, 
        rating: 5.0, 
        reviews: 1, 
        avatar: currentUser.avatar 
      },
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
      available: true,
      pickupSpots: [newPickup, 'KK12 Dataran']
    };

    setItems([newItem, ...items]);
    setIsLendModalOpen(false);
    setNewTitle('');
    setNewRate('');
    setNewDeposit('');
  };

  const handleCreateRequest = (e) => {
    e.preventDefault();
    if (!reqTitle) return;

    const newReq = {
      id: Date.now(),
      title: reqTitle,
      faculty: currentUser.faculty,
      requester: currentUser.name,
      timeframe: reqTimeframe || 'As soon as possible',
      bounty: reqBounty ? `RM ${reqBounty}` : 'Negotiable',
      status: 'Open',
      postedAgo: 'Just now'
    };

    setRequests([newReq, ...requests]);
    setIsRequestModalOpen(false);
    setReqTitle('');
    setReqTimeframe('');
    setReqBounty('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-slate-900">UM RentHub</span>
                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                  Campus Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Rent & Share equipment across UM students</p>
            </div>
          </div>

          {/* Action Buttons & Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsLendModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Lend an Item</span>
            </button>

            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask for Help</span>
            </button>

            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="relative">
                <img 
                  src={currentUser.avatar} 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-500/30"
                />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white absolute -bottom-0.5 -right-0.5"></span>
              </div>
              <div className="hidden lg:block text-left">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-bold text-slate-800 leading-tight">{currentUser.name}</p>
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <p className="text-[10px] text-slate-400 font-mono">{currentUser.faculty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 flex gap-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('browse')}
            className={`py-3 flex items-center gap-2 border-b-2 transition ${
              activeTab === 'browse' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Tag className="w-3.5 h-3.5" /> Marketplace Feed ({items.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`py-3 flex items-center gap-2 border-b-2 transition ${
              activeTab === 'requests' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" /> Campus Request Feed (Wanted Items)
            <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.2 rounded-full font-bold">
              {requests.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('mybookings')}
            className={`py-3 flex items-center gap-2 border-b-2 transition ${
              activeTab === 'mybookings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" /> My Bookings ({bookings.length})
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-6 w-full flex-1">
        {/* Banner Hero */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-6 sm:p-8 mb-6 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-blue-100 border border-white/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Exclusive to Universiti Malaya Students & Staff
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-2">
              Borrow gear for assignments, vivas & events without buying new.
            </h1>
            <p className="text-sm text-blue-100/90 mb-5 leading-relaxed">
              Rent formal blazers, calculators, cameras, and adaptors directly from peers in your faculty. Zero shipping, direct campus handoffs.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button 
                onClick={() => setIsLendModalOpen(true)}
                className="px-4 py-2 bg-white text-blue-800 hover:bg-blue-50 text-xs font-bold rounded-xl transition shadow-sm"
              >
                + Lend Your Unused Stuff
              </button>
              <button 
                onClick={() => setIsRequestModalOpen(true)}
                className="px-4 py-2 bg-blue-600/70 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-md transition"
              >
                Can't find an item? Post a shoutout
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Marketplace Items */}
        {activeTab === 'browse' && (
          <div>
            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search blazers, calculators, cameras, adapters..."
                    className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      checked={filterFacultyOnly}
                      onChange={(e) => setFilterFacultyOnly(e.target.checked)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span>My Faculty Only ({currentUser.faculty})</span>
                  </label>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
                {['All', 'Electronics', 'Formal Wear', 'Media Gear', 'Event Gear', 'Stationery'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition ${
                      selectedCategory === cat 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Listings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredItems.map(item => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
                >
                  <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug mb-1.5">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-3">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{item.faculty}</span>
                    </div>

                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-base font-extrabold text-blue-600 leading-tight">
                          RM {item.ratePerDay} <span className="text-xs font-normal text-slate-500">/day</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Deposit: RM {item.deposit}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedItemForBooking(item);
                          setBookingPickup(item.pickupSpots[0]);
                        }}
                        className="px-3.5 py-1.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition active:scale-95"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-semibold">No items match your search.</p>
                <p className="text-slate-400 text-xs mt-1">Can't find what you need? Post a request on the emergency board!</p>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Campus Request Board */}
        {activeTab === 'requests' && (
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-6">
              <div>
                <h2 className="text-base font-bold text-slate-900">Urgent Borrow Requests</h2>
                <p className="text-xs text-slate-500">Need something that isn't listed yet? Broadcast here. Peers in your faculty will be alerted.</p>
              </div>
              <button
                onClick={() => setIsRequestModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition"
              >
                <Plus className="w-4 h-4" /> Post New Request
              </button>
            </div>

            <div className="space-y-3">
              {requests.map(req => {
                const isMyFaculty = req.faculty === currentUser.faculty;
                return (
                  <div 
                    key={req.id}
                    className={`bg-white p-5 rounded-2xl border transition ${
                      isMyFaculty ? 'border-amber-300 bg-amber-50/20 shadow-sm' : 'border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-bold text-slate-900 text-xs">{req.requester}</span>
                          <span className="text-[11px] text-slate-400 font-mono">• {req.postedAgo}</span>
                          {isMyFaculty && (
                            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                              Same Faculty ({req.faculty})
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm leading-snug mb-2">
                          {req.title}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" /> {req.timeframe}
                          </span>
                          <span className="flex items-center gap-1 text-emerald-700 font-bold">
                            <DollarSign className="w-3.5 h-3.5" /> Offering: {req.bounty}
                          </span>
                        </div>
                      </div>

                      <button 
                        onClick={() => alert(`Opening chat with ${req.requester} via Siswa Webmail!`)}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> I Can Lend This
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: My Bookings */}
        {activeTab === 'mybookings' && (
          <div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-6">
              <h2 className="text-base font-bold text-slate-900">Your Active & Past Bookings</h2>
              <p className="text-xs text-slate-500">Track handoffs, return timelines, and deposit statuses.</p>
            </div>

            {bookings.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
                <ShoppingBag className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-600 text-sm font-semibold">No active bookings yet.</p>
                <p className="text-slate-400 text-xs mt-1">Browse the marketplace and book an item to see it tracked here.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {bookings.map(b => (
                  <div key={b.id} className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={b.item.image} alt="" className="w-14 h-14 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-slate-800 text-xs">{b.item.title}</h4>
                        <p className="text-[11px] text-slate-500">Pickup: {b.pickupSpot} • {b.days} days</p>
                        <p className="text-xs font-bold text-blue-600 mt-0.5">Total: RM {b.totalCost} (+ RM {b.deposit} deposit)</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Booking Modal */}
      {selectedItemForBooking && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-1">Confirm Rental Request</h3>
            <p className="text-xs text-slate-500 mb-4">Secured with @siswa.um.edu.my student verification</p>

            <div className="flex gap-3 p-3 bg-slate-50 rounded-xl mb-4 border border-slate-100">
              <img src={selectedItemForBooking.image} alt="" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <h4 className="font-bold text-xs text-slate-900">{selectedItemForBooking.title}</h4>
                <p className="text-xs text-blue-600 font-bold mt-1">RM {selectedItemForBooking.ratePerDay} / day</p>
                <p className="text-[11px] text-slate-400">Security Deposit: RM {selectedItemForBooking.deposit}</p>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Pick-up Location on Campus</label>
                <select 
                  value={bookingPickup}
                  onChange={(e) => setBookingPickup(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                >
                  {selectedItemForBooking.pickupSpots.map(spot => (
                    <option key={spot} value={spot}>{spot}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Rental Duration (Days)</label>
                <input 
                  type="number" 
                  value={bookingDays} 
                  onChange={(e) => setBookingDays(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1" 
                  max="14" 
                  className="w-full text-xs p-2 rounded-xl border border-slate-300" 
                />
              </div>

              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Rental fee ({bookingDays} days):</span>
                  <span>RM {selectedItemForBooking.ratePerDay * bookingDays}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Refundable deposit:</span>
                  <span>RM {selectedItemForBooking.deposit}</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-blue-100">
                  <span>Due upon pickup:</span>
                  <span className="text-blue-600">RM {(selectedItemForBooking.ratePerDay * bookingDays) + selectedItemForBooking.deposit}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setSelectedItemForBooking(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm transition"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lend Item Modal */}
      {isLendModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateListing} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-1">List an Item for Rent</h3>
            <p className="text-xs text-slate-500 mb-4">Turn gear in your dorm into passive side income.</p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Item Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Casio fx-991EX, Men Formal Suit L"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select 
                    value={newCategory} 
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Formal Wear">Formal Wear</option>
                    <option value="Media Gear">Media Gear</option>
                    <option value="Event Gear">Event Gear</option>
                    <option value="Stationery">Stationery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Rate (RM / day)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 8"
                    value={newRate}
                    onChange={(e) => setNewRate(e.target.value)}
                    className="w-full text-xs p-2 rounded-xl border border-slate-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Refundable Deposit (RM)</label>
                <input
                  type="number"
                  placeholder="e.g. 30"
                  value={newDeposit}
                  onChange={(e) => setNewDeposit(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Handoff Location</label>
                <input
                  type="text"
                  value={newPickup}
                  onChange={(e) => setNewPickup(e.target.value)}
                  placeholder="e.g. FSKTM Lobby or KK12"
                  className="w-full text-xs p-2 rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsLendModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm transition"
              >
                Publish Listing
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Emergency Request Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateRequest} className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-1">Post a Rental Request</h3>
            <p className="text-xs text-slate-500 mb-4">Can't find the item? Ask students in your faculty.</p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">What do you need?</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Need a tripod for video shoot today 2pm"
                  value={reqTitle}
                  onChange={(e) => setReqTitle(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Required Timeframe</label>
                <input
                  type="text"
                  placeholder="e.g. Tomorrow 10 AM - 4 PM"
                  value={reqTimeframe}
                  onChange={(e) => setReqTimeframe(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Offered Rental Bounty (Optional)</label>
                <input
                  type="number"
                  placeholder="e.g. 10 (RM)"
                  value={reqBounty}
                  onChange={(e) => setReqBounty(e.target.value)}
                  className="w-full text-xs p-2 rounded-xl border border-slate-300"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsRequestModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-xs font-bold text-white shadow-sm transition"
              >
                Broadcast Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Modal */}
      {bookingSuccessModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Request Sent to Lender!</h3>
            <p className="text-xs text-slate-500 mb-4">
              Your request was added to <strong>My Bookings</strong>. A notification was dispatched to their Siswa email for physical handover.
            </p>
            <button
              onClick={() => {
                setBookingSuccessModal(false);
                setActiveTab('mybookings');
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition"
            >
              View My Bookings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
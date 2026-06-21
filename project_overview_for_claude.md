# EduCare AI Project Details

This document contains the details and complete content of all project files, provided for AI context.

> **Important Note:** The `frontend/src` directory appears to be missing from the project entirely. The frontend currently only has configuration files and an `index.html`.

## File Listing & Contents

### `.agent/skills/ui-ux-pro-max/data/charts.csv`
**Function:** Source code file.

```csv
No,Data Type,Keywords,Best Chart Type,Secondary Options,Color Guidance,Performance Impact,Accessibility Notes,Library Recommendation,Interactive Level
1,Trend Over Time,"trend, time-series, line, growth, timeline, progress",Line Chart,"Area Chart, Smooth Area",Primary: #0080FF. Multiple series: use distinct colors. Fill: 20% opacity,⚡ Excellent (optimized),✓ Clear line patterns for colorblind users. Add pattern overlays.,"Chart.js, Recharts, ApexCharts",Hover + Zoom
2,Compare Categories,"compare, categories, bar, comparison, ranking",Bar Chart (Horizontal or Vertical),"Column Chart, Grouped Bar",Each bar: distinct color. Category: grouped same color. Sorted: descending order,⚡ Excellent,✓ Easy to compare. Add value labels on bars for clarity.,"Chart.js, Recharts, D3.js",Hover + Sort
3,Part-to-Whole,"part-to-whole, pie, donut, percentage, proportion, share",Pie Chart or Donut,"Stacked Bar, Treemap",Colors: 5-6 max. Contrasting palette. Large slices first. Use labels.,⚡ Good (limit 6 slices),⚠ Hard for accessibility. Better: Stacked bar with legend. Avoid pie if >5 items.,"Chart.js, Recharts, D3.js",Hover + Drill
4,Correlation/Distribution,"correlation, distribution, scatter, relationship, pattern",Scatter Plot or Bubble Chart,"Heat Map, Matrix",Color axis: gradient (blue-red). Size: relative. Opacity: 0.6-0.8 to show density,⚠ Moderate (many points),⚠ Provide data table alternative. Use pattern + color distinction.,"D3.js, Plotly, Recharts",Hover + Brush
5,Heatmap/Intensity,"heatmap, heat-map, intensity, density, matrix",Heat Map or Choropleth,"Grid Heat Map, Bubble Heat",Gradient: Cool (blue) to Hot (red). Scale: clear legend. Divergent for ±data,⚡ Excellent (color CSS),⚠ Colorblind: Use pattern overlay. Provide numerical legend.,"D3.js, Plotly, ApexCharts",Hover + Zoom
6,Geographic Data,"geographic, map, location, region, geo, spatial","Choropleth Map, Bubble Map",Geographic Heat Map,Regional: single color gradient or categorized colors. Legend: clear scale,⚠ Moderate (rendering),⚠ Include text labels for regions. Provide data table alternative.,"D3.js, Mapbox, Leaflet",Pan + Zoom + Drill
7,Funnel/Flow,funnel/flow,"Funnel Chart, Sankey",Waterfall (for flows),Stages: gradient (starting color → ending color). Show conversion %,⚡ Good,✓ Clear stage labels + percentages. Good for accessibility if labeled.,"D3.js, Recharts, Custom SVG",Hover + Drill
8,Performance vs Target,performance-vs-target,Gauge Chart or Bullet Chart,"Dial, Thermometer",Performance: Red→Yellow→Green gradient. Target: marker line. Threshold colors,⚡ Good,✓ Add numerical value + percentage label beside gauge.,"D3.js, ApexCharts, Custom SVG",Hover
9,Time-Series Forecast,time-series-forecast,Line with Confidence Band,Ribbon Chart,Actual: solid line #0080FF. Forecast: dashed #FF9500. Band: light shading,⚡ Good,✓ Clearly distinguish actual vs forecast. Add legend.,"Chart.js, ApexCharts, Plotly",Hover + Toggle
10,Anomaly Detection,anomaly-detection,Line Chart with Highlights,Scatter with Alert,Normal: blue #0080FF. Anomaly: red #FF0000 circle/square marker + alert,⚡ Good,✓ Circle/marker for anomalies. Add text alert annotation.,"D3.js, Plotly, ApexCharts",Hover + Alert
11,Hierarchical/Nested Data,hierarchical/nested-data,Treemap,"Sunburst, Nested Donut, Icicle",Parent: distinct hues. Children: lighter shades. White borders 2-3px.,⚠ Moderate,⚠ Poor - provide table alternative. Label large areas.,"D3.js, Recharts, ApexCharts",Hover + Drilldown
12,Flow/Process Data,flow/process-data,Sankey Diagram,"Alluvial, Chord Diagram",Gradient from source to target. Opacity 0.4-0.6 for flows.,⚠ Moderate,⚠ Poor - provide flow table alternative.,"D3.js (d3-sankey), Plotly",Hover + Drilldown
13,Cumulative Changes,cumulative-changes,Waterfall Chart,"Stacked Bar, Cascade",Increases: #4CAF50. Decreases: #F44336. Start: #2196F3. End: #0D47A1.,⚡ Good,✓ Good - clear directional colors with labels.,"ApexCharts, Highcharts, Plotly",Hover
14,Multi-Variable Comparison,multi-variable-comparison,Radar/Spider Chart,"Parallel Coordinates, Grouped Bar",Single: #0080FF 20% fill. Multiple: distinct colors per dataset.,⚡ Good,⚠ Moderate - limit 5-8 axes. Add data table.,"Chart.js, Recharts, ApexCharts",Hover + Toggle
15,Stock/Trading OHLC,stock/trading-ohlc,Candlestick Chart,"OHLC Bar, Heikin-Ashi",Bullish: #26A69A. Bearish: #EF5350. Volume: 40% opacity below.,⚡ Good,⚠ Moderate - provide OHLC data table.,"Lightweight Charts (TradingView), ApexCharts",Real-time + Hover + Zoom
16,Relationship/Connection Data,relationship/connection-data,Network Graph,"Hierarchical Tree, Adjacency Matrix",Node types: categorical colors. Edges: #90A4AE 60% opacity.,❌ Poor (500+ nodes struggles),❌ Very Poor - provide adjacency list alternative.,"D3.js (d3-force), Vis.js, Cytoscape.js",Drilldown + Hover + Drag
17,Distribution/Statistical,distribution/statistical,Box Plot,"Violin Plot, Beeswarm",Box: #BBDEFB. Border: #1976D2. Median: #D32F2F. Outliers: #F44336.,⚡ Excellent,"✓ Good - include stats table (min, Q1, median, Q3, max).","Plotly, D3.js, Chart.js (plugin)",Hover
18,Performance vs Target (Compact),performance-vs-target-(compact),Bullet Chart,"Gauge, Progress Bar","Ranges: #FFCDD2, #FFF9C4, #C8E6C9. Performance: #1976D2. Target: black 3px.",⚡ Excellent,✓ Excellent - compact with clear values.,"D3.js, Plotly, Custom SVG",Hover
19,Proportional/Percentage,proportional/percentage,Waffle Chart,"Pictogram, Stacked Bar 100%",10x10 grid. 3-5 categories max. 2-3px spacing between squares.,⚡ Good,✓ Good - better than pie for accessibility.,"D3.js, React-Waffle, Custom CSS Grid",Hover
20,Hierarchical Proportional,hierarchical-proportional,Sunburst Chart,"Treemap, Icicle, Circle Packing",Center to outer: darker to lighter. 15-20% lighter per level.,⚠ Moderate,⚠ Poor - provide hierarchy table alternative.,"D3.js (d3-hierarchy), Recharts, ApexCharts",Drilldown + Hover
21,Root Cause Analysis,"root cause, decomposition, tree, hierarchy, drill-down, ai-split",Decomposition Tree,"Decision Tree, Flow Chart",Nodes: #2563EB (Primary) vs #EF4444 (Negative impact). Connectors: Neutral grey.,⚠ Moderate (calculation heavy),✓ clear hierarchy. Allow keyboard navigation for nodes.,"Power BI (native), React-Flow, Custom D3.js",Drill + Expand
22,3D Spatial Data,"3d, spatial, immersive, terrain, molecular, volumetric",3D Scatter/Surface Plot,"Volumetric Rendering, Point Cloud",Depth cues: lighting/shading. Z-axis: color gradient (cool to warm).,❌ Heavy (WebGL required),❌ Poor - requires alternative 2D view or data table.,"Three.js, Deck.gl, Plotly 3D",Rotate + Zoom + VR
23,Real-Time Streaming,"streaming, real-time, ticker, live, velocity, pulse",Streaming Area Chart,"Ticker Tape, Moving Gauge",Current: Bright Pulse (#00FF00). History: Fading opacity. Grid: Dark.,⚡ Optimized (canvas/webgl),⚠ Flashing elements - provide pause button. High contrast.,Smoothed D3.js, CanvasJS
24,Sentiment/Emotion,"sentiment, emotion, nlp, opinion, feeling",Word Cloud with Sentiment,"Sentiment Arc, Radar Chart",Positive: #22C55E. Negative: #EF4444. Neutral: #94A3B8. Size = Frequency.,⚡ Good,⚠ Word clouds poor for screen readers. Use list view.,"D3-cloud, Highcharts, Nivo",Hover + Filter
25,Process Mining,"process, mining, variants, path, bottleneck, log",Process Map / Graph,"Directed Acyclic Graph (DAG), Petri Net",Happy path: #10B981 (Thick). Deviations: #F59E0B (Thin). Bottlenecks: #EF4444.,⚠ Moderate to Heavy,⚠ Complex graphs hard to navigate. Provide path summary.,"React-Flow, Cytoscape.js, Recharts",Drag + Node-Click

```

---

### `.agent/skills/ui-ux-pro-max/data/colors.csv`
**Function:** Source code file.

```csv
No,Product Type,Primary (Hex),Secondary (Hex),CTA (Hex),Background (Hex),Text (Hex),Border (Hex),Notes
1,SaaS (General),#2563EB,#3B82F6,#F97316,#F8FAFC,#1E293B,#E2E8F0,Trust blue + orange CTA contrast
2,Micro SaaS,#6366F1,#818CF8,#10B981,#F5F3FF,#1E1B4B,#E0E7FF,Indigo primary + emerald CTA
3,E-commerce,#059669,#10B981,#F97316,#ECFDF5,#064E3B,#A7F3D0,Success green + urgency orange
4,E-commerce Luxury,#1C1917,#44403C,#CA8A04,#FAFAF9,#0C0A09,#D6D3D1,Premium dark + gold accent
5,Service Landing Page,#0EA5E9,#38BDF8,#F97316,#F0F9FF,#0C4A6E,#BAE6FD,Sky blue trust + warm CTA
6,B2B Service,#0F172A,#334155,#0369A1,#F8FAFC,#020617,#E2E8F0,Professional navy + blue CTA
7,Financial Dashboard,#0F172A,#1E293B,#22C55E,#020617,#F8FAFC,#334155,Dark bg + green positive indicators
8,Analytics Dashboard,#1E40AF,#3B82F6,#F59E0B,#F8FAFC,#1E3A8A,#DBEAFE,Blue data + amber highlights
9,Healthcare App,#0891B2,#22D3EE,#059669,#ECFEFF,#164E63,#A5F3FC,Calm cyan + health green
10,Educational App,#4F46E5,#818CF8,#F97316,#EEF2FF,#1E1B4B,#C7D2FE,Playful indigo + energetic orange
11,Creative Agency,#EC4899,#F472B6,#06B6D4,#FDF2F8,#831843,#FBCFE8,Bold pink + cyan accent
12,Portfolio/Personal,#18181B,#3F3F46,#2563EB,#FAFAFA,#09090B,#E4E4E7,Monochrome + blue accent
13,Gaming,#7C3AED,#A78BFA,#F43F5E,#0F0F23,#E2E8F0,#4C1D95,Neon purple + rose action
14,Government/Public Service,#0F172A,#334155,#0369A1,#F8FAFC,#020617,#E2E8F0,High contrast navy + blue
15,Fintech/Crypto,#F59E0B,#FBBF24,#8B5CF6,#0F172A,#F8FAFC,#334155,Gold trust + purple tech
16,Social Media App,#E11D48,#FB7185,#2563EB,#FFF1F2,#881337,#FECDD3,Vibrant rose + engagement blue
17,Productivity Tool,#0D9488,#14B8A6,#F97316,#F0FDFA,#134E4A,#99F6E4,Teal focus + action orange
18,Design System/Component Library,#4F46E5,#6366F1,#F97316,#EEF2FF,#312E81,#C7D2FE,Indigo brand + doc hierarchy
19,AI/Chatbot Platform,#7C3AED,#A78BFA,#06B6D4,#FAF5FF,#1E1B4B,#DDD6FE,AI purple + cyan interactions
20,NFT/Web3 Platform,#8B5CF6,#A78BFA,#FBBF24,#0F0F23,#F8FAFC,#4C1D95,Purple tech + gold value
21,Creator Economy Platform,#EC4899,#F472B6,#F97316,#FDF2F8,#831843,#FBCFE8,Creator pink + engagement orange
22,Sustainability/ESG Platform,#059669,#10B981,#0891B2,#ECFDF5,#064E3B,#A7F3D0,Nature green + ocean blue
23,Remote Work/Collaboration Tool,#6366F1,#818CF8,#10B981,#F5F3FF,#312E81,#E0E7FF,Calm indigo + success green
24,Mental Health App,#8B5CF6,#C4B5FD,#10B981,#FAF5FF,#4C1D95,#EDE9FE,Calming lavender + wellness green
25,Pet Tech App,#F97316,#FB923C,#2563EB,#FFF7ED,#9A3412,#FED7AA,Playful orange + trust blue
26,Smart Home/IoT Dashboard,#1E293B,#334155,#22C55E,#0F172A,#F8FAFC,#475569,Dark tech + status green
27,EV/Charging Ecosystem,#0891B2,#22D3EE,#22C55E,#ECFEFF,#164E63,#A5F3FC,Electric cyan + eco green
28,Subscription Box Service,#D946EF,#E879F9,#F97316,#FDF4FF,#86198F,#F5D0FE,Excitement purple + urgency orange
29,Podcast Platform,#1E1B4B,#312E81,#F97316,#0F0F23,#F8FAFC,#4338CA,Dark audio + warm accent
30,Dating App,#E11D48,#FB7185,#F97316,#FFF1F2,#881337,#FECDD3,Romantic rose + warm orange
31,Micro-Credentials/Badges Platform,#0369A1,#0EA5E9,#CA8A04,#F0F9FF,#0C4A6E,#BAE6FD,Trust blue + achievement gold
32,Knowledge Base/Documentation,#475569,#64748B,#2563EB,#F8FAFC,#1E293B,#E2E8F0,Neutral grey + link blue
33,Hyperlocal Services,#059669,#10B981,#F97316,#ECFDF5,#064E3B,#A7F3D0,Location green + action orange
34,Beauty/Spa/Wellness Service,#EC4899,#F9A8D4,#8B5CF6,#FDF2F8,#831843,#FBCFE8,Soft pink + lavender luxury
35,Luxury/Premium Brand,#1C1917,#44403C,#CA8A04,#FAFAF9,#0C0A09,#D6D3D1,Premium black + gold accent
36,Restaurant/Food Service,#DC2626,#F87171,#CA8A04,#FEF2F2,#450A0A,#FECACA,Appetizing red + warm gold
37,Fitness/Gym App,#F97316,#FB923C,#22C55E,#1F2937,#F8FAFC,#374151,Energy orange + success green
38,Real Estate/Property,#0F766E,#14B8A6,#0369A1,#F0FDFA,#134E4A,#99F6E4,Trust teal + professional blue
39,Travel/Tourism Agency,#0EA5E9,#38BDF8,#F97316,#F0F9FF,#0C4A6E,#BAE6FD,Sky blue + adventure orange
40,Hotel/Hospitality,#1E3A8A,#3B82F6,#CA8A04,#F8FAFC,#1E40AF,#BFDBFE,Luxury navy + gold service
41,Wedding/Event Planning,#DB2777,#F472B6,#CA8A04,#FDF2F8,#831843,#FBCFE8,Romantic pink + elegant gold
42,Legal Services,#1E3A8A,#1E40AF,#B45309,#F8FAFC,#0F172A,#CBD5E1,Authority navy + trust gold
43,Insurance Platform,#0369A1,#0EA5E9,#22C55E,#F0F9FF,#0C4A6E,#BAE6FD,Security blue + protected green
44,Banking/Traditional Finance,#0F172A,#1E3A8A,#CA8A04,#F8FAFC,#020617,#E2E8F0,Trust navy + premium gold
45,Online Course/E-learning,#0D9488,#2DD4BF,#F97316,#F0FDFA,#134E4A,#5EEAD4,Progress teal + achievement orange
46,Non-profit/Charity,#0891B2,#22D3EE,#F97316,#ECFEFF,#164E63,#A5F3FC,Compassion blue + action orange
47,Music Streaming,#1E1B4B,#4338CA,#22C55E,#0F0F23,#F8FAFC,#312E81,Dark audio + play green
48,Video Streaming/OTT,#0F0F23,#1E1B4B,#E11D48,#000000,#F8FAFC,#312E81,Cinema dark + play red
49,Job Board/Recruitment,#0369A1,#0EA5E9,#22C55E,#F0F9FF,#0C4A6E,#BAE6FD,Professional blue + success green
50,Marketplace (P2P),#7C3AED,#A78BFA,#22C55E,#FAF5FF,#4C1D95,#DDD6FE,Trust purple + transaction green
51,Logistics/Delivery,#2563EB,#3B82F6,#F97316,#EFF6FF,#1E40AF,#BFDBFE,Tracking blue + delivery orange
52,Agriculture/Farm Tech,#15803D,#22C55E,#CA8A04,#F0FDF4,#14532D,#BBF7D0,Earth green + harvest gold
53,Construction/Architecture,#64748B,#94A3B8,#F97316,#F8FAFC,#334155,#E2E8F0,Industrial grey + safety orange
54,Automotive/Car Dealership,#1E293B,#334155,#DC2626,#F8FAFC,#0F172A,#E2E8F0,Premium dark + action red
55,Photography Studio,#18181B,#27272A,#F8FAFC,#000000,#FAFAFA,#3F3F46,Pure black + white contrast
56,Coworking Space,#F59E0B,#FBBF24,#2563EB,#FFFBEB,#78350F,#FDE68A,Energetic amber + booking blue
57,Cleaning Service,#0891B2,#22D3EE,#22C55E,#ECFEFF,#164E63,#A5F3FC,Fresh cyan + clean green
58,Home Services (Plumber/Electrician),#1E40AF,#3B82F6,#F97316,#EFF6FF,#1E3A8A,#BFDBFE,Professional blue + urgent orange
59,Childcare/Daycare,#F472B6,#FBCFE8,#22C55E,#FDF2F8,#9D174D,#FCE7F3,Soft pink + safe green
60,Senior Care/Elderly,#0369A1,#38BDF8,#22C55E,#F0F9FF,#0C4A6E,#E0F2FE,Calm blue + reassuring green
61,Medical Clinic,#0891B2,#22D3EE,#22C55E,#F0FDFA,#134E4A,#CCFBF1,Medical teal + health green
62,Pharmacy/Drug Store,#15803D,#22C55E,#0369A1,#F0FDF4,#14532D,#BBF7D0,Pharmacy green + trust blue
63,Dental Practice,#0EA5E9,#38BDF8,#FBBF24,#F0F9FF,#0C4A6E,#BAE6FD,Fresh blue + smile yellow
64,Veterinary Clinic,#0D9488,#14B8A6,#F97316,#F0FDFA,#134E4A,#99F6E4,Caring teal + warm orange
65,Florist/Plant Shop,#15803D,#22C55E,#EC4899,#F0FDF4,#14532D,#BBF7D0,Natural green + floral pink
66,Bakery/Cafe,#92400E,#B45309,#F8FAFC,#FEF3C7,#78350F,#FDE68A,Warm brown + cream white
67,Coffee Shop,#78350F,#92400E,#FBBF24,#FEF3C7,#451A03,#FDE68A,Coffee brown + warm gold
68,Brewery/Winery,#7C2D12,#B91C1C,#CA8A04,#FEF2F2,#450A0A,#FECACA,Deep burgundy + craft gold
69,Airline,#1E3A8A,#3B82F6,#F97316,#EFF6FF,#1E40AF,#BFDBFE,Sky blue + booking orange
70,News/Media Platform,#DC2626,#EF4444,#1E40AF,#FEF2F2,#450A0A,#FECACA,Breaking red + link blue
71,Magazine/Blog,#18181B,#3F3F46,#EC4899,#FAFAFA,#09090B,#E4E4E7,Editorial black + accent pink
72,Freelancer Platform,#6366F1,#818CF8,#22C55E,#EEF2FF,#312E81,#C7D2FE,Creative indigo + hire green
73,Consulting Firm,#0F172A,#334155,#CA8A04,#F8FAFC,#020617,#E2E8F0,Authority navy + premium gold
74,Marketing Agency,#EC4899,#F472B6,#06B6D4,#FDF2F8,#831843,#FBCFE8,Bold pink + creative cyan
75,Event Management,#7C3AED,#A78BFA,#F97316,#FAF5FF,#4C1D95,#DDD6FE,Excitement purple + action orange
76,Conference/Webinar Platform,#1E40AF,#3B82F6,#22C55E,#EFF6FF,#1E3A8A,#BFDBFE,Professional blue + join green
77,Membership/Community,#7C3AED,#A78BFA,#22C55E,#FAF5FF,#4C1D95,#DDD6FE,Community purple + join green
78,Newsletter Platform,#0369A1,#0EA5E9,#F97316,#F0F9FF,#0C4A6E,#BAE6FD,Trust blue + subscribe orange
79,Digital Products/Downloads,#6366F1,#818CF8,#22C55E,#EEF2FF,#312E81,#C7D2FE,Digital indigo + buy green
80,Church/Religious Organization,#7C3AED,#A78BFA,#CA8A04,#FAF5FF,#4C1D95,#DDD6FE,Spiritual purple + warm gold
81,Sports Team/Club,#DC2626,#EF4444,#FBBF24,#FEF2F2,#7F1D1D,#FECACA,Team red + championship gold
82,Museum/Gallery,#18181B,#27272A,#F8FAFC,#FAFAFA,#09090B,#E4E4E7,Gallery black + white space
83,Theater/Cinema,#1E1B4B,#312E81,#CA8A04,#0F0F23,#F8FAFC,#4338CA,Dramatic dark + spotlight gold
84,Language Learning App,#4F46E5,#818CF8,#22C55E,#EEF2FF,#312E81,#C7D2FE,Learning indigo + progress green
85,Coding Bootcamp,#0F172A,#1E293B,#22C55E,#020617,#F8FAFC,#334155,Terminal dark + success green
86,Cybersecurity Platform,#00FF41,#0D0D0D,#FF3333,#000000,#E0E0E0,#1F1F1F,Matrix green + alert red
87,Developer Tool / IDE,#1E293B,#334155,#22C55E,#0F172A,#F8FAFC,#475569,Code dark + run green
88,Biotech / Life Sciences,#0EA5E9,#0284C7,#10B981,#F0F9FF,#0C4A6E,#BAE6FD,DNA blue + life green
89,Space Tech / Aerospace,#F8FAFC,#94A3B8,#3B82F6,#0B0B10,#F8FAFC,#1E293B,Star white + launch blue
90,Architecture / Interior,#171717,#404040,#D4AF37,#FFFFFF,#171717,#E5E5E5,Minimal black + accent gold
91,Quantum Computing,#00FFFF,#7B61FF,#FF00FF,#050510,#E0E0FF,#333344,Quantum cyan + interference purple
92,Biohacking / Longevity,#FF4D4D,#4D94FF,#00E676,#F5F5F7,#1C1C1E,#E5E5EA,Bio red/blue + vitality green
93,Autonomous Systems,#00FF41,#008F11,#FF3333,#0D1117,#E6EDF3,#30363D,Terminal green + alert red
94,Generative AI Art,#18181B,#3F3F46,#EC4899,#FAFAFA,#09090B,#E4E4E7,Canvas neutral + creative pink
95,Spatial / Vision OS,#FFFFFF,#E5E5E5,#007AFF,#888888,#000000,#CCCCCC,Glass white + system blue
96,Climate Tech,#059669,#10B981,#FBBF24,#ECFDF5,#064E3B,#A7F3D0,Nature green + solar gold

```

---

### `.agent/skills/ui-ux-pro-max/data/icons.csv`
**Function:** Source code file.

```csv
No,Category,Icon Name,Keywords,Library,Import Code,Usage,Best For,Style
1,Navigation,menu,hamburger menu navigation toggle bars,Lucide,import { Menu } from 'lucide-react',<Menu />,Mobile navigation drawer toggle sidebar,Outline
2,Navigation,arrow-left,back previous return navigate,Lucide,import { ArrowLeft } from 'lucide-react',<ArrowLeft />,Back button breadcrumb navigation,Outline
3,Navigation,arrow-right,next forward continue navigate,Lucide,import { ArrowRight } from 'lucide-react',<ArrowRight />,Forward button next step CTA,Outline
4,Navigation,chevron-down,dropdown expand accordion select,Lucide,import { ChevronDown } from 'lucide-react',<ChevronDown />,Dropdown toggle accordion header,Outline
5,Navigation,chevron-up,collapse close accordion minimize,Lucide,import { ChevronUp } from 'lucide-react',<ChevronUp />,Accordion collapse minimize,Outline
6,Navigation,home,homepage main dashboard start,Lucide,import { Home } from 'lucide-react',<Home />,Home navigation main page,Outline
7,Navigation,x,close cancel dismiss remove exit,Lucide,import { X } from 'lucide-react',<X />,Modal close dismiss button,Outline
8,Navigation,external-link,open new tab external link,Lucide,import { ExternalLink } from 'lucide-react',<ExternalLink />,External link indicator,Outline
9,Action,plus,add create new insert,Lucide,import { Plus } from 'lucide-react',<Plus />,Add button create new item,Outline
10,Action,minus,remove subtract decrease delete,Lucide,import { Minus } from 'lucide-react',<Minus />,Remove item quantity decrease,Outline
11,Action,trash-2,delete remove discard bin,Lucide,import { Trash2 } from 'lucide-react',<Trash2 />,Delete action destructive,Outline
12,Action,edit,pencil modify change update,Lucide,import { Edit } from 'lucide-react',<Edit />,Edit button modify content,Outline
13,Action,save,disk store persist save,Lucide,import { Save } from 'lucide-react',<Save />,Save button persist changes,Outline
14,Action,download,export save file download,Lucide,import { Download } from 'lucide-react',<Download />,Download file export,Outline
15,Action,upload,import file attach upload,Lucide,import { Upload } from 'lucide-react',<Upload />,Upload file import,Outline
16,Action,copy,duplicate clipboard paste,Lucide,import { Copy } from 'lucide-react',<Copy />,Copy to clipboard,Outline
17,Action,share,social distribute send,Lucide,import { Share } from 'lucide-react',<Share />,Share button social,Outline
18,Action,search,find lookup filter query,Lucide,import { Search } from 'lucide-react',<Search />,Search input bar,Outline
19,Action,filter,sort refine narrow options,Lucide,import { Filter } from 'lucide-react',<Filter />,Filter dropdown sort,Outline
20,Action,settings,gear cog preferences config,Lucide,import { Settings } from 'lucide-react',<Settings />,Settings page configuration,Outline
21,Status,check,success done complete verified,Lucide,import { Check } from 'lucide-react',<Check />,Success state checkmark,Outline
22,Status,check-circle,success verified approved complete,Lucide,import { CheckCircle } from 'lucide-react',<CheckCircle />,Success badge verified,Outline
23,Status,x-circle,error failed cancel rejected,Lucide,import { XCircle } from 'lucide-react',<XCircle />,Error state failed,Outline
24,Status,alert-triangle,warning caution attention danger,Lucide,import { AlertTriangle } from 'lucide-react',<AlertTriangle />,Warning message caution,Outline
25,Status,alert-circle,info notice information help,Lucide,import { AlertCircle } from 'lucide-react',<AlertCircle />,Info notice alert,Outline
26,Status,info,information help tooltip details,Lucide,import { Info } from 'lucide-react',<Info />,Information tooltip help,Outline
27,Status,loader,loading spinner processing wait,Lucide,import { Loader } from 'lucide-react',<Loader className="animate-spin" />,Loading state spinner,Outline
28,Status,clock,time schedule pending wait,Lucide,import { Clock } from 'lucide-react',<Clock />,Pending time schedule,Outline
29,Communication,mail,email message inbox letter,Lucide,import { Mail } from 'lucide-react',<Mail />,Email contact inbox,Outline
30,Communication,message-circle,chat comment bubble conversation,Lucide,import { MessageCircle } from 'lucide-react',<MessageCircle />,Chat comment message,Outline
31,Communication,phone,call mobile telephone contact,Lucide,import { Phone } from 'lucide-react',<Phone />,Phone contact call,Outline
32,Communication,send,submit dispatch message airplane,Lucide,import { Send } from 'lucide-react',<Send />,Send message submit,Outline
33,Communication,bell,notification alert ring reminder,Lucide,import { Bell } from 'lucide-react',<Bell />,Notification bell alert,Outline
34,User,user,profile account person avatar,Lucide,import { User } from 'lucide-react',<User />,User profile account,Outline
35,User,users,team group people members,Lucide,import { Users } from 'lucide-react',<Users />,Team group members,Outline
36,User,user-plus,add invite new member,Lucide,import { UserPlus } from 'lucide-react',<UserPlus />,Add user invite,Outline
37,User,log-in,signin authenticate enter,Lucide,import { LogIn } from 'lucide-react',<LogIn />,Login signin,Outline
38,User,log-out,signout exit leave logout,Lucide,import { LogOut } from 'lucide-react',<LogOut />,Logout signout,Outline
39,Media,image,photo picture gallery thumbnail,Lucide,import { Image } from 'lucide-react',<Image />,Image photo gallery,Outline
40,Media,video,movie film play record,Lucide,import { Video } from 'lucide-react',<Video />,Video player media,Outline
41,Media,play,start video audio media,Lucide,import { Play } from 'lucide-react',<Play />,Play button video audio,Outline
42,Media,pause,stop halt video audio,Lucide,import { Pause } from 'lucide-react',<Pause />,Pause button media,Outline
43,Media,volume-2,sound audio speaker music,Lucide,import { Volume2 } from 'lucide-react',<Volume2 />,Volume audio sound,Outline
44,Media,mic,microphone record voice audio,Lucide,import { Mic } from 'lucide-react',<Mic />,Microphone voice record,Outline
45,Media,camera,photo capture snapshot picture,Lucide,import { Camera } from 'lucide-react',<Camera />,Camera photo capture,Outline
46,Commerce,shopping-cart,cart checkout basket buy,Lucide,import { ShoppingCart } from 'lucide-react',<ShoppingCart />,Shopping cart e-commerce,Outline
47,Commerce,shopping-bag,purchase buy store bag,Lucide,import { ShoppingBag } from 'lucide-react',<ShoppingBag />,Shopping bag purchase,Outline
48,Commerce,credit-card,payment card checkout stripe,Lucide,import { CreditCard } from 'lucide-react',<CreditCard />,Payment credit card,Outline
49,Commerce,dollar-sign,money price currency cost,Lucide,import { DollarSign } from 'lucide-react',<DollarSign />,Price money currency,Outline
50,Commerce,tag,label price discount sale,Lucide,import { Tag } from 'lucide-react',<Tag />,Price tag label,Outline
51,Commerce,gift,present reward bonus offer,Lucide,import { Gift } from 'lucide-react',<Gift />,Gift reward offer,Outline
52,Commerce,percent,discount sale offer promo,Lucide,import { Percent } from 'lucide-react',<Percent />,Discount percentage sale,Outline
53,Data,bar-chart,analytics statistics graph metrics,Lucide,import { BarChart } from 'lucide-react',<BarChart />,Bar chart analytics,Outline
54,Data,pie-chart,statistics distribution breakdown,Lucide,import { PieChart } from 'lucide-react',<PieChart />,Pie chart distribution,Outline
55,Data,trending-up,growth increase positive trend,Lucide,import { TrendingUp } from 'lucide-react',<TrendingUp />,Growth trend positive,Outline
56,Data,trending-down,decline decrease negative trend,Lucide,import { TrendingDown } from 'lucide-react',<TrendingDown />,Decline trend negative,Outline
57,Data,activity,pulse heartbeat monitor live,Lucide,import { Activity } from 'lucide-react',<Activity />,Activity monitor pulse,Outline
58,Data,database,storage server data backend,Lucide,import { Database } from 'lucide-react',<Database />,Database storage,Outline
59,Files,file,document page paper doc,Lucide,import { File } from 'lucide-react',<File />,File document,Outline
60,Files,file-text,document text page article,Lucide,import { FileText } from 'lucide-react',<FileText />,Text document article,Outline
61,Files,folder,directory organize group files,Lucide,import { Folder } from 'lucide-react',<Folder />,Folder directory,Outline
62,Files,folder-open,expanded browse files view,Lucide,import { FolderOpen } from 'lucide-react',<FolderOpen />,Open folder browse,Outline
63,Files,paperclip,attachment attach file link,Lucide,import { Paperclip } from 'lucide-react',<Paperclip />,Attachment paperclip,Outline
64,Files,link,url hyperlink chain connect,Lucide,import { Link } from 'lucide-react',<Link />,Link URL hyperlink,Outline
65,Files,clipboard,paste copy buffer notes,Lucide,import { Clipboard } from 'lucide-react',<Clipboard />,Clipboard paste,Outline
66,Layout,grid,tiles gallery layout dashboard,Lucide,import { Grid } from 'lucide-react',<Grid />,Grid layout gallery,Outline
67,Layout,list,rows table lines items,Lucide,import { List } from 'lucide-react',<List />,List view rows,Outline
68,Layout,columns,layout split dual sidebar,Lucide,import { Columns } from 'lucide-react',<Columns />,Column layout split,Outline
69,Layout,maximize,fullscreen expand enlarge zoom,Lucide,import { Maximize } from 'lucide-react',<Maximize />,Fullscreen maximize,Outline
70,Layout,minimize,reduce shrink collapse exit,Lucide,import { Minimize } from 'lucide-react',<Minimize />,Minimize reduce,Outline
71,Layout,sidebar,panel drawer navigation menu,Lucide,import { Sidebar } from 'lucide-react',<Sidebar />,Sidebar panel,Outline
72,Social,heart,like love favorite wishlist,Lucide,import { Heart } from 'lucide-react',<Heart />,Like favorite love,Outline
73,Social,star,rating review favorite bookmark,Lucide,import { Star } from 'lucide-react',<Star />,Star rating favorite,Outline
74,Social,thumbs-up,like approve agree positive,Lucide,import { ThumbsUp } from 'lucide-react',<ThumbsUp />,Like approve thumb,Outline
75,Social,thumbs-down,dislike disapprove disagree negative,Lucide,import { ThumbsDown } from 'lucide-react',<ThumbsDown />,Dislike disapprove,Outline
76,Social,bookmark,save later favorite mark,Lucide,import { Bookmark } from 'lucide-react',<Bookmark />,Bookmark save,Outline
77,Social,flag,report mark important highlight,Lucide,import { Flag } from 'lucide-react',<Flag />,Flag report,Outline
78,Device,smartphone,mobile phone device touch,Lucide,import { Smartphone } from 'lucide-react',<Smartphone />,Mobile smartphone,Outline
79,Device,tablet,ipad device touch screen,Lucide,import { Tablet } from 'lucide-react',<Tablet />,Tablet device,Outline
80,Device,monitor,desktop screen computer display,Lucide,import { Monitor } from 'lucide-react',<Monitor />,Desktop monitor,Outline
81,Device,laptop,notebook computer portable device,Lucide,import { Laptop } from 'lucide-react',<Laptop />,Laptop computer,Outline
82,Device,printer,print document output paper,Lucide,import { Printer } from 'lucide-react',<Printer />,Printer print,Outline
83,Security,lock,secure password protected private,Lucide,import { Lock } from 'lucide-react',<Lock />,Lock secure,Outline
84,Security,unlock,open access unsecure public,Lucide,import { Unlock } from 'lucide-react',<Unlock />,Unlock open,Outline
85,Security,shield,protection security safe guard,Lucide,import { Shield } from 'lucide-react',<Shield />,Shield protection,Outline
86,Security,key,password access unlock login,Lucide,import { Key } from 'lucide-react',<Key />,Key password,Outline
87,Security,eye,view show visible password,Lucide,import { Eye } from 'lucide-react',<Eye />,Show password view,Outline
88,Security,eye-off,hide invisible password hidden,Lucide,import { EyeOff } from 'lucide-react',<EyeOff />,Hide password,Outline
89,Location,map-pin,location marker place address,Lucide,import { MapPin } from 'lucide-react',<MapPin />,Location pin marker,Outline
90,Location,map,directions navigate geography location,Lucide,import { Map } from 'lucide-react',<Map />,Map directions,Outline
91,Location,navigation,compass direction pointer arrow,Lucide,import { Navigation } from 'lucide-react',<Navigation />,Navigation compass,Outline
92,Location,globe,world international global web,Lucide,import { Globe } from 'lucide-react',<Globe />,Globe world,Outline
93,Time,calendar,date schedule event appointment,Lucide,import { Calendar } from 'lucide-react',<Calendar />,Calendar date,Outline
94,Time,refresh-cw,reload sync update refresh,Lucide,import { RefreshCw } from 'lucide-react',<RefreshCw />,Refresh reload,Outline
95,Time,rotate-ccw,undo back revert history,Lucide,import { RotateCcw } from 'lucide-react',<RotateCcw />,Undo revert,Outline
96,Time,rotate-cw,redo forward repeat history,Lucide,import { RotateCw } from 'lucide-react',<RotateCw />,Redo forward,Outline
97,Development,code,develop programming syntax html,Lucide,import { Code } from 'lucide-react',<Code />,Code development,Outline
98,Development,terminal,console cli command shell,Lucide,import { Terminal } from 'lucide-react',<Terminal />,Terminal console,Outline
99,Development,git-branch,version control branch merge,Lucide,import { GitBranch } from 'lucide-react',<GitBranch />,Git branch,Outline
100,Development,github,repository code open source,Lucide,import { Github } from 'lucide-react',<Github />,GitHub repository,Outline

```

---

### `.agent/skills/ui-ux-pro-max/data/landing.csv`
**Function:** Source code file.

```csv
No,Pattern Name,Keywords,Section Order,Primary CTA Placement,Color Strategy,Recommended Effects,Conversion Optimization
1,Hero + Features + CTA,"hero, hero-centric, features, feature-rich, cta, call-to-action","1. Hero with headline/image, 2. Value prop, 3. Key features (3-5), 4. CTA section, 5. Footer",Hero (sticky) + Bottom,Hero: Brand primary or vibrant. Features: Card bg #FAFAFA. CTA: Contrasting accent color,"Hero parallax, feature card hover lift, CTA glow on hover",Deep CTA placement. Use contrasting color (at least 7:1 contrast ratio). Sticky navbar CTA.
2,Hero + Testimonials + CTA,"hero, testimonials, social-proof, trust, reviews, cta","1. Hero, 2. Problem statement, 3. Solution overview, 4. Testimonials carousel, 5. CTA",Hero (sticky) + Post-testimonials,"Hero: Brand color. Testimonials: Light bg #F5F5F5. Quotes: Italic, muted color #666. CTA: Vibrant","Testimonial carousel slide animations, quote marks animations, avatar fade-in",Social proof before CTA. Use 3-5 testimonials. Include photo + name + role. CTA after social proof.
3,Product Demo + Features,"demo, product-demo, features, showcase, interactive","1. Hero, 2. Product video/mockup (center), 3. Feature breakdown per section, 4. Comparison (optional), 5. CTA",Video center + CTA right/bottom,Video surround: Brand color overlay. Features: Icon color #0080FF. Text: Dark #222,"Video play button pulse, feature scroll reveals, demo interaction highlights",Embedded product demo increases engagement. Use interactive mockup if possible. Auto-play video muted.
4,Minimal Single Column,"minimal, simple, direct, single-column, clean","1. Hero headline, 2. Short description, 3. Benefit bullets (3 max), 4. CTA, 5. Footer","Center, large CTA button",Minimalist: Brand + white #FFFFFF + accent. Buttons: High contrast 7:1+. Text: Black/Dark grey,Minimal hover effects. Smooth scroll. CTA scale on hover (subtle),Single CTA focus. Large typography. Lots of whitespace. No nav clutter. Mobile-first.
5,Funnel (3-Step Conversion),"funnel, conversion, steps, wizard, onboarding","1. Hero, 2. Step 1 (problem), 3. Step 2 (solution), 4. Step 3 (action), 5. CTA progression",Each step: mini-CTA. Final: main CTA,"Step colors: 1 (Red/Problem), 2 (Orange/Process), 3 (Green/Solution). CTA: Brand color","Step number animations, progress bar fill, step transitions smooth scroll",Progressive disclosure. Show only essential info per step. Use progress indicators. Multiple CTAs.
6,Comparison Table + CTA,"comparison, table, compare, versus, cta","1. Hero, 2. Problem intro, 3. Comparison table (product vs competitors), 4. Pricing (optional), 5. CTA",Table: Right column. CTA: Below table,Table: Alternating rows (white/light grey). Your product: Highlight #FFFACD (light yellow) or green. Text: Dark,"Table row hover highlight, price toggle animations, feature checkmark animations",Use comparison to show unique value. Highlight your product row. Include 'free trial' in pricing row.
7,Lead Magnet + Form,"lead, form, signup, capture, email, magnet","1. Hero (benefit headline), 2. Lead magnet preview (ebook cover, checklist, etc), 3. Form (minimal fields), 4. CTA submit",Form CTA: Submit button,Lead magnet: Professional design. Form: Clean white bg. Inputs: Light border #CCCCCC. CTA: Brand color,"Form focus state animations, input validation animations, success confirmation animation",Form fields ≤ 3 for best conversion. Offer valuable lead magnet preview. Show form submission progress.
8,Pricing Page + CTA,"pricing, plans, tiers, comparison, cta","1. Hero (pricing headline), 2. Price comparison cards, 3. Feature comparison table, 4. FAQ section, 5. Final CTA",Each card: CTA button. Sticky CTA in nav,"Free: Grey, Starter: Blue, Pro: Green/Gold, Enterprise: Dark. Cards: 1px border, shadow","Price toggle animation (monthly/yearly), card comparison highlight, FAQ accordion open/close",Recommend starter plan (pre-select/highlight). Show annual discount (20-30%). Use FAQs to address concerns.
9,Video-First Hero,"video, hero, media, visual, engaging","1. Hero with video background, 2. Key features overlay, 3. Benefits section, 4. CTA",Overlay on video (center/bottom) + Bottom section,Dark overlay 60% on video. Brand accent for CTA. White text on dark.,"Video autoplay muted, parallax scroll, text fade-in on scroll",86% higher engagement with video. Add captions for accessibility. Compress video for performance.
10,Scroll-Triggered Storytelling,"storytelling, scroll, narrative, story, immersive","1. Intro hook, 2. Chapter 1 (problem), 3. Chapter 2 (journey), 4. Chapter 3 (solution), 5. Climax CTA",End of each chapter (mini) + Final climax CTA,Progressive reveal. Each chapter has distinct color. Building intensity.,"ScrollTrigger animations, parallax layers, progressive disclosure, chapter transitions",Narrative increases time-on-page 3x. Use progress indicator. Mobile: simplify animations.
11,AI Personalization Landing,"ai, personalization, smart, recommendation, dynamic","1. Dynamic hero (personalized), 2. Relevant features, 3. Tailored testimonials, 4. Smart CTA",Context-aware placement based on user segment,Adaptive based on user data. A/B test color variations per segment.,"Dynamic content swap, fade transitions, personalized product recommendations",20%+ conversion with personalization. Requires analytics integration. Fallback for new users.
12,Waitlist/Coming Soon,"waitlist, coming-soon, launch, early-access, notify","1. Hero with countdown, 2. Product teaser/preview, 3. Email capture form, 4. Social proof (waitlist count)",Email form prominent (above fold) + Sticky form on scroll,Anticipation: Dark + accent highlights. Countdown in brand color. Urgency indicators.,"Countdown timer animation, email validation feedback, success confetti, social share buttons",Scarcity + exclusivity. Show waitlist count. Early access benefits. Referral program.
13,Comparison Table Focus,"comparison, table, versus, compare, features","1. Hero (problem statement), 2. Comparison matrix (you vs competitors), 3. Feature deep-dive, 4. Winner CTA",After comparison table (highlighted row) + Bottom,Your product column highlighted (accent bg or green). Competitors neutral. Checkmarks green.,"Table row hover highlight, feature checkmark animations, sticky comparison header",Show value vs competitors. 35% higher conversion. Be factual. Include pricing if favorable.
14,Pricing-Focused Landing,"pricing, price, cost, plans, subscription","1. Hero (value proposition), 2. Pricing cards (3 tiers), 3. Feature comparison, 4. FAQ, 5. Final CTA",Each pricing card + Sticky CTA in nav + Bottom,Popular plan highlighted (brand color border/bg). Free: grey. Enterprise: dark/premium.,"Price toggle monthly/annual animation, card hover lift, FAQ accordion smooth open",Annual discount 20-30%. Recommend mid-tier (most popular badge). Address objections in FAQ.
15,App Store Style Landing,"app, mobile, download, store, install","1. Hero with device mockup, 2. Screenshots carousel, 3. Features with icons, 4. Reviews/ratings, 5. Download CTAs",Download buttons prominent (App Store + Play Store) throughout,Dark/light matching app store feel. Star ratings in gold. Screenshots with device frames.,"Device mockup rotations, screenshot slider, star rating animations, download button pulse",Show real screenshots. Include ratings (4.5+ stars). QR code for mobile. Platform-specific CTAs.
16,FAQ/Documentation Landing,"faq, documentation, help, support, questions","1. Hero with search bar, 2. Popular categories, 3. FAQ accordion, 4. Contact/support CTA",Search bar prominent + Contact CTA for unresolved questions,"Clean, high readability. Minimal color. Category icons in brand color. Success green for resolved.","Search autocomplete, smooth accordion open/close, category hover, helpful feedback buttons",Reduce support tickets. Track search analytics. Show related articles. Contact escalation path.
17,Immersive/Interactive Experience,"immersive, interactive, experience, 3d, animation","1. Full-screen interactive element, 2. Guided product tour, 3. Key benefits revealed, 4. CTA after completion",After interaction complete + Skip option for impatient users,Immersive experience colors. Dark background for focus. Highlight interactive elements.,"WebGL, 3D interactions, gamification elements, progress indicators, reward animations",40% higher engagement. Performance trade-off. Provide skip option. Mobile fallback essential.
18,Event/Conference Landing,"event, conference, meetup, registration, schedule","1. Hero (date/location/countdown), 2. Speakers grid, 3. Agenda/schedule, 4. Sponsors, 5. Register CTA",Register CTA sticky + After speakers + Bottom,Urgency colors (countdown). Event branding. Speaker cards professional. Sponsor logos neutral.,"Countdown timer, speaker hover cards with bio, agenda tabs, early bird countdown",Early bird pricing with deadline. Social proof (past attendees). Speaker credibility. Multi-ticket discounts.
19,Product Review/Ratings Focused,"reviews, ratings, testimonials, social-proof, stars","1. Hero (product + aggregate rating), 2. Rating breakdown, 3. Individual reviews, 4. Buy/CTA",After reviews summary + Buy button alongside reviews,Trust colors. Star ratings gold. Verified badge green. Review sentiment colors.,"Star fill animations, review filtering, helpful vote interactions, photo lightbox",User-generated content builds trust. Show verified purchases. Filter by rating. Respond to negative reviews.
20,Community/Forum Landing,"community, forum, social, members, discussion","1. Hero (community value prop), 2. Popular topics/categories, 3. Active members showcase, 4. Join CTA",Join button prominent + After member showcase,"Warm, welcoming. Member photos add humanity. Topic badges in brand colors. Activity indicators green.","Member avatars animation, activity feed live updates, topic hover previews, join success celebration","Show active community (member count, posts today). Highlight benefits. Preview content. Easy onboarding."
21,Before-After Transformation,"before-after, transformation, results, comparison","1. Hero (problem state), 2. Transformation slider/comparison, 3. How it works, 4. Results CTA",After transformation reveal + Bottom,Contrast: muted/grey (before) vs vibrant/colorful (after). Success green for results.,"Slider comparison interaction, before/after reveal animations, result counters, testimonial videos",Visual proof of value. 45% higher conversion. Real results. Specific metrics. Guarantee offer.
22,Marketplace / Directory,"marketplace, directory, search, listing","1. Hero (Search focused), 2. Categories, 3. Featured Listings, 4. Trust/Safety, 5. CTA (Become a host/seller)",Hero Search Bar + Navbar 'List your item',Search: High contrast. Categories: Visual icons. Trust: Blue/Green.,Search autocomplete animation," map hover pins,  card carousel, Search bar is the CTA. Reduce friction to search. Popular searches suggestions."
23,Newsletter / Content First,"newsletter, content, writer, blog, subscribe","1. Hero (Value Prop + Form), 2. Recent Issues/Archives, 3. Social Proof (Subscriber count), 4. About Author",Hero inline form + Sticky header form,Minimalist. Paper-like background. Text focus. Accent color for Subscribe.,Text highlight animations," typewriter effect,  subtle fade-in, Single field form (Email only). Show 'Join X, 000 readers'. Read sample link."
24,Webinar Registration,"webinar, registration, event, training, live","1. Hero (Topic + Timer + Form), 2. What you'll learn, 3. Speaker Bio, 4. Urgency/Bonuses, 5. Form (again)",Hero (Right side form) + Bottom anchor,Urgency: Red/Orange. Professional: Blue/Navy. Form: High contrast white.,Countdown timer," speaker avatar float,  urgent ticker, Limited seats logic. 'Live' indicator. Auto-fill timezone."
25,Enterprise Gateway,"enterprise, corporate, gateway, solutions, portal","1. Hero (Video/Mission), 2. Solutions by Industry, 3. Solutions by Role, 4. Client Logos, 5. Contact Sales",Contact Sales (Primary) + Login (Secondary),Corporate: Navy/Grey. High integrity. Conservative accents.,Slow video background," logo carousel,  tab switching for industries, Path selection (I am a...). Mega menu navigation. Trust signals prominent."
26,Portfolio Grid,"portfolio, grid, showcase, gallery, masonry","1. Hero (Name/Role), 2. Project Grid (Masonry), 3. About/Philosophy, 4. Contact",Project Card Hover + Footer Contact,Neutral background (let work shine). Text: Black/White. Accent: Minimal.,Image lazy load reveal," hover overlay info,  lightbox view, Visuals first. Filter by category. Fast loading essential."
27,Horizontal Scroll Journey,"horizontal, scroll, journey, gallery, storytelling, panoramic","1. Intro (Vertical), 2. The Journey (Horizontal Track), 3. Detail Reveal, 4. Vertical Footer",Floating Sticky CTA or End of Horizontal Track,Continuous palette transition. Chapter colors. Progress bar #000000.,"Scroll-jacking (careful), parallax layers, horizontal slide, progress indicator","Immersive product discovery. High engagement. Keep navigation visible.
28,Bento Grid Showcase,bento,  grid,  features,  modular,  apple-style,  showcase"", 1. Hero, 2. Bento Grid (Key Features), 3. Detail Cards, 4. Tech Specs, 5. CTA, Floating Action Button or Bottom of Grid, Card backgrounds: #F5F5F7 or Glass. Icons: Vibrant brand colors. Text: Dark., Hover card scale (1.02), video inside cards, tilt effect, staggered reveal, Scannable value props. High information density without clutter. Mobile stack.
29,Interactive 3D Configurator,3d,  configurator,  customizer,  interactive,  product"", 1. Hero (Configurator), 2. Feature Highlight (synced), 3. Price/Specs, 4. Purchase, Inside Configurator UI + Sticky Bottom Bar, Neutral studio background. Product: Realistic materials. UI: Minimal overlay., Real-time rendering, material swap animation, camera rotate/zoom, light reflection, Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart.
30,AI-Driven Dynamic Landing,ai,  dynamic,  personalized,  adaptive,  generative"", 1. Prompt/Input Hero, 2. Generated Result Preview, 3. How it Works, 4. Value Prop, Input Field (Hero) + 'Try it' Buttons, Adaptive to user input. Dark mode for compute feel. Neon accents., Typing text effects, shimmering generation loaders, morphing layouts, Immediate value demonstration. 'Show, don't tell'. Low friction start."

```

---

### `.agent/skills/ui-ux-pro-max/data/products.csv`
**Function:** Source code file.

```csv
No,Product Type,Keywords,Primary Style Recommendation,Secondary Styles,Landing Page Pattern,Dashboard Style (if applicable),Color Palette Focus,Key Considerations
1,SaaS (General),"app, b2b, cloud, general, saas, software, subscription",Glassmorphism + Flat Design,"Soft UI Evolution, Minimalism",Hero + Features + CTA,Data-Dense + Real-Time Monitoring,Trust blue + accent contrast,Balance modern feel with clarity. Focus on CTAs.
2,Micro SaaS,"app, b2b, cloud, indie, micro, micro-saas, niche, saas, small, software, solo, subscription",Flat Design + Vibrant & Block,"Motion-Driven, Micro-interactions",Minimal & Direct + Demo,Executive Dashboard,Vibrant primary + white space,"Keep simple, show product quickly. Speed is key."
3,E-commerce,"buy, commerce, e, ecommerce, products, retail, sell, shop, store",Vibrant & Block-based,"Aurora UI, Motion-Driven",Feature-Rich Showcase,Sales Intelligence Dashboard,Brand primary + success green,Engagement & conversions. High visual hierarchy.
4,E-commerce Luxury,"buy, commerce, e, ecommerce, elegant, exclusive, high-end, luxury, premium, products, retail, sell, shop, store",Liquid Glass + Glassmorphism,"3D & Hyperrealism, Aurora UI",Feature-Rich Showcase,Sales Intelligence Dashboard,Premium colors + minimal accent,Elegance & sophistication. Premium materials.
5,Service Landing Page,"appointment, booking, consultation, conversion, landing, marketing, page, service",Hero-Centric + Trust & Authority,"Social Proof-Focused, Storytelling",Hero-Centric Design,N/A - Analytics for conversions,Brand primary + trust colors,Social proof essential. Show expertise.
6,B2B Service,"appointment, b, b2b, booking, business, consultation, corporate, enterprise, service",Trust & Authority + Minimal,"Feature-Rich, Conversion-Optimized",Feature-Rich Showcase,Sales Intelligence Dashboard,Professional blue + neutral grey,Credibility essential. Clear ROI messaging.
7,Financial Dashboard,"admin, analytics, dashboard, data, financial, panel",Dark Mode (OLED) + Data-Dense,"Minimalism, Accessible & Ethical",N/A - Dashboard focused,Financial Dashboard,Dark bg + red/green alerts + trust blue,"High contrast, real-time updates, accuracy paramount."
8,Analytics Dashboard,"admin, analytics, dashboard, data, panel",Data-Dense + Heat Map & Heatmap,"Minimalism, Dark Mode (OLED)",N/A - Analytics focused,Drill-Down Analytics + Comparative,Cool→Hot gradients + neutral grey,Clarity > aesthetics. Color-coded data priority.
9,Healthcare App,"app, clinic, health, healthcare, medical, patient",Neumorphism + Accessible & Ethical,"Soft UI Evolution, Claymorphism (for patients)",Social Proof-Focused,User Behavior Analytics,Calm blue + health green + trust,Accessibility mandatory. Calming aesthetic.
10,Educational App,"app, course, education, educational, learning, school, training",Claymorphism + Micro-interactions,"Vibrant & Block-based, Flat Design",Storytelling-Driven,User Behavior Analytics,Playful colors + clear hierarchy,Engagement & ease of use. Age-appropriate design.
11,Creative Agency,"agency, creative, design, marketing, studio",Brutalism + Motion-Driven,"Retro-Futurism, Storytelling-Driven",Storytelling-Driven,N/A - Portfolio focused,Bold primaries + artistic freedom,Differentiation key. Wow-factor necessary.
12,Portfolio/Personal,"creative, personal, portfolio, projects, showcase, work",Motion-Driven + Minimalism,"Brutalism, Aurora UI",Storytelling-Driven,N/A - Personal branding,Brand primary + artistic interpretation,Showcase work. Personality shine through.
13,Gaming,"entertainment, esports, game, gaming, play",3D & Hyperrealism + Retro-Futurism,"Motion-Driven, Vibrant & Block",Feature-Rich Showcase,N/A - Game focused,Vibrant + neon + immersive colors,Immersion priority. Performance critical.
14,Government/Public Service,"appointment, booking, consultation, government, public, service",Accessible & Ethical + Minimalism,"Flat Design, Inclusive Design",Minimal & Direct,Executive Dashboard,Professional blue + high contrast,WCAG AAA mandatory. Trust paramount.
15,Fintech/Crypto,"banking, blockchain, crypto, defi, finance, fintech, money, nft, payment, web3",Glassmorphism + Dark Mode (OLED),"Retro-Futurism, Motion-Driven",Conversion-Optimized,Real-Time Monitoring + Predictive,Dark tech colors + trust + vibrant accents,Security perception. Real-time data critical.
16,Social Media App,"app, community, content, entertainment, media, network, sharing, social, streaming, users, video",Vibrant & Block-based + Motion-Driven,"Aurora UI, Micro-interactions",Feature-Rich Showcase,User Behavior Analytics,Vibrant + engagement colors,Engagement & retention. Addictive design ethics.
17,Productivity Tool,"collaboration, productivity, project, task, tool, workflow",Flat Design + Micro-interactions,"Minimalism, Soft UI Evolution",Interactive Product Demo,Drill-Down Analytics,Clear hierarchy + functional colors,Ease of use. Speed & efficiency focus.
18,Design System/Component Library,"component, design, library, system",Minimalism + Accessible & Ethical,"Flat Design, Zero Interface",Feature-Rich Showcase,N/A - Dev focused,Clear hierarchy + code-like structure,Consistency. Developer-first approach.
19,AI/Chatbot Platform,"ai, artificial-intelligence, automation, chatbot, machine-learning, ml, platform",AI-Native UI + Minimalism,"Zero Interface, Glassmorphism",Interactive Product Demo,AI/ML Analytics Dashboard,Neutral + AI Purple (#6366F1),Conversational UI. Streaming text. Context awareness. Minimal chrome.
20,NFT/Web3 Platform,"nft, platform, web",Cyberpunk UI + Glassmorphism,"Aurora UI, 3D & Hyperrealism",Feature-Rich Showcase,Crypto/Blockchain Dashboard,Dark + Neon + Gold (#FFD700),Wallet integration. Transaction feedback. Gas fees display. Dark mode essential.
21,Creator Economy Platform,"creator, economy, platform",Vibrant & Block-based + Bento Box Grid,"Motion-Driven, Aurora UI",Social Proof-Focused,User Behavior Analytics,Vibrant + Brand colors,Creator profiles. Monetization display. Engagement metrics. Social proof.
22,Sustainability/ESG Platform,"ai, artificial-intelligence, automation, esg, machine-learning, ml, platform, sustainability",Organic Biophilic + Minimalism,"Accessible & Ethical, Flat Design",Trust & Authority,Energy/Utilities Dashboard,Green (#228B22) + Earth tones,Carbon footprint visuals. Progress indicators. Certification badges. Eco-friendly imagery.
23,Remote Work/Collaboration Tool,"collaboration, remote, tool, work",Soft UI Evolution + Minimalism,"Glassmorphism, Micro-interactions",Feature-Rich Showcase,Drill-Down Analytics,Calm Blue + Neutral grey,Real-time collaboration. Status indicators. Video integration. Notification management.
24,Mental Health App,"app, health, mental",Neumorphism + Accessible & Ethical,"Claymorphism, Soft UI Evolution",Social Proof-Focused,Healthcare Analytics,Calm Pastels + Trust colors,Calming aesthetics. Privacy-first. Crisis resources. Progress tracking. Accessibility mandatory.
25,Pet Tech App,"app, pet, tech",Claymorphism + Vibrant & Block-based,"Micro-interactions, Flat Design",Storytelling-Driven,User Behavior Analytics,Playful + Warm colors,Pet profiles. Health tracking. Playful UI. Photo galleries. Vet integration.
26,Smart Home/IoT Dashboard,"admin, analytics, dashboard, data, home, iot, panel, smart",Glassmorphism + Dark Mode (OLED),"Minimalism, AI-Native UI",Interactive Product Demo,Real-Time Monitoring,Dark + Status indicator colors,Device status. Real-time controls. Energy monitoring. Automation rules. Quick actions.
27,EV/Charging Ecosystem,"charging, ecosystem, ev",Minimalism + Aurora UI,"Glassmorphism, Organic Biophilic",Hero-Centric Design,Energy/Utilities Dashboard,Electric Blue (#009CD1) + Green,Charging station maps. Range estimation. Cost calculation. Environmental impact.
28,Subscription Box Service,"appointment, booking, box, consultation, membership, plan, recurring, service, subscription",Vibrant & Block-based + Motion-Driven,"Claymorphism, Aurora UI",Feature-Rich Showcase,E-commerce Analytics,Brand + Excitement colors,Unboxing experience. Personalization quiz. Subscription management. Product reveals.
29,Podcast Platform,"platform, podcast",Dark Mode (OLED) + Minimalism,"Motion-Driven, Vibrant & Block-based",Storytelling-Driven,Media/Entertainment Dashboard,Dark + Audio waveform accents,Audio player UX. Episode discovery. Creator tools. Analytics for podcasters.
30,Dating App,"app, dating",Vibrant & Block-based + Motion-Driven,"Aurora UI, Glassmorphism",Social Proof-Focused,User Behavior Analytics,Warm + Romantic (Pink/Red gradients),Profile cards. Swipe interactions. Match animations. Safety features. Video chat.
31,Micro-Credentials/Badges Platform,"badges, credentials, micro, platform",Minimalism + Flat Design,"Accessible & Ethical, Swiss Modernism 2.0",Trust & Authority,Education Dashboard,Trust Blue + Gold (#FFD700),Credential verification. Badge display. Progress tracking. Issuer trust. LinkedIn integration.
32,Knowledge Base/Documentation,"base, documentation, knowledge",Minimalism + Accessible & Ethical,"Swiss Modernism 2.0, Flat Design",FAQ/Documentation,N/A - Documentation focused,Clean hierarchy + minimal color,Search-first. Clear navigation. Code highlighting. Version switching. Feedback system.
33,Hyperlocal Services,"appointment, booking, consultation, hyperlocal, service, services",Minimalism + Vibrant & Block-based,"Micro-interactions, Flat Design",Conversion-Optimized,Drill-Down Analytics + Map,Location markers + Trust colors,Map integration. Service categories. Provider profiles. Booking system. Reviews.
34,Beauty/Spa/Wellness Service,"appointment, beauty, booking, consultation, service, spa, wellness",Soft UI Evolution + Neumorphism,"Glassmorphism, Minimalism",Hero-Centric Design + Social Proof,User Behavior Analytics,Soft pastels (Pink #FFB6C1 Sage #90EE90) + Cream + Gold accents,Calming aesthetic. Booking system. Service menu. Before/after gallery. Testimonials. Relaxing imagery.
35,Luxury/Premium Brand,"brand, elegant, exclusive, high-end, luxury, premium",Liquid Glass + Glassmorphism,"Minimalism, 3D & Hyperrealism",Storytelling-Driven + Feature-Rich,Sales Intelligence Dashboard,Black + Gold (#FFD700) + White + Minimal accent,Elegance paramount. Premium imagery. Storytelling. High-quality visuals. Exclusive feel.
36,Restaurant/Food Service,"appointment, booking, consultation, delivery, food, menu, order, restaurant, service",Vibrant & Block-based + Motion-Driven,"Claymorphism, Flat Design",Hero-Centric Design + Conversion,N/A - Booking focused,Warm colors (Orange Red Brown) + appetizing imagery,Menu display. Online ordering. Reservation system. Food photography. Location/hours prominent.
37,Fitness/Gym App,"app, exercise, fitness, gym, health, workout",Vibrant & Block-based + Dark Mode (OLED),"Motion-Driven, Neumorphism",Feature-Rich Showcase,User Behavior Analytics,Energetic (Orange #FF6B35 Electric Blue) + Dark bg,Progress tracking. Workout plans. Community features. Achievements. Motivational design.
38,Real Estate/Property,"buy, estate, housing, property, real, real-estate, rent",Glassmorphism + Minimalism,"Motion-Driven, 3D & Hyperrealism",Hero-Centric Design + Feature-Rich,Sales Intelligence Dashboard,Trust Blue (#0077B6) + Gold accents + White,Property listings. Virtual tours. Map integration. Agent profiles. Mortgage calculator. High-quality imagery.
39,Travel/Tourism Agency,"agency, booking, creative, design, flight, hotel, marketing, studio, tourism, travel, vacation",Aurora UI + Motion-Driven,"Vibrant & Block-based, Glassmorphism",Storytelling-Driven + Hero-Centric,Booking Analytics,Vibrant destination colors + Sky Blue + Warm accents,Destination showcase. Booking system. Itinerary builder. Reviews. Inspiration galleries. Mobile-first.
40,Hotel/Hospitality,"hospitality, hotel",Liquid Glass + Minimalism,"Glassmorphism, Soft UI Evolution",Hero-Centric Design + Social Proof,Revenue Management Dashboard,Warm neutrals + Gold (#D4AF37) + Brand accent,Room booking. Amenities showcase. Location maps. Guest reviews. Seasonal pricing. Luxury imagery.
41,Wedding/Event Planning,"conference, event, meetup, planning, registration, ticket, wedding",Soft UI Evolution + Aurora UI,"Glassmorphism, Motion-Driven",Storytelling-Driven + Social Proof,N/A - Planning focused,Soft Pink (#FFD6E0) + Gold + Cream + Sage,Portfolio gallery. Vendor directory. Planning tools. Timeline. Budget tracker. Romantic aesthetic.
42,Legal Services,"appointment, attorney, booking, compliance, consultation, contract, law, legal, service, services",Trust & Authority + Minimalism,"Accessible & Ethical, Swiss Modernism 2.0",Trust & Authority + Minimal,Case Management Dashboard,Navy Blue (#1E3A5F) + Gold + White,Credibility paramount. Practice areas. Attorney profiles. Case results. Contact forms. Professional imagery.
43,Insurance Platform,"insurance, platform",Trust & Authority + Flat Design,"Accessible & Ethical, Minimalism",Conversion-Optimized + Trust,Claims Analytics Dashboard,Trust Blue (#0066CC) + Green (security) + Neutral,Quote calculator. Policy comparison. Claims process. Trust signals. Clear pricing. Security badges.
44,Banking/Traditional Finance,"banking, finance, traditional",Minimalism + Accessible & Ethical,"Trust & Authority, Dark Mode (OLED)",Trust & Authority + Feature-Rich,Financial Dashboard,Navy (#0A1628) + Trust Blue + Gold accents,Security-first. Account overview. Transaction history. Mobile banking. Accessibility critical. Trust paramount.
45,Online Course/E-learning,"course, e, learning, online",Claymorphism + Vibrant & Block-based,"Motion-Driven, Flat Design",Feature-Rich Showcase + Social Proof,Education Dashboard,Vibrant learning colors + Progress green,Course catalog. Progress tracking. Video player. Quizzes. Certificates. Community forums. Gamification.
46,Non-profit/Charity,"charity, non, profit",Accessible & Ethical + Organic Biophilic,"Minimalism, Storytelling-Driven",Storytelling-Driven + Trust,Donation Analytics Dashboard,Cause-related colors + Trust + Warm,Impact stories. Donation flow. Transparency reports. Volunteer signup. Event calendar. Emotional connection.
47,Music Streaming,"music, streaming",Dark Mode (OLED) + Vibrant & Block-based,"Motion-Driven, Aurora UI",Feature-Rich Showcase,Media/Entertainment Dashboard,Dark (#121212) + Vibrant accents + Album art colors,Audio player. Playlist management. Artist pages. Personalization. Social features. Waveform visualizations.
48,Video Streaming/OTT,"ott, streaming, video",Dark Mode (OLED) + Motion-Driven,"Glassmorphism, Vibrant & Block-based",Hero-Centric Design + Feature-Rich,Media/Entertainment Dashboard,Dark bg + Content poster colors + Brand accent,Video player. Content discovery. Watchlist. Continue watching. Personalized recommendations. Thumbnail-heavy.
49,Job Board/Recruitment,"board, job, recruitment",Flat Design + Minimalism,"Vibrant & Block-based, Accessible & Ethical",Conversion-Optimized + Feature-Rich,HR Analytics Dashboard,Professional Blue + Success Green + Neutral,Job listings. Search/filter. Company profiles. Application tracking. Resume upload. Salary insights.
50,Marketplace (P2P),"buyers, listings, marketplace, p, platform, sellers",Vibrant & Block-based + Flat Design,"Micro-interactions, Trust & Authority",Feature-Rich Showcase + Social Proof,E-commerce Analytics,Trust colors + Category colors + Success green,Seller/buyer profiles. Listings. Reviews/ratings. Secure payment. Messaging. Search/filter. Trust badges.
51,Logistics/Delivery,"delivery, logistics",Minimalism + Flat Design,"Dark Mode (OLED), Micro-interactions",Feature-Rich Showcase + Conversion,Real-Time Monitoring + Route Analytics,Blue (#2563EB) + Orange (tracking) + Green (delivered),Real-time tracking. Delivery scheduling. Route optimization. Driver management. Status updates. Map integration.
52,Agriculture/Farm Tech,"agriculture, farm, tech",Organic Biophilic + Flat Design,"Minimalism, Accessible & Ethical",Feature-Rich Showcase + Trust,IoT Sensor Dashboard,Earth Green (#4A7C23) + Brown + Sky Blue,Crop monitoring. Weather data. IoT sensors. Yield tracking. Market prices. Sustainable imagery.
53,Construction/Architecture,"architecture, construction",Minimalism + 3D & Hyperrealism,"Brutalism, Swiss Modernism 2.0",Hero-Centric Design + Feature-Rich,Project Management Dashboard,Grey (#4A4A4A) + Orange (safety) + Blueprint Blue,Project portfolio. 3D renders. Timeline. Material specs. Team collaboration. Blueprint aesthetic.
54,Automotive/Car Dealership,"automotive, car, dealership",Motion-Driven + 3D & Hyperrealism,"Dark Mode (OLED), Glassmorphism",Hero-Centric Design + Feature-Rich,Sales Intelligence Dashboard,Brand colors + Metallic accents + Dark/Light,Vehicle showcase. 360° views. Comparison tools. Financing calculator. Test drive booking. High-quality imagery.
55,Photography Studio,"photography, studio",Motion-Driven + Minimalism,"Aurora UI, Glassmorphism",Storytelling-Driven + Hero-Centric,N/A - Portfolio focused,Black + White + Minimal accent,Portfolio gallery. Before/after. Service packages. Booking system. Client galleries. Full-bleed imagery.
56,Coworking Space,"coworking, space",Vibrant & Block-based + Glassmorphism,"Minimalism, Motion-Driven",Hero-Centric Design + Feature-Rich,Occupancy Dashboard,Energetic colors + Wood tones + Brand accent,Space tour. Membership plans. Booking system. Amenities. Community events. Virtual tour.
57,Cleaning Service,"appointment, booking, cleaning, consultation, service",Soft UI Evolution + Flat Design,"Minimalism, Micro-interactions",Conversion-Optimized + Trust,Service Analytics,Fresh Blue (#00B4D8) + Clean White + Green,Service packages. Booking system. Price calculator. Before/after gallery. Reviews. Trust badges.
58,Home Services (Plumber/Electrician),"appointment, booking, consultation, electrician, home, plumber, service, services",Flat Design + Trust & Authority,"Minimalism, Accessible & Ethical",Conversion-Optimized + Trust,Service Analytics,Trust Blue + Safety Orange + Professional grey,Service list. Emergency contact. Booking. Price transparency. Certifications. Local trust signals.
59,Childcare/Daycare,"childcare, daycare",Claymorphism + Vibrant & Block-based,"Soft UI Evolution, Accessible & Ethical",Social Proof-Focused + Trust,Parent Dashboard,Playful pastels + Safe colors + Warm accents,Programs. Staff profiles. Safety certifications. Parent portal. Activity updates. Cheerful imagery.
60,Senior Care/Elderly,"care, elderly, senior",Accessible & Ethical + Soft UI Evolution,"Minimalism, Neumorphism",Trust & Authority + Social Proof,Healthcare Analytics,Calm Blue + Warm neutrals + Large text,Care services. Staff qualifications. Facility tour. Family portal. Large touch targets. High contrast. Accessibility-first.
61,Medical Clinic,"clinic, medical",Accessible & Ethical + Minimalism,"Neumorphism, Trust & Authority",Trust & Authority + Conversion,Healthcare Analytics,Medical Blue (#0077B6) + Trust White + Calm Green,Services. Doctor profiles. Online booking. Patient portal. Insurance info. HIPAA compliant. Trust signals.
62,Pharmacy/Drug Store,"drug, pharmacy, store",Flat Design + Accessible & Ethical,"Minimalism, Trust & Authority",Conversion-Optimized + Trust,Inventory Dashboard,Pharmacy Green + Trust Blue + Clean White,Product catalog. Prescription upload. Refill reminders. Health info. Store locator. Safety certifications.
63,Dental Practice,"dental, practice",Soft UI Evolution + Minimalism,"Accessible & Ethical, Trust & Authority",Social Proof-Focused + Conversion,Patient Analytics,Fresh Blue + White + Smile Yellow accent,Services. Dentist profiles. Before/after. Online booking. Insurance. Patient testimonials. Friendly imagery.
64,Veterinary Clinic,"clinic, veterinary",Claymorphism + Accessible & Ethical,"Soft UI Evolution, Flat Design",Social Proof-Focused + Trust,Pet Health Dashboard,Caring Blue + Pet-friendly colors + Warm accents,Pet services. Vet profiles. Online booking. Pet portal. Emergency info. Friendly animal imagery.
65,Florist/Plant Shop,"florist, plant, shop",Organic Biophilic + Vibrant & Block-based,"Aurora UI, Motion-Driven",Hero-Centric Design + Conversion,E-commerce Analytics,Natural Green + Floral pinks/purples + Earth tones,Product catalog. Occasion categories. Delivery scheduling. Care guides. Seasonal collections. Beautiful imagery.
66,Bakery/Cafe,"bakery, cafe",Vibrant & Block-based + Soft UI Evolution,"Claymorphism, Motion-Driven",Hero-Centric Design + Conversion,N/A - Order focused,Warm Brown + Cream + Appetizing accents,Menu display. Online ordering. Location/hours. Catering. Seasonal specials. Appetizing photography.
67,Coffee Shop,"coffee, shop",Minimalism + Organic Biophilic,"Soft UI Evolution, Flat Design",Hero-Centric Design + Conversion,N/A - Order focused,Coffee Brown (#6F4E37) + Cream + Warm accents,Menu. Online ordering. Loyalty program. Location. Story/origin. Cozy aesthetic.
68,Brewery/Winery,"brewery, winery",Motion-Driven + Storytelling-Driven,"Dark Mode (OLED), Organic Biophilic",Storytelling-Driven + Hero-Centric,N/A - E-commerce focused,Deep amber/burgundy + Gold + Craft aesthetic,Product showcase. Story/heritage. Tasting notes. Events. Club membership. Artisanal imagery.
69,Airline,"ai, airline, artificial-intelligence, automation, machine-learning, ml",Minimalism + Glassmorphism,"Motion-Driven, Accessible & Ethical",Conversion-Optimized + Feature-Rich,Operations Dashboard,Sky Blue + Brand colors + Trust accents,Flight search. Booking. Check-in. Boarding pass. Loyalty program. Route maps. Mobile-first.
70,News/Media Platform,"content, entertainment, media, news, platform, streaming, video",Minimalism + Flat Design,"Dark Mode (OLED), Accessible & Ethical",Hero-Centric Design + Feature-Rich,Media Analytics Dashboard,Brand colors + High contrast + Category colors,Article layout. Breaking news. Categories. Search. Subscription. Mobile reading. Fast loading.
71,Magazine/Blog,"articles, blog, content, magazine, posts, writing",Swiss Modernism 2.0 + Motion-Driven,"Minimalism, Aurora UI",Storytelling-Driven + Hero-Centric,Content Analytics,Editorial colors + Brand primary + Clean white,Article showcase. Category navigation. Author profiles. Newsletter signup. Related content. Typography-focused.
72,Freelancer Platform,"freelancer, platform",Flat Design + Minimalism,"Vibrant & Block-based, Micro-interactions",Feature-Rich Showcase + Conversion,Marketplace Analytics,Professional Blue + Success Green + Neutral,Profile creation. Portfolio. Skill matching. Messaging. Payment. Reviews. Project management.
73,Consulting Firm,"consulting, firm",Trust & Authority + Minimalism,"Swiss Modernism 2.0, Accessible & Ethical",Trust & Authority + Feature-Rich,N/A - Lead generation,Navy + Gold + Professional grey,Service areas. Case studies. Team profiles. Thought leadership. Contact. Professional credibility.
74,Marketing Agency,"agency, creative, design, marketing, studio",Brutalism + Motion-Driven,"Vibrant & Block-based, Aurora UI",Storytelling-Driven + Feature-Rich,Campaign Analytics,Bold brand colors + Creative freedom,Portfolio. Case studies. Services. Team. Creative showcase. Results-focused. Bold aesthetic.
75,Event Management,"conference, event, management, meetup, registration, ticket",Vibrant & Block-based + Motion-Driven,"Glassmorphism, Aurora UI",Hero-Centric Design + Feature-Rich,Event Analytics,Event theme colors + Excitement accents,Event showcase. Registration. Agenda. Speakers. Sponsors. Ticket sales. Countdown timer.
76,Conference/Webinar Platform,"conference, platform, webinar",Glassmorphism + Minimalism,"Motion-Driven, Flat Design",Feature-Rich Showcase + Conversion,Attendee Analytics,Professional Blue + Video accent + Brand,Registration. Agenda. Speaker profiles. Live stream. Networking. Recording access. Virtual event features.
77,Membership/Community,"community, membership",Vibrant & Block-based + Soft UI Evolution,"Bento Box Grid, Micro-interactions",Social Proof-Focused + Conversion,Community Analytics,Community brand colors + Engagement accents,Member benefits. Pricing tiers. Community showcase. Events. Member directory. Exclusive content.
78,Newsletter Platform,"newsletter, platform",Minimalism + Flat Design,"Swiss Modernism 2.0, Accessible & Ethical",Minimal & Direct + Conversion,Email Analytics,Brand primary + Clean white + CTA accent,Subscribe form. Archive. About. Social proof. Sample content. Simple conversion.
79,Digital Products/Downloads,"digital, downloads, products",Vibrant & Block-based + Motion-Driven,"Glassmorphism, Bento Box Grid",Feature-Rich Showcase + Conversion,E-commerce Analytics,Product category colors + Brand + Success green,Product showcase. Preview. Pricing. Instant delivery. License management. Customer reviews.
80,Church/Religious Organization,"church, organization, religious",Accessible & Ethical + Soft UI Evolution,"Minimalism, Trust & Authority",Hero-Centric Design + Social Proof,N/A - Community focused,Warm Gold + Deep Purple/Blue + White,Service times. Events. Sermons. Community. Giving. Location. Welcoming imagery.
81,Sports Team/Club,"club, sports, team",Vibrant & Block-based + Motion-Driven,"Dark Mode (OLED), 3D & Hyperrealism",Hero-Centric Design + Feature-Rich,Performance Analytics,Team colors + Energetic accents,Schedule. Roster. News. Tickets. Merchandise. Fan engagement. Action imagery.
82,Museum/Gallery,"gallery, museum",Minimalism + Motion-Driven,"Swiss Modernism 2.0, 3D & Hyperrealism",Storytelling-Driven + Feature-Rich,Visitor Analytics,Art-appropriate neutrals + Exhibition accents,Exhibitions. Collections. Tickets. Events. Virtual tours. Educational content. Art-focused design.
83,Theater/Cinema,"cinema, theater",Dark Mode (OLED) + Motion-Driven,"Vibrant & Block-based, Glassmorphism",Hero-Centric Design + Conversion,Booking Analytics,Dark + Spotlight accents + Gold,Showtimes. Seat selection. Trailers. Coming soon. Membership. Dramatic imagery.
84,Language Learning App,"app, language, learning",Claymorphism + Vibrant & Block-based,"Micro-interactions, Flat Design",Feature-Rich Showcase + Social Proof,Learning Analytics,Playful colors + Progress indicators + Country flags,Lesson structure. Progress tracking. Gamification. Speaking practice. Community. Achievement badges.
85,Coding Bootcamp,"bootcamp, coding",Dark Mode (OLED) + Minimalism,"Cyberpunk UI, Flat Design",Feature-Rich Showcase + Social Proof,Student Analytics,Code editor colors + Brand + Success green,Curriculum. Projects. Career outcomes. Alumni. Pricing. Application. Terminal aesthetic.
86,Cybersecurity Platform,"cyber, security, platform",Cyberpunk UI + Dark Mode (OLED),"Neubrutalism, Minimal & Direct",Trust & Authority + Real-Time,Real-Time Monitoring + Heat Map,Matrix Green + Deep Black + Terminal feel,Data density. Threat visualization. Dark mode default.
87,Developer Tool / IDE,"dev, developer, tool, ide",Dark Mode (OLED) + Minimalism,"Flat Design, Bento Box Grid",Minimal & Direct + Documentation,Real-Time Monitor + Terminal,Dark syntax theme colors + Blue focus,Keyboard shortcuts. Syntax highlighting. Fast performance.
88,Biotech / Life Sciences,"biotech, biology, science",Glassmorphism + Clean Science,"Minimalism, Organic Biophilic",Storytelling-Driven + Research,Data-Dense + Predictive,Sterile White + DNA Blue + Life Green,Data accuracy. Cleanliness. Complex data viz.
89,Space Tech / Aerospace,"aerospace, space, tech",Holographic / HUD + Dark Mode,"Glassmorphism, 3D & Hyperrealism",Immersive Experience + Hero,Real-Time Monitoring + 3D,Deep Space Black + Star White + Metallic,High-tech feel. Precision. Telemetry data.
90,Architecture / Interior,"architecture, design, interior",Exaggerated Minimalism + High Imagery,"Swiss Modernism 2.0, Parallax",Portfolio Grid + Visuals,Project Management + Gallery,Monochrome + Gold Accent + High Imagery,High-res images. Typography. Space.
91,Quantum Computing Interface,"quantum, computing, physics, qubit, future, science",Holographic / HUD + Dark Mode,"Glassmorphism, Spatial UI",Immersive/Interactive Experience,3D Spatial Data + Real-Time Monitor,Quantum Blue #00FFFF + Deep Black + Interference patterns,Visualize complexity. Qubit states. Probability clouds. High-tech trust.
92,Biohacking / Longevity App,"biohacking, health, longevity, tracking, wellness, science",Biomimetic / Organic 2.0,"Minimalism, Dark Mode (OLED)",Data-Dense + Storytelling,Real-Time Monitor + Biological Data,Cellular Pink/Red + DNA Blue + Clean White,Personal data privacy. Scientific credibility. Biological visualizations.
93,Autonomous Drone Fleet Manager,"drone, autonomous, fleet, aerial, logistics, robotics",HUD / Sci-Fi FUI,"Real-Time Monitor, Spatial UI",Real-Time Monitor,Geographic + Real-Time,Tactical Green #00FF00 + Alert Red + Map Dark,Real-time telemetry. 3D spatial awareness. Latency indicators. Safety alerts.
94,Generative Art Platform,"art, generative, ai, creative, platform, gallery",Minimalism (Frame) + Gen Z Chaos,"Masonry Grid, Dark Mode",Bento Grid Showcase,Gallery / Portfolio,Neutral #F5F5F5 (Canvas) + User Content,Content is king. Fast loading. Creator attribution. Minting flow.
95,Spatial Computing OS / App,"spatial, vr, ar, vision, os, immersive, mixed-reality",Spatial UI (VisionOS),"Glassmorphism, 3D & Hyperrealism",Immersive/Interactive Experience,Spatial Dashboard,Frosted Glass + System Colors + Depth,Gaze/Pinch interaction. Depth hierarchy. Environment awareness.
96,Sustainable Energy / Climate Tech,"climate, energy, sustainable, green, tech, carbon",Organic Biophilic + E-Ink / Paper,"Data-Dense, Swiss Modernism",Interactive Demo + Data,Energy/Utilities Dashboard,Earth Green + Sky Blue + Solar Yellow,Data transparency. Impact visualization. Low-carbon web design.
```

---

### `.agent/skills/ui-ux-pro-max/data/react-performance.csv`
**Function:** Source code file.

```csv
No,Category,Issue,Keywords,Platform,Description,Do,Don't,Code Example Good,Code Example Bad,Severity
1,Async Waterfall,Defer Await,async await defer branch,React/Next.js,Move await into branches where actually used to avoid blocking unused code paths,Move await operations into branches where they're needed,Await at top of function blocking all branches,"if (skip) return { skipped: true }; const data = await fetch()","const data = await fetch(); if (skip) return { skipped: true }",Critical
2,Async Waterfall,Promise.all Parallel,promise all parallel concurrent,React/Next.js,Execute independent async operations concurrently using Promise.all(),Use Promise.all() for independent operations,Sequential await for independent operations,"const [user, posts] = await Promise.all([fetchUser(), fetchPosts()])","const user = await fetchUser(); const posts = await fetchPosts()",Critical
3,Async Waterfall,Dependency Parallelization,better-all dependency parallel,React/Next.js,Use better-all for operations with partial dependencies to maximize parallelism,Use better-all to start each task at earliest possible moment,Wait for unrelated data before starting dependent fetch,"await all({ user() {}, config() {}, profile() { return fetch((await this.$.user).id) } })","const [user, config] = await Promise.all([...]); const profile = await fetchProfile(user.id)",Critical
4,Async Waterfall,API Route Optimization,api route waterfall promise,React/Next.js,In API routes start independent operations immediately even if not awaited yet,Start promises early and await late,Sequential awaits in API handlers,"const sessionP = auth(); const configP = fetchConfig(); const session = await sessionP","const session = await auth(); const config = await fetchConfig()",Critical
5,Async Waterfall,Suspense Boundaries,suspense streaming boundary,React/Next.js,Use Suspense to show wrapper UI faster while data loads,Wrap async components in Suspense boundaries,Await data blocking entire page render,"<Suspense fallback={<Skeleton />}><DataDisplay /></Suspense>","const data = await fetchData(); return <DataDisplay data={data} />",High
6,Bundle Size,Barrel Imports,barrel import direct path,React/Next.js,Import directly from source files instead of barrel files to avoid loading unused modules,Import directly from source path,Import from barrel/index files,"import Check from 'lucide-react/dist/esm/icons/check'","import { Check } from 'lucide-react'",Critical
7,Bundle Size,Dynamic Imports,dynamic import lazy next,React/Next.js,Use next/dynamic to lazy-load large components not needed on initial render,Use dynamic() for heavy components,Import heavy components at top level,"const Monaco = dynamic(() => import('./monaco'), { ssr: false })","import { MonacoEditor } from './monaco-editor'",Critical
8,Bundle Size,Defer Third Party,analytics defer third-party,React/Next.js,Load analytics and logging after hydration since they don't block interaction,Load non-critical scripts after hydration,Include analytics in main bundle,"const Analytics = dynamic(() => import('@vercel/analytics'), { ssr: false })","import { Analytics } from '@vercel/analytics/react'",Medium
9,Bundle Size,Conditional Loading,conditional module lazy,React/Next.js,Load large data or modules only when a feature is activated,Dynamic import when feature enabled,Import large modules unconditionally,"useEffect(() => { if (enabled) import('./heavy.js') }, [enabled])","import { heavyData } from './heavy.js'",High
10,Bundle Size,Preload Intent,preload hover focus intent,React/Next.js,Preload heavy bundles on hover/focus before they're needed,Preload on user intent signals,Load only on click,"onMouseEnter={() => import('./editor')}","onClick={() => import('./editor')}",Medium
11,Server,React.cache Dedup,react cache deduplicate request,React/Next.js,Use React.cache() for server-side request deduplication within single request,Wrap data fetchers with cache(),Fetch same data multiple times in tree,"export const getUser = cache(async () => await db.user.find())","export async function getUser() { return await db.user.find() }",Medium
12,Server,LRU Cache Cross-Request,lru cache cross request,React/Next.js,Use LRU cache for data shared across sequential requests,Use LRU for cross-request caching,Refetch same data on every request,"const cache = new LRUCache({ max: 1000, ttl: 5*60*1000 })","Always fetch from database",High
13,Server,Minimize Serialization,serialization rsc boundary,React/Next.js,Only pass fields that client actually uses across RSC boundaries,Pass only needed fields to client components,Pass entire objects to client,"<Profile name={user.name} />","<Profile user={user} /> // 50 fields serialized",High
14,Server,Parallel Fetching,parallel fetch component composition,React/Next.js,Restructure components to parallelize data fetching in RSC,Use component composition for parallel fetches,Sequential fetches in parent component,"<Header /><Sidebar /> // both fetch in parallel","const header = await fetchHeader(); return <><div>{header}</div><Sidebar /></>",Critical
15,Server,After Non-blocking,after non-blocking logging,React/Next.js,Use Next.js after() to schedule work after response is sent,Use after() for logging/analytics,Block response for non-critical operations,"after(async () => { await logAction() }); return Response.json(data)","await logAction(); return Response.json(data)",Medium
16,Client,SWR Deduplication,swr dedup cache revalidate,React/Next.js,Use SWR for automatic request deduplication and caching,Use useSWR for client data fetching,Manual fetch in useEffect,"const { data } = useSWR('/api/users', fetcher)","useEffect(() => { fetch('/api/users').then(setUsers) }, [])",Medium-High
17,Client,Event Listener Dedup,event listener deduplicate global,React/Next.js,Share global event listeners across component instances,Use useSWRSubscription for shared listeners,Register listener per component instance,"useSWRSubscription('global-keydown', () => { window.addEventListener... })","useEffect(() => { window.addEventListener('keydown', handler) }, [])",Low
18,Rerender,Defer State Reads,state read callback subscription,React/Next.js,Don't subscribe to state only used in callbacks,Read state on-demand in callbacks,Subscribe to state used only in handlers,"const handleClick = () => { const params = new URLSearchParams(location.search) }","const params = useSearchParams(); const handleClick = () => { params.get('ref') }",Medium
19,Rerender,Memoized Components,memo extract expensive,React/Next.js,Extract expensive work into memoized components for early returns,Extract to memo() components,Compute expensive values before early return,"const UserAvatar = memo(({ user }) => ...); if (loading) return <Skeleton />","const avatar = useMemo(() => compute(user)); if (loading) return <Skeleton />",Medium
20,Rerender,Narrow Dependencies,effect dependency primitive,React/Next.js,Specify primitive dependencies instead of objects in effects,Use primitive values in dependency arrays,Use object references as dependencies,"useEffect(() => { console.log(user.id) }, [user.id])","useEffect(() => { console.log(user.id) }, [user])",Low
21,Rerender,Derived State,derived boolean subscription,React/Next.js,Subscribe to derived booleans instead of continuous values,Use derived boolean state,Subscribe to continuous values,"const isMobile = useMediaQuery('(max-width: 767px)')","const width = useWindowWidth(); const isMobile = width < 768",Medium
22,Rerender,Functional setState,functional setstate callback,React/Next.js,Use functional setState updates for stable callbacks and no stale closures,Use functional form: setState(curr => ...),Reference state directly in setState,"setItems(curr => [...curr, newItem])","setItems([...items, newItem]) // items in deps",Medium
23,Rerender,Lazy State Init,usestate lazy initialization,React/Next.js,Pass function to useState for expensive initial values,Use function form for expensive init,Compute expensive value directly,"useState(() => buildSearchIndex(items))","useState(buildSearchIndex(items)) // runs every render",Medium
24,Rerender,Transitions,starttransition non-urgent,React/Next.js,Mark frequent non-urgent state updates as transitions,Use startTransition for non-urgent updates,Block UI on every state change,"startTransition(() => setScrollY(window.scrollY))","setScrollY(window.scrollY) // blocks on every scroll",Medium
25,Rendering,SVG Animation Wrapper,svg animation wrapper div,React/Next.js,Wrap SVG in div and animate wrapper for hardware acceleration,Animate div wrapper around SVG,Animate SVG element directly,"<div class='animate-spin'><svg>...</svg></div>","<svg class='animate-spin'>...</svg>",Low
26,Rendering,Content Visibility,content-visibility auto,React/Next.js,Apply content-visibility: auto to defer off-screen rendering,Use content-visibility for long lists,Render all list items immediately,".item { content-visibility: auto; contain-intrinsic-size: 0 80px }","Render 1000 items without optimization",High
27,Rendering,Hoist Static JSX,hoist static jsx element,React/Next.js,Extract static JSX outside components to avoid re-creation,Hoist static elements to module scope,Create static elements inside components,"const skeleton = <div class='animate-pulse' />; function C() { return skeleton }","function C() { return <div class='animate-pulse' /> }",Low
28,Rendering,Hydration No Flicker,hydration mismatch flicker,React/Next.js,Use inline script to set client-only data before hydration,Inject sync script for client-only values,Use useEffect causing flash,"<script dangerouslySetInnerHTML={{ __html: 'el.className = localStorage.theme' }} />","useEffect(() => setTheme(localStorage.theme), []) // flickers",Medium
29,Rendering,Conditional Render,conditional render ternary,React/Next.js,Use ternary instead of && when condition can be 0 or NaN,Use explicit ternary for conditionals,Use && with potentially falsy numbers,"{count > 0 ? <Badge>{count}</Badge> : null}","{count && <Badge>{count}</Badge>} // renders '0'",Low
30,Rendering,Activity Component,activity show hide preserve,React/Next.js,Use Activity component to preserve state/DOM for toggled components,Use Activity for expensive toggle components,Unmount/remount on visibility toggle,"<Activity mode={isOpen ? 'visible' : 'hidden'}><Menu /></Activity>","{isOpen && <Menu />} // loses state",Medium
31,JS Perf,Batch DOM CSS,batch dom css reflow,React/Next.js,Group CSS changes via classes or cssText to minimize reflows,Use class toggle or cssText,Change styles one property at a time,"element.classList.add('highlighted')","el.style.width='100px'; el.style.height='200px'",Medium
32,JS Perf,Index Map Lookup,map index lookup find,React/Next.js,Build Map for repeated lookups instead of multiple .find() calls,Build index Map for O(1) lookups,Use .find() in loops,"const byId = new Map(users.map(u => [u.id, u])); byId.get(id)","users.find(u => u.id === order.userId) // O(n) each time",Low-Medium
33,JS Perf,Cache Property Access,cache property loop,React/Next.js,Cache object property lookups in hot paths,Cache values before loops,Access nested properties in loops,"const val = obj.config.settings.value; for (...) process(val)","for (...) process(obj.config.settings.value)",Low-Medium
34,JS Perf,Cache Function Results,memoize cache function,React/Next.js,Use module-level Map to cache repeated function results,Use Map cache for repeated calls,Recompute same values repeatedly,"const cache = new Map(); if (cache.has(x)) return cache.get(x)","slugify(name) // called 100 times same input",Medium
35,JS Perf,Cache Storage API,localstorage cache read,React/Next.js,Cache localStorage/sessionStorage reads in memory,Cache storage reads in Map,Read storage on every call,"if (!cache.has(key)) cache.set(key, localStorage.getItem(key))","localStorage.getItem('theme') // every call",Low-Medium
36,JS Perf,Combine Iterations,combine filter map loop,React/Next.js,Combine multiple filter/map into single loop,Single loop for multiple categorizations,Chain multiple filter() calls,"for (u of users) { if (u.isAdmin) admins.push(u); if (u.isTester) testers.push(u) }","users.filter(admin); users.filter(tester); users.filter(inactive)",Low-Medium
37,JS Perf,Length Check First,length check array compare,React/Next.js,Check array lengths before expensive comparisons,Early return if lengths differ,Always run expensive comparison,"if (a.length !== b.length) return true; // then compare","a.sort().join() !== b.sort().join() // even when lengths differ",Medium-High
38,JS Perf,Early Return,early return exit function,React/Next.js,Return early when result is determined to skip processing,Return immediately on first error,Process all items then check errors,"for (u of users) { if (!u.email) return { error: 'Email required' } }","let hasError; for (...) { if (!email) hasError=true }; if (hasError)...",Low-Medium
39,JS Perf,Hoist RegExp,regexp hoist module,React/Next.js,Don't create RegExp inside render - hoist or memoize,Hoist RegExp to module scope,Create RegExp every render,"const EMAIL_RE = /^[^@]+@[^@]+$/; function validate() { EMAIL_RE.test(x) }","function C() { const re = new RegExp(pattern); re.test(x) }",Low-Medium
40,JS Perf,Loop Min Max,loop min max sort,React/Next.js,Use loop for min/max instead of sort - O(n) vs O(n log n),Single pass loop for min/max,Sort array to find min/max,"let max = arr[0]; for (x of arr) if (x > max) max = x","arr.sort((a,b) => b-a)[0] // O(n log n)",Low
41,JS Perf,Set Map Lookups,set map includes has,React/Next.js,Use Set/Map for O(1) lookups instead of array.includes(),Convert to Set for membership checks,Use .includes() for repeated checks,"const allowed = new Set(['a','b']); allowed.has(id)","const allowed = ['a','b']; allowed.includes(id)",Low-Medium
42,JS Perf,toSorted Immutable,tosorted sort immutable,React/Next.js,Use toSorted() instead of sort() to avoid mutating arrays,Use toSorted() for immutability,Mutate arrays with sort(),"users.toSorted((a,b) => a.name.localeCompare(b.name))","users.sort((a,b) => a.name.localeCompare(b.name)) // mutates",Medium-High
43,Advanced,Event Handler Refs,useeffectevent ref handler,React/Next.js,Store callbacks in refs for stable effect subscriptions,Use useEffectEvent for stable handlers,Re-subscribe on every callback change,"const onEvent = useEffectEvent(handler); useEffect(() => { listen(onEvent) }, [])","useEffect(() => { listen(handler) }, [handler]) // re-subscribes",Low
44,Advanced,useLatest Hook,uselatest ref callback,React/Next.js,Access latest values in callbacks without adding to dependency arrays,Use useLatest for fresh values in stable callbacks,Add callback to effect dependencies,"const cbRef = useLatest(cb); useEffect(() => { setTimeout(() => cbRef.current()) }, [])","useEffect(() => { setTimeout(() => cb()) }, [cb]) // re-runs",Low

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/astro.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Architecture,Use Islands Architecture,Astro's partial hydration only loads JS for interactive components,Interactive components with client directives,Hydrate entire page like traditional SPA,<Counter client:load />,Everything as client component,High,https://docs.astro.build/en/concepts/islands/
2,Architecture,Default to zero JS,Astro ships zero JS by default - add only when needed,Static components without client directive,Add client:load to everything,<Header /> (static),<Header client:load /> (unnecessary),High,https://docs.astro.build/en/basics/astro-components/
3,Architecture,Choose right client directive,Different directives for different hydration timing,client:visible for below-fold client:idle for non-critical,client:load for everything,<Comments client:visible />,<Comments client:load />,Medium,https://docs.astro.build/en/reference/directives-reference/#client-directives
4,Architecture,Use content collections,Type-safe content management for blogs docs,Content collections for structured content,Loose markdown files without schema,const posts = await getCollection('blog'),import.meta.glob('./posts/*.md'),High,https://docs.astro.build/en/guides/content-collections/
5,Architecture,Define collection schemas,Zod schemas for content validation,Schema with required fields and types,No schema validation,"defineCollection({ schema: z.object({...}) })",defineCollection({}),High,https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema
6,Routing,Use file-based routing,Create routes by adding .astro files in pages/,pages/ directory for routes,Manual route configuration,src/pages/about.astro,Custom router setup,Medium,https://docs.astro.build/en/basics/astro-pages/
7,Routing,Dynamic routes with brackets,Use [param] for dynamic routes,Bracket notation for params,Query strings for dynamic content,pages/blog/[slug].astro,pages/blog.astro?slug=x,Medium,https://docs.astro.build/en/guides/routing/#dynamic-routes
8,Routing,Use getStaticPaths for SSG,Generate static pages at build time,getStaticPaths for known dynamic routes,Fetch at runtime for static content,"export async function getStaticPaths() { return [...] }",No getStaticPaths with dynamic route,High,https://docs.astro.build/en/reference/api-reference/#getstaticpaths
9,Routing,Enable SSR when needed,Server-side rendering for dynamic content,output: 'server' or 'hybrid' for dynamic,SSR for purely static sites,"export const prerender = false;",SSR for static blog,Medium,https://docs.astro.build/en/guides/server-side-rendering/
10,Components,Keep .astro for static,Use .astro components for static content,Astro components for layout structure,React/Vue for static markup,<Layout><slot /></Layout>,<ReactLayout>{children}</ReactLayout>,High,
11,Components,Use framework components for interactivity,React Vue Svelte for complex interactivity,Framework component with client directive,Astro component with inline scripts,<ReactCounter client:load />,<script> in .astro for complex state,Medium,https://docs.astro.build/en/guides/framework-components/
12,Components,Pass data via props,Astro components receive props in frontmatter,Astro.props for component data,Global state for simple data,"const { title } = Astro.props;",Import global store,Low,https://docs.astro.build/en/basics/astro-components/#component-props
13,Components,Use slots for composition,Named and default slots for flexible layouts,<slot /> for child content,Props for HTML content,<slot name="header" />,<Component header={<div>...</div>} />,Medium,https://docs.astro.build/en/basics/astro-components/#slots
14,Components,Colocate component styles,Scoped styles in component file,<style> in same .astro file,Separate CSS files for component styles,<style> .card { } </style>,import './Card.css',Low,
15,Styling,Use scoped styles by default,Astro scopes styles to component automatically,<style> for component-specific styles,Global styles for everything,<style> h1 { } </style> (scoped),<style is:global> for everything,Medium,https://docs.astro.build/en/guides/styling/#scoped-styles
16,Styling,Use is:global sparingly,Global styles only when truly needed,is:global for base styles or overrides,is:global for component styles,<style is:global> body { } </style>,<style is:global> .card { } </style>,Medium,
17,Styling,Integrate Tailwind properly,Use @astrojs/tailwind integration,Official Tailwind integration,Manual Tailwind setup,npx astro add tailwind,Manual PostCSS config,Low,https://docs.astro.build/en/guides/integrations-guide/tailwind/
18,Styling,Use CSS variables for theming,Define tokens in :root,CSS custom properties for themes,Hardcoded colors everywhere,:root { --primary: #3b82f6; },color: #3b82f6; everywhere,Medium,
19,Data,Fetch in frontmatter,Data fetching in component frontmatter,Top-level await in frontmatter,useEffect for initial data,const data = await fetch(url),client-side fetch on mount,High,https://docs.astro.build/en/guides/data-fetching/
20,Data,Use Astro.glob for local files,Import multiple local files,Astro.glob for markdown/data files,Manual imports for each file,const posts = await Astro.glob('./posts/*.md'),"import post1; import post2;",Medium,
21,Data,Prefer content collections over glob,Type-safe collections for structured content,getCollection() for blog/docs,Astro.glob for structured content,await getCollection('blog'),await Astro.glob('./blog/*.md'),High,
22,Data,Use environment variables correctly,Import.meta.env for env vars,PUBLIC_ prefix for client vars,Expose secrets to client,import.meta.env.PUBLIC_API_URL,import.meta.env.SECRET in client,High,https://docs.astro.build/en/guides/environment-variables/
23,Performance,Preload critical assets,Use link preload for important resources,Preload fonts above-fold images,No preload hints,"<link rel=""preload"" href=""font.woff2"" as=""font"">",No preload for critical assets,Medium,
24,Performance,Optimize images with astro:assets,Built-in image optimization,<Image /> component for optimization,<img> for local images,"import { Image } from 'astro:assets';","<img src=""./image.jpg"">",High,https://docs.astro.build/en/guides/images/
25,Performance,Use picture for responsive images,Multiple formats and sizes,<Picture /> for art direction,Single image size for all screens,<Picture /> with multiple sources,<Image /> with single size,Medium,
26,Performance,Lazy load below-fold content,Defer loading non-critical content,loading=lazy for images client:visible for components,Load everything immediately,"<img loading=""lazy"">",No lazy loading,Medium,
27,Performance,Minimize client directives,Each directive adds JS bundle,Audit client: usage regularly,Sprinkle client:load everywhere,Only interactive components hydrated,Every component with client:load,High,
28,ViewTransitions,Enable View Transitions,Smooth page transitions,<ViewTransitions /> in head,Full page reloads,"import { ViewTransitions } from 'astro:transitions';",No transition API,Medium,https://docs.astro.build/en/guides/view-transitions/
29,ViewTransitions,Use transition:name,Named elements for morphing,transition:name for persistent elements,Unnamed transitions,"<header transition:name=""header"">",<header> without name,Low,
30,ViewTransitions,Handle transition:persist,Keep state across navigations,transition:persist for media players,Re-initialize on every navigation,"<video transition:persist id=""player"">",Video restarts on navigation,Medium,
31,ViewTransitions,Add fallback for no-JS,Graceful degradation,Content works without JS,Require JS for basic navigation,Static content accessible,Broken without ViewTransitions JS,High,
32,SEO,Use built-in SEO component,Head management for meta tags,Astro SEO integration or manual head,No meta tags,"<title>{title}</title><meta name=""description"">",No SEO tags,High,
33,SEO,Generate sitemap,Automatic sitemap generation,@astrojs/sitemap integration,Manual sitemap maintenance,npx astro add sitemap,Hand-written sitemap.xml,Medium,https://docs.astro.build/en/guides/integrations-guide/sitemap/
34,SEO,Add RSS feed for content,RSS for blogs and content sites,@astrojs/rss for feed generation,No RSS feed,rss() helper in pages/rss.xml.js,No feed for blog,Low,https://docs.astro.build/en/guides/rss/
35,SEO,Use canonical URLs,Prevent duplicate content issues,Astro.url for canonical generation,"<link rel=""canonical"" href={Astro.url}>",No canonical tags,Medium,
36,Integrations,Use official integrations,Astro's integration system,npx astro add for integrations,Manual configuration,npx astro add react,Manual React setup,Medium,https://docs.astro.build/en/guides/integrations-guide/
37,Integrations,Configure integrations in astro.config,Centralized configuration,integrations array in config,Scattered configuration,"integrations: [react(), tailwind()]",Multiple config files,Low,
38,Integrations,Use adapter for deployment,Platform-specific adapters,Correct adapter for host,Wrong or no adapter,@astrojs/vercel for Vercel,No adapter for SSR,High,https://docs.astro.build/en/guides/deploy/
39,TypeScript,Enable TypeScript,Type safety for Astro projects,tsconfig.json with astro types,No TypeScript,Astro TypeScript template,JavaScript only,Medium,https://docs.astro.build/en/guides/typescript/
40,TypeScript,Type component props,Define prop interfaces,Props interface in frontmatter,Untyped props,"interface Props { title: string }",No props typing,Medium,
41,TypeScript,Use strict mode,Catch errors early,strict: true in tsconfig,Loose TypeScript config,strictest template,base template,Low,
42,Markdown,Use MDX for components,Components in markdown content,@astrojs/mdx for interactive docs,Plain markdown with workarounds,<Component /> in .mdx,HTML in .md files,Medium,https://docs.astro.build/en/guides/integrations-guide/mdx/
43,Markdown,Configure markdown plugins,Extend markdown capabilities,remarkPlugins rehypePlugins in config,Manual HTML for features,remarkPlugins: [remarkToc],Manual TOC in every post,Low,
44,Markdown,Use frontmatter for metadata,Structured post metadata,Frontmatter with typed schema,Inline metadata,title date in frontmatter,# Title as first line,Medium,
45,API,Use API routes for endpoints,Server endpoints in pages/api,pages/api/[endpoint].ts for APIs,External API for simple endpoints,pages/api/posts.json.ts,Separate Express server,Medium,https://docs.astro.build/en/guides/endpoints/
46,API,Return proper responses,Use Response object,new Response() with headers,Plain objects,return new Response(JSON.stringify(data)),return data,Medium,
47,API,Handle methods correctly,Export named method handlers,export GET POST handlers,Single default export,export const GET = async () => {},export default async () => {},Low,
48,Security,Sanitize user content,Prevent XSS in dynamic content,set:html only for trusted content,set:html with user input,"<Fragment set:html={sanitized} />","<div set:html={userInput} />",High,
49,Security,Use HTTPS in production,Secure connections,HTTPS for all production sites,HTTP in production,https://example.com,http://example.com,High,
50,Security,Validate API input,Check and sanitize all input,Zod validation for API routes,Trust all input,const body = schema.parse(data),const body = await request.json(),High,
51,Build,Use hybrid rendering,Mix static and dynamic pages,output: 'hybrid' for flexibility,All SSR or all static,prerender per-page basis,Single rendering mode,Medium,https://docs.astro.build/en/guides/server-side-rendering/#hybrid-rendering
52,Build,Analyze bundle size,Monitor JS bundle impact,Build output shows bundle sizes,Ignore bundle growth,Check astro build output,No size monitoring,Medium,
53,Build,Use prefetch,Preload linked pages,prefetch integration,No prefetch for navigation,npx astro add prefetch,Manual prefetch,Low,https://docs.astro.build/en/guides/prefetch/

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/flutter.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Widgets,Use StatelessWidget when possible,Immutable widgets are simpler,StatelessWidget for static UI,StatefulWidget for everything,class MyWidget extends StatelessWidget,class MyWidget extends StatefulWidget (static),Medium,https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html
2,Widgets,Keep widgets small,Single responsibility principle,Extract widgets into smaller pieces,Large build methods,Column(children: [Header() Content()]),500+ line build method,Medium,
3,Widgets,Use const constructors,Compile-time constants for performance,const MyWidget() when possible,Non-const for static widgets,const Text('Hello'),Text('Hello') for literals,High,https://dart.dev/guides/language/language-tour#constant-constructors
4,Widgets,Prefer composition over inheritance,Combine widgets using children,Compose widgets,Extend widget classes,Container(child: MyContent()),class MyContainer extends Container,Medium,
5,State,Use setState correctly,Minimal state in StatefulWidget,setState for UI state changes,setState for business logic,setState(() { _counter++; }),Complex logic in setState,Medium,https://api.flutter.dev/flutter/widgets/State/setState.html
6,State,Avoid setState in build,Never call setState during build,setState in callbacks only,setState in build method,onPressed: () => setState(() {}),build() { setState(); },High,
7,State,Use state management for complex apps,Provider Riverpod BLoC,State management for shared state,setState for global state,Provider.of<MyState>(context),Global setState calls,Medium,
8,State,Prefer Riverpod or Provider,Recommended state solutions,Riverpod for new projects,InheritedWidget manually,ref.watch(myProvider),Custom InheritedWidget,Medium,https://riverpod.dev/
9,State,Dispose resources,Clean up controllers and subscriptions,dispose() for cleanup,Memory leaks from subscriptions,@override void dispose() { controller.dispose(); },No dispose implementation,High,
10,Layout,Use Column and Row,Basic layout widgets,Column Row for linear layouts,Stack for simple layouts,"Column(children: [Text(), Button()])",Stack for vertical list,Medium,https://api.flutter.dev/flutter/widgets/Column-class.html
11,Layout,Use Expanded and Flexible,Control flex behavior,Expanded to fill space,Fixed sizes in flex containers,Expanded(child: Container()),Container(width: 200) in Row,Medium,
12,Layout,Use SizedBox for spacing,Consistent spacing,SizedBox for gaps,Container for spacing only,SizedBox(height: 16),Container(height: 16),Low,
13,Layout,Use LayoutBuilder for responsive,Respond to constraints,LayoutBuilder for adaptive layouts,Fixed sizes for responsive,LayoutBuilder(builder: (context constraints) {}),Container(width: 375),Medium,https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html
14,Layout,Avoid deep nesting,Keep widget tree shallow,Extract deeply nested widgets,10+ levels of nesting,Extract widget to method or class,Column(Row(Column(Row(...)))),Medium,
15,Lists,Use ListView.builder,Lazy list building,ListView.builder for long lists,ListView with children for large lists,"ListView.builder(itemCount: 100, itemBuilder: ...)",ListView(children: items.map(...).toList()),High,https://api.flutter.dev/flutter/widgets/ListView-class.html
16,Lists,Provide itemExtent when known,Skip measurement,itemExtent for fixed height items,No itemExtent for uniform lists,ListView.builder(itemExtent: 50),ListView.builder without itemExtent,Medium,
17,Lists,Use keys for stateful items,Preserve widget state,Key for stateful list items,No key for dynamic lists,ListTile(key: ValueKey(item.id)),ListTile without key,High,
18,Lists,Use SliverList for custom scroll,Custom scroll effects,CustomScrollView with Slivers,Nested ListViews,CustomScrollView(slivers: [SliverList()]),ListView inside ListView,Medium,https://api.flutter.dev/flutter/widgets/SliverList-class.html
19,Navigation,Use Navigator 2.0 or GoRouter,Declarative routing,go_router for navigation,Navigator.push for complex apps,GoRouter(routes: [...]),Navigator.push everywhere,Medium,https://pub.dev/packages/go_router
20,Navigation,Use named routes,Organized navigation,Named routes for clarity,Anonymous routes,Navigator.pushNamed(context '/home'),Navigator.push(context MaterialPageRoute()),Low,
21,Navigation,Handle back button (PopScope),Android back behavior and predictive back (Android 14+),Use PopScope widget (WillPopScope is deprecated),Use WillPopScope,"PopScope(canPop: false, onPopInvoked: (didPop) => ...)",WillPopScope(onWillPop: ...),High,https://api.flutter.dev/flutter/widgets/PopScope-class.html
22,Navigation,Pass typed arguments,Type-safe route arguments,Typed route arguments,Dynamic arguments,MyRoute(id: '123'),arguments: {'id': '123'},Medium,
23,Async,Use FutureBuilder,Async UI building,FutureBuilder for async data,setState for async,FutureBuilder(future: fetchData()),fetchData().then((d) => setState()),Medium,https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html
24,Async,Use StreamBuilder,Stream UI building,StreamBuilder for streams,Manual stream subscription,StreamBuilder(stream: myStream),stream.listen in initState,Medium,https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html
25,Async,Handle loading and error states,Complete async UI states,ConnectionState checks,Only success state,if (snapshot.connectionState == ConnectionState.waiting),No loading indicator,High,
26,Async,Cancel subscriptions,Clean up stream subscriptions,Cancel in dispose,Memory leaks,subscription.cancel() in dispose,No subscription cleanup,High,
27,Theming,Use ThemeData,Consistent theming,ThemeData for app theme,Hardcoded colors,Theme.of(context).primaryColor,Color(0xFF123456) everywhere,Medium,https://api.flutter.dev/flutter/material/ThemeData-class.html
28,Theming,Use ColorScheme,Material 3 color system,ColorScheme for colors,Individual color properties,colorScheme: ColorScheme.fromSeed(),primaryColor: Colors.blue,Medium,
29,Theming,Access theme via context,Dynamic theme access,Theme.of(context),Static theme reference,Theme.of(context).textTheme.bodyLarge,TextStyle(fontSize: 16),Medium,
30,Theming,Support dark mode,Respect system theme,darkTheme in MaterialApp,Light theme only,"MaterialApp(theme: light, darkTheme: dark)",MaterialApp(theme: light),Medium,
31,Animation,Use implicit animations,Simple animations,AnimatedContainer AnimatedOpacity,Explicit for simple transitions,AnimatedContainer(duration: Duration()),AnimationController for fade,Low,https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html
32,Animation,Use AnimationController for complex,Fine-grained control,AnimationController with Ticker,Implicit for complex sequences,AnimationController(vsync: this),AnimatedContainer for staggered,Medium,
33,Animation,Dispose AnimationControllers,Clean up animation resources,dispose() for controllers,Memory leaks,controller.dispose() in dispose,No controller disposal,High,
34,Animation,Use Hero for transitions,Shared element transitions,Hero for navigation animations,Manual shared element,Hero(tag: 'image' child: Image()),Custom shared element animation,Low,https://api.flutter.dev/flutter/widgets/Hero-class.html
35,Forms,Use Form widget,Form validation,Form with GlobalKey,Individual validation,Form(key: _formKey child: ...),TextField without Form,Medium,https://api.flutter.dev/flutter/widgets/Form-class.html
36,Forms,Use TextEditingController,Control text input,Controller for text fields,onChanged for all text,final controller = TextEditingController(),onChanged: (v) => setState(),Medium,
37,Forms,Validate on submit,Form validation flow,_formKey.currentState!.validate(),Skip validation,if (_formKey.currentState!.validate()),Submit without validation,High,
38,Forms,Dispose controllers,Clean up text controllers,dispose() for controllers,Memory leaks,controller.dispose() in dispose,No controller disposal,High,
39,Performance,Use const widgets,Reduce rebuilds,const for static widgets,No const for literals,const Icon(Icons.add),Icon(Icons.add),High,
40,Performance,Avoid rebuilding entire tree,Minimal rebuild scope,Isolate changing widgets,setState on parent,Consumer only around changing widget,setState on root widget,High,
41,Performance,Use RepaintBoundary,Isolate repaints,RepaintBoundary for animations,Full screen repaints,RepaintBoundary(child: AnimatedWidget()),Animation without boundary,Medium,https://api.flutter.dev/flutter/widgets/RepaintBoundary-class.html
42,Performance,Profile with DevTools,Measure before optimizing,Flutter DevTools profiling,Guess at performance,DevTools performance tab,Optimize without measuring,Medium,https://docs.flutter.dev/tools/devtools
43,Accessibility,Use Semantics widget,Screen reader support,Semantics for accessibility,Missing accessibility info,Semantics(label: 'Submit button'),GestureDetector without semantics,High,https://api.flutter.dev/flutter/widgets/Semantics-class.html
44,Accessibility,Support large fonts,MediaQuery text scaling,MediaQuery.textScaleFactor,Fixed font sizes,style: Theme.of(context).textTheme,TextStyle(fontSize: 14),High,
45,Accessibility,Test with screen readers,TalkBack and VoiceOver,Test accessibility regularly,Skip accessibility testing,Regular TalkBack testing,No screen reader testing,High,
46,Testing,Use widget tests,Test widget behavior,WidgetTester for UI tests,Unit tests only,testWidgets('...' (tester) async {}),Only test() for UI,Medium,https://docs.flutter.dev/testing
47,Testing,Use integration tests,Full app testing,integration_test package,Manual testing only,IntegrationTestWidgetsFlutterBinding,Manual E2E testing,Medium,
48,Testing,Mock dependencies,Isolate tests,Mockito or mocktail,Real dependencies in tests,when(mock.method()).thenReturn(),Real API calls in tests,Medium,
49,Platform,Use Platform checks,Platform-specific code,Platform.isIOS Platform.isAndroid,Same code for all platforms,if (Platform.isIOS) {},Hardcoded iOS behavior,Medium,
50,Platform,Use kIsWeb for web,Web platform detection,kIsWeb for web checks,Platform for web,if (kIsWeb) {},Platform.isWeb (doesn't exist),Medium,
51,Packages,Use pub.dev packages,Community packages,Popular maintained packages,Custom implementations,cached_network_image,Custom image cache,Medium,https://pub.dev/
52,Packages,Check package quality,Quality before adding,Pub points and popularity,Any package without review,100+ pub points,Unmaintained packages,Medium,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/html-tailwind.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Animation,Use Tailwind animate utilities,Built-in animations are optimized and respect reduced-motion,Use animate-pulse animate-spin animate-ping,Custom @keyframes for simple effects,animate-pulse,@keyframes pulse {...},Medium,https://tailwindcss.com/docs/animation
2,Animation,Limit bounce animations,Continuous bounce is distracting and causes motion sickness,Use animate-bounce sparingly on CTAs only,Multiple bounce animations on page,Single CTA with animate-bounce,5+ elements with animate-bounce,High,
3,Animation,Transition duration,Use appropriate transition speeds for UI feedback,duration-150 to duration-300 for UI,duration-1000 or longer for UI elements,transition-all duration-200,transition-all duration-1000,Medium,https://tailwindcss.com/docs/transition-duration
4,Animation,Hover transitions,Add smooth transitions on hover state changes,Add transition class with hover states,Instant hover changes without transition,hover:bg-gray-100 transition-colors,hover:bg-gray-100 (no transition),Low,
5,Z-Index,Use Tailwind z-* scale,Consistent stacking context with predefined scale,z-0 z-10 z-20 z-30 z-40 z-50,Arbitrary z-index values,z-50 for modals,z-[9999],Medium,https://tailwindcss.com/docs/z-index
6,Z-Index,Fixed elements z-index,Fixed navigation and modals need explicit z-index,z-50 for nav z-40 for dropdowns,Relying on DOM order for stacking,fixed top-0 z-50,fixed top-0 (no z-index),High,
7,Z-Index,Negative z-index for backgrounds,Use negative z-index for decorative backgrounds,z-[-1] for background elements,Positive z-index for backgrounds,-z-10 for decorative,z-10 for background,Low,
8,Layout,Container max-width,Limit content width for readability,max-w-7xl mx-auto for main content,Full-width content on large screens,max-w-7xl mx-auto px-4,w-full (no max-width),Medium,https://tailwindcss.com/docs/container
9,Layout,Responsive padding,Adjust padding for different screen sizes,px-4 md:px-6 lg:px-8,Same padding all sizes,px-4 sm:px-6 lg:px-8,px-8 (same all sizes),Medium,
10,Layout,Grid gaps,Use consistent gap utilities for spacing,gap-4 gap-6 gap-8,Margins on individual items,grid gap-6,grid with mb-4 on each item,Medium,https://tailwindcss.com/docs/gap
11,Layout,Flexbox alignment,Use flex utilities for alignment,items-center justify-between,Multiple nested wrappers,flex items-center justify-between,Nested divs for alignment,Low,
12,Images,Aspect ratio,Maintain consistent image aspect ratios,aspect-video aspect-square,No aspect ratio on containers,aspect-video rounded-lg,No aspect control,Medium,https://tailwindcss.com/docs/aspect-ratio
13,Images,Object fit,Control image scaling within containers,object-cover object-contain,Stretched distorted images,object-cover w-full h-full,No object-fit,Medium,https://tailwindcss.com/docs/object-fit
14,Images,Lazy loading,Defer loading of off-screen images,loading='lazy' on images,All images eager load,<img loading='lazy'>,<img> without lazy,High,
15,Images,Responsive images,Serve appropriate image sizes,srcset and sizes attributes,Same large image all devices,srcset with multiple sizes,4000px image everywhere,High,
16,Typography,Prose plugin,Use @tailwindcss/typography for rich text,prose prose-lg for article content,Custom styles for markdown,prose prose-lg max-w-none,Custom text styling,Medium,https://tailwindcss.com/docs/typography-plugin
17,Typography,Line height,Use appropriate line height for readability,leading-relaxed for body text,Default tight line height,leading-relaxed (1.625),leading-none or leading-tight,Medium,https://tailwindcss.com/docs/line-height
18,Typography,Font size scale,Use consistent text size scale,text-sm text-base text-lg text-xl,Arbitrary font sizes,text-lg,text-[17px],Low,https://tailwindcss.com/docs/font-size
19,Typography,Text truncation,Handle long text gracefully,truncate or line-clamp-*,Overflow breaking layout,line-clamp-2,No overflow handling,Medium,https://tailwindcss.com/docs/text-overflow
20,Colors,Opacity utilities,Use color opacity utilities,bg-black/50 text-white/80,Separate opacity class,bg-black/50,bg-black opacity-50,Low,https://tailwindcss.com/docs/background-color
21,Colors,Dark mode,Support dark mode with dark: prefix,dark:bg-gray-900 dark:text-white,No dark mode support,dark:bg-gray-900,Only light theme,Medium,https://tailwindcss.com/docs/dark-mode
22,Colors,Semantic colors,Use semantic color naming in config,primary secondary danger success,Generic color names in components,bg-primary,bg-blue-500 everywhere,Medium,
23,Spacing,Consistent spacing scale,Use Tailwind spacing scale consistently,p-4 m-6 gap-8,Arbitrary pixel values,p-4 (1rem),p-[15px],Low,https://tailwindcss.com/docs/customizing-spacing
24,Spacing,Negative margins,Use sparingly for overlapping effects,-mt-4 for overlapping elements,Negative margins for layout fixing,-mt-8 for card overlap,-m-2 to fix spacing issues,Medium,
25,Spacing,Space between,Use space-y-* for vertical lists,space-y-4 on flex/grid column,Margin on each child,space-y-4,Each child has mb-4,Low,https://tailwindcss.com/docs/space
26,Forms,Focus states,Always show focus indicators,focus:ring-2 focus:ring-blue-500,Remove focus outline,focus:ring-2 focus:ring-offset-2,focus:outline-none (no replacement),High,
27,Forms,Input sizing,Consistent input dimensions,h-10 px-3 for inputs,Inconsistent input heights,h-10 w-full px-3,Various heights per input,Medium,
28,Forms,Disabled states,Clear disabled styling,disabled:opacity-50 disabled:cursor-not-allowed,No disabled indication,disabled:opacity-50,Same style as enabled,Medium,
29,Forms,Placeholder styling,Style placeholder text appropriately,placeholder:text-gray-400,Dark placeholder text,placeholder:text-gray-400,Default dark placeholder,Low,
30,Responsive,Mobile-first approach,Start with mobile styles and add breakpoints,Default mobile + md: lg: xl:,Desktop-first approach,text-sm md:text-base,text-base max-md:text-sm,Medium,https://tailwindcss.com/docs/responsive-design
31,Responsive,Breakpoint testing,Test at standard breakpoints,320 375 768 1024 1280 1536,Only test on development device,Test all breakpoints,Single device testing,High,
32,Responsive,Hidden/shown utilities,Control visibility per breakpoint,hidden md:block,Different content per breakpoint,hidden md:flex,Separate mobile/desktop components,Low,https://tailwindcss.com/docs/display
33,Buttons,Button sizing,Consistent button dimensions,px-4 py-2 or px-6 py-3,Inconsistent button sizes,px-4 py-2 text-sm,Various padding per button,Medium,
34,Buttons,Touch targets,Minimum 44px touch target on mobile,min-h-[44px] on mobile,Small buttons on mobile,min-h-[44px] min-w-[44px],h-8 w-8 on mobile,High,
35,Buttons,Loading states,Show loading feedback,disabled + spinner icon,Clickable during loading,<Button disabled><Spinner/></Button>,Button without loading state,High,
36,Buttons,Icon buttons,Accessible icon-only buttons,aria-label on icon buttons,Icon button without label,<button aria-label='Close'><XIcon/></button>,<button><XIcon/></button>,High,
37,Cards,Card structure,Consistent card styling,rounded-lg shadow-md p-6,Inconsistent card styles,rounded-2xl shadow-lg p-6,Mixed card styling,Low,
38,Cards,Card hover states,Interactive cards should have hover feedback,hover:shadow-lg transition-shadow,No hover on clickable cards,hover:shadow-xl transition-shadow,Static cards that are clickable,Medium,
39,Cards,Card spacing,Consistent internal card spacing,space-y-4 for card content,Inconsistent internal spacing,space-y-4 or p-6,Mixed mb-2 mb-4 mb-6,Low,
40,Accessibility,Screen reader text,Provide context for screen readers,sr-only for hidden labels,Missing context for icons,<span class='sr-only'>Close menu</span>,No label for icon button,High,https://tailwindcss.com/docs/screen-readers
41,Accessibility,Focus visible,Show focus only for keyboard users,focus-visible:ring-2,Focus on all interactions,focus-visible:ring-2,focus:ring-2 (shows on click too),Medium,
42,Accessibility,Reduced motion,Respect user motion preferences,motion-reduce:animate-none,Ignore motion preferences,motion-reduce:transition-none,No reduced motion support,High,https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion
43,Performance,Configure content paths,Tailwind needs to know where classes are used,Use 'content' array in config,Use deprecated 'purge' option (v2),"content: ['./src/**/*.{js,ts,jsx,tsx}']",purge: [...],High,https://tailwindcss.com/docs/content-configuration
44,Performance,JIT mode,Use JIT for faster builds and smaller bundles,JIT enabled (default in v3),Full CSS in development,Tailwind v3 defaults,Tailwind v2 without JIT,Medium,
45,Performance,Avoid @apply bloat,Use @apply sparingly,Direct utilities in HTML,Heavy @apply usage,class='px-4 py-2 rounded',@apply px-4 py-2 rounded;,Low,https://tailwindcss.com/docs/reusing-styles
46,Plugins,Official plugins,Use official Tailwind plugins,@tailwindcss/forms typography aspect-ratio,Custom implementations,@tailwindcss/forms,Custom form reset CSS,Medium,https://tailwindcss.com/docs/plugins
47,Plugins,Custom utilities,Create utilities for repeated patterns,Custom utility in config,Repeated arbitrary values,Custom shadow utility,"shadow-[0_4px_20px_rgba(0,0,0,0.1)] everywhere",Medium,
48,Layout,Container Queries,Use @container for component-based responsiveness,Use @container and @lg: etc.,Media queries for component internals,@container @lg:grid-cols-2,@media (min-width: ...) inside component,Medium,https://github.com/tailwindlabs/tailwindcss-container-queries
49,Interactivity,Group and Peer,Style based on parent/sibling state,group-hover peer-checked,JS for simple state interactions,group-hover:text-blue-500,onMouseEnter={() => setHover(true)},Low,https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
50,Customization,Arbitrary Values,Use [] for one-off values,w-[350px] for specific needs,Creating config for single use,top-[117px] (if strictly needed),style={{ top: '117px' }},Low,https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
51,Colors,Theme color variables,Define colors in Tailwind theme and use directly,bg-primary text-success border-cta,bg-[var(--color-primary)] text-[var(--color-success)],bg-primary,bg-[var(--color-primary)],Medium,https://tailwindcss.com/docs/customizing-colors
52,Colors,Use bg-linear-to-* for gradients,Tailwind v4 uses bg-linear-to-* syntax for gradients,bg-linear-to-r bg-linear-to-b,bg-gradient-to-* (deprecated in v4),bg-linear-to-r from-blue-500 to-purple-500,bg-gradient-to-r from-blue-500 to-purple-500,Medium,https://tailwindcss.com/docs/background-image
53,Layout,Use shrink-0 shorthand,Shorter class name for flex-shrink-0,shrink-0 shrink,flex-shrink-0 flex-shrink,shrink-0,flex-shrink-0,Low,https://tailwindcss.com/docs/flex-shrink
54,Layout,Use size-* for square dimensions,Single utility for equal width and height,size-4 size-8 size-12,Separate h-* w-* for squares,size-6,h-6 w-6,Low,https://tailwindcss.com/docs/size
55,Images,SVG explicit dimensions,Add width/height attributes to SVGs to prevent layout shift before CSS loads,<svg class='size-6' width='24' height='24'>,SVG without explicit dimensions,<svg class='size-6' width='24' height='24'>,<svg class='size-6'>,High,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/jetpack-compose.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Composable,Pure UI composables,Composable functions should only render UI,Accept state and callbacks,Calling usecase/repo,Pure UI composable,Business logic in UI,High,https://developer.android.com/jetpack/compose/mental-model
2,Composable,Small composables,Each composable has single responsibility,Split into components,Huge composable,Reusable UI,Monolithic UI,Medium,
3,Composable,Stateless by default,Prefer stateless composables,Hoist state,Local mutable state,Stateless UI,Hidden state,High,https://developer.android.com/jetpack/compose/state#state-hoisting
4,State,Single source of truth,UI state comes from one source,StateFlow from VM,Multiple states,Unified UiState,Scattered state,High,https://developer.android.com/topic/architecture/ui-layer
5,State,Model UI State,Use sealed interface/data class,UiState.Loading,Boolean flags,Explicit state,Flag hell,High,
6,State,remember only UI state,remember for UI-only state,"Scroll, animation",Business state,Correct remember,Misuse remember,High,https://developer.android.com/jetpack/compose/state
7,State,rememberSaveable,Persist state across config,rememberSaveable,remember,State survives,State lost,High,https://developer.android.com/jetpack/compose/state#restore-ui-state
8,State,derivedStateOf,Optimize recomposition,derivedStateOf,Recompute always,Optimized,Jank,Medium,https://developer.android.com/jetpack/compose/performance
9,SideEffect,LaunchedEffect keys,Use correct keys,LaunchedEffect(id),LaunchedEffect(Unit),Scoped effect,Infinite loop,High,https://developer.android.com/jetpack/compose/side-effects
10,SideEffect,rememberUpdatedState,Avoid stale lambdas,rememberUpdatedState,Capture directly,Safe callback,Stale state,Medium,https://developer.android.com/jetpack/compose/side-effects
11,SideEffect,DisposableEffect,Clean up resources,onDispose,No cleanup,No leak,Memory leak,High,
12,Architecture,Unidirectional data flow,UI → VM → State,onEvent,Two-way binding,Predictable flow,Hard debug,High,https://developer.android.com/topic/architecture
13,Architecture,No business logic in UI,Logic belongs to VM,Collect state,Call repo,Clean UI,Fat UI,High,
14,Architecture,Expose immutable state,Expose StateFlow,asStateFlow,Mutable exposed,Safe API,State mutation,High,
15,Lifecycle,Lifecycle-aware collect,Use collectAsStateWithLifecycle,Lifecycle aware,collectAsState,No leak,Leak,High,https://developer.android.com/jetpack/compose/lifecycle
16,Navigation,Event-based navigation,VM emits navigation event,"VM: Channel + receiveAsFlow(), V: Collect with Dispatchers.Main.immediate",Nav in UI,Decoupled nav,Using State / SharedFlow for navigation -> event is replayed and navigation fires again (StateFlow),High,https://developer.android.com/jetpack/compose/navigation
17,Navigation,Typed routes,Use sealed routes,sealed class Route,String routes,Type-safe,Runtime crash,Medium,
18,Performance,Stable parameters,Prefer immutable/stable params,@Immutable,Mutable params,Stable recomposition,Extra recomposition,High,https://developer.android.com/jetpack/compose/performance
19,Performance,Use key in Lazy,Provide stable keys,key=id,No key,Stable list,Item jump,High,
20,Performance,Avoid heavy work,No heavy computation in UI,Precompute in VM,Compute in UI,Smooth UI,Jank,High,
21,Performance,Remember expensive objects,remember heavy objects,remember,Recreate each recomposition,Efficient,Wasteful,Medium,
22,Theming,Design system,Centralized theme,Material3 tokens,Hardcoded values,Consistent UI,Inconsistent,High,https://developer.android.com/jetpack/compose/themes
23,Theming,Dark mode support,Theme-based colors,colorScheme,Fixed color,Adaptive UI,Broken dark,Medium,
24,Layout,Prefer Modifier over extra layouts,Use Modifier to adjust layout instead of adding wrapper composables,Use Modifier.padding(),Wrap content with extra Box,Padding via modifier,Box just for padding,High,https://developer.android.com/jetpack/compose/modifiers
25,Layout,Avoid deep layout nesting,Deep layout trees increase measure & layout cost,Keep layout flat,Box ? Column ? Box ? Row,Flat hierarchy,Deep nested tree,High,
26,Layout,Use Row/Column for linear layout,Linear layouts are simpler and more performant,Use Row / Column,Custom layout for simple cases,Row/Column usage,Over-engineered layout,High,
27,Layout,Use Box only for overlapping content,Box should be used only when children overlap,Stack elements,Use Box as Column,Proper overlay,Misused Box,Medium,
28,Layout,Prefer LazyColumn over Column scroll,Lazy layouts are virtualized and efficient,LazyColumn,Column.verticalScroll(),Lazy list,Scrollable Column,High,https://developer.android.com/jetpack/compose/lists
29,Layout,Avoid nested scroll containers,Nested scrolling causes UX & performance issues,Single scroll container,Scroll inside scroll,One scroll per screen,Nested scroll,High,
30,Layout,Avoid fillMaxSize by default,fillMaxSize may break parent constraints,Use exact size,Fill max everywhere,Constraint-aware size,Overfilled layout,Medium,
31,Layout,Avoid intrinsic size unless necessary,Intrinsic measurement is expensive,Explicit sizing,IntrinsicSize.Min,Predictable layout,Expensive measure,High,https://developer.android.com/jetpack/compose/layout/intrinsics
32,Layout,Use Arrangement and Alignment APIs,Declare layout intent explicitly,Use Arrangement / Alignment,Manual spacing hacks,Declarative spacing,Magic spacing,High,
33,Layout,Extract reusable layout patterns,Repeated layouts should be shared,Create layout composable,Copy-paste layouts,Reusable scaffold,Duplicated layout,High,
34,Theming,No hardcoded text style,Use typography,MaterialTheme.typography,Hardcode sp,Scalable,Inconsistent,Medium,
35,Testing,Stateless UI testing,Composable easy to test,Pass state,Hidden state,Testable,Hard test,High,https://developer.android.com/jetpack/compose/testing
36,Testing,Use testTag,Stable UI selectors,Modifier.testTag,Find by text,Stable tests,Flaky tests,Medium,
37,Preview,Multiple previews,Preview multiple states,@Preview,Single preview,Better dev UX,Misleading,Low,https://developer.android.com/jetpack/compose/tooling/preview
38,DI,Inject VM via Hilt,Use hiltViewModel,@HiltViewModel,Manual VM,Clean DI,Coupling,High,https://developer.android.com/training/dependency-injection/hilt-jetpack
39,DI,No DI in UI,Inject in VM,Constructor inject,Inject composable,Proper scope,Wrong scope,High,
40,Accessibility,Content description,Accessible UI,contentDescription,Ignore a11y,Inclusive,A11y fail,Medium,https://developer.android.com/jetpack/compose/accessibility
41,Accessibility,Semantics,Use semantics API,Modifier.semantics,None,Testable a11y,Invisible,Medium,
42,Animation,Compose animation APIs,Use animate*AsState,AnimatedVisibility,Manual anim,Smooth,Jank,Medium,https://developer.android.com/jetpack/compose/animation
43,Animation,Avoid animation logic in VM,Animation is UI concern,Animate in UI,Animate in VM,Correct layering,Mixed concern,Low,
44,Modularization,Feature-based UI modules,UI per feature,:feature:ui,God module,Scalable,Tight coupling,High,https://developer.android.com/topic/modularization
45,Modularization,Public UI contracts,Expose minimal UI API,Interface/Route,Expose impl,Encapsulated,Leaky module,Medium,
46,State,Snapshot state only,Use Compose state,mutableStateOf,Custom observable,Compose aware,Buggy UI,Medium,
47,State,Avoid mutable collections,Immutable list/map,PersistentList,MutableList,Stable UI,Silent bug,High,
48,Lifecycle,RememberCoroutineScope usage,Only for UI jobs,UI coroutine,Long jobs,Scoped job,Leak,Medium,https://developer.android.com/jetpack/compose/side-effects#remembercoroutinescope
49,Interop,Interop View carefully,Use AndroidView,Isolated usage,Mix everywhere,Safe interop,Messy UI,Low,https://developer.android.com/jetpack/compose/interop
50,Interop,Avoid legacy patterns,No LiveData in UI,StateFlow,LiveData,Modern stack,Legacy debt,Medium,
51,Debug,Use layout inspector,Inspect recomposition,Tools,Blind debug,Fast debug,Guessing,Low,https://developer.android.com/studio/debug/layout-inspector
52,Debug,Enable recomposition counts,Track recomposition,Debug flags,Ignore,Performance aware,Hidden jank,Low,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/nextjs.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Routing,Use App Router for new projects,App Router is the recommended approach in Next.js 14+,app/ directory with page.tsx,pages/ for new projects,app/dashboard/page.tsx,pages/dashboard.tsx,Medium,https://nextjs.org/docs/app
2,Routing,Use file-based routing,Create routes by adding files in app directory,page.tsx for routes layout.tsx for layouts,Manual route configuration,app/blog/[slug]/page.tsx,Custom router setup,Medium,https://nextjs.org/docs/app/building-your-application/routing
3,Routing,Colocate related files,Keep components styles tests with their routes,Component files alongside page.tsx,Separate components folder,app/dashboard/_components/,components/dashboard/,Low,
4,Routing,Use route groups for organization,Group routes without affecting URL,Parentheses for route groups,Nested folders affecting URL,(marketing)/about/page.tsx,marketing/about/page.tsx,Low,https://nextjs.org/docs/app/building-your-application/routing/route-groups
5,Routing,Handle loading states,Use loading.tsx for route loading UI,loading.tsx alongside page.tsx,Manual loading state management,app/dashboard/loading.tsx,useState for loading in page,Medium,https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
6,Routing,Handle errors with error.tsx,Catch errors at route level,error.tsx with reset function,try/catch in every component,app/dashboard/error.tsx,try/catch in page component,High,https://nextjs.org/docs/app/building-your-application/routing/error-handling
7,Rendering,Use Server Components by default,Server Components reduce client JS bundle,Keep components server by default,Add 'use client' unnecessarily,export default function Page(),('use client') for static content,High,https://nextjs.org/docs/app/building-your-application/rendering/server-components
8,Rendering,Mark Client Components explicitly,'use client' for interactive components,Add 'use client' only when needed,Server Component with hooks/events,('use client') for onClick useState,No directive with useState,High,https://nextjs.org/docs/app/building-your-application/rendering/client-components
9,Rendering,Push Client Components down,Keep Client Components as leaf nodes,Client wrapper for interactive parts only,Mark page as Client Component,<InteractiveButton/> in Server Page,('use client') on page.tsx,High,
10,Rendering,Use streaming for better UX,Stream content with Suspense boundaries,Suspense for slow data fetches,Wait for all data before render,<Suspense><SlowComponent/></Suspense>,await allData then render,Medium,https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
11,Rendering,Choose correct rendering strategy,SSG for static SSR for dynamic ISR for semi-static,generateStaticParams for known paths,SSR for static content,export const revalidate = 3600,fetch without cache config,Medium,
12,DataFetching,Fetch data in Server Components,Fetch directly in async Server Components,async function Page() { const data = await fetch() },useEffect for initial data,const data = await fetch(url),useEffect(() => fetch(url)),High,https://nextjs.org/docs/app/building-your-application/data-fetching
13,DataFetching,Configure caching explicitly (Next.js 15+),Next.js 15 changed defaults to uncached for fetch,Explicitly set cache: 'force-cache' for static data,Assume default is cached (it's not in Next.js 15),fetch(url { cache: 'force-cache' }),fetch(url) // Uncached in v15,High,https://nextjs.org/docs/app/building-your-application/upgrading/version-15
14,DataFetching,Deduplicate fetch requests,React and Next.js dedupe same requests,Same fetch call in multiple components,Manual request deduplication,Multiple components fetch same URL,Custom cache layer,Low,
15,DataFetching,Use Server Actions for mutations,Server Actions for form submissions,action={serverAction} in forms,API route for every mutation,<form action={createPost}>,<form onSubmit={callApiRoute}>,Medium,https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
16,DataFetching,Revalidate data appropriately,Use revalidatePath/revalidateTag after mutations,Revalidate after Server Action,'use client' with manual refetch,revalidatePath('/posts'),router.refresh() everywhere,Medium,https://nextjs.org/docs/app/building-your-application/caching#revalidating
17,Images,Use next/image for optimization,Automatic image optimization and lazy loading,<Image> component for all images,<img> tags directly,<Image src={} alt={} width={} height={}>,<img src={}/>,High,https://nextjs.org/docs/app/building-your-application/optimizing/images
18,Images,Provide width and height,Prevent layout shift with dimensions,width and height props or fill,Missing dimensions,<Image width={400} height={300}/>,<Image src={url}/>,High,
19,Images,Use fill for responsive images,Fill container with object-fit,fill prop with relative parent,Fixed dimensions for responsive,"<Image fill className=""object-cover""/>",<Image width={window.width}/>,Medium,
20,Images,Configure remote image domains,Whitelist external image sources,remotePatterns in next.config.js,Allow all domains,remotePatterns: [{ hostname: 'cdn.example.com' }],domains: ['*'],High,https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
21,Images,Use priority for LCP images,Mark above-fold images as priority,priority prop on hero images,All images with priority,<Image priority src={hero}/>,<Image priority/> on every image,Medium,
22,Fonts,Use next/font for fonts,Self-hosted fonts with zero layout shift,next/font/google or next/font/local,External font links,import { Inter } from 'next/font/google',"<link href=""fonts.googleapis.com""/>",Medium,https://nextjs.org/docs/app/building-your-application/optimizing/fonts
23,Fonts,Apply font to layout,Set font in root layout for consistency,className on body in layout.tsx,Font in individual pages,<body className={inter.className}>,Each page imports font,Low,
24,Fonts,Use variable fonts,Variable fonts reduce bundle size,Single variable font file,Multiple font weights as files,Inter({ subsets: ['latin'] }),Inter_400 Inter_500 Inter_700,Low,
25,Metadata,Use generateMetadata for dynamic,Generate metadata based on params,export async function generateMetadata(),Hardcoded metadata everywhere,generateMetadata({ params }),export const metadata = {},Medium,https://nextjs.org/docs/app/building-your-application/optimizing/metadata
26,Metadata,Include OpenGraph images,Add OG images for social sharing,opengraph-image.tsx or og property,Missing social preview images,opengraph: { images: ['/og.png'] },No OG configuration,Medium,
27,Metadata,Use metadata API,Export metadata object for static metadata,export const metadata = {},Manual head tags,export const metadata = { title: 'Page' },<head><title>Page</title></head>,Medium,
28,API,Use Route Handlers for APIs,app/api routes for API endpoints,app/api/users/route.ts,pages/api for new projects,export async function GET(request),export default function handler,Medium,https://nextjs.org/docs/app/building-your-application/routing/route-handlers
29,API,Return proper Response objects,Use NextResponse for API responses,NextResponse.json() for JSON,Plain objects or res.json(),return NextResponse.json({ data }),return { data },Medium,
30,API,Handle HTTP methods explicitly,Export named functions for methods,Export GET POST PUT DELETE,Single handler for all methods,export async function POST(),switch(req.method),Low,
31,API,Validate request body,Validate input before processing,Zod or similar for validation,Trust client input,const body = schema.parse(await req.json()),const body = await req.json(),High,
32,Middleware,Use middleware for auth,Protect routes with middleware.ts,middleware.ts at root,Auth check in every page,export function middleware(request),if (!session) redirect in page,Medium,https://nextjs.org/docs/app/building-your-application/routing/middleware
33,Middleware,Match specific paths,Configure middleware matcher,config.matcher for specific routes,Run middleware on all routes,matcher: ['/dashboard/:path*'],No matcher config,Medium,
34,Middleware,Keep middleware edge-compatible,Middleware runs on Edge runtime,Edge-compatible code only,Node.js APIs in middleware,Edge-compatible auth check,fs.readFile in middleware,High,
35,Environment,Use NEXT_PUBLIC prefix,Client-accessible env vars need prefix,NEXT_PUBLIC_ for client vars,Server vars exposed to client,NEXT_PUBLIC_API_URL,API_SECRET in client code,High,https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
36,Environment,Validate env vars,Check required env vars exist,Validate on startup,Undefined env at runtime,if (!process.env.DATABASE_URL) throw,process.env.DATABASE_URL (might be undefined),High,
37,Environment,Use .env.local for secrets,Local env file for development secrets,.env.local gitignored,Secrets in .env committed,.env.local with secrets,.env with DATABASE_PASSWORD,High,
38,Performance,Analyze bundle size,Use @next/bundle-analyzer,Bundle analyzer in dev,Ship large bundles blindly,ANALYZE=true npm run build,No bundle analysis,Medium,https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer
39,Performance,Use dynamic imports,Code split with next/dynamic,dynamic() for heavy components,Import everything statically,const Chart = dynamic(() => import('./Chart')),import Chart from './Chart',Medium,https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading
40,Performance,Avoid layout shifts,Reserve space for dynamic content,Skeleton loaders aspect ratios,Content popping in,"<Skeleton className=""h-48""/>",No placeholder for async content,High,
41,Performance,Use Partial Prerendering,Combine static and dynamic in one route,Static shell with Suspense holes,Full dynamic or static pages,Static header + dynamic content,Entire page SSR,Low,https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering
42,Link,Use next/link for navigation,Client-side navigation with prefetching,"<Link href=""""> for internal links",<a> for internal navigation,"<Link href=""/about"">About</Link>","<a href=""/about"">About</a>",High,https://nextjs.org/docs/app/api-reference/components/link
43,Link,Prefetch strategically,Control prefetching behavior,prefetch={false} for low-priority,Prefetch all links,<Link prefetch={false}>,Default prefetch on every link,Low,
44,Link,Use scroll option appropriately,Control scroll behavior on navigation,scroll={false} for tabs pagination,Always scroll to top,<Link scroll={false}>,Manual scroll management,Low,
45,Config,Use next.config.js correctly,Configure Next.js behavior,Proper config options,Deprecated or wrong options,images: { remotePatterns: [] },images: { domains: [] },Medium,https://nextjs.org/docs/app/api-reference/next-config-js
46,Config,Enable strict mode,Catch potential issues early,reactStrictMode: true,Strict mode disabled,reactStrictMode: true,reactStrictMode: false,Medium,
47,Config,Configure redirects and rewrites,Use config for URL management,redirects() rewrites() in config,Manual redirect handling,redirects: async () => [...],res.redirect in pages,Medium,https://nextjs.org/docs/app/api-reference/next-config-js/redirects
48,Deployment,Use Vercel for easiest deploy,Vercel optimized for Next.js,Deploy to Vercel,Self-host without knowledge,vercel deploy,Complex Docker setup for simple app,Low,https://nextjs.org/docs/app/building-your-application/deploying
49,Deployment,Configure output for self-hosting,Set output option for deployment target,output: 'standalone' for Docker,Default output for containers,output: 'standalone',No output config for Docker,Medium,https://nextjs.org/docs/app/building-your-application/deploying#self-hosting
50,Security,Sanitize user input,Never trust user input,Escape sanitize validate all input,Direct interpolation of user data,DOMPurify.sanitize(userInput),dangerouslySetInnerHTML={{ __html: userInput }},High,
51,Security,Use CSP headers,Content Security Policy for XSS protection,Configure CSP in next.config.js,No security headers,headers() with CSP,No CSP configuration,High,https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
52,Security,Validate Server Action input,Server Actions are public endpoints,Validate and authorize in Server Action,Trust Server Action input,Auth check + validation in action,Direct database call without check,High,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/nuxt-ui.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Installation,Add Nuxt UI module,Install and configure Nuxt UI in your Nuxt project,pnpm add @nuxt/ui and add to modules,Manual component imports,"modules: ['@nuxt/ui']","import { UButton } from '@nuxt/ui'",High,https://ui.nuxt.com/docs/getting-started/installation/nuxt
2,Installation,Import Tailwind and Nuxt UI CSS,Required CSS imports in main.css file,@import tailwindcss and @import @nuxt/ui,Skip CSS imports,"@import ""tailwindcss""; @import ""@nuxt/ui"";",No CSS imports,High,https://ui.nuxt.com/docs/getting-started/installation/nuxt
3,Installation,Wrap app with UApp component,UApp provides global configs for Toast Tooltip and overlays,<UApp> wrapper in app.vue,Skip UApp wrapper,<UApp><NuxtPage/></UApp>,<NuxtPage/> without wrapper,High,https://ui.nuxt.com/docs/components/app
4,Components,Use U prefix for components,All Nuxt UI components use U prefix by default,UButton UInput UModal,Button Input Modal,<UButton>Click</UButton>,<Button>Click</Button>,Medium,https://ui.nuxt.com/docs/getting-started/installation/nuxt
5,Components,Use semantic color props,Use semantic colors like primary secondary error,color="primary" color="error",Hardcoded colors,"<UButton color=""primary"">","<UButton class=""bg-green-500"">",Medium,https://ui.nuxt.com/docs/getting-started/theme/design-system
6,Components,Use variant prop for styling,Nuxt UI provides solid outline soft subtle ghost link variants,variant="soft" variant="outline",Custom button classes,"<UButton variant=""soft"">","<UButton class=""border bg-transparent"">",Medium,https://ui.nuxt.com/docs/components/button
7,Components,Use size prop consistently,Components support xs sm md lg xl sizes,size="sm" size="lg",Arbitrary sizing classes,"<UButton size=""lg"">","<UButton class=""text-xl px-6"">",Low,https://ui.nuxt.com/docs/components/button
8,Icons,Use icon prop with Iconify format,Nuxt UI supports Iconify icons via icon prop,icon="lucide:home" icon="heroicons:user",i-lucide-home format,"<UButton icon=""lucide:home"">","<UButton icon=""i-lucide-home"">",Medium,https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt
9,Icons,Use leadingIcon and trailingIcon,Position icons with dedicated props for clarity,leadingIcon="lucide:plus" trailingIcon="lucide:arrow-right",Manual icon positioning,"<UButton leadingIcon=""lucide:plus"">","<UButton><Icon name=""lucide:plus""/>Add</UButton>",Low,https://ui.nuxt.com/docs/components/button
10,Theming,Configure colors in app.config.ts,Runtime color configuration without restart,ui.colors.primary in app.config.ts,Hardcoded colors in components,"defineAppConfig({ ui: { colors: { primary: 'blue' } } })","<UButton class=""bg-blue-500"">",High,https://ui.nuxt.com/docs/getting-started/theme/design-system
11,Theming,Use @theme directive for custom colors,Define design tokens in CSS with Tailwind @theme,@theme { --color-brand-500: #xxx },Inline color definitions,@theme { --color-brand-500: #ef4444; },:style="{ color: '#ef4444' }",Medium,https://ui.nuxt.com/docs/getting-started/theme/design-system
12,Theming,Extend semantic colors in nuxt.config,Register new colors like tertiary in theme.colors,theme.colors array in ui config,Use undefined colors,"ui: { theme: { colors: ['primary', 'tertiary'] } }","<UButton color=""tertiary""> without config",Medium,https://ui.nuxt.com/docs/getting-started/theme/design-system
13,Forms,Use UForm with schema validation,UForm supports Zod Yup Joi Valibot schemas,:schema prop with validation schema,Manual form validation,"<UForm :schema=""schema"" :state=""state"">",Manual @blur validation,High,https://ui.nuxt.com/docs/components/form
14,Forms,Use UFormField for field wrapper,Provides label error message and validation display,UFormField with name prop,Manual error handling,"<UFormField name=""email"" label=""Email"">",<div><label>Email</label><UInput/><span>error</span></div>,Medium,https://ui.nuxt.com/docs/components/form-field
15,Forms,Handle form submit with @submit,UForm emits submit event with validated data,@submit handler on UForm,@click on submit button,"<UForm @submit=""onSubmit"">","<UButton @click=""onSubmit"">",Medium,https://ui.nuxt.com/docs/components/form
16,Forms,Use validateOn prop for validation timing,Control when validation triggers (blur change input),validateOn="['blur']" for performance,Always validate on input,"<UForm :validateOn=""['blur', 'change']"">","<UForm> (validates on every keystroke)",Low,https://ui.nuxt.com/docs/components/form
17,Overlays,Use v-model:open for overlay control,Modal Slideover Drawer use v-model:open,v-model:open for controlled state,Manual show/hide logic,"<UModal v-model:open=""isOpen"">",<UModal v-if="isOpen">,Medium,https://ui.nuxt.com/docs/components/modal
18,Overlays,Use useOverlay composable for programmatic overlays,Open overlays programmatically without template refs,useOverlay().open(MyModal),Template ref and manual control,"const overlay = useOverlay(); overlay.open(MyModal, { props })","const modal = ref(); modal.value.open()",Medium,https://ui.nuxt.com/docs/components/modal
19,Overlays,Use title and description props,Built-in header support for overlays,title="Confirm" description="Are you sure?",Manual header content,"<UModal title=""Confirm"" description=""Are you sure?"">","<UModal><template #header><h2>Confirm</h2></template>",Low,https://ui.nuxt.com/docs/components/modal
20,Dashboard,Use UDashboardSidebar for navigation,Provides collapsible resizable sidebar with mobile support,UDashboardSidebar with header default footer slots,Custom sidebar implementation,<UDashboardSidebar><template #header>...</template></UDashboardSidebar>,<aside class="w-64 border-r">,Medium,https://ui.nuxt.com/docs/components/dashboard-sidebar
21,Dashboard,Use UDashboardGroup for layout,Wraps dashboard components with sidebar state management,UDashboardGroup > UDashboardSidebar + UDashboardPanel,Manual layout flex containers,<UDashboardGroup><UDashboardSidebar/><UDashboardPanel/></UDashboardGroup>,"<div class=""flex""><aside/><main/></div>",Medium,https://ui.nuxt.com/docs/components/dashboard-group
22,Dashboard,Use UDashboardNavbar for top navigation,Responsive navbar with mobile menu support,UDashboardNavbar in dashboard layout,Custom navbar implementation,<UDashboardNavbar :links="navLinks"/>,<nav class="border-b">,Low,https://ui.nuxt.com/docs/components/dashboard-navbar
23,Tables,Use UTable with data and columns props,Powered by TanStack Table with built-in features,:data and :columns props,Manual table markup,"<UTable :data=""users"" :columns=""columns""/>","<table><tr v-for=""user in users"">",High,https://ui.nuxt.com/docs/components/table
24,Tables,Define columns with accessorKey,Column definitions use accessorKey for data binding,accessorKey: 'email' in column def,String column names only,"{ accessorKey: 'email', header: 'Email' }","['name', 'email']",Medium,https://ui.nuxt.com/docs/components/table
25,Tables,Use cell slot for custom rendering,Customize cell content with scoped slots,#cell-columnName slot,Override entire table,<template #cell-status="{ row }">,Manual column render function,Medium,https://ui.nuxt.com/docs/components/table
26,Tables,Enable sorting with sortable column option,Add sortable: true to column definition,sortable: true in column,Manual sort implementation,"{ accessorKey: 'name', sortable: true }",@click="sortBy('name')",Low,https://ui.nuxt.com/docs/components/table
27,Navigation,Use UNavigationMenu for nav links,Horizontal or vertical navigation with dropdown support,UNavigationMenu with items array,Manual nav with v-for,"<UNavigationMenu :items=""navItems""/>","<nav><a v-for=""item in items"">",Medium,https://ui.nuxt.com/docs/components/navigation-menu
28,Navigation,Use UBreadcrumb for page hierarchy,Automatic breadcrumb with NuxtLink support,:items array with label and to,Manual breadcrumb links,"<UBreadcrumb :items=""breadcrumbs""/>","<nav><span v-for=""crumb in crumbs"">",Low,https://ui.nuxt.com/docs/components/breadcrumb
29,Navigation,Use UTabs for tabbed content,Tab navigation with content panels,UTabs with items containing slot content,Manual tab state,"<UTabs :items=""tabs""/>","<div><button @click=""tab=1"">",Medium,https://ui.nuxt.com/docs/components/tabs
30,Feedback,Use useToast for notifications,Composable for toast notifications,useToast().add({ title description }),Alert components for toasts,"const toast = useToast(); toast.add({ title: 'Saved' })",<UAlert v-if="showSuccess">,High,https://ui.nuxt.com/docs/components/toast
31,Feedback,Use UAlert for inline messages,Static alert messages with icon and actions,UAlert with title description color,Toast for static messages,"<UAlert title=""Warning"" color=""warning""/>",useToast for inline alerts,Medium,https://ui.nuxt.com/docs/components/alert
32,Feedback,Use USkeleton for loading states,Placeholder content during data loading,USkeleton with appropriate size,Spinner for content loading,<USkeleton class="h-4 w-32"/>,<UIcon name="lucide:loader" class="animate-spin"/>,Low,https://ui.nuxt.com/docs/components/skeleton
33,Color Mode,Use UColorModeButton for theme toggle,Built-in light/dark mode toggle button,UColorModeButton component,Manual color mode logic,<UColorModeButton/>,"<button @click=""toggleColorMode"">",Low,https://ui.nuxt.com/docs/components/color-mode-button
34,Color Mode,Use UColorModeSelect for theme picker,Dropdown to select system light or dark mode,UColorModeSelect component,Custom select for theme,<UColorModeSelect/>,"<USelect v-model=""colorMode"" :items=""modes""/>",Low,https://ui.nuxt.com/docs/components/color-mode-select
35,Customization,Use ui prop for component styling,Override component styles via ui prop,ui prop with slot class overrides,Global CSS overrides,"<UButton :ui=""{ base: 'rounded-full' }""/>",<UButton class="!rounded-full"/>,Medium,https://ui.nuxt.com/docs/getting-started/theme/components
36,Customization,Configure default variants in nuxt.config,Set default color and size for all components,theme.defaultVariants in ui config,Repeat props on every component,"ui: { theme: { defaultVariants: { color: 'neutral' } } }","<UButton color=""neutral""> everywhere",Medium,https://ui.nuxt.com/docs/getting-started/installation/nuxt
37,Customization,Use app.config.ts for theme overrides,Runtime theme customization,defineAppConfig with ui key,nuxt.config for runtime values,"defineAppConfig({ ui: { button: { defaultVariants: { size: 'sm' } } } })","nuxt.config ui.button.size: 'sm'",Medium,https://ui.nuxt.com/docs/getting-started/theme/components
38,Performance,Enable component detection,Tree-shake unused component CSS,experimental.componentDetection: true,Include all component CSS,"ui: { experimental: { componentDetection: true } }","ui: {} (includes all CSS)",Low,https://ui.nuxt.com/docs/getting-started/installation/nuxt
39,Performance,Use UTable virtualize for large data,Enable virtualization for 1000+ rows,:virtualize prop on UTable,Render all rows,"<UTable :data=""largeData"" virtualize/>","<UTable :data=""largeData""/>",Medium,https://ui.nuxt.com/docs/components/table
40,Accessibility,Use semantic component props,Components have built-in ARIA support,Use title description label props,Skip accessibility props,"<UModal title=""Settings"">","<UModal><h2>Settings</h2>",Medium,https://ui.nuxt.com/docs/components/modal
41,Accessibility,Use UFormField for form accessibility,Automatic label-input association,UFormField wraps inputs,Manual id and for attributes,"<UFormField label=""Email""><UInput/></UFormField>","<label for=""email"">Email</label><UInput id=""email""/>",High,https://ui.nuxt.com/docs/components/form-field
42,Content,Use UContentToc for table of contents,Automatic TOC with active heading highlight,UContentToc with :links,Manual TOC implementation,"<UContentToc :links=""toc""/>","<nav><a v-for=""heading in headings"">",Low,https://ui.nuxt.com/docs/components/content-toc
43,Content,Use UContentSearch for docs search,Command palette for documentation search,UContentSearch with Nuxt Content,Custom search implementation,<UContentSearch/>,<UCommandPalette :groups="searchResults"/>,Low,https://ui.nuxt.com/docs/components/content-search
44,AI/Chat,Use UChatMessages for chat UI,Designed for Vercel AI SDK integration,UChatMessages with messages array,Custom chat message list,"<UChatMessages :messages=""messages""/>","<div v-for=""msg in messages"">",Medium,https://ui.nuxt.com/docs/components/chat-messages
45,AI/Chat,Use UChatPrompt for input,Enhanced textarea for AI prompts,UChatPrompt with v-model,Basic textarea,<UChatPrompt v-model="prompt"/>,<UTextarea v-model="prompt"/>,Medium,https://ui.nuxt.com/docs/components/chat-prompt
46,Editor,Use UEditor for rich text,TipTap-based editor with toolbar support,UEditor with v-model:content,Custom TipTap setup,"<UEditor v-model:content=""content""/>",Manual TipTap initialization,Medium,https://ui.nuxt.com/docs/components/editor
47,Links,Use to prop for navigation,UButton and ULink support NuxtLink to prop,to="/dashboard" for internal links,href for internal navigation,"<UButton to=""/dashboard"">","<UButton href=""/dashboard"">",Medium,https://ui.nuxt.com/docs/components/button
48,Links,Use external prop for outside links,Explicitly mark external links,target="_blank" with external URLs,Forget rel="noopener","<UButton to=""https://example.com"" target=""_blank"">","<UButton href=""https://..."">",Low,https://ui.nuxt.com/docs/components/link
49,Loading,Use loadingAuto on buttons,Automatic loading state from @click promise,loadingAuto prop on UButton,Manual loading state,"<UButton loadingAuto @click=""async () => await save()"">","<UButton :loading=""isLoading"" @click=""save"">",Low,https://ui.nuxt.com/docs/components/button
50,Loading,Use UForm loadingAuto,Auto-disable form during submit,loadingAuto on UForm (default true),Manual form disabled state,"<UForm @submit=""handleSubmit"">","<UForm :disabled=""isSubmitting"">",Low,https://ui.nuxt.com/docs/components/form

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/nuxtjs.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Routing,Use file-based routing,Create routes by adding files in pages directory,pages/ directory with index.vue,Manual route configuration,pages/dashboard/index.vue,Custom router setup,Medium,https://nuxt.com/docs/getting-started/routing
2,Routing,Use dynamic route parameters,Create dynamic routes with bracket syntax,[id].vue for dynamic params,Hardcoded routes for dynamic content,pages/posts/[id].vue,pages/posts/post1.vue,Medium,https://nuxt.com/docs/getting-started/routing
3,Routing,Use catch-all routes,Handle multiple path segments with [...slug],[...slug].vue for catch-all,Multiple nested dynamic routes,pages/[...slug].vue,pages/[a]/[b]/[c].vue,Low,https://nuxt.com/docs/getting-started/routing
4,Routing,Define page metadata with definePageMeta,Set page-level configuration and middleware,definePageMeta for layout middleware title,Manual route meta configuration,"definePageMeta({ layout: 'admin', middleware: 'auth' })",router.beforeEach for page config,High,https://nuxt.com/docs/api/utils/define-page-meta
5,Routing,Use validate for route params,Validate dynamic route parameters before rendering,validate function in definePageMeta,Manual validation in setup,"definePageMeta({ validate: (route) => /^\d+$/.test(route.params.id) })",if (!valid) navigateTo('/404'),Medium,https://nuxt.com/docs/api/utils/define-page-meta
6,Rendering,Use SSR by default,Server-side rendering is enabled by default,Keep ssr: true (default),Disable SSR unnecessarily,ssr: true (default),ssr: false for all pages,High,https://nuxt.com/docs/guide/concepts/rendering
7,Rendering,Use .client suffix for client-only components,Mark components to render only on client,ComponentName.client.vue suffix,v-if with process.client check,Comments.client.vue,<div v-if="process.client"><Comments/></div>,Medium,https://nuxt.com/docs/guide/directory-structure/components
8,Rendering,Use .server suffix for server-only components,Mark components to render only on server,ComponentName.server.vue suffix,Manual server check,HeavyMarkdown.server.vue,v-if="process.server",Low,https://nuxt.com/docs/guide/directory-structure/components
9,DataFetching,Use useFetch for simple data fetching,Wrapper around useAsyncData for URL fetching,useFetch for API calls,$fetch in onMounted,"const { data } = await useFetch('/api/posts')","onMounted(async () => { data.value = await $fetch('/api/posts') })",High,https://nuxt.com/docs/api/composables/use-fetch
10,DataFetching,Use useAsyncData for complex fetching,Fine-grained control over async data,useAsyncData for CMS or custom fetching,useFetch for non-URL data sources,"const { data } = await useAsyncData('posts', () => cms.getPosts())","const { data } = await useFetch(() => cms.getPosts())",Medium,https://nuxt.com/docs/api/composables/use-async-data
11,DataFetching,Use $fetch for non-reactive requests,$fetch for event handlers and non-component code,$fetch in event handlers or server routes,useFetch in click handlers,"async function submit() { await $fetch('/api/submit', { method: 'POST' }) }","async function submit() { await useFetch('/api/submit') }",High,https://nuxt.com/docs/api/utils/dollarfetch
12,DataFetching,Use lazy option for non-blocking fetch,Defer data fetching for better initial load,lazy: true for below-fold content,Blocking fetch for non-critical data,"useFetch('/api/comments', { lazy: true })",await useFetch('/api/comments') for footer,Medium,https://nuxt.com/docs/api/composables/use-fetch
13,DataFetching,Use server option to control fetch location,Choose where data is fetched,server: false for client-only data,Server fetch for user-specific client data,"useFetch('/api/user-preferences', { server: false })",useFetch for localStorage-dependent data,Medium,https://nuxt.com/docs/api/composables/use-fetch
14,DataFetching,Use pick to reduce payload size,Select only needed fields from response,pick option for large responses,Fetching entire objects when few fields needed,"useFetch('/api/user', { pick: ['id', 'name'] })",useFetch('/api/user') then destructure,Low,https://nuxt.com/docs/api/composables/use-fetch
15,DataFetching,Use transform for data manipulation,Transform data before storing in state,transform option for data shaping,Manual transformation after fetch,"useFetch('/api/posts', { transform: (posts) => posts.map(p => p.title) })",const titles = data.value.map(p => p.title),Low,https://nuxt.com/docs/api/composables/use-fetch
16,DataFetching,Handle loading and error states,Always handle pending and error states,Check status pending error refs,Ignoring loading states,"<div v-if=""status === 'pending'"">Loading...</div>",No loading indicator,High,https://nuxt.com/docs/getting-started/data-fetching
17,Lifecycle,Avoid side effects in script setup root,Move side effects to lifecycle hooks,Side effects in onMounted,setInterval in root script setup,"onMounted(() => { interval = setInterval(...) })","<script setup>setInterval(...)</script>",High,https://nuxt.com/docs/guide/concepts/nuxt-lifecycle
18,Lifecycle,Use onMounted for DOM access,Access DOM only after component is mounted,onMounted for DOM manipulation,Direct DOM access in setup,"onMounted(() => { document.getElementById('el') })","<script setup>document.getElementById('el')</script>",High,https://nuxt.com/docs/api/composables/on-mounted
19,Lifecycle,Use nextTick for post-render access,Wait for DOM updates before accessing elements,await nextTick() after state changes,Immediate DOM access after state change,"count.value++; await nextTick(); el.value.focus()","count.value++; el.value.focus()",Medium,https://nuxt.com/docs/api/utils/next-tick
20,Lifecycle,Use onPrehydrate for pre-hydration logic,Run code before Nuxt hydrates the page,onPrehydrate for client setup,onMounted for hydration-critical code,"onPrehydrate(() => { console.log(window) })",onMounted for pre-hydration needs,Low,https://nuxt.com/docs/api/composables/on-prehydrate
21,Server,Use server/api for API routes,Create API endpoints in server/api directory,server/api/users.ts for /api/users,Manual Express setup,server/api/hello.ts -> /api/hello,app.get('/api/hello'),High,https://nuxt.com/docs/guide/directory-structure/server
22,Server,Use defineEventHandler for handlers,Define server route handlers,defineEventHandler for all handlers,export default function,"export default defineEventHandler((event) => { return { hello: 'world' } })","export default function(req, res) {}",High,https://nuxt.com/docs/guide/directory-structure/server
23,Server,Use server/routes for non-api routes,Routes without /api prefix,server/routes for custom paths,server/api for non-api routes,server/routes/sitemap.xml.ts,server/api/sitemap.xml.ts,Medium,https://nuxt.com/docs/guide/directory-structure/server
24,Server,Use getQuery and readBody for input,Access query params and request body,getQuery(event) readBody(event),Direct event access,"const { id } = getQuery(event)",event.node.req.query,Medium,https://nuxt.com/docs/guide/directory-structure/server
25,Server,Validate server input,Always validate input in server handlers,Zod or similar for validation,Trust client input,"const body = await readBody(event); schema.parse(body)",const body = await readBody(event),High,https://nuxt.com/docs/guide/directory-structure/server
26,State,Use useState for shared reactive state,SSR-friendly shared state across components,useState for cross-component state,ref for shared state,"const count = useState('count', () => 0)",const count = ref(0) in composable,High,https://nuxt.com/docs/api/composables/use-state
27,State,Use unique keys for useState,Prevent state conflicts with unique keys,Descriptive unique keys for each state,Generic or duplicate keys,"useState('user-preferences', () => ({}))",useState('data') in multiple places,Medium,https://nuxt.com/docs/api/composables/use-state
28,State,Use Pinia for complex state,Pinia for advanced state management,@pinia/nuxt for complex apps,Custom state management,useMainStore() with Pinia,Custom reactive store implementation,Medium,https://nuxt.com/docs/getting-started/state-management
29,State,Use callOnce for one-time async operations,Ensure async operations run only once,callOnce for store initialization,Direct await in component,"await callOnce(store.fetch)",await store.fetch() on every render,Medium,https://nuxt.com/docs/api/utils/call-once
30,SEO,Use useSeoMeta for SEO tags,Type-safe SEO meta tag management,useSeoMeta for meta tags,useHead for simple meta,"useSeoMeta({ title: 'Home', ogTitle: 'Home', description: '...' })","useHead({ meta: [{ name: 'description', content: '...' }] })",High,https://nuxt.com/docs/api/composables/use-seo-meta
31,SEO,Use reactive values in useSeoMeta,Dynamic SEO tags with refs or getters,Computed getters for dynamic values,Static values for dynamic content,"useSeoMeta({ title: () => post.value.title })","useSeoMeta({ title: post.value.title })",Medium,https://nuxt.com/docs/api/composables/use-seo-meta
32,SEO,Use useHead for non-meta head elements,Scripts styles links in head,useHead for scripts and links,useSeoMeta for scripts,"useHead({ script: [{ src: '/analytics.js' }] })","useSeoMeta({ script: '...' })",Medium,https://nuxt.com/docs/api/composables/use-head
33,SEO,Include OpenGraph tags,Add OG tags for social sharing,ogTitle ogDescription ogImage,Missing social preview,"useSeoMeta({ ogImage: '/og.png', twitterCard: 'summary_large_image' })",No OG configuration,Medium,https://nuxt.com/docs/api/composables/use-seo-meta
34,Middleware,Use defineNuxtRouteMiddleware,Define route middleware properly,defineNuxtRouteMiddleware wrapper,export default function,"export default defineNuxtRouteMiddleware((to, from) => {})","export default function(to, from) {}",High,https://nuxt.com/docs/guide/directory-structure/middleware
35,Middleware,Use navigateTo for redirects,Redirect in middleware with navigateTo,return navigateTo('/login'),router.push in middleware,"if (!auth) return navigateTo('/login')","if (!auth) router.push('/login')",High,https://nuxt.com/docs/api/utils/navigate-to
36,Middleware,Reference middleware in definePageMeta,Apply middleware to specific pages,middleware array in definePageMeta,Global middleware for page-specific,definePageMeta({ middleware: ['auth'] }),Global auth check for one page,Medium,https://nuxt.com/docs/guide/directory-structure/middleware
37,Middleware,Use .global suffix for global middleware,Apply middleware to all routes,auth.global.ts for app-wide auth,Manual middleware on every page,middleware/auth.global.ts,middleware: ['auth'] on every page,Medium,https://nuxt.com/docs/guide/directory-structure/middleware
38,ErrorHandling,Use createError for errors,Create errors with proper status codes,createError with statusCode,throw new Error,"throw createError({ statusCode: 404, statusMessage: 'Not Found' })",throw new Error('Not Found'),High,https://nuxt.com/docs/api/utils/create-error
39,ErrorHandling,Use NuxtErrorBoundary for local errors,Handle errors within component subtree,NuxtErrorBoundary for component errors,Global error page for local errors,"<NuxtErrorBoundary @error=""log""><template #error=""{ error }"">",error.vue for component errors,Medium,https://nuxt.com/docs/getting-started/error-handling
40,ErrorHandling,Use clearError to recover from errors,Clear error state and optionally redirect,clearError({ redirect: '/' }),Manual error state reset,clearError({ redirect: '/home' }),error.value = null,Medium,https://nuxt.com/docs/api/utils/clear-error
41,ErrorHandling,Use short statusMessage,Keep statusMessage brief for security,Short generic messages,Detailed error info in statusMessage,"createError({ statusCode: 400, statusMessage: 'Bad Request' })","createError({ statusMessage: 'Invalid user ID: 123' })",High,https://nuxt.com/docs/getting-started/error-handling
42,Link,Use NuxtLink for internal navigation,Client-side navigation with prefetching,<NuxtLink to> for internal links,<a href> for internal links,<NuxtLink to="/about">About</NuxtLink>,<a href="/about">About</a>,High,https://nuxt.com/docs/api/components/nuxt-link
43,Link,Configure prefetch behavior,Control when prefetching occurs,prefetchOn for interaction-based,Default prefetch for low-priority,"<NuxtLink prefetch-on=""interaction"">",Always default prefetch,Low,https://nuxt.com/docs/api/components/nuxt-link
44,Link,Use useRouter for programmatic navigation,Navigate programmatically,useRouter().push() for navigation,Direct window.location,"const router = useRouter(); router.push('/dashboard')",window.location.href = '/dashboard',Medium,https://nuxt.com/docs/api/composables/use-router
45,Link,Use navigateTo in composables,Navigate outside components,navigateTo() in middleware or plugins,useRouter in non-component code,return navigateTo('/login'),router.push in middleware,Medium,https://nuxt.com/docs/api/utils/navigate-to
46,AutoImports,Leverage auto-imports,Use auto-imported composables directly,Direct use of ref computed useFetch,Manual imports for Nuxt composables,"const count = ref(0)","import { ref } from 'vue'; const count = ref(0)",Medium,https://nuxt.com/docs/guide/concepts/auto-imports
47,AutoImports,Use #imports for explicit imports,Explicit imports when needed,#imports for clarity or disabled auto-imports,"import from 'vue' when auto-import enabled","import { ref } from '#imports'","import { ref } from 'vue'",Low,https://nuxt.com/docs/guide/concepts/auto-imports
48,AutoImports,Configure third-party auto-imports,Add external package auto-imports,imports.presets in nuxt.config,Manual imports everywhere,"imports: { presets: [{ from: 'vue-i18n', imports: ['useI18n'] }] }",import { useI18n } everywhere,Low,https://nuxt.com/docs/guide/concepts/auto-imports
49,Plugins,Use defineNuxtPlugin,Define plugins properly,defineNuxtPlugin wrapper,export default function,"export default defineNuxtPlugin((nuxtApp) => {})","export default function(ctx) {}",High,https://nuxt.com/docs/guide/directory-structure/plugins
50,Plugins,Use provide for injection,Provide helpers across app,return { provide: {} } for type safety,nuxtApp.provide without types,"return { provide: { hello: (name) => `Hello ${name}!` } }","nuxtApp.provide('hello', fn)",Medium,https://nuxt.com/docs/guide/directory-structure/plugins
51,Plugins,Use .client or .server suffix,Control plugin execution environment,plugin.client.ts for client-only,if (process.client) checks,analytics.client.ts,"if (process.client) { // analytics }",Medium,https://nuxt.com/docs/guide/directory-structure/plugins
52,Environment,Use runtimeConfig for env vars,Access environment variables safely,runtimeConfig in nuxt.config,process.env directly,"runtimeConfig: { apiSecret: '', public: { apiBase: '' } }",process.env.API_SECRET in components,High,https://nuxt.com/docs/guide/going-further/runtime-config
53,Environment,Use NUXT_ prefix for env override,Override config with environment variables,NUXT_API_SECRET NUXT_PUBLIC_API_BASE,Custom env var names,NUXT_PUBLIC_API_BASE=https://api.example.com,API_BASE=https://api.example.com,High,https://nuxt.com/docs/guide/going-further/runtime-config
54,Environment,Access public config with useRuntimeConfig,Get public config in components,useRuntimeConfig().public,Direct process.env access,const config = useRuntimeConfig(); config.public.apiBase,process.env.NUXT_PUBLIC_API_BASE,High,https://nuxt.com/docs/api/composables/use-runtime-config
55,Environment,Keep secrets in private config,Server-only secrets in runtimeConfig root,runtimeConfig.apiSecret (server only),Secrets in public config,runtimeConfig: { dbPassword: '' },runtimeConfig: { public: { dbPassword: '' } },High,https://nuxt.com/docs/guide/going-further/runtime-config
56,Performance,Use Lazy prefix for code splitting,Lazy load components with Lazy prefix,<LazyComponent> for below-fold,Eager load all components,<LazyMountainsList v-if="show"/>,<MountainsList/> for hidden content,Medium,https://nuxt.com/docs/guide/directory-structure/components
57,Performance,Use useLazyFetch for non-blocking data,Alias for useFetch with lazy: true,useLazyFetch for secondary data,useFetch for all requests,"const { data } = useLazyFetch('/api/comments')",await useFetch for comments section,Medium,https://nuxt.com/docs/api/composables/use-lazy-fetch
58,Performance,Use lazy hydration for interactivity,Delay component hydration until needed,LazyComponent with hydration strategy,Immediate hydration for all,<LazyModal hydrate-on-visible/>,<Modal/> in footer,Low,https://nuxt.com/docs/guide/going-further/experimental-features

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/react-native.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Components,Use functional components,Hooks-based components are standard,Functional components with hooks,Class components,const App = () => { },class App extends Component,Medium,https://reactnative.dev/docs/intro-react
2,Components,Keep components small,Single responsibility principle,Split into smaller components,Large monolithic components,<Header /><Content /><Footer />,500+ line component,Medium,
3,Components,Use TypeScript,Type safety for props and state,TypeScript for new projects,JavaScript without types,const Button: FC<Props> = () => { },const Button = (props) => { },Medium,
4,Components,Colocate component files,Keep related files together,Component folder with styles,Flat structure,components/Button/index.tsx styles.ts,components/Button.tsx styles/button.ts,Low,
5,Styling,Use StyleSheet.create,Optimized style objects,StyleSheet for all styles,Inline style objects,StyleSheet.create({ container: {} }),style={{ margin: 10 }},High,https://reactnative.dev/docs/stylesheet
6,Styling,Avoid inline styles,Prevent object recreation,Styles in StyleSheet,Inline style objects in render,style={styles.container},"style={{ margin: 10, padding: 5 }}",Medium,
7,Styling,Use flexbox for layout,React Native uses flexbox,flexDirection alignItems justifyContent,Absolute positioning everywhere,flexDirection: 'row',position: 'absolute' everywhere,Medium,https://reactnative.dev/docs/flexbox
8,Styling,Handle platform differences,Platform-specific styles,Platform.select or .ios/.android files,Same styles for both platforms,"Platform.select({ ios: {}, android: {} })",Hardcoded iOS values,Medium,https://reactnative.dev/docs/platform-specific-code
9,Styling,Use responsive dimensions,Scale for different screens,Dimensions or useWindowDimensions,Fixed pixel values,useWindowDimensions(),width: 375,Medium,
10,Navigation,Use React Navigation,Standard navigation library,React Navigation for routing,Manual navigation management,createStackNavigator(),Custom navigation state,Medium,https://reactnavigation.org/
11,Navigation,Type navigation params,Type-safe navigation,Typed navigation props,Untyped navigation,"navigation.navigate<RootStackParamList>('Home', { id })","navigation.navigate('Home', { id })",Medium,
12,Navigation,Use deep linking,Support URL-based navigation,Configure linking prop,No deep link support,linking: { prefixes: [] },No linking configuration,Medium,https://reactnavigation.org/docs/deep-linking/
13,Navigation,Handle back button,Android back button handling,useFocusEffect with BackHandler,Ignore back button,BackHandler.addEventListener,No back handler,High,
14,State,Use useState for local state,Simple component state,useState for UI state,Class component state,"const [count, setCount] = useState(0)",this.state = { count: 0 },Medium,
15,State,Use useReducer for complex state,Complex state logic,useReducer for related state,Multiple useState for related values,useReducer(reducer initialState),5+ useState calls,Medium,
16,State,Use context sparingly,Context for global state,Context for theme auth locale,Context for frequently changing data,ThemeContext for app theme,Context for list item data,Medium,
17,State,Consider Zustand or Redux,External state management,Zustand for simple Redux for complex,useState for global state,create((set) => ({ })),Prop drilling global state,Medium,
18,Lists,Use FlatList for long lists,Virtualized list rendering,FlatList for 50+ items,ScrollView with map,<FlatList data={items} />,<ScrollView>{items.map()}</ScrollView>,High,https://reactnative.dev/docs/flatlist
19,Lists,Provide keyExtractor,Unique keys for list items,keyExtractor with stable ID,Index as key,keyExtractor={(item) => item.id},"keyExtractor={(_, index) => index}",High,
20,Lists,Optimize renderItem,Memoize list item components,React.memo for list items,Inline render function,renderItem={({ item }) => <MemoizedItem item={item} />},renderItem={({ item }) => <View>...</View>},High,
21,Lists,Use getItemLayout for fixed height,Skip measurement for performance,getItemLayout when height known,Dynamic measurement for fixed items,"getItemLayout={(_, index) => ({ length: 50, offset: 50 * index, index })}",No getItemLayout for fixed height,Medium,
22,Lists,Implement windowSize,Control render window,Smaller windowSize for memory,Default windowSize for large lists,windowSize={5},windowSize={21} for huge lists,Medium,
23,Performance,Use React.memo,Prevent unnecessary re-renders,memo for pure components,No memoization,export default memo(MyComponent),export default MyComponent,Medium,
24,Performance,Use useCallback for handlers,Stable function references,useCallback for props,New function on every render,"useCallback(() => {}, [deps])",() => handlePress(),Medium,
25,Performance,Use useMemo for expensive ops,Cache expensive calculations,useMemo for heavy computations,Recalculate every render,"useMemo(() => expensive(), [deps])",const result = expensive(),Medium,
26,Performance,Avoid anonymous functions in JSX,Prevent re-renders,Named handlers or useCallback,Inline arrow functions,onPress={handlePress},onPress={() => doSomething()},Medium,
27,Performance,Use Hermes engine,Improved startup and memory,Enable Hermes in build,JavaScriptCore for new projects,hermes_enabled: true,hermes_enabled: false,Medium,https://reactnative.dev/docs/hermes
28,Images,Use expo-image,Modern performant image component for React Native,"Use expo-image for caching, blurring, and performance",Use default Image for heavy lists or unmaintained libraries,<Image source={url} cachePolicy='memory-disk' /> (expo-image),<FastImage source={url} />,Medium,https://docs.expo.dev/versions/latest/sdk/image/
29,Images,Specify image dimensions,Prevent layout shifts,width and height for remote images,No dimensions for network images,<Image style={{ width: 100 height: 100 }} />,<Image source={{ uri }} /> no size,High,
30,Images,Use resizeMode,Control image scaling,resizeMode cover contain,Stretch images,"resizeMode=""cover""",No resizeMode,Low,
31,Forms,Use controlled inputs,State-controlled form fields,value + onChangeText,Uncontrolled inputs,<TextInput value={text} onChangeText={setText} />,<TextInput defaultValue={text} />,Medium,
32,Forms,Handle keyboard,Manage keyboard visibility,KeyboardAvoidingView,Content hidden by keyboard,"<KeyboardAvoidingView behavior=""padding"">",No keyboard handling,High,https://reactnative.dev/docs/keyboardavoidingview
33,Forms,Use proper keyboard types,Appropriate keyboard for input,keyboardType for input type,Default keyboard for all,"keyboardType=""email-address""","keyboardType=""default"" for email",Low,
34,Touch,Use Pressable,Modern touch handling,Pressable for touch interactions,TouchableOpacity for new code,<Pressable onPress={} />,<TouchableOpacity onPress={} />,Low,https://reactnative.dev/docs/pressable
35,Touch,Provide touch feedback,Visual feedback on press,Ripple or opacity change,No feedback on press,android_ripple={{ color: 'gray' }},No press feedback,Medium,
36,Touch,Set hitSlop for small targets,Increase touch area,hitSlop for icons and small buttons,Tiny touch targets,hitSlop={{ top: 10 bottom: 10 }},44x44 with no hitSlop,Medium,
37,Animation,Use Reanimated,High-performance animations,react-native-reanimated,Animated API for complex,useSharedValue useAnimatedStyle,Animated.timing for gesture,Medium,https://docs.swmansion.com/react-native-reanimated/
38,Animation,Run on UI thread,worklets for smooth animation,Run animations on UI thread,JS thread animations,runOnUI(() => {}),Animated on JS thread,High,
39,Animation,Use gesture handler,Native gesture recognition,react-native-gesture-handler,JS-based gesture handling,<GestureDetector>,<View onTouchMove={} />,Medium,https://docs.swmansion.com/react-native-gesture-handler/
40,Async,Handle loading states,Show loading indicators,ActivityIndicator during load,Empty screen during load,{isLoading ? <ActivityIndicator /> : <Content />},No loading state,Medium,
41,Async,Handle errors gracefully,Error boundaries and fallbacks,Error UI for failed requests,Crash on error,{error ? <ErrorView /> : <Content />},No error handling,High,
42,Async,Cancel async operations,Cleanup on unmount,AbortController or cleanup,Memory leaks from async,useEffect cleanup,No cleanup for subscriptions,High,
43,Accessibility,Add accessibility labels,Describe UI elements,accessibilityLabel for all interactive,Missing labels,"accessibilityLabel=""Submit form""",<Pressable> without label,High,https://reactnative.dev/docs/accessibility
44,Accessibility,Use accessibility roles,Semantic meaning,accessibilityRole for elements,Wrong roles,"accessibilityRole=""button""",No role for button,Medium,
45,Accessibility,Support screen readers,Test with TalkBack/VoiceOver,Test with screen readers,Skip accessibility testing,Regular TalkBack testing,No screen reader testing,High,
46,Testing,Use React Native Testing Library,Component testing,render and fireEvent,Enzyme or manual testing,render(<Component />),shallow(<Component />),Medium,https://callstack.github.io/react-native-testing-library/
47,Testing,Test on real devices,Real device behavior,Test on iOS and Android devices,Simulator only,Device testing in CI,Simulator only testing,High,
48,Testing,Use Detox for E2E,End-to-end testing,Detox for critical flows,Manual E2E testing,detox test,Manual testing only,Medium,https://wix.github.io/Detox/
49,Native,Use native modules carefully,Bridge has overhead,Batch native calls,Frequent bridge crossing,Batch updates,Call native on every keystroke,High,
50,Native,Use Expo when possible,Simplified development,Expo for standard features,Bare RN for simple apps,expo install package,react-native link package,Low,https://docs.expo.dev/
51,Native,Handle permissions,Request permissions properly,Check and request permissions,Assume permissions granted,PermissionsAndroid.request(),Access without permission check,High,https://reactnative.dev/docs/permissionsandroid

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/react.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,State,Use useState for local state,Simple component state should use useState hook,useState for form inputs toggles counters,Class components this.state,"const [count, setCount] = useState(0)",this.state = { count: 0 },Medium,https://react.dev/reference/react/useState
2,State,Lift state up when needed,Share state between siblings by lifting to parent,Lift shared state to common ancestor,Prop drilling through many levels,Parent holds state passes down,Deep prop chains,Medium,https://react.dev/learn/sharing-state-between-components
3,State,Use useReducer for complex state,Complex state logic benefits from reducer pattern,useReducer for state with multiple sub-values,Multiple useState for related values,useReducer with action types,5+ useState calls that update together,Medium,https://react.dev/reference/react/useReducer
4,State,Avoid unnecessary state,Derive values from existing state when possible,Compute derived values in render,Store derivable values in state,const total = items.reduce(...),"const [total, setTotal] = useState(0)",High,https://react.dev/learn/choosing-the-state-structure
5,State,Initialize state lazily,Use function form for expensive initial state,useState(() => computeExpensive()),useState(computeExpensive()),useState(() => JSON.parse(data)),useState(JSON.parse(data)),Medium,https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state
6,Effects,Clean up effects,Return cleanup function for subscriptions timers,Return cleanup function in useEffect,No cleanup for subscriptions,useEffect(() => { sub(); return unsub; }),useEffect(() => { subscribe(); }),High,https://react.dev/reference/react/useEffect#connecting-to-an-external-system
7,Effects,Specify dependencies correctly,Include all values used inside effect in deps array,All referenced values in dependency array,Empty deps with external references,[value] when using value in effect,[] when using props/state in effect,High,https://react.dev/reference/react/useEffect#specifying-reactive-dependencies
8,Effects,Avoid unnecessary effects,Don't use effects for transforming data or events,Transform data during render handle events directly,useEffect for derived state or event handling,const filtered = items.filter(...),useEffect(() => setFiltered(items.filter(...))),High,https://react.dev/learn/you-might-not-need-an-effect
9,Effects,Use refs for non-reactive values,Store values that don't trigger re-renders in refs,useRef for interval IDs DOM elements,useState for values that don't need render,const intervalRef = useRef(null),"const [intervalId, setIntervalId] = useState()",Medium,https://react.dev/reference/react/useRef
10,Rendering,Use keys properly,Stable unique keys for list items,Use stable IDs as keys,Array index as key for dynamic lists,key={item.id},key={index},High,https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
11,Rendering,Memoize expensive calculations,Use useMemo for costly computations,useMemo for expensive filtering/sorting,Recalculate every render,"useMemo(() => expensive(), [deps])",const result = expensiveCalc(),Medium,https://react.dev/reference/react/useMemo
12,Rendering,Memoize callbacks passed to children,Use useCallback for functions passed as props,useCallback for handlers passed to memoized children,New function reference every render,"useCallback(() => {}, [deps])",const handler = () => {},Medium,https://react.dev/reference/react/useCallback
13,Rendering,Use React.memo wisely,Wrap components that render often with same props,memo for pure components with stable props,memo everything or nothing,memo(ExpensiveList),memo(SimpleButton),Low,https://react.dev/reference/react/memo
14,Rendering,Avoid inline object/array creation in JSX,Create objects outside render or memoize,Define style objects outside component,Inline objects in props,<div style={styles.container}>,<div style={{ margin: 10 }}>,Medium,
15,Components,Keep components small and focused,Single responsibility for each component,One concern per component,Large multi-purpose components,<UserAvatar /><UserName />,<UserCard /> with 500 lines,Medium,
16,Components,Use composition over inheritance,Compose components using children and props,Use children prop for flexibility,Inheritance hierarchies,<Card>{content}</Card>,class SpecialCard extends Card,Medium,https://react.dev/learn/thinking-in-react
17,Components,Colocate related code,Keep related components and hooks together,Related files in same directory,Flat structure with many files,components/User/UserCard.tsx,components/UserCard.tsx + hooks/useUser.ts,Low,
18,Components,Use fragments to avoid extra DOM,Fragment or <> for multiple elements without wrapper,<> for grouping without DOM node,Extra div wrappers,<>{items.map(...)}</>,<div>{items.map(...)}</div>,Low,https://react.dev/reference/react/Fragment
19,Props,Destructure props,Destructure props for cleaner component code,Destructure in function signature,props.name props.value throughout,"function User({ name, age })",function User(props),Low,
20,Props,Provide default props values,Use default parameters or defaultProps,Default values in destructuring,Undefined checks throughout,function Button({ size = 'md' }),if (size === undefined) size = 'md',Low,
21,Props,Avoid prop drilling,Use context or composition for deeply nested data,Context for global data composition for UI,Passing props through 5+ levels,<UserContext.Provider>,<A user={u}><B user={u}><C user={u}>,Medium,https://react.dev/learn/passing-data-deeply-with-context
22,Props,Validate props with TypeScript,Use TypeScript interfaces for prop types,interface Props { name: string },PropTypes or no validation,interface ButtonProps { onClick: () => void },Button.propTypes = {},Medium,
23,Events,Use synthetic events correctly,React normalizes events across browsers,e.preventDefault() e.stopPropagation(),Access native event unnecessarily,onClick={(e) => e.preventDefault()},onClick={(e) => e.nativeEvent.preventDefault()},Low,https://react.dev/reference/react-dom/components/common#react-event-object
24,Events,Avoid binding in render,Use arrow functions in class or hooks,Arrow functions in functional components,bind in render or constructor,const handleClick = () => {},this.handleClick.bind(this),Medium,
25,Events,Pass event handlers not call results,Pass function reference not invocation,onClick={handleClick},onClick={handleClick()} causing immediate call,onClick={handleClick},onClick={handleClick()},High,
26,Forms,Controlled components for forms,Use state to control form inputs,value + onChange for inputs,Uncontrolled inputs with refs,<input value={val} onChange={setVal}>,<input ref={inputRef}>,Medium,https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
27,Forms,Handle form submission properly,Prevent default and handle in submit handler,onSubmit with preventDefault,onClick on submit button only,<form onSubmit={handleSubmit}>,<button onClick={handleSubmit}>,Medium,
28,Forms,Debounce rapid input changes,Debounce search/filter inputs,useDeferredValue or debounce for search,Filter on every keystroke,useDeferredValue(searchTerm),useEffect filtering on every change,Medium,https://react.dev/reference/react/useDeferredValue
29,Hooks,Follow rules of hooks,Only call hooks at top level and in React functions,Hooks at component top level,Hooks in conditions loops or callbacks,"const [x, setX] = useState()","if (cond) { const [x, setX] = useState() }",High,https://react.dev/reference/rules/rules-of-hooks
30,Hooks,Custom hooks for reusable logic,Extract shared stateful logic to custom hooks,useCustomHook for reusable patterns,Duplicate hook logic across components,const { data } = useFetch(url),Duplicate useEffect/useState in components,Medium,https://react.dev/learn/reusing-logic-with-custom-hooks
31,Hooks,Name custom hooks with use prefix,Custom hooks must start with use,useFetch useForm useAuth,fetchData or getData for hook,function useFetch(url),function fetchData(url),High,
32,Context,Use context for global data,Context for theme auth locale,Context for app-wide state,Context for frequently changing data,<ThemeContext.Provider>,Context for form field values,Medium,https://react.dev/learn/passing-data-deeply-with-context
33,Context,Split contexts by concern,Separate contexts for different domains,ThemeContext + AuthContext,One giant AppContext,<ThemeProvider><AuthProvider>,<AppProvider value={{theme user...}}>,Medium,
34,Context,Memoize context values,Prevent unnecessary re-renders with useMemo,useMemo for context value object,New object reference every render,"value={useMemo(() => ({...}), [])}","value={{ user, theme }}",High,
35,Performance,Use React DevTools Profiler,Profile to identify performance bottlenecks,Profile before optimizing,Optimize without measuring,React DevTools Profiler,Guessing at bottlenecks,Medium,https://react.dev/learn/react-developer-tools
36,Performance,Lazy load components,Use React.lazy for code splitting,lazy() for routes and heavy components,Import everything upfront,const Page = lazy(() => import('./Page')),import Page from './Page',Medium,https://react.dev/reference/react/lazy
37,Performance,Virtualize long lists,Use windowing for lists over 100 items,react-window or react-virtual,Render thousands of DOM nodes,<VirtualizedList items={items}/>,{items.map(i => <Item />)},High,
38,Performance,Batch state updates,React 18 auto-batches but be aware,Let React batch related updates,Manual batching with flushSync,setA(1); setB(2); // batched,flushSync(() => setA(1)),Low,https://react.dev/learn/queueing-a-series-of-state-updates
39,ErrorHandling,Use error boundaries,Catch JavaScript errors in component tree,ErrorBoundary wrapping sections,Let errors crash entire app,<ErrorBoundary><App/></ErrorBoundary>,No error handling,High,https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
40,ErrorHandling,Handle async errors,Catch errors in async operations,try/catch in async handlers,Unhandled promise rejections,try { await fetch() } catch(e) {},await fetch() // no catch,High,
41,Testing,Test behavior not implementation,Test what user sees and does,Test renders and interactions,Test internal state or methods,expect(screen.getByText('Hello')),expect(component.state.name),Medium,https://testing-library.com/docs/react-testing-library/intro/
42,Testing,Use testing-library queries,Use accessible queries,getByRole getByLabelText,getByTestId for everything,getByRole('button'),getByTestId('submit-btn'),Medium,https://testing-library.com/docs/queries/about#priority
43,Accessibility,Use semantic HTML,Proper HTML elements for their purpose,button for clicks nav for navigation,div with onClick for buttons,<button onClick={...}>,<div onClick={...}>,High,https://react.dev/reference/react-dom/components#all-html-components
44,Accessibility,Manage focus properly,Handle focus for modals dialogs,Focus trap in modals return focus on close,No focus management,useEffect to focus input,Modal without focus trap,High,
45,Accessibility,Announce dynamic content,Use ARIA live regions for updates,aria-live for dynamic updates,Silent updates to screen readers,"<div aria-live=""polite"">{msg}</div>",<div>{msg}</div>,Medium,
46,Accessibility,Label form controls,Associate labels with inputs,htmlFor matching input id,Placeholder as only label,"<label htmlFor=""email"">Email</label>","<input placeholder=""Email""/>",High,
47,TypeScript,Type component props,Define interfaces for all props,interface Props with all prop types,any or missing types,interface Props { name: string },function Component(props: any),High,
48,TypeScript,Type state properly,Provide types for useState,useState<Type>() for complex state,Inferred any types,useState<User | null>(null),useState(null),Medium,
49,TypeScript,Type event handlers,Use React event types,React.ChangeEvent<HTMLInputElement>,Generic Event type,onChange: React.ChangeEvent<HTMLInputElement>,onChange: Event,Medium,
50,TypeScript,Use generics for reusable components,Generic components for flexible typing,Generic props for list components,Union types for flexibility,<List<T> items={T[]}>,<List items={any[]}>,Medium,
51,Patterns,Container/Presentational split,Separate data logic from UI,Container fetches presentational renders,Mixed data and UI in one,<UserContainer><UserView/></UserContainer>,<User /> with fetch and render,Low,
52,Patterns,Render props for flexibility,Share code via render prop pattern,Render prop for customizable rendering,Duplicate logic across components,<DataFetcher render={data => ...}/>,Copy paste fetch logic,Low,https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop
53,Patterns,Compound components,Related components sharing state,Tab + TabPanel sharing context,Prop drilling between related,<Tabs><Tab/><TabPanel/></Tabs>,<Tabs tabs={[]} panels={[...]}/>,Low,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/shadcn.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Setup,Use CLI for installation,Install components via shadcn CLI for proper setup,npx shadcn@latest add component-name,Manual copy-paste from docs,npx shadcn@latest add button,Copy component code manually,High,https://ui.shadcn.com/docs/cli
2,Setup,Initialize project properly,Run init command to set up components.json and globals.css,npx shadcn@latest init before adding components,Skip init and add components directly,npx shadcn@latest init,npx shadcn@latest add button (without init),High,https://ui.shadcn.com/docs/installation
3,Setup,Configure path aliases,Set up proper import aliases in tsconfig and components.json,Use @/components/ui path aliases,Relative imports like ../../components,import { Button } from "@/components/ui/button",import { Button } from "../../components/ui/button",Medium,https://ui.shadcn.com/docs/installation
4,Theming,Use CSS variables for colors,Define colors as CSS variables in globals.css for theming,CSS variables in :root and .dark,Hardcoded color values in components,bg-primary text-primary-foreground,bg-blue-500 text-white,High,https://ui.shadcn.com/docs/theming
5,Theming,Follow naming convention,Use semantic color names with foreground pattern,primary/primary-foreground secondary/secondary-foreground,Generic color names,--primary --primary-foreground,--blue --light-blue,Medium,https://ui.shadcn.com/docs/theming
6,Theming,Support dark mode,Include .dark class styles for all custom CSS,Define both :root and .dark color schemes,Only light mode colors,.dark { --background: 240 10% 3.9%; },No .dark class styles,High,https://ui.shadcn.com/docs/dark-mode
7,Components,Use component variants,Leverage cva variants for consistent styling,Use variant prop for different styles,Inline conditional classes,<Button variant="destructive">,<Button className={isError ? "bg-red-500" : "bg-blue-500"}>,Medium,https://ui.shadcn.com/docs/components/button
8,Components,Compose with className,Add custom classes via className prop for overrides,Extend with className for one-off customizations,Modify component source directly,<Button className="w-full">,Edit button.tsx to add w-full,Medium,https://ui.shadcn.com/docs/components/button
9,Components,Use size variants consistently,Apply size prop for consistent sizing across components,size="sm" size="lg" for sizing,Mix size classes inconsistently,<Button size="lg">,<Button className="text-lg px-8 py-4">,Medium,https://ui.shadcn.com/docs/components/button
10,Components,Prefer compound components,Use provided sub-components for complex UI,Card + CardHeader + CardContent pattern,Single component with many props,<Card><CardHeader><CardTitle>,<Card title="x" content="y" footer="z">,Medium,https://ui.shadcn.com/docs/components/card
11,Dialog,Use Dialog for modal content,Dialog component for overlay modal windows,Dialog for confirmations forms details,Alert for modal content,<Dialog><DialogContent>,<Alert> styled as modal,High,https://ui.shadcn.com/docs/components/dialog
12,Dialog,Handle dialog state properly,Use open and onOpenChange for controlled dialogs,Controlled state with useState,Uncontrolled with default open only,"<Dialog open={open} onOpenChange={setOpen}>","<Dialog defaultOpen={true}>",Medium,https://ui.shadcn.com/docs/components/dialog
13,Dialog,Include proper dialog structure,Use DialogHeader DialogTitle DialogDescription,Complete semantic structure,Missing title or description,<DialogHeader><DialogTitle><DialogDescription>,<DialogContent><p>Content</p></DialogContent>,High,https://ui.shadcn.com/docs/components/dialog
14,Sheet,Use Sheet for side panels,Sheet component for slide-out panels and drawers,Sheet for navigation filters settings,Dialog for side content,<Sheet side="right">,<Dialog> with slide animation,Medium,https://ui.shadcn.com/docs/components/sheet
15,Sheet,Specify sheet side,Set side prop for sheet slide direction,Explicit side="left" or side="right",Default side without consideration,<Sheet><SheetContent side="left">,<Sheet><SheetContent>,Low,https://ui.shadcn.com/docs/components/sheet
16,Form,Use Form with react-hook-form,Integrate Form component with react-hook-form for validation,useForm + Form + FormField pattern,Custom form handling without Form,<Form {...form}><FormField control={form.control}>,<form onSubmit={handleSubmit}>,High,https://ui.shadcn.com/docs/components/form
17,Form,Use FormField for inputs,Wrap inputs in FormField for proper labeling and errors,FormField + FormItem + FormLabel + FormControl,Input without FormField wrapper,<FormField><FormItem><FormLabel><FormControl><Input>,<Input onChange={...}>,High,https://ui.shadcn.com/docs/components/form
18,Form,Display form messages,Use FormMessage for validation error display,FormMessage after FormControl,Custom error text without FormMessage,<FormControl><Input/></FormControl><FormMessage/>,<Input/>{error && <span>{error}</span>},Medium,https://ui.shadcn.com/docs/components/form
19,Form,Use Zod for validation,Define form schema with Zod for type-safe validation,zodResolver with form schema,Manual validation logic,zodResolver(formSchema),validate: (values) => { if (!values.email) },Medium,https://ui.shadcn.com/docs/components/form
20,Select,Use Select for dropdowns,Select component for option selection,Select for choosing from list,Native select element,<Select><SelectTrigger><SelectContent>,<select><option>,Medium,https://ui.shadcn.com/docs/components/select
21,Select,Structure Select properly,Include Trigger Value Content and Items,Complete Select structure,Missing SelectValue or SelectContent,<SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem>,<Select><option>,High,https://ui.shadcn.com/docs/components/select
22,Command,Use Command for search,Command component for searchable lists and palettes,Command for command palette search,Input with custom dropdown,<Command><CommandInput><CommandList>,<Input><div className="dropdown">,Medium,https://ui.shadcn.com/docs/components/command
23,Command,Group command items,Use CommandGroup for categorized items,CommandGroup with heading for sections,Flat list without grouping,<CommandGroup heading="Suggestions"><CommandItem>,<CommandItem> without groups,Low,https://ui.shadcn.com/docs/components/command
24,Table,Use Table for data display,Table component for structured data,Table for tabular data display,Div grid for table-like layouts,<Table><TableHeader><TableBody><TableRow>,<div className="grid">,Medium,https://ui.shadcn.com/docs/components/table
25,Table,Include proper table structure,Use TableHeader TableBody TableRow TableCell,Semantic table structure,Missing thead or tbody,<TableHeader><TableRow><TableHead>,<Table><TableRow> without header,High,https://ui.shadcn.com/docs/components/table
26,DataTable,Use DataTable for complex tables,Combine Table with TanStack Table for features,DataTable pattern for sorting filtering pagination,Custom table implementation,useReactTable + Table components,Custom sort filter pagination logic,Medium,https://ui.shadcn.com/docs/components/data-table
27,Tabs,Use Tabs for content switching,Tabs component for tabbed interfaces,Tabs for related content sections,Custom tab implementation,<Tabs><TabsList><TabsTrigger><TabsContent>,<div onClick={() => setTab(...)},Medium,https://ui.shadcn.com/docs/components/tabs
28,Tabs,Set default tab value,Specify defaultValue for initial tab,defaultValue on Tabs component,No default leaving first tab,<Tabs defaultValue="account">,<Tabs> without defaultValue,Low,https://ui.shadcn.com/docs/components/tabs
29,Accordion,Use Accordion for collapsible,Accordion for expandable content sections,Accordion for FAQ settings panels,Custom collapse implementation,<Accordion><AccordionItem><AccordionTrigger>,<div onClick={() => setOpen(!open)}>,Medium,https://ui.shadcn.com/docs/components/accordion
30,Accordion,Choose accordion type,Use type="single" or type="multiple" appropriately,type="single" for one open type="multiple" for many,Default type without consideration,<Accordion type="single" collapsible>,<Accordion> without type,Low,https://ui.shadcn.com/docs/components/accordion
31,Toast,Use Sonner for toasts,Sonner integration for toast notifications,toast() from sonner for notifications,Custom toast implementation,toast("Event created"),setShowToast(true),Medium,https://ui.shadcn.com/docs/components/sonner
32,Toast,Add Toaster to layout,Include Toaster component in root layout,<Toaster /> in app layout,Toaster in individual pages,app/layout.tsx: <Toaster />,page.tsx: <Toaster />,High,https://ui.shadcn.com/docs/components/sonner
33,Toast,Use toast variants,Apply toast.success toast.error for context,Semantic toast methods,Generic toast for all messages,toast.success("Saved!") toast.error("Failed"),toast("Saved!") toast("Failed"),Medium,https://ui.shadcn.com/docs/components/sonner
34,Popover,Use Popover for floating content,Popover for dropdown menus and floating panels,Popover for contextual actions,Absolute positioned divs,<Popover><PopoverTrigger><PopoverContent>,<div className="relative"><div className="absolute">,Medium,https://ui.shadcn.com/docs/components/popover
35,Popover,Handle popover alignment,Use align and side props for positioning,Explicit alignment configuration,Default alignment for all,<PopoverContent align="start" side="bottom">,<PopoverContent>,Low,https://ui.shadcn.com/docs/components/popover
36,DropdownMenu,Use DropdownMenu for actions,DropdownMenu for action lists and context menus,DropdownMenu for user menu actions,Popover for action lists,<DropdownMenu><DropdownMenuTrigger><DropdownMenuContent>,<Popover> for menu actions,Medium,https://ui.shadcn.com/docs/components/dropdown-menu
37,DropdownMenu,Group menu items,Use DropdownMenuGroup and DropdownMenuSeparator,Organized menu with separators,Flat list of items,<DropdownMenuGroup><DropdownMenuItem><DropdownMenuSeparator>,<DropdownMenuItem> without organization,Low,https://ui.shadcn.com/docs/components/dropdown-menu
38,Tooltip,Use Tooltip for hints,Tooltip for icon buttons and truncated text,Tooltip for additional context,Title attribute for tooltips,<Tooltip><TooltipTrigger><TooltipContent>,<button title="Delete">,Medium,https://ui.shadcn.com/docs/components/tooltip
39,Tooltip,Add TooltipProvider,Wrap app or section in TooltipProvider,TooltipProvider at app level,TooltipProvider per tooltip,<TooltipProvider><App/></TooltipProvider>,<Tooltip><TooltipProvider>,High,https://ui.shadcn.com/docs/components/tooltip
40,Skeleton,Use Skeleton for loading,Skeleton component for loading placeholders,Skeleton matching content layout,Spinner for content loading,<Skeleton className="h-4 w-[200px]"/>,<Spinner/> for card loading,Medium,https://ui.shadcn.com/docs/components/skeleton
41,Skeleton,Match skeleton dimensions,Size skeleton to match loaded content,Skeleton same size as expected content,Generic skeleton size,<Skeleton className="h-12 w-12 rounded-full"/>,<Skeleton/> without sizing,Medium,https://ui.shadcn.com/docs/components/skeleton
42,AlertDialog,Use AlertDialog for confirms,AlertDialog for destructive action confirmation,AlertDialog for delete confirmations,Dialog for confirmations,<AlertDialog><AlertDialogTrigger><AlertDialogContent>,<Dialog> for delete confirmation,High,https://ui.shadcn.com/docs/components/alert-dialog
43,AlertDialog,Include action buttons,Use AlertDialogAction and AlertDialogCancel,Standard confirm/cancel pattern,Custom buttons in AlertDialog,<AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>,<Button>Cancel</Button><Button>Confirm</Button>,Medium,https://ui.shadcn.com/docs/components/alert-dialog
44,Sidebar,Use Sidebar for navigation,Sidebar component for app navigation,Sidebar for main app navigation,Custom sidebar implementation,<SidebarProvider><Sidebar><SidebarContent>,<div className="w-64 fixed">,Medium,https://ui.shadcn.com/docs/components/sidebar
45,Sidebar,Wrap in SidebarProvider,Use SidebarProvider for sidebar state management,SidebarProvider at layout level,Sidebar without provider,<SidebarProvider><Sidebar></SidebarProvider>,<Sidebar> without provider,High,https://ui.shadcn.com/docs/components/sidebar
46,Sidebar,Use SidebarTrigger,Include SidebarTrigger for mobile toggle,SidebarTrigger for responsive toggle,Custom toggle button,<SidebarTrigger/>,<Button onClick={() => toggleSidebar()}>,Medium,https://ui.shadcn.com/docs/components/sidebar
47,Chart,Use Chart for data viz,Chart component with Recharts integration,Chart component for dashboards,Direct Recharts without wrapper,<ChartContainer config={chartConfig}>,<ResponsiveContainer><BarChart>,Medium,https://ui.shadcn.com/docs/components/chart
48,Chart,Define chart config,Create chartConfig for consistent theming,chartConfig with color definitions,Inline colors in charts,"{ desktop: { label: ""Desktop"", color: ""#2563eb"" } }",<Bar fill="#2563eb"/>,Medium,https://ui.shadcn.com/docs/components/chart
49,Chart,Use ChartTooltip,Apply ChartTooltip for interactive charts,ChartTooltip with ChartTooltipContent,Recharts Tooltip directly,<ChartTooltip content={<ChartTooltipContent/>}/>,<Tooltip/> from recharts,Low,https://ui.shadcn.com/docs/components/chart
50,Blocks,Use blocks for scaffolding,Start from shadcn blocks for common layouts,npx shadcn@latest add dashboard-01,Build dashboard from scratch,npx shadcn@latest add login-01,Custom login page from scratch,Medium,https://ui.shadcn.com/blocks
51,Blocks,Customize block components,Modify copied block code to fit needs,Edit block files after installation,Use blocks without modification,Customize dashboard-01 layout,Use dashboard-01 as-is,Low,https://ui.shadcn.com/blocks
52,A11y,Use semantic components,Shadcn components have built-in ARIA,Rely on component accessibility,Override ARIA attributes,<Button> has button role,<div role="button">,High,https://ui.shadcn.com/docs/components/button
53,A11y,Maintain focus management,Dialog Sheet handle focus automatically,Let components manage focus,Custom focus handling,<Dialog> traps focus,document.querySelector().focus(),High,https://ui.shadcn.com/docs/components/dialog
54,A11y,Provide labels,Use FormLabel and aria-label appropriately,FormLabel for form inputs,Placeholder as only label,<FormLabel>Email</FormLabel><Input/>,<Input placeholder="Email"/>,High,https://ui.shadcn.com/docs/components/form
55,Performance,Import components individually,Import only needed components,Named imports from component files,Import all from index,import { Button } from "@/components/ui/button",import { Button Card Dialog } from "@/components/ui",Medium,
56,Performance,Lazy load dialogs,Dynamic import for heavy dialog content,React.lazy for dialog content,Import all dialogs upfront,const HeavyContent = lazy(() => import('./Heavy')),import HeavyContent from './Heavy',Medium,
57,Customization,Extend variants with cva,Add new variants using class-variance-authority,Extend buttonVariants for new styles,Inline classes for variants,"variants: { size: { xl: ""h-14 px-8"" } }",className="h-14 px-8",Medium,https://ui.shadcn.com/docs/components/button
58,Customization,Create custom components,Build new components following shadcn patterns,Use cn() and cva for custom components,Different patterns for custom,const Custom = ({ className }) => <div className={cn("base" className)}>,const Custom = ({ style }) => <div style={style}>,Medium,
59,Patterns,Use asChild for composition,asChild prop for component composition,Slot pattern with asChild,Wrapper divs for composition,<Button asChild><Link href="/">,<Button><Link href="/"></Link></Button>,Medium,https://ui.shadcn.com/docs/components/button
60,Patterns,Combine with React Hook Form,Form + useForm for complete forms,RHF Controller with shadcn inputs,Custom form state management,<FormField control={form.control} name="email">,<Input value={email} onChange={(e) => setEmail(e.target.value)},High,https://ui.shadcn.com/docs/components/form

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/svelte.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Reactivity,Use $: for reactive statements,Automatic dependency tracking,$: for derived values,Manual recalculation,$: doubled = count * 2,let doubled; count && (doubled = count * 2),Medium,https://svelte.dev/docs/svelte-components#script-3-$-marks-a-statement-as-reactive
2,Reactivity,Trigger reactivity with assignment,Svelte tracks assignments not mutations,Reassign arrays/objects to trigger update,Mutate without reassignment,"items = [...items, newItem]",items.push(newItem),High,https://svelte.dev/docs/svelte-components#script-2-assignments-are-reactive
3,Reactivity,Use $state in Svelte 5,Runes for explicit reactivity,let count = $state(0),Implicit reactivity in Svelte 5,let count = $state(0),let count = 0 (Svelte 5),Medium,https://svelte.dev/blog/runes
4,Reactivity,Use $derived for computed values,$derived replaces $: in Svelte 5,let doubled = $derived(count * 2),$: in Svelte 5,let doubled = $derived(count * 2),$: doubled = count * 2 (Svelte 5),Medium,
5,Reactivity,Use $effect for side effects,$effect replaces $: side effects,Use $effect for subscriptions,$: for side effects in Svelte 5,$effect(() => console.log(count)),$: console.log(count) (Svelte 5),Medium,
6,Props,Export let for props,Declare props with export let,export let propName,Props without export,export let count = 0,let count = 0,High,https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop
7,Props,Use $props in Svelte 5,$props rune for prop access,let { name } = $props(),export let in Svelte 5,"let { name, age = 0 } = $props()",export let name; export let age = 0,Medium,
8,Props,Provide default values,Default props with assignment,export let count = 0,Required props without defaults,export let count = 0,export let count,Low,
9,Props,Use spread props,Pass through unknown props,{...$$restProps} on elements,Manual prop forwarding,<button {...$$restProps}>,<button class={$$props.class}>,Low,https://svelte.dev/docs/basic-markup#attributes-and-props
10,Bindings,Use bind: for two-way binding,Simplified input handling,bind:value for inputs,on:input with manual update,<input bind:value={name}>,<input value={name} on:input={e => name = e.target.value}>,Low,https://svelte.dev/docs/element-directives#bind-property
11,Bindings,Bind to DOM elements,Reference DOM nodes,bind:this for element reference,querySelector in onMount,<div bind:this={el}>,onMount(() => el = document.querySelector()),Medium,
12,Bindings,Use bind:group for radios/checkboxes,Simplified group handling,bind:group for radio/checkbox groups,Manual checked handling,"<input type=""radio"" bind:group={selected}>","<input type=""radio"" checked={selected === value}>",Low,
13,Events,Use on: for event handlers,Event directive syntax,on:click={handler},addEventListener in onMount,<button on:click={handleClick}>,onMount(() => btn.addEventListener()),Medium,https://svelte.dev/docs/element-directives#on-eventname
14,Events,Forward events with on:event,Pass events to parent,on:click without handler,createEventDispatcher for DOM events,<button on:click>,"dispatch('click', event)",Low,
15,Events,Use createEventDispatcher,Custom component events,dispatch for custom events,on:event for custom events,"dispatch('save', { data })",on:save without dispatch,Medium,https://svelte.dev/docs/svelte#createeventdispatcher
16,Lifecycle,Use onMount for initialization,Run code after component mounts,onMount for setup and data fetching,Code in script body for side effects,onMount(() => fetchData()),fetchData() in script body,High,https://svelte.dev/docs/svelte#onmount
17,Lifecycle,Return cleanup from onMount,Automatic cleanup on destroy,Return function from onMount,Separate onDestroy for paired cleanup,onMount(() => { sub(); return unsub }),onMount(sub); onDestroy(unsub),Medium,
18,Lifecycle,Use onDestroy sparingly,Only when onMount cleanup not possible,onDestroy for non-mount cleanup,onDestroy for mount-related cleanup,onDestroy for store unsubscribe,onDestroy(() => clearInterval(id)),Low,
19,Lifecycle,Avoid beforeUpdate/afterUpdate,Usually not needed,Reactive statements instead,beforeUpdate for derived state,$: if (x) doSomething(),beforeUpdate(() => doSomething()),Low,
20,Stores,Use writable for mutable state,Basic reactive store,writable for shared mutable state,Local variables for shared state,const count = writable(0),let count = 0 in module,Medium,https://svelte.dev/docs/svelte-store#writable
21,Stores,Use readable for read-only state,External data sources,readable for derived/external data,writable for read-only data,"readable(0, set => interval(set))",writable(0) for timer,Low,https://svelte.dev/docs/svelte-store#readable
22,Stores,Use derived for computed stores,Combine or transform stores,derived for computed values,Manual subscription for derived,"derived(count, $c => $c * 2)",count.subscribe(c => doubled = c * 2),Medium,https://svelte.dev/docs/svelte-store#derived
23,Stores,Use $ prefix for auto-subscription,Automatic subscribe/unsubscribe,$storeName in components,Manual subscription,{$count},count.subscribe(c => value = c),High,
24,Stores,Clean up custom subscriptions,Unsubscribe when component destroys,Return unsubscribe from onMount,Leave subscriptions open,onMount(() => store.subscribe(fn)),store.subscribe(fn) in script,High,
25,Slots,Use slots for composition,Content projection,<slot> for flexible content,Props for all content,<slot>Default</slot>,"<Component content=""text""/>",Medium,https://svelte.dev/docs/special-elements#slot
26,Slots,Name slots for multiple areas,Multiple content areas,"<slot name=""header"">",Single slot for complex layouts,"<slot name=""header""><slot name=""footer"">",<slot> with complex conditionals,Low,
27,Slots,Check slot content with $$slots,Conditional slot rendering,$$slots.name for conditional rendering,Always render slot wrapper,"{#if $$slots.footer}<slot name=""footer""/>{/if}","<div><slot name=""footer""/></div>",Low,
28,Styling,Use scoped styles by default,Styles scoped to component,<style> for component styles,Global styles for component,:global() only when needed,<style> all global,Medium,https://svelte.dev/docs/svelte-components#style
29,Styling,Use :global() sparingly,Escape scoping when needed,:global for third-party styling,Global for all styles,:global(.external-lib),<style> without scoping,Medium,
30,Styling,Use CSS variables for theming,Dynamic styling,CSS custom properties,Inline styles for themes,"style=""--color: {color}""","style=""color: {color}""",Low,
31,Transitions,Use built-in transitions,Svelte transition directives,transition:fade for simple effects,Manual CSS transitions,<div transition:fade>,<div class:fade={visible}>,Low,https://svelte.dev/docs/element-directives#transition-fn
32,Transitions,Use in: and out: separately,Different enter/exit animations,in:fly out:fade for asymmetric,Same transition for both,<div in:fly out:fade>,<div transition:fly>,Low,
33,Transitions,Add local modifier,Prevent ancestor trigger,transition:fade|local,Global transitions for lists,<div transition:slide|local>,<div transition:slide>,Medium,
34,Actions,Use actions for DOM behavior,Reusable DOM logic,use:action for DOM enhancements,onMount for each usage,<div use:clickOutside>,onMount(() => setupClickOutside(el)),Medium,https://svelte.dev/docs/element-directives#use-action
35,Actions,Return update and destroy,Lifecycle methods for actions,"Return { update, destroy }",Only initial setup,"return { update(params) {}, destroy() {} }",return destroy only,Medium,
36,Actions,Pass parameters to actions,Configure action behavior,use:action={params},Hardcoded action behavior,<div use:tooltip={options}>,<div use:tooltip>,Low,
37,Logic,Use {#if} for conditionals,Template conditionals,{#if} {:else if} {:else},Ternary in expressions,{#if cond}...{:else}...{/if},{cond ? a : b} for complex,Low,https://svelte.dev/docs/logic-blocks#if
38,Logic,Use {#each} for lists,List rendering,{#each} with key,Map in expression,{#each items as item (item.id)},{items.map(i => `<div>${i}</div>`)},Medium,
39,Logic,Always use keys in {#each},Proper list reconciliation,(item.id) for unique key,Index as key or no key,{#each items as item (item.id)},"{#each items as item, i (i)}",High,
40,Logic,Use {#await} for promises,Handle async states,{#await} for loading/error states,Manual promise handling,{#await promise}...{:then}...{:catch},{#if loading}...{#if error},Medium,https://svelte.dev/docs/logic-blocks#await
41,SvelteKit,Use +page.svelte for routes,File-based routing,+page.svelte for route components,Custom routing setup,routes/about/+page.svelte,routes/About.svelte,Medium,https://kit.svelte.dev/docs/routing
42,SvelteKit,Use +page.js for data loading,Load data before render,load function in +page.js,onMount for data fetching,export function load() {},onMount(() => fetchData()),High,https://kit.svelte.dev/docs/load
43,SvelteKit,Use +page.server.js for server-only,Server-side data loading,+page.server.js for sensitive data,+page.js for API keys,+page.server.js with DB access,+page.js with DB access,High,
44,SvelteKit,Use form actions,Server-side form handling,+page.server.js actions,API routes for forms,export const actions = { default },fetch('/api/submit'),Medium,https://kit.svelte.dev/docs/form-actions
45,SvelteKit,Use $app/stores for app state,$page $navigating $updated,$page for current page data,Manual URL parsing,import { page } from '$app/stores',window.location.pathname,Medium,https://kit.svelte.dev/docs/modules#$app-stores
46,Performance,Use {#key} for forced re-render,Reset component state,{#key id} for fresh instance,Manual destroy/create,{#key item.id}<Component/>{/key},on:change={() => component = null},Low,https://svelte.dev/docs/logic-blocks#key
47,Performance,Avoid unnecessary reactivity,Not everything needs $:,$: only for side effects,$: for simple assignments,$: if (x) console.log(x),$: y = x (when y = x works),Low,
48,Performance,Use immutable compiler option,Skip equality checks,immutable: true for large lists,Default for all components,<svelte:options immutable/>,Default without immutable,Low,
49,TypeScript,"Use lang=""ts"" in script",TypeScript support,"<script lang=""ts"">",JavaScript for typed projects,"<script lang=""ts"">",<script> with JSDoc,Medium,https://svelte.dev/docs/typescript
50,TypeScript,Type props with interface,Explicit prop types,interface $$Props for types,Untyped props,interface $$Props { name: string },export let name,Medium,
51,TypeScript,Type events with createEventDispatcher,Type-safe events,createEventDispatcher<Events>(),Untyped dispatch,createEventDispatcher<{ save: Data }>(),createEventDispatcher(),Medium,
52,Accessibility,Use semantic elements,Proper HTML in templates,button nav main appropriately,div for everything,<button on:click>,<div on:click>,High,
53,Accessibility,Add aria to dynamic content,Accessible state changes,aria-live for updates,Silent dynamic updates,"<div aria-live=""polite"">{message}</div>",<div>{message}</div>,Medium,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/swiftui.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Views,Use struct for views,SwiftUI views are value types,struct MyView: View,class MyView: View,struct ContentView: View { var body: some View },class ContentView: View,High,https://developer.apple.com/documentation/swiftui/view
2,Views,Keep views small and focused,Single responsibility for each view,Extract subviews for complex layouts,Large monolithic views,Extract HeaderView FooterView,500+ line View struct,Medium,
3,Views,Use body computed property,body returns the view hierarchy,var body: some View { },func body() -> some View,"var body: some View { Text(""Hello"") }",func body() -> Text,High,
4,Views,Prefer composition over inheritance,Compose views using ViewBuilder,Combine smaller views,Inheritance hierarchies,VStack { Header() Content() },class SpecialView extends BaseView,Medium,
5,State,Use @State for local state,Simple value types owned by view,@State for view-local primitives,@State for shared data,@State private var count = 0,@State var sharedData: Model,High,https://developer.apple.com/documentation/swiftui/state
6,State,Use @Binding for two-way data,Pass mutable state to child views,@Binding for child input,@State in child for parent data,@Binding var isOn: Bool,$isOn to pass binding,Medium,https://developer.apple.com/documentation/swiftui/binding
7,State,Use @StateObject for reference types,ObservableObject owned by view,@StateObject for view-created objects,@ObservedObject for owned objects,@StateObject private var vm = ViewModel(),@ObservedObject var vm = ViewModel(),High,https://developer.apple.com/documentation/swiftui/stateobject
8,State,Use @ObservedObject for injected objects,Reference types passed from parent,@ObservedObject for injected dependencies,@StateObject for injected objects,@ObservedObject var vm: ViewModel,@StateObject var vm: ViewModel (injected),High,https://developer.apple.com/documentation/swiftui/observedobject
9,State,Use @EnvironmentObject for shared state,App-wide state injection,@EnvironmentObject for global state,Prop drilling through views,@EnvironmentObject var settings: Settings,Pass settings through 5 views,Medium,https://developer.apple.com/documentation/swiftui/environmentobject
10,State,Use @Published in ObservableObject,Automatically publish property changes,@Published for observed properties,Manual objectWillChange calls,@Published var items: [Item] = [],var items: [Item] { didSet { objectWillChange.send() } },Medium,
11,Observable,Use @Observable macro (iOS 17+),Modern observation without Combine,@Observable class for view models,ObservableObject for new projects,@Observable class ViewModel { },class ViewModel: ObservableObject,Medium,https://developer.apple.com/documentation/observation
12,Observable,Use @Bindable for @Observable,Create bindings from @Observable,@Bindable var vm for bindings,@Binding with @Observable,@Bindable var viewModel,$viewModel.name with @Observable,Medium,
13,Layout,Use VStack HStack ZStack,Standard stack-based layouts,Stacks for linear arrangements,GeometryReader for simple layouts,VStack { Text() Image() },GeometryReader for vertical list,Medium,https://developer.apple.com/documentation/swiftui/vstack
14,Layout,Use LazyVStack LazyHStack for lists,Lazy loading for performance,Lazy stacks for long lists,Regular stacks for 100+ items,LazyVStack { ForEach(items) },VStack { ForEach(largeArray) },High,https://developer.apple.com/documentation/swiftui/lazyvstack
15,Layout,Use GeometryReader sparingly,Only when needed for sizing,GeometryReader for responsive layouts,GeometryReader everywhere,GeometryReader for aspect ratio,GeometryReader wrapping everything,Medium,
16,Layout,Use spacing and padding consistently,Consistent spacing throughout app,Design system spacing values,Magic numbers for spacing,.padding(16) or .padding(),".padding(13), .padding(17)",Low,
17,Layout,Use frame modifiers correctly,Set explicit sizes when needed,.frame(maxWidth: .infinity),Fixed sizes for responsive content,.frame(maxWidth: .infinity),.frame(width: 375),Medium,
18,Modifiers,Order modifiers correctly,Modifier order affects rendering,Background before padding for full coverage,Wrong modifier order,.padding().background(Color.red),.background(Color.red).padding(),High,
19,Modifiers,Create custom ViewModifiers,Reusable modifier combinations,ViewModifier for repeated styling,Duplicate modifier chains,struct CardStyle: ViewModifier,.shadow().cornerRadius() everywhere,Medium,https://developer.apple.com/documentation/swiftui/viewmodifier
20,Modifiers,Use conditional modifiers carefully,Avoid changing view identity,if-else with same view type,Conditional that changes view identity,Text(title).foregroundColor(isActive ? .blue : .gray),if isActive { Text().bold() } else { Text() },Medium,
21,Navigation,Use NavigationStack (iOS 16+),Modern navigation with type-safe paths,NavigationStack with navigationDestination,NavigationView for new projects,NavigationStack { },NavigationView { } (deprecated),Medium,https://developer.apple.com/documentation/swiftui/navigationstack
22,Navigation,Use navigationDestination,Type-safe navigation destinations,.navigationDestination(for:),NavigationLink(destination:),.navigationDestination(for: Item.self),NavigationLink(destination: DetailView()),Medium,
23,Navigation,Use @Environment for dismiss,Programmatic navigation dismissal,@Environment(\.dismiss) var dismiss,presentationMode (deprecated),@Environment(\.dismiss) var dismiss,@Environment(\.presentationMode),Low,
24,Lists,Use List for scrollable content,Built-in scrolling and styling,List for standard scrollable content,ScrollView + VStack for simple lists,List { ForEach(items) { } },ScrollView { VStack { ForEach } },Low,https://developer.apple.com/documentation/swiftui/list
25,Lists,Provide stable identifiers,Use Identifiable or explicit id,Identifiable protocol or id parameter,Index as identifier,ForEach(items) where Item: Identifiable,"ForEach(items.indices, id: \.self)",High,
26,Lists,Use onDelete and onMove,Standard list editing,onDelete for swipe to delete,Custom delete implementation,.onDelete(perform: delete),.onTapGesture for delete,Low,
27,Forms,Use Form for settings,Grouped input controls,Form for settings screens,Manual grouping for forms,Form { Section { Toggle() } },VStack { Toggle() },Low,https://developer.apple.com/documentation/swiftui/form
28,Forms,Use @FocusState for keyboard,Manage keyboard focus,@FocusState for text field focus,Manual first responder handling,@FocusState private var isFocused: Bool,UIKit first responder,Medium,https://developer.apple.com/documentation/swiftui/focusstate
29,Forms,Validate input properly,Show validation feedback,Real-time validation feedback,Submit without validation,TextField with validation state,TextField without error handling,Medium,
30,Async,Use .task for async work,Automatic cancellation on view disappear,.task for view lifecycle async,onAppear with Task,.task { await loadData() },onAppear { Task { await loadData() } },Medium,https://developer.apple.com/documentation/swiftui/view/task(priority:_:)
31,Async,Handle loading states,Show progress during async operations,ProgressView during loading,Empty view during load,if isLoading { ProgressView() },No loading indicator,Medium,
32,Async,Use @MainActor for UI updates,Ensure UI updates on main thread,@MainActor on view models,Manual DispatchQueue.main,@MainActor class ViewModel,DispatchQueue.main.async,Medium,
33,Animation,Use withAnimation,Animate state changes,withAnimation for state transitions,No animation for state changes,withAnimation { isExpanded.toggle() },isExpanded.toggle(),Low,https://developer.apple.com/documentation/swiftui/withanimation(_:_:)
34,Animation,Use .animation modifier,Apply animations to views,.animation(.spring()) on view,Manual animation timing,.animation(.easeInOut),CABasicAnimation equivalent,Low,
35,Animation,Respect reduced motion,Check accessibility settings,Check accessibilityReduceMotion,Ignore motion preferences,@Environment(\.accessibilityReduceMotion),Always animate regardless,High,
36,Preview,Use #Preview macro (Xcode 15+),Modern preview syntax,#Preview for view previews,PreviewProvider protocol,#Preview { ContentView() },struct ContentView_Previews: PreviewProvider,Low,
37,Preview,Create multiple previews,Test different states and devices,Multiple previews for states,Single preview only,"#Preview(""Light"") { } #Preview(""Dark"") { }",Single preview configuration,Low,
38,Preview,Use preview data,Dedicated preview mock data,Static preview data,Production data in previews,Item.preview for preview,Fetch real data in preview,Low,
39,Performance,Avoid expensive body computations,Body should be fast to compute,Precompute in view model,Heavy computation in body,vm.computedValue in body,Complex calculation in body,High,
40,Performance,Use Equatable views,Skip unnecessary view updates,Equatable for complex views,Default equality for all views,struct MyView: View Equatable,No Equatable conformance,Medium,
41,Performance,Profile with Instruments,Measure before optimizing,Use SwiftUI Instruments,Guess at performance issues,Profile with Instruments,Optimize without measuring,Medium,
42,Accessibility,Add accessibility labels,Describe UI elements,.accessibilityLabel for context,Missing labels,".accessibilityLabel(""Close button"")",Button without label,High,https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-1d7jv
43,Accessibility,Support Dynamic Type,Respect text size preferences,Scalable fonts and layouts,Fixed font sizes,.font(.body) with Dynamic Type,.font(.system(size: 16)),High,
44,Accessibility,Use semantic views,Proper accessibility traits,Correct accessibilityTraits,Wrong semantic meaning,Button for actions Image for display,Image that acts like button,Medium,
45,Testing,Use ViewInspector for testing,Third-party view testing,ViewInspector for unit tests,UI tests only,ViewInspector assertions,Only XCUITest,Medium,
46,Testing,Test view models,Unit test business logic,XCTest for view model,Skip view model testing,Test ViewModel methods,No unit tests,Medium,
47,Testing,Use preview as visual test,Previews catch visual regressions,Multiple preview configurations,No visual verification,Preview different states,Single preview only,Low,
48,Architecture,Use MVVM pattern,Separate view and logic,ViewModel for business logic,Logic in View,ObservableObject ViewModel,@State for complex logic,Medium,
49,Architecture,Keep views dumb,Views display view model state,View reads from ViewModel,Business logic in View,view.items from vm.items,Complex filtering in View,Medium,
50,Architecture,Use dependency injection,Inject dependencies for testing,Initialize with dependencies,Hard-coded dependencies,init(service: ServiceProtocol),let service = RealService(),Medium,

```

---

### `.agent/skills/ui-ux-pro-max/data/stacks/vue.csv`
**Function:** Source code file.

```csv
No,Category,Guideline,Description,Do,Don't,Code Good,Code Bad,Severity,Docs URL
1,Composition,Use Composition API for new projects,Composition API offers better TypeScript support and logic reuse,<script setup> for components,Options API for new projects,<script setup>,export default { data() },Medium,https://vuejs.org/guide/extras/composition-api-faq.html
2,Composition,Use script setup syntax,Cleaner syntax with automatic exports,<script setup> with defineProps,setup() function manually,<script setup>,<script> setup() { return {} },Low,https://vuejs.org/api/sfc-script-setup.html
3,Reactivity,Use ref for primitives,ref() for primitive values that need reactivity,ref() for strings numbers booleans,reactive() for primitives,const count = ref(0),const count = reactive(0),Medium,https://vuejs.org/guide/essentials/reactivity-fundamentals.html
4,Reactivity,Use reactive for objects,reactive() for complex objects and arrays,reactive() for objects with multiple properties,ref() for complex objects,const state = reactive({ user: null }),const state = ref({ user: null }),Medium,
5,Reactivity,Access ref values with .value,Remember .value in script unwrap in template,Use .value in script,Forget .value in script,count.value++,count++ (in script),High,
6,Reactivity,Use computed for derived state,Computed properties cache and update automatically,computed() for derived values,Methods for derived values,const doubled = computed(() => count.value * 2),const doubled = () => count.value * 2,Medium,https://vuejs.org/guide/essentials/computed.html
7,Reactivity,Use shallowRef for large objects,Avoid deep reactivity for performance,shallowRef for large data structures,ref for large nested objects,const bigData = shallowRef(largeObject),const bigData = ref(largeObject),Medium,https://vuejs.org/api/reactivity-advanced.html#shallowref
8,Watchers,Use watchEffect for simple cases,Auto-tracks dependencies,watchEffect for simple reactive effects,watch with explicit deps when not needed,watchEffect(() => console.log(count.value)),"watch(count, (val) => console.log(val))",Low,https://vuejs.org/guide/essentials/watchers.html
9,Watchers,Use watch for specific sources,Explicit control over what to watch,watch with specific refs,watchEffect for complex conditional logic,"watch(userId, fetchUser)",watchEffect with conditionals,Medium,
10,Watchers,Clean up side effects,Return cleanup function in watchers,Return cleanup in watchEffect,Leave subscriptions open,watchEffect((onCleanup) => { onCleanup(unsub) }),watchEffect without cleanup,High,
11,Props,Define props with defineProps,Type-safe prop definitions,defineProps with TypeScript,Props without types,defineProps<{ msg: string }>(),defineProps(['msg']),Medium,https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
12,Props,Use withDefaults for default values,Provide defaults for optional props,withDefaults with defineProps,Defaults in destructuring,"withDefaults(defineProps<Props>(), { count: 0 })",const { count = 0 } = defineProps(),Medium,
13,Props,Avoid mutating props,Props should be read-only,Emit events to parent for changes,Direct prop mutation,"emit('update:modelValue', newVal)",props.modelValue = newVal,High,
14,Emits,Define emits with defineEmits,Type-safe event emissions,defineEmits with types,Emit without definition,defineEmits<{ change: [id: number] }>(),"emit('change', id) without define",Medium,https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits
15,Emits,Use v-model for two-way binding,Simplified parent-child data flow,v-model with modelValue prop,:value + @input manually,"<Child v-model=""value""/>","<Child :value=""value"" @input=""value = $event""/>",Low,https://vuejs.org/guide/components/v-model.html
16,Lifecycle,Use onMounted for DOM access,DOM is ready in onMounted,onMounted for DOM operations,Access DOM in setup directly,onMounted(() => el.value.focus()),el.value.focus() in setup,High,https://vuejs.org/api/composition-api-lifecycle.html
17,Lifecycle,Clean up in onUnmounted,Remove listeners and subscriptions,onUnmounted for cleanup,Leave listeners attached,onUnmounted(() => window.removeEventListener()),No cleanup on unmount,High,
18,Lifecycle,Avoid onBeforeMount for data,Use onMounted or setup for data fetching,Fetch in onMounted or setup,Fetch in onBeforeMount,onMounted(async () => await fetchData()),onBeforeMount(async () => await fetchData()),Low,
19,Components,Use single-file components,Keep template script style together,.vue files for components,Separate template/script files,Component.vue with all parts,Component.js + Component.html,Low,
20,Components,Use PascalCase for components,Consistent component naming,PascalCase in imports and templates,kebab-case in script,<MyComponent/>,<my-component/>,Low,https://vuejs.org/style-guide/rules-strongly-recommended.html
21,Components,Prefer composition over mixins,Composables replace mixins,Composables for shared logic,Mixins for code reuse,const { data } = useApi(),mixins: [apiMixin],Medium,
22,Composables,Name composables with use prefix,Convention for composable functions,useFetch useAuth useForm,getData or fetchApi,export function useFetch(),export function fetchData(),Medium,https://vuejs.org/guide/reusability/composables.html
23,Composables,Return refs from composables,Maintain reactivity when destructuring,Return ref values,Return reactive objects that lose reactivity,return { data: ref(null) },return reactive({ data: null }),Medium,
24,Composables,Accept ref or value params,Use toValue for flexible inputs,toValue() or unref() for params,Only accept ref or only value,const val = toValue(maybeRef),const val = maybeRef.value,Low,https://vuejs.org/api/reactivity-utilities.html#tovalue
25,Templates,Use v-bind shorthand,Cleaner template syntax,:prop instead of v-bind:prop,Full v-bind syntax,"<div :class=""cls"">","<div v-bind:class=""cls"">",Low,
26,Templates,Use v-on shorthand,Cleaner event binding,@event instead of v-on:event,Full v-on syntax,"<button @click=""handler"">","<button v-on:click=""handler"">",Low,
27,Templates,Avoid v-if with v-for,v-if has higher priority causes issues,Wrap in template or computed filter,v-if on same element as v-for,<template v-for><div v-if>,<div v-for v-if>,High,https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for
28,Templates,Use key with v-for,Proper list rendering and updates,Unique key for each item,Index as key for dynamic lists,"v-for=""item in items"" :key=""item.id""","v-for=""(item, i) in items"" :key=""i""",High,
29,State,Use Pinia for global state,Official state management for Vue 3,Pinia stores for shared state,Vuex for new projects,const store = useCounterStore(),Vuex with mutations,Medium,https://pinia.vuejs.org/
30,State,Define stores with defineStore,Composition API style stores,Setup stores with defineStore,Options stores for complex state,"defineStore('counter', () => {})","defineStore('counter', { state })",Low,
31,State,Use storeToRefs for destructuring,Maintain reactivity when destructuring,storeToRefs(store),Direct destructuring,const { count } = storeToRefs(store),const { count } = store,High,https://pinia.vuejs.org/core-concepts/#destructuring-from-a-store
32,Routing,Use useRouter and useRoute,Composition API router access,useRouter() useRoute() in setup,this.$router this.$route,const router = useRouter(),this.$router.push(),Medium,https://router.vuejs.org/guide/advanced/composition-api.html
33,Routing,Lazy load route components,Code splitting for routes,() => import() for components,Static imports for all routes,component: () => import('./Page.vue'),component: Page,Medium,https://router.vuejs.org/guide/advanced/lazy-loading.html
34,Routing,Use navigation guards,Protect routes and handle redirects,beforeEach for auth checks,Check auth in each component,router.beforeEach((to) => {}),Check auth in onMounted,Medium,
35,Performance,Use v-once for static content,Skip re-renders for static elements,v-once on never-changing content,v-once on dynamic content,<div v-once>{{ staticText }}</div>,<div v-once>{{ dynamicText }}</div>,Low,https://vuejs.org/api/built-in-directives.html#v-once
36,Performance,Use v-memo for expensive lists,Memoize list items,v-memo with dependency array,Re-render entire list always,"<div v-for v-memo=""[item.id]"">",<div v-for> without memo,Medium,https://vuejs.org/api/built-in-directives.html#v-memo
37,Performance,Use shallowReactive for flat objects,Avoid deep reactivity overhead,shallowReactive for flat state,reactive for simple objects,shallowReactive({ count: 0 }),reactive({ count: 0 }),Low,
38,Performance,Use defineAsyncComponent,Lazy load heavy components,defineAsyncComponent for modals dialogs,Import all components eagerly,defineAsyncComponent(() => import()),import HeavyComponent from,Medium,https://vuejs.org/guide/components/async.html
39,TypeScript,Use generic components,Type-safe reusable components,Generic with defineComponent,Any types in components,"<script setup lang=""ts"" generic=""T"">",<script setup> without types,Medium,https://vuejs.org/guide/typescript/composition-api.html
40,TypeScript,Type template refs,Proper typing for DOM refs,ref<HTMLInputElement>(null),ref(null) without type,const input = ref<HTMLInputElement>(null),const input = ref(null),Medium,
41,TypeScript,Use PropType for complex props,Type complex prop types,PropType<User> for object props,Object without type,type: Object as PropType<User>,type: Object,Medium,
42,Testing,Use Vue Test Utils,Official testing library,mount shallowMount for components,Manual DOM testing,import { mount } from '@vue/test-utils',document.createElement,Medium,https://test-utils.vuejs.org/
43,Testing,Test component behavior,Focus on inputs and outputs,Test props emit and rendered output,Test internal implementation,expect(wrapper.text()).toContain(),expect(wrapper.vm.internalState),Medium,
44,Forms,Use v-model modifiers,Built-in input handling,.lazy .number .trim modifiers,Manual input parsing,"<input v-model.number=""age"">","<input v-model=""age""> then parse",Low,https://vuejs.org/guide/essentials/forms.html#modifiers
45,Forms,Use VeeValidate or FormKit,Form validation libraries,VeeValidate for complex forms,Manual validation logic,useField useForm from vee-validate,Custom validation in each input,Medium,
46,Accessibility,Use semantic elements,Proper HTML elements in templates,button nav main for purpose,div for everything,<button @click>,<div @click>,High,
47,Accessibility,Bind aria attributes dynamically,Keep ARIA in sync with state,":aria-expanded=""isOpen""",Static ARIA values,":aria-expanded=""menuOpen""","aria-expanded=""true""",Medium,
48,SSR,Use Nuxt for SSR,Full-featured SSR framework,Nuxt 3 for SSR apps,Manual SSR setup,npx nuxi init my-app,Custom SSR configuration,Medium,https://nuxt.com/
49,SSR,Handle hydration mismatches,Client/server content must match,ClientOnly for browser-only content,Different content server/client,<ClientOnly><BrowserWidget/></ClientOnly>,<div>{{ Date.now() }}</div>,High,

```

---

### `.agent/skills/ui-ux-pro-max/data/styles.csv`
**Function:** Source code file.

```csv
No,Style Category,Type,Keywords,Primary Colors,Secondary Colors,Effects & Animation,Best For,Do Not Use For,Light Mode ✓,Dark Mode ✓,Performance,Accessibility,Mobile-Friendly,Conversion-Focused,Framework Compatibility,Era/Origin,Complexity,AI Prompt Keywords,CSS/Technical Keywords,Implementation Checklist,Design System Variables
1,Minimalism & Swiss Style,General,"Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential","Monochromatic, Black #000000, White #FFFFFF","Neutral (Beige #F5F1E8, Grey #808080, Taupe #B38B6D), Primary accent","Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading","Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools","Creative portfolios, entertainment, playful brands, artistic experiments",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,◐ Medium,"Tailwind 10/10, Bootstrap 9/10, MUI 9/10",1950s Swiss,Low,"Design a minimalist landing page. Use: white space, geometric layouts, sans-serif fonts, high contrast, grid-based structure, essential elements only. Avoid shadows and gradients. Focus on clarity and functionality.","display: grid, gap: 2rem, font-family: sans-serif, color: #000 or #FFF, max-width: 1200px, clean borders, no box-shadow unless necessary","☐ Grid-based layout 12-16 columns, ☐ Typography hierarchy clear, ☐ No unnecessary decorations, ☐ WCAG AAA contrast verified, ☐ Mobile responsive grid","--spacing: 2rem, --border-radius: 0px, --font-weight: 400-700, --shadow: none, --accent-color: single primary only"
2,Neumorphism,General,"Soft UI, embossed, debossed, convex, concave, light source, subtle depth, rounded (12-16px), monochromatic","Light pastels: Soft Blue #C8E0F4, Soft Pink #F5E0E8, Soft Grey #E8E8E8","Tints/shades (±30%), gradient subtlety, color harmony","Soft box-shadow (multiple: -5px -5px 15px, 5px 5px 15px), smooth press (150ms), inner subtle shadow","Health/wellness apps, meditation platforms, fitness trackers, minimal interaction UIs","Complex apps, critical accessibility, data-heavy dashboards, high-contrast required",✓ Full,◐ Partial,⚡ Good,⚠ Low contrast,✓ Good,◐ Medium,"Tailwind 8/10, CSS-in-JS 9/10",2020s Modern,Medium,"Create a neumorphic UI with soft 3D effects. Use light pastels, rounded corners (12-16px), subtle soft shadows (multiple layers), no hard lines, monochromatic color scheme with light/dark variations. Embossed/debossed effect on interactive elements.","border-radius: 12-16px, box-shadow: -5px -5px 15px rgba(0,0,0,0.1), 5px 5px 15px rgba(255,255,255,0.8), background: linear-gradient(145deg, color1, color2), transform: scale on press","☐ Rounded corners 12-16px consistent, ☐ Multiple shadow layers (2-3), ☐ Pastel color verified, ☐ Monochromatic palette checked, ☐ Press animation smooth 150ms","--border-radius: 14px, --shadow-soft-1: -5px -5px 15px, --shadow-soft-2: 5px 5px 15px, --color-light: #F5F5F5, --color-primary: single pastel"
3,Glassmorphism,General,"Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer","Translucent white: rgba(255,255,255,0.1-0.3)","Vibrant: Electric Blue #0080FF, Neon Purple #8B00FF, Vivid Pink #FF1493, Teal #20B2AA","Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth","Modern SaaS, financial dashboards, high-end corporate, lifestyle apps, modal overlays, navigation","Low-contrast backgrounds, critical accessibility, performance-limited, dark text on dark",✓ Full,✓ Full,⚠ Good,⚠ Ensure 4.5:1,✓ Good,✓ High,"Tailwind 9/10, MUI 8/10, Chakra 8/10",2020s Modern,Medium,"Design a glassmorphic interface with frosted glass effect. Use backdrop blur (10-20px), translucent overlays (rgba 10-30% opacity), vibrant background colors, subtle borders, light source reflection, layered depth. Perfect for modern overlays and cards.","backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth","☐ Backdrop-filter blur 10-20px, ☐ Translucent white 15-30% opacity, ☐ Subtle border 1px light, ☐ Vibrant background verified, ☐ Text contrast 4.5:1 checked","--blur-amount: 15px, --glass-opacity: 0.15, --border-color: rgba(255,255,255,0.2), --background: vibrant color, --text-color: light/dark based on BG"
4,Brutalism,General,"Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design","Primary: Red #FF0000, Blue #0000FF, Yellow #FFFF00, Black #000000, White #FFFFFF","Limited: Neon Green #00FF00, Hot Pink #FF00FF, minimal secondary","No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks","Design portfolios, artistic projects, counter-culture brands, editorial/media sites, tech blogs","Corporate environments, conservative industries, critical accessibility, customer-facing professional",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,◐ Medium,✗ Low,"Tailwind 10/10, Bootstrap 7/10",1950s Brutalist,Low,"Create a brutalist design with raw, unpolished, stark aesthetic. Use pure primary colors (red, blue, yellow), black & white, no smooth transitions (instant), sharp corners, bold large typography, visible grid lines, default system fonts, intentional 'broken' design elements.","border-radius: 0px, transition: none or 0s, font-family: system-ui or monospace, font-weight: 700+, border: visible 2-4px, colors: #FF0000, #0000FF, #FFFF00, #000000, #FFFFFF","☐ No border-radius (0px), ☐ No transitions (instant), ☐ Bold typography (700+), ☐ Pure primary colors used, ☐ Visible grid/borders, ☐ Asymmetric layout intentional","--border-radius: 0px, --transition-duration: 0s, --font-weight: 700-900, --colors: primary only, --border-style: visible, --grid-visible: true"
5,3D & Hyperrealism,General,"Depth, realistic textures, 3D models, spatial navigation, tactile, skeuomorphic elements, rich detail, immersive","Deep Navy #001F3F, Forest Green #228B22, Burgundy #800020, Gold #FFD700, Silver #C0C0C0","Complex gradients (5-10 stops), realistic lighting, shadow variations (20-40% darker)","WebGL/Three.js 3D, realistic shadows (layers), physics lighting, parallax (3-5 layers), smooth 3D (300-400ms)","Gaming, product showcase, immersive experiences, high-end e-commerce, architectural viz, VR/AR","Low-end mobile, performance-limited, critical accessibility, data tables/forms",◐ Partial,◐ Partial,❌ Poor,⚠ Not accessible,✗ Low,◐ Medium,"Three.js 10/10, R3F 10/10, Babylon.js 10/10",2020s Modern,High,"Build an immersive 3D interface using realistic textures, 3D models (Three.js/Babylon.js), complex shadows, realistic lighting, parallax scrolling (3-5 layers), physics-based motion. Include skeuomorphic elements with tactile detail.","transform: translate3d, perspective: 1000px, WebGL canvas, Three.js/Babylon.js library, box-shadow: complex multi-layer, background: complex gradients, filter: drop-shadow()","☐ WebGL/Three.js integrated, ☐ 3D models loaded, ☐ Parallax 3-5 layers, ☐ Realistic lighting verified, ☐ Complex shadows rendered, ☐ Physics animation smooth 300-400ms","--perspective: 1000px, --parallax-layers: 5, --lighting-intensity: realistic, --shadow-depth: 20-40%, --animation-duration: 300-400ms"
6,Vibrant & Block-based,General,"Bold, energetic, playful, block layout, geometric shapes, high color contrast, duotone, modern, energetic","Neon Green #39FF14, Electric Purple #BF00FF, Vivid Pink #FF1493, Bright Cyan #00FFFF, Sunburst #FFAA00","Complementary: Orange #FF7F00, Shocking Pink #FF006E, Lime #CCFF00, triadic schemes","Large sections (48px+ gaps), animated patterns, bold hover (color shift), scroll-snap, large type (32px+), 200-300ms","Startups, creative agencies, gaming, social media, youth-focused, entertainment, consumer","Financial institutions, healthcare, formal business, government, conservative, elderly",✓ Full,✓ Full,⚡ Good,◐ Ensure WCAG,✓ High,✓ High,"Tailwind 10/10, Chakra 9/10, Styled 9/10",2020s Modern,Medium,"Design an energetic, vibrant interface with bold block layouts, geometric shapes, high color contrast, large typography (32px+), animated background patterns, duotone effects. Perfect for startups and youth-focused apps. Use 4-6 contrasting colors from complementary/triadic schemes.","display: flex/grid with large gaps (48px+), font-size: 32px+, background: animated patterns (CSS), color: neon/vibrant colors, animation: continuous pattern movement","☐ Block layout with 48px+ gaps, ☐ Large typography 32px+, ☐ 4-6 vibrant colors max, ☐ Animated patterns active, ☐ Scroll-snap enabled, ☐ High contrast verified (7:1+)","--block-gap: 48px, --typography-size: 32px+, --color-palette: 4-6 vibrant colors, --animation: continuous pattern, --contrast-ratio: 7:1+"
7,Dark Mode (OLED),General,"Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient","Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27","Vibrant accents: Neon Green #39FF14, Electric Blue #0080FF, Gold #FFD700, Plasma Purple #BF00FF","Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus","Night-mode apps, coding platforms, entertainment, eye-strain prevention, OLED devices, low-light","Print-first content, high-brightness outdoor, color-accuracy-critical",✗ No,✓ Only,⚡ Excellent,✓ WCAG AAA,✓ High,◐ Low,"Tailwind 10/10, MUI 10/10, Chakra 10/10",2020s Modern,Low,"Create an OLED-optimized dark interface with deep black (#000000), dark grey (#121212), midnight blue accents. Use minimal glow effects, vibrant neon accents (green, blue, gold, purple), high contrast text. Optimize for eye comfort and OLED power saving.","background: #000000 or #121212, color: #FFFFFF or #E0E0E0, text-shadow: 0 0 10px neon-color (sparingly), filter: brightness(0.8) if needed, color-scheme: dark","☐ Deep black #000000 or #121212, ☐ Vibrant neon accents used, ☐ Text contrast 7:1+, ☐ Minimal glow effects, ☐ OLED power optimization, ☐ No white (#FFFFFF) background","--bg-black: #000000, --bg-dark-grey: #121212, --text-primary: #FFFFFF, --accent-neon: neon colors, --glow-effect: minimal, --oled-optimized: true"
8,Accessible & Ethical,General,"High contrast, large text (16px+), keyboard navigation, screen reader friendly, WCAG compliant, focus state, semantic","WCAG AA/AAA (4.5:1 min), simple primary, clear secondary, high luminosity (7:1+)","Symbol-based colors (not color-only), supporting patterns, inclusive combinations","Clear focus rings (3-4px), ARIA labels, skip links, responsive design, reduced motion, 44x44px touch targets","Government, healthcare, education, inclusive products, large audience, legal compliance, public",None - accessibility universal,✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,✓ High,All frameworks 10/10,Universal,Low,"Design with WCAG AAA compliance. Include: high contrast (7:1+), large text (16px+), keyboard navigation, screen reader compatibility, focus states visible (3-4px ring), semantic HTML, ARIA labels, skip links, reduced motion support (prefers-reduced-motion), 44x44px touch targets.","color-contrast: 7:1+, font-size: 16px+, outline: 3-4px on :focus-visible, aria-label, role attributes, @media (prefers-reduced-motion), touch-target: 44x44px, cursor: pointer","☐ WCAG AAA verified, ☐ 7:1+ contrast checked, ☐ Keyboard navigation tested, ☐ Screen reader tested, ☐ Focus visible 3-4px, ☐ Semantic HTML used, ☐ Touch targets 44x44px","--contrast-ratio: 7:1, --font-size-min: 16px, --focus-ring: 3-4px, --touch-target: 44x44px, --wcag-level: AAA, --keyboard-accessible: true, --sr-tested: true"
9,Claymorphism,General,"Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)","Pastel: Soft Peach #FDBCB4, Baby Blue #ADD8E6, Mint #98FF98, Lilac #E6E6FA, light BG","Soft gradients (pastel-to-pastel), light/dark variations (20-30%), gradient subtle","Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions","Educational apps, children's apps, SaaS platforms, creative tools, fun-focused, onboarding, casual games","Formal corporate, professional services, data-critical, serious/medical, legal apps, finance",✓ Full,◐ Partial,⚡ Good,⚠ Ensure 4.5:1,✓ High,✓ High,"Tailwind 9/10, CSS-in-JS 9/10",2020s Modern,Medium,"Design a playful, toy-like interface with soft 3D, chunky elements, bubbly aesthetic, rounded edges (16-24px), thick borders (3-4px), double shadows (inner + outer), pastel colors, smooth animations. Perfect for children's apps and creative tools.","border-radius: 16-24px, border: 3-4px solid, box-shadow: inset -2px -2px 8px, 4px 4px 8px, background: pastel-gradient, animation: soft bounce (cubic-bezier 0.34, 1.56)","☐ Border-radius 16-24px, ☐ Thick borders 3-4px, ☐ Double shadows (inner+outer), ☐ Pastel colors used, ☐ Soft bounce animations, ☐ Playful interactions","--border-radius: 20px, --border-width: 3-4px, --shadow-inner: inset -2px -2px 8px, --shadow-outer: 4px 4px 8px, --color-palette: pastels, --animation: bounce"
10,Aurora UI,General,"Vibrant gradients, smooth blend, Northern Lights effect, mesh gradient, luminous, atmospheric, abstract","Complementary: Blue-Orange, Purple-Yellow, Electric Blue #0080FF, Magenta #FF1493, Cyan #00FFFF","Smooth transitions (Blue→Purple→Pink→Teal), iridescent effects, blend modes (screen, multiply)","Large flowing CSS/SVG gradients, subtle 8-12s animations, depth via color layering, smooth morph","Modern SaaS, creative agencies, branding, music platforms, lifestyle, premium products, hero sections","Data-heavy dashboards, critical accessibility, content-heavy where distraction issues",✓ Full,✓ Full,⚠ Good,⚠ Text contrast,✓ Good,✓ High,"Tailwind 9/10, CSS-in-JS 10/10",2020s Modern,Medium,"Create a vibrant gradient interface inspired by Northern Lights with mesh gradients, smooth color blends, flowing animations. Use complementary color pairs (blue-orange, purple-yellow), flowing background gradients, subtle continuous animations (8-12s loops), iridescent effects.","background: conic-gradient or radial-gradient with multiple stops, animation: @keyframes gradient (8-12s), background-size: 200% 200%, filter: saturate(1.2), blend-mode: screen or multiply","☐ Mesh/flowing gradients applied, ☐ 8-12s animation loop, ☐ Complementary colors used, ☐ Smooth color transitions, ☐ Iridescent effect subtle, ☐ Text contrast verified","--gradient-colors: complementary pairs, --animation-duration: 8-12s, --blend-mode: screen, --color-saturation: 1.2, --effect: iridescent, --loop-smooth: true"
11,Retro-Futurism,General,"Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, synthwave","Neon Blue #0080FF, Hot Pink #FF006E, Cyan #00FFFF, Deep Black #1A1A2E, Purple #5D34D0","Metallic Silver #C0C0C0, Gold #FFD700, duotone, 80s Pink #FF10F0, neon accents","CRT scanlines (::before overlay), neon glow (text-shadow+box-shadow), glitch effects (skew/offset keyframes)","Gaming, entertainment, music platforms, tech brands, artistic projects, nostalgic, cyberpunk","Conservative industries, critical accessibility, professional/corporate, elderly, legal/finance",✓ Full,✓ Dark focused,⚠ Moderate,⚠ High contrast/strain,◐ Medium,◐ Medium,"Tailwind 8/10, CSS-in-JS 9/10",1980s Retro,Medium,"Build a retro-futuristic (cyberpunk/vaporwave) interface with neon colors (blue, pink, cyan), deep black background, 80s aesthetic, CRT scanlines, glitch effects, neon glow text/borders, monospace fonts, geometric patterns. Use neon text-shadow and animated glitch effects.","color: neon colors (#0080FF, #FF006E, #00FFFF), text-shadow: 0 0 10px neon, background: #000 or #1A1A2E, font-family: monospace, animation: glitch (skew+offset), filter: hue-rotate","☐ Neon colors used, ☐ CRT scanlines effect, ☐ Glitch animations active, ☐ Monospace font, ☐ Deep black background, ☐ Glow effects applied, ☐ 80s patterns present","--neon-colors: #0080FF #FF006E #00FFFF, --background: #000000, --font-family: monospace, --effect: glitch+glow, --scanline-opacity: 0.3, --crt-effect: true"
12,Flat Design,General,"2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy","Solid bright: Red, Orange, Blue, Green, limited palette (4-6 max)","Complementary colors, muted secondaries, high saturation, clean accents","No gradients/shadows, simple hover (color/opacity shift), fast loading, clean transitions (150-200ms ease), minimal icons","Web apps, mobile apps, cross-platform, startup MVPs, user-friendly, SaaS, dashboards, corporate","Complex 3D, premium/luxury, artistic portfolios, immersive experiences, high-detail",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,✓ High,"Tailwind 10/10, Bootstrap 10/10, MUI 9/10",2010s Modern,Low,"Create a flat, 2D interface with bold colors, no shadows/gradients, clean lines, simple geometric shapes, icon-heavy, typography-focused, minimal ornamentation. Use 4-6 solid, bright colors in a limited palette with high saturation.","box-shadow: none, background: solid color, border-radius: 0-4px, color: solid (no gradients), fill: solid, stroke: 1-2px, font: bold sans-serif, icons: simplified SVG","☐ No shadows/gradients, ☐ 4-6 solid colors max, ☐ Clean lines consistent, ☐ Simple shapes used, ☐ Icon-heavy layout, ☐ High saturation colors, ☐ Fast loading verified","--shadow: none, --color-palette: 4-6 solid, --border-radius: 2px, --gradient: none, --icons: simplified SVG, --animation: minimal 150-200ms"
13,Skeuomorphism,General,"Realistic, texture, depth, 3D appearance, real-world metaphors, shadows, gradients, tactile, detailed, material","Rich realistic: wood, leather, metal colors, detailed gradients (8-12 stops), metallic effects","Realistic lighting gradients, shadow variations (30-50% darker), texture overlays, material colors","Realistic shadows (layers), depth (perspective), texture details (noise, grain), realistic animations (300-500ms)","Legacy apps, gaming, immersive storytelling, premium products, luxury, realistic simulations, education","Modern enterprise, critical accessibility, low-performance, web (use Flat/Modern)",◐ Partial,◐ Partial,❌ Poor,⚠ Textures reduce readability,✗ Low,◐ Medium,"CSS-in-JS 7/10, Custom 8/10",2007-2012 iOS,High,"Design a realistic, textured interface with 3D depth, real-world metaphors (leather, wood, metal), complex gradients (8-12 stops), realistic shadows, grain/texture overlays, tactile press animations. Perfect for premium/luxury products.","background: complex gradient (8-12 stops), box-shadow: realistic multi-layer, background-image: texture overlay (noise, grain), filter: drop-shadow, transform: scale on press (300-500ms)","☐ Realistic textures applied, ☐ Complex gradients 8-12 stops, ☐ Multi-layer shadows, ☐ Texture overlays present, ☐ Tactile animations smooth, ☐ Depth effect pronounced","--gradient-stops: 8-12, --texture-overlay: noise+grain, --shadow-layers: 3+, --animation-duration: 300-500ms, --depth-effect: pronounced, --tactile: true"
14,Liquid Glass,General,"Flowing glass, morphing, smooth transitions, fluid effects, translucent, animated blur, iridescent, chromatic aberration","Vibrant iridescent (rainbow spectrum), translucent base with opacity shifts, gradient fluidity","Chromatic aberration (Red-Cyan), iridescent oil-spill, fluid gradient blends, holographic effects","Morphing elements (SVG/CSS), fluid animations (400-600ms curves), dynamic blur (backdrop-filter), color transitions","Premium SaaS, high-end e-commerce, creative platforms, branding experiences, luxury portfolios","Performance-limited, critical accessibility, complex data, budget projects",✓ Full,✓ Full,⚠ Moderate-Poor,⚠ Text contrast,◐ Medium,✓ High,"Framer Motion 10/10, GSAP 10/10",2020s Modern,High,"Create a premium liquid glass effect with morphing shapes, flowing animations, chromatic aberration, iridescent gradients, smooth 400-600ms transitions. Use SVG morphing for shape changes, dynamic blur, smooth color transitions creating a fluid, premium feel.","animation: morphing SVG paths (400-600ms), backdrop-filter: blur + saturate, filter: hue-rotate + brightness, blend-mode: screen, background: iridescent gradient","☐ Morphing animations 400-600ms, ☐ Chromatic aberration applied, ☐ Dynamic blur active, ☐ Iridescent gradients, ☐ Smooth color transitions, ☐ Premium feel achieved","--morph-duration: 400-600ms, --blur-amount: 15px, --chromatic-aberration: true, --iridescent: true, --blend-mode: screen, --smooth-transitions: true"
15,Motion-Driven,General,"Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim, page transitions","Bold colors emphasize movement, high contrast animated, dynamic gradients, accent action colors","Transitional states, success (Green #22C55E), error (Red #EF4444), neutral feedback","Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions","Portfolio sites, storytelling platforms, interactive experiences, entertainment apps, creative, SaaS","Data dashboards, critical accessibility, low-power devices, content-heavy, motion-sensitive",✓ Full,✓ Full,⚠ Good,⚠ Prefers-reduced-motion,✓ Good,✓ High,"GSAP 10/10, Framer Motion 10/10",2020s Modern,High,"Build an animation-heavy interface with scroll-triggered animations, microinteractions, parallax scrolling (3-5 layers), smooth transitions (300-400ms), entrance animations, page transitions. Use Intersection Observer for scroll effects, transform for performance, GPU acceleration.","animation: @keyframes scroll-reveal, transform: translateY/X, Intersection Observer API, will-change: transform, scroll-behavior: smooth, animation-duration: 300-400ms","☐ Scroll animations active, ☐ Parallax 3-5 layers, ☐ Entrance animations smooth, ☐ Page transitions fluid, ☐ GPU accelerated, ☐ Prefers-reduced-motion respected","--animation-duration: 300-400ms, --parallax-layers: 5, --scroll-behavior: smooth, --gpu-accelerated: true, --entrance-animation: true, --page-transition: smooth"
16,Micro-interactions,General,"Small animations, gesture-based, tactile feedback, subtle animations, contextual interactions, responsive","Subtle color shifts (10-20%), feedback: Green #22C55E, Red #EF4444, Amber #F59E0B","Accent feedback, neutral supporting, clear action indicators","Small hover (50-100ms), loading spinners, success/error state anim, gesture-triggered (swipe/pinch), haptic","Mobile apps, touchscreen UIs, productivity tools, user-friendly, consumer apps, interactive components","Desktop-only, critical performance, accessibility-first (alternatives needed)",✓ Full,✓ Full,⚡ Excellent,✓ Good,✓ High,✓ High,"Framer Motion 10/10, React Spring 9/10",2020s Modern,Medium,"Design with delightful micro-interactions: small 50-100ms animations, gesture-based responses, tactile feedback, loading spinners, success/error states, subtle hover effects, haptic feedback triggers for mobile. Focus on responsive, contextual interactions.","animation: short 50-100ms, transition: hover states, @media (hover: hover) for desktop, :active for press, haptic-feedback CSS/API, loading animation smooth loop","☐ Micro-animations 50-100ms, ☐ Gesture-responsive, ☐ Tactile feedback visual/haptic, ☐ Loading spinners smooth, ☐ Success/error states clear, ☐ Hover effects subtle","--micro-animation-duration: 50-100ms, --gesture-responsive: true, --haptic-feedback: true, --loading-animation: smooth, --state-feedback: success+error"
17,Inclusive Design,General,"Accessible, color-blind friendly, high contrast, haptic feedback, voice interaction, screen reader, WCAG AAA, universal","WCAG AAA (7:1+ contrast), avoid red-green only, symbol-based indicators, high contrast primary","Supporting patterns (stripes, dots, hatch), symbols, combinations, clear non-color indicators","Haptic feedback (vibration), voice guidance, focus indicators (4px+ ring), motion options, alt content, semantic","Public services, education, healthcare, finance, government, accessible consumer, inclusive",None - accessibility universal,✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,✓ High,All frameworks 10/10,Universal,Low,"Design for universal accessibility: high contrast (7:1+), large text (16px+), keyboard-only navigation, screen reader optimization, WCAG AAA compliance, symbol-based color indicators (not color-only), haptic feedback, voice interaction support, reduced motion options.","aria-* attributes complete, role attributes semantic, focus-visible: 3-4px ring, color-contrast: 7:1+, @media (prefers-reduced-motion), alt text on all images, form labels properly associated","☐ WCAG AAA verified, ☐ 7:1+ contrast all text, ☐ Keyboard accessible (Tab/Enter), ☐ Screen reader tested, ☐ Focus visible 3-4px, ☐ No color-only indicators, ☐ Haptic fallback","--contrast-ratio: 7:1, --font-size: 16px+, --keyboard-accessible: true, --sr-compatible: true, --wcag-level: AAA, --color-symbols: true, --haptic: enabled"
18,Zero Interface,General,"Minimal visible UI, voice-first, gesture-based, AI-driven, invisible controls, predictive, context-aware, ambient","Neutral backgrounds: Soft white #FAFAFA, light grey #F0F0F0, warm off-white #F5F1E8","Subtle feedback: light green, light red, minimal UI elements, soft accents","Voice recognition UI, gesture detection, AI predictions (smooth reveal), progressive disclosure, smart suggestions","Voice assistants, AI platforms, future-forward UX, smart home, contextual computing, ambient experiences","Complex workflows, data-entry heavy, traditional systems, legacy support, explicit control",✓ Full,✓ Full,⚡ Excellent,✓ Excellent,✓ High,✓ High,"Tailwind 10/10, Custom 10/10",2020s AI-Era,Low,"Create a voice-first, gesture-based, AI-driven interface with minimal visible UI, progressive disclosure, voice recognition UI, gesture detection, AI predictions, smart suggestions, context-aware actions. Hide controls until needed.","voice-commands: Web Speech API, gesture-detection: touch events, AI-predictions: hidden by default (reveal on hover), progressive-disclosure: show on demand, minimal UI visible","☐ Voice commands responsive, ☐ Gesture detection active, ☐ AI predictions hidden/revealed, ☐ Progressive disclosure working, ☐ Minimal visible UI, ☐ Smart suggestions contextual","--voice-ui: enabled, --gesture-detection: active, --ai-predictions: smart, --progressive-disclosure: true, --visible-ui: minimal, --context-aware: true"
19,Soft UI Evolution,General,"Evolved soft UI, better contrast, modern aesthetics, subtle depth, accessibility-focused, improved shadows, hybrid","Improved contrast pastels: Soft Blue #87CEEB, Soft Pink #FFB6C1, Soft Green #90EE90, better hierarchy","Better combinations, accessible secondary, supporting with improved contrast, modern accents","Improved shadows (softer than flat, clearer than neumorphism), modern (200-300ms), focus visible, WCAG AA/AAA","Modern enterprise apps, SaaS platforms, health/wellness, modern business tools, professional, hybrid","Extreme minimalism, critical performance, systems without modern OS",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA+,✓ High,✓ High,"Tailwind 9/10, MUI 9/10, Chakra 9/10",2020s Modern,Medium,"Design evolved neumorphism with improved contrast (WCAG AA+), modern aesthetics, subtle depth, accessibility focus. Use soft shadows (softer than flat but clearer than pure neumorphism), better color hierarchy, improved focus states, modern 200-300ms animations.","box-shadow: softer multi-layer (0 2px 4px), background: improved contrast pastels, border-radius: 8-12px, animation: 200-300ms smooth, outline: 2-3px on focus, contrast: 4.5:1+","☐ Improved contrast AA/AAA, ☐ Soft shadows modern, ☐ Border-radius 8-12px, ☐ Animations 200-300ms, ☐ Focus states visible, ☐ Color hierarchy clear","--shadow-soft: modern blend, --border-radius: 10px, --animation-duration: 200-300ms, --contrast-ratio: 4.5:1+, --color-hierarchy: improved, --wcag-level: AA+"
20,Hero-Centric Design,Landing Page,"Large hero section, compelling headline, high-contrast CTA, product showcase, value proposition, hero image/video, dramatic visual","Brand primary color, white/light backgrounds for contrast, accent color for CTA","Supporting colors for secondary CTAs, accent highlights, trust elements (testimonials, logos)","Smooth scroll reveal, fade-in animations on hero, subtle background parallax, CTA glow/pulse effect","SaaS landing pages, product launches, service landing pages, B2B platforms, tech companies","Complex navigation, multi-page experiences, data-heavy applications",✓ Full,✓ Full,⚡ Good,✓ WCAG AA,✓ Full,✓ Very High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a hero-centric landing page. Use: full-width hero section, compelling headline (60-80 chars), high-contrast CTA button, product screenshot or video, value proposition above fold, gradient or image background, clear visual hierarchy.","min-height: 100vh, display: flex, align-items: center, background: linear-gradient or image, text-shadow for readability, max-width: 800px for text, button with hover scale (1.05)","☐ Hero section full viewport height, ☐ Headline visible above fold, ☐ CTA button high contrast, ☐ Background image optimized (WebP), ☐ Text readable on background, ☐ Mobile responsive layout","--hero-min-height: 100vh, --headline-size: clamp(2rem, 5vw, 4rem), --cta-padding: 1rem 2rem, --overlay-opacity: 0.5, --text-shadow: 0 2px 4px rgba(0,0,0,0.3)"
21,Conversion-Optimized,Landing Page,"Form-focused, minimalist design, single CTA focus, high contrast, urgency elements, trust signals, social proof, clear value","Primary brand color, high-contrast white/light backgrounds, warning/urgency colors for time-limited offers","Secondary CTA color (muted), trust element colors (testimonial highlights), accent for key benefits","Hover states on CTA (color shift, slight scale), form field focus animations, loading spinner, success feedback","E-commerce product pages, free trial signups, lead generation, SaaS pricing pages, limited-time offers","Complex feature explanations, multi-product showcases, technical documentation",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ Full (mobile-optimized),✓ Very High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a conversion-optimized landing page. Use: single primary CTA, minimal distractions, trust badges, urgency elements (limited time), social proof (testimonials), clear value proposition, form above fold, progress indicators.","form with focus states, input:focus ring, button: primary color high contrast, position: sticky for CTA, max-width: 600px for form, loading spinner, success/error states","☐ Single primary CTA visible, ☐ Form fields minimal (3-5), ☐ Trust badges present, ☐ Social proof above fold, ☐ Mobile form optimized, ☐ Loading states implemented, ☐ A/B test ready","--cta-color: high contrast primary, --form-max-width: 600px, --input-height: 48px, --focus-ring: 3px solid accent, --success-color: #22C55E, --error-color: #EF4444"
22,Feature-Rich Showcase,Landing Page,"Multiple feature sections, grid layout, benefit cards, visual feature demonstrations, interactive elements, problem-solution pairs","Primary brand, bright secondary colors for feature cards, contrasting accent for CTAs","Supporting colors for: benefits (green), problems (red/orange), features (blue/purple), social proof (neutral)","Card hover effects (lift/scale), icon animations on scroll, feature toggle animations, smooth section transitions","Enterprise SaaS, software tools landing pages, platform services, complex product explanations, B2B products","Simple product pages, early-stage startups with few features, entertainment landing pages",✓ Full,✓ Full,⚡ Good,✓ WCAG AA,✓ Good,✓ High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a feature showcase landing page. Use: grid layout for features (3-4 columns), feature cards with icons, benefit-focused copy, alternating sections, comparison tables, interactive demos, problem-solution pairs.","display: grid, grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), gap: 2rem, card hover effects (translateY -4px), icon containers, alternating background colors","☐ Feature grid responsive, ☐ Icons consistent style, ☐ Card hover effects smooth, ☐ Alternating sections contrast, ☐ Benefits clearly stated, ☐ Mobile stacks properly","--card-padding: 2rem, --card-radius: 12px, --icon-size: 48px, --grid-gap: 2rem, --section-padding: 4rem 0, --hover-transform: translateY(-4px)"
23,Minimal & Direct,Landing Page,"Minimal text, white space heavy, single column layout, direct messaging, clean typography, visual-centric, fast-loading","Monochromatic primary, white background, single accent color for CTA, black/dark grey text","Minimal secondary colors, reserved for critical CTAs only, neutral supporting elements","Very subtle hover effects, minimal animations, fast page load (no heavy animations), smooth scroll","Simple service landing pages, indie products, consulting services, micro SaaS, freelancer portfolios","Feature-heavy products, complex explanations, multi-product showcases",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ Full,✓ High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a minimal direct landing page. Use: single column layout, maximum white space, essential content only, one CTA, clean typography, no decorative elements, fast loading, direct messaging.","max-width: 680px, margin: 0 auto, padding: 4rem 2rem, font-size: 18-20px, line-height: 1.6, minimal animations, no box-shadow, clean borders only","☐ Single column centered, ☐ White space generous, ☐ One primary CTA only, ☐ No decorative images, ☐ Page weight < 500KB, ☐ Load time < 2s","--content-max-width: 680px, --spacing-large: 4rem, --font-size-body: 18px, --line-height: 1.6, --color-text: #1a1a1a, --color-bg: #ffffff"
24,Social Proof-Focused,Landing Page,"Testimonials prominent, client logos displayed, case studies sections, reviews/ratings, user avatars, success metrics, credibility markers","Primary brand, trust colors (blue), success/growth colors (green), neutral backgrounds","Testimonial highlight colors, logo grid backgrounds (light grey), badge/achievement colors","Testimonial carousel animations, logo grid fade-in, stat counter animations (number count-up), review star ratings","B2B SaaS, professional services, premium products, e-commerce conversion pages, established brands","Startup MVPs, products without users, niche/experimental products",✓ Full,✓ Full,⚡ Good,✓ WCAG AA,✓ Full,✓ High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a social proof landing page. Use: testimonials with photos, client logos grid, case study cards, review ratings (stars), user count metrics, success stories, trust indicators, before/after comparisons.","testimonial cards with avatar, logo grid (grayscale filter), star rating SVGs, counter animations (count-up), blockquote styling, carousel for testimonials, metric cards","☐ Testimonials with real photos, ☐ Logo grid 6-12 logos, ☐ Star ratings accessible, ☐ Metrics animated on scroll, ☐ Case studies linked, ☐ Mobile carousel works","--avatar-size: 64px, --logo-height: 40px, --star-color: #FBBF24, --metric-font-size: 3rem, --testimonial-bg: #F9FAFB, --blockquote-border: 4px solid accent"
25,Interactive Product Demo,Landing Page,"Embedded product mockup/video, interactive elements, product walkthrough, step-by-step guides, hover-to-reveal features, embedded demos","Primary brand, interface colors matching product, demo highlight colors for interactive elements","Product UI colors, tutorial step colors (numbered progression), hover state indicators","Product animation playback, step progression animations, hover reveal effects, smooth zoom on interaction","SaaS platforms, tool/software products, productivity apps landing pages, developer tools, productivity software","Simple services, consulting, non-digital products, complexity-averse audiences",✓ Full,✓ Full,⚠ Good (video/interactive),✓ WCAG AA,✓ Good,✓ Very High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design an interactive demo landing page. Use: embedded product mockup, video walkthrough, step-by-step guide, hover-to-reveal features, live demo button, screenshot carousel, feature highlights on interaction.","video element with controls, position: relative for overlays, hover reveal (opacity transition), step indicators, modal for full demo, screenshot lightbox, play button overlay","☐ Demo video loads fast, ☐ Fallback for no-JS, ☐ Step indicators clear, ☐ Hover states obvious, ☐ Mobile touch friendly, ☐ Demo CTA prominent","--video-aspect-ratio: 16/9, --overlay-bg: rgba(0,0,0,0.7), --step-indicator-size: 32px, --play-button-size: 80px, --transition-duration: 300ms"
26,Trust & Authority,Landing Page,"Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges","Professional colors (blue/grey), trust colors, certification badge colors (gold/silver accents)","Certificate highlight colors, metric showcase colors, comparison highlight (success green)","Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal","Healthcare/medical landing pages, financial services, enterprise software, premium/luxury products, legal services","Casual products, entertainment, viral/social-first products",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ Full,✓ High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a trust-focused landing page. Use: certification badges, security indicators, expert credentials, industry awards, case study metrics, compliance logos (GDPR, SOC2), guarantee badges, professional photography.","badge grid layout, shield icons, lock icons for security, certificate styling, metric cards with icons, professional color scheme (blue/grey), subtle shadows for depth","☐ Security badges visible, ☐ Certifications verified, ☐ Metrics with sources, ☐ Professional imagery, ☐ Guarantee clearly stated, ☐ Contact info accessible","--badge-height: 48px, --trust-color: #1E40AF, --security-green: #059669, --card-shadow: 0 4px 6px rgba(0,0,0,0.1), --metric-highlight: #F59E0B"
27,Storytelling-Driven,Landing Page,"Narrative flow, visual story progression, section transitions, consistent character/brand voice, emotional messaging, journey visualization","Brand primary, warm/emotional colors, varied accent colors per story section, high visual variety","Story section color coding, emotional state colors (calm, excitement, success), transitional gradients","Section-to-section animations, scroll-triggered reveals, character/icon animations, morphing transitions, parallax narrative","Brand/startup stories, mission-driven products, premium/lifestyle brands, documentary-style products, educational","Technical/complex products (unless narrative-driven), traditional enterprise software",✓ Full,✓ Full,⚠ Moderate (animations),✓ WCAG AA,✓ Good,✓ High,"Tailwind 10/10, Bootstrap 9/10",2020s Modern,Medium,"Design a storytelling landing page. Use: narrative flow sections, scroll-triggered reveals, chapter-like structure, emotional imagery, brand journey visualization, founder story, mission statement, timeline progression.","scroll-snap sections, Intersection Observer for reveals, parallax backgrounds, section transitions, timeline CSS, narrative typography (varied sizes), image-text alternating","☐ Story flows naturally, ☐ Scroll reveals smooth, ☐ Sections timed well, ☐ Emotional hooks present, ☐ Mobile story readable, ☐ Skip option available","--section-min-height: 100vh, --reveal-duration: 600ms, --narrative-font: serif, --chapter-spacing: 8rem, --timeline-color: accent, --parallax-speed: 0.5"
28,Data-Dense Dashboard,BI/Analytics,"Multiple charts/widgets, data tables, KPI cards, minimal padding, grid layout, space-efficient, maximum data visibility","Neutral primary (light grey/white #F5F5F5), data colors (blue/green/red), dark text #333333","Chart colors: success (green #22C55E), warning (amber #F59E0B), alert (red #EF4444), neutral (grey)","Hover tooltips, chart zoom on click, row highlighting on hover, smooth filter animations, data loading spinners","Business intelligence dashboards, financial analytics, enterprise reporting, operational dashboards, data warehousing","Marketing dashboards, consumer-facing analytics, simple reporting",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a data-dense dashboard. Use: multiple chart widgets, KPI cards row, data tables with sorting, minimal padding (8-12px), efficient grid layout, filter sidebar, dense but readable typography, maximum information density.","display: grid, grid-template-columns: repeat(12, 1fr), gap: 8px, padding: 12px, font-size: 12-14px, overflow: auto for tables, compact card design, sticky headers","☐ Grid layout 12 columns, ☐ KPI cards responsive, ☐ Tables sortable, ☐ Filters functional, ☐ Loading states for data, ☐ Export functionality","--grid-gap: 8px, --card-padding: 12px, --font-size-small: 12px, --table-row-height: 36px, --sidebar-width: 240px, --header-height: 56px"
29,Heat Map & Heatmap Style,BI/Analytics,"Color-coded grid/matrix, data intensity visualization, geographical heat maps, correlation matrices, cell-based representation, gradient coloring","Gradient scale: Cool (blue #0080FF) to hot (red #FF0000), neutral middle (white/yellow)","Support gradients: Light (cool blue) to dark (warm red), divergent for positive/negative data, monochromatic options","Color gradient transitions on data change, cell highlighting on hover, tooltip reveal on click, smooth color animation","Geographical analysis, performance matrices, correlation analysis, user behavior heatmaps, temperature/intensity data","Linear data representation, categorical comparisons (use bar charts), small datasets",✓ Full,✓ Full (with adjustments),⚡ Excellent,⚠ Colorblind considerations,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a heatmap visualization. Use: color gradient scale (cool to hot), cell-based grid, intensity legend, hover tooltips, geographic or matrix layout, divergent color scheme for +/- values, accessible color alternatives.","display: grid, background: linear-gradient for legend, cell hover states, tooltip positioning, color scale (blue→white→red), SVG for geographic, canvas for large datasets","☐ Color scale clear, ☐ Legend visible, ☐ Tooltips informative, ☐ Colorblind alternatives, ☐ Zoom/pan for geo, ☐ Performance for large data","--heatmap-cool: #0080FF, --heatmap-neutral: #FFFFFF, --heatmap-hot: #FF0000, --cell-size: 24px, --legend-width: 200px, --tooltip-bg: rgba(0,0,0,0.9)"
30,Executive Dashboard,BI/Analytics,"High-level KPIs, large key metrics, minimal detail, summary view, trend indicators, at-a-glance insights, executive summary","Brand colors, professional palette (blue/grey/white), accent for KPIs, red for alerts/concerns","KPI highlight colors: positive (green), negative (red), neutral (grey), trend arrow colors","KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect","C-suite dashboards, business summary reports, decision-maker dashboards, strategic planning views","Detailed analyst dashboards, technical deep-dives, operational monitoring",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✗ Low (not mobile-optimized),✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design an executive dashboard. Use: large KPI cards (4-6 max), trend sparklines, high-level summary only, clean layout with white space, traffic light indicators (red/yellow/green), at-a-glance insights, minimal detail.","display: flex for KPI row, large font-size (24-48px) for metrics, sparkline SVG inline, status indicators (border-left color), card shadows for hierarchy, responsive breakpoints","☐ KPIs 4-6 maximum, ☐ Trends visible, ☐ Status colors clear, ☐ One-page view, ☐ Mobile simplified, ☐ Print-friendly layout","--kpi-font-size: 48px, --sparkline-height: 32px, --status-green: #22C55E, --status-yellow: #F59E0B, --status-red: #EF4444, --card-min-width: 280px"
31,Real-Time Monitoring,BI/Analytics,"Live data updates, status indicators, alert notifications, streaming data visualization, active monitoring, streaming charts","Alert colors: critical (red #FF0000), warning (orange #FFA500), normal (green #22C55E), updating (blue animation)","Status indicator colors, chart line colors varying by metric, streaming data highlight colors","Real-time chart animations, alert pulse/glow, status indicator blink animation, smooth data stream updates, loading effect","System monitoring dashboards, DevOps dashboards, real-time analytics, stock market dashboards, live event tracking","Historical analysis, long-term trend reports, archived data dashboards",✓ Full,✓ Full,⚡ Good (real-time load),✓ WCAG AA,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a real-time monitoring dashboard. Use: live status indicators (pulsing), streaming charts, alert notifications, connection status, auto-refresh indicators, critical alerts prominent, system health overview.","animation: pulse for live, WebSocket for streaming, position: fixed for alerts, status-dot with animation, chart real-time updates, notification toast, connection indicator","☐ Live updates working, ☐ Alert sounds optional, ☐ Connection status shown, ☐ Auto-refresh indicated, ☐ Critical alerts prominent, ☐ Offline fallback","--pulse-animation: pulse 2s infinite, --alert-z-index: 1000, --live-indicator: #22C55E, --critical-color: #DC2626, --update-interval: 5s, --toast-duration: 5s"
32,Drill-Down Analytics,BI/Analytics,"Hierarchical data exploration, expandable sections, interactive drill-down paths, summary-to-detail flow, context preservation","Primary brand, breadcrumb colors, drill-level indicator colors, hierarchy depth colors","Drill-down path indicator colors, level-specific colors, highlight colors for selected level, transition colors","Drill-down expand animations, breadcrumb click transitions, smooth detail reveal, level change smooth, data reload animation","Sales analytics, product analytics, funnel analysis, multi-dimensional data exploration, business intelligence","Simple linear data, single-metric dashboards, streaming real-time dashboards",✓ Full,✓ Full,⚡ Good,✓ WCAG AA,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a drill-down analytics dashboard. Use: breadcrumb navigation, expandable sections, summary-to-detail flow, back button prominent, level indicators, context preservation, hierarchical data display.","breadcrumb nav with separators, details/summary for expand, transition for drill animation, position: sticky breadcrumb, nested grid layouts, smooth scroll to detail","☐ Breadcrumbs clear, ☐ Back navigation easy, ☐ Expand animation smooth, ☐ Context preserved, ☐ Mobile drill works, ☐ Deep links supported","--breadcrumb-separator: /, --expand-duration: 300ms, --level-indent: 24px, --back-button-size: 40px, --context-bar-height: 48px, --drill-transition: 300ms ease"
33,Comparative Analysis Dashboard,BI/Analytics,"Side-by-side comparisons, period-over-period metrics, A/B test results, regional comparisons, performance benchmarks","Comparison colors: primary (blue), comparison (orange/purple), delta indicator (green/red)","Winning metric color (green), losing metric color (red), neutral comparison (grey), benchmark colors","Comparison bar animations (grow to value), delta indicator animations (direction arrows), highlight on compare","Period-over-period reporting, A/B test dashboards, market comparison, competitive analysis, regional performance","Single metric dashboards, future projections (use forecasting), real-time only (no historical)",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a comparison dashboard. Use: side-by-side metrics, period selectors (vs last month), delta indicators (+/-), benchmark lines, A/B comparison tables, winning/losing highlights, percentage change badges.","display: flex for side-by-side, gap for comparison spacing, color coding (green up, red down), arrow indicators, diff highlighting, comparison table zebra striping","☐ Period selector works, ☐ Deltas calculated, ☐ Colors meaningful, ☐ Benchmarks shown, ☐ Mobile stacks properly, ☐ Export comparison","--positive-color: #22C55E, --negative-color: #EF4444, --neutral-color: #6B7280, --comparison-gap: 2rem, --arrow-size: 16px, --badge-padding: 4px 8px"
34,Predictive Analytics,BI/Analytics,"Forecast lines, confidence intervals, trend projections, scenario modeling, AI-driven insights, anomaly detection visualization","Forecast line color (distinct from actual), confidence interval shading, anomaly highlight (red alert), trend colors","High confidence (dark color), low confidence (light color), anomaly colors (red/orange), normal trend (green/blue)","Forecast line animation on draw, confidence band fade-in, anomaly pulse alert, smoothing function animations","Forecasting dashboards, anomaly detection systems, trend prediction dashboards, AI-powered analytics, budget planning","Historical-only dashboards, simple reporting, real-time operational dashboards",✓ Full,✓ Full,⚠ Good (computation),✓ WCAG AA,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a predictive analytics dashboard. Use: forecast lines (dashed), confidence intervals (shaded bands), trend projections, anomaly highlights, scenario toggles, AI insight cards, probability indicators.","stroke-dasharray for forecast lines, fill-opacity for confidence bands, anomaly markers (circles), tooltip for predictions, toggle switches for scenarios, gradient for probability","☐ Forecast line distinct, ☐ Confidence bands visible, ☐ Anomalies highlighted, ☐ Scenarios switchable, ☐ Predictions dated, ☐ Accuracy shown","--forecast-dash: 5 5, --confidence-opacity: 0.2, --anomaly-color: #F59E0B, --prediction-color: #8B5CF6, --scenario-toggle-width: 48px, --ai-accent: #6366F1"
35,User Behavior Analytics,BI/Analytics,"Funnel visualization, user flow diagrams, conversion tracking, engagement metrics, user journey mapping, cohort analysis","Funnel stage colors: high engagement (green), drop-off (red), conversion (blue), user flow arrows (grey)","Stage completion colors (success), abandonment colors (warning), engagement levels (gradient), cohort colors","Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill","Conversion funnel analysis, user journey tracking, engagement analytics, cohort analysis, retention tracking","Real-time operational metrics, technical system monitoring, financial transactions",✓ Full,✓ Full,⚡ Good,✓ WCAG AA,✓ Good,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a user behavior analytics dashboard. Use: funnel visualization, user flow diagrams (Sankey), conversion metrics, engagement heatmaps, cohort tables, retention curves, session replay indicators.","SVG funnel with gradients, Sankey diagram library, percentage labels, cohort grid cells, retention chart (line/area), click heatmap overlay, session timeline","☐ Funnel stages clear, ☐ Flow diagram readable, ☐ Conversions calculated, ☐ Cohorts comparable, ☐ Retention trends visible, ☐ Privacy compliant","--funnel-width: 100%, --stage-colors: gradient, --flow-opacity: 0.6, --cohort-cell-size: 40px, --retention-line-color: #3B82F6, --engagement-scale: 5 levels"
36,Financial Dashboard,BI/Analytics,"Revenue metrics, profit/loss visualization, budget tracking, financial ratios, portfolio performance, cash flow, audit trail","Financial colors: profit (green #22C55E), loss (red #EF4444), neutral (grey), trust (dark blue #003366)","Revenue highlight (green), expenses (red), budget variance (orange/red), balance (grey), accuracy (blue)","Number animations (count-up), trend direction indicators, percentage change animations, profit/loss color transitions","Financial reporting, accounting dashboards, portfolio tracking, budget monitoring, banking analytics","Simple business dashboards, entertainment/social metrics, non-financial data",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✗ Low,✗ Not applicable,"Recharts 9/10, Chart.js 9/10, D3.js 10/10",2020s Modern,Medium,"Design a financial dashboard. Use: revenue/expense charts, profit margins, budget vs actual, cash flow waterfall, financial ratios, audit trail table, currency formatting, period comparisons.","number formatting (Intl.NumberFormat), waterfall chart (positive/negative bars), variance coloring, table with totals row, sparkline for trends, sticky column headers","☐ Currency formatted, ☐ Decimals consistent, ☐ P&L clear, ☐ Budget variance shown, ☐ Audit trail complete, ☐ Export to Excel","--currency-symbol: $, --decimal-places: 2, --profit-color: #22C55E, --loss-color: #EF4444, --variance-threshold: 10%, --table-header-bg: #F3F4F6"
37,Sales Intelligence Dashboard,BI/Analytics,"Deal pipeline, sales metrics, territory performance, sales rep leaderboard, win-loss analysis, quota tracking, forecast accuracy","Sales colors: won (green), lost (red), in-progress (blue), blocked (orange), quota met (gold), quota missed (grey)","Pipeline stage colors, rep performance colors, quota achievement colors, forecast accuracy colors","Deal movement animations, metric updates, leaderboard ranking changes, gauge needle movements, status change highlights","CRM dashboards, sales management, opportunity tracking, performance management, quota planning","Marketing analytics, customer support metrics, HR dashboards",✓ Full,✓ Full,⚡ Good,✓ WCAG AA,◐ Medium,✗ Not applicable,"Recharts 9/10, Chart.js 9/10",2020s Modern,Medium,"Design a sales intelligence dashboard. Use: pipeline funnel, deal cards (kanban), quota gauges, leaderboard table, territory map, win/loss ratios, forecast accuracy, activity timeline.","kanban columns (flex), gauge chart (SVG arc), leaderboard ranking styles, map integration (Mapbox/Google), timeline vertical, deal card with status border","☐ Pipeline stages shown, ☐ Deals draggable, ☐ Quotas visualized, ☐ Rankings updated, ☐ Territory clickable, ☐ CRM integration","--pipeline-colors: stage gradient, --gauge-track: #E5E7EB, --gauge-fill: primary, --rank-1-color: #FFD700, --rank-2-color: #C0C0C0, --rank-3-color: #CD7F32"
38,Neubrutalism,General,"Bold borders, black outlines, primary colors, thick shadows, no gradients, flat colors, 45° shadows, playful, Gen Z","#FFEB3B (Yellow), #FF5252 (Red), #2196F3 (Blue), #000000 (Black borders)","Limited accent colors, high contrast combinations, no gradients allowed","box-shadow: 4px 4px 0 #000, border: 3px solid #000, no gradients, sharp corners (0px), bold typography","Gen Z brands, startups, creative agencies, Figma-style apps, Notion-style interfaces, tech blogs","Luxury brands, finance, healthcare, conservative industries (too playful)",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,✓ High,"Tailwind 10/10, Bootstrap 8/10",2020s Modern,Low,"Design a neubrutalist interface. Use: high contrast, hard black borders (3px+), bright pop colors, no blur, sharp or slightly rounded corners, bold typography, hard shadows (offset 4px 4px), raw aesthetic but functional.","border: 3px solid black, box-shadow: 5px 5px 0px black, colors: #FFDB58 #FF6B6B #4ECDC4, font-weight: 700, no gradients","☐ Hard borders (2-4px), ☐ Hard offset shadows, ☐ High saturation colors, ☐ Bold typography, ☐ No blurs/gradients, ☐ Distinctive 'ugly-cute' look","--border-width: 3px, --shadow-offset: 4px, --shadow-color: #000, --colors: high saturation, --font: bold sans"
39,Bento Box Grid,General,"Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards","Neutral base + brand accent, #FFFFFF, #F5F5F5, brand primary","Subtle gradients, shadow variations, accent highlights for interactive cards","grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions","Dashboards, product pages, portfolios, Apple-style marketing, feature showcases, SaaS","Dense data tables, text-heavy content, real-time monitoring",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"Tailwind 10/10, CSS Grid 10/10",2020s Apple,Low,"Design a Bento Box grid layout. Use: modular cards with varied sizes (1x1, 2x1, 2x2), Apple-style aesthetic, rounded corners (16-24px), soft shadows, clean hierarchy, asymmetric grid, neutral backgrounds (#F5F5F7), hover effects.","display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: 200px, gap: 16px, border-radius: 24px, background: #FFFFFF, box-shadow: 0 4px 6px rgba(0,0,0,0.05)","☐ Grid responsive (4→2→1 cols), ☐ Card spans varied, ☐ Rounded corners consistent, ☐ Shadows subtle, ☐ Content fits cards, ☐ Hover scale (1.02)","--grid-gap: 16px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: 0 4px 6px rgba(0,0,0,0.05), --hover-scale: 1.02"
40,Y2K Aesthetic,General,"Neon pink, chrome, metallic, bubblegum, iridescent, glossy, retro-futurism, 2000s, futuristic nostalgia","#FF69B4 (Hot Pink), #00FFFF (Cyan), #C0C0C0 (Silver), #9400D3 (Purple)","Metallic gradients, glossy overlays, iridescent effects, chrome textures","linear-gradient metallic, glossy buttons, 3D chrome effects, glow animations, bubble shapes","Fashion brands, music platforms, Gen Z brands, nostalgia marketing, entertainment, youth-focused","B2B enterprise, healthcare, finance, conservative industries, elderly users",✓ Full,◐ Partial,⚠ Good,⚠ Check contrast,✓ Good,✓ High,"Tailwind 8/10, CSS-in-JS 9/10",Y2K 2000s,Medium,"Design a Y2K aesthetic interface. Use: neon pink/cyan colors, chrome/metallic textures, bubblegum gradients, glossy buttons, iridescent effects, 2000s futurism, star/sparkle decorations, bubble shapes, tech-optimistic vibe.","background: linear-gradient(135deg, #FF69B4, #00FFFF), filter: drop-shadow for glow, border-radius: 50% for bubbles, metallic gradients (silver/chrome), text-shadow: neon glow, ::before for sparkles","☐ Neon colors balanced, ☐ Chrome effects visible, ☐ Glossy buttons styled, ☐ Bubble shapes decorative, ☐ Sparkle animations, ☐ Retro fonts loaded","--neon-pink: #FF69B4, --neon-cyan: #00FFFF, --chrome-silver: #C0C0C0, --glossy-gradient: linear-gradient(180deg, white 0%, transparent 50%), --glow-blur: 10px"
41,Cyberpunk UI,General,"Neon, dark mode, terminal, HUD, sci-fi, glitch, dystopian, futuristic, matrix, tech noir","#00FF00 (Matrix Green), #FF00FF (Magenta), #00FFFF (Cyan), #0D0D0D (Dark)","Neon gradients, scanline overlays, glitch colors, terminal green accents","Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts","Gaming platforms, tech products, crypto apps, sci-fi applications, developer tools, entertainment","Corporate enterprise, healthcare, family apps, conservative brands, elderly users",✗ No,✓ Only,⚠ Moderate,⚠ Limited (dark+neon),◐ Medium,◐ Medium,"Tailwind 8/10, Custom CSS 10/10",2020s Cyberpunk,Medium,"Design a cyberpunk interface. Use: neon colors on dark (#0D0D0D), terminal/HUD aesthetic, glitch effects, scanlines overlay, matrix green accents, monospace fonts, angular shapes, dystopian tech feel.","background: #0D0D0D, color: #00FF00 or #FF00FF, font-family: monospace, text-shadow: 0 0 10px neon, animation: glitch (transform skew), ::before scanlines (repeating-linear-gradient)","☐ Dark background only, ☐ Neon accents visible, ☐ Glitch effect subtle, ☐ Scanlines optional, ☐ Monospace font, ☐ Terminal aesthetic","--bg-dark: #0D0D0D, --neon-green: #00FF00, --neon-magenta: #FF00FF, --neon-cyan: #00FFFF, --scanline-opacity: 0.1, --glitch-duration: 0.3s"
42,Organic Biophilic,General,"Nature, organic shapes, green, sustainable, rounded, flowing, wellness, earthy, natural textures","#228B22 (Forest Green), #8B4513 (Earth Brown), #87CEEB (Sky Blue), #F5F5DC (Beige)","Natural gradients, earth tones, sky blues, organic textures, wood/stone colors","Rounded corners (16-24px), organic curves (border-radius variations), natural shadows, flowing SVG shapes","Wellness apps, sustainability brands, eco products, health apps, meditation, organic food brands","Tech-focused products, gaming, industrial, urban brands",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"Tailwind 10/10, CSS 10/10",2020s Sustainable,Low,"Design a biophilic organic interface. Use: nature-inspired colors (greens, browns), organic curved shapes, rounded corners (16-24px), natural textures (wood, stone), flowing SVG elements, wellness aesthetic, earthy palette.","border-radius: 16-24px (varied), background: earth tones, SVG organic shapes (blob), box-shadow: natural soft, color: #228B22 #8B4513 #87CEEB, texture overlays (subtle)","☐ Earth tones dominant, ☐ Organic curves present, ☐ Natural textures subtle, ☐ Green accents, ☐ Rounded everywhere, ☐ Calming feel","--forest-green: #228B22, --earth-brown: #8B4513, --sky-blue: #87CEEB, --cream-bg: #F5F5DC, --organic-radius: 24px, --shadow-soft: 0 8px 32px rgba(0,0,0,0.08)"
43,AI-Native UI,General,"Chatbot, conversational, voice, assistant, agentic, ambient, minimal chrome, streaming text, AI interactions","Neutral + single accent, #6366F1 (AI Purple), #10B981 (Success), #F5F5F5 (Background)","Status indicators, streaming highlights, context card colors, subtle accent variations","Typing indicators (3-dot pulse), streaming text animations, pulse animations, context cards, smooth reveals","AI products, chatbots, voice assistants, copilots, AI-powered tools, conversational interfaces","Traditional forms, data-heavy dashboards, print-first content",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"Tailwind 10/10, React 10/10",2020s AI-Era,Low,"Design an AI-native interface. Use: minimal chrome, conversational layout, streaming text area, typing indicators (3-dot pulse), context cards, subtle AI accent color (#6366F1), clean input field, response bubbles.","chat bubble layout (flex-direction: column), typing animation (3 dots pulse), streaming text (overflow: hidden + animation), input: sticky bottom, context cards (border-left accent), minimal borders","☐ Chat layout responsive, ☐ Typing indicator smooth, ☐ Input always visible, ☐ Context cards styled, ☐ AI responses distinct, ☐ User messages aligned right","--ai-accent: #6366F1, --user-bubble-bg: #E0E7FF, --ai-bubble-bg: #F9FAFB, --input-height: 48px, --typing-dot-size: 8px, --message-gap: 16px"
44,Memphis Design,General,"80s, geometric, playful, postmodern, shapes, patterns, squiggles, triangles, neon, abstract, bold","#FF71CE (Hot Pink), #FFCE5C (Yellow), #86CCCA (Teal), #6A7BB4 (Blue Purple)","Complementary geometric colors, pattern fills, contrasting accent shapes","transform: rotate(), clip-path: polygon(), mix-blend-mode, repeating patterns, bold shapes","Creative agencies, music sites, youth brands, event promotion, artistic portfolios, entertainment","Corporate finance, healthcare, legal, elderly users, conservative brands",✓ Full,✓ Full,⚡ Excellent,⚠ Check contrast,✓ Good,◐ Medium,"Tailwind 9/10, CSS 10/10",1980s Postmodern,Medium,"Design a Memphis style interface. Use: bold geometric shapes (triangles, squiggles, circles), bright clashing colors, 80s postmodern aesthetic, playful patterns, dotted textures, asymmetric layouts, decorative elements.","clip-path: polygon() for shapes, background: repeating patterns, transform: rotate() for tilted elements, mix-blend-mode for overlays, border: dashed/dotted patterns, bold sans-serif","☐ Geometric shapes visible, ☐ Colors bold/clashing, ☐ Patterns present, ☐ Layout asymmetric, ☐ Playful decorations, ☐ 80s vibe achieved","--memphis-pink: #FF71CE, --memphis-yellow: #FFCE5C, --memphis-teal: #86CCCA, --memphis-purple: #6A7BB4, --pattern-size: 20px, --shape-rotation: 15deg"
45,Vaporwave,General,"Synthwave, retro-futuristic, 80s-90s, neon, glitch, nostalgic, sunset gradient, dreamy, aesthetic","#FF71CE (Pink), #01CDFE (Cyan), #05FFA1 (Mint), #B967FF (Purple)","Sunset gradients, glitch overlays, VHS effects, neon accents, pastel variations","text-shadow glow, linear-gradient, filter: hue-rotate(), glitch animations, retro scan lines","Music platforms, gaming, creative portfolios, tech startups, entertainment, artistic projects","Business apps, e-commerce, education, healthcare, enterprise software",✓ Full,✓ Dark focused,⚠ Moderate,⚠ Poor (motion),◐ Medium,◐ Medium,"Tailwind 8/10, CSS-in-JS 9/10",1980s-90s Retro,Medium,"Design a vaporwave aesthetic interface. Use: sunset gradients (pink/cyan/purple), 80s-90s nostalgia, glitch effects, Greek statue imagery, palm trees, grid patterns, neon glow, retro-futuristic feel, dreamy atmosphere.","background: linear-gradient(180deg, #FF71CE, #01CDFE, #B967FF), filter: hue-rotate(), text-shadow: neon glow, retro grid (perspective + linear-gradient), VHS scanlines","☐ Sunset gradient present, ☐ Neon glow applied, ☐ Retro grid visible, ☐ Glitch effects subtle, ☐ Dreamy atmosphere, ☐ 80s-90s aesthetic","--vapor-pink: #FF71CE, --vapor-cyan: #01CDFE, --vapor-mint: #05FFA1, --vapor-purple: #B967FF, --grid-color: rgba(255,255,255,0.1), --glow-intensity: 15px"
46,Dimensional Layering,General,"Depth, overlapping, z-index, layers, 3D, shadows, elevation, floating, cards, spatial hierarchy","Neutral base (#FFFFFF, #F5F5F5, #E0E0E0) + brand accent for elevated elements","Shadow variations (sm/md/lg/xl), elevation colors, highlight colors for top layers","z-index stacking, box-shadow elevation (4 levels), transform: translateZ(), backdrop-filter, parallax","Dashboards, card layouts, modals, navigation, product showcases, SaaS interfaces","Print-style layouts, simple blogs, low-end devices, flat design requirements",✓ Full,✓ Full,⚠ Good,⚠ Moderate (SR issues),✓ Good,✓ High,"Tailwind 10/10, MUI 10/10, Chakra 10/10",2020s Modern,Medium,"Design with dimensional layering. Use: z-index depth (multiple layers), overlapping cards, elevation shadows (4 levels), floating elements, parallax depth, backdrop blur for hierarchy, spatial UI feel.","z-index: 1-4 levels, box-shadow: elevation scale (sm/md/lg/xl), transform: translateZ(), backdrop-filter: blur(), position: relative for stacking, parallax on scroll","☐ Layers clearly defined, ☐ Shadows show depth, ☐ Overlaps intentional, ☐ Hierarchy clear, ☐ Performance optimized, ☐ Mobile depth maintained","--elevation-1: 0 1px 3px rgba(0,0,0,0.1), --elevation-2: 0 4px 6px rgba(0,0,0,0.1), --elevation-3: 0 10px 20px rgba(0,0,0,0.1), --elevation-4: 0 20px 40px rgba(0,0,0,0.15), --blur-amount: 8px"
47,Exaggerated Minimalism,General,"Bold minimalism, oversized typography, high contrast, negative space, loud minimal, statement design","#000000 (Black), #FFFFFF (White), single vibrant accent only","Minimal - single accent color, no secondary colors, extreme restraint","font-size: clamp(3rem 10vw 12rem), font-weight: 900, letter-spacing: -0.05em, massive whitespace","Fashion, architecture, portfolios, agency landing pages, luxury brands, editorial","E-commerce catalogs, dashboards, forms, data-heavy, elderly users, complex apps",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"Tailwind 10/10, Typography.js 10/10",2020s Modern,Low,"Design with exaggerated minimalism. Use: oversized typography (clamp 3rem-12rem), extreme negative space, black/white primary, single accent color only, bold statements, minimal elements, dramatic contrast.","font-size: clamp(3rem, 10vw, 12rem), font-weight: 900, letter-spacing: -0.05em, color: #000 or #FFF, padding: 8rem+, single accent, no decorations","☐ Typography oversized, ☐ White space extreme, ☐ Black/white dominant, ☐ Single accent only, ☐ Elements minimal, ☐ Statement clear","--type-giant: clamp(3rem, 10vw, 12rem), --type-weight: 900, --spacing-huge: 8rem, --color-primary: #000000, --color-bg: #FFFFFF, --accent: single color only"
48,Kinetic Typography,General,"Motion text, animated type, moving letters, dynamic, typing effect, morphing, scroll-triggered text","Flexible - high contrast recommended, bold colors for emphasis, animation-friendly palette","Accent colors for emphasis, transition colors, gradient text fills","@keyframes text animation, typing effect, background-clip: text, GSAP ScrollTrigger, split text","Hero sections, marketing sites, video platforms, storytelling, creative portfolios, landing pages","Long-form content, accessibility-critical, data interfaces, forms, elderly users",✓ Full,✓ Full,⚠ Moderate,❌ Poor (motion),✓ Good,✓ Very High,"GSAP 10/10, Framer Motion 10/10",2020s Modern,High,"Design with kinetic typography. Use: animated text, scroll-triggered reveals, typing effects, letter-by-letter animations, morphing text, gradient text fills, oversized hero text, text as the main visual element.","@keyframes for text animation, background-clip: text, GSAP SplitText, typing effect (steps()), transform on letters, scroll-triggered (Intersection Observer), variable fonts for morphing","☐ Text animations smooth, ☐ Prefers-reduced-motion respected, ☐ Fallback for no-JS, ☐ Mobile performance ok, ☐ Typing effect timed, ☐ Scroll triggers work","--text-animation-duration: 1s, --letter-delay: 0.05s, --typing-speed: 100ms, --gradient-text: linear-gradient(90deg, #color1, #color2), --morph-duration: 0.5s"
49,Parallax Storytelling,General,"Scroll-driven, narrative, layered scrolling, immersive, progressive disclosure, cinematic, scroll-triggered","Story-dependent, often gradients and natural colors, section-specific palettes","Section transition colors, depth layer colors, narrative mood colors","transform: translateY(scroll), position: fixed/sticky, perspective: 1px, scroll-triggered animations","Brand storytelling, product launches, case studies, portfolios, annual reports, marketing campaigns","E-commerce, dashboards, mobile-first, SEO-critical, accessibility-required",✓ Full,✓ Full,❌ Poor,❌ Poor (motion),✗ Low,✓ High,"GSAP ScrollTrigger 10/10, Locomotive Scroll 10/10",2020s Modern,High,"Design a parallax storytelling page. Use: scroll-driven narrative, layered backgrounds (3-5 layers), fixed/sticky sections, cinematic transitions, progressive disclosure, full-screen chapters, depth perception.","position: fixed/sticky, transform: translateY(calc()), perspective: 1px, z-index layering, scroll-snap-type, Intersection Observer for triggers, will-change: transform","☐ Layers parallax smoothly, ☐ Story flows naturally, ☐ Mobile alternative provided, ☐ Performance optimized, ☐ Skip option available, ☐ Reduced motion fallback","--parallax-speed-bg: 0.3, --parallax-speed-mid: 0.6, --parallax-speed-fg: 1, --section-height: 100vh, --transition-duration: 600ms, --perspective: 1px"
50,Swiss Modernism 2.0,General,"Grid system, Helvetica, modular, asymmetric, international style, rational, clean, mathematical spacing","#000000, #FFFFFF, #F5F5F5, single vibrant accent only","Minimal secondary, accent for emphasis only, no gradients","display: grid, grid-template-columns: repeat(12 1fr), gap: 1rem, mathematical ratios, clear hierarchy","Corporate sites, architecture, editorial, SaaS, museums, professional services, documentation","Playful brands, children's sites, entertainment, gaming, emotional storytelling",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,✓ High,"Tailwind 10/10, Bootstrap 9/10, Foundation 10/10",1950s Swiss + 2020s,Low,"Design with Swiss Modernism 2.0. Use: strict grid system (12 columns), Helvetica/Inter fonts, mathematical spacing, asymmetric balance, high contrast, minimal decoration, clean hierarchy, single accent color.","display: grid, grid-template-columns: repeat(12, 1fr), gap: 1rem (8px base unit), font-family: Inter/Helvetica, font-weight: 400-700, color: #000/#FFF, single accent","☐ 12-column grid strict, ☐ Spacing mathematical, ☐ Typography hierarchy clear, ☐ Single accent only, ☐ No decorations, ☐ High contrast verified","--grid-columns: 12, --grid-gap: 1rem, --base-unit: 8px, --font-primary: Inter, --color-text: #000000, --color-bg: #FFFFFF, --accent: single vibrant"
51,HUD / Sci-Fi FUI,General,"Futuristic, technical, wireframe, neon, data, transparency, iron man, sci-fi, interface","Neon Cyan #00FFFF, Holographic Blue #0080FF, Alert Red #FF0000","Transparent Black, Grid Lines #333333","Glow effects, scanning animations, ticker text, blinking markers, fine line drawing","Sci-fi games, space tech, cybersecurity, movie props, immersive dashboards","Standard corporate, reading heavy content, accessible public services",✓ Low,✓ Full,⚠ Moderate (renders),⚠ Poor (thin lines),◐ Medium,✗ Low,"React 9/10, Canvas 10/10",2010s Sci-Fi,High,"Design a futuristic HUD (Heads Up Display) or FUI. Use: thin lines (1px), neon cyan/blue on black, technical markers, decorative brackets, data visualization, monospaced tech fonts, glowing elements, transparency.","border: 1px solid rgba(0,255,255,0.5), color: #00FFFF, background: transparent or rgba(0,0,0,0.8), font-family: monospace, text-shadow: 0 0 5px cyan","☐ Fine lines 1px, ☐ Neon glow text/borders, ☐ Monospaced font, ☐ Dark/Transparent BG, ☐ Decorative tech markers, ☐ Holographic feel","--hud-color: #00FFFF, --bg-color: rgba(0,10,20,0.9), --line-width: 1px, --glow: 0 0 5px, --font: monospace"
52,Pixel Art,General,"Retro, 8-bit, 16-bit, gaming, blocky, nostalgic, pixelated, arcade","Primary colors (NES Palette), brights, limited palette","Black outlines, shading via dithering or block colors","Frame-by-frame sprite animation, blinking cursor, instant transitions, marquee text","Indie games, retro tools, creative portfolios, nostalgia marketing, Web3/NFT","Professional corporate, modern SaaS, high-res photography sites",✓ Full,✓ Full,⚡ Excellent,✓ Good (if contrast ok),✓ High,◐ Medium,"CSS (box-shadow) 8/10, Canvas 10/10",1980s Arcade,Medium,"Design a pixel art inspired interface. Use: pixelated fonts, 8-bit or 16-bit aesthetic, sharp edges (image-rendering: pixelated), limited color palette, blocky UI elements, retro gaming feel.","font-family: 'Press Start 2P', image-rendering: pixelated, box-shadow: 4px 0 0 #000 (pixel border), no anti-aliasing","☐ Pixelated fonts loaded, ☐ Images sharp (no blur), ☐ CSS box-shadow for pixel borders, ☐ Retro palette, ☐ Blocky layout","--pixel-size: 4px, --font: pixel font, --border-style: pixel-shadow, --anti-alias: none"
53,Bento Grids,General,"Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft","Off-white #F5F5F7, Clean White #FFFFFF, Text #1D1D1F","Subtle accents, soft shadows, blurred backdrops","Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal","Product features, dashboards, personal sites, marketing summaries, galleries","Long-form reading, data tables, complex forms",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"CSS Grid 10/10, Tailwind 10/10",2020s Apple/Linear,Low,"Design a Bento Grid layout. Use: modular grid system, rounded corners (16-24px), different card sizes (1x1, 2x1, 2x2), card-based hierarchy, soft backgrounds (#F5F5F7), subtle borders, content-first, Apple-style aesthetic.","display: grid, grid-template-columns: repeat(auto-fit, minmax(...)), gap: 1rem, border-radius: 20px, background: #FFF, box-shadow: subtle","☐ Grid layout (CSS Grid), ☐ Rounded corners 16-24px, ☐ Varied card spans, ☐ Content fits card size, ☐ Responsive re-flow, ☐ Apple-like aesthetic","--grid-gap: 20px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: soft"
55,Spatial UI (VisionOS),General,"Glass, depth, immersion, spatial, translucent, gaze, gesture, apple, vision-pro","Frosted Glass #FFFFFF (15-30% opacity), System White","Vibrant system colors for active states, deep shadows for depth","Parallax depth, dynamic lighting response, gaze-hover effects, smooth scale on focus","Spatial computing apps, VR/AR interfaces, immersive media, futuristic dashboards","Text-heavy documents, high-contrast requirements, non-3D capable devices",✓ Full,✓ Full,⚠ Moderate (blur cost),⚠ Contrast risks,✓ High (if adapted),✓ High,"SwiftUI, React (Three.js/Fiber)",2024 Spatial Era,High,"Design a VisionOS-style spatial interface. Use: frosted glass panels, depth layers, translucent backgrounds (15-30% opacity), vibrant colors for active states, gaze-hover effects, floating windows, immersive feel.","backdrop-filter: blur(40px) saturate(180%), background: rgba(255,255,255,0.2), border-radius: 24px, box-shadow: 0 8px 32px rgba(0,0,0,0.1), transform: scale on focus, depth via shadows","☐ Glass effect visible, ☐ Depth layers clear, ☐ Hover states defined, ☐ Colors vibrant on active, ☐ Floating feel achieved, ☐ Contrast maintained","--glass-bg: rgba(255,255,255,0.2), --glass-blur: 40px, --glass-saturate: 180%, --window-radius: 24px, --depth-shadow: 0 8px 32px rgba(0,0,0,0.1), --focus-scale: 1.02"
56,E-Ink / Paper,General,"Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome","Off-White #FDFBF7, Paper White #F5F5F5, Ink Black #1A1A1A","Pencil Grey #4A4A4A, Highlighter Yellow #FFFF00 (accent)","No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)","Reading apps, digital newspapers, minimal journals, distraction-free writing, slow-living brands","Gaming, video platforms, high-energy marketing, dark mode dependent apps",✓ Full,✗ Low (inverted only),⚡ Excellent,✓ WCAG AAA,✓ High,✓ Medium,"Tailwind 10/10, CSS 10/10",2020s Digital Well-being,Low,"Design an e-ink/paper style interface. Use: high contrast black on off-white, paper texture, no animations (instant transitions), reading-focused, minimal UI chrome, distraction-free, calm aesthetic, monochrome.","background: #FDFBF7 (paper white), color: #1A1A1A, transition: none, font-family: serif for reading, no gradients, border: 1px solid #E0E0E0, texture overlay (noise)","☐ Paper background color, ☐ High contrast text, ☐ No animations, ☐ Reading optimized, ☐ Distraction-free, ☐ Print-friendly","--paper-bg: #FDFBF7, --ink-color: #1A1A1A, --pencil-grey: #4A4A4A, --border-color: #E0E0E0, --font-reading: Georgia, --transition: none"
57,Gen Z Chaos / Maximalism,General,"Chaos, clutter, stickers, raw, collage, mixed media, loud, internet culture, ironic","Clashing Brights: #FF00FF, #00FF00, #FFFF00, #0000FF","Gradients, rainbow, glitch, noise, heavily saturated mix","Marquee scrolls, jitter, sticker layering, GIF overload, random placement, drag-and-drop","Gen Z lifestyle brands, music artists, creative portfolios, viral marketing, fashion","Corporate, government, healthcare, banking, serious tools",✓ Full,✓ Full,⚠ Poor (heavy assets),❌ Poor,◐ Medium,✓ High (Viral),CSS-in-JS 8/10,2023+ Internet Core,High,"Design a Gen Z chaos maximalist interface. Use: clashing bright colors, sticker overlays, collage aesthetic, raw/unpolished feel, mixed media, ironic elements, loud typography, GIF-heavy, internet culture references.","mix-blend-mode: multiply/screen, transform: rotate(random), animation: jitter, marquee text, position: absolute for scattered elements, filter: saturate(150%), z-index chaos","☐ Colors clash intentionally, ☐ Stickers/overlays present, ☐ Layout chaotic but usable, ☐ GIFs optimized, ☐ Mobile scrollable, ☐ Performance acceptable","--chaos-pink: #FF00FF, --chaos-green: #00FF00, --chaos-yellow: #FFFF00, --chaos-blue: #0000FF, --jitter-amount: 5deg, --saturate: 150%"
58,Biomimetic / Organic 2.0,General,"Nature-inspired, cellular, fluid, breathing, generative, algorithms, life-like","Cellular Pink #FF9999, Chlorophyll Green #00FF41, Bioluminescent Blue","Deep Ocean #001E3C, Coral #FF7F50, Organic gradients","Breathing animations, fluid morphing, generative growth, physics-based movement","Sustainability tech, biotech, advanced health, meditation, generative art platforms","Standard SaaS, data grids, strict corporate, accounting",✓ Full,✓ Full,⚠ Moderate,✓ Good,✓ Good,✓ High,"Canvas 10/10, WebGL 10/10",2024+ Generative,High,"Design a biomimetic organic interface. Use: cellular/fluid shapes, breathing animations, generative patterns, bioluminescent colors, physics-based movement, nature algorithms, life-like elements, flowing gradients.","SVG morphing (SMIL or GSAP), canvas for generative, animation: breathing (scale pulse), filter: blur for organic, clip-path for cellular, WebGL for advanced, physics libraries","☐ Organic shapes present, ☐ Animations feel alive, ☐ Generative elements, ☐ Performance monitored, ☐ Mobile fallback, ☐ Accessibility alt content","--cellular-pink: #FF9999, --chlorophyll: #00FF41, --bioluminescent: #00FFFF, --breathing-duration: 4s, --morph-ease: cubic-bezier(0.4, 0, 0.2, 1), --organic-blur: 20px"
59,Anti-Polish / Raw Aesthetic,General,"Hand-drawn, collage, scanned textures, unfinished, imperfect, authentic, human, sketch, raw marks, creative process","Paper White #FAFAF8, Pencil Grey #4A4A4A, Marker Black #1A1A1A, Kraft Brown #C4A77D","Watercolor washes, pencil shading, ink splatters, tape textures, aged paper tones","No smooth transitions, hand-drawn animations, paper texture overlays, jitter effects, sketch reveal","Creative portfolios, artist sites, indie brands, handmade products, authentic storytelling, editorial","Corporate enterprise, fintech, healthcare, government, polished SaaS",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"CSS 10/10, SVG 10/10",2025+ Anti-Digital,Low,"Design with anti-polish raw aesthetic. Use: hand-drawn elements, scanned textures, unfinished look, paper/pencil textures, collage style, authentic imperfection, sketch marks, tape/sticker overlays, human touch.","background: url(paper-texture.png), filter: grayscale() contrast(), border: hand-drawn SVG, transform: rotate(small random), no smooth transitions, sketch-style fonts, opacity variations","☐ Textures loaded, ☐ Hand-drawn elements present, ☐ Imperfections intentional, ☐ Authentic feel achieved, ☐ Performance ok with textures, ☐ Accessibility maintained","--paper-bg: #FAFAF8, --pencil-color: #4A4A4A, --marker-black: #1A1A1A, --kraft-brown: #C4A77D, --sketch-rotation: random(-3deg, 3deg), --texture-opacity: 0.3"
60,Tactile Digital / Deformable UI,General,"Jelly buttons, chrome, clay, squishy, deformable, bouncy, physical, tactile feedback, press response","Gradient metallics, Chrome Silver #C0C0C0, Jelly Pink #FF9ECD, Soft Blue #87CEEB","Glossy highlights, shadow depth, reflection effects, material-specific colors","Press deformation (scale + squish), bounce-back (cubic-bezier), material response, haptic-like feedback, spring physics","Modern mobile apps, playful brands, entertainment, gaming UI, consumer products, interactive demos","Enterprise software, data dashboards, accessibility-critical, professional tools",✓ Full,✓ Full,⚠ Good,⚠ Motion sensitive,✓ High,✓ Very High,"Framer Motion 10/10, React Spring 10/10, GSAP 10/10",2025+ Tactile Era,Medium,"Design a tactile deformable interface. Use: jelly/squishy buttons, press deformation effect, bounce-back animations, chrome/clay materials, spring physics, haptic-like feedback, material response, 3D depth on interaction.","transform: scale(0.95) on active, animation: bounce (cubic-bezier(0.34, 1.56, 0.64, 1)), box-shadow: inset for press, filter: brightness on press, spring physics (react-spring/framer-motion)","☐ Press effect visible, ☐ Bounce-back smooth, ☐ Material feels tactile, ☐ Spring physics tuned, ☐ Mobile touch responsive, ☐ Reduced motion option","--press-scale: 0.95, --bounce-duration: 400ms, --spring-stiffness: 300, --spring-damping: 20, --material-glossy: linear-gradient(135deg, white 0%, transparent 60%), --depth-shadow: 0 10px 30px rgba(0,0,0,0.2)"
61,Nature Distilled,General,"Muted earthy, skin tones, wood, soil, sand, terracotta, warmth, organic materials, handmade warmth","Terracotta #C67B5C, Sand Beige #D4C4A8, Warm Clay #B5651D, Soft Cream #F5F0E1","Earth Brown #8B4513, Olive Green #6B7B3C, Warm Stone #9C8B7A, muted gradients","Subtle parallax, natural easing (ease-out), texture overlays, grain effects, soft shadows","Wellness brands, sustainable products, artisan goods, organic food, spa/beauty, home decor","Tech startups, gaming, nightlife, corporate finance, high-energy brands",✓ Full,◐ Partial,⚡ Excellent,✓ WCAG AA,✓ High,✓ High,"Tailwind 10/10, CSS 10/10",2025+ Handmade Warmth,Low,"Design with nature distilled aesthetic. Use: muted earthy colors (terracotta, sand, olive), organic materials feel, warm tones, handmade warmth, natural textures, artisan quality, sustainable vibe, soft gradients.","background: warm earth tones, color: #C67B5C #D4C4A8 #6B7B3C, border-radius: organic (varied), box-shadow: soft natural, texture overlays (grain), font: humanist sans-serif","☐ Earth tones dominant, ☐ Warm feel achieved, ☐ Textures subtle, ☐ Handmade quality, ☐ Sustainable messaging, ☐ Calming aesthetic","--terracotta: #C67B5C, --sand-beige: #D4C4A8, --warm-clay: #B5651D, --soft-cream: #F5F0E1, --olive-green: #6B7B3C, --grain-opacity: 0.1"
62,Interactive Cursor Design,General,"Custom cursor, cursor as tool, hover effects, cursor feedback, pointer transformation, cursor trail, magnetic cursor","Brand-dependent, cursor accent color, high contrast for visibility","Trail colors, hover state colors, magnetic zone indicators, feedback colors","Cursor scale on hover, magnetic pull to elements, cursor morphing, trail effects, blend mode cursors, click feedback","Creative portfolios, interactive experiences, agency sites, product showcases, gaming, entertainment","Mobile-first (no cursor), accessibility-critical, data-heavy dashboards, forms",✓ Full,✓ Full,⚡ Good,⚠ Not for touch/SR,✗ No cursor,✓ High,"GSAP 10/10, Framer Motion 10/10, Custom JS 10/10",2025+ Interactive,Medium,"Design with interactive cursor effects. Use: custom cursor, cursor morphing on hover, magnetic cursor pull, cursor trails, blend mode cursors, click feedback animations, cursor as interaction tool, pointer transformation.","cursor: none (custom), position: fixed for cursor element, mix-blend-mode: difference, transform on hover targets, magnetic effect (JS position lerp), trail with opacity fade, scale on click","☐ Custom cursor works, ☐ Hover morph smooth, ☐ Magnetic pull subtle, ☐ Trail performance ok, ☐ Click feedback visible, ☐ Touch fallback provided","--cursor-size: 20px, --cursor-hover-scale: 1.5, --magnetic-distance: 100px, --trail-length: 10, --trail-fade: 0.1, --blend-mode: difference"
63,Voice-First Multimodal,General,"Voice UI, multimodal, audio feedback, conversational, hands-free, ambient, contextual, speech recognition","Calm neutrals: Soft White #FAFAFA, Muted Blue #6B8FAF, Gentle Purple #9B8FBB","Audio waveform colors, status indicators (listening/processing/speaking), success/error tones","Voice waveform visualization, listening pulse, processing spinner, speak animation, smooth transitions","Voice assistants, accessibility apps, hands-free tools, smart home, automotive UI, cooking apps","Visual-heavy content, data entry, complex forms, noisy environments",✓ Full,✓ Full,⚡ Excellent,✓ Excellent,✓ High,✓ High,"Web Speech API 10/10, React 10/10",2025+ Voice Era,Medium,"Design a voice-first multimodal interface. Use: voice waveform visualization, listening state indicator, speaking animation, minimal visible UI, audio feedback cues, hands-free optimized, conversational flow, ambient design.","Web Speech API integration, canvas for waveform, animation: pulse for listening, status indicators (color change), audio visualization (Web Audio API), minimal chrome, large touch targets","☐ Voice recognition works, ☐ Visual feedback clear, ☐ Listening state obvious, ☐ Speaking animation smooth, ☐ Fallback UI provided, ☐ Accessibility excellent","--listening-color: #6B8FAF, --speaking-color: #22C55E, --waveform-height: 60px, --pulse-duration: 1.5s, --indicator-size: 24px, --voice-accent: #9B8FBB"
64,3D Product Preview,General,"360 product view, rotatable, zoomable, touch-to-spin, AR preview, product configurator, interactive 3D model","Product-dependent, neutral backgrounds: Soft Grey #E8E8E8, Pure White #FFFFFF","Shadow gradients, reflection planes, environment lighting colors, accent highlights","Drag-to-rotate, pinch-to-zoom, spin animation, AR placement, material switching, smooth orbit controls","E-commerce, furniture, fashion, automotive, electronics, jewelry, product configurators","Content-heavy sites, blogs, dashboards, low-bandwidth, accessibility-critical",◐ Partial,◐ Partial,❌ Poor (3D rendering),⚠ Alt content needed,◐ Medium,✓ Very High,"Three.js 10/10, model-viewer 10/10, Spline 9/10",2025+ E-commerce 3D,High,"Design a 3D product preview interface. Use: 360° rotation, drag-to-spin, pinch-to-zoom, AR preview button, material/color switcher, hotspot annotations, orbit controls, product configurator, smooth rendering.","Three.js or model-viewer, OrbitControls, touch events for rotation, WebXR for AR, canvas with WebGL, loading placeholder, LOD for performance, environment lighting","☐ 3D model loads fast, ☐ Rotation smooth, ☐ Zoom works (pinch/scroll), ☐ AR button functional, ☐ Colors switchable, ☐ Mobile touch works","--canvas-bg: #F5F5F5, --hotspot-color: #3B82F6, --loading-spinner: primary, --rotation-speed: 0.5, --zoom-min: 0.5, --zoom-max: 2"
65,Gradient Mesh / Aurora Evolved,General,"Complex gradients, mesh gradients, multi-color blend, aurora effect, flowing colors, iridescent, holographic, prismatic","Multi-stop gradients: Cyan #00FFFF, Magenta #FF00FF, Yellow #FFFF00, Blue #0066FF, Green #00FF66","Complementary mesh points, smooth color transitions, iridescent overlays, chromatic shifts","CSS mesh-gradient (experimental), SVG gradients, canvas gradients, smooth color morphing, flowing animation","Hero sections, backgrounds, creative brands, music platforms, fashion, lifestyle, premium products","Data interfaces, text-heavy content, accessibility-critical, conservative brands",✓ Full,✓ Full,⚠ Good,⚠ Text contrast,✓ Good,✓ High,"CSS 8/10, SVG 10/10, Canvas 10/10",2025+ Gradient Evolution,Medium,"Design with gradient mesh aurora effect. Use: multi-color mesh gradients, flowing color transitions, aurora/northern lights feel, iridescent overlays, holographic shimmer, prismatic effects, smooth color morphing.","background: conic-gradient or mesh (SVG), animation: gradient flow (background-position), filter: hue-rotate for shimmer, mix-blend-mode: screen, canvas for complex mesh, multiple gradient layers","☐ Mesh gradient visible, ☐ Colors flow smoothly, ☐ Aurora effect achieved, ☐ Performance acceptable, ☐ Text remains readable, ☐ Mobile renders ok","--mesh-color-1: #00FFFF, --mesh-color-2: #FF00FF, --mesh-color-3: #FFFF00, --mesh-color-4: #00FF66, --flow-duration: 10s, --shimmer-intensity: 0.3"
66,Editorial Grid / Magazine,General,"Magazine layout, asymmetric grid, editorial typography, pull quotes, drop caps, column layout, print-inspired","High contrast: Black #000000, White #FFFFFF, accent brand color","Muted supporting, pull quote highlights, byline colors, section dividers","Smooth scroll, reveal on scroll, parallax images, text animations, page-flip transitions","News sites, blogs, magazines, editorial content, long-form articles, journalism, publishing","Dashboards, apps, e-commerce catalogs, real-time data, short-form content",✓ Full,✓ Full,⚡ Excellent,✓ WCAG AAA,✓ High,✓ Medium,"CSS Grid 10/10, Tailwind 10/10",2020s Editorial Digital,Low,"Design an editorial magazine layout. Use: asymmetric grid, pull quotes, drop caps, multi-column text, large imagery, bylines, section dividers, print-inspired typography, article hierarchy, white space balance.","display: grid with named areas, column-count for text, ::first-letter for drop caps, blockquote styling, figure/figcaption, gap variations, font: serif for body, variable widths","☐ Grid asymmetric, ☐ Typography editorial, ☐ Pull quotes styled, ☐ Drop caps present, ☐ Images large/impactful, ☐ Mobile reflows well","--grid-cols: asymmetric, --body-font: Georgia/Merriweather, --heading-font: bold sans, --drop-cap-size: 4em, --pull-quote-size: 1.5em, --column-gap: 2rem"
67,Chromatic Aberration / RGB Split,General,"RGB split, color fringing, glitch, retro tech, VHS, analog error, distortion, lens effect","Offset RGB: Red #FF0000, Green #00FF00, Blue #0000FF, Black #000000","Neon accents, scan lines, noise overlays, error colors","RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover","Music platforms, gaming, tech brands, creative portfolios, nightlife, entertainment, video platforms","Corporate, healthcare, finance, accessibility-critical, elderly users",✓ Full,✓ Dark preferred,⚠ Good,⚠ Can cause strain,◐ Medium,✓ High,"CSS filters 10/10, GSAP 10/10",2020s Retro-Tech,Medium,"Design with chromatic aberration RGB split effect. Use: color channel offset (R/G/B), glitch aesthetic, retro tech feel, VHS error look, lens distortion, scan lines, noise overlay, analog imperfection.","filter: drop-shadow with offset colors, text-shadow: RGB offset (-2px 0 red, 2px 0 cyan), animation: glitch (random offset), ::before for scanlines, mix-blend-mode: screen for overlays","☐ RGB split visible, ☐ Glitch effect controlled, ☐ Scan lines subtle, ☐ Performance ok, ☐ Readability maintained, ☐ Reduced motion option","--rgb-offset: 2px, --red-channel: #FF0000, --green-channel: #00FF00, --blue-channel: #0000FF, --glitch-duration: 0.3s, --scanline-opacity: 0.1"
68,Vintage Analog / Retro Film,General,"Film grain, VHS, cassette tape, polaroid, analog warmth, faded colors, light leaks, vintage photography","Faded Cream #F5E6C8, Warm Sepia #D4A574, Muted Teal #4A7B7C, Soft Pink #E8B4B8","Grain overlays, light leak oranges, shadow blues, vintage paper tones, desaturated accents","Film grain overlay, VHS tracking effect, polaroid shake, fade-in transitions, light leak animations","Photography portfolios, music/vinyl brands, vintage fashion, nostalgia marketing, film industry, cafes","Modern tech, SaaS, healthcare, children's apps, corporate enterprise",✓ Full,◐ Partial,⚡ Good,✓ WCAG AA,✓ High,✓ High,"CSS filters 10/10, Canvas 9/10",1970s-90s Analog Revival,Medium,"Design with vintage analog film aesthetic. Use: film grain overlay, faded/desaturated colors, warm sepia tones, light leaks, VHS tracking effect, polaroid frame, analog warmth, nostalgic photography feel.","filter: sepia() contrast() saturate(0.8), background: noise texture overlay, animation: VHS tracking (transform skew), light leak gradient overlay, border for polaroid frame, grain via SVG filter","☐ Film grain visible, ☐ Colors faded/warm, ☐ Light leaks present, ☐ Nostalgic feel achieved, ☐ Performance with filters, ☐ Images look vintage","--sepia-amount: 20%, --contrast: 1.1, --saturation: 0.8, --grain-opacity: 0.15, --light-leak-color: rgba(255,200,100,0.2), --warm-tint: #F5E6C8"

```

---

### `.agent/skills/ui-ux-pro-max/data/typography.csv`
**Function:** Source code file.

```csv
No,Font Pairing Name,Category,Heading Font,Body Font,Mood/Style Keywords,Best For,Google Fonts URL,CSS Import,Tailwind Config,Notes
1,Classic Elegant,"Serif + Sans",Playfair Display,Inter,"elegant, luxury, sophisticated, timeless, premium, editorial","Luxury brands, fashion, spa, beauty, editorial, magazines, high-end e-commerce","https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700|Playfair+Display:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');","fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }","High contrast between elegant heading and clean body. Perfect for luxury/premium."
2,Modern Professional,"Sans + Sans",Poppins,Open Sans,"modern, professional, clean, corporate, friendly, approachable","SaaS, corporate sites, business apps, startups, professional services","https://fonts.google.com/share?selection.family=Open+Sans:wght@300;400;500;600;700|Poppins:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');","fontFamily: { heading: ['Poppins', 'sans-serif'], body: ['Open Sans', 'sans-serif'] }","Geometric Poppins for headings, humanist Open Sans for readability."
3,Tech Startup,"Sans + Sans",Space Grotesk,DM Sans,"tech, startup, modern, innovative, bold, futuristic","Tech companies, startups, SaaS, developer tools, AI products","https://fonts.google.com/share?selection.family=DM+Sans:wght@400;500;700|Space+Grotesk:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');","fontFamily: { heading: ['Space Grotesk', 'sans-serif'], body: ['DM Sans', 'sans-serif'] }","Space Grotesk has unique character, DM Sans is highly readable."
4,Editorial Classic,"Serif + Serif",Cormorant Garamond,Libre Baskerville,"editorial, classic, literary, traditional, refined, bookish","Publishing, blogs, news sites, literary magazines, book covers","https://fonts.google.com/share?selection.family=Cormorant+Garamond:wght@400;500;600;700|Libre+Baskerville:wght@400;700","@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap');","fontFamily: { heading: ['Cormorant Garamond', 'serif'], body: ['Libre Baskerville', 'serif'] }","All-serif pairing for traditional editorial feel."
5,Minimal Swiss,"Sans + Sans",Inter,Inter,"minimal, clean, swiss, functional, neutral, professional","Dashboards, admin panels, documentation, enterprise apps, design systems","https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');","fontFamily: { sans: ['Inter', 'sans-serif'] }","Single font family with weight variations. Ultimate simplicity."
6,Playful Creative,"Display + Sans",Fredoka,Nunito,"playful, friendly, fun, creative, warm, approachable","Children's apps, educational, gaming, creative tools, entertainment","https://fonts.google.com/share?selection.family=Fredoka:wght@400;500;600;700|Nunito:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap');","fontFamily: { heading: ['Fredoka', 'sans-serif'], body: ['Nunito', 'sans-serif'] }","Rounded, friendly fonts perfect for playful UIs."
7,Bold Statement,"Display + Sans",Bebas Neue,Source Sans 3,"bold, impactful, strong, dramatic, modern, headlines","Marketing sites, portfolios, agencies, event pages, sports","https://fonts.google.com/share?selection.family=Bebas+Neue|Source+Sans+3:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');","fontFamily: { display: ['Bebas Neue', 'sans-serif'], body: ['Source Sans 3', 'sans-serif'] }","Bebas Neue for large headlines only. All-caps display font."
8,Wellness Calm,"Serif + Sans",Lora,Raleway,"calm, wellness, health, relaxing, natural, organic","Health apps, wellness, spa, meditation, yoga, organic brands","https://fonts.google.com/share?selection.family=Lora:wght@400;500;600;700|Raleway:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');","fontFamily: { serif: ['Lora', 'serif'], sans: ['Raleway', 'sans-serif'] }","Lora's organic curves with Raleway's elegant simplicity."
9,Developer Mono,"Mono + Sans",JetBrains Mono,IBM Plex Sans,"code, developer, technical, precise, functional, hacker","Developer tools, documentation, code editors, tech blogs, CLI apps","https://fonts.google.com/share?selection.family=IBM+Plex+Sans:wght@300;400;500;600;700|JetBrains+Mono:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');","fontFamily: { mono: ['JetBrains Mono', 'monospace'], sans: ['IBM Plex Sans', 'sans-serif'] }","JetBrains for code, IBM Plex for UI. Developer-focused."
10,Retro Vintage,"Display + Serif",Abril Fatface,Merriweather,"retro, vintage, nostalgic, dramatic, decorative, bold","Vintage brands, breweries, restaurants, creative portfolios, posters","https://fonts.google.com/share?selection.family=Abril+Fatface|Merriweather:wght@300;400;700","@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:wght@300;400;700&display=swap');","fontFamily: { display: ['Abril Fatface', 'serif'], body: ['Merriweather', 'serif'] }","Abril Fatface for hero headlines only. High-impact vintage feel."
11,Geometric Modern,"Sans + Sans",Outfit,Work Sans,"geometric, modern, clean, balanced, contemporary, versatile","General purpose, portfolios, agencies, modern brands, landing pages","https://fonts.google.com/share?selection.family=Outfit:wght@300;400;500;600;700|Work+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { heading: ['Outfit', 'sans-serif'], body: ['Work Sans', 'sans-serif'] }","Both geometric but Outfit more distinctive for headings."
12,Luxury Serif,"Serif + Sans",Cormorant,Montserrat,"luxury, high-end, fashion, elegant, refined, premium","Fashion brands, luxury e-commerce, jewelry, high-end services","https://fonts.google.com/share?selection.family=Cormorant:wght@400;500;600;700|Montserrat:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');","fontFamily: { serif: ['Cormorant', 'serif'], sans: ['Montserrat', 'sans-serif'] }","Cormorant's elegance with Montserrat's geometric precision."
13,Friendly SaaS,"Sans + Sans",Plus Jakarta Sans,Plus Jakarta Sans,"friendly, modern, saas, clean, approachable, professional","SaaS products, web apps, dashboards, B2B, productivity tools","https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] }","Single versatile font. Modern alternative to Inter."
14,News Editorial,"Serif + Sans",Newsreader,Roboto,"news, editorial, journalism, trustworthy, readable, informative","News sites, blogs, magazines, journalism, content-heavy sites","https://fonts.google.com/share?selection.family=Newsreader:wght@400;500;600;700|Roboto:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');","fontFamily: { serif: ['Newsreader', 'serif'], sans: ['Roboto', 'sans-serif'] }","Newsreader designed for long-form reading. Roboto for UI."
15,Handwritten Charm,"Script + Sans",Caveat,Quicksand,"handwritten, personal, friendly, casual, warm, charming","Personal blogs, invitations, creative portfolios, lifestyle brands","https://fonts.google.com/share?selection.family=Caveat:wght@400;500;600;700|Quicksand:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap');","fontFamily: { script: ['Caveat', 'cursive'], sans: ['Quicksand', 'sans-serif'] }","Use Caveat sparingly for accents. Quicksand for body."
16,Corporate Trust,"Sans + Sans",Lexend,Source Sans 3,"corporate, trustworthy, accessible, readable, professional, clean","Enterprise, government, healthcare, finance, accessibility-focused","https://fonts.google.com/share?selection.family=Lexend:wght@300;400;500;600;700|Source+Sans+3:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');","fontFamily: { heading: ['Lexend', 'sans-serif'], body: ['Source Sans 3', 'sans-serif'] }","Lexend designed for readability. Excellent accessibility."
17,Brutalist Raw,"Mono + Mono",Space Mono,Space Mono,"brutalist, raw, technical, monospace, minimal, stark","Brutalist designs, developer portfolios, experimental, tech art","https://fonts.google.com/share?selection.family=Space+Mono:wght@400;700","@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');","fontFamily: { mono: ['Space Mono', 'monospace'] }","All-mono for raw brutalist aesthetic. Limited weights."
18,Fashion Forward,"Sans + Sans",Syne,Manrope,"fashion, avant-garde, creative, bold, artistic, edgy","Fashion brands, creative agencies, art galleries, design studios","https://fonts.google.com/share?selection.family=Manrope:wght@300;400;500;600;700|Syne:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700&display=swap');","fontFamily: { heading: ['Syne', 'sans-serif'], body: ['Manrope', 'sans-serif'] }","Syne's unique character for headlines. Manrope for readability."
19,Soft Rounded,"Sans + Sans",Varela Round,Nunito Sans,"soft, rounded, friendly, approachable, warm, gentle","Children's products, pet apps, friendly brands, wellness, soft UI","https://fonts.google.com/share?selection.family=Nunito+Sans:wght@300;400;500;600;700|Varela+Round","@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Varela+Round&display=swap');","fontFamily: { heading: ['Varela Round', 'sans-serif'], body: ['Nunito Sans', 'sans-serif'] }","Both rounded and friendly. Perfect for soft UI designs."
20,Premium Sans,"Sans + Sans",Satoshi,General Sans,"premium, modern, clean, sophisticated, versatile, balanced","Premium brands, modern agencies, SaaS, portfolios, startups","https://fonts.google.com/share?selection.family=DM+Sans:wght@400;500;700","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');","fontFamily: { sans: ['DM Sans', 'sans-serif'] }","Note: Satoshi/General Sans on Fontshare. DM Sans as Google alternative."
21,Vietnamese Friendly,"Sans + Sans",Be Vietnam Pro,Noto Sans,"vietnamese, international, readable, clean, multilingual, accessible","Vietnamese sites, multilingual apps, international products","https://fonts.google.com/share?selection.family=Be+Vietnam+Pro:wght@300;400;500;600;700|Noto+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { sans: ['Be Vietnam Pro', 'Noto Sans', 'sans-serif'] }","Be Vietnam Pro excellent Vietnamese support. Noto as fallback."
22,Japanese Elegant,"Serif + Sans",Noto Serif JP,Noto Sans JP,"japanese, elegant, traditional, modern, multilingual, readable","Japanese sites, Japanese restaurants, cultural sites, anime/manga","https://fonts.google.com/share?selection.family=Noto+Sans+JP:wght@300;400;500;700|Noto+Serif+JP:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap');","fontFamily: { serif: ['Noto Serif JP', 'serif'], sans: ['Noto Sans JP', 'sans-serif'] }","Noto fonts excellent Japanese support. Traditional + modern feel."
23,Korean Modern,"Sans + Sans",Noto Sans KR,Noto Sans KR,"korean, modern, clean, professional, multilingual, readable","Korean sites, K-beauty, K-pop, Korean businesses, multilingual","https://fonts.google.com/share?selection.family=Noto+Sans+KR:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');","fontFamily: { sans: ['Noto Sans KR', 'sans-serif'] }","Clean Korean typography. Single font with weight variations."
24,Chinese Traditional,"Serif + Sans",Noto Serif TC,Noto Sans TC,"chinese, traditional, elegant, cultural, multilingual, readable","Traditional Chinese sites, cultural content, Taiwan/Hong Kong markets","https://fonts.google.com/share?selection.family=Noto+Sans+TC:wght@300;400;500;700|Noto+Serif+TC:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap');","fontFamily: { serif: ['Noto Serif TC', 'serif'], sans: ['Noto Sans TC', 'sans-serif'] }","Traditional Chinese character support. Elegant pairing."
25,Chinese Simplified,"Sans + Sans",Noto Sans SC,Noto Sans SC,"chinese, simplified, modern, professional, multilingual, readable","Simplified Chinese sites, mainland China market, business apps","https://fonts.google.com/share?selection.family=Noto+Sans+SC:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');","fontFamily: { sans: ['Noto Sans SC', 'sans-serif'] }","Simplified Chinese support. Clean modern look."
26,Arabic Elegant,"Serif + Sans",Noto Naskh Arabic,Noto Sans Arabic,"arabic, elegant, traditional, cultural, RTL, readable","Arabic sites, Middle East market, Islamic content, bilingual sites","https://fonts.google.com/share?selection.family=Noto+Naskh+Arabic:wght@400;500;600;700|Noto+Sans+Arabic:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;500;700&display=swap');","fontFamily: { serif: ['Noto Naskh Arabic', 'serif'], sans: ['Noto Sans Arabic', 'sans-serif'] }","RTL support. Naskh for traditional, Sans for modern Arabic."
27,Thai Modern,"Sans + Sans",Noto Sans Thai,Noto Sans Thai,"thai, modern, readable, clean, multilingual, accessible","Thai sites, Southeast Asia, tourism, Thai restaurants","https://fonts.google.com/share?selection.family=Noto+Sans+Thai:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;700&display=swap');","fontFamily: { sans: ['Noto Sans Thai', 'sans-serif'] }","Clean Thai typography. Excellent readability."
28,Hebrew Modern,"Sans + Sans",Noto Sans Hebrew,Noto Sans Hebrew,"hebrew, modern, RTL, clean, professional, readable","Hebrew sites, Israeli market, Jewish content, bilingual sites","https://fonts.google.com/share?selection.family=Noto+Sans+Hebrew:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;500;700&display=swap');","fontFamily: { sans: ['Noto Sans Hebrew', 'sans-serif'] }","RTL support. Clean modern Hebrew typography."
29,Legal Professional,"Serif + Sans",EB Garamond,Lato,"legal, professional, traditional, trustworthy, formal, authoritative","Law firms, legal services, contracts, formal documents, government","https://fonts.google.com/share?selection.family=EB+Garamond:wght@400;500;600;700|Lato:wght@300;400;700","@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');","fontFamily: { serif: ['EB Garamond', 'serif'], sans: ['Lato', 'sans-serif'] }","EB Garamond for authority. Lato for clean body text."
30,Medical Clean,"Sans + Sans",Figtree,Noto Sans,"medical, clean, accessible, professional, healthcare, trustworthy","Healthcare, medical clinics, pharma, health apps, accessibility","https://fonts.google.com/share?selection.family=Figtree:wght@300;400;500;600;700|Noto+Sans:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;700&display=swap');","fontFamily: { heading: ['Figtree', 'sans-serif'], body: ['Noto Sans', 'sans-serif'] }","Clean, accessible fonts for medical contexts."
31,Financial Trust,"Sans + Sans",IBM Plex Sans,IBM Plex Sans,"financial, trustworthy, professional, corporate, banking, serious","Banks, finance, insurance, investment, fintech, enterprise","https://fonts.google.com/share?selection.family=IBM+Plex+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { sans: ['IBM Plex Sans', 'sans-serif'] }","IBM Plex conveys trust and professionalism. Excellent for data."
32,Real Estate Luxury,"Serif + Sans",Cinzel,Josefin Sans,"real estate, luxury, elegant, sophisticated, property, premium","Real estate, luxury properties, architecture, interior design","https://fonts.google.com/share?selection.family=Cinzel:wght@400;500;600;700|Josefin+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { serif: ['Cinzel', 'serif'], sans: ['Josefin Sans', 'sans-serif'] }","Cinzel's elegance for headlines. Josefin for modern body."
33,Restaurant Menu,"Serif + Sans",Playfair Display SC,Karla,"restaurant, menu, culinary, elegant, foodie, hospitality","Restaurants, cafes, food blogs, culinary, hospitality","https://fonts.google.com/share?selection.family=Karla:wght@300;400;500;600;700|Playfair+Display+SC:wght@400;700","@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap');","fontFamily: { display: ['Playfair Display SC', 'serif'], sans: ['Karla', 'sans-serif'] }","Small caps Playfair for menu headers. Karla for descriptions."
34,Art Deco,"Display + Sans",Poiret One,Didact Gothic,"art deco, vintage, 1920s, elegant, decorative, gatsby","Vintage events, art deco themes, luxury hotels, classic cocktails","https://fonts.google.com/share?selection.family=Didact+Gothic|Poiret+One","@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Poiret+One&display=swap');","fontFamily: { display: ['Poiret One', 'sans-serif'], sans: ['Didact Gothic', 'sans-serif'] }","Poiret One for art deco headlines only. Didact for body."
35,Magazine Style,"Serif + Sans",Libre Bodoni,Public Sans,"magazine, editorial, publishing, refined, journalism, print","Magazines, online publications, editorial content, journalism","https://fonts.google.com/share?selection.family=Libre+Bodoni:wght@400;500;600;700|Public+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { serif: ['Libre Bodoni', 'serif'], sans: ['Public Sans', 'sans-serif'] }","Bodoni's editorial elegance. Public Sans for clean UI."
36,Crypto/Web3,"Sans + Sans",Orbitron,Exo 2,"crypto, web3, futuristic, tech, blockchain, digital","Crypto platforms, NFT, blockchain, web3, futuristic tech","https://fonts.google.com/share?selection.family=Exo+2:wght@300;400;500;600;700|Orbitron:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');","fontFamily: { display: ['Orbitron', 'sans-serif'], body: ['Exo 2', 'sans-serif'] }","Orbitron for futuristic headers. Exo 2 for readable body."
37,Gaming Bold,"Display + Sans",Russo One,Chakra Petch,"gaming, bold, action, esports, competitive, energetic","Gaming, esports, action games, competitive sports, entertainment","https://fonts.google.com/share?selection.family=Chakra+Petch:wght@300;400;500;600;700|Russo+One","@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Russo+One&display=swap');","fontFamily: { display: ['Russo One', 'sans-serif'], body: ['Chakra Petch', 'sans-serif'] }","Russo One for impact. Chakra Petch for techy body text."
38,Indie/Craft,"Display + Sans",Amatic SC,Cabin,"indie, craft, handmade, artisan, organic, creative","Craft brands, indie products, artisan, handmade, organic products","https://fonts.google.com/share?selection.family=Amatic+SC:wght@400;700|Cabin:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Cabin:wght@400;500;600;700&display=swap');","fontFamily: { display: ['Amatic SC', 'sans-serif'], sans: ['Cabin', 'sans-serif'] }","Amatic for handwritten feel. Cabin for readable body."
39,Startup Bold,"Sans + Sans",Clash Display,Satoshi,"startup, bold, modern, innovative, confident, dynamic","Startups, pitch decks, product launches, bold brands","https://fonts.google.com/share?selection.family=Outfit:wght@400;500;600;700|Rubik:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');","fontFamily: { heading: ['Outfit', 'sans-serif'], body: ['Rubik', 'sans-serif'] }","Note: Clash Display on Fontshare. Outfit as Google alternative."
40,E-commerce Clean,"Sans + Sans",Rubik,Nunito Sans,"ecommerce, clean, shopping, product, retail, conversion","E-commerce, online stores, product pages, retail, shopping","https://fonts.google.com/share?selection.family=Nunito+Sans:wght@300;400;500;600;700|Rubik:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700&display=swap');","fontFamily: { heading: ['Rubik', 'sans-serif'], body: ['Nunito Sans', 'sans-serif'] }","Clean readable fonts perfect for product descriptions."
41,Academic/Research,"Serif + Sans",Crimson Pro,Atkinson Hyperlegible,"academic, research, scholarly, accessible, readable, educational","Universities, research papers, academic journals, educational","https://fonts.google.com/share?selection.family=Atkinson+Hyperlegible:wght@400;700|Crimson+Pro:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&display=swap');","fontFamily: { serif: ['Crimson Pro', 'serif'], sans: ['Atkinson Hyperlegible', 'sans-serif'] }","Crimson for scholarly headlines. Atkinson for accessibility."
42,Dashboard Data,"Mono + Sans",Fira Code,Fira Sans,"dashboard, data, analytics, code, technical, precise","Dashboards, analytics, data visualization, admin panels","https://fonts.google.com/share?selection.family=Fira+Code:wght@400;500;600;700|Fira+Sans:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap');","fontFamily: { mono: ['Fira Code', 'monospace'], sans: ['Fira Sans', 'sans-serif'] }","Fira family cohesion. Code for data, Sans for labels."
43,Music/Entertainment,"Display + Sans",Righteous,Poppins,"music, entertainment, fun, energetic, bold, performance","Music platforms, entertainment, events, festivals, performers","https://fonts.google.com/share?selection.family=Poppins:wght@300;400;500;600;700|Righteous","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Righteous&display=swap');","fontFamily: { display: ['Righteous', 'sans-serif'], sans: ['Poppins', 'sans-serif'] }","Righteous for bold entertainment headers. Poppins for body."
44,Minimalist Portfolio,"Sans + Sans",Archivo,Space Grotesk,"minimal, portfolio, designer, creative, clean, artistic","Design portfolios, creative professionals, minimalist brands","https://fonts.google.com/share?selection.family=Archivo:wght@300;400;500;600;700|Space+Grotesk:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');","fontFamily: { heading: ['Space Grotesk', 'sans-serif'], body: ['Archivo', 'sans-serif'] }","Space Grotesk for distinctive headers. Archivo for clean body."
45,Kids/Education,"Display + Sans",Baloo 2,Comic Neue,"kids, education, playful, friendly, colorful, learning","Children's apps, educational games, kid-friendly content","https://fonts.google.com/share?selection.family=Baloo+2:wght@400;500;600;700|Comic+Neue:wght@300;400;700","@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&family=Comic+Neue:wght@300;400;700&display=swap');","fontFamily: { display: ['Baloo 2', 'sans-serif'], sans: ['Comic Neue', 'sans-serif'] }","Fun, playful fonts for children. Comic Neue is readable comic style."
46,Wedding/Romance,"Script + Serif",Great Vibes,Cormorant Infant,"wedding, romance, elegant, script, invitation, feminine","Wedding sites, invitations, romantic brands, bridal","https://fonts.google.com/share?selection.family=Cormorant+Infant:wght@300;400;500;600;700|Great+Vibes","@import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;600;700&family=Great+Vibes&display=swap');","fontFamily: { script: ['Great Vibes', 'cursive'], serif: ['Cormorant Infant', 'serif'] }","Great Vibes for elegant accents. Cormorant for readable text."
47,Science/Tech,"Sans + Sans",Exo,Roboto Mono,"science, technology, research, data, futuristic, precise","Science, research, tech documentation, data-heavy sites","https://fonts.google.com/share?selection.family=Exo:wght@300;400;500;600;700|Roboto+Mono:wght@300;400;500;700","@import url('https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;700&display=swap');","fontFamily: { sans: ['Exo', 'sans-serif'], mono: ['Roboto Mono', 'monospace'] }","Exo for modern tech feel. Roboto Mono for code/data."
48,Accessibility First,"Sans + Sans",Atkinson Hyperlegible,Atkinson Hyperlegible,"accessible, readable, inclusive, WCAG, dyslexia-friendly, clear","Accessibility-critical sites, government, healthcare, inclusive design","https://fonts.google.com/share?selection.family=Atkinson+Hyperlegible:wght@400;700","@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');","fontFamily: { sans: ['Atkinson Hyperlegible', 'sans-serif'] }","Designed for maximum legibility. Excellent for accessibility."
49,Sports/Fitness,"Sans + Sans",Barlow Condensed,Barlow,"sports, fitness, athletic, energetic, condensed, action","Sports, fitness, gyms, athletic brands, competition","https://fonts.google.com/share?selection.family=Barlow+Condensed:wght@400;500;600;700|Barlow:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap');","fontFamily: { display: ['Barlow Condensed', 'sans-serif'], body: ['Barlow', 'sans-serif'] }","Condensed for impact headlines. Regular Barlow for body."
50,Luxury Minimalist,"Serif + Sans",Bodoni Moda,Jost,"luxury, minimalist, high-end, sophisticated, refined, premium","Luxury minimalist brands, high-end fashion, premium products","https://fonts.google.com/share?selection.family=Bodoni+Moda:wght@400;500;600;700|Jost:wght@300;400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700&family=Jost:wght@300;400;500;600;700&display=swap');","fontFamily: { serif: ['Bodoni Moda', 'serif'], sans: ['Jost', 'sans-serif'] }","Bodoni's high contrast elegance. Jost for geometric body."
51,Tech/HUD Mono,"Mono + Mono",Share Tech Mono,Fira Code,"tech, futuristic, hud, sci-fi, data, monospaced, precise","Sci-fi interfaces, developer tools, cybersecurity, dashboards","https://fonts.google.com/share?selection.family=Fira+Code:wght@300;400;500;600;700|Share+Tech+Mono","@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap');","fontFamily: { hud: ['Share Tech Mono', 'monospace'], code: ['Fira Code', 'monospace'] }","Share Tech Mono has that classic sci-fi look."
52,Pixel Retro,"Display + Sans",Press Start 2P,VT323,"pixel, retro, gaming, 8-bit, nostalgic, arcade","Pixel art games, retro websites, creative portfolios","https://fonts.google.com/share?selection.family=Press+Start+2P|VT323","@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');","fontFamily: { pixel: ['Press Start 2P', 'cursive'], terminal: ['VT323', 'monospace'] }","Press Start 2P is very wide/large. VT323 is better for body text."
53,Neubrutalist Bold,"Display + Sans",Lexend Mega,Public Sans,"bold, neubrutalist, loud, strong, geometric, quirky","Neubrutalist designs, Gen Z brands, bold marketing","https://fonts.google.com/share?selection.family=Lexend+Mega:wght@100..900|Public+Sans:wght@100..900","@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@100..900&family=Public+Sans:wght@100..900&display=swap');","fontFamily: { mega: ['Lexend Mega', 'sans-serif'], body: ['Public Sans', 'sans-serif'] }","Lexend Mega has distinct character and variable weight."
54,Academic/Archival,"Serif + Serif",EB Garamond,Crimson Text,"academic, old-school, university, research, serious, traditional","University sites, archives, research papers, history","https://fonts.google.com/share?selection.family=Crimson+Text:wght@400;600;700|EB+Garamond:wght@400;500;600;700;800","@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=EB+Garamond:wght@400;500;600;700;800&display=swap');","fontFamily: { classic: ['EB Garamond', 'serif'], text: ['Crimson Text', 'serif'] }","Classic academic aesthetic. Very legible."
55,Spatial Clear,"Sans + Sans",Inter,Inter,"spatial, legible, glass, system, clean, neutral","Spatial computing, AR/VR, glassmorphism interfaces","https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600","@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');","fontFamily: { sans: ['Inter', 'sans-serif'] }","Optimized for readability on dynamic backgrounds."
56,Kinetic Motion,"Display + Mono",Syncopate,Space Mono,"kinetic, motion, futuristic, speed, wide, tech","Music festivals, automotive, high-energy brands","https://fonts.google.com/share?selection.family=Space+Mono:wght@400;700|Syncopate:wght@400;700","@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syncopate:wght@400;700&display=swap');","fontFamily: { display: ['Syncopate', 'sans-serif'], mono: ['Space Mono', 'monospace'] }","Syncopate's wide stance works well with motion effects."
57,Gen Z Brutal,"Display + Sans",Anton,Epilogue,"brutal, loud, shouty, meme, internet, bold","Gen Z marketing, streetwear, viral campaigns","https://fonts.google.com/share?selection.family=Anton|Epilogue:wght@400;500;600;700","@import url('https://fonts.googleapis.com/css2?family=Anton&family=Epilogue:wght@400;500;600;700&display=swap');","fontFamily: { display: ['Anton', 'sans-serif'], body: ['Epilogue', 'sans-serif'] }","Anton is impactful and condensed. Good for stickers/badges."
```

---

### `.agent/skills/ui-ux-pro-max/data/ui-reasoning.csv`
**Function:** Source code file.

```csv
No,UI_Category,Recommended_Pattern,Style_Priority,Color_Mood,Typography_Mood,Key_Effects,Decision_Rules,Anti_Patterns,Severity
1,SaaS (General),Hero + Features + CTA,Glassmorphism + Flat Design,Trust blue + Accent contrast,Professional + Hierarchy,Subtle hover (200-250ms) + Smooth transitions,"{""if_ux_focused"": ""prioritize-minimalism"", ""if_data_heavy"": ""add-glassmorphism""}",Excessive animation + Dark mode by default,HIGH
2,Micro SaaS,Minimal & Direct + Demo,Flat Design + Vibrant & Block,Vibrant primary + White space,Bold + Clean typography,Large CTA hover (300ms) + Scroll reveal,"{""if_quick_onboarding"": ""reduce-steps"", ""if_demo_available"": ""feature-interactive-demo""}",Complex onboarding flow + Cluttered layout,HIGH
3,E-commerce,Feature-Rich Showcase,Vibrant & Block-based,Brand primary + Success green,Engaging + Clear hierarchy,Card hover lift (200ms) + Scale effect,"{""if_luxury"": ""switch-to-liquid-glass"", ""if_conversion_focused"": ""add-urgency-colors""}",Flat design without depth + Text-heavy pages,HIGH
4,E-commerce Luxury,Feature-Rich Showcase,Liquid Glass + Glassmorphism,Premium colors + Minimal accent,Elegant + Refined typography,Chromatic aberration + Fluid animations (400-600ms),"{""if_checkout"": ""emphasize-trust"", ""if_hero_needed"": ""use-3d-hyperrealism""}",Vibrant & Block-based + Playful colors,HIGH
5,Healthcare App,Social Proof-Focused,Neumorphism + Accessible & Ethical,Calm blue + Health green,Readable + Large type (16px+),Soft box-shadow + Smooth press (150ms),"{""must_have"": ""wcag-aaa-compliance"", ""if_medication"": ""red-alert-colors""}",Bright neon colors + Motion-heavy animations + AI purple/pink gradients,HIGH
6,Fintech/Crypto,Conversion-Optimized,Glassmorphism + Dark Mode (OLED),Dark tech colors + Vibrant accents,Modern + Confident typography,Real-time chart animations + Alert pulse/glow,"{""must_have"": ""security-badges"", ""if_real_time"": ""add-streaming-data""}",Light backgrounds + No security indicators,HIGH
7,Education,Feature-Rich Showcase,Claymorphism + Micro-interactions,Playful colors + Clear hierarchy,Friendly + Engaging typography,Soft press (200ms) + Fluffy elements,"{""if_gamification"": ""add-progress-animation"", ""if_children"": ""increase-playfulness""}",Dark modes + Complex jargon,MEDIUM
8,Portfolio/Personal,Storytelling-Driven,Motion-Driven + Minimalism,Brand primary + Artistic,Expressive + Variable typography,Parallax (3-5 layers) + Scroll-triggered reveals,"{""if_creative_field"": ""add-brutalism"", ""if_minimal_portfolio"": ""reduce-motion""}",Corporate templates + Generic layouts,MEDIUM
9,Government/Public,Minimal & Direct,Accessible & Ethical + Minimalism,Professional blue + High contrast,Clear + Large typography,Clear focus rings (3-4px) + Skip links,"{""must_have"": ""wcag-aaa"", ""must_have"": ""keyboard-navigation""}",Ornate design + Low contrast + Motion effects + AI purple/pink gradients,HIGH
10,Fintech (Banking),Trust & Authority,Minimalism + Accessible & Ethical,Navy + Trust Blue + Gold,Professional + Trustworthy,Smooth state transitions + Number animations,"{""must_have"": ""security-first"", ""if_dashboard"": ""use-dark-mode""}",Playful design + Unclear fees + AI purple/pink gradients,HIGH
11,Social Media App,Feature-Rich Showcase,Vibrant & Block-based + Motion-Driven,Vibrant + Engagement colors,Modern + Bold typography,Large scroll animations + Icon animations,"{""if_engagement_metric"": ""add-motion"", ""if_content_focused"": ""minimize-chrome""}",Heavy skeuomorphism + Accessibility ignored,MEDIUM
12,Startup Landing,Hero-Centric + Trust,Motion-Driven + Vibrant & Block,Bold primaries + Accent contrast,Modern + Energetic typography,Scroll-triggered animations + Parallax,"{""if_pre_launch"": ""use-waitlist-pattern"", ""if_video_ready"": ""add-hero-video""}",Static design + No video + Poor mobile,HIGH
13,Gaming,Feature-Rich Showcase,3D & Hyperrealism + Retro-Futurism,Vibrant + Neon + Immersive,Bold + Impactful typography,WebGL 3D rendering + Glitch effects,"{""if_competitive"": ""add-real-time-stats"", ""if_casual"": ""increase-playfulness""}",Minimalist design + Static assets,HIGH
14,Creative Agency,Storytelling-Driven,Brutalism + Motion-Driven,Bold primaries + Artistic freedom,Bold + Expressive typography,CRT scanlines + Neon glow + Glitch effects,"{""must_have"": ""case-studies"", ""if_boutique"": ""increase-artistic-freedom""}",Corporate minimalism + Hidden portfolio,HIGH
15,Wellness/Mental Health,Social Proof-Focused,Neumorphism + Accessible & Ethical,Calm Pastels + Trust colors,Calming + Readable typography,Soft press + Breathing animations,"{""must_have"": ""privacy-first"", ""if_meditation"": ""add-breathing-animation""}",Bright neon + Motion overload,HIGH
16,Restaurant/Food,Hero-Centric + Conversion,Vibrant & Block-based + Motion-Driven,Warm colors (Orange Red Brown),Appetizing + Clear typography,Food image reveal + Menu hover effects,"{""must_have"": ""high_quality_images"", ""if_delivery"": ""emphasize-speed""}",Low-quality imagery + Outdated hours,HIGH
17,Real Estate,Hero-Centric + Feature-Rich,Glassmorphism + Minimalism,Trust Blue + Gold + White,Professional + Confident,3D property tour zoom + Map hover,"{""if_luxury"": ""add-3d-models"", ""must_have"": ""map-integration""}",Poor photos + No virtual tours,HIGH
18,Travel/Tourism,Storytelling-Driven + Hero,Aurora UI + Motion-Driven,Vibrant destination + Sky Blue,Inspirational + Engaging,Destination parallax + Itinerary animations,"{""if_experience_focused"": ""use-storytelling"", ""must_have"": ""mobile-booking""}",Generic photos + Complex booking,HIGH
19,SaaS Dashboard,Data-Dense Dashboard,Data-Dense + Heat Map,Cool to Hot gradients + Neutral grey,Clear + Readable typography,Hover tooltips + Chart zoom + Real-time pulse,"{""must_have"": ""real-time-updates"", ""if_large_dataset"": ""prioritize-performance""}",Ornate design + Slow rendering,HIGH
20,B2B SaaS Enterprise,Feature-Rich Showcase,Trust & Authority + Minimal,Professional blue + Neutral grey,Formal + Clear typography,Subtle section transitions + Feature reveals,"{""must_have"": ""case-studies"", ""must_have"": ""roi-messaging""}",Playful design + Hidden features + AI purple/pink gradients,HIGH
21,Music/Entertainment,Feature-Rich Showcase,Dark Mode (OLED) + Vibrant & Block-based,Dark (#121212) + Vibrant accents + Album art colors,Modern + Bold typography,Waveform visualization + Playlist animations,"{""must_have"": ""audio-player-ux"", ""if_discovery_focused"": ""add-playlist-recommendations""}",Cluttered layout + Poor audio player UX,HIGH
22,Video Streaming/OTT,Hero-Centric + Feature-Rich,Dark Mode (OLED) + Motion-Driven,Dark bg + Poster colors + Brand accent,Bold + Engaging typography,Video player animations + Content carousel (parallax),"{""must_have"": ""continue-watching"", ""if_personalized"": ""add-recommendations""}",Static layout + Slow video player,HIGH
23,Job Board/Recruitment,Conversion-Optimized + Feature-Rich,Flat Design + Minimalism,Professional Blue + Success Green + Neutral,Clear + Professional typography,Search/filter animations + Application flow,"{""must_have"": ""advanced-search"", ""if_salary_focused"": ""highlight-compensation""}",Outdated forms + Hidden filters,HIGH
24,Marketplace (P2P),Feature-Rich Showcase + Social Proof,Vibrant & Block-based + Flat Design,Trust colors + Category colors + Success green,Modern + Engaging typography,Review star animations + Listing hover effects,"{""must_have"": ""seller-profiles"", ""must_have"": ""secure-payment""}",Low trust signals + Confusing layout,HIGH
25,Logistics/Delivery,Feature-Rich Showcase + Real-Time,Minimalism + Flat Design,Blue (#2563EB) + Orange (tracking) + Green,Clear + Functional typography,Real-time tracking animation + Status pulse,"{""must_have"": ""tracking-map"", ""must_have"": ""delivery-updates""}",Static tracking + No map integration + AI purple/pink gradients,HIGH
26,Agriculture/Farm Tech,Feature-Rich Showcase,Organic Biophilic + Flat Design,Earth Green (#4A7C23) + Brown + Sky Blue,Clear + Informative typography,Data visualization + Weather animations,"{""must_have"": ""sensor-dashboard"", ""if_crop_focused"": ""add-health-indicators""}",Generic design + Ignored accessibility + AI purple/pink gradients,MEDIUM
27,Construction/Architecture,Hero-Centric + Feature-Rich,Minimalism + 3D & Hyperrealism,Grey (#4A4A4A) + Orange (safety) + Blueprint Blue,Professional + Bold typography,3D model viewer + Timeline animations,"{""must_have"": ""project-portfolio"", ""if_team_collaboration"": ""add-real-time-updates""}",2D-only layouts + Poor image quality + AI purple/pink gradients,HIGH
28,Automotive/Car Dealership,Hero-Centric + Feature-Rich,Motion-Driven + 3D & Hyperrealism,Brand colors + Metallic + Dark/Light,Bold + Confident typography,360 product view + Configurator animations,"{""must_have"": ""vehicle-comparison"", ""must_have"": ""financing-calculator""}",Static product pages + Poor UX,HIGH
29,Photography Studio,Storytelling-Driven + Hero-Centric,Motion-Driven + Minimalism,Black + White + Minimal accent,Elegant + Minimal typography,Full-bleed gallery + Before/after reveal,"{""must_have"": ""portfolio-showcase"", ""if_booking"": ""add-calendar-system""}",Heavy text + Poor image showcase,HIGH
30,Coworking Space,Hero-Centric + Feature-Rich,Vibrant & Block-based + Glassmorphism,Energetic colors + Wood tones + Brand,Modern + Engaging typography,Space tour video + Amenity reveal animations,"{""must_have"": ""virtual-tour"", ""must_have"": ""booking-system""}",Outdated photos + Confusing layout,MEDIUM
31,Cleaning Service,Conversion-Optimized + Trust,Soft UI Evolution + Flat Design,Fresh Blue (#00B4D8) + Clean White + Green,Friendly + Clear typography,Before/after gallery + Service package reveal,"{""must_have"": ""price-transparency"", ""must_have"": ""trust-badges""}",Poor before/after imagery + Hidden pricing,HIGH
32,Home Services,Conversion-Optimized + Trust,Flat Design + Trust & Authority,Trust Blue + Safety Orange + Grey,Professional + Clear typography,Emergency contact highlight + Service menu animations,"{""must_have"": ""emergency-contact"", ""must_have"": ""certifications-display""}",Hidden contact info + No certifications,HIGH
33,Childcare/Daycare,Social Proof-Focused + Trust,Claymorphism + Vibrant & Block-based,Playful pastels + Safe colors + Warm,Friendly + Playful typography,Parent portal animations + Activity gallery reveal,"{""must_have"": ""parent-communication"", ""must_have"": ""safety-certifications""}",Generic design + Hidden safety info,HIGH
34,Senior Care/Elderly,Trust & Authority + Accessible,Accessible & Ethical + Soft UI Evolution,Calm Blue + Warm neutrals + Large text,Large + Clear typography (18px+),Large touch targets + Clear navigation,"{""must_have"": ""wcag-aaa"", ""must_have"": ""family-portal""}",Small text + Complex navigation + AI purple/pink gradients,HIGH
35,Medical Clinic,Trust & Authority + Conversion,Accessible & Ethical + Minimalism,Medical Blue (#0077B6) + Trust White,Professional + Readable typography,Online booking flow + Doctor profile reveals,"{""must_have"": ""appointment-booking"", ""must_have"": ""insurance-info""}",Outdated interface + Confusing booking + AI purple/pink gradients,HIGH
36,Pharmacy/Drug Store,Conversion-Optimized + Trust,Flat Design + Accessible & Ethical,Pharmacy Green + Trust Blue + Clean White,Clear + Functional typography,Prescription upload flow + Refill reminders,"{""must_have"": ""prescription-management"", ""must_have"": ""drug-interaction-warnings""}",Confusing layout + Privacy concerns + AI purple/pink gradients,HIGH
37,Dental Practice,Social Proof-Focused + Conversion,Soft UI Evolution + Minimalism,Fresh Blue + White + Smile Yellow,Friendly + Professional typography,Before/after gallery + Patient testimonial carousel,"{""must_have"": ""before-after-gallery"", ""must_have"": ""appointment-system""}",Poor imagery + No testimonials,HIGH
38,Veterinary Clinic,Social Proof-Focused + Trust,Claymorphism + Accessible & Ethical,Caring Blue + Pet colors + Warm,Friendly + Welcoming typography,Pet profile management + Service animations,"{""must_have"": ""pet-portal"", ""must_have"": ""emergency-contact""}",Generic design + Hidden services,MEDIUM
39,News/Media Platform,Hero-Centric + Feature-Rich,Minimalism + Flat Design,Brand colors + High contrast,Clear + Readable typography,Breaking news badge + Article reveal animations,"{""must_have"": ""mobile-first-reading"", ""must_have"": ""category-navigation""}",Cluttered layout + Slow loading,HIGH
40,Legal Services,Trust & Authority + Minimal,Trust & Authority + Minimalism,Navy Blue (#1E3A5F) + Gold + White,Professional + Authoritative typography,Practice area reveal + Attorney profile animations,"{""must_have"": ""case-results"", ""must_have"": ""credential-display""}",Outdated design + Hidden credentials + AI purple/pink gradients,HIGH
41,Beauty/Spa/Wellness Service,Hero-Centric + Social Proof,Soft UI Evolution + Neumorphism,Soft pastels (Pink Sage Cream) + Gold accents,Elegant + Calming typography,Soft shadows + Smooth transitions (200-300ms) + Gentle hover,"{""must_have"": ""booking-system"", ""must_have"": ""before-after-gallery"", ""if_luxury"": ""add-gold-accents""}",Bright neon colors + Harsh animations + Dark mode,HIGH
42,Service Landing Page,Hero-Centric + Trust & Authority,Minimalism + Social Proof-Focused,Brand primary + Trust colors,Professional + Clear typography,Testimonial carousel + CTA hover (200ms),"{""must_have"": ""social-proof"", ""must_have"": ""clear-cta""}",Complex navigation + Hidden contact info,HIGH
43,B2B Service,Feature-Rich Showcase + Trust,Trust & Authority + Minimalism,Professional blue + Neutral grey,Formal + Clear typography,Section transitions + Feature reveals,"{""must_have"": ""case-studies"", ""must_have"": ""roi-messaging""}",Playful design + Hidden credentials + AI purple/pink gradients,HIGH
44,Financial Dashboard,Data-Dense Dashboard,Dark Mode (OLED) + Data-Dense,Dark bg + Red/Green alerts + Trust blue,Clear + Readable typography,Real-time number animations + Alert pulse,"{""must_have"": ""real-time-updates"", ""must_have"": ""high-contrast""}",Light mode default + Slow rendering,HIGH
45,Analytics Dashboard,Data-Dense + Drill-Down,Data-Dense + Heat Map,Cool→Hot gradients + Neutral grey,Clear + Functional typography,Hover tooltips + Chart zoom + Filter animations,"{""must_have"": ""data-export"", ""if_large_dataset"": ""virtualize-lists""}",Ornate design + No filtering,HIGH
46,Productivity Tool,Interactive Demo + Feature-Rich,Flat Design + Micro-interactions,Clear hierarchy + Functional colors,Clean + Efficient typography,Quick actions (150ms) + Task animations,"{""must_have"": ""keyboard-shortcuts"", ""if_collaboration"": ""add-real-time-cursors""}",Complex onboarding + Slow performance,HIGH
47,Design System/Component Library,Feature-Rich + Documentation,Minimalism + Accessible & Ethical,Clear hierarchy + Code-like structure,Monospace + Clear typography,Code copy animations + Component previews,"{""must_have"": ""search"", ""must_have"": ""code-examples""}",Poor documentation + No live preview,HIGH
48,AI/Chatbot Platform,Interactive Demo + Minimal,AI-Native UI + Minimalism,Neutral + AI Purple (#6366F1),Modern + Clear typography,Streaming text + Typing indicators + Fade-in,"{""must_have"": ""conversational-ui"", ""must_have"": ""context-awareness""}",Heavy chrome + Slow response feedback,HIGH
49,NFT/Web3 Platform,Feature-Rich Showcase,Cyberpunk UI + Glassmorphism,Dark + Neon + Gold (#FFD700),Bold + Modern typography,Wallet connect animations + Transaction feedback,"{""must_have"": ""wallet-integration"", ""must_have"": ""gas-fees-display""}",Light mode default + No transaction status,HIGH
50,Creator Economy Platform,Social Proof + Feature-Rich,Vibrant & Block-based + Bento Box Grid,Vibrant + Brand colors,Modern + Bold typography,Engagement counter animations + Profile reveals,"{""must_have"": ""creator-profiles"", ""must_have"": ""monetization-display""}",Generic layout + Hidden earnings,MEDIUM
51,Sustainability/ESG Platform,Trust & Authority + Data,Organic Biophilic + Minimalism,Green (#228B22) + Earth tones,Clear + Informative typography,Progress indicators + Impact animations,"{""must_have"": ""data-transparency"", ""must_have"": ""certification-badges""}",Greenwashing visuals + No data,HIGH
52,Remote Work/Collaboration,Feature-Rich + Real-Time,Soft UI Evolution + Minimalism,Calm Blue + Neutral grey,Clean + Readable typography,Real-time presence indicators + Notification badges,"{""must_have"": ""status-indicators"", ""must_have"": ""video-integration""}",Cluttered interface + No presence,HIGH
53,Pet Tech App,Storytelling + Feature-Rich,Claymorphism + Vibrant & Block-based,Playful + Warm colors,Friendly + Playful typography,Pet profile animations + Health tracking charts,"{""must_have"": ""pet-profiles"", ""if_health"": ""add-vet-integration""}",Generic design + No personality,MEDIUM
54,Smart Home/IoT Dashboard,Real-Time Monitoring,Glassmorphism + Dark Mode (OLED),Dark + Status indicator colors,Clear + Functional typography,Device status pulse + Quick action animations,"{""must_have"": ""real-time-controls"", ""must_have"": ""energy-monitoring""}",Slow updates + No automation,HIGH
55,EV/Charging Ecosystem,Hero-Centric + Feature-Rich,Minimalism + Aurora UI,Electric Blue (#009CD1) + Green,Modern + Clear typography,Range estimation animations + Map interactions,"{""must_have"": ""charging-map"", ""must_have"": ""range-calculator""}",Poor map UX + Hidden costs,HIGH
56,Subscription Box Service,Feature-Rich + Conversion,Vibrant & Block-based + Motion-Driven,Brand + Excitement colors,Engaging + Clear typography,Unboxing reveal animations + Product carousel,"{""must_have"": ""personalization-quiz"", ""must_have"": ""subscription-management""}",Confusing pricing + No unboxing preview,HIGH
57,Podcast Platform,Storytelling + Feature-Rich,Dark Mode (OLED) + Minimalism,Dark + Audio waveform accents,Modern + Clear typography,Waveform visualizations + Episode transitions,"{""must_have"": ""audio-player-ux"", ""must_have"": ""episode-discovery""}",Poor audio player + Cluttered layout,HIGH
58,Dating App,Social Proof + Feature-Rich,Vibrant & Block-based + Motion-Driven,Warm + Romantic (Pink/Red gradients),Modern + Friendly typography,Profile card swipe + Match animations,"{""must_have"": ""profile-cards"", ""must_have"": ""safety-features""}",Generic profiles + No safety,HIGH
59,Micro-Credentials/Badges,Trust & Authority + Feature,Minimalism + Flat Design,Trust Blue + Gold (#FFD700),Professional + Clear typography,Badge reveal animations + Progress tracking,"{""must_have"": ""credential-verification"", ""must_have"": ""progress-display""}",No verification + Hidden progress,MEDIUM
60,Knowledge Base/Documentation,FAQ + Minimal,Minimalism + Accessible & Ethical,Clean hierarchy + Minimal color,Clear + Readable typography,Search highlight + Smooth scrolling,"{""must_have"": ""search-first"", ""must_have"": ""version-switching""}",Poor navigation + No search,HIGH
61,Hyperlocal Services,Conversion + Feature-Rich,Minimalism + Vibrant & Block-based,Location markers + Trust colors,Clear + Functional typography,Map hover + Provider card reveals,"{""must_have"": ""map-integration"", ""must_have"": ""booking-system""}",No map + Hidden reviews,HIGH
62,Luxury/Premium Brand,Storytelling + Feature-Rich,Liquid Glass + Glassmorphism,Black + Gold (#FFD700) + White,Elegant + Refined typography,Slow parallax + Premium reveals (400-600ms),"{""must_have"": ""high-quality-imagery"", ""must_have"": ""storytelling""}",Cheap visuals + Fast animations,HIGH
63,Fitness/Gym App,Feature-Rich + Data,Vibrant & Block-based + Dark Mode (OLED),Energetic (Orange #FF6B35) + Dark bg,Bold + Motivational typography,Progress ring animations + Achievement unlocks,"{""must_have"": ""progress-tracking"", ""must_have"": ""workout-plans""}",Static design + No gamification,HIGH
64,Hotel/Hospitality,Hero-Centric + Social Proof,Liquid Glass + Minimalism,Warm neutrals + Gold (#D4AF37),Elegant + Welcoming typography,Room gallery + Amenity reveals,"{""must_have"": ""room-booking"", ""must_have"": ""virtual-tour""}",Poor photos + Complex booking,HIGH
65,Wedding/Event Planning,Storytelling + Social Proof,Soft UI Evolution + Aurora UI,Soft Pink (#FFD6E0) + Gold + Cream,Elegant + Romantic typography,Gallery reveals + Timeline animations,"{""must_have"": ""portfolio-gallery"", ""must_have"": ""planning-tools""}",Generic templates + No portfolio,HIGH
66,Insurance Platform,Conversion + Trust,Trust & Authority + Flat Design,Trust Blue (#0066CC) + Green + Neutral,Clear + Professional typography,Quote calculator animations + Policy comparison,"{""must_have"": ""quote-calculator"", ""must_have"": ""policy-comparison""}",Confusing pricing + No trust signals + AI purple/pink gradients,HIGH
67,Banking/Traditional Finance,Trust & Authority + Feature,Minimalism + Accessible & Ethical,Navy (#0A1628) + Trust Blue + Gold,Professional + Trustworthy typography,Smooth number animations + Security indicators,"{""must_have"": ""security-first"", ""must_have"": ""accessibility""}",Playful design + Poor security UX + AI purple/pink gradients,HIGH
68,Online Course/E-learning,Feature-Rich + Social Proof,Claymorphism + Vibrant & Block-based,Vibrant learning colors + Progress green,Friendly + Engaging typography,Progress bar animations + Certificate reveals,"{""must_have"": ""progress-tracking"", ""must_have"": ""video-player""}",Boring design + No gamification,HIGH
69,Non-profit/Charity,Storytelling + Trust,Accessible & Ethical + Organic Biophilic,Cause-related colors + Trust + Warm,Heartfelt + Readable typography,Impact counter animations + Story reveals,"{""must_have"": ""impact-stories"", ""must_have"": ""donation-transparency""}",No impact data + Hidden financials,HIGH
70,Florist/Plant Shop,Hero-Centric + Conversion,Organic Biophilic + Vibrant & Block-based,Natural Green + Floral pinks/purples,Elegant + Natural typography,Product reveal + Seasonal transitions,"{""must_have"": ""delivery-scheduling"", ""must_have"": ""care-guides""}",Poor imagery + No seasonal content,MEDIUM
71,Bakery/Cafe,Hero-Centric + Conversion,Vibrant & Block-based + Soft UI Evolution,Warm Brown + Cream + Appetizing accents,Warm + Inviting typography,Menu hover + Order animations,"{""must_have"": ""menu-display"", ""must_have"": ""online-ordering""}",Poor food photos + Hidden hours,HIGH
72,Coffee Shop,Hero-Centric + Minimal,Minimalism + Organic Biophilic,Coffee Brown (#6F4E37) + Cream + Warm,Cozy + Clean typography,Menu transitions + Loyalty animations,"{""must_have"": ""menu"", ""if_loyalty"": ""add-rewards-system""}",Generic design + No atmosphere,MEDIUM
73,Brewery/Winery,Storytelling + Hero-Centric,Motion-Driven + Storytelling-Driven,Deep amber/burgundy + Gold + Craft,Artisanal + Heritage typography,Tasting note reveals + Heritage timeline,"{""must_have"": ""product-showcase"", ""must_have"": ""story-heritage""}",Generic product pages + No story,HIGH
74,Airline,Conversion + Feature-Rich,Minimalism + Glassmorphism,Sky Blue + Brand colors + Trust,Clear + Professional typography,Flight search animations + Boarding pass reveals,"{""must_have"": ""flight-search"", ""must_have"": ""mobile-first""}",Complex booking + Poor mobile,HIGH
75,Magazine/Blog,Storytelling + Hero-Centric,Swiss Modernism 2.0 + Motion-Driven,Editorial colors + Brand + Clean white,Editorial + Elegant typography,Article transitions + Category reveals,"{""must_have"": ""article-showcase"", ""must_have"": ""newsletter-signup""}",Poor typography + Slow loading,HIGH
76,Freelancer Platform,Feature-Rich + Conversion,Flat Design + Minimalism,Professional Blue + Success Green,Clear + Professional typography,Skill match animations + Review reveals,"{""must_have"": ""portfolio-display"", ""must_have"": ""skill-matching""}",Poor profiles + No reviews,HIGH
77,Consulting Firm,Trust & Authority + Minimal,Trust & Authority + Minimalism,Navy + Gold + Professional grey,Authoritative + Clear typography,Case study reveals + Team profiles,"{""must_have"": ""case-studies"", ""must_have"": ""thought-leadership""}",Generic content + No credentials + AI purple/pink gradients,HIGH
78,Marketing Agency,Storytelling + Feature-Rich,Brutalism + Motion-Driven,Bold brand colors + Creative freedom,Bold + Expressive typography,Portfolio reveals + Results animations,"{""must_have"": ""portfolio"", ""must_have"": ""results-metrics""}",Boring design + Hidden work,HIGH
79,Event Management,Hero-Centric + Feature-Rich,Vibrant & Block-based + Motion-Driven,Event theme colors + Excitement accents,Bold + Engaging typography,Countdown timer + Registration flow,"{""must_have"": ""registration"", ""must_have"": ""agenda-display""}",Confusing registration + No countdown,HIGH
80,Conference/Webinar Platform,Feature-Rich + Conversion,Glassmorphism + Minimalism,Professional Blue + Video accent,Professional + Clear typography,Live stream integration + Agenda transitions,"{""must_have"": ""registration"", ""must_have"": ""speaker-profiles""}",Poor video UX + No networking,HIGH
81,Membership/Community,Social Proof + Conversion,Vibrant & Block-based + Soft UI Evolution,Community brand colors + Engagement,Friendly + Engaging typography,Member counter + Benefit reveals,"{""must_have"": ""member-benefits"", ""must_have"": ""pricing-tiers""}",Hidden benefits + No community proof,HIGH
82,Newsletter Platform,Minimal + Conversion,Minimalism + Flat Design,Brand primary + Clean white + CTA,Clean + Readable typography,Subscribe form + Archive reveals,"{""must_have"": ""subscribe-form"", ""must_have"": ""sample-content""}",Complex signup + No preview,MEDIUM
83,Digital Products/Downloads,Feature-Rich + Conversion,Vibrant & Block-based + Motion-Driven,Product colors + Brand + Success green,Modern + Clear typography,Product preview + Instant delivery animations,"{""must_have"": ""product-preview"", ""must_have"": ""instant-delivery""}",No preview + Slow delivery,HIGH
84,Church/Religious Organization,Hero-Centric + Social Proof,Accessible & Ethical + Soft UI Evolution,Warm Gold + Deep Purple/Blue + White,Welcoming + Clear typography,Service time highlights + Event calendar,"{""must_have"": ""service-times"", ""must_have"": ""community-events""}",Outdated design + Hidden info,MEDIUM
85,Sports Team/Club,Hero-Centric + Feature-Rich,Vibrant & Block-based + Motion-Driven,Team colors + Energetic accents,Bold + Impactful typography,Score animations + Schedule reveals,"{""must_have"": ""schedule"", ""must_have"": ""roster""}",Static content + Poor fan engagement,HIGH
86,Museum/Gallery,Storytelling + Feature-Rich,Minimalism + Motion-Driven,Art-appropriate neutrals + Exhibition accents,Elegant + Minimal typography,Virtual tour + Collection reveals,"{""must_have"": ""virtual-tour"", ""must_have"": ""exhibition-info""}",Cluttered layout + No online access,HIGH
87,Theater/Cinema,Hero-Centric + Conversion,Dark Mode (OLED) + Motion-Driven,Dark + Spotlight accents + Gold,Dramatic + Bold typography,Seat selection + Trailer reveals,"{""must_have"": ""showtimes"", ""must_have"": ""seat-selection""}",Poor booking UX + No trailers,HIGH
88,Language Learning App,Feature-Rich + Social Proof,Claymorphism + Vibrant & Block-based,Playful colors + Progress indicators,Friendly + Clear typography,Progress animations + Achievement unlocks,"{""must_have"": ""progress-tracking"", ""must_have"": ""gamification""}",Boring design + No motivation,HIGH
89,Coding Bootcamp,Feature-Rich + Social Proof,Dark Mode (OLED) + Minimalism,Code editor colors + Brand + Success,Technical + Clear typography,Terminal animations + Career outcome reveals,"{""must_have"": ""curriculum"", ""must_have"": ""career-outcomes""}",Light mode only + Hidden results,HIGH
90,Cybersecurity Platform,Trust & Authority + Real-Time,Cyberpunk UI + Dark Mode (OLED),Matrix Green (#00FF00) + Deep Black,Technical + Clear typography,Threat visualization + Alert animations,"{""must_have"": ""real-time-monitoring"", ""must_have"": ""threat-display""}",Light mode + Poor data viz,HIGH
91,Developer Tool/IDE,Minimal + Documentation,Dark Mode (OLED) + Minimalism,Dark syntax theme + Blue focus,Monospace + Functional typography,Syntax highlighting + Command palette,"{""must_have"": ""keyboard-shortcuts"", ""must_have"": ""documentation""}",Light mode default + Slow performance,HIGH
92,Biotech/Life Sciences,Storytelling + Data,Glassmorphism + Clean Science,Sterile White + DNA Blue + Life Green,Scientific + Clear typography,Data visualization + Research reveals,"{""must_have"": ""data-accuracy"", ""must_have"": ""clean-aesthetic""}",Cluttered data + Poor credibility,HIGH
93,Space Tech/Aerospace,Immersive + Feature-Rich,Holographic/HUD + Dark Mode,Deep Space Black + Star White + Metallic,Futuristic + Precise typography,Telemetry animations + 3D renders,"{""must_have"": ""high-tech-feel"", ""must_have"": ""precision-data""}",Generic design + No immersion,HIGH
94,Architecture/Interior,Portfolio + Hero-Centric,Exaggerated Minimalism + High Imagery,Monochrome + Gold Accent + High Imagery,Architectural + Elegant typography,Project gallery + Blueprint reveals,"{""must_have"": ""high-res-images"", ""must_have"": ""project-portfolio""}",Poor imagery + Cluttered layout,HIGH
95,Quantum Computing,Immersive + Interactive,Holographic/HUD + Dark Mode,Quantum Blue (#00FFFF) + Deep Black,Futuristic + Scientific typography,Probability visualizations + Qubit state animations,"{""must_have"": ""complexity-visualization"", ""must_have"": ""scientific-credibility""}",Generic tech design + No viz,HIGH
96,Biohacking/Longevity App,Data-Dense + Storytelling,Biomimetic/Organic 2.0 + Minimalism,Cellular Pink/Red + DNA Blue + White,Scientific + Clear typography,Biological data viz + Progress animations,"{""must_have"": ""data-privacy"", ""must_have"": ""scientific-credibility""}",Generic health app + No privacy,HIGH
97,Autonomous Drone Fleet,Real-Time + Feature-Rich,HUD/Sci-Fi FUI + Real-Time,Tactical Green + Alert Red + Map Dark,Technical + Functional typography,Telemetry animations + 3D spatial awareness,"{""must_have"": ""real-time-telemetry"", ""must_have"": ""safety-alerts""}",Slow updates + Poor spatial viz,HIGH
98,Generative Art Platform,Showcase + Feature-Rich,Minimalism + Gen Z Chaos,Neutral (#F5F5F5) + User Content,Minimal + Content-focused typography,Gallery masonry + Minting animations,"{""must_have"": ""fast-loading"", ""must_have"": ""creator-attribution""}",Heavy chrome + Slow loading,HIGH
99,Spatial Computing OS,Immersive + Interactive,Spatial UI (VisionOS) + Glassmorphism,Frosted Glass + System Colors + Depth,Spatial + Readable typography,Depth hierarchy + Gaze interactions,"{""must_have"": ""depth-hierarchy"", ""must_have"": ""environment-awareness""}",2D design + No spatial depth,HIGH
100,Sustainable Energy/Climate,Data + Trust,Organic Biophilic + E-Ink/Paper,Earth Green + Sky Blue + Solar Yellow,Clear + Informative typography,Impact viz + Progress animations,"{""must_have"": ""data-transparency"", ""must_have"": ""impact-visualization""}",Greenwashing + No real data,HIGH

```

---

### `.agent/skills/ui-ux-pro-max/data/ux-guidelines.csv`
**Function:** Source code file.

```csv
No,Category,Issue,Platform,Description,Do,Don't,Code Example Good,Code Example Bad,Severity
1,Navigation,Smooth Scroll,Web,Anchor links should scroll smoothly to target section,Use scroll-behavior: smooth on html element,Jump directly without transition,html { scroll-behavior: smooth; },<a href='#section'> without CSS,High
2,Navigation,Sticky Navigation,Web,Fixed nav should not obscure content,Add padding-top to body equal to nav height,Let nav overlap first section content,pt-20 (if nav is h-20),No padding compensation,Medium
3,Navigation,Active State,All,Current page/section should be visually indicated,Highlight active nav item with color/underline,No visual feedback on current location,text-primary border-b-2,All links same style,Medium
4,Navigation,Back Button,Mobile,Users expect back to work predictably,Preserve navigation history properly,Break browser/app back button behavior,history.pushState(),location.replace(),High
5,Navigation,Deep Linking,All,URLs should reflect current state for sharing,Update URL on state/view changes,Static URLs for dynamic content,Use query params or hash,Single URL for all states,Medium
6,Navigation,Breadcrumbs,Web,Show user location in site hierarchy,Use for sites with 3+ levels of depth,Use for flat single-level sites,Home > Category > Product,Only on deep nested pages,Low
7,Animation,Excessive Motion,All,Too many animations cause distraction and motion sickness,Animate 1-2 key elements per view maximum,Animate everything that moves,Single hero animation,animate-bounce on 5+ elements,High
8,Animation,Duration Timing,All,Animations should feel responsive not sluggish,Use 150-300ms for micro-interactions,Use animations longer than 500ms for UI,transition-all duration-200,duration-1000,Medium
9,Animation,Reduced Motion,All,Respect user's motion preferences,Check prefers-reduced-motion media query,Ignore accessibility motion settings,@media (prefers-reduced-motion: reduce),No motion query check,High
10,Animation,Loading States,All,Show feedback during async operations,Use skeleton screens or spinners,Leave UI frozen with no feedback,animate-pulse skeleton,Blank screen while loading,High
11,Animation,Hover vs Tap,All,Hover effects don't work on touch devices,Use click/tap for primary interactions,Rely only on hover for important actions,onClick handler,onMouseEnter only,High
12,Animation,Continuous Animation,All,Infinite animations are distracting,Use for loading indicators only,Use for decorative elements,animate-spin on loader,animate-bounce on icons,Medium
13,Animation,Transform Performance,Web,Some CSS properties trigger expensive repaints,Use transform and opacity for animations,Animate width/height/top/left properties,transform: translateY(),top: 10px animation,Medium
14,Animation,Easing Functions,All,Linear motion feels robotic,Use ease-out for entering ease-in for exiting,Use linear for UI transitions,ease-out,linear,Low
15,Layout,Z-Index Management,Web,Stacking context conflicts cause hidden elements,Define z-index scale system (10 20 30 50),Use arbitrary large z-index values,z-10 z-20 z-50,z-[9999],High
16,Layout,Overflow Hidden,Web,Hidden overflow can clip important content,Test all content fits within containers,Blindly apply overflow-hidden,overflow-auto with scroll,overflow-hidden truncating content,Medium
17,Layout,Fixed Positioning,Web,Fixed elements can overlap or be inaccessible,Account for safe areas and other fixed elements,Stack multiple fixed elements carelessly,Fixed nav + fixed bottom with gap,Multiple overlapping fixed elements,Medium
18,Layout,Stacking Context,Web,New stacking contexts reset z-index,Understand what creates new stacking context,Expect z-index to work across contexts,Parent with z-index isolates children,z-index: 9999 not working,Medium
19,Layout,Content Jumping,Web,Layout shift when content loads is jarring,Reserve space for async content,Let images/content push layout around,aspect-ratio or fixed height,No dimensions on images,High
20,Layout,Viewport Units,Web,100vh can be problematic on mobile browsers,Use dvh or account for mobile browser chrome,Use 100vh for full-screen mobile layouts,min-h-dvh or min-h-screen,h-screen on mobile,Medium
21,Layout,Container Width,Web,Content too wide is hard to read,Limit max-width for text content (65-75ch),Let text span full viewport width,max-w-prose or max-w-3xl,Full width paragraphs,Medium
22,Touch,Touch Target Size,Mobile,Small buttons are hard to tap accurately,Minimum 44x44px touch targets,Tiny clickable areas,min-h-[44px] min-w-[44px],w-6 h-6 buttons,High
23,Touch,Touch Spacing,Mobile,Adjacent touch targets need adequate spacing,Minimum 8px gap between touch targets,Tightly packed clickable elements,gap-2 between buttons,gap-0 or gap-1,Medium
24,Touch,Gesture Conflicts,Mobile,Custom gestures can conflict with system,Avoid horizontal swipe on main content,Override system gestures,Vertical scroll primary,Horizontal swipe carousel only,Medium
25,Touch,Tap Delay,Mobile,300ms tap delay feels laggy,Use touch-action CSS or fastclick,Default mobile tap handling,touch-action: manipulation,No touch optimization,Medium
26,Touch,Pull to Refresh,Mobile,Accidental refresh is frustrating,Disable where not needed,Enable by default everywhere,overscroll-behavior: contain,Default overscroll,Low
27,Touch,Haptic Feedback,Mobile,Tactile feedback improves interaction feel,Use for confirmations and important actions,Overuse vibration feedback,navigator.vibrate(10),Vibrate on every tap,Low
28,Interaction,Focus States,All,Keyboard users need visible focus indicators,Use visible focus rings on interactive elements,Remove focus outline without replacement,focus:ring-2 focus:ring-blue-500,outline-none without alternative,High
29,Interaction,Hover States,Web,Visual feedback on interactive elements,Change cursor and add subtle visual change,No hover feedback on clickable elements,hover:bg-gray-100 cursor-pointer,No hover style,Medium
30,Interaction,Active States,All,Show immediate feedback on press/click,Add pressed/active state visual change,No feedback during interaction,active:scale-95,No active state,Medium
31,Interaction,Disabled States,All,Clearly indicate non-interactive elements,Reduce opacity and change cursor,Confuse disabled with normal state,opacity-50 cursor-not-allowed,Same style as enabled,Medium
32,Interaction,Loading Buttons,All,Prevent double submission during async actions,Disable button and show loading state,Allow multiple clicks during processing,disabled={loading} spinner,Button clickable while loading,High
33,Interaction,Error Feedback,All,Users need to know when something fails,Show clear error messages near problem,Silent failures with no feedback,Red border + error message,No indication of error,High
34,Interaction,Success Feedback,All,Confirm successful actions to users,Show success message or visual change,No confirmation of completed action,Toast notification or checkmark,Action completes silently,Medium
35,Interaction,Confirmation Dialogs,All,Prevent accidental destructive actions,Confirm before delete/irreversible actions,Delete without confirmation,Are you sure modal,Direct delete on click,High
36,Accessibility,Color Contrast,All,Text must be readable against background,Minimum 4.5:1 ratio for normal text,Low contrast text,#333 on white (7:1),#999 on white (2.8:1),High
37,Accessibility,Color Only,All,Don't convey information by color alone,Use icons/text in addition to color,Red/green only for error/success,Red text + error icon,Red border only for error,High
38,Accessibility,Alt Text,All,Images need text alternatives,Descriptive alt text for meaningful images,Empty or missing alt attributes,alt='Dog playing in park',alt='' for content images,High
39,Accessibility,Heading Hierarchy,Web,Screen readers use headings for navigation,Use sequential heading levels h1-h6,Skip heading levels or misuse for styling,h1 then h2 then h3,h1 then h4,Medium
40,Accessibility,ARIA Labels,All,Interactive elements need accessible names,Add aria-label for icon-only buttons,Icon buttons without labels,aria-label='Close menu',<button><Icon/></button>,High
41,Accessibility,Keyboard Navigation,Web,All functionality accessible via keyboard,Tab order matches visual order,Keyboard traps or illogical tab order,tabIndex for custom order,Unreachable elements,High
42,Accessibility,Screen Reader,All,Content should make sense when read aloud,Use semantic HTML and ARIA properly,Div soup with no semantics,<nav> <main> <article>,<div> for everything,Medium
43,Accessibility,Form Labels,All,Inputs must have associated labels,Use label with for attribute or wrap input,Placeholder-only inputs,<label for='email'>,placeholder='Email' only,High
44,Accessibility,Error Messages,All,Error messages must be announced,Use aria-live or role=alert for errors,Visual-only error indication,role='alert',Red border only,High
45,Accessibility,Skip Links,Web,Allow keyboard users to skip navigation,Provide skip to main content link,No skip link on nav-heavy pages,Skip to main content link,100 tabs to reach content,Medium
46,Performance,Image Optimization,All,Large images slow page load,Use appropriate size and format (WebP),Unoptimized full-size images,srcset with multiple sizes,4000px image for 400px display,High
47,Performance,Lazy Loading,All,Load content as needed,Lazy load below-fold images and content,Load everything upfront,loading='lazy',All images eager load,Medium
48,Performance,Code Splitting,Web,Large bundles slow initial load,Split code by route/feature,Single large bundle,dynamic import(),All code in main bundle,Medium
49,Performance,Caching,Web,Repeat visits should be fast,Set appropriate cache headers,No caching strategy,Cache-Control headers,Every request hits server,Medium
50,Performance,Font Loading,Web,Web fonts can block rendering,Use font-display swap or optional,Invisible text during font load,font-display: swap,FOIT (Flash of Invisible Text),Medium
51,Performance,Third Party Scripts,Web,External scripts can block rendering,Load non-critical scripts async/defer,Synchronous third-party scripts,async or defer attribute,<script src='...'> in head,Medium
52,Performance,Bundle Size,Web,Large JavaScript slows interaction,Monitor and minimize bundle size,Ignore bundle size growth,Bundle analyzer,No size monitoring,Medium
53,Performance,Render Blocking,Web,CSS/JS can block first paint,Inline critical CSS defer non-critical,Large blocking CSS files,Critical CSS inline,All CSS in head,Medium
54,Forms,Input Labels,All,Every input needs a visible label,Always show label above or beside input,Placeholder as only label,<label>Email</label><input>,placeholder='Email' only,High
55,Forms,Error Placement,All,Errors should appear near the problem,Show error below related input,Single error message at top of form,Error under each field,All errors at form top,Medium
56,Forms,Inline Validation,All,Validate as user types or on blur,Validate on blur for most fields,Validate only on submit,onBlur validation,Submit-only validation,Medium
57,Forms,Input Types,All,Use appropriate input types,Use email tel number url etc,Text input for everything,type='email',type='text' for email,Medium
58,Forms,Autofill Support,Web,Help browsers autofill correctly,Use autocomplete attribute properly,Block or ignore autofill,autocomplete='email',autocomplete='off' everywhere,Medium
59,Forms,Required Indicators,All,Mark required fields clearly,Use asterisk or (required) text,No indication of required fields,* required indicator,Guess which are required,Medium
60,Forms,Password Visibility,All,Let users see password while typing,Toggle to show/hide password,No visibility toggle,Show/hide password button,Password always hidden,Medium
61,Forms,Submit Feedback,All,Confirm form submission status,Show loading then success/error state,No feedback after submit,Loading -> Success message,Button click with no response,High
62,Forms,Input Affordance,All,Inputs should look interactive,Use distinct input styling,Inputs that look like plain text,Border/background on inputs,Borderless inputs,Medium
63,Forms,Mobile Keyboards,Mobile,Show appropriate keyboard for input type,Use inputmode attribute,Default keyboard for all inputs,inputmode='numeric',Text keyboard for numbers,Medium
64,Responsive,Mobile First,Web,Design for mobile then enhance for larger,Start with mobile styles then add breakpoints,Desktop-first causing mobile issues,Default mobile + md: lg: xl:,Desktop default + max-width queries,Medium
65,Responsive,Breakpoint Testing,Web,Test at all common screen sizes,Test at 320 375 414 768 1024 1440,Only test on your device,Multiple device testing,Single device development,Medium
66,Responsive,Touch Friendly,Web,Mobile layouts need touch-sized targets,Increase touch targets on mobile,Same tiny buttons on mobile,Larger buttons on mobile,Desktop-sized targets on mobile,High
67,Responsive,Readable Font Size,All,Text must be readable on all devices,Minimum 16px body text on mobile,Tiny text on mobile,text-base or larger,text-xs for body text,High
68,Responsive,Viewport Meta,Web,Set viewport for mobile devices,Use width=device-width initial-scale=1,Missing or incorrect viewport,<meta name='viewport'...>,No viewport meta tag,High
69,Responsive,Horizontal Scroll,Web,Avoid horizontal scrolling,Ensure content fits viewport width,Content wider than viewport,max-w-full overflow-x-hidden,Horizontal scrollbar on mobile,High
70,Responsive,Image Scaling,Web,Images should scale with container,Use max-width: 100% on images,Fixed width images overflow,max-w-full h-auto,width='800' fixed,Medium
71,Responsive,Table Handling,Web,Tables can overflow on mobile,Use horizontal scroll or card layout,Wide tables breaking layout,overflow-x-auto wrapper,Table overflows viewport,Medium
72,Typography,Line Height,All,Adequate line height improves readability,Use 1.5-1.75 for body text,Cramped or excessive line height,leading-relaxed (1.625),leading-none (1),Medium
73,Typography,Line Length,Web,Long lines are hard to read,Limit to 65-75 characters per line,Full-width text on large screens,max-w-prose,Full viewport width text,Medium
74,Typography,Font Size Scale,All,Consistent type hierarchy aids scanning,Use consistent modular scale,Random font sizes,Type scale (12 14 16 18 24 32),Arbitrary sizes,Medium
75,Typography,Font Loading,Web,Fonts should load without layout shift,Reserve space with fallback font,Layout shift when fonts load,font-display: swap + similar fallback,No fallback font,Medium
76,Typography,Contrast Readability,All,Body text needs good contrast,Use darker text on light backgrounds,Gray text on gray background,text-gray-900 on white,text-gray-400 on gray-100,High
77,Typography,Heading Clarity,All,Headings should stand out from body,Clear size/weight difference,Headings similar to body text,Bold + larger size,Same size as body,Medium
78,Feedback,Loading Indicators,All,Show system status during waits,Show spinner/skeleton for operations > 300ms,No feedback during loading,Skeleton or spinner,Frozen UI,High
79,Feedback,Empty States,All,Guide users when no content exists,Show helpful message and action,Blank empty screens,No items yet. Create one!,Empty white space,Medium
80,Feedback,Error Recovery,All,Help users recover from errors,Provide clear next steps,Error without recovery path,Try again button + help link,Error message only,Medium
81,Feedback,Progress Indicators,All,Show progress for multi-step processes,Step indicators or progress bar,No indication of progress,Step 2 of 4 indicator,No step information,Medium
82,Feedback,Toast Notifications,All,Transient messages for non-critical info,Auto-dismiss after 3-5 seconds,Toasts that never disappear,Auto-dismiss toast,Persistent toast,Medium
83,Feedback,Confirmation Messages,All,Confirm successful actions,Brief success message,Silent success,Saved successfully toast,No confirmation,Medium
84,Content,Truncation,All,Handle long content gracefully,Truncate with ellipsis and expand option,Overflow or broken layout,line-clamp-2 with expand,Overflow or cut off,Medium
85,Content,Date Formatting,All,Use locale-appropriate date formats,Use relative or locale-aware dates,Ambiguous date formats,2 hours ago or locale format,01/02/03,Low
86,Content,Number Formatting,All,Format large numbers for readability,Use thousand separators or abbreviations,Long unformatted numbers,"1.2K or 1,234",1234567,Low
87,Content,Placeholder Content,All,Show realistic placeholders during dev,Use realistic sample data,Lorem ipsum everywhere,Real sample content,Lorem ipsum,Low
88,Onboarding,User Freedom,All,Users should be able to skip tutorials,Provide Skip and Back buttons,Force linear unskippable tour,Skip Tutorial button,Locked overlay until finished,Medium
89,Search,Autocomplete,Web,Help users find results faster,Show predictions as user types,Require full type and enter,Debounced fetch + dropdown,No suggestions,Medium
90,Search,No Results,Web,Dead ends frustrate users,Show 'No results' with suggestions,Blank screen or '0 results',Try searching for X instead,No results found.,Medium
91,Data Entry,Bulk Actions,Web,Editing one by one is tedious,Allow multi-select and bulk edit,Single row actions only,Checkbox column + Action bar,Repeated actions per row,Low
92,AI Interaction,Disclaimer,All,Users need to know they talk to AI,Clearly label AI generated content,Present AI as human,AI Assistant label,Fake human name without label,High
93,AI Interaction,Streaming,All,Waiting for full text is slow,Stream text response token by token,Show loading spinner for 10s+,Typewriter effect,Spinner until 100% complete,Medium
94,Spatial UI,Gaze Hover,VisionOS,Elements should respond to eye tracking before pinch,Scale/highlight element on look,Static element until pinch,hoverEffect(),onTap only,High
95,Spatial UI,Depth Layering,VisionOS,UI needs Z-depth to separate content from environment,Use glass material and z-offset,Flat opaque panels blocking view,.glassBackgroundEffect(),bg-white,Medium
96,Sustainability,Auto-Play Video,Web,Video consumes massive data and energy,Click-to-play or pause when off-screen,Auto-play high-res video loops,playsInline muted preload='none',autoplay loop,Medium
97,Sustainability,Asset Weight,Web,Heavy 3D/Image assets increase carbon footprint,Compress and lazy load 3D models,Load 50MB textures,Draco compression,Raw .obj files,Medium
98,AI Interaction,Feedback Loop,All,AI needs user feedback to improve,Thumps up/down or 'Regenerate',Static output only,Feedback component,Read-only text,Low
99,Accessibility,Motion Sensitivity,All,Parallax/Scroll-jacking causes nausea,Respect prefers-reduced-motion,Force scroll effects,@media (prefers-reduced-motion),ScrollTrigger.create(),High
```

---

### `.agent/skills/ui-ux-pro-max/data/web-interface.csv`
**Function:** Source code file.

```csv
No,Category,Issue,Keywords,Platform,Description,Do,Don't,Code Example Good,Code Example Bad,Severity
1,Accessibility,Icon Button Labels,icon button aria-label,Web,Icon-only buttons must have accessible names,Add aria-label to icon buttons,Icon button without label,"<button aria-label='Close'><XIcon /></button>","<button><XIcon /></button>",Critical
2,Accessibility,Form Control Labels,form input label aria,Web,All form controls need labels or aria-label,Use label element or aria-label,Input without accessible name,"<label for='email'>Email</label><input id='email' />","<input placeholder='Email' />",Critical
3,Accessibility,Keyboard Handlers,keyboard onclick onkeydown,Web,Interactive elements must support keyboard interaction,Add onKeyDown alongside onClick,Click-only interaction,"<div onClick={fn} onKeyDown={fn} tabIndex={0}>","<div onClick={fn}>",High
4,Accessibility,Semantic HTML,semantic button a label,Web,Use semantic HTML before ARIA attributes,Use button/a/label elements,Div with role attribute,"<button onClick={fn}>Submit</button>","<div role='button' onClick={fn}>Submit</div>",High
5,Accessibility,Aria Live,aria-live polite async,Web,Async updates need aria-live for screen readers,Add aria-live='polite' for dynamic content,Silent async updates,"<div aria-live='polite'>{status}</div>","<div>{status}</div> // no announcement",Medium
6,Accessibility,Decorative Icons,aria-hidden decorative icon,Web,Decorative icons should be hidden from screen readers,Add aria-hidden='true' to decorative icons,Decorative icon announced,"<Icon aria-hidden='true' />","<Icon /> // announced as 'image'",Medium
7,Focus,Visible Focus States,focus-visible outline ring,Web,All interactive elements need visible focus states,Use :focus-visible with ring/outline,No focus indication,"focus-visible:ring-2 focus-visible:ring-blue-500","outline-none // no replacement",Critical
8,Focus,Never Remove Outline,outline-none focus replacement,Web,Never remove outline without providing replacement,Replace outline with visible alternative,Remove outline completely,"focus:outline-none focus:ring-2","focus:outline-none // nothing else",Critical
9,Focus,Checkbox Radio Hit Target,checkbox radio label target,Web,Checkbox/radio must share hit target with label,Wrap input and label together,Separate tiny checkbox,"<label class='flex gap-2'><input type='checkbox' /><span>Option</span></label>","<input type='checkbox' id='x' /><label for='x'>Option</label>",Medium
10,Forms,Autocomplete Attribute,autocomplete input form,Web,Inputs need autocomplete attribute for autofill,Add appropriate autocomplete value,Missing autocomplete,"<input autocomplete='email' type='email' />","<input type='email' />",High
11,Forms,Semantic Input Types,input type email tel url,Web,Use semantic input type attributes,Use email/tel/url/number types,text type for everything,"<input type='email' />","<input type='text' /> // for email",Medium
12,Forms,Never Block Paste,paste onpaste password,Web,Never prevent paste functionality,Allow paste on all inputs,Block paste on password/code,"<input type='password' />","<input onPaste={e => e.preventDefault()} />",High
13,Forms,Spellcheck Disable,spellcheck email code,Web,Disable spellcheck on emails and codes,Set spellcheck='false' on codes,Spellcheck on technical input,"<input spellCheck='false' type='email' />","<input type='email' /> // red squiggles",Low
14,Forms,Submit Button Enabled,submit button disabled loading,Web,Keep submit enabled and show spinner during requests,Show loading spinner keep enabled,Disable button during submit,"<button>{loading ? <Spinner /> : 'Submit'}</button>","<button disabled={loading}>Submit</button>",Medium
15,Forms,Inline Errors,error message inline focus,Web,Show error messages inline near the problem field,Inline error with focus on first error,Single error at top,"<input /><span class='text-red-500'>{error}</span>","<div class='error'>{allErrors}</div> // at top",High
16,Performance,Virtualize Lists,virtualize list 50 items,Web,Virtualize lists exceeding 50 items,Use virtual list for large datasets,Render all items,"<VirtualList items={items} />","items.map(item => <Item />)",High
17,Performance,Avoid Layout Reads,layout read render getboundingclientrect,Web,Avoid layout reads during render phase,Read layout in effects or callbacks,getBoundingClientRect in render,"useEffect(() => { el.getBoundingClientRect() })","const rect = el.getBoundingClientRect() // in render",Medium
18,Performance,Batch DOM Operations,batch dom write read,Web,Group DOM operations to minimize reflows,Batch writes then reads,Interleave reads and writes,"writes.forEach(w => w()); reads.forEach(r => r())","write(); read(); write(); read(); // thrashing",Medium
19,Performance,Preconnect CDN,preconnect link cdn,Web,Add preconnect links for CDN domains,Preconnect to known domains,"<link rel='preconnect' href='https://cdn.example.com' />","// no preconnect hint",Low
20,Performance,Lazy Load Images,lazy loading image below-fold,Web,Lazy-load images below the fold,Use loading='lazy' for below-fold images,Load all images eagerly,"<img loading='lazy' src='...' />","<img src='...' /> // above fold only",Medium
21,State,URL Reflects State,url state query params,Web,URL should reflect current UI state,Sync filters/tabs/pagination to URL,State only in memory,"?tab=settings&page=2","useState only // lost on refresh",High
22,State,Deep Linking,deep link stateful component,Web,Stateful components should support deep-linking,Enable sharing current view via URL,No shareable state,"router.push({ query: { ...filters } })","setFilters(f) // not in URL",Medium
23,State,Confirm Destructive Actions,confirm destructive delete modal,Web,Destructive actions require confirmation,Show confirmation dialog before delete,Delete without confirmation,"if (confirm('Delete?')) delete()","onClick={delete} // no confirmation",High
24,Typography,Proper Unicode,unicode ellipsis quotes,Web,Use proper Unicode characters,Use ... curly quotes proper dashes,ASCII approximations,"'Hello...' with proper ellipsis","'Hello...' with three dots",Low
25,Typography,Text Overflow,truncate line-clamp overflow,Web,Handle text overflow properly,Use truncate/line-clamp/break-words,Text overflows container,"<p class='truncate'>Long text...</p>","<p>Long text...</p> // overflows",Medium
26,Typography,Non-Breaking Spaces,nbsp unit brand,Web,Use non-breaking spaces for units and brand names,Use &nbsp; between number and unit,"10&nbsp;kg or Next.js&nbsp;14","10 kg // may wrap",Low
27,Anti-Pattern,No Zoom Disable,viewport zoom disable,Web,Never disable zoom in viewport meta,Allow user zoom,"<meta name='viewport' content='width=device-width'>","<meta name='viewport' content='maximum-scale=1'>",Critical
28,Anti-Pattern,No Transition All,transition all specific,Web,Avoid transition: all - specify properties,Transition specific properties,transition: all,"transition-colors duration-200","transition-all duration-200",Medium
29,Anti-Pattern,Outline Replacement,outline-none ring focus,Web,Never use outline-none without replacement,Provide visible focus replacement,Remove outline with nothing,"focus:outline-none focus:ring-2 focus:ring-blue-500","focus:outline-none // alone",Critical
30,Anti-Pattern,No Hardcoded Dates,date format intl locale,Web,Use Intl for date/number formatting,Use Intl.DateTimeFormat,Hardcoded date format,"new Intl.DateTimeFormat('en').format(date)","date.toLocaleDateString() // or manual format",Medium

```

---

### `.agent/skills/ui-ux-pro-max/scripts/core.py`
**Function:** Source code file.

```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
UI/UX Pro Max Core - BM25 search engine for UI/UX style guides
"""

import csv
import re
from pathlib import Path
from math import log
from collections import defaultdict

# ============ CONFIGURATION ============
DATA_DIR = Path(__file__).parent.parent / "data"
MAX_RESULTS = 3

CSV_CONFIG = {
    "style": {
        "file": "styles.csv",
        "search_cols": ["Style Category", "Keywords", "Best For", "Type", "AI Prompt Keywords"],
        "output_cols": ["Style Category", "Type", "Keywords", "Primary Colors", "Effects & Animation", "Best For", "Performance", "Accessibility", "Framework Compatibility", "Complexity", "AI Prompt Keywords", "CSS/Technical Keywords", "Implementation Checklist", "Design System Variables"]
    },
    "color": {
        "file": "colors.csv",
        "search_cols": ["Product Type", "Notes"],
        "output_cols": ["Product Type", "Primary (Hex)", "Secondary (Hex)", "CTA (Hex)", "Background (Hex)", "Text (Hex)", "Notes"]
    },
    "chart": {
        "file": "charts.csv",
        "search_cols": ["Data Type", "Keywords", "Best Chart Type", "Accessibility Notes"],
        "output_cols": ["Data Type", "Keywords", "Best Chart Type", "Secondary Options", "Color Guidance", "Accessibility Notes", "Library Recommendation", "Interactive Level"]
    },
    "landing": {
        "file": "landing.csv",
        "search_cols": ["Pattern Name", "Keywords", "Conversion Optimization", "Section Order"],
        "output_cols": ["Pattern Name", "Keywords", "Section Order", "Primary CTA Placement", "Color Strategy", "Conversion Optimization"]
    },
    "product": {
        "file": "products.csv",
        "search_cols": ["Product Type", "Keywords", "Primary Style Recommendation", "Key Considerations"],
        "output_cols": ["Product Type", "Keywords", "Primary Style Recommendation", "Secondary Styles", "Landing Page Pattern", "Dashboard Style (if applicable)", "Color Palette Focus"]
    },
    "ux": {
        "file": "ux-guidelines.csv",
        "search_cols": ["Category", "Issue", "Description", "Platform"],
        "output_cols": ["Category", "Issue", "Platform", "Description", "Do", "Don't", "Code Example Good", "Code Example Bad", "Severity"]
    },
    "typography": {
        "file": "typography.csv",
        "search_cols": ["Font Pairing Name", "Category", "Mood/Style Keywords", "Best For", "Heading Font", "Body Font"],
        "output_cols": ["Font Pairing Name", "Category", "Heading Font", "Body Font", "Mood/Style Keywords", "Best For", "Google Fonts URL", "CSS Import", "Tailwind Config", "Notes"]
    },
    "icons": {
        "file": "icons.csv",
        "search_cols": ["Category", "Icon Name", "Keywords", "Best For"],
        "output_cols": ["Category", "Icon Name", "Keywords", "Library", "Import Code", "Usage", "Best For", "Style"]
    },
    "react": {
        "file": "react-performance.csv",
        "search_cols": ["Category", "Issue", "Keywords", "Description"],
        "output_cols": ["Category", "Issue", "Platform", "Description", "Do", "Don't", "Code Example Good", "Code Example Bad", "Severity"]
    },
    "web": {
        "file": "web-interface.csv",
        "search_cols": ["Category", "Issue", "Keywords", "Description"],
        "output_cols": ["Category", "Issue", "Platform", "Description", "Do", "Don't", "Code Example Good", "Code Example Bad", "Severity"]
    }
}

STACK_CONFIG = {
    "html-tailwind": {"file": "stacks/html-tailwind.csv"},
    "react": {"file": "stacks/react.csv"},
    "nextjs": {"file": "stacks/nextjs.csv"},
    "astro": {"file": "stacks/astro.csv"},
    "vue": {"file": "stacks/vue.csv"},
    "nuxtjs": {"file": "stacks/nuxtjs.csv"},
    "nuxt-ui": {"file": "stacks/nuxt-ui.csv"},
    "svelte": {"file": "stacks/svelte.csv"},
    "swiftui": {"file": "stacks/swiftui.csv"},
    "react-native": {"file": "stacks/react-native.csv"},
    "flutter": {"file": "stacks/flutter.csv"},
    "shadcn": {"file": "stacks/shadcn.csv"},
    "jetpack-compose": {"file": "stacks/jetpack-compose.csv"}
}

# Common columns for all stacks
_STACK_COLS = {
    "search_cols": ["Category", "Guideline", "Description", "Do", "Don't"],
    "output_cols": ["Category", "Guideline", "Description", "Do", "Don't", "Code Good", "Code Bad", "Severity", "Docs URL"]
}

AVAILABLE_STACKS = list(STACK_CONFIG.keys())


# ============ BM25 IMPLEMENTATION ============
class BM25:
    """BM25 ranking algorithm for text search"""

    def __init__(self, k1=1.5, b=0.75):
        self.k1 = k1
        self.b = b
        self.corpus = []
        self.doc_lengths = []
        self.avgdl = 0
        self.idf = {}
        self.doc_freqs = defaultdict(int)
        self.N = 0

    def tokenize(self, text):
        """Lowercase, split, remove punctuation, filter short words"""
        text = re.sub(r'[^\w\s]', ' ', str(text).lower())
        return [w for w in text.split() if len(w) > 2]

    def fit(self, documents):
        """Build BM25 index from documents"""
        self.corpus = [self.tokenize(doc) for doc in documents]
        self.N = len(self.corpus)
        if self.N == 0:
            return
        self.doc_lengths = [len(doc) for doc in self.corpus]
        self.avgdl = sum(self.doc_lengths) / self.N

        for doc in self.corpus:
            seen = set()
            for word in doc:
                if word not in seen:
                    self.doc_freqs[word] += 1
                    seen.add(word)

        for word, freq in self.doc_freqs.items():
            self.idf[word] = log((self.N - freq + 0.5) / (freq + 0.5) + 1)

    def score(self, query):
        """Score all documents against query"""
        query_tokens = self.tokenize(query)
        scores = []

        for idx, doc in enumerate(self.corpus):
            score = 0
            doc_len = self.doc_lengths[idx]
            term_freqs = defaultdict(int)
            for word in doc:
                term_freqs[word] += 1

            for token in query_tokens:
                if token in self.idf:
                    tf = term_freqs[token]
                    idf = self.idf[token]
                    numerator = tf * (self.k1 + 1)
                    denominator = tf + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl)
                    score += idf * numerator / denominator

            scores.append((idx, score))

        return sorted(scores, key=lambda x: x[1], reverse=True)


# ============ SEARCH FUNCTIONS ============
def _load_csv(filepath):
    """Load CSV and return list of dicts"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def _search_csv(filepath, search_cols, output_cols, query, max_results):
    """Core search function using BM25"""
    if not filepath.exists():
        return []

    data = _load_csv(filepath)

    # Build documents from search columns
    documents = [" ".join(str(row.get(col, "")) for col in search_cols) for row in data]

    # BM25 search
    bm25 = BM25()
    bm25.fit(documents)
    ranked = bm25.score(query)

    # Get top results with score > 0
    results = []
    for idx, score in ranked[:max_results]:
        if score > 0:
            row = data[idx]
            results.append({col: row.get(col, "") for col in output_cols if col in row})

    return results


def detect_domain(query):
    """Auto-detect the most relevant domain from query"""
    query_lower = query.lower()

    domain_keywords = {
        "color": ["color", "palette", "hex", "#", "rgb"],
        "chart": ["chart", "graph", "visualization", "trend", "bar", "pie", "scatter", "heatmap", "funnel"],
        "landing": ["landing", "page", "cta", "conversion", "hero", "testimonial", "pricing", "section"],
        "product": ["saas", "ecommerce", "e-commerce", "fintech", "healthcare", "gaming", "portfolio", "crypto", "dashboard"],
        "style": ["style", "design", "ui", "minimalism", "glassmorphism", "neumorphism", "brutalism", "dark mode", "flat", "aurora", "prompt", "css", "implementation", "variable", "checklist", "tailwind"],
        "ux": ["ux", "usability", "accessibility", "wcag", "touch", "scroll", "animation", "keyboard", "navigation", "mobile"],
        "typography": ["font", "typography", "heading", "serif", "sans"],
        "icons": ["icon", "icons", "lucide", "heroicons", "symbol", "glyph", "pictogram", "svg icon"],
        "react": ["react", "next.js", "nextjs", "suspense", "memo", "usecallback", "useeffect", "rerender", "bundle", "waterfall", "barrel", "dynamic import", "rsc", "server component"],
        "web": ["aria", "focus", "outline", "semantic", "virtualize", "autocomplete", "form", "input type", "preconnect"]
    }

    scores = {domain: sum(1 for kw in keywords if kw in query_lower) for domain, keywords in domain_keywords.items()}
    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else "style"


def search(query, domain=None, max_results=MAX_RESULTS):
    """Main search function with auto-domain detection"""
    if domain is None:
        domain = detect_domain(query)

    config = CSV_CONFIG.get(domain, CSV_CONFIG["style"])
    filepath = DATA_DIR / config["file"]

    if not filepath.exists():
        return {"error": f"File not found: {filepath}", "domain": domain}

    results = _search_csv(filepath, config["search_cols"], config["output_cols"], query, max_results)

    return {
        "domain": domain,
        "query": query,
        "file": config["file"],
        "count": len(results),
        "results": results
    }


def search_stack(query, stack, max_results=MAX_RESULTS):
    """Search stack-specific guidelines"""
    if stack not in STACK_CONFIG:
        return {"error": f"Unknown stack: {stack}. Available: {', '.join(AVAILABLE_STACKS)}"}

    filepath = DATA_DIR / STACK_CONFIG[stack]["file"]

    if not filepath.exists():
        return {"error": f"Stack file not found: {filepath}", "stack": stack}

    results = _search_csv(filepath, _STACK_COLS["search_cols"], _STACK_COLS["output_cols"], query, max_results)

    return {
        "domain": "stack",
        "stack": stack,
        "query": query,
        "file": STACK_CONFIG[stack]["file"],
        "count": len(results),
        "results": results
    }

```

---

### `.agent/skills/ui-ux-pro-max/scripts/design_system.py`
**Function:** Source code file.

```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Design System Generator - Aggregates search results and applies reasoning
to generate comprehensive design system recommendations.

Usage:
    from design_system import generate_design_system
    result = generate_design_system("SaaS dashboard", "My Project")
    
    # With persistence (Master + Overrides pattern)
    result = generate_design_system("SaaS dashboard", "My Project", persist=True)
    result = generate_design_system("SaaS dashboard", "My Project", persist=True, page="dashboard")
"""

import csv
import json
import os
from datetime import datetime
from pathlib import Path
from core import search, DATA_DIR


# ============ CONFIGURATION ============
REASONING_FILE = "ui-reasoning.csv"

SEARCH_CONFIG = {
    "product": {"max_results": 1},
    "style": {"max_results": 3},
    "color": {"max_results": 2},
    "landing": {"max_results": 2},
    "typography": {"max_results": 2}
}


# ============ DESIGN SYSTEM GENERATOR ============
class DesignSystemGenerator:
    """Generates design system recommendations from aggregated searches."""

    def __init__(self):
        self.reasoning_data = self._load_reasoning()

    def _load_reasoning(self) -> list:
        """Load reasoning rules from CSV."""
        filepath = DATA_DIR / REASONING_FILE
        if not filepath.exists():
            return []
        with open(filepath, 'r', encoding='utf-8') as f:
            return list(csv.DictReader(f))

    def _multi_domain_search(self, query: str, style_priority: list = None) -> dict:
        """Execute searches across multiple domains."""
        results = {}
        for domain, config in SEARCH_CONFIG.items():
            if domain == "style" and style_priority:
                # For style, also search with priority keywords
                priority_query = " ".join(style_priority[:2]) if style_priority else query
                combined_query = f"{query} {priority_query}"
                results[domain] = search(combined_query, domain, config["max_results"])
            else:
                results[domain] = search(query, domain, config["max_results"])
        return results

    def _find_reasoning_rule(self, category: str) -> dict:
        """Find matching reasoning rule for a category."""
        category_lower = category.lower()

        # Try exact match first
        for rule in self.reasoning_data:
            if rule.get("UI_Category", "").lower() == category_lower:
                return rule

        # Try partial match
        for rule in self.reasoning_data:
            ui_cat = rule.get("UI_Category", "").lower()
            if ui_cat in category_lower or category_lower in ui_cat:
                return rule

        # Try keyword match
        for rule in self.reasoning_data:
            ui_cat = rule.get("UI_Category", "").lower()
            keywords = ui_cat.replace("/", " ").replace("-", " ").split()
            if any(kw in category_lower for kw in keywords):
                return rule

        return {}

    def _apply_reasoning(self, category: str, search_results: dict) -> dict:
        """Apply reasoning rules to search results."""
        rule = self._find_reasoning_rule(category)

        if not rule:
            return {
                "pattern": "Hero + Features + CTA",
                "style_priority": ["Minimalism", "Flat Design"],
                "color_mood": "Professional",
                "typography_mood": "Clean",
                "key_effects": "Subtle hover transitions",
                "anti_patterns": "",
                "decision_rules": {},
                "severity": "MEDIUM"
            }

        # Parse decision rules JSON
        decision_rules = {}
        try:
            decision_rules = json.loads(rule.get("Decision_Rules", "{}"))
        except json.JSONDecodeError:
            pass

        return {
            "pattern": rule.get("Recommended_Pattern", ""),
            "style_priority": [s.strip() for s in rule.get("Style_Priority", "").split("+")],
            "color_mood": rule.get("Color_Mood", ""),
            "typography_mood": rule.get("Typography_Mood", ""),
            "key_effects": rule.get("Key_Effects", ""),
            "anti_patterns": rule.get("Anti_Patterns", ""),
            "decision_rules": decision_rules,
            "severity": rule.get("Severity", "MEDIUM")
        }

    def _select_best_match(self, results: list, priority_keywords: list) -> dict:
        """Select best matching result based on priority keywords."""
        if not results:
            return {}

        if not priority_keywords:
            return results[0]

        # First: try exact style name match
        for priority in priority_keywords:
            priority_lower = priority.lower().strip()
            for result in results:
                style_name = result.get("Style Category", "").lower()
                if priority_lower in style_name or style_name in priority_lower:
                    return result

        # Second: score by keyword match in all fields
        scored = []
        for result in results:
            result_str = str(result).lower()
            score = 0
            for kw in priority_keywords:
                kw_lower = kw.lower().strip()
                # Higher score for style name match
                if kw_lower in result.get("Style Category", "").lower():
                    score += 10
                # Lower score for keyword field match
                elif kw_lower in result.get("Keywords", "").lower():
                    score += 3
                # Even lower for other field matches
                elif kw_lower in result_str:
                    score += 1
            scored.append((score, result))

        scored.sort(key=lambda x: x[0], reverse=True)
        return scored[0][1] if scored and scored[0][0] > 0 else results[0]

    def _extract_results(self, search_result: dict) -> list:
        """Extract results list from search result dict."""
        return search_result.get("results", [])

    def generate(self, query: str, project_name: str = None) -> dict:
        """Generate complete design system recommendation."""
        # Step 1: First search product to get category
        product_result = search(query, "product", 1)
        product_results = product_result.get("results", [])
        category = "General"
        if product_results:
            category = product_results[0].get("Product Type", "General")

        # Step 2: Get reasoning rules for this category
        reasoning = self._apply_reasoning(category, {})
        style_priority = reasoning.get("style_priority", [])

        # Step 3: Multi-domain search with style priority hints
        search_results = self._multi_domain_search(query, style_priority)
        search_results["product"] = product_result  # Reuse product search

        # Step 4: Select best matches from each domain using priority
        style_results = self._extract_results(search_results.get("style", {}))
        color_results = self._extract_results(search_results.get("color", {}))
        typography_results = self._extract_results(search_results.get("typography", {}))
        landing_results = self._extract_results(search_results.get("landing", {}))

        best_style = self._select_best_match(style_results, reasoning.get("style_priority", []))
        best_color = color_results[0] if color_results else {}
        best_typography = typography_results[0] if typography_results else {}
        best_landing = landing_results[0] if landing_results else {}

        # Step 5: Build final recommendation
        # Combine effects from both reasoning and style search
        style_effects = best_style.get("Effects & Animation", "")
        reasoning_effects = reasoning.get("key_effects", "")
        combined_effects = style_effects if style_effects else reasoning_effects

        return {
            "project_name": project_name or query.upper(),
            "category": category,
            "pattern": {
                "name": best_landing.get("Pattern Name", reasoning.get("pattern", "Hero + Features + CTA")),
                "sections": best_landing.get("Section Order", "Hero > Features > CTA"),
                "cta_placement": best_landing.get("Primary CTA Placement", "Above fold"),
                "color_strategy": best_landing.get("Color Strategy", ""),
                "conversion": best_landing.get("Conversion Optimization", "")
            },
            "style": {
                "name": best_style.get("Style Category", "Minimalism"),
                "type": best_style.get("Type", "General"),
                "effects": style_effects,
                "keywords": best_style.get("Keywords", ""),
                "best_for": best_style.get("Best For", ""),
                "performance": best_style.get("Performance", ""),
                "accessibility": best_style.get("Accessibility", "")
            },
            "colors": {
                "primary": best_color.get("Primary (Hex)", "#2563EB"),
                "secondary": best_color.get("Secondary (Hex)", "#3B82F6"),
                "cta": best_color.get("CTA (Hex)", "#F97316"),
                "background": best_color.get("Background (Hex)", "#F8FAFC"),
                "text": best_color.get("Text (Hex)", "#1E293B"),
                "notes": best_color.get("Notes", "")
            },
            "typography": {
                "heading": best_typography.get("Heading Font", "Inter"),
                "body": best_typography.get("Body Font", "Inter"),
                "mood": best_typography.get("Mood/Style Keywords", reasoning.get("typography_mood", "")),
                "best_for": best_typography.get("Best For", ""),
                "google_fonts_url": best_typography.get("Google Fonts URL", ""),
                "css_import": best_typography.get("CSS Import", "")
            },
            "key_effects": combined_effects,
            "anti_patterns": reasoning.get("anti_patterns", ""),
            "decision_rules": reasoning.get("decision_rules", {}),
            "severity": reasoning.get("severity", "MEDIUM")
        }


# ============ OUTPUT FORMATTERS ============
BOX_WIDTH = 90  # Wider box for more content

def format_ascii_box(design_system: dict) -> str:
    """Format design system as ASCII box with emojis (MCP-style)."""
    project = design_system.get("project_name", "PROJECT")
    pattern = design_system.get("pattern", {})
    style = design_system.get("style", {})
    colors = design_system.get("colors", {})
    typography = design_system.get("typography", {})
    effects = design_system.get("key_effects", "")
    anti_patterns = design_system.get("anti_patterns", "")

    def wrap_text(text: str, prefix: str, width: int) -> list:
        """Wrap long text into multiple lines."""
        if not text:
            return []
        words = text.split()
        lines = []
        current_line = prefix
        for word in words:
            if len(current_line) + len(word) + 1 <= width - 2:
                current_line += (" " if current_line != prefix else "") + word
            else:
                if current_line != prefix:
                    lines.append(current_line)
                current_line = prefix + word
        if current_line != prefix:
            lines.append(current_line)
        return lines

    # Build sections from pattern
    sections = pattern.get("sections", "").split(">")
    sections = [s.strip() for s in sections if s.strip()]

    # Build output lines
    lines = []
    w = BOX_WIDTH - 1

    lines.append("+" + "-" * w + "+")
    lines.append(f"|  TARGET: {project} - RECOMMENDED DESIGN SYSTEM".ljust(BOX_WIDTH) + "|")
    lines.append("+" + "-" * w + "+")
    lines.append("|" + " " * BOX_WIDTH + "|")

    # Pattern section
    lines.append(f"|  PATTERN: {pattern.get('name', '')}".ljust(BOX_WIDTH) + "|")
    if pattern.get('conversion'):
        lines.append(f"|     Conversion: {pattern.get('conversion', '')}".ljust(BOX_WIDTH) + "|")
    if pattern.get('cta_placement'):
        lines.append(f"|     CTA: {pattern.get('cta_placement', '')}".ljust(BOX_WIDTH) + "|")
    lines.append("|     Sections:".ljust(BOX_WIDTH) + "|")
    for i, section in enumerate(sections, 1):
        lines.append(f"|       {i}. {section}".ljust(BOX_WIDTH) + "|")
    lines.append("|" + " " * BOX_WIDTH + "|")

    # Style section
    lines.append(f"|  STYLE: {style.get('name', '')}".ljust(BOX_WIDTH) + "|")
    if style.get("keywords"):
        for line in wrap_text(f"Keywords: {style.get('keywords', '')}", "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
    if style.get("best_for"):
        for line in wrap_text(f"Best For: {style.get('best_for', '')}", "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
    if style.get("performance") or style.get("accessibility"):
        perf_a11y = f"Performance: {style.get('performance', '')} | Accessibility: {style.get('accessibility', '')}"
        lines.append(f"|     {perf_a11y}".ljust(BOX_WIDTH) + "|")
    lines.append("|" + " " * BOX_WIDTH + "|")

    # Colors section
    lines.append("|  COLORS:".ljust(BOX_WIDTH) + "|")
    lines.append(f"|     Primary:    {colors.get('primary', '')}".ljust(BOX_WIDTH) + "|")
    lines.append(f"|     Secondary:  {colors.get('secondary', '')}".ljust(BOX_WIDTH) + "|")
    lines.append(f"|     CTA:        {colors.get('cta', '')}".ljust(BOX_WIDTH) + "|")
    lines.append(f"|     Background: {colors.get('background', '')}".ljust(BOX_WIDTH) + "|")
    lines.append(f"|     Text:       {colors.get('text', '')}".ljust(BOX_WIDTH) + "|")
    if colors.get("notes"):
        for line in wrap_text(f"Notes: {colors.get('notes', '')}", "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
    lines.append("|" + " " * BOX_WIDTH + "|")

    # Typography section
    lines.append(f"|  TYPOGRAPHY: {typography.get('heading', '')} / {typography.get('body', '')}".ljust(BOX_WIDTH) + "|")
    if typography.get("mood"):
        for line in wrap_text(f"Mood: {typography.get('mood', '')}", "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
    if typography.get("best_for"):
        for line in wrap_text(f"Best For: {typography.get('best_for', '')}", "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
    if typography.get("google_fonts_url"):
        lines.append(f"|     Google Fonts: {typography.get('google_fonts_url', '')}".ljust(BOX_WIDTH) + "|")
    if typography.get("css_import"):
        lines.append(f"|     CSS Import: {typography.get('css_import', '')[:70]}...".ljust(BOX_WIDTH) + "|")
    lines.append("|" + " " * BOX_WIDTH + "|")

    # Key Effects section
    if effects:
        lines.append("|  KEY EFFECTS:".ljust(BOX_WIDTH) + "|")
        for line in wrap_text(effects, "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
        lines.append("|" + " " * BOX_WIDTH + "|")

    # Anti-patterns section
    if anti_patterns:
        lines.append("|  AVOID (Anti-patterns):".ljust(BOX_WIDTH) + "|")
        for line in wrap_text(anti_patterns, "|     ", BOX_WIDTH):
            lines.append(line.ljust(BOX_WIDTH) + "|")
        lines.append("|" + " " * BOX_WIDTH + "|")

    # Pre-Delivery Checklist section
    lines.append("|  PRE-DELIVERY CHECKLIST:".ljust(BOX_WIDTH) + "|")
    checklist_items = [
        "[ ] No emojis as icons (use SVG: Heroicons/Lucide)",
        "[ ] cursor-pointer on all clickable elements",
        "[ ] Hover states with smooth transitions (150-300ms)",
        "[ ] Light mode: text contrast 4.5:1 minimum",
        "[ ] Focus states visible for keyboard nav",
        "[ ] prefers-reduced-motion respected",
        "[ ] Responsive: 375px, 768px, 1024px, 1440px"
    ]
    for item in checklist_items:
        lines.append(f"|     {item}".ljust(BOX_WIDTH) + "|")
    lines.append("|" + " " * BOX_WIDTH + "|")

    lines.append("+" + "-" * w + "+")

    return "\n".join(lines)


def format_markdown(design_system: dict) -> str:
    """Format design system as markdown."""
    project = design_system.get("project_name", "PROJECT")
    pattern = design_system.get("pattern", {})
    style = design_system.get("style", {})
    colors = design_system.get("colors", {})
    typography = design_system.get("typography", {})
    effects = design_system.get("key_effects", "")
    anti_patterns = design_system.get("anti_patterns", "")

    lines = []
    lines.append(f"## Design System: {project}")
    lines.append("")

    # Pattern section
    lines.append("### Pattern")
    lines.append(f"- **Name:** {pattern.get('name', '')}")
    if pattern.get('conversion'):
        lines.append(f"- **Conversion Focus:** {pattern.get('conversion', '')}")
    if pattern.get('cta_placement'):
        lines.append(f"- **CTA Placement:** {pattern.get('cta_placement', '')}")
    if pattern.get('color_strategy'):
        lines.append(f"- **Color Strategy:** {pattern.get('color_strategy', '')}")
    lines.append(f"- **Sections:** {pattern.get('sections', '')}")
    lines.append("")

    # Style section
    lines.append("### Style")
    lines.append(f"- **Name:** {style.get('name', '')}")
    if style.get('keywords'):
        lines.append(f"- **Keywords:** {style.get('keywords', '')}")
    if style.get('best_for'):
        lines.append(f"- **Best For:** {style.get('best_for', '')}")
    if style.get('performance') or style.get('accessibility'):
        lines.append(f"- **Performance:** {style.get('performance', '')} | **Accessibility:** {style.get('accessibility', '')}")
    lines.append("")

    # Colors section
    lines.append("### Colors")
    lines.append(f"| Role | Hex |")
    lines.append(f"|------|-----|")
    lines.append(f"| Primary | {colors.get('primary', '')} |")
    lines.append(f"| Secondary | {colors.get('secondary', '')} |")
    lines.append(f"| CTA | {colors.get('cta', '')} |")
    lines.append(f"| Background | {colors.get('background', '')} |")
    lines.append(f"| Text | {colors.get('text', '')} |")
    if colors.get("notes"):
        lines.append(f"\n*Notes: {colors.get('notes', '')}*")
    lines.append("")

    # Typography section
    lines.append("### Typography")
    lines.append(f"- **Heading:** {typography.get('heading', '')}")
    lines.append(f"- **Body:** {typography.get('body', '')}")
    if typography.get("mood"):
        lines.append(f"- **Mood:** {typography.get('mood', '')}")
    if typography.get("best_for"):
        lines.append(f"- **Best For:** {typography.get('best_for', '')}")
    if typography.get("google_fonts_url"):
        lines.append(f"- **Google Fonts:** {typography.get('google_fonts_url', '')}")
    if typography.get("css_import"):
        lines.append(f"- **CSS Import:**")
        lines.append(f"```css")
        lines.append(f"{typography.get('css_import', '')}")
        lines.append(f"```")
    lines.append("")

    # Key Effects section
    if effects:
        lines.append("### Key Effects")
        lines.append(f"{effects}")
        lines.append("")

    # Anti-patterns section
    if anti_patterns:
        lines.append("### Avoid (Anti-patterns)")
        newline_bullet = '\n- '
        lines.append(f"- {anti_patterns.replace(' + ', newline_bullet)}")
        lines.append("")

    # Pre-Delivery Checklist section
    lines.append("### Pre-Delivery Checklist")
    lines.append("- [ ] No emojis as icons (use SVG: Heroicons/Lucide)")
    lines.append("- [ ] cursor-pointer on all clickable elements")
    lines.append("- [ ] Hover states with smooth transitions (150-300ms)")
    lines.append("- [ ] Light mode: text contrast 4.5:1 minimum")
    lines.append("- [ ] Focus states visible for keyboard nav")
    lines.append("- [ ] prefers-reduced-motion respected")
    lines.append("- [ ] Responsive: 375px, 768px, 1024px, 1440px")
    lines.append("")

    return "\n".join(lines)


# ============ MAIN ENTRY POINT ============
def generate_design_system(query: str, project_name: str = None, output_format: str = "ascii", 
                           persist: bool = False, page: str = None, output_dir: str = None) -> str:
    """
    Main entry point for design system generation.

    Args:
        query: Search query (e.g., "SaaS dashboard", "e-commerce luxury")
        project_name: Optional project name for output header
        output_format: "ascii" (default) or "markdown"
        persist: If True, save design system to design-system/ folder
        page: Optional page name for page-specific override file
        output_dir: Optional output directory (defaults to current working directory)

    Returns:
        Formatted design system string
    """
    generator = DesignSystemGenerator()
    design_system = generator.generate(query, project_name)
    
    # Persist to files if requested
    if persist:
        persist_design_system(design_system, page, output_dir, query)

    if output_format == "markdown":
        return format_markdown(design_system)
    return format_ascii_box(design_system)


# ============ PERSISTENCE FUNCTIONS ============
def persist_design_system(design_system: dict, page: str = None, output_dir: str = None, page_query: str = None) -> dict:
    """
    Persist design system to design-system/<project>/ folder using Master + Overrides pattern.
    
    Args:
        design_system: The generated design system dictionary
        page: Optional page name for page-specific override file
        output_dir: Optional output directory (defaults to current working directory)
        page_query: Optional query string for intelligent page override generation
    
    Returns:
        dict with created file paths and status
    """
    base_dir = Path(output_dir) if output_dir else Path.cwd()
    
    # Use project name for project-specific folder
    project_name = design_system.get("project_name", "default")
    project_slug = project_name.lower().replace(' ', '-')
    
    design_system_dir = base_dir / "design-system" / project_slug
    pages_dir = design_system_dir / "pages"
    
    created_files = []
    
    # Create directories
    design_system_dir.mkdir(parents=True, exist_ok=True)
    pages_dir.mkdir(parents=True, exist_ok=True)
    
    master_file = design_system_dir / "MASTER.md"
    
    # Generate and write MASTER.md
    master_content = format_master_md(design_system)
    with open(master_file, 'w', encoding='utf-8') as f:
        f.write(master_content)
    created_files.append(str(master_file))
    
    # If page is specified, create page override file with intelligent content
    if page:
        page_file = pages_dir / f"{page.lower().replace(' ', '-')}.md"
        page_content = format_page_override_md(design_system, page, page_query)
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(page_content)
        created_files.append(str(page_file))
    
    return {
        "status": "success",
        "design_system_dir": str(design_system_dir),
        "created_files": created_files
    }


def format_master_md(design_system: dict) -> str:
    """Format design system as MASTER.md with hierarchical override logic."""
    project = design_system.get("project_name", "PROJECT")
    pattern = design_system.get("pattern", {})
    style = design_system.get("style", {})
    colors = design_system.get("colors", {})
    typography = design_system.get("typography", {})
    effects = design_system.get("key_effects", "")
    anti_patterns = design_system.get("anti_patterns", "")
    
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    lines = []
    
    # Logic header
    lines.append("# Design System Master File")
    lines.append("")
    lines.append("> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.")
    lines.append("> If that file exists, its rules **override** this Master file.")
    lines.append("> If not, strictly follow the rules below.")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append(f"**Project:** {project}")
    lines.append(f"**Generated:** {timestamp}")
    lines.append(f"**Category:** {design_system.get('category', 'General')}")
    lines.append("")
    lines.append("---")
    lines.append("")
    
    # Global Rules section
    lines.append("## Global Rules")
    lines.append("")
    
    # Color Palette
    lines.append("### Color Palette")
    lines.append("")
    lines.append("| Role | Hex | CSS Variable |")
    lines.append("|------|-----|--------------|")
    lines.append(f"| Primary | `{colors.get('primary', '#2563EB')}` | `--color-primary` |")
    lines.append(f"| Secondary | `{colors.get('secondary', '#3B82F6')}` | `--color-secondary` |")
    lines.append(f"| CTA/Accent | `{colors.get('cta', '#F97316')}` | `--color-cta` |")
    lines.append(f"| Background | `{colors.get('background', '#F8FAFC')}` | `--color-background` |")
    lines.append(f"| Text | `{colors.get('text', '#1E293B')}` | `--color-text` |")
    lines.append("")
    if colors.get("notes"):
        lines.append(f"**Color Notes:** {colors.get('notes', '')}")
        lines.append("")
    
    # Typography
    lines.append("### Typography")
    lines.append("")
    lines.append(f"- **Heading Font:** {typography.get('heading', 'Inter')}")
    lines.append(f"- **Body Font:** {typography.get('body', 'Inter')}")
    if typography.get("mood"):
        lines.append(f"- **Mood:** {typography.get('mood', '')}")
    if typography.get("google_fonts_url"):
        lines.append(f"- **Google Fonts:** [{typography.get('heading', '')} + {typography.get('body', '')}]({typography.get('google_fonts_url', '')})")
    lines.append("")
    if typography.get("css_import"):
        lines.append("**CSS Import:**")
        lines.append("```css")
        lines.append(typography.get("css_import", ""))
        lines.append("```")
        lines.append("")
    
    # Spacing Variables
    lines.append("### Spacing Variables")
    lines.append("")
    lines.append("| Token | Value | Usage |")
    lines.append("|-------|-------|-------|")
    lines.append("| `--space-xs` | `4px` / `0.25rem` | Tight gaps |")
    lines.append("| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |")
    lines.append("| `--space-md` | `16px` / `1rem` | Standard padding |")
    lines.append("| `--space-lg` | `24px` / `1.5rem` | Section padding |")
    lines.append("| `--space-xl` | `32px` / `2rem` | Large gaps |")
    lines.append("| `--space-2xl` | `48px` / `3rem` | Section margins |")
    lines.append("| `--space-3xl` | `64px` / `4rem` | Hero padding |")
    lines.append("")
    
    # Shadow Depths
    lines.append("### Shadow Depths")
    lines.append("")
    lines.append("| Level | Value | Usage |")
    lines.append("|-------|-------|-------|")
    lines.append("| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |")
    lines.append("| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |")
    lines.append("| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |")
    lines.append("| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |")
    lines.append("")
    
    # Component Specs section
    lines.append("---")
    lines.append("")
    lines.append("## Component Specs")
    lines.append("")
    
    # Buttons
    lines.append("### Buttons")
    lines.append("")
    lines.append("```css")
    lines.append("/* Primary Button */")
    lines.append(".btn-primary {")
    lines.append(f"  background: {colors.get('cta', '#F97316')};")
    lines.append("  color: white;")
    lines.append("  padding: 12px 24px;")
    lines.append("  border-radius: 8px;")
    lines.append("  font-weight: 600;")
    lines.append("  transition: all 200ms ease;")
    lines.append("  cursor: pointer;")
    lines.append("}")
    lines.append("")
    lines.append(".btn-primary:hover {")
    lines.append("  opacity: 0.9;")
    lines.append("  transform: translateY(-1px);")
    lines.append("}")
    lines.append("")
    lines.append("/* Secondary Button */")
    lines.append(".btn-secondary {")
    lines.append(f"  background: transparent;")
    lines.append(f"  color: {colors.get('primary', '#2563EB')};")
    lines.append(f"  border: 2px solid {colors.get('primary', '#2563EB')};")
    lines.append("  padding: 12px 24px;")
    lines.append("  border-radius: 8px;")
    lines.append("  font-weight: 600;")
    lines.append("  transition: all 200ms ease;")
    lines.append("  cursor: pointer;")
    lines.append("}")
    lines.append("```")
    lines.append("")
    
    # Cards
    lines.append("### Cards")
    lines.append("")
    lines.append("```css")
    lines.append(".card {")
    lines.append(f"  background: {colors.get('background', '#FFFFFF')};")
    lines.append("  border-radius: 12px;")
    lines.append("  padding: 24px;")
    lines.append("  box-shadow: var(--shadow-md);")
    lines.append("  transition: all 200ms ease;")
    lines.append("  cursor: pointer;")
    lines.append("}")
    lines.append("")
    lines.append(".card:hover {")
    lines.append("  box-shadow: var(--shadow-lg);")
    lines.append("  transform: translateY(-2px);")
    lines.append("}")
    lines.append("```")
    lines.append("")
    
    # Inputs
    lines.append("### Inputs")
    lines.append("")
    lines.append("```css")
    lines.append(".input {")
    lines.append("  padding: 12px 16px;")
    lines.append("  border: 1px solid #E2E8F0;")
    lines.append("  border-radius: 8px;")
    lines.append("  font-size: 16px;")
    lines.append("  transition: border-color 200ms ease;")
    lines.append("}")
    lines.append("")
    lines.append(".input:focus {")
    lines.append(f"  border-color: {colors.get('primary', '#2563EB')};")
    lines.append("  outline: none;")
    lines.append(f"  box-shadow: 0 0 0 3px {colors.get('primary', '#2563EB')}20;")
    lines.append("}")
    lines.append("```")
    lines.append("")
    
    # Modals
    lines.append("### Modals")
    lines.append("")
    lines.append("```css")
    lines.append(".modal-overlay {")
    lines.append("  background: rgba(0, 0, 0, 0.5);")
    lines.append("  backdrop-filter: blur(4px);")
    lines.append("}")
    lines.append("")
    lines.append(".modal {")
    lines.append("  background: white;")
    lines.append("  border-radius: 16px;")
    lines.append("  padding: 32px;")
    lines.append("  box-shadow: var(--shadow-xl);")
    lines.append("  max-width: 500px;")
    lines.append("  width: 90%;")
    lines.append("}")
    lines.append("```")
    lines.append("")
    
    # Style section
    lines.append("---")
    lines.append("")
    lines.append("## Style Guidelines")
    lines.append("")
    lines.append(f"**Style:** {style.get('name', 'Minimalism')}")
    lines.append("")
    if style.get("keywords"):
        lines.append(f"**Keywords:** {style.get('keywords', '')}")
        lines.append("")
    if style.get("best_for"):
        lines.append(f"**Best For:** {style.get('best_for', '')}")
        lines.append("")
    if effects:
        lines.append(f"**Key Effects:** {effects}")
        lines.append("")
    
    # Layout Pattern
    lines.append("### Page Pattern")
    lines.append("")
    lines.append(f"**Pattern Name:** {pattern.get('name', '')}")
    lines.append("")
    if pattern.get('conversion'):
        lines.append(f"- **Conversion Strategy:** {pattern.get('conversion', '')}")
    if pattern.get('cta_placement'):
        lines.append(f"- **CTA Placement:** {pattern.get('cta_placement', '')}")
    lines.append(f"- **Section Order:** {pattern.get('sections', '')}")
    lines.append("")
    
    # Anti-Patterns section
    lines.append("---")
    lines.append("")
    lines.append("## Anti-Patterns (Do NOT Use)")
    lines.append("")
    if anti_patterns:
        anti_list = [a.strip() for a in anti_patterns.split("+")]
        for anti in anti_list:
            if anti:
                lines.append(f"- ❌ {anti}")
    lines.append("")
    lines.append("### Additional Forbidden Patterns")
    lines.append("")
    lines.append("- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)")
    lines.append("- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer")
    lines.append("- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout")
    lines.append("- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio")
    lines.append("- ❌ **Instant state changes** — Always use transitions (150-300ms)")
    lines.append("- ❌ **Invisible focus states** — Focus states must be visible for a11y")
    lines.append("")
    
    # Pre-Delivery Checklist
    lines.append("---")
    lines.append("")
    lines.append("## Pre-Delivery Checklist")
    lines.append("")
    lines.append("Before delivering any UI code, verify:")
    lines.append("")
    lines.append("- [ ] No emojis used as icons (use SVG instead)")
    lines.append("- [ ] All icons from consistent icon set (Heroicons/Lucide)")
    lines.append("- [ ] `cursor-pointer` on all clickable elements")
    lines.append("- [ ] Hover states with smooth transitions (150-300ms)")
    lines.append("- [ ] Light mode: text contrast 4.5:1 minimum")
    lines.append("- [ ] Focus states visible for keyboard navigation")
    lines.append("- [ ] `prefers-reduced-motion` respected")
    lines.append("- [ ] Responsive: 375px, 768px, 1024px, 1440px")
    lines.append("- [ ] No content hidden behind fixed navbars")
    lines.append("- [ ] No horizontal scroll on mobile")
    lines.append("")
    
    return "\n".join(lines)


def format_page_override_md(design_system: dict, page_name: str, page_query: str = None) -> str:
    """Format a page-specific override file with intelligent AI-generated content."""
    project = design_system.get("project_name", "PROJECT")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    page_title = page_name.replace("-", " ").replace("_", " ").title()
    
    # Detect page type and generate intelligent overrides
    page_overrides = _generate_intelligent_overrides(page_name, page_query, design_system)
    
    lines = []
    
    lines.append(f"# {page_title} Page Overrides")
    lines.append("")
    lines.append(f"> **PROJECT:** {project}")
    lines.append(f"> **Generated:** {timestamp}")
    lines.append(f"> **Page Type:** {page_overrides.get('page_type', 'General')}")
    lines.append("")
    lines.append("> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).")
    lines.append("> Only deviations from the Master are documented here. For all other rules, refer to the Master.")
    lines.append("")
    lines.append("---")
    lines.append("")
    
    # Page-specific rules with actual content
    lines.append("## Page-Specific Rules")
    lines.append("")
    
    # Layout Overrides
    lines.append("### Layout Overrides")
    lines.append("")
    layout = page_overrides.get("layout", {})
    if layout:
        for key, value in layout.items():
            lines.append(f"- **{key}:** {value}")
    else:
        lines.append("- No overrides — use Master layout")
    lines.append("")
    
    # Spacing Overrides
    lines.append("### Spacing Overrides")
    lines.append("")
    spacing = page_overrides.get("spacing", {})
    if spacing:
        for key, value in spacing.items():
            lines.append(f"- **{key}:** {value}")
    else:
        lines.append("- No overrides — use Master spacing")
    lines.append("")
    
    # Typography Overrides
    lines.append("### Typography Overrides")
    lines.append("")
    typography = page_overrides.get("typography", {})
    if typography:
        for key, value in typography.items():
            lines.append(f"- **{key}:** {value}")
    else:
        lines.append("- No overrides — use Master typography")
    lines.append("")
    
    # Color Overrides
    lines.append("### Color Overrides")
    lines.append("")
    colors = page_overrides.get("colors", {})
    if colors:
        for key, value in colors.items():
            lines.append(f"- **{key}:** {value}")
    else:
        lines.append("- No overrides — use Master colors")
    lines.append("")
    
    # Component Overrides
    lines.append("### Component Overrides")
    lines.append("")
    components = page_overrides.get("components", [])
    if components:
        for comp in components:
            lines.append(f"- {comp}")
    else:
        lines.append("- No overrides — use Master component specs")
    lines.append("")
    
    # Page-Specific Components
    lines.append("---")
    lines.append("")
    lines.append("## Page-Specific Components")
    lines.append("")
    unique_components = page_overrides.get("unique_components", [])
    if unique_components:
        for comp in unique_components:
            lines.append(f"- {comp}")
    else:
        lines.append("- No unique components for this page")
    lines.append("")
    
    # Recommendations
    lines.append("---")
    lines.append("")
    lines.append("## Recommendations")
    lines.append("")
    recommendations = page_overrides.get("recommendations", [])
    if recommendations:
        for rec in recommendations:
            lines.append(f"- {rec}")
    lines.append("")
    
    return "\n".join(lines)


def _generate_intelligent_overrides(page_name: str, page_query: str, design_system: dict) -> dict:
    """
    Generate intelligent overrides based on page type using layered search.
    
    Uses the existing search infrastructure to find relevant style, UX, and layout
    data instead of hardcoded page types.
    """
    from core import search
    
    page_lower = page_name.lower()
    query_lower = (page_query or "").lower()
    combined_context = f"{page_lower} {query_lower}"
    
    # Search across multiple domains for page-specific guidance
    style_search = search(combined_context, "style", max_results=1)
    ux_search = search(combined_context, "ux", max_results=3)
    landing_search = search(combined_context, "landing", max_results=1)
    
    # Extract results from search response
    style_results = style_search.get("results", [])
    ux_results = ux_search.get("results", [])
    landing_results = landing_search.get("results", [])
    
    # Detect page type from search results or context
    page_type = _detect_page_type(combined_context, style_results)
    
    # Build overrides from search results
    layout = {}
    spacing = {}
    typography = {}
    colors = {}
    components = []
    unique_components = []
    recommendations = []
    
    # Extract style-based overrides
    if style_results:
        style = style_results[0]
        style_name = style.get("Style Category", "")
        keywords = style.get("Keywords", "")
        best_for = style.get("Best For", "")
        effects = style.get("Effects & Animation", "")
        
        # Infer layout from style keywords
        if any(kw in keywords.lower() for kw in ["data", "dense", "dashboard", "grid"]):
            layout["Max Width"] = "1400px or full-width"
            layout["Grid"] = "12-column grid for data flexibility"
            spacing["Content Density"] = "High — optimize for information display"
        elif any(kw in keywords.lower() for kw in ["minimal", "simple", "clean", "single"]):
            layout["Max Width"] = "800px (narrow, focused)"
            layout["Layout"] = "Single column, centered"
            spacing["Content Density"] = "Low — focus on clarity"
        else:
            layout["Max Width"] = "1200px (standard)"
            layout["Layout"] = "Full-width sections, centered content"
        
        if effects:
            recommendations.append(f"Effects: {effects}")
    
    # Extract UX guidelines as recommendations
    for ux in ux_results:
        category = ux.get("Category", "")
        do_text = ux.get("Do", "")
        dont_text = ux.get("Don't", "")
        if do_text:
            recommendations.append(f"{category}: {do_text}")
        if dont_text:
            components.append(f"Avoid: {dont_text}")
    
    # Extract landing pattern info for section structure
    if landing_results:
        landing = landing_results[0]
        sections = landing.get("Section Order", "")
        cta_placement = landing.get("Primary CTA Placement", "")
        color_strategy = landing.get("Color Strategy", "")
        
        if sections:
            layout["Sections"] = sections
        if cta_placement:
            recommendations.append(f"CTA Placement: {cta_placement}")
        if color_strategy:
            colors["Strategy"] = color_strategy
    
    # Add page-type specific defaults if no search results
    if not layout:
        layout["Max Width"] = "1200px"
        layout["Layout"] = "Responsive grid"
    
    if not recommendations:
        recommendations = [
            "Refer to MASTER.md for all design rules",
            "Add specific overrides as needed for this page"
        ]
    
    return {
        "page_type": page_type,
        "layout": layout,
        "spacing": spacing,
        "typography": typography,
        "colors": colors,
        "components": components,
        "unique_components": unique_components,
        "recommendations": recommendations
    }


def _detect_page_type(context: str, style_results: list) -> str:
    """Detect page type from context and search results."""
    context_lower = context.lower()
    
    # Check for common page type patterns
    page_patterns = [
        (["dashboard", "admin", "analytics", "data", "metrics", "stats", "monitor", "overview"], "Dashboard / Data View"),
        (["checkout", "payment", "cart", "purchase", "order", "billing"], "Checkout / Payment"),
        (["settings", "profile", "account", "preferences", "config"], "Settings / Profile"),
        (["landing", "marketing", "homepage", "hero", "home", "promo"], "Landing / Marketing"),
        (["login", "signin", "signup", "register", "auth", "password"], "Authentication"),
        (["pricing", "plans", "subscription", "tiers", "packages"], "Pricing / Plans"),
        (["blog", "article", "post", "news", "content", "story"], "Blog / Article"),
        (["product", "item", "detail", "pdp", "shop", "store"], "Product Detail"),
        (["search", "results", "browse", "filter", "catalog", "list"], "Search Results"),
        (["empty", "404", "error", "not found", "zero"], "Empty State"),
    ]
    
    for keywords, page_type in page_patterns:
        if any(kw in context_lower for kw in keywords):
            return page_type
    
    # Fallback: try to infer from style results
    if style_results:
        style_name = style_results[0].get("Style Category", "").lower()
        best_for = style_results[0].get("Best For", "").lower()
        
        if "dashboard" in best_for or "data" in best_for:
            return "Dashboard / Data View"
        elif "landing" in best_for or "marketing" in best_for:
            return "Landing / Marketing"
    
    return "General"


# ============ CLI SUPPORT ============
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate Design System")
    parser.add_argument("query", help="Search query (e.g., 'SaaS dashboard')")
    parser.add_argument("--project-name", "-p", type=str, default=None, help="Project name")
    parser.add_argument("--format", "-f", choices=["ascii", "markdown"], default="ascii", help="Output format")

    args = parser.parse_args()

    result = generate_design_system(args.query, args.project_name, args.format)
    print(result)

```

---

### `.agent/skills/ui-ux-pro-max/scripts/search.py`
**Function:** Source code file.

```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
UI/UX Pro Max Search - BM25 search engine for UI/UX style guides
Usage: python search.py "<query>" [--domain <domain>] [--stack <stack>] [--max-results 3]
       python search.py "<query>" --design-system [-p "Project Name"]
       python search.py "<query>" --design-system --persist [-p "Project Name"] [--page "dashboard"]

Domains: style, prompt, color, chart, landing, product, ux, typography
Stacks: html-tailwind, react, nextjs

Persistence (Master + Overrides pattern):
  --persist    Save design system to design-system/MASTER.md
  --page       Also create a page-specific override file in design-system/pages/
"""

import argparse
import sys
import io
from core import CSV_CONFIG, AVAILABLE_STACKS, MAX_RESULTS, search, search_stack
from design_system import generate_design_system, persist_design_system

# Force UTF-8 for stdout/stderr to handle emojis on Windows (cp1252 default)
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
if sys.stderr.encoding and sys.stderr.encoding.lower() != 'utf-8':
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')


def format_output(result):
    """Format results for Claude consumption (token-optimized)"""
    if "error" in result:
        return f"Error: {result['error']}"

    output = []
    if result.get("stack"):
        output.append(f"## UI Pro Max Stack Guidelines")
        output.append(f"**Stack:** {result['stack']} | **Query:** {result['query']}")
    else:
        output.append(f"## UI Pro Max Search Results")
        output.append(f"**Domain:** {result['domain']} | **Query:** {result['query']}")
    output.append(f"**Source:** {result['file']} | **Found:** {result['count']} results\n")

    for i, row in enumerate(result['results'], 1):
        output.append(f"### Result {i}")
        for key, value in row.items():
            value_str = str(value)
            if len(value_str) > 300:
                value_str = value_str[:300] + "..."
            output.append(f"- **{key}:** {value_str}")
        output.append("")

    return "\n".join(output)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="UI Pro Max Search")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--domain", "-d", choices=list(CSV_CONFIG.keys()), help="Search domain")
    parser.add_argument("--stack", "-s", choices=AVAILABLE_STACKS, help="Stack-specific search (html-tailwind, react, nextjs)")
    parser.add_argument("--max-results", "-n", type=int, default=MAX_RESULTS, help="Max results (default: 3)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    # Design system generation
    parser.add_argument("--design-system", "-ds", action="store_true", help="Generate complete design system recommendation")
    parser.add_argument("--project-name", "-p", type=str, default=None, help="Project name for design system output")
    parser.add_argument("--format", "-f", choices=["ascii", "markdown"], default="ascii", help="Output format for design system")
    # Persistence (Master + Overrides pattern)
    parser.add_argument("--persist", action="store_true", help="Save design system to design-system/MASTER.md (creates hierarchical structure)")
    parser.add_argument("--page", type=str, default=None, help="Create page-specific override file in design-system/pages/")
    parser.add_argument("--output-dir", "-o", type=str, default=None, help="Output directory for persisted files (default: current directory)")

    args = parser.parse_args()

    # Design system takes priority
    if args.design_system:
        result = generate_design_system(
            args.query, 
            args.project_name, 
            args.format,
            persist=args.persist,
            page=args.page,
            output_dir=args.output_dir
        )
        print(result)
        
        # Print persistence confirmation
        if args.persist:
            project_slug = args.project_name.lower().replace(' ', '-') if args.project_name else "default"
            print("\n" + "=" * 60)
            print(f"✅ Design system persisted to design-system/{project_slug}/")
            print(f"   📄 design-system/{project_slug}/MASTER.md (Global Source of Truth)")
            if args.page:
                page_filename = args.page.lower().replace(' ', '-')
                print(f"   📄 design-system/{project_slug}/pages/{page_filename}.md (Page Overrides)")
            print("")
            print(f"📖 Usage: When building a page, check design-system/{project_slug}/pages/[page].md first.")
            print(f"   If exists, its rules override MASTER.md. Otherwise, use MASTER.md.")
            print("=" * 60)
    # Stack search
    elif args.stack:
        result = search_stack(args.query, args.stack, args.max_results)
        if args.json:
            import json
            print(json.dumps(result, indent=2, ensure_ascii=False))
        else:
            print(format_output(result))
    # Domain search
    else:
        result = search(args.query, args.domain, args.max_results)
        if args.json:
            import json
            print(json.dumps(result, indent=2, ensure_ascii=False))
        else:
            print(format_output(result))

```

---

### `.agent/skills/ui-ux-pro-max/scripts/__pycache__/core.cpython-314.pyc`
**Function:** Source code file.

```pyc
+
    �<ri�'  �                   �h  � R t ^ RIt^ RIt^ RIHt ^ RIHt ^ RIHt ]! ]	4      P                  P                  R,          t^tRRRR	. R?OR
. R@O/RRRR	RR.R
. RAO/RRRR	. RBOR
. RCO/RRRR	. RDOR
. REO/RRRR	. RFOR
. RGO/RRRR	. RHOR
. RIO/RRRR	. RJOR
. RKO/RRRR	. RLOR
. RMO/RRRR	. RNOR
. RIO/RRRR	. RNOR
. RIO//
tRRR /RRR!/R"RR#/R$RR%/R&RR'/R(RR)/R*RR+/R,RR-/R.RR//R0RR1/R2RR3/R4RR5/R6RR7//tR	. ROOR
. RPO/t]! ]P#                  4       4      t ! R8 R94      tR: tR; tR< tR]3R= lt]3R> ltR# )Qz@
UI/UX Pro Max Core - BM25 search engine for UI/UX style guides
N)�Path)�log)�defaultdict�data�style�filez
styles.csv�search_cols�output_cols�colorz
colors.csv�Product Type�Notes�chartz
charts.csv�landingzlanding.csv�productzproducts.csv�uxzux-guidelines.csv�
typographyztypography.csv�iconsz	icons.csv�reactzreact-performance.csv�webzweb-interface.csvzhtml-tailwindzstacks/html-tailwind.csvzstacks/react.csv�nextjszstacks/nextjs.csv�astrozstacks/astro.csv�vuezstacks/vue.csv�nuxtjszstacks/nuxtjs.csvznuxt-uizstacks/nuxt-ui.csv�sveltezstacks/svelte.csv�swiftuizstacks/swiftui.csvzreact-nativezstacks/react-native.csv�flutterzstacks/flutter.csv�shadcnzstacks/shadcn.csvzjetpack-composezstacks/jetpack-compose.csvc                   �@   a � ] tR t^`t o RtRR ltR tR tR tRt	V t
R# )	�BM25z&BM25 ranking algorithm for text searchc                �   � Wn         W n        . V n        . V n        ^ V n        / V n        \        \        4      V n        ^ V n	        R# )�    N)
�k1�b�corpus�doc_lengths�avgdl�idfr   �int�	doc_freqs�N)�selfr!   r"   s   &&&�j/Users/viettranx/Documents/coding/next-level-builder/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/core.py�__init__�BM25.__init__c   s<   � �������������
����$�S�)������    c                ��   � \         P                  ! RR\        V4      P                  4       4      pVP	                  4        Uu. uF  p\        V4      ^8�  g   K  VNK  	  up# u upi )z8Lowercase, split, remove punctuation, filter short wordsz[^\w\s]� )�re�sub�str�lower�split�len)r*   �text�ws   && r+   �tokenize�BM25.tokenizem   sI   � ��v�v�j�#�s�4�y���'8�9���:�:�<�6�<�a�3�q�6�A�:���<�6�6��6s   �A"�A"c                ��  � V Uu. uF  q P                  V4      NK  	  upV n        \        V P                  4      V n        V P                  ^ 8X  d   R# V P                   Uu. uF  p\        V4      NK  	  upV n        \        V P                  4      V P                  ,          V n        V P                   FN  p\        4       pV F;  pWC9  g   K  V P                  V;;,          ^,          uu&   VP                  V4       K=  	  KP  	  V P                  P                  4        FJ  w  rE\        V P                  V,
          R,           VR,           ,          ^,           4      V P                  V&   KL  	  R# u upi u upi )zBuild BM25 index from documentsNg      �?)r9   r#   r6   r)   r$   �sumr%   �setr(   �add�itemsr   r&   )r*   �	documents�doc�seen�word�freqs   &&    r+   �fit�BM25.fitr   s  � �5>�?�Y�c�}�}�S�)�Y�?����T�[�[�!����6�6�Q�;��04���<���C��H��<�����)�)�*�T�V�V�3��
��;�;�C��5�D����#��N�N�4�(�A�-�(��H�H�T�N� � � �.�.�.�.�0�J�D� �$�&�&�4�-�#�"5�$��*�!E��!I�J�D�H�H�T�N� 1�� @�� =s   �E0�!E5c                �  � V P                  V4      p. p\        V P                  4       EF  w  rE^ pV P                  V,          p\	        \
        4      pV F  p	W�;;,          ^,          uu&   K  	  V F�  p
W�P                  9   g   K  W�,          pV P                  V
,          pW�P                  ^,           ,          pW�P                  ^V P                  ,
          V P                  V,          V P                  ,          ,           ,          ,           pWlV,          V,          ,          pK�  	  VP                  WF34       EK  	  \        VR RR7      # )z!Score all documents against queryc                 �   � V ^,          # )�   � )�xs   &r+   �<lambda>�BM25.score.<locals>.<lambda>�   s   � �A�a�Dr.   T)�key�reverse)r9   �	enumerater#   r$   r   r'   r&   r!   r"   r%   �append�sorted)r*   �query�query_tokens�scores�idxrA   �score�doc_len�
term_freqsrC   �token�tfr&   �	numerator�denominators   &&             r+   rW   �
BM25.score�   s  � ��}�}�U�+����!�$�+�+�.�H�C��E��&�&�s�+�G�$�S�)�J���� �A�%� � � &���H�H�$�#�*�B��(�(�5�/�C� "�g�g��k� 2�I�"$�w�w�!�d�f�f�*�t�v�v��?O�RV�R\�R\�?\�2\�']�"]�K��9�_�{�:�:�E� &� �M�M�3�,�'� /�" �f�.�$�?�?r.   )r)   r%   r"   r#   r(   r$   r&   r!   N)g      �?g      �?)�__name__�
__module__�__qualname__�__firstlineno__�__doc__r,   r9   rE   rW   �__static_attributes__�__classdictcell__)�__classdict__s   @r+   r   r   `   s$   �� � �0��7�
K�&@� @r.   r   c                �   � \        V RRR7      ;_uu_ 4       p\        \        P                  ! V4      4      uuRRR4       #   + '       g   i     R# ; i)z!Load CSV and return list of dicts�rzutf-8)�encodingN)�open�list�csv�
DictReader)�filepath�fs   & r+   �	_load_csvrp   �   s3   � �	�h��g�	.�	.�!��C�N�N�1�%�&� 
/�	.�	.�	.�s   �A�A	c                ��  a� V P                  4       '       g   . # \        V 4      pV Uau. uF  oRP                  V3R lV 4       4      NK   	  pp\        4       pVP	                  V4       VP                  V4      p	. p
V	RV  FP  w  r�V^ 8�  g   K  W[,          oT
P                  V Uu/ uF  q�S9   g   K  VSP                  VR4      bK   	  up4       KR  	  V
# u upi u upi )zCore search function using BM25r0   c              3   �Z   <"  � T F   p\        SP                  VR 4      4      x � K"  	  R# 5i)� N)r3   �get)�.0�col�rows   & �r+   �	<genexpr>�_search_csv.<locals>.<genexpr>�   s$   �� � �G�;�C�#�c�g�g�c�2�.�/�/�;�s   �(+Nrs   )�existsrp   �joinr   rE   rW   rQ   rt   )rn   r   r	   rS   �max_resultsr   rw   r@   �bm25�ranked�resultsrV   rW   rv   s   &&&&& `       r+   �_search_csvr�   �   s�   �� ��?�?����	��X��D� TX�X�SW�C����G�;�G�G�SW�I�X� �6�D��H�H�Y���Z�Z���F� �G��\�k�*�
���1�9��)�C��N�N�[�W�[�c�SV�J�1�C�����b�!1�1�[�W�X� +�
 �N�� Y�� Xs   �$C�(C
�5C
c                �@  a� V P                  4       oR. ROR. ROR. ROR. ROR. ROR. ROR. ROR. ROR	. ROR
. RO/
pVP                  4        UUu/ uF  w  r#V\        V3R lV 4       4      bK  	  ppp\        WDP                  R7      pWE,          ^ 8�  d   V# R# u uppi )z/Auto-detect the most relevant domain from queryr
   r   r   r   r   r   r   r   r   r   c              3   �8   <"  � T F  qS9   g   K  ^x � K  	  R# 5i)rI   NrJ   )ru   �kw�query_lowers   & �r+   rx   � detect_domain.<locals>.<genexpr>�   s   �� � �D�h���2C�!�!�h�s   ��
)rN   )r
   �palette�hex�#�rgb)	r   �graph�visualization�trend�bar�pie�scatter�heatmap�funnel)r   �page�cta�
conversion�hero�testimonial�pricing�section)	�saas�	ecommercez
e-commerce�fintech�
healthcare�gaming�	portfolio�crypto�	dashboard)r   �design�ui�
minimalism�glassmorphism�neumorphism�	brutalismz	dark mode�flat�aurora�prompt�css�implementation�variable�	checklist�tailwind)
r   �	usability�accessibility�wcag�touch�scroll�	animation�keyboard�
navigation�mobile)�fontr   �heading�serif�sans)�iconr   �lucide�	heroicons�symbol�glyph�	pictogramzsvg icon)r   znext.jsr   �suspense�memo�usecallback�	useeffect�rerender�bundle�	waterfall�barrelzdynamic import�rsczserver component)	�aria�focus�outline�semantic�
virtualize�autocomplete�formz
input type�
preconnect)r4   r?   r<   �maxrt   )rS   �domain_keywords�domain�keywordsrU   �bestr�   s   &     @r+   �detect_domainr�   �   s�   �� ��+�+�-�K� 	�8��k��h��}��  M��~��H��e��  z��y��O� ^m�]r�]r�]t�u�]t�IY��f�c�D�h�D�D�D�]t�F�u��v�:�:�&�D��<�!�#�4�0��0�� vs   �!Bc           
     �6  � Vf   \        V 4      p\        P                  V\        R,          4      p\        VR,          ,          pVP	                  4       '       g
   RRV 2RV/# \        WCR,          VR,          W4      pRVRV RVR,          R	\        V4      R
V/# )z/Main search function with auto-domain detectionr   r   �errorzFile not found: r�   r   r	   rS   �countr   )r�   �
CSV_CONFIGrt   �DATA_DIRrz   r�   r6   )rS   r�   r|   �configrn   r   s   &&&   r+   �searchr�   �   s�   � ��~��u�%���^�^�F�J�w�$7�8�F��&��.�(�H��?�?����+�H�:�6��&�I�I��(�=�$9�6�-�;P�RW�e�G� 	�&�����v����W���7�� r.   c                �h  � V\         9  d   RRV RRP                  \        4       2/# \        \         V,          R,          ,          pVP	                  4       '       g
   RRV 2RV/# \        V\        R,          \        R	,          W4      pR
RRVRV R\         V,          R,          R\        V4      RV/# )z Search stack-specific guidelinesr�   zUnknown stack: z. Available: z, r   zStack file not found: �stackr   r	   r�   rS   r�   r   )�STACK_CONFIGr{   �AVAILABLE_STACKSr�   rz   r�   �_STACK_COLSr6   )rS   r�   r|   rn   r   s   &&&  r+   �search_stackr�   �   s�   � ��L� ��?�5�'��t�y�y�IY�?Z�>[�\�]�]��,�u�-�f�5�5�H��?�?����1�(��<�g�u�M�M��(�K��$>��M�@Z�\a�o�G� 	�'�������U�#�F�+���W���7�� r.   )�Style Category�Keywords�Best For�Type�AI Prompt Keywords)r�   r�   r�   zPrimary ColorszEffects & Animationr�   �Performance�AccessibilityzFramework Compatibility�
Complexityr�   zCSS/Technical KeywordszImplementation ChecklistzDesign System Variables)r   zPrimary (Hex)zSecondary (Hex)z	CTA (Hex)zBackground (Hex)z
Text (Hex)r   )�	Data Typer�   �Best Chart Type�Accessibility Notes)r�   r�   r�   zSecondary OptionszColor Guidancer�   zLibrary RecommendationzInteractive Level)�Pattern Namer�   �Conversion Optimization�Section Order)r�   r�   r�   zPrimary CTA PlacementzColor Strategyr�   )r   r�   �Primary Style RecommendationzKey Considerations)r   r�   r�   zSecondary StyleszLanding Page PatternzDashboard Style (if applicable)zColor Palette Focus)�Category�Issue�Description�Platform)	r�   r�   r�   r�   �Do�Don'tzCode Example GoodzCode Example Bad�Severity)�Font Pairing Namer�   �Mood/Style Keywordsr�   �Heading Font�	Body Font)
r�   r�   r�   r�   r�   r�   zGoogle Fonts URLz
CSS ImportzTailwind Configr   )r�   �	Icon Namer�   r�   )r�   r   r�   �LibraryzImport Code�Usager�   �Style)r�   r�   r�   r�   )r�   �	Guideliner�   r�   r�   )	r�   r  r�   r�   r�   z	Code GoodzCode Badr�   zDocs URL)rc   rl   r1   �pathlibr   �mathr   �collectionsr   �__file__�parentr�   �MAX_RESULTSr�   r�   r�   rk   �keysr�   r   rp   r�   r�   r�   r�   rJ   r.   r+   �<module>r     sk  ��� � 	� � � #� ��>� � �'�'�&�0���� ����_��  c��
 ������0��  D��
 ����Z��  q��
 ����_��  K��
 ����i��  z��
 	��#��G��  L��
 �� ��x��  w��
 ����H��t��
 ��'��G��  L��
 
��#��G��  L��]3�
�l �f�8�9��f�(�)��v�*�+��f�(�)�	�F�$�%��v�*�+���,�-��v�*�+���,�-��V�6�7���,�-��v�*�+��� <�=���$ �J��{���
 ��)�)�+�,� �;@� ;@�~'��21�, �;� �, ,7� r.   
```

---

### `.agent/skills/ui-ux-pro-max/scripts/__pycache__/design_system.cpython-314.pyc`
**Function:** Source code file.

```pyc
+
    �<ri^�  �                   �@  � R t ^ RIt^ RIt^ RIt^ RIHt ^ RIHt ^ RIHtH	t	 Rt
RR^/RR^/R	R^/R
R^/RR^//t ! R R4      t^ZtR R ltR R ltR.R R lltR/R R lltR R ltR0R R lltR R ltR R lt]R8X  d�   ^ RIt]P0                  ! R R!7      t]P5                  R"R#R$7       ]P5                  R%R&]RR'R(7       ]P5                  R)R*RR+.RR,R-7       ]P9                  4       t]! ]P<                  ]P>                  ]P@                  4      t!]"! ]!4       R# R# )1a�  
Design System Generator - Aggregates search results and applies reasoning
to generate comprehensive design system recommendations.

Usage:
    from design_system import generate_design_system
    result = generate_design_system("SaaS dashboard", "My Project")
    
    # With persistence (Master + Overrides pattern)
    result = generate_design_system("SaaS dashboard", "My Project", persist=True)
    result = generate_design_system("SaaS dashboard", "My Project", persist=True, page="dashboard")
N)�datetime)�Path)�search�DATA_DIRzui-reasoning.csv�product�max_results�style�color�landing�
typographyc                   �   a � ] tR t^%t o RtR tV 3R lR ltRV 3R lR lltV 3R lR	 ltV 3R
 lR lt	V 3R lR lt
V 3R lR ltRV 3R lR lltRtV tR# )�DesignSystemGeneratorzAGenerates design system recommendations from aggregated searches.c                �0   � V P                  4       V n        R # �N)�_load_reasoning�reasoning_data)�selfs   &�s/Users/viettranx/Documents/coding/next-level-builder/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/design_system.py�__init__�DesignSystemGenerator.__init__(   s   � �"�2�2�4���    c                �    <� V ^8�  d   QhRS[ /# )�   �return)�list)�format�__classdict__s   "�r   �__annotate__�"DesignSystemGenerator.__annotate__+   s   �� � +� +�� +r   c                ��   � \         \        ,          pVP                  4       '       g   . # \        VRRR7      ;_uu_ 4       p\	        \
        P                  ! V4      4      uuRRR4       #   + '       g   i     R# ; i)zLoad reasoning rules from CSV.�r�utf-8��encodingN)r   �REASONING_FILE�exists�openr   �csv�
DictReader)r   �filepath�fs   &  r   r   �%DesignSystemGenerator._load_reasoning+   sO   � ��n�,����� � ��I��(�C�'�2�2�a�����q�)�*� 3�2�2�2�s   � A*�*A;	Nc                �,   <� V ^8�  d   QhRS[ RS[RS[/# )r   �query�style_priorityr   )�strr   �dict)r   r   s   "�r   r   r   3   s"   �� � � �#� �t� �t� r   c                �  � / p\         P                  4        Fi  w  rEVR8X  dI   V'       dA   V'       d   RP                  VR,          4      MTpV RV 2p\        WtVR,          4      W4&   KT  \        WVR,          4      W4&   Kk  	  V# )z)Execute searches across multiple domains.r   � :Nr   Nr   )�SEARCH_CONFIG�items�joinr   )r   r-   r.   �results�domain�config�priority_query�combined_querys   &&&     r   �_multi_domain_search�*DesignSystemGenerator._multi_domain_search3   s|   � ���+�1�1�3�N�F��� �^�AO����.��*<�!=�UZ��$)�7�!�N�+;�!<��"(����AV�"W���"(���}�8M�"N��� 4� �r   c                �&   <� V ^8�  d   QhRS[ RS[/# )r   �categoryr   �r/   r0   )r   r   s   "�r   r   r   @   s   �� � � �S� �T� r   c                �x  a� VP                  4       oV P                   F,  pVP                  RR4      P                  4       S8X  g   K*  Vu # 	  V P                   F5  pVP                  RR4      P                  4       pVS9   g
   SV9   g   K3  Vu # 	  V P                   F�  pVP                  RR4      P                  4       pVP                  RR4      P                  RR4      P	                  4       p\
        ;QJ d    V3R lV 4       F  '       g   K   RM	  RM! V3R lV 4       4      '       g   K�  Vu # 	  / # )	z,Find matching reasoning rule for a category.�UI_Category� �/r2   �-c              3   �,   <"  � T F	  qS9   x � K  	  R # 5ir   � )�.0�kw�category_lowers   & �r   �	<genexpr>�=DesignSystemGenerator._find_reasoning_rule.<locals>.<genexpr>S   s   �� � �;�(�B��'�(��   �TF)�lowerr   �get�replace�split�any)r   r>   �rule�ui_cat�keywordsrI   s   &&   @r   �_find_reasoning_rule�*DesignSystemGenerator._find_reasoning_rule@   s�   �� �!���)�� �'�'�D��x�x��r�*�0�0�2�n�D��� (�
 �'�'�D��X�X�m�R�0�6�6�8�F���'�>�V�+C��� (� �'�'�D��X�X�m�R�0�6�6�8�F��~�~�c�3�/�7�7��S�A�G�G�I�H��s�;�(�;�s�s�s�;�(�;�;�;���	 (� �	r   c                �,   <� V ^8�  d   QhRS[ RS[RS[/# )r   r>   �search_resultsr   r?   )r   r   s   "�r   r   r   X   s"   �� �  
�  
��  
�d�  
�t�  
r   c                �J  � V P                  V4      pV'       g   RRRRR.RRRR	R
RRRR/ RR/# / p \        P                  ! VP                  RR4      4      pRVP                  RR4      RVP                  RR4      P                  R4       Uu. uF  qUP                  4       NK  	  upRVP                  RR4      RVP                  RR4      R
VP                  RR4      RVP                  RR4      RVRVP                  RR4      /#   \        P                   d     L�i ; iu upi )z(Apply reasoning rules to search results.�pattern�Hero + Features + CTAr.   �
MinimalismzFlat Design�
color_mood�Professional�typography_mood�Clean�key_effectszSubtle hover transitions�anti_patternsrB   �decision_rules�severity�MEDIUM�Decision_Rulesz{}�Recommended_Pattern�Style_Priority�+�
Color_Mood�Typography_Mood�Key_Effects�Anti_Patterns�Severity)rU   �json�loadsrN   �JSONDecodeErrorrP   �strip)r   r>   rX   rR   rc   �ss   &&&   r   �_apply_reasoning�&DesignSystemGenerator._apply_reasoningX   s8  � ��(�(��2����2� �<��"?��n�!�7��9��� �"��H�	� 	� ��	�!�Z�Z����1A�4�(H�I�N�
 �t�x�x� 5�r�:��$�(�(�;K�R�2P�2V�2V�WZ�2[�\�2[�Q�w�w�y�2[�\��$�(�(�<��4��t�x�x�(9�2�>��4�8�8�M�2�6��T�X�X�o�r�:��n������X�6�	
� 		
�� �#�#� 	��	��
 ]s   �&D �D 
�D�Dc                �,   <� V ^8�  d   QhRS[ RS[ RS[/# )r   r6   �priority_keywordsr   )r   r0   )r   r   s   "�r   r   r   z   s'   �� � #K� #K�$� #K�4� #K�D� #Kr   c                �,  � V'       g   / # V'       g
   V^ ,          # V F\  pVP                  4       P                  4       pV F5  pVP                  RR4      P                  4       pWF9   g	   Wd9   g   K1  Vu u # 	  K^  	  . pV F�  p\        V4      P                  4       p^ p	V F�  p
V
P                  4       P                  4       pW�P                  RR4      P                  4       9   d   V	^
,          p	KP  W�P                  RR4      P                  4       9   d   V	^,          p	K  W�9   g   K�  V	^,          p	K�  	  VP	                  W�34       K�  	  VP                  R RR7       V'       d&   V^ ,          ^ ,          ^ 8�  d   V^ ,          ^,          # V^ ,          # )z7Select best matching result based on priority keywords.�Style CategoryrB   �Keywordsc                 �   � V ^ ,          # )�    rF   )�xs   &r   �<lambda>�:DesignSystemGenerator._select_best_match.<locals>.<lambda>�   s   � �!�A�$r   T)�key�reverse)rM   rr   rN   r/   �append�sort)r   r6   rw   �priority�priority_lower�result�
style_name�scored�
result_str�scorerH   �kw_lowers   &&&         r   �_select_best_match�(DesignSystemGenerator._select_best_matchz   sR  � ���I� ��1�:�� *�H�%�^�^�-�3�3�5�N�!��#�Z�Z�(8�"�=�C�C�E�
�!�/�:�3O�!�M� "� *� ���F��V��*�*�,�J��E�'���8�8�:�+�+�-���z�z�*:�B�?�E�E�G�G��R�K�E����J��!;�!A�!A�!C�C��Q�J�E��+��Q�J�E� (� �M�M�5�/�*� �  	������5�%�&��)�A�,��*:�v�a�y��|�J���
�Jr   c                �&   <� V ^8�  d   QhRS[ RS[/# )r   �search_resultr   )r0   r   )r   r   s   "�r   r   r   �   s   �� � 0� 0�d� 0�t� 0r   c                �&   � VP                  R. 4      # )z-Extract results list from search result dict.r6   )rN   )r   r�   s   &&r   �_extract_results�&DesignSystemGenerator._extract_results�   s   � �� � ��B�/�/r   c                �,   <� V ^8�  d   QhRS[ RS[ RS[/# )r   r-   �project_namer   r?   )r   r   s   "�r   r   r   �   s'   �� � I
� I
�c� I
�� I
�� I
r   c                �P  � \        VR^4      pVP                  R. 4      pRpV'       d   V^ ,          P                  RR4      pV P                  V/ 4      pVP                  R. 4      pV P                  W4      pW8R&   V P	                  VP                  R/ 4      4      p	V P	                  VP                  R/ 4      4      p
V P	                  VP                  R/ 4      4      pV P	                  VP                  R	/ 4      4      pV P                  W�P                  R. 4      4      pV
'       d
   V
^ ,          M/ pV'       d
   V^ ,          M/ pV'       d
   V^ ,          M/ pVP                  R
R4      pVP                  RR4      pV'       d   TMTpRT;'       g    VP                  4       RVRRVP                  RVP                  RR4      4      RVP                  RR4      RVP                  RR4      RVP                  RR4      RVP                  RR4      /RRVP                  RR4      RVP                  R R4      R!VR"VP                  R#R4      R$VP                  R%R4      R&VP                  R'R4      R(VP                  R)R4      /R*R+VP                  R,R-4      R.VP                  R/R04      R1VP                  R2R34      R4VP                  R5R64      R7VP                  R8R94      R:VP                  R;R4      /RR<VP                  R=R>4      R?VP                  R@R>4      RAVP                  RBVP                  RCR4      4      R$VP                  R%R4      RDVP                  RER4      RFVP                  RGR4      /RVRHVP                  RHR4      RIVP                  RI/ 4      RJVP                  RJRK4      /
# )Lz/Generate complete design system recommendation.r   r6   �GeneralzProduct Typer.   r   r	   r   r
   �Effects & AnimationrB   ra   r�   r>   rZ   �namezPattern Namer[   �sections�Section OrderzHero > Features > CTA�cta_placement�Primary CTA Placementz
Above fold�color_strategy�Color Strategy�
conversionzConversion Optimizationry   r\   �type�Type�effectsrT   rz   �best_for�Best For�performance�Performance�accessibility�Accessibility�colors�primaryzPrimary (Hex)�#2563EB�	secondaryzSecondary (Hex)�#3B82F6�ctaz	CTA (Hex)�#F97316�
backgroundzBackground (Hex)�#F8FAFC�textz
Text (Hex)�#1E293B�notes�Notes�headingzHeading Font�Inter�bodyz	Body Font�moodzMood/Style Keywordsr_   �google_fonts_urlzGoogle Fonts URL�
css_importz
CSS Importrb   rc   rd   re   )r   rN   rt   r;   r�   r�   �upper)r   r-   r�   �product_result�product_resultsr>   �	reasoningr.   rX   �style_results�color_results�typography_results�landing_results�
best_style�
best_color�best_typography�best_landing�style_effects�reasoning_effects�combined_effectss   &&&                 r   �generate�DesignSystemGenerator.generate�   s�  � �  ��y�!�4��(�,�,�Y��;�����&�q�)�-�-�n�i�H�H� �)�)�(�B�7�	�"���'7��<�� �2�2�5�I��$2�y�!� �-�-�n�.@�.@��"�.M�N���-�-�n�.@�.@��"�.M�N��!�2�2�>�3E�3E�l�TV�3W�X���/�/��0B�0B�9�b�0Q�R���,�,�]�M�M�JZ�\^�<_�`�
�)6�]�1�%�B�
�3E�,�Q�/�2��-<��q�)�"�� #���'<�b�A��%�M�M�-��<��,9�=�?P�� �L�9�9�E�K�K�M������(�(�����y�Ri�9j�k��L�,�,�_�>U�V���!1�!1�2I�<�!X� �,�"2�"2�3C�R�"H��l�.�.�/H�"�M�� ��
���'7��F��
���v�y�9��=��J�N�N�:�r�:��J�N�N�:�r�:��z�~�~�m�R�@�������!D�� ��:�>�>�/�9�E��Z�^�^�,=�y�I��z�~�~�k�9�=��j�n�n�-?��K��
���|�Y�?�������4�� ��?�.�.�~�w�G���+�+�K��A���+�+�,A�9�=�=�Qb�df�Cg�h��O�/�/�
�B�?�"�O�$7�$7�8J�B�$O��o�1�1�,��C�� �+��Y�]�]�?�B�?��i�m�m�,<�b�A��	���j�(�;�M'
� '	
r   )r   r   )�__name__�
__module__�__qualname__�__firstlineno__�__doc__r   r   r;   rU   rt   r�   r�   r�   �__static_attributes__�__classdictcell__)r   s   @r   r   r   %   s_   �� � �K�5�+� +�� �� �0 
�  
�D#K� #K�J0� 0�I
� I
� I
r   r   c                �0   � V ^8�  d   QhR\         R\        /# �r   �design_systemr   �r0   r/   )r   s   "r   r   r   �   s   � � z� z�D� z�S� zr   c           	     �  � V P                  RR4      pV P                  R/ 4      pV P                  R/ 4      pV P                  R/ 4      pV P                  R/ 4      pV P                  RR4      pV P                  R	R4      pR
 R lpVP                  RR4      P                  R4      p	V	 U
u. uF*  q�P                  4       '       g   K  V
P                  4       NK,  	  p	p
. p\        ^,
          pVP	                  RRV,          ,           R,           4       VP	                  RV R2P                  \        4      R,           4       VP	                  RRV,          ,           R,           4       VP	                  RR\        ,          ,           R,           4       VP	                  RVP                  RR4       2P                  \        4      R,           4       VP                  R4      '       d?   VP	                  RVP                  RR4       2P                  \        4      R,           4       VP                  R4      '       d?   VP	                  RVP                  RR4       2P                  \        4      R,           4       VP	                  RP                  \        4      R,           4       \        V	^4       F6  w  r�VP	                  RV RV 2P                  \        4      R,           4       K8  	  VP	                  RR\        ,          ,           R,           4       VP	                  RVP                  RR4       2P                  \        4      R,           4       VP                  R4      '       dT   V! RVP                  RR4       2R \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP                  R!4      '       dT   V! R"VP                  R!R4       2R \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP                  R#4      '       g   VP                  R$4      '       dW   R%VP                  R#R4       R&VP                  R$R4       2pVP	                  R V 2P                  \        4      R,           4       VP	                  RR\        ,          ,           R,           4       VP	                  R'P                  \        4      R,           4       VP	                  R(VP                  R)R4       2P                  \        4      R,           4       VP	                  R*VP                  R+R4       2P                  \        4      R,           4       VP	                  R,VP                  R-R4       2P                  \        4      R,           4       VP	                  R.VP                  R/R4       2P                  \        4      R,           4       VP	                  R0VP                  R1R4       2P                  \        4      R,           4       VP                  R24      '       dT   V! R3VP                  R2R4       2R \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP	                  RR\        ,          ,           R,           4       VP	                  R4VP                  R5R4       R6VP                  R7R4       2P                  \        4      R,           4       VP                  R84      '       dT   V! R9VP                  R8R4       2R \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP                  R!4      '       dT   V! R"VP                  R!R4       2R \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP                  R:4      '       d?   VP	                  R;VP                  R:R4       2P                  \        4      R,           4       VP                  R<4      '       dG   VP	                  R=VP                  R<R4      R>,           R?2P                  \        4      R,           4       VP	                  RR\        ,          ,           R,           4       V'       d�   VP	                  R@P                  \        4      R,           4       V! VR \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP	                  RR\        ,          ,           R,           4       V'       d�   VP	                  RAP                  \        4      R,           4       V! VR \        4       F.  pVP	                  VP                  \        4      R,           4       K0  	  VP	                  RR\        ,          ,           R,           4       VP	                  RBP                  \        4      R,           4       . RDOpV F1  pVP	                  R V 2P                  \        4      R,           4       K3  	  VP	                  RR\        ,          ,           R,           4       VP	                  RRV,          ,           R,           4       RCP                  V4      # u up
i )Ez:Format design system as ASCII box with emojis (MCP-style).r�   �PROJECTrZ   r   r�   r   ra   rB   rb   c                �H   � V ^8�  d   QhR\         R\         R\        R\        /# )r   r�   �prefix�widthr   )r/   �intr   )r   s   "r   r   �&format_ascii_box.<locals>.__annotate__�   s(   � � � �� �S� �� �� r   c                �P  � V '       g   . # V P                  4       p. pTpV Fj  p\        V4      \        V4      ,           ^,           V^,
          8:  d   YUV8w  d   RMRV,           ,          pKK  WQ8w  d   VP                  V4       W,           pKl  	  WQ8w  d   VP                  V4       V# )z#Wrap long text into multiple lines.r2   rB   )rP   �lenr�   )r�   r�   r�   �words�lines�current_line�words   &&&    r   �	wrap_text�#format_ascii_box.<locals>.wrap_text�   s�   � ���I��
�
��������D��<� �3�t�9�,�q�0�E�A�I�=���(>��B�$� N�N���)��L�L��.�%�}�� � �!��L�L��&��r   r�   �>ri   rD   z|  TARGET: z - RECOMMENDED DESIGN SYSTEM�|r2   z|  PATTERN: r�   r�   z|     Conversion: r�   z|     CTA: z|     Sections:z|       z. z
|  STYLE: rT   z
Keywords: z|     r�   z
Best For: r�   r�   zPerformance: z | Accessibility: z
|  COLORS:z|     Primary:    r�   z|     Secondary:  r�   z|     CTA:        r�   z|     Background: r�   z|     Text:       r�   r�   zNotes: z|  TYPOGRAPHY: r�   z / r�   r�   zMood: r�   z|     Google Fonts: r�   z|     CSS Import: :N�F   Nz...z|  KEY EFFECTS:z|  AVOID (Anti-patterns):z|  PRE-DELIVERY CHECKLIST:�
)z2[ ] No emojis as icons (use SVG: Heroicons/Lucide)z,[ ] cursor-pointer on all clickable elementsz4[ ] Hover states with smooth transitions (150-300ms)z+[ ] Light mode: text contrast 4.5:1 minimumz)[ ] Focus states visible for keyboard navz$[ ] prefers-reduced-motion respectedz,[ ] Responsive: 375px, 768px, 1024px, 1440px)rN   rP   rr   �	BOX_WIDTHr�   �ljust�	enumerater5   )r�   �projectrZ   r   r�   r   r�   rb   r�   r�   rs   r�   �w�i�section�line�	perf_a11y�checklist_items�items   &                  r   �format_ascii_boxr�   �   sB  � �����	�:�G����	�2�.�G����g�r�*�E����x��,�F��"�"�<��4�J�����r�2�G�!�%�%�o�r�:�M��& �{�{�:�r�*�0�0��5�H�#+�9�8�a�w�w�y�	����	�8�H�9� �E��A��A�	�L�L��s�Q�w���$�%�	�L�L�;�w�i�'C�D�J�J�9�U�X[�[�\�	�L�L��s�Q�w���$�%�	�L�L��s�Y��&��,�-� 
�L�L�<����F�B� 7�8�9�?�?�	�J�S�P�Q��{�{�<� � ����)�'�+�+�l�B�*G�)H�I�O�O�PY�Z�]`�`�a��{�{�?�#�#����{�7�;�;���#C�"D�E�K�K�I�V�Y\�\�]�	�L�L�"�(�(��3�c�9�:���!�,�
�����x��s�"�W�I�.�4�4�Y�?�#�E�F� -�	�L�L��s�Y��&��,�-� 
�L�L�:�e�i�i���3�4�5�;�;�I�F��L�M��y�y�����
�5�9�9�Z��+D�*E�F��R[�\�D��L�L����I�.��4�5� ]��y�y�����
�5�9�9�Z��+D�*E�F��R[�\�D��L�L����I�.��4�5� ]��y�y����5�9�9�_�#=�#=�#�E�I�I�m�R�$@�#A�AS�TY�T]�T]�^m�oq�Tr�Ss�t�	����v�i�[�)�/�/�	�:�S�@�A�	�L�L��s�Y��&��,�-� 
�L�L��#�#�I�.��4�5�	�L�L�%�f�j�j��B�&?�%@�A�G�G�	�R�UX�X�Y�	�L�L�%�f�j�j��b�&A�%B�C�I�I�)�T�WZ�Z�[�	�L�L�%�f�j�j���&;�%<�=�C�C�I�N�QT�T�U�	�L�L�%�f�j�j��r�&B�%C�D�J�J�9�U�X[�[�\�	�L�L�%�f�j�j���&<�%=�>�D�D�Y�O�RU�U�V��z�z�'������
�
�7�B�(?�'@�A�8�Y�W�D��L�L����I�.��4�5� X�	�L�L��s�Y��&��,�-� 
�L�L�?�:�>�>�)�R�#@�"A��Z�^�^�TZ�\^�E_�D`�a�g�g�hq�r�ux�x�y��~�~�f�����z�~�~�f�b�'A�&B�C�X�y�Y�D��L�L����I�.��4�5� Z��~�~�j�!�!��
�:�>�>�*�b�+I�*J�K�X�W`�a�D��L�L����I�.��4�5� b��~�~�(�)�)����+�J�N�N�;M�r�,R�+S�T�Z�Z�[d�e�hk�k�l��~�~�l�#�#����)�*�.�.��r�*J�3�*O�)P�PS�T�Z�Z�[d�e�hk�k�l�	�L�L��s�Y��&��,�-� ����&�,�,�Y�7�#�=�>��g�x��;�D��L�L����I�.��4�5� <����S�3��?�*�S�0�1� ����0�6�6�y�A�C�G�H��m�X�y�A�D��L�L����I�.��4�5� B����S�3��?�*�S�0�1� 
�L�L�-�3�3�I�>��D�E��O�  �����v�d�V�_�*�*�9�5��;�<�  �	�L�L��s�Y��&��,�-�	�L�L��s�Q�w���$�%��9�9�U����y :s   �*k
�k
c                �0   � V ^8�  d   QhR\         R\        /# r�   r�   )r   s   "r   r   r   o  s   � � [� [�4� [�C� [r   c           	     �  � V P                  RR4      pV P                  R/ 4      pV P                  R/ 4      pV P                  R/ 4      pV P                  R/ 4      pV P                  RR4      pV P                  R	R4      p. pVP                  R
V 24       VP                  R4       VP                  R4       VP                  RVP                  RR4       24       VP                  R4      '       d%   VP                  RVP                  RR4       24       VP                  R4      '       d%   VP                  RVP                  RR4       24       VP                  R4      '       d%   VP                  RVP                  RR4       24       VP                  RVP                  RR4       24       VP                  R4       VP                  R4       VP                  RVP                  RR4       24       VP                  R4      '       d%   VP                  RVP                  RR4       24       VP                  R4      '       d%   VP                  RVP                  RR4       24       VP                  R4      '       g   VP                  R4      '       d8   VP                  RVP                  RR4       RVP                  RR4       24       VP                  R4       VP                  R4       VP                  R 4       VP                  R!4       VP                  R"VP                  R#R4       R$24       VP                  R%VP                  R&R4       R$24       VP                  R'VP                  R(R4       R$24       VP                  R)VP                  R*R4       R$24       VP                  R+VP                  R,R4       R$24       VP                  R-4      '       d&   VP                  R.VP                  R-R4       R/24       VP                  R4       VP                  R04       VP                  R1VP                  R2R4       24       VP                  R3VP                  R4R4       24       VP                  R54      '       d%   VP                  R6VP                  R5R4       24       VP                  R4      '       d%   VP                  RVP                  RR4       24       VP                  R74      '       d%   VP                  R8VP                  R7R4       24       VP                  R94      '       dV   VP                  R:4       VP                  R;4       VP                  VP                  R9R4       4       VP                  R<4       VP                  R4       V'       d5   VP                  R=4       VP                  V 4       VP                  R4       V'       dI   VP                  R>4       R?p	VP                  R@VP                  RAV	4       24       VP                  R4       VP                  RB4       VP                  RC4       VP                  RD4       VP                  RE4       VP                  RF4       VP                  RG4       VP                  RH4       VP                  RI4       VP                  R4       RJP                  V4      # )Kz!Format design system as markdown.r�   r�   rZ   r   r�   r   ra   rB   rb   z## Design System: z### Patternz- **Name:** r�   r�   z- **Conversion Focus:** r�   �- **CTA Placement:** r�   z- **Color Strategy:** z- **Sections:** r�   z	### StylerT   z- **Keywords:** r�   z- **Best For:** r�   r�   z- **Performance:** z | **Accessibility:** z
### Colorsz| Role | Hex |z|------|-----|z| Primary | r�   z |z| Secondary | r�   z| CTA | r�   z| Background | r�   z	| Text | r�   r�   z	
*Notes: �*�### Typographyz- **Heading:** r�   z- **Body:** r�   r�   �- **Mood:** r�   z- **Google Fonts:** r�   z- **CSS Import:**�```css�```z### Key Effectsz### Avoid (Anti-patterns)z
- �- � + z### Pre-Delivery Checklistz4- [ ] No emojis as icons (use SVG: Heroicons/Lucide)z.- [ ] cursor-pointer on all clickable elements�6- [ ] Hover states with smooth transitions (150-300ms)�-- [ ] Light mode: text contrast 4.5:1 minimumz+- [ ] Focus states visible for keyboard navz&- [ ] prefers-reduced-motion respected�.- [ ] Responsive: 375px, 768px, 1024px, 1440pxr�   )rN   r�   rO   r5   )
r�   r�   rZ   r   r�   r   r�   rb   r�   �newline_bullets
   &         r   �format_markdownr  o  s�  � �����	�:�G����	�2�.�G����g�r�*�E����x��,�F��"�"�<��4�J�����r�2�G�!�%�%�o�r�:�M��E�	�L�L�%�g�Y�/�0�	�L�L��� 
�L�L���	�L�L�<����F�B� 7�8�9�:��{�{�<� � ����/����L�"�0M�/N�O�P��{�{�?�#�#����,�W�[�[��"�-M�,N�O�P��{�{�#�$�$����-�g�k�k�:J�B�.O�-P�Q�R�	�L�L�#�G�K�K�
�B�$?�#@�A�B�	�L�L��� 
�L�L���	�L�L�<��	�	�&�"� 5�6�7�8��y�y�������'��	�	�*�b�(A�'B�C�D��y�y�������'��	�	�*�b�(A�'B�C�D��y�y����5�9�9�_�#=�#=����*�5�9�9�]�B�+G�*H�H^�_d�_h�_h�ix�z|�_}�^~��  	A�	�L�L��� 
�L�L���	�L�L�>�#�	�L�L�>�#�	�L�L�<��
�
�9�b� 9�:�"�=�>�	�L�L�>�&�*�*�[�"�"=�!>�b�A�B�	�L�L�8�F�J�J�u�b�1�2�"�5�6�	�L�L�?�6�:�:�l�B�#?�"@��C�D�	�L�L�9�V�Z�Z���3�4�B�7�8��z�z�'������z�&�*�*�W�b�"9�!:�!�<�=�	�L�L��� 
�L�L�!�"�	�L�L�?�:�>�>�)�R�#@�"A�B�C�	�L�L�<�
���v�r� :�;�<�=��~�~�f������|�J�N�N�6�2�$>�#?�@�A��~�~�j�!�!����'�
���z�2�(F�'G�H�I��~�~�(�)�)����+�J�N�N�;M�r�,R�+S�T�U��~�~�l�#�#����(�*����v�����
���|�R�8�9�;����s��	�L�L��� ����&�'�����y�"����R�� ����0�1������r�-�/�/��~�F�G�H�I����R�� 
�L�L�-�.�	�L�L�G�H�	�L�L�A�B�	�L�L�I�J�	�L�L�@�A�	�L�L�>�?�	�L�L�9�:�	�L�L�A�B�	�L�L����9�9�U��r   �asciic                �l   � V ^8�  d   QhR\         R\         R\         R\        R\         R\         R\         /# )r   r-   r�   �output_format�persist�page�
output_dirr   )r/   �bool)r   s   "r   r   r   �  sB   � � +� +�#� +�S� +�PS� +�$(�+�8;�+�PS�+�_b�+r   c                �   � \        4       pVP                  W4      pV'       d   \        WtWP4       VR8X  d   \        V4      # \	        V4      # )a�  
Main entry point for design system generation.

Args:
    query: Search query (e.g., "SaaS dashboard", "e-commerce luxury")
    project_name: Optional project name for output header
    output_format: "ascii" (default) or "markdown"
    persist: If True, save design system to design-system/ folder
    page: Optional page name for page-specific override file
    output_dir: Optional output directory (defaults to current working directory)

Returns:
    Formatted design system string
�markdown)r   r�   �persist_design_systemr  r�   )r-   r�   r  r	  r
  r  �	generatorr�   s   &&&&&&  r   �generate_design_systemr  �  sI   � �  &�'�I��&�&�u�;�M� ��m�:�E��
�"��}�-�-��M�*�*r   c          
      �T   � V ^8�  d   QhR\         R\        R\        R\        R\         /# )r   r�   r
  r  �
page_queryr   r�   )r   s   "r   r   r   �  s1   � � 0� 0�� 0�S� 0�S� 0�eh� 0�tx� 0r   c                �p  � V'       d   \        V4      M\         P                  ! 4       pV P                  RR4      pVP                  4       P	                  RR4      pVR,          V,          pVR,          p. p	VP                  RRR7       VP                  RRR7       VR	,          p
\        V 4      p\        V
R
RR7      ;_uu_ 4       pVP                  V4       RRR4       V	P                  \        V
4      4       V'       d�   W�P                  4       P	                  RR4       R2,          p\        WV4      p\        VR
RR7      ;_uu_ 4       pVP                  V4       RRR4       V	P                  \        V4      4       RRR\        V4      RV	/#   + '       g   i     L�; i  + '       g   i     LN; i)a�  
Persist design system to design-system/<project>/ folder using Master + Overrides pattern.

Args:
    design_system: The generated design system dictionary
    page: Optional page name for page-specific override file
    output_dir: Optional output directory (defaults to current working directory)
    page_query: Optional query string for intelligent page override generation

Returns:
    dict with created file paths and status
r�   �defaultr2   rD   zdesign-system�pagesT)�parents�exist_okz	MASTER.mdr�   r!   r"   Nz.md�status�success�design_system_dir�created_files)r   �cwdrN   rM   rO   �mkdir�format_master_mdr&   �writer�   r/   �format_page_override_md)r�   r
  r  r  �base_dirr�   �project_slugr  �	pages_dirr  �master_file�master_contentr*   �	page_file�page_contents   &&&&           r   r  r  �  sq  � � $.�t�J��4�8�8�:�H� !�$�$�^�Y�?�L��%�%�'�/�/��S�9�L� �?�2�\�A��!�G�+�I��M� ���D�4��8��O�O�D�4�O�0�#�k�1�K� &�m�4�N�	�k�3��	1�	1�Q�	����� 
2�����[�)�*� ��:�:�<�#7�#7��S�#A�"B�#� F�F�	�.�}�J�O���)�S�7�3�3�q��G�G�L�!� 4����S��^�,� 	�)��S�!2�3���� � 
2�	1�� 4�3�s   �F�F%�F"	�%F5	c                �0   � V ^8�  d   QhR\         R\        /# r�   r�   )r   s   "r   r   r     s   � � D� D�D� D�S� Dr   c                �"  � V P                  RR4      pV P                  R/ 4      pV P                  R/ 4      pV P                  R/ 4      pV P                  R/ 4      pV P                  RR4      pV P                  R	R4      p\        P                  ! 4       P                  R
4      p. p	V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  RV 24       V	P	                  RV 24       V	P	                  RV P                  RR4       24       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  RVP                  RR4       R24       V	P	                  RVP                  RR4       R 24       V	P	                  R!VP                  R"R#4       R$24       V	P	                  R%VP                  R&R'4       R(24       V	P	                  R)VP                  R*R+4       R,24       V	P	                  R4       VP                  R-4      '       d6   V	P	                  R.VP                  R-R4       24       V	P	                  R4       V	P	                  R/4       V	P	                  R4       V	P	                  R0VP                  R1R24       24       V	P	                  R3VP                  R4R24       24       VP                  R54      '       d%   V	P	                  R6VP                  R5R4       24       VP                  R74      '       dL   V	P	                  R8VP                  R1R4       R9VP                  R4R4       R:VP                  R7R4       R;24       V	P	                  R4       VP                  R<4      '       df   V	P	                  R=4       V	P	                  R>4       V	P	                  VP                  R<R4      4       V	P	                  R?4       V	P	                  R4       V	P	                  R@4       V	P	                  R4       V	P	                  RA4       V	P	                  RB4       V	P	                  RC4       V	P	                  RD4       V	P	                  RE4       V	P	                  RF4       V	P	                  RG4       V	P	                  RH4       V	P	                  RI4       V	P	                  R4       V	P	                  RJ4       V	P	                  R4       V	P	                  RK4       V	P	                  RB4       V	P	                  RL4       V	P	                  RM4       V	P	                  RN4       V	P	                  RO4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  RP4       V	P	                  R4       V	P	                  RQ4       V	P	                  R4       V	P	                  R>4       V	P	                  RR4       V	P	                  RS4       V	P	                  RTVP                  R"R#4       RU24       V	P	                  RV4       V	P	                  RW4       V	P	                  RX4       V	P	                  RY4       V	P	                  RZ4       V	P	                  R[4       V	P	                  R\4       V	P	                  R4       V	P	                  R]4       V	P	                  R^4       V	P	                  R_4       V	P	                  R\4       V	P	                  R4       V	P	                  R`4       V	P	                  Ra4       V	P	                  Rb4       V	P	                  RcVP                  RR4       RU24       V	P	                  RdVP                  RR4       RU24       V	P	                  RW4       V	P	                  RX4       V	P	                  RY4       V	P	                  RZ4       V	P	                  R[4       V	P	                  R\4       V	P	                  R?4       V	P	                  R4       V	P	                  Re4       V	P	                  R4       V	P	                  R>4       V	P	                  Rf4       V	P	                  RTVP                  R&Rg4       RU24       V	P	                  Rh4       V	P	                  Ri4       V	P	                  Rj4       V	P	                  RZ4       V	P	                  R[4       V	P	                  R\4       V	P	                  R4       V	P	                  Rk4       V	P	                  Rl4       V	P	                  Rm4       V	P	                  R\4       V	P	                  R?4       V	P	                  R4       V	P	                  Rn4       V	P	                  R4       V	P	                  R>4       V	P	                  Ro4       V	P	                  Rp4       V	P	                  Rq4       V	P	                  RX4       V	P	                  Rr4       V	P	                  Rs4       V	P	                  R\4       V	P	                  R4       V	P	                  Rt4       V	P	                  RuVP                  RR4       RU24       V	P	                  Rv4       V	P	                  RwVP                  RR4       Rx24       V	P	                  R\4       V	P	                  R?4       V	P	                  R4       V	P	                  Ry4       V	P	                  R4       V	P	                  R>4       V	P	                  Rz4       V	P	                  R{4       V	P	                  R|4       V	P	                  R\4       V	P	                  R4       V	P	                  R}4       V	P	                  R~4       V	P	                  R4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R\4       V	P	                  R?4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R�4       V	P	                  R4       V	P	                  R�VP                  R�R�4       24       V	P	                  R4       VP                  R�4      '       d6   V	P	                  R�VP                  R�R4       24       V	P	                  R4       VP                  R�4      '       d6   V	P	                  R�VP                  R�R4       24       V	P	                  R4       V'       d&   V	P	                  R�V 24       V	P	                  R4       V	P	                  R�4       V	P	                  R4       V	P	                  R�VP                  R�R4       24       V	P	                  R4       VP                  R�4      '       d%   V	P	                  R�VP                  R�R4       24       VP                  R�4      '       d%   V	P	                  R�VP                  R�R4       24       V	P	                  R�VP                  R�R4       24       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R�4       V	P	                  R4       V'       dU   VP                  R�4       U
u. uF  q�P                  4       NK  	  pp
V F!  pV'       g   K  V	P	                  R�V 24       K#  	  V	P	                  R4       V	P	                  R�4       V	P	                  R4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R4       V	P	                  R4       V	P	                  R4       V	P	                  R�4       V	P	                  R4       V	P	                  R�4       V	P	                  R4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R�4       V	P	                  R4       R�P                  V	4      # u up
i )�zCFormat design system as MASTER.md with hierarchical override logic.r�   r�   rZ   r   r�   r   ra   rB   rb   �%Y-%m-%d %H:%M:%Sz# Design System Master Filez]> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.z?> If that file exists, its rules **override** this Master file.z*> If not, strictly follow the rules below.�---z**Project:** z**Generated:** z**Category:** r>   r�   z## Global Rulesz### Color Palettez| Role | Hex | CSS Variable |z|------|-----|--------------|z| Primary | `r�   r�   z` | `--color-primary` |z| Secondary | `r�   r�   z` | `--color-secondary` |z| CTA/Accent | `r�   r�   z` | `--color-cta` |z| Background | `r�   r�   z` | `--color-background` |z
| Text | `r�   r�   z` | `--color-text` |r�   z**Color Notes:** r�   z- **Heading Font:** r�   r�   z- **Body Font:** r�   r�   r�   r�   z- **Google Fonts:** [r   z](�)r�   z**CSS Import:**r�   r�   z### Spacing Variablesz| Token | Value | Usage |z|-------|-------|-------|z1| `--space-xs` | `4px` / `0.25rem` | Tight gaps |z?| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |z5| `--space-md` | `16px` / `1rem` | Standard padding |z6| `--space-lg` | `24px` / `1.5rem` | Section padding |z/| `--space-xl` | `32px` / `2rem` | Large gaps |z5| `--space-2xl` | `48px` / `3rem` | Section margins |z2| `--space-3xl` | `64px` / `4rem` | Hero padding |z### Shadow Depthsz| Level | Value | Usage |z>| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |z@| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |zE| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |zP| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |z## Component Specsz### Buttonsz/* Primary Button */z.btn-primary {z  background: �;z  color: white;z  padding: 12px 24px;z  border-radius: 8px;z  font-weight: 600;z  transition: all 200ms ease;z  cursor: pointer;�}z.btn-primary:hover {z  opacity: 0.9;z  transform: translateY(-1px);z/* Secondary Button */z.btn-secondary {z  background: transparent;z	  color: z  border: 2px solid z	### Cardsz.card {z#FFFFFFz  border-radius: 12px;z  padding: 24px;z  box-shadow: var(--shadow-md);z.card:hover {z  box-shadow: var(--shadow-lg);z  transform: translateY(-2px);z
### Inputsz.input {z  padding: 12px 16px;z  border: 1px solid #E2E8F0;z  font-size: 16px;z&  transition: border-color 200ms ease;z.input:focus {z  border-color: z  outline: none;z  box-shadow: 0 0 0 3px z20;z
### Modalsz.modal-overlay {z!  background: rgba(0, 0, 0, 0.5);z  backdrop-filter: blur(4px);z.modal {z  background: white;z  border-radius: 16px;z  padding: 32px;z  box-shadow: var(--shadow-xl);z  max-width: 500px;z  width: 90%;z## Style Guidelinesz**Style:** r�   r\   rT   z**Keywords:** r�   z**Best For:** z**Key Effects:** z### Page Patternz**Pattern Name:** r�   z- **Conversion Strategy:** r�   r�   z- **Section Order:** r�   z## Anti-Patterns (Do NOT Use)ri   u   - ❌ z!### Additional Forbidden PatternsuM   - ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)uT   - ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointeruM   - ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layoutuE   - ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratiouF   - ❌ **Instant state changes** — Always use transitions (150-300ms)uJ   - ❌ **Invisible focus states** — Focus states must be visible for a11yz## Pre-Delivery Checklistz&Before delivering any UI code, verify:z/- [ ] No emojis used as icons (use SVG instead)z;- [ ] All icons from consistent icon set (Heroicons/Lucide)z0- [ ] `cursor-pointer` on all clickable elementsr  r  z2- [ ] Focus states visible for keyboard navigationz(- [ ] `prefers-reduced-motion` respectedr  z,- [ ] No content hidden behind fixed navbarsz$- [ ] No horizontal scroll on mobiler�   )rN   r   �now�strftimer�   rP   rr   r5   )r�   r�   rZ   r   r�   r   r�   rb   �	timestampr�   �a�	anti_list�antis   &            r   r  r    s�  � �����	�:�G����	�2�.�G����g�r�*�E����x��,�F��"�"�<��4�J�����r�2�G�!�%�%�o�r�:�M�����'�'�(;�<�I��E� 
�L�L�.�/�	�L�L���	�L�L�p�q�	�L�L�R�S�	�L�L�=�>�	�L�L���	�L�L���	�L�L���	�L�L�=��	�*�+�	�L�L�?�9�+�.�/�	�L�L�>�-�"3�"3�J�	�"J�!K�L�M�	�L�L���	�L�L���	�L�L��� 
�L�L�"�#�	�L�L��� 
�L�L�$�%�	�L�L���	�L�L�0�1�	�L�L�0�1�	�L�L�=����I�y�!A� B�BY�Z�[�	�L�L�?�6�:�:�k�9�#E�"F�F_�`�a�	�L�L�#�F�J�J�u�i�$@�#A�AT�U�V�	�L�L�#�F�J�J�|�Y�$G�#H�Hb�c�d�	�L�L�:�f�j�j���;�<�<P�Q�R�	�L�L����z�z�'������(����G�R�)@�(A�B�C����R�� 
�L�L�!�"�	�L�L���	�L�L�'�
���y�'�(J�'K�L�M�	�L�L�$�Z�^�^�F�G�%D�$E�F�G��~�~�f������|�J�N�N�6�2�$>�#?�@�A��~�~�(�)�)����,�Z�^�^�I�r�-J�,K�3�z�~�~�^d�fh�Oi�Nj�jl�mw�m{�m{�  }O�  QS�  nT�  mU�  UV�  W�  	X�	�L�L����~�~�l�#�#����&�'����X�����Z�^�^�L�"�5�6����U�����R�� 
�L�L�(�)�	�L�L���	�L�L�,�-�	�L�L�,�-�	�L�L�D�E�	�L�L�R�S�	�L�L�H�I�	�L�L�I�J�	�L�L�B�C�	�L�L�H�I�	�L�L�E�F�	�L�L��� 
�L�L�$�%�	�L�L���	�L�L�,�-�	�L�L�,�-�	�L�L�Q�R�	�L�L�S�T�	�L�L�X�Y�	�L�L�c�d�	�L�L��� 
�L�L���	�L�L���	�L�L�%�&�	�L�L��� 
�L�L���	�L�L���	�L�L���	�L�L�'�(�	�L�L�!�"�	�L�L�>�&�*�*�U�I�">�!?�q�A�B�	�L�L�"�#�	�L�L�(�)�	�L�L�(�)�	�L�L�&�'�	�L�L�0�1�	�L�L�%�&�	�L�L���	�L�L���	�L�L�'�(�	�L�L�"�#�	�L�L�1�2�	�L�L���	�L�L���	�L�L�)�*�	�L�L�#�$�	�L�L�-�/�	�L�L�9�V�Z�Z�	�9�=�>�a�@�A�	�L�L�'��
�
�9�i�(H�'I��K�L�	�L�L�(�)�	�L�L�(�)�	�L�L�&�'�	�L�L�0�1�	�L�L�%�&�	�L�L���	�L�L���	�L�L��� 
�L�L���	�L�L���	�L�L���	�L�L���	�L�L�>�&�*�*�\�9�"E�!F�a�H�I�	�L�L�)�*�	�L�L�#�$�	�L�L�2�3�	�L�L�0�1�	�L�L�%�&�	�L�L���	�L�L���	�L�L��!�	�L�L�2�3�	�L�L�1�2�	�L�L���	�L�L���	�L�L��� 
�L�L���	�L�L���	�L�L���	�L�L���	�L�L�(�)�	�L�L�/�0�	�L�L�(�)�	�L�L�%�&�	�L�L�9�:�	�L�L���	�L�L���	�L�L�!�"�	�L�L�#�F�J�J�y�)�$D�#E�Q�G�H�	�L�L�#�$�	�L�L�+�F�J�J�y�)�,L�+M�S�Q�R�	�L�L���	�L�L���	�L�L��� 
�L�L���	�L�L���	�L�L���	�L�L�#�$�	�L�L�4�5�	�L�L�0�1�	�L�L���	�L�L���	�L�L���	�L�L�'�(�	�L�L�)�*�	�L�L�#�$�	�L�L�2�3�	�L�L�&�'�	�L�L��!�	�L�L���	�L�L���	�L�L��� 
�L�L���	�L�L���	�L�L�&�'�	�L�L���	�L�L�;�u�y�y���>�?�@�A�	�L�L����y�y�������~�e�i�i�
�B�&?�%@�A�B����R���y�y�������~�e�i�i�
�B�&?�%@�A�B����R������(��	�2�3����R�� 
�L�L�#�$�	�L�L���	�L�L�%�g�k�k�&�"�&=�%>�?�@�	�L�L����{�{�<� � ����2�7�;�;�|�R�3P�2Q�R�S��{�{�?�#�#����,�W�[�[��"�-M�,N�O�P�	�L�L�(����Z��)D�(E�F�G�	�L�L��� 
�L�L���	�L�L���	�L�L�0�1�	�L�L����(5�(;�(;�C�(@�A�(@�1�W�W�Y�(@�	�A��D��t����v�d�V�_�-� � 
�L�L���	�L�L�4�5�	�L�L���	�L�L�`�a�	�L�L�g�h�	�L�L�`�a�	�L�L�X�Y�	�L�L�Y�Z�	�L�L�]�^�	�L�L��� 
�L�L���	�L�L���	�L�L�,�-�	�L�L���	�L�L�9�:�	�L�L���	�L�L�B�C�	�L�L�N�O�	�L�L�C�D�	�L�L�I�J�	�L�L�@�A�	�L�L�E�F�	�L�L�;�<�	�L�L�A�B�	�L�L�?�@�	�L�L�7�8�	�L�L����9�9�U����E Bs   �2AEc                �H   � V ^8�  d   QhR\         R\        R\        R\        /# )r   r�   �	page_namer  r   r�   )r   s   "r   r   r   %  s/   � � j� j�4� j�C� j�S� j�\_� jr   c                ��
  � V P                  RR4      p\        P                  ! 4       P                  R4      pVP	                  RR4      P	                  RR4      P                  4       p\        WV 4      p. pVP                  RV R24       VP                  R	4       VP                  R
V 24       VP                  RV 24       VP                  RVP                  RR4       24       VP                  R	4       VP                  R4       VP                  R4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R/ 4      pV'       d2   VP                  4        F  w  r�VP                  RV	 RV
 24       K  	  MVP                  R4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R/ 4      pV'       d2   VP                  4        F  w  r�VP                  RV	 RV
 24       K  	  MVP                  R4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R/ 4      pV'       d2   VP                  4        F  w  r�VP                  RV	 RV
 24       K  	  MVP                  R4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R/ 4      pV'       d2   VP                  4        F  w  r�VP                  RV	 RV
 24       K  	  MVP                  R 4       VP                  R	4       VP                  R!4       VP                  R	4       VP                  R". 4      pV'       d   V F  pVP                  R#V 24       K  	  MVP                  R$4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R%4       VP                  R	4       VP                  R&. 4      pV'       d   V F  pVP                  R#V 24       K  	  MVP                  R'4       VP                  R	4       VP                  R4       VP                  R	4       VP                  R(4       VP                  R	4       VP                  R). 4      pV'       d   V F  pVP                  R#V 24       K  	  VP                  R	4       R*P                  V4      # )+zKFormat a page-specific override file with intelligent AI-generated content.r�   r�   r+  rD   r2   �_z# z Page OverridesrB   z> **PROJECT:** z> **Generated:** z> **Page Type:** �	page_typer�   ud   > ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).z`> Only deviations from the Master are documented here. For all other rules, refer to the Master.r,  z## Page-Specific Rulesz### Layout Overrides�layoutz- **z:** u$   - No overrides — use Master layoutz### Spacing Overrides�spacingu%   - No overrides — use Master spacingz### Typography Overridesr   u(   - No overrides — use Master typographyz### Color Overridesr�   u$   - No overrides — use Master colorsz### Component Overrides�
componentsr�   u-   - No overrides — use Master component specsz## Page-Specific Components�unique_componentsz$- No unique components for this pagez## Recommendations�recommendationsr�   )
rN   r   r0  r1  rO   �title�_generate_intelligent_overridesr�   r4   r5   )r�   r7  r  r�   r2  �
page_title�page_overridesr�   r;  r�   �valuer<  r   r�   r=  �compr>  r?  �recs   &&&                r   r!  r!  %  sx  � �����	�:�G�����'�'�(;�<�I��"�"�3��,�4�4�S�#�>�D�D�F�J� 5�Y�M�Z�N��E�	�L�L�2�j�\��1�2�	�L�L���	�L�L�?�7�)�,�-�	�L�L�$�Y�K�0�1�	�L�L�$�^�%7�%7��Y�%O�$P�Q�R�	�L�L���	�L�L�w�x�	�L�L�s�t�	�L�L���	�L�L���	�L�L��� 
�L�L�)�*�	�L�L��� 
�L�L�'�(�	�L�L�������"�-�F�� �,�,�.�J�C��L�L�4��u�D���0�1� )� 	���;�<�	�L�L��� 
�L�L�(�)�	�L�L���� � ��B�/�G��!�-�-�/�J�C��L�L�4��u�D���0�1� *� 	���<�=�	�L�L��� 
�L�L�+�,�	�L�L����#�#�L�"�5�J��$�*�*�,�J�C��L�L�4��u�D���0�1� -� 	���?�@�	�L�L��� 
�L�L�&�'�	�L�L�������"�-�F�� �,�,�.�J�C��L�L�4��u�D���0�1� )� 	���;�<�	�L�L��� 
�L�L�*�+�	�L�L����#�#�L�"�5�J���D��L�L�2�d�V��%� � 	���D�E�	�L�L��� 
�L�L���	�L�L���	�L�L�.�/�	�L�L���&�*�*�+>��C���%�D��L�L�2�d�V��%� &� 	���;�<�	�L�L��� 
�L�L���	�L�L���	�L�L�%�&�	�L�L���$�(�(�):�B�?�O��"�C��L�L�2�c�U��$� #�	�L�L����9�9�U��r   c                �H   � V ^8�  d   QhR\         R\         R\        R\        /# )r   r7  r  r�   r   r?   )r   s   "r   r   r   �  s0   � � g� g�s� g�� g�TX� g�]a� gr   c                ��  a!� ^ RI Hp V P                  4       pT;'       g    RP                  4       pV RV 2pV! VR^R7      pV! VR^R7      pV! VR^R7      p	VP                  R. 4      p
VP                  R. 4      pV	P                  R. 4      p\	        Wj4      p/ p/ p/ p/ p. p. p. pV
'       Ed   V
^ ,          pVP                  R	R4      pVP                  R
R4      o!VP                  RR4      pVP                  RR4      p\
        ;QJ d    V!3R lR5 4       F  '       g   K   RM	  RM! V!3R lR5 4       4      '       d   RVR&   RVR&   RVR&   MZ\
        ;QJ d    V!3R lR6 4       F  '       g   K   RM	  RM! V!3R lR6 4       4      '       d   RVR&   RVR&   RVR&   M
RVR&   RVR&   V'       d   VP                  RV 24       V Fu  pVP                  RR4      pVP                  RR4      pVP                  R R4      pV'       d   VP                  V R!V 24       V'       g   Ka  VP                  R"V 24       Kw  	  V'       dv   V^ ,          pVP                  R#R4      pVP                  R$R4      pVP                  R%R4      p V'       d   VVR&&   V'       d   VP                  R'V 24       V '       d   V VR(&   V'       g   R)VR&   R*VR&   V'       g   R+R,.pR-VR.VR/VR0VR1VR2VR3VR4V/# )7z�
Generate intelligent overrides based on page type using layered search.

Uses the existing search infrastructure to find relevant style, UX, and layout
data instead of hardcoded page types.
)r   rB   r2   r   )r   �uxr
   r6   ry   rz   r�   r�   c              3   �H   <"  � T F  qSP                  4       9   x � K  	  R # 5ir   �rM   �rG   rH   rT   s   & �r   rJ   �2_generate_intelligent_overrides.<locals>.<genexpr>�  s   �� � �W�0V�"�X�^�^�%�%�0V��   �"TFz1400px or full-widthz	Max Widthz#12-column grid for data flexibility�Gridu)   High — optimize for information displayzContent Densityc              3   �H   <"  � T F  qSP                  4       9   x � K  	  R # 5ir   rK  rL  s   & �r   rJ   rM  �  s   �� � �[�2Z�B�x�~�~�'�'�2Z�rN  z800px (narrow, focused)zSingle column, centered�Layoutu   Low — focus on clarityz1200px (standard)z%Full-width sections, centered contentz	Effects: �Category�DozDon'tz: zAvoid: r�   r�   r�   �SectionszCTA Placement: �Strategy�1200pxzResponsive gridz'Refer to MASTER.md for all design rulesz.Add specific overrides as needed for this pager:  r;  r<  r   r�   r=  r>  r?  )�data�dense�	dashboard�grid)�minimal�simple�clean�single)�corer   rM   rN   �_detect_page_typerQ   r�   )"r7  r  r�   r   �
page_lower�query_lower�combined_context�style_search�	ux_search�landing_searchr�   �
ux_resultsr�   r:  r;  r<  r   r�   r=  r>  r?  r   r�   r�   r�   rI  r>   �do_text�	dont_textr
   r�   r�   r�   rT   s"   &&&                              @r   rA  rA  �  s  �� � ����"�J��#�#��*�*�,�K�$��Q�{�m�4�� �*�G��C�L��'��1�=�I��,�i�Q�G�N� !�$�$�Y��3�M����y�"�-�J�$�(�(��B�7�O� "�"2�B�I� �F��G��J��F��J����O� �}��a� ���Y�Y�/��4�
��9�9�Z��,���9�9�Z��,���)�)�1�2�6�� �3�W�0V�W�3�3�3�W�0V�W�W�W�"8�F�;��B�F�6�N�)T�G�%�&��S�[�2Z�[�S�S�S�[�2Z�[�[�[�";�F�;��8�F�8��)C�G�%�&�"5�F�;��F�F�8����"�"�Y�w�i�#8�9� ���6�6�*�b�)���&�&��r�"���F�F�7�B�'�	���"�"�h�Z�r�'��#;�<��9�����	�{�3�4� � �!�!�$���;�;���3�����$;�R�@�� ���%5�r�:���!)�F�:����"�"�_�]�O�#D�E��!/�F�:�� �&��{��,��x���5�<�
�� 	�Y��&��7��j��&��j��.��?�	� 	r   c                �<   � V ^8�  d   QhR\         R\        R\         /# )r   �contextr�   r   )r/   r   )r   s   "r   r   r   �  s!   � �  �  �s�  �4�  �C�  r   c                �  a� V P                  4       o. ROR3. ROR3. ROR3. ROR3. ROR	3. ROR
3. ROR3. ROR3. ROR3. ROR3.
pV FI  w  r4\        ;QJ d    V3R lV 4       F  '       g   K   RM	  RM! V3R lV 4       4      '       g   KG  Vu # 	  V'       do   V^ ,          P                  RR4      P                  4       pV^ ,          P                  RR4      P                  4       pRV9   g   RV9   d   R# RV9   g   RV9   d   R# R# ) z1Detect page type from context and search results.rY  rW  zDashboard / Data ViewzCheckout / PaymentzSettings / Profiler
   �	marketingzLanding / Marketing�AuthenticationzPricing / PlanszBlog / ArticlezProduct DetailzSearch ResultszEmpty Statec              3   �,   <"  � T F	  qS9   x � K  	  R # 5ir   rF   )rG   rH   �context_lowers   & �r   rJ   �$_detect_page_type.<locals>.<genexpr>  s   �� � �6�X�r�]�"�X�rL   TFry   rB   r�   r�   )rY  �admin�	analyticsrW  �metrics�stats�monitor�overview)�checkout�payment�cart�purchase�order�billing)�settings�profile�account�preferencesr8   )r
   rm  �homepage�hero�home�promo)�login�signin�signup�register�auth�password)�pricing�plans�subscription�tiers�packages)�blog�article�post�news�content�story)r   r�   �detail�pdp�shop�store)r   r6   �browse�filter�catalogr   )�empty�404�errorz	not found�zero)rM   rQ   rN   )rk  r�   �page_patternsrT   r:  r�   r�   rp  s   &&     @r   r`  r`  �  s  �� ��M�M�O�M� 
`�ax�y�	H�J^�_�	D�FZ�[�	F�H]�^�	F�HX�Y�	B�DU�V�	@�BR�S�	>�@P�Q�	E�GW�X�	7��G��M�  -����3�6�X�6�3�3�3�6�X�6�6�6���  -�
 �"�1�%�)�)�*:�B�?�E�E�G�
� ��#�'�'�
�B�7�=�=�?���(�"�f��&8�*��(�"�k�X�&=�(�r   �__main__zGenerate Design System)�descriptionr-   z%Search query (e.g., 'SaaS dashboard'))�helpz--project-namez-pzProject name)r�   r  r�  z--formatz-fr  zOutput format)�choicesr  r�  )Nr  FNN)NNNr   )#r�   r'   ro   �osr   �pathlibr   r_  r   r   r$   r3   r   r�   r�   r  r  r  r  r!  rA  r`  r�   �argparse�ArgumentParser�parser�add_argumentr/   �
parse_args�argsr-   r�   r   r�   �printrF   r   r   �<module>r�     sJ  ��� � � 	� � � !� $�� ��q�!��m�Q���m�Q����q�!��=�!�$���G
� G
�V �	�z�z[�~+�:0�fD�Nj�Zg�T �H �z����$�$�1I�J�F�
����&M��N�
���(�$�S�$�^��\�
���
�D�7�J�2G�QX�_n��o�����D�#�D�J�J��0A�0A�4�;�;�O�F�	�&�M� r   
```

---

### `.agent/skills/ui-ux-pro-max/scripts/__pycache__/search.cpython-314.pyc`
**Function:** Source code file.

```pyc
+
    P*ri�  �            	       ��  � R t ^ RIt^ RIHtHtHtHtHt ^ RIH	t	H
t
 R t]R8X  EdR   ]P                  ! RR7      t]P                  RR	R
7       ]P                  RR]! ]P"                  ! 4       4      RR7       ]P                  RR]RR7       ]P                  RR]]RR7       ]P                  RRRR7       ]P                  RRRRR7       ]P                  RR]RRR7       ]P                  R R!R"R#.R"R$R%7       ]P                  R&RR'R7       ]P                  R(]RR)R7       ]P                  R*R+]RR,R7       ]P)                  4       t]P                  '       Ed6   ]	! ]P,                  ]P.                  ]P0                  ]P2                  ]P4                  ]P6                  R-7      t]! ]4       ]P2                  '       d�   ]P.                  '       d+   ]P.                  P=                  4       P?                  R.R/4      MR0t ]! R>4       ]! R1]  R224       ]! R3]  R424       ]P4                  '       d:   ]P4                  P=                  4       P?                  R.R/4      t!]! R3]  R5]! R624       ]! R74       ]! R8]  R924       ]! R:4       ]! R=4       R# R# ]PD                  '       dl   ]! ]P,                  ]PD                  ]PF                  4      t]PH                  '       d"   ^ RI$t$]! ]$PJ                  ! ]^R;R<7      4       R# ]! ]! ]4      4       R# ]! ]P,                  ]PL                  ]PF                  4      t]PH                  '       d"   ^ RI$t$]! ]$PJ                  ! ]^R;R<7      4       R# ]! ]! ]4      4       R# R# )?am  
UI/UX Pro Max Search - BM25 search engine for UI/UX style guides
Usage: python search.py "<query>" [--domain <domain>] [--stack <stack>] [--max-results 3]
       python search.py "<query>" --design-system [-p "Project Name"]
       python search.py "<query>" --design-system --persist [-p "Project Name"] [--page "dashboard"]

Domains: style, prompt, color, chart, landing, product, ux, typography
Stacks: html-tailwind, react, nextjs

Persistence (Master + Overrides pattern):
  --persist    Save design system to design-system/MASTER.md
  --page       Also create a page-specific override file in design-system/pages/
N)�
CSV_CONFIG�AVAILABLE_STACKS�MAX_RESULTS�search�search_stack)�generate_design_system�persist_design_systemc                ��  � RV 9   d   RV R,           2# . pV P                  R4      '       d8   VP                  R4       VP                  RV R,           RV R,           24       M6VP                  R4       VP                  R	V R
,           RV R,           24       VP                  RV R,           RV R,           R24       \        V R,          ^4       F�  w  r#VP                  RV 24       VP                  4        FG  w  rE\	        V4      p\        V4      R8�  d   VR,          R,           pVP                  RV RV 24       KI  	  VP                  R4       K�  	  RP                  V4      # )z7Format results for Claude consumption (token-optimized)�errorzError: �stackz## UI Pro Max Stack Guidelinesz**Stack:** z | **Query:** �queryz## UI Pro Max Search Resultsz**Domain:** �domainz**Source:** �filez | **Found:** �countz	 results
�resultsz### Result i,  :Ni,  Nz...z- **z:** � �
)�get�append�	enumerate�items�str�len�join)�result�output�i�row�key�value�	value_strs   &      �#src/ui-ux-pro-max/scripts/search.py�format_outputr"      sN  � ��&������)�*�*��F��z�z�'������6�8�����F�7�O�#4�N�6�'�?�BS�T�U����4�6�����V�H�%5�$6�n�V�G�_�DU�V�W�
�M�M�L���� 0��v�g��>O�z�Z�[��F�9�-�q�1�������A�3�'�(��)�)�+�J�C��E�
�I��9�~��#�%�d�O�e�3�	��M�M�D���T�)��5�6�	 &�
 	���b�� 2� �9�9�V���    �__main__zUI Pro Max Search)�descriptionr   zSearch query)�helpz--domainz-dzSearch domain)�choicesr&   z--stackz-sz4Stack-specific search (html-tailwind, react, nextjs)z--max-resultsz-nzMax results (default: 3))�type�defaultr&   z--json�
store_truezOutput as JSON)�actionr&   z--design-systemz-dsz.Generate complete design system recommendationz--project-namez-pz%Project name for design system outputz--formatz-f�ascii�markdownzOutput format for design system)r'   r)   r&   z	--persistzNSave design system to design-system/MASTER.md (creates hierarchical structure)z--pagez:Create page-specific override file in design-system/pages/z--output-dirz-ozAOutput directory for persisted files (default: current directory))�persist�page�
output_dir� �-r)   u-   ✅ Design system persisted to design-system/�/u      📄 design-system/z#/MASTER.md (Global Source of Truth)z/pages/z.md (Page Overrides)r   u6   📖 Usage: When building a page, check design-system/z/pages/[page].md first.zE   If exists, its rules override MASTER.md. Otherwise, use MASTER.md.F)�indent�ensure_asciiz<============================================================z=
============================================================)'�__doc__�argparse�corer   r   r   r   r   �design_systemr   r   r"   �__name__�ArgumentParser�parser�add_argument�list�keys�intr   �
parse_args�argsr   �project_name�formatr.   r/   r0   r   �print�lower�replace�project_slug�page_filenamer   �max_results�json�dumpsr   � r#   r!   �<module>rN      s@  ��� � P� P� G��4 �z���$�$�1D�E�F�
����n��5�
���
�D�$�z���7H�2I�P_��`�
���	�4�1A�H~���
�����C��Sm��n�
�����<L��M�
���)�5��L|��}�
���(�$�S�$�Mt��u�
���
�D�7�J�2G�QX�  `A��  B�
����L�  @P��  Q�
����s�D�?{��|�
�����3��  LO��  P�����D� ����'��J�J�����K�K��L�L�������
�� 	�f�� �<�<�<�JN�J[�J[�J[�4�,�,�2�2�4�<�<�S�#�F�aj�L��/�"��A�,��q�Q�R��*�<�.�8[�\�]��y�y�y� $�	�	��� 1� 9� 9�#�s� C���.�|�n�G�M�?�Rf�g�h��"�I��J�<�.�Xo�p�q��Y�[��(�O� � 
�����d�j�j�$�*�*�d�6F�6F�G���9�9�9���$�*�*�V�A�E�B�C��-��'�(� ��
�
�D�K�K��1A�1A�B���9�9�9���$�*�*�V�A�E�B�C��-��'�(�u r#   
```

---

### `.agent/skills/ui-ux-pro-max/SKILL.md`
**Function:** Source code file.

```md
---
name: ui-ux-pro-max
description: UI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks.
---
# ui-ux-pro-max

Comprehensive design guide for web and mobile applications. Contains 67 styles, 96 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 13 technology stacks. Searchable database with priority-based recommendations.

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed, install it based on user's OS:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## How to Use This Skill

When user requests UI/UX work (design, build, create, implement, review, fix, improve), follow this workflow:

### Step 1: Analyze User Requirements

Extract key information from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: Generate Design System (REQUIRED)

**Always start with `--design-system`** to get comprehensive recommendations with reasoning:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This command:
1. Searches 5 domains in parallel (product, style, color, landing, typography)
2. Applies reasoning rules from `ui-reasoning.csv` to select best matches
3. Returns complete design system: pattern, style, colors, typography, effects
4. Includes anti-patterns to avoid

**Example:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 2b: Persist Design System (Master + Overrides Pattern)

To save the design system for hierarchical retrieval across sessions, add `--persist`:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

This creates:
- `design-system/MASTER.md` — Global Source of Truth with all design rules
- `design-system/pages/` — Folder for page-specific overrides

**With page-specific override:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

This also creates:
- `design-system/pages/dashboard.md` — Page-specific deviations from Master

**How hierarchical retrieval works:**
1. When building a specific page (e.g., "Checkout"), first check `design-system/pages/checkout.md`
2. If the page file exists, its rules **override** the Master file
3. If not, use `design-system/MASTER.md` exclusively

### Step 3: Supplement with Detailed Searches (as needed)

After getting the design system, use domain searches to get additional details:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**When to use detailed searches:**

| Need | Domain | Example |
|------|--------|---------|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |

### Step 4: Stack Guidelines (Default: html-tailwind)

Get implementation-specific best practices. If user doesn't specify a stack, **default to `html-tailwind`**.

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

---

## Search Reference

### Available Domains

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `product` | Product type recommendations | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style` | UI styles, colors, effects | glassmorphism, minimalism, dark mode, brutalism |
| `typography` | Font pairings, Google Fonts | elegant, playful, professional, modern |
| `color` | Color palettes by product type | saas, ecommerce, healthcare, beauty, fintech, service |
| `landing` | Page structure, CTA strategies | hero, hero-centric, testimonial, pricing, social-proof |
| `chart` | Chart types, library recommendations | trend, comparison, timeline, funnel, pie |
| `ux` | Best practices, anti-patterns | animation, accessibility, z-index, loading |
| `react` | React/Next.js performance | waterfall, bundle, suspense, memo, rerender, cache |
| `web` | Web interface guidelines | aria, focus, keyboard, semantic, virtualize |
| `prompt` | AI prompts, CSS keywords | (style name) |

### Available Stacks

| Stack | Focus |
|-------|-------|
| `html-tailwind` | Tailwind utilities, responsive, a11y (DEFAULT) |
| `react` | State, hooks, performance, patterns |
| `nextjs` | SSR, routing, images, API routes |
| `vue` | Composition API, Pinia, Vue Router |
| `svelte` | Runes, stores, SvelteKit |
| `swiftui` | Views, State, Navigation, Animation |
| `react-native` | Components, Navigation, Lists |
| `flutter` | Widgets, State, Layout, Theming |
| `shadcn` | shadcn/ui components, theming, forms, patterns |
| `jetpack-compose` | Composables, Modifiers, State Hoisting, Recomposition |

---

## Example Workflow

**User request:** "Làm landing page cho dịch vụ chăm sóc da chuyên nghiệp"

### Step 1: Analyze Requirements
- Product type: Beauty/Spa service
- Style keywords: elegant, professional, soft
- Industry: Beauty/Wellness
- Stack: html-tailwind (default)

### Step 2: Generate Design System (REQUIRED)

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```

**Output:** Complete design system with pattern, style, colors, typography, effects, and anti-patterns.

### Step 3: Supplement with Detailed Searches (as needed)

```bash
# Get UX guidelines for animation and accessibility
python3 skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux

# Get alternative typography options if needed
python3 skills/ui-ux-pro-max/scripts/search.py "elegant luxury serif" --domain typography
```

### Step 4: Stack Guidelines

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "layout responsive form" --stack html-tailwind
```

**Then:** Synthesize design system + detailed searches and implement the design.

---

## Output Formats

The `--design-system` flag supports two output formats:

```bash
# ASCII box (default) - best for terminal display
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown - best for documentation
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

---

## Tips for Better Results

1. **Be specific with keywords** - "healthcare SaaS dashboard" > "app"
2. **Search multiple times** - Different keywords reveal different insights
3. **Combine domains** - Style + Typography + Color = Complete design system
4. **Always check UX** - Search "animation", "z-index", "accessibility" for common issues
5. **Use stack flag** - Get implementation-specific best practices
6. **Iterate** - If first search doesn't match, try different keywords

---

## Common Rules for Professional UI

These are frequently overlooked issues that make UI look unprofessional:

### Icons & Visual Elements

| Rule | Do | Don't |
|------|----|----- |
| **No emoji icons** | Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| **Stable hover states** | Use color/opacity transitions on hover | Use scale transforms that shift layout |
| **Correct brand logos** | Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| **Consistent icon sizing** | Use fixed viewBox (24x24) with w-6 h-6 | Mix different icon sizes randomly |

### Interaction & Cursor

| Rule | Do | Don't |
|------|----|----- |
| **Cursor pointer** | Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| **Hover feedback** | Provide visual feedback (color, shadow, border) | No indication element is interactive |
| **Smooth transitions** | Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### Light/Dark Mode Contrast

| Rule | Do | Don't |
|------|----|----- |
| **Glass card light mode** | Use `bg-white/80` or higher opacity | Use `bg-white/10` (too transparent) |
| **Text contrast light** | Use `#0F172A` (slate-900) for text | Use `#94A3B8` (slate-400) for body text |
| **Muted text light** | Use `#475569` (slate-600) minimum | Use gray-400 or lighter |
| **Border visibility** | Use `border-gray-200` in light mode | Use `border-white/10` (invisible) |

### Layout & Spacing

| Rule | Do | Don't |
|------|----|----- |
| **Floating navbar** | Add `top-4 left-4 right-4` spacing | Stick navbar to `top-0 left-0 right-0` |
| **Content padding** | Account for fixed navbar height | Let content hide behind fixed elements |
| **Consistent max-width** | Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## Pre-Delivery Checklist

Before delivering UI code, verify these items:

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift
- [ ] Use theme colors directly (bg-primary) not var() wrapper

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

```

---

### `backend/.env`
**Function:** Environment variable definitions/examples.

```text
# Server
PORT=5000
NODE_ENV=production

# MongoDB
MONGODB_URI=mongodb+srv://abhayrajankar123_db_user:86!r5id-f29FF%V@cluster0.oonadbt.mongodb.net/educare-ai?retryWrites=true&w=majority

# CORS (update this after frontend deployment)
ALLOWED_ORIGINS=http://localhost:4200,https://your-frontend-domain.com

```

---

### `backend/.env.example`
**Function:** Environment variable definitions/examples.

```example
PORT=5000
MONGODB_URI=<mongodb-atlas-connection-string>
NODE_ENV=production
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,https://your-vercel-frontend-url.vercel.app

```

---

### `backend/circuitValidator.js`
**Function:** Source code file.

```js
// Circuit Validation Logic System for EduCare AI

export function validateNetlistCircuit(netlist) {
  const { components = [], connections = [] } = netlist;

  const componentMap = {};
  components.forEach(c => {
    componentMap[c.id] = c;
  });

  // 1. Disconnected Components Check
  const connectedIds = new Set();
  connections.forEach(conn => {
    connectedIds.add(conn.from);
    connectedIds.add(conn.to);
  });

  const disconnected = components.filter(c => !connectedIds.has(c.id));
  if (disconnected.length > 0 && components.length > 1) {
    return {
      status: 'fail',
      message: `🔗 Disconnected component detected: ${disconnected[0].type}! All components must be connected in the wire loop.`,
      hint: `Connect the wires to the ports of ${disconnected[0].id}.`,
      score: 50,
      glow: false,
      rotate: false
    };
  }

  // 2. Battery Existence Check
  const battery = components.find(c => c.type === 'BATTERY');
  if (!battery) {
    return {
      status: 'fail',
      message: "🔋 Missing power! The circuit needs a Battery to push electricity through the loop.",
      hint: "Drag a Battery onto the workspace.",
      score: 20,
      glow: false,
      rotate: false
    };
  }

  // 3. Open Switch check inside placed components
  const openSwitches = components.filter(c => c.type === 'SWITCH' && c.state?.closed === false);

  // 4. Build undirected adjacency list
  // If switch is open, it blocks traversal completely
  const adj = {};
  components.forEach(c => {
    adj[c.id] = [];
  });

  connections.forEach(conn => {
    const fromComp = componentMap[conn.from];
    const toComp = componentMap[conn.to];
    
    if (!fromComp || !toComp) return;

    // Check if either component is an open switch
    const isFromOpenSwitch = fromComp.type === 'SWITCH' && fromComp.state?.closed === false;
    const isToOpenSwitch = toComp.type === 'SWITCH' && toComp.state?.closed === false;

    if (!isFromOpenSwitch && !isToOpenSwitch) {
      adj[conn.from].push(conn.to);
      adj[conn.to].push(conn.from);
    }
  });

  // 5. Closed Loop Check
  // Find battery neighbors
  const batNeighbors = adj[battery.id] || [];
  if (batNeighbors.length < 2) {
    // Check if there's an open switch connected to the battery that prevented neighbors from registering
    if (openSwitches.length > 0) {
      return {
        status: 'fail',
        message: "🔌 Open circuit detected! A switch is currently open.",
        hint: "Flip the switch state to CLOSED to complete the path.",
        score: 60,
        glow: false,
        rotate: false
      };
    }
    return {
      status: 'fail',
      message: "❌ Incomplete path! Wires do not complete a circle back to the battery.",
      hint: "Make sure wires form a complete loop from one terminal of the battery to the other.",
      score: 30,
      glow: false,
      rotate: false
    };
  }

  // Path check from battery neighbor 0 to neighbor 1, avoiding crossing internally through the battery node
  let loopFound = false;
  let pathKeys = new Set();
  const startNode = batNeighbors[0];
  const targetNode = batNeighbors[1];

  const visited = new Set();
  const parent = {};

  const dfs = (node) => {
    visited.add(node);
    if (node === targetNode) {
      loopFound = true;
      return true;
    }
    for (const next of (adj[node] || [])) {
      if (!visited.has(next)) {
        parent[next] = node;
        if (dfs(next)) return true;
      }
    }
    return false;
  };

  visited.add(battery.id); // block battery internal traversal
  if (dfs(startNode)) {
    // Reconstruct loop path
    pathKeys.add(battery.id);
    let curr = targetNode;
    pathKeys.add(curr);
    while (curr !== startNode) {
      curr = parent[curr];
      pathKeys.add(curr);
    }
  }

  if (loopFound) {
    const pathComponents = Array.from(pathKeys).map(k => componentMap[k]);
    const hasLED = pathComponents.some(c => c.type === 'LED' || c.type === 'BULB');
    const hasMotor = pathComponents.some(c => c.type === 'MOTOR' || c.type === 'FAN');
    
    // Short circuit check: no LED, no BULB, no MOTOR
    if (!hasLED && !hasMotor) {
      return {
        status: 'fail',
        message: "⚠️ Short circuit! The battery connects directly to itself with no load. This will get hot and is unsafe.",
        hint: "Place an LED bulb or Motor in the loop path.",
        score: 40,
        glow: false,
        rotate: false
      };
    }

    const ledGlow = hasLED;
    const motorRotate = hasMotor;

    return {
      status: 'success',
      message: `⚡ Success! Loop complete. ${ledGlow ? 'LED is glowing! ' : ''}${motorRotate ? 'Motor is rotating!' : ''}`,
      hint: "Excellent work! The circuit flows perfectly.",
      score: 100,
      glow: ledGlow,
      rotate: motorRotate
    };
  }

  // If DFS failed, check if there's an open switch in the connection pathways
  if (openSwitches.length > 0) {
    return {
      status: 'fail',
      message: "🔌 Open circuit detected! The switch gate is OPEN, stopping the electron flow.",
      hint: "Click the Switch to toggle it CLOSED.",
      score: 60,
      glow: false,
      rotate: false
    };
  }

  return {
    status: 'fail',
    message: "❌ Incomplete path! Wires do not complete a circle back to the battery.",
    hint: "Make sure all wires are connected end-to-end.",
    score: 30,
    glow: false,
    rotate: false
  };
}

export function validateCircuit(config) {
  // Check if configuration uses the new advanced Netlist graph format
  if (config.components || config.connections) {
    return validateNetlistCircuit(config);
  }

  // Legacy slots configuration validation
  const {
    slots = [],
    switchClosed = false,
    selectedMaterial = null,
    batteryPolarity = 'correct',
    resistance = 10
  } = config;

  const hasBattery = slots.some(s => s === 'BATTERY' || s.id === 'BATTERY');
  const hasLED = slots.some(s => s === 'BULB' || s.id === 'BULB');
  const hasSwitch = slots.some(s => s === 'SWITCH' || s.id === 'SWITCH');
  const hasMaterialSlot = slots.some(s => s === 'TEST_SLOT' || s.id === 'TEST_SLOT');
  const hasResistor = slots.some(s => s === 'RESISTOR' || s.id === 'RESISTOR');
  const hasBuzzer = slots.some(s => s === 'BUZZER' || s.id === 'BUZZER');
  const hasFan = slots.some(s => s === 'FAN' || s.id === 'FAN');

  const hasConsumer = hasLED || hasBuzzer || hasFan;

  // 1. Missing Power Check
  if (!hasBattery) {
    return {
      status: 'fail',
      glow: false,
      circuitState: 'broken',
      message: "Your circuit doesn't have a power source! A battery is needed to push electrons around the loop.",
      hint: "Try adding a Battery 🔋 to your board.",
      score: 20
    };
  }

  // 2. Battery Polarity Check
  if (hasLED && batteryPolarity === 'reversed') {
    return {
      status: 'fail',
      glow: false,
      circuitState: 'closed-incorrect',
      message: "The battery is connected backwards! LEDs are one-way streets for electricity. If you block the road, the bulb cannot glow.",
      hint: "Flip the battery 🔋 polarity so the positive (+) side faces the correct direction.",
      score: 50
    };
  }

  // 3. Open Circuit Check (Switch)
  if (hasSwitch && !switchClosed) {
    return {
      status: 'fail',
      glow: false,
      circuitState: 'open',
      message: "The switch is open! An open switch acts like a raised drawbridge, leaving a gap in the road so electrons cannot cross.",
      hint: "Click on the Switch 🔌 to close it and complete the pathway.",
      score: 60
    };
  }

  // 4. Open Circuit Check (Insulator in Material Slot)
  if (hasMaterialSlot) {
    const isConductor = selectedMaterial && (selectedMaterial.conductor || selectedMaterial.isConductor);
    if (!isConductor) {
      const materialName = selectedMaterial ? selectedMaterial.name : 'empty slot';
      return {
        status: 'fail',
        glow: false,
        circuitState: 'open',
        message: `Your material (${materialName}) is an insulator! Insulators do not let electrons pass through.`,
        hint: "Try testing a metal item like the Gold Coin 🪙 or Metal Paperclip 📎.",
        score: 50
      };
    }
  }

  // 5. Short Circuit Check
  const hasLoad = hasConsumer || (hasResistor && resistance > 2) || (hasMaterialSlot && selectedMaterial && !selectedMaterial.conductor);
  if (hasBattery && !hasLoad) {
    return {
      status: 'fail',
      glow: false,
      circuitState: 'closed',
      message: "⚠️ Short circuit detected! The battery is connected directly to itself with no resistance. This makes the battery get very hot and is unsafe.",
      hint: "Add a Light Bulb 💡, Fan 🌀, or Resistor 🚧 to protect the battery.",
      score: 40
    };
  }

  // 6. Successful Closed Loop
  return {
    status: 'success',
    glow: true,
    circuitState: 'closed',
    message: "Hooray! The circuit is CLOSED, and the battery polarity is correct. Electrons are flowing happily and lighting up the LED! ⚡",
    hint: "Excellent work! Your circuit is 100% correct.",
    score: 100
  };
}

```

---

### `backend/controllers/stemController.js`
**Function:** Handles incoming HTTP requests, processes business logic, and sends responses.

```js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { ProgressModel } from '../models/Progress.js';
import { getAdaptiveLesson, getSTEMRecommendation, SYLLABUS } from '../lessonEngine.js';
import { validateCircuit } from '../circuitValidator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fallback Local File Database setup
const DB_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DB_DIR, 'db.json');

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const defaultData = {
  studentId: 'default_student',
  grade: 'KG',
  completedLessons: [],
  completedCircuits: [],
  stars: 15,
  level: 1,
  badges: [],
  readinessScore: 0
};

const readLocalDB = () => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return defaultData;
  }
};

const writeLocalDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    return false;
  }
};

// Helper to calculate score and level
function updateProgressCalculations(data) {
  const stars = data.stars || 15;
  const grade = data.grade || 'KG';
  const completedLessons = data.completedLessons || [];
  let badges = data.badges || [];
  
  const level = Math.floor(completedLessons.length / 5) + 1;
  
  let totalRequirement = 2;
  let completedRequirement = 0;
  
  if (grade === 'KG') {
    completedRequirement += completedLessons.includes('lesson-kg-std') ? 1 : 0;
    completedRequirement += completedLessons.includes('lesson-kg-adv') ? 1 : 0;
    totalRequirement = 2;
  } else if (grade === 'Grade 1') {
    completedRequirement += completedLessons.includes('lesson-g1-std') ? 1 : 0;
    completedRequirement += completedLessons.includes('lesson-g1-adv') ? 1 : 0;
    completedRequirement += completedLessons.includes('sim_preset_BATTERY_LED') ? 1 : 0;
    totalRequirement = 3;
  } else if (grade === 'Grade 2') {
    completedRequirement += completedLessons.includes('lesson-g2-std') ? 1 : 0;
    completedRequirement += completedLessons.includes('lesson-g2-adv') ? 1 : 0;
    completedRequirement += completedLessons.includes('sim_preset_OPEN_CLOSED') ? 1 : 0;
    totalRequirement = 3;
  } else if (grade === 'Grade 3') {
    completedRequirement += completedLessons.includes('lesson-g3-std') ? 1 : 0;
    completedRequirement += completedLessons.includes('lesson-g3-adv') ? 1 : 0;
    completedRequirement += completedLessons.includes('sim_preset_TORCH') ? 1 : 0;
    totalRequirement = 3;
  } else if (grade === 'Grade 4') {
    completedRequirement += completedLessons.includes('lesson-g4-std') ? 1 : 0;
    completedRequirement += completedLessons.includes('lesson-g4-adv') ? 1 : 0;
    completedRequirement += completedLessons.includes('sim_preset_TRAFFIC_LIGHT') ? 1 : 0;
    totalRequirement = 3;
  }
  
  const readinessScore = Math.round((completedRequirement / totalRequirement) * 100);
  
  // Award Badges Server-Side
  if (completedLessons.length >= 2 && !badges.includes('junior_engineer')) {
    badges.push('junior_engineer');
  }
  if (completedLessons.length >= 5 && !badges.includes('circuit_master')) {
    badges.push('circuit_master');
  }
  if (stars >= 30 && !badges.includes('stem_explorer')) {
    badges.push('stem_explorer');
  }
  const allSimKeys = ['sim_preset_GRADE_1_BATTERY_LED', 'sim_preset_GRADE_2_OPEN_CIRCUIT', 'sim_preset_GRADE_2_CLOSED_CIRCUIT', 'sim_preset_GRADE_3_VIRTUAL_TORCH', 'sim_preset_GRADE_4_TRAFFIC_LIGHT'];
  if (allSimKeys.every(k => completedLessons.includes(k)) && !badges.includes('sim_wizard')) {
    badges.push('sim_wizard');
  }
  if (completedLessons.includes('sparky_debug_complete') && !badges.includes('sparky_debug_pro')) {
    badges.push('sparky_debug_pro');
  }
  
  return {
    ...data,
    level,
    badges,
    readinessScore
  };
}

// Controller Actions

// GET /stem/progress
export const getProgress = async (req, res) => {
  const useMongoDB = mongooseConnectionActive();
  if (useMongoDB) {
    try {
      let progress = await ProgressModel.findOne({ studentId: 'default_student' });
      if (!progress) {
        progress = await ProgressModel.create(defaultData);
      }
      return res.json(progress);
    } catch (err) {
      console.error('Mongo get progress failed:', err);
    }
  }
  res.json(readLocalDB());
};

// POST /stem/progress
export const updateProgress = async (req, res) => {
  const { stars, badges, completedLessons, completedCircuits, grade } = req.body;
  const rawData = { stars, badges, completedLessons, completedCircuits, grade };
  const calculated = updateProgressCalculations(rawData);
  const useMongoDB = mongooseConnectionActive();

  if (useMongoDB) {
    try {
      const progress = await ProgressModel.findOneAndUpdate(
        { studentId: 'default_student' },
        calculated,
        { new: true, upsert: true }
      );
      return res.json({ success: true, database: 'mongodb', data: progress });
    } catch (err) {
      console.error('Mongo update progress failed:', err);
    }
  }

  const ok = writeLocalDB(calculated);
  res.json({ success: ok, database: 'file-system', data: calculated });
};

// GET /stem/lessons/:grade
export const getLessons = (req, res) => {
  const { grade } = req.params;
  const list = SYLLABUS[grade] || SYLLABUS['KG'] || [];
  res.json({
    grade,
    lessons: list
  });
};

// GET /stem/curriculum
export const getCurriculum = (req, res) => {
  const allLessons = [];
  Object.values(SYLLABUS).forEach(gradeLessons => {
    allLessons.push(...gradeLessons);
  });
  res.json(allLessons);
};

// POST /stem/challenge
export const getChallenge = (req, res) => {
  const { grade, stars, failureCount, timeTaken, lessonId } = req.body;
  const challenge = getAdaptiveLesson(grade, stars || 15, failureCount || 0, timeTaken || 60, lessonId);
  res.json(challenge);
};

// POST /stem/validate-circuit
export const validateCircuitRoute = (req, res) => {
  const result = validateCircuit(req.body);
  res.json(result);
};

// GET /stem/rewards
export const getRewards = async (req, res) => {
  let stars = 15;
  let level = 1;
  let badges = [];
  const useMongoDB = mongooseConnectionActive();

  if (useMongoDB) {
    try {
      const progress = await ProgressModel.findOne({ studentId: 'default_student' });
      if (progress) {
        stars = progress.stars;
        level = progress.level;
        badges = progress.badges;
      }
    } catch (err) {
      console.error('Mongo get rewards failed:', err);
    }
  } else {
    const local = readLocalDB();
    stars = local.stars;
    level = local.level;
    badges = local.badges;
  }

  res.json({
    stars,
    level,
    badges,
    badgesCount: badges.length,
    rank: getRankDescription(stars)
  });
};

// POST /recommend
export const getRecommendationRoute = (req, res) => {
  const { grade, performanceScore, previousLessons, completedCircuits } = req.body;

  if (!grade) {
    return res.status(400).json({ error: "Missing required 'grade' parameter." });
  }

  const recommendation = getSTEMRecommendation({
    grade,
    performanceScore: typeof performanceScore === 'number' ? performanceScore : 50,
    previousLessons: Array.isArray(previousLessons) ? previousLessons : [],
    completedCircuits: Array.isArray(completedCircuits) ? completedCircuits : []
  });

  res.json(recommendation);
};


// Internal helpers
function mongooseConnectionActive() {
  return global.mongoConnected === true;
}

function getRankDescription(stars) {
  if (stars >= 50) return "Master of Magnetism 🧙‍♂️";
  if (stars >= 35) return "Circuit Engineer 🛠️";
  if (stars >= 20) return "Junior Explorer 🧭";
  return "Spark Apprentice 🐣";
}

```

---

### `backend/data/curriculum.js`
**Function:** Static mock data or curriculum definitions.

```js
const SYLLABUS = {
  'KG': [
    {
      id: 'lesson-kg-1',
      grade: 'KG',
      type: 'quiz',
      icon: '⚡',
      title: 'What is Electricity? ⚡',
      topic: 'Introduction to Electricity',
      description: 'Electricity gives power to things around us so they can work!',
      learningObjective: 'Understand that electricity provides power to objects.',
      realWorldApp: 'Flashlights, toys, and tablets all need electricity to turn on.',
      vocab: ['Electricity', 'Power', 'Device'],
      quiz: {
        question: 'Which of these needs electricity to work?',
        options: ['A wooden block', 'A flashlight', 'An apple'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-kg-2',
      grade: 'KG',
      type: 'quiz',
      icon: '🛡️',
      title: 'Safe and Unsafe 🛡️',
      topic: 'Electrical Safety',
      description: 'Not everything is safe to touch! We must be careful around electricity.',
      learningObjective: 'Identify safe and unsafe electrical behaviors.',
      realWorldApp: 'Never put water near plugs or play with broken wires.',
      vocab: ['Safe', 'Unsafe', 'Plug'],
      quiz: {
        question: 'Is it safe to play with a broken wire?',
        options: ['Yes, it is fun', 'No, it is dangerous', 'Only if it is colorful'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-kg-3',
      grade: 'KG',
      type: 'activity',
      icon: '🔋',
      title: 'Light Up Sparky! 🔋',
      topic: 'Batteries & Bulbs',
      description: 'Oh no, Sparky the lightbulb is asleep! Can you complete the wire loop to wake him up?',
      learningObjective: 'Complete a basic circuit using a battery and a bulb.',
      realWorldApp: 'Just like putting a battery in a toy to make it move!',
      challengeInstructions: 'Ensure you have a Battery in the left slot and a Bulb in the right slot. Connect them to form a complete circular path.',
      vocab: ['Battery', 'Bulb', 'Loop'],
      circuitConfig: ['BATTERY', 'WIRE', 'BULB', 'WIRE'],
      targetConditions: { requiresBulb: true, requiresFlowing: true }
    },
    {
      id: 'lesson-kg-4',
      grade: 'KG',
      type: 'activity',
      icon: '🌟',
      title: 'Double Sparky Glow! 🌟',
      topic: 'Batteries & Bulbs',
      description: 'Let\'s double the power! Can you connect two bulbs in the loop?',
      learningObjective: 'Understand that multiple items can be powered in a loop.',
      realWorldApp: 'Holiday lights have many bulbs connected together.',
      challengeInstructions: 'Place two bulbs in the circuit loop so both can glow at the same time.',
      vocab: ['Battery', 'Bulb', 'Voltage'],
      circuitConfig: ['BATTERY', 'BULB', 'BULB', 'WIRE'],
      targetConditions: { requiresBulbCount: 2, requiresFlowing: true }
    },
    {
      id: 'lesson-kg-5',
      grade: 'KG',
      type: 'quiz',
      icon: '🔋',
      title: 'Battery Basics 🔋',
      topic: 'Batteries',
      description: 'Batteries store electricity so we can take it anywhere.',
      learningObjective: 'Learn that batteries are portable power sources.',
      realWorldApp: 'Remote controls use batteries so they don\'t need a wall plug.',
      vocab: ['Battery', 'Store', 'Portable'],
      quiz: {
        question: 'What does a battery do?',
        options: ['Makes water cold', 'Stores electricity', 'Plays music'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-kg-6',
      grade: 'KG',
      type: 'activity',
      icon: '🔄',
      title: 'Make it Flow 🔄',
      topic: 'Circuit Loops',
      description: 'Electricity needs a full circle to flow. Let\'s build one!',
      learningObjective: 'Identify that a closed loop is needed for electricity to flow.',
      realWorldApp: 'If a wire is broken, a toy car will stop moving.',
      challengeInstructions: 'Place a Battery and connect all the wires to make a full circle.',
      vocab: ['Circle', 'Flow', 'Connect'],
      circuitConfig: ['BATTERY', 'WIRE', 'WIRE', 'WIRE'],
      targetConditions: { requiresFlowing: true }
    },
    {
      id: 'lesson-kg-7',
      grade: 'KG',
      type: 'quiz',
      icon: '💡',
      title: 'Light and Dark 💡',
      topic: 'Light Bulbs',
      description: 'Bulbs turn electricity into light to help us see in the dark.',
      learningObjective: 'Understand the function of a light bulb.',
      realWorldApp: 'Lamps light up our rooms at night.',
      vocab: ['Light', 'Dark', 'See'],
      quiz: {
        question: 'Why do we use light bulbs?',
        options: ['To see in the dark', 'To make noise', 'To fly'],
        correctIndex: 0
      }
    },
    {
      id: 'lesson-kg-8',
      grade: 'KG',
      type: 'activity',
      icon: '✨',
      title: 'Sparky & Friends ✨',
      topic: 'Circuit Building',
      description: 'Use what you learned to make Sparky shine super bright!',
      learningObjective: 'Combine previous knowledge to build a working circuit.',
      realWorldApp: 'You are an engineer building a real machine!',
      challengeInstructions: 'Add a Battery, a Wire, and a Bulb to complete the level.',
      vocab: ['Engineer', 'Build', 'Shine'],
      circuitConfig: ['BATTERY', 'WIRE', 'BULB', 'WIRE'],
      targetConditions: { requiresBulb: true, requiresFlowing: true }
    }
  ],
  'Grade 1': [
    {
      id: 'lesson-g1-1',
      grade: 'Grade 1',
      type: 'quiz',
      icon: '🪙',
      title: 'What is a Conductor? 🪙',
      topic: 'Conductors',
      description: 'Some materials let electricity pass through them easily. They are called conductors.',
      learningObjective: 'Define what a conductor is.',
      realWorldApp: 'Wires are made of metal because metal is a great conductor.',
      vocab: ['Conductor', 'Metal', 'Electricity'],
      quiz: {
        question: 'Which of these is a good conductor?',
        options: ['A metal coin', 'A wooden stick', 'A plastic block'],
        correctIndex: 0
      }
    },
    {
      id: 'lesson-g1-2',
      grade: 'Grade 1',
      type: 'quiz',
      icon: '🪵',
      title: 'What is an Insulator? 🪵',
      topic: 'Insulators',
      description: 'Some materials stop electricity from flowing. They are called insulators.',
      learningObjective: 'Define what an insulator is.',
      realWorldApp: 'Wires are covered in plastic (an insulator) so we don\'t get shocked.',
      vocab: ['Insulator', 'Plastic', 'Wood'],
      quiz: {
        question: 'Why do we use insulators?',
        options: ['To make electricity go faster', 'To stop electricity from flowing', 'To make things shiny'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g1-3',
      grade: 'Grade 1',
      type: 'activity',
      icon: '🪙',
      title: 'Metal vs Wood (Conductors) 🪙',
      topic: 'Conductors & Insulators',
      description: 'Test different household materials to find out which ones let electrical current pass!',
      learningObjective: 'Test materials to classify them as conductors or insulators.',
      realWorldApp: 'Electricians test materials before using them to build houses.',
      challengeInstructions: 'Select a conductive material (like a Gold Coin or Metal Paperclip) to place in the Material Slot and close the loop.',
      vocab: ['Conductor', 'Insulator', 'Material'],
      circuitConfig: ['BATTERY', 'WIRE', 'TEST_SLOT', 'WIRE'],
      targetConditions: { requiresConductor: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g1-4',
      grade: 'Grade 1',
      type: 'activity',
      icon: '📎',
      title: 'Double Metal Test 🪙📎',
      topic: 'Conductors & Insulators',
      description: 'Can you complete a circuit with multiple conductive materials?',
      learningObjective: 'Demonstrate that electricity can flow through multiple conductors.',
      realWorldApp: 'Long power lines use many pieces of metal connected together.',
      challengeInstructions: 'Add conductive materials to both slots to let the current travel safely through both.',
      vocab: ['Conductor', 'Pathway', 'Connect'],
      circuitConfig: ['BATTERY', 'TEST_SLOT', 'TEST_SLOT', 'WIRE'],
      targetConditions: { requiresMultipleConducers: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g1-5',
      grade: 'Grade 1',
      type: 'activity',
      icon: '🌉',
      title: 'Paperclip Bridge 🌉',
      topic: 'Conductors',
      description: 'Use a paperclip to bridge the gap and light up the bulb!',
      learningObjective: 'Use a specific metal object as a conductor.',
      realWorldApp: 'Paperclips are made of steel, which conducts electricity.',
      challengeInstructions: 'Put a Paperclip in the test slot and a Bulb in another slot to see it glow.',
      vocab: ['Bridge', 'Steel', 'Glow'],
      circuitConfig: ['BATTERY', 'TEST_SLOT', 'BULB', 'WIRE'],
      targetConditions: { requiresConductor: true, requiresBulb: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g1-6',
      grade: 'Grade 1',
      type: 'quiz',
      icon: '🔌',
      title: 'Wire check 🔌',
      topic: 'Wires',
      description: 'Wires are the roads that electricity travels on.',
      learningObjective: 'Understand that wires provide a path for electricity.',
      realWorldApp: 'Look behind a TV—you will see many wire roads!',
      vocab: ['Wire', 'Travel', 'Path'],
      quiz: {
        question: 'What is inside a wire?',
        options: ['Water', 'Metal', 'Air'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g1-7',
      grade: 'Grade 1',
      type: 'activity',
      icon: '💡',
      title: 'Glowing Coins 💡',
      topic: 'Testing Materials',
      description: 'Can a coin make a lightbulb turn on? Let\'s find out!',
      learningObjective: 'Observe the effect of a conductor in a circuit with a bulb.',
      realWorldApp: 'Coins are made of metals like copper and zinc.',
      challengeInstructions: 'Place a Coin in the test slot and a Bulb in the circuit.',
      vocab: ['Coin', 'Copper', 'Zinc'],
      circuitConfig: ['BATTERY', 'WIRE', 'BULB', 'TEST_SLOT'],
      targetConditions: { requiresConductor: true, requiresBulb: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g1-8',
      grade: 'Grade 1',
      type: 'quiz',
      icon: '🏁',
      title: 'Energy Flow 🏁',
      topic: 'Review',
      description: 'Electricity flows from the battery, through the wires, and back!',
      learningObjective: 'Review how energy flows through a complete circuit.',
      realWorldApp: 'Everything must be connected for the magic to happen.',
      vocab: ['Flow', 'Energy', 'Complete'],
      quiz: {
        question: 'If a wire is broken, what happens to the light bulb?',
        options: ['It gets brighter', 'It turns off', 'It changes color'],
        correctIndex: 1
      }
    }
  ],
  'Grade 2': [
    {
      id: 'lesson-g2-1',
      grade: 'Grade 2',
      type: 'quiz',
      icon: '🎚️',
      title: 'What is a Switch? 🎚️',
      topic: 'Switches',
      description: 'A switch is like a drawbridge. It can open or close the path for electricity.',
      learningObjective: 'Understand the basic function of a switch in a circuit.',
      realWorldApp: 'We use light switches every day to turn lights on and off.',
      vocab: ['Switch', 'Bridge', 'Control'],
      quiz: {
        question: 'What does a switch do?',
        options: ['Creates electricity', 'Opens or closes the circuit', 'Makes things heavy'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g2-2',
      grade: 'Grade 2',
      type: 'activity',
      icon: '🔌',
      title: 'The Secret Switch 🔌',
      topic: 'Switches & Controls',
      description: 'Add a switch gate to safely turn your electrical current on and off!',
      learningObjective: 'Insert a switch into a circuit and operate it.',
      realWorldApp: 'When you turn off a toy, a switch inside breaks the circuit.',
      challengeInstructions: 'Place a Switch component in the circuit. Click the switch on the board to toggle it CLOSED.',
      vocab: ['Switch', 'Open Gate', 'Closed Gate'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'WIRE'],
      targetConditions: { requiresSwitch: true, requiresSwitchClosed: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g2-3',
      grade: 'Grade 2',
      type: 'quiz',
      icon: '🔓',
      title: 'Open vs Closed 🔓',
      topic: 'Switch States',
      description: 'An OPEN switch stops electricity. A CLOSED switch lets it flow.',
      learningObjective: 'Differentiate between open and closed circuits.',
      realWorldApp: 'When a door is closed, you can walk across it if it\'s a trapdoor!',
      vocab: ['Open', 'Closed', 'State'],
      quiz: {
        question: 'To turn ON a light, the switch must be...',
        options: ['Open', 'Closed', 'Broken'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g2-4',
      grade: 'Grade 2',
      type: 'activity',
      icon: '🎛️',
      title: 'Double Switch Control 🎛️',
      topic: 'Logic with Switches',
      description: 'Add two switches in the loop so both must be closed to turn the light on!',
      learningObjective: 'Create a series circuit with two switches.',
      realWorldApp: 'Some big machines require two buttons to be pressed at once for safety.',
      challengeInstructions: 'Place two switches in the loop. Click both switches on the board to toggle them CLOSED.',
      vocab: ['Switch', 'Logic', 'Gate'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'SWITCH'],
      targetConditions: { requiresMultipleSwitches: true, requiresSwitchesClosed: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g2-5',
      grade: 'Grade 2',
      type: 'activity',
      icon: '💡',
      title: 'Switch off the light 💡',
      topic: 'Controlling Output',
      description: 'Can you build a circuit and use a switch to turn it OFF?',
      learningObjective: 'Demonstrate breaking a circuit intentionally.',
      realWorldApp: 'Turning off lights saves energy when we leave a room.',
      challengeInstructions: 'Add a battery, a bulb, and a switch. Leave the switch OPEN so the bulb is off!',
      vocab: ['Energy', 'Save', 'Off'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'WIRE'],
      targetConditions: { requiresSwitch: true, requiresSwitchOpen: true, requiresBulb: true }
    },
    {
      id: 'lesson-g2-6',
      grade: 'Grade 2',
      type: 'quiz',
      icon: '👷',
      title: 'Safety First 👷',
      topic: 'Safety',
      description: 'Switches help us safely control electricity without touching wires.',
      learningObjective: 'Identify safety benefits of using switches.',
      realWorldApp: 'Wall switches keep our hands far away from the electrical wires inside the wall.',
      vocab: ['Safety', 'Protect', 'Touch'],
      quiz: {
        question: 'Why do we use plastic switches on walls?',
        options: ['Because plastic looks nice', 'Plastic is an insulator so we don\'t get shocked', 'Plastic makes the electricity stronger'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g2-7',
      grade: 'Grade 2',
      type: 'activity',
      icon: '⚙️',
      title: 'Series Switch ⚙️',
      topic: 'Circuit Building',
      description: 'Build a full loop with a switch, but put the switch on the bottom!',
      learningObjective: 'Understand that a switch can be placed anywhere in a series circuit.',
      realWorldApp: 'It doesn\'t matter where the switch is on a wire, it still stops the flow!',
      challengeInstructions: 'Place the Battery on the left, the Bulb on top, and the Switch on the bottom. Close the switch!',
      vocab: ['Series', 'Bottom', 'Anywhere'],
      circuitConfig: ['BATTERY', 'BULB', 'WIRE', 'SWITCH'],
      targetConditions: { requiresSwitch: true, requiresSwitchClosed: true, requiresBulb: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g2-8',
      grade: 'Grade 2',
      type: 'activity',
      icon: '🏁',
      title: 'Master Controller 🏁',
      topic: 'Review Activity',
      description: 'Time for the final Grade 2 challenge. Two bulbs and a switch!',
      learningObjective: 'Control multiple outputs with a single switch.',
      realWorldApp: 'One wall switch can turn on all the lights in the ceiling.',
      challengeInstructions: 'Add a Battery, a Switch, and TWO Bulbs. Close the switch to light them both!',
      vocab: ['Master', 'Control', 'Multiple'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'BULB'],
      targetConditions: { requiresSwitch: true, requiresSwitchClosed: true, requiresBulbCount: 2, requiresFlowing: true }
    }
  ],
  'Grade 3': [
    {
      id: 'lesson-g3-1',
      grade: 'Grade 3',
      type: 'quiz',
      icon: '🌀',
      title: 'What is a Motor? 🌀',
      topic: 'Motors',
      description: 'Motors turn electrical energy into movement or motion.',
      learningObjective: 'Understand energy conversion in motors.',
      realWorldApp: 'Electric cars and desk fans use motors to spin!',
      vocab: ['Motor', 'Motion', 'Spin'],
      quiz: {
        question: 'A motor turns electricity into...',
        options: ['Light', 'Movement', 'Water'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g3-2',
      grade: 'Grade 3',
      type: 'activity',
      icon: '🌀',
      title: 'Spinning Fan Motor 🌀',
      topic: 'Electric Motors',
      description: 'Convert electricity into motion by powering a fast-spinning fan motor!',
      learningObjective: 'Build a circuit containing a motor.',
      realWorldApp: 'When you turn on a fan, electricity flows through the motor to spin the blades.',
      challengeInstructions: 'Insert a Fan Motor in the consumer slot. Turn on the switch and watch the blades spin!',
      vocab: ['Motor', 'Energy Conversion', 'Force'],
      circuitConfig: ['BATTERY', 'SWITCH', 'FAN', 'WIRE'],
      targetConditions: { requiresFan: true, requiresSwitchClosed: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g3-3',
      grade: 'Grade 3',
      type: 'quiz',
      icon: '⚖️',
      title: 'Voltage Share ⚖️',
      topic: 'Sharing Power',
      description: 'When we put two things in a loop, they have to share the battery\'s power.',
      learningObjective: 'Understand voltage drop across multiple components in series.',
      realWorldApp: 'If you plug too many things into a weak battery, they won\'t work well.',
      vocab: ['Share', 'Voltage', 'Weak'],
      quiz: {
        question: 'If you add a bulb and a fan to the same battery loop, what happens?',
        options: ['They explode', 'They share the power and might be weaker', 'They get much stronger'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g3-4',
      grade: 'Grade 3',
      type: 'activity',
      icon: '💡',
      title: 'Spin & Shine 🌀💡',
      topic: 'Electric Motors & Bulbs',
      description: 'Power a fan motor and a lightbulb at the same time in the same loop!',
      learningObjective: 'Create a circuit with different types of loads.',
      realWorldApp: 'A hairdryer has a motor for the fan and a heater—two different components!',
      challengeInstructions: 'Insert a Fan Motor and a Lightbulb in the circuit loop. Turn on the switch to see both work!',
      vocab: ['Motor', 'Bulb', 'Voltage Share'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'FAN'],
      targetConditions: { requiresFanBulbCombo: true, requiresSwitchClosed: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g3-5',
      grade: 'Grade 3',
      type: 'activity',
      icon: '💨',
      title: 'Double Fan Power 💨',
      topic: 'Multiple Motors',
      description: 'Can you run two fans from one battery?',
      learningObjective: 'Operate multiple motors in series.',
      realWorldApp: 'Drones use 4 small motors to fly!',
      challengeInstructions: 'Place TWO Fan Motors in the circuit. Close the switch to spin them.',
      vocab: ['Drone', 'Double', 'Spin'],
      circuitConfig: ['BATTERY', 'SWITCH', 'FAN', 'FAN'],
      targetConditions: { requiresFanCount: 2, requiresSwitchClosed: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g3-6',
      grade: 'Grade 3',
      type: 'quiz',
      icon: '🔄',
      title: 'Energy Conversion 🔄',
      topic: 'Energy',
      description: 'Electricity can become light, heat, sound, or motion!',
      learningObjective: 'Identify different forms of energy conversion.',
      realWorldApp: 'A toaster turns electricity into heat. A TV turns it into light and sound.',
      vocab: ['Conversion', 'Heat', 'Sound'],
      quiz: {
        question: 'What does a buzzer turn electricity into?',
        options: ['Light', 'Sound', 'Motion'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g3-7',
      grade: 'Grade 3',
      type: 'activity',
      icon: '🔔',
      title: 'Make some Noise! 🔔',
      topic: 'Buzzers',
      description: 'Let\'s turn electricity into sound using a buzzer!',
      learningObjective: 'Incorporate an audio output device into a circuit.',
      realWorldApp: 'Doorbells use buzzers to let you know someone is there.',
      challengeInstructions: 'Place a Buzzer and a Switch in the circuit. Close the switch to hear it!',
      vocab: ['Buzzer', 'Sound', 'Alarm'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BUZZER', 'WIRE'],
      targetConditions: { requiresBuzzer: true, requiresSwitchClosed: true, requiresFlowing: true }
    },
    {
      id: 'lesson-g3-8',
      grade: 'Grade 3',
      type: 'activity',
      icon: '🎉',
      title: 'The Party Circuit 🎉',
      topic: 'Review Activity',
      description: 'Let\'s make noise and light at the same time!',
      learningObjective: 'Combine a light source and a sound source in one circuit.',
      realWorldApp: 'Fire alarms flash lights and make loud sounds to keep us safe.',
      challengeInstructions: 'Add a Bulb, a Buzzer, and a Switch. Close the switch to start the party!',
      vocab: ['Party', 'Combine', 'Alarm'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'BUZZER'],
      targetConditions: { requiresBuzzer: true, requiresBulb: true, requiresSwitchClosed: true, requiresFlowing: true }
    }
  ],
  'Grade 4': [
    {
      id: 'lesson-g4-1',
      grade: 'Grade 4',
      type: 'quiz',
      icon: '🛡️',
      title: 'What is Resistance? 🛡️',
      topic: 'Resistance',
      description: 'Resistance is like a speed-bump for electricity. It slows down the flow.',
      learningObjective: 'Define resistance and its purpose in a circuit.',
      realWorldApp: 'Resistors stop too much electricity from burning out small LED lights.',
      vocab: ['Resistance', 'Speed-bump', 'Flow'],
      quiz: {
        question: 'What does a resistor do?',
        options: ['Makes electricity go faster', 'Slows down the flow of electricity', 'Stores electricity'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g4-2',
      grade: 'Grade 4',
      type: 'activity',
      icon: '🔔',
      title: 'Buzzer Safety Shield 🛡️',
      topic: 'Resistance & Safety',
      description: 'Build a warning system with a buzzer and protect it using a Resistor speed-bump!',
      learningObjective: 'Use a resistor to limit current flow to an output device.',
      realWorldApp: 'Without resistors, sensitive electronics like computers would break instantly.',
      challengeInstructions: 'Wire a Battery, Switch, Buzzer, and Resistor in a loop. Close the switch and slide the resistor size to change the current.',
      vocab: ['Resistor', 'Ohm\'s Law', 'Buzzer'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BUZZER', 'RESISTOR'],
      targetConditions: { requiresBuzzer: true, requiresResistor: true, requiresSwitchClosed: true }
    },
    {
      id: 'lesson-g4-3',
      grade: 'Grade 4',
      type: 'quiz',
      icon: '⚖️',
      title: 'Ohm\'s Law Basics ⚖️',
      topic: 'Ohm\'s Law',
      description: 'More resistance means less current. Less resistance means more current!',
      learningObjective: 'Understand the inverse relationship between resistance and current.',
      realWorldApp: 'When you turn a volume knob down, you are actually increasing resistance!',
      vocab: ['Ohm', 'Current', 'Inverse'],
      quiz: {
        question: 'If you add MORE resistance, what happens to the electricity flow?',
        options: ['It flows more', 'It flows less', 'It stays the same'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g4-4',
      grade: 'Grade 4',
      type: 'activity',
      icon: '💡',
      title: 'Dimming the Light 💡',
      topic: 'Variable Resistance',
      description: 'Use a resistor to change how bright the bulb is!',
      learningObjective: 'Observe how changing resistance affects a bulb\'s brightness.',
      realWorldApp: 'Dimmer switches on walls use variable resistors to change the light level.',
      challengeInstructions: 'Place a Battery, Switch, Bulb, and Resistor. Adjust the resistor slider while the switch is closed.',
      vocab: ['Dimmer', 'Brightness', 'Variable'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'RESISTOR'],
      targetConditions: { requiresBulb: true, requiresResistor: true, requiresSwitchClosed: true }
    },
    {
      id: 'lesson-g4-5',
      grade: 'Grade 4',
      type: 'quiz',
      icon: '🌡️',
      title: 'Heat from Resistance 🌡️',
      topic: 'Resistance Effects',
      description: 'When electricity pushes hard against a resistor, it makes HEAT!',
      learningObjective: 'Understand that resistance can generate heat.',
      realWorldApp: 'Electric heaters and hair dryers use special wires with high resistance to create heat.',
      vocab: ['Heat', 'Friction', 'Push'],
      quiz: {
        question: 'What do high-resistance wires often create?',
        options: ['Ice', 'Heat', 'Water'],
        correctIndex: 1
      }
    },
    {
      id: 'lesson-g4-6',
      grade: 'Grade 4',
      type: 'activity',
      icon: '🛡️',
      title: 'Triple Loop Safety 🛡️💡🔔',
      topic: 'Complex Circuits',
      description: 'Connect a resistor, a lightbulb, and a buzzer in the same circuit safely!',
      learningObjective: 'Combine multiple output types and a resistor in a single circuit.',
      realWorldApp: 'A microwave has a light inside, a buzzer when it finishes, and resistors to control everything.',
      challengeInstructions: 'Wire a Battery, Switch, Resistor, Lightbulb, and Buzzer. Close the switch and adjust resistance.',
      vocab: ['Resistor', 'Buzzer', 'Safety'],
      circuitConfig: ['BATTERY', 'SWITCH', 'BULB', 'RESISTOR'],
      targetConditions: { requiresTripleLoad: true } 
    },
    {
      id: 'lesson-g4-7',
      grade: 'Grade 4',
      type: 'activity',
      icon: '⚙️',
      title: 'Fan Protection ⚙️',
      topic: 'Protecting Motors',
      description: 'Motors can spin too fast and break. Protect it with a resistor!',
      learningObjective: 'Use a resistor to control the speed of a motor.',
      realWorldApp: 'Electric scooter throttles use resistors to let you control your speed safely.',
      challengeInstructions: 'Add a Battery, a Switch, a Fan Motor, and a Resistor. Close the switch.',
      vocab: ['Throttle', 'Protect', 'Speed'],
      circuitConfig: ['BATTERY', 'SWITCH', 'FAN', 'RESISTOR'],
      targetConditions: { requiresFan: true, requiresResistor: true, requiresSwitchClosed: true }
    },
    {
      id: 'lesson-g4-8',
      grade: 'Grade 4',
      type: 'activity',
      icon: '🏆',
      title: 'Ultimate Challenge 🏆',
      topic: 'Final Exam',
      description: 'You are now a Circuit Master! Build any safe circuit with a resistor to pass.',
      learningObjective: 'Demonstrate mastery of basic electronics.',
      realWorldApp: 'You have the knowledge to understand the electronics all around you!',
      challengeInstructions: 'Create a closed circuit with a Battery, a Resistor, and ANY two outputs (Bulb, Fan, or Buzzer).',
      vocab: ['Master', 'Electronics', 'Graduate'],
      circuitConfig: ['BATTERY', 'RESISTOR', 'WIRE', 'WIRE'],
      targetConditions: { requiresResistor: true, requiresFlowing: true }
    }
  ]
};

export { SYLLABUS };

```

---

### `backend/data/db.json`
**Function:** Source code file.

```json
{
  "stars": 35,
  "badges": [
    "junior_engineer",
    "circuit_master"
  ],
  "completedLessons": [
    "lesson-g2-std",
    "lesson-g2-adv",
    "sim_preset_OPEN_CLOSED"
  ],
  "completedCircuits": [
    "circ-1",
    "circ-2"
  ],
  "grade": "Grade 2",
  "level": 1,
  "readinessScore": 100
}
```

---

### `backend/data/learningEngineSchema.json`
**Function:** Contains core business logic, simulation behavior, or AI generation capabilities.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "STEMLearningEngineContract",
  "description": "JSON Contract Schema for the EduCare AI STEM & Circuit Simulator Adaptive Learning Engine.",
  "type": "object",
  "definitions": {
    "Lesson": {
      "type": "object",
      "properties": {
        "id": { "type": "string" },
        "grade": { "type": "string" },
        "icon": { "type": "string" },
        "title": { "type": "string" },
        "topic": { "type": "string" },
        "description": { "type": "string" },
        "vocab": {
          "type": "array",
          "items": { "type": "string" }
        }
      },
      "required": ["id", "grade", "title", "topic", "description"]
    },
    "Challenge": {
      "type": "object",
      "properties": {
        "challengeInstructions": { "type": "string" },
        "circuitConfig": {
          "type": "array",
          "items": { "type": "string" }
        },
        "targetConditions": {
          "type": "object",
          "additionalProperties": { "type": "boolean" }
        }
      },
      "required": ["challengeInstructions", "circuitConfig", "targetConditions"]
    }
  },
  "properties": {
    "input": {
      "type": "object",
      "properties": {
        "grade": {
          "type": "string",
          "enum": ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"]
        },
        "performanceScore": {
          "type": "integer",
          "minimum": 0,
          "maximum": 100
        },
        "previousLessons": {
          "type": "array",
          "items": { "type": "string" }
        },
        "completedCircuits": {
          "type": "array",
          "items": { "type": "string" }
        }
      },
      "required": ["grade", "performanceScore", "previousLessons", "completedCircuits"]
    },
    "output": {
      "type": "object",
      "properties": {
        "recommendedLesson": { "$ref": "#/definitions/Lesson" },
        "recommendedChallenge": { "$ref": "#/definitions/Challenge" },
        "hintLevel": {
          "type": "string",
          "enum": ["none", "basic", "detailed"]
        },
        "difficultyLevel": {
          "type": "string",
          "enum": ["standard", "advanced", "supportive"]
        },
        "adaptiveTip": { "type": "string" }
      },
      "required": ["recommendedLesson", "recommendedChallenge", "hintLevel", "difficultyLevel", "adaptiveTip"]
    }
  }
}

```

---

### `backend/lessonEngine.js`
**Function:** Contains core business logic, simulation behavior, or AI generation capabilities.

```js
// AI-Based Adaptive Learning System for STEM Education - lessonEngine.js

import { SYLLABUS } from './data/curriculum.js';

// Advanced AI-based Adaptive Learning Engine
export function getAdaptiveLesson(grade, stars = 15, failureCount = 0, timeTaken = 60, lessonId = null) {
  const gradeSyllabus = SYLLABUS[grade] || SYLLABUS['KG'];
  
  // Find the lesson by ID, or fallback to first lesson
  let activeLesson = gradeSyllabus.find(l => l.id === lessonId) || gradeSyllabus[0];
  activeLesson = { ...activeLesson }; // copy

  // AI Adaptivity: adjust difficulty or recommended lesson based on stats
  let difficultyMode = 'standard';
  
  if (stars >= 25 || (timeTaken < 45 && failureCount === 0)) {
    difficultyMode = 'advanced';
    // Load advanced properties
    activeLesson.difficulty = 'Advanced Challenge 🚀';
    if (activeLesson.type !== 'quiz') {
      activeLesson.challengeInstructions = `Advanced Mission: ${activeLesson.challengeInstructions} (Optimize the loop with minimum components!)`;
    }
  } else if (failureCount >= 2) {
    difficultyMode = 'supportive';
    activeLesson.difficulty = 'Supportive Mode 🛡️';
    if (activeLesson.type !== 'quiz') {
      activeLesson.challengeInstructions = `Supportive Mission: We pre-configured slots for you. Just connect the remaining parts to light it up!`;
    }
  }

  // AI Hint Generation Rules
  let adaptiveHint = '';
  if (difficultyMode === 'supportive') {
    adaptiveHint = `🤝 Supportive Scaffolding Activated: Sparky pre-placed key parts. Make sure to complete the loop!`;
  } else if (failureCount === 1) {
    adaptiveHint = "💡 Hint: Electrons need a complete closed loop from the battery positive (+) back to negative (-)!";
  } else if (failureCount >= 2) {
    switch (grade) {
      case 'KG':
      case 'Grade 1':
        adaptiveHint = "🔋 Tip: Metal objects are conductors. Wood and plastic block the flow of electricity!";
        break;
      case 'Grade 2':
        adaptiveHint = "🔌 Tip: Check your switches! Click on the Switch on the board to toggle it CLOSED.";
        break;
      case 'Grade 3':
        adaptiveHint = "🌀 Tip: Swap out the bulb for a Fan Motor to spin the blades!";
        break;
      case 'Grade 4':
        adaptiveHint = "🚧 Tip: Slide the resistor slider to a safe range (5-20 Ohms) to protect the buzzer!";
        break;
      default:
        adaptiveHint = "💡 Tip: Make sure the wire paths are complete.";
    }
  }

  return {
    ...activeLesson,
    failureCount,
    timeTaken,
    starsContext: stars,
    difficultyMode,
    adaptiveHint
  };
}

export function getSTEMRecommendation(input) {
  const { grade, performanceScore, previousLessons, completedCircuits } = input;
  
  // 1. Difficulty Level & Hint Level Determination
  let difficultyLevel = 'standard';
  let hintLevel = 'basic';
  
  if (performanceScore >= 80) {
    difficultyLevel = 'advanced';
    hintLevel = 'none';
  } else if (performanceScore < 50) {
    difficultyLevel = 'supportive';
    hintLevel = 'detailed';
  }

  // 2. Select Syllabus List based on Grade
  const syllabusList = SYLLABUS[grade] || SYLLABUS['KG'];

  // 3. Recommended Lesson Selection: find first uncompleted lesson
  let recommendedLesson = syllabusList.find(lesson => !previousLessons.includes(lesson.id));

  // Fallback: If all lessons of this grade are completed, transition to next grade or loop first lesson
  if (!recommendedLesson) {
    const gradesSequence = ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'];
    const nextIdx = gradesSequence.indexOf(grade) + 1;
    if (nextIdx < gradesSequence.length) {
      const nextGrade = gradesSequence[nextIdx];
      const nextSyllabus = SYLLABUS[nextGrade] || [];
      recommendedLesson = nextSyllabus[0];
    } else {
      // Loop back to the final lesson of Grade 4
      recommendedLesson = SYLLABUS['Grade 4'][2];
    }
  }

  // Ensure deep copy
  recommendedLesson = { ...recommendedLesson };

  // 4. Circuit Challenge selection mapping based on Grade Rules
  let recommendedChallenge = {
    challengeInstructions: recommendedLesson.challengeInstructions || recommendedLesson.description,
    circuitConfig: recommendedLesson.circuitConfig || ['BATTERY', 'WIRE', 'WIRE', 'WIRE'],
    targetConditions: recommendedLesson.targetConditions || { requiresFlowing: true }
  };

  // Adjust challenge instruction based on difficulty Level
  if (recommendedLesson.type !== 'quiz') {
    if (difficultyLevel === 'advanced') {
      recommendedChallenge.challengeInstructions = `🚀 Advanced Challenge: ${recommendedChallenge.challengeInstructions} Optimize components to minimize connections.`;
    } else if (difficultyLevel === 'supportive') {
      recommendedChallenge.challengeInstructions = `🛡️ Supportive Assistance: We pre-configured primary slots for you. Connect the remaining parts!`;
    }
  }

  // 5. Adaptive Tip based on hintLevel and Grade Rules
  let adaptiveTip = '';
  if (hintLevel === 'detailed') {
    switch(grade) {
      case 'Grade 1':
        adaptiveTip = "💡 Sparky's Clue: Drag a Battery onto the left slot, and an LED bulb onto the right. Complete the loop using wires.";
        break;
      case 'Grade 2':
        adaptiveTip = "💡 Sparky's Clue: Check your switch position! Click the switch component to toggle it CLOSED (bridge down).";
        break;
      case 'Grade 3':
        adaptiveTip = "💡 Sparky's Clue: Make sure you have a battery, switch, and light bulb connected in a complete circular ring.";
        break;
      case 'Grade 4':
        adaptiveTip = "💡 Sparky's Clue: Connect the Red, Yellow, and Green LEDs on separate parallel loop lines to control them independently!";
        break;
      default:
        adaptiveTip = "💡 Sparky's Clue: Connect components in a complete circle from positive (+) to negative (-).";
    }
  } else if (hintLevel === 'basic') {
    adaptiveTip = "💡 Hint: Electric current needs a complete closed loop from the battery (+) back to (-) to flow.";
  } else {
    adaptiveTip = "🌟 Challenge: You are doing great! Try to complete the circuit with no extra helper hints.";
  }

  return {
    recommendedLesson,
    recommendedChallenge,
    hintLevel,
    difficultyLevel,
    adaptiveTip
  };
}

export { SYLLABUS };


```

---

### `backend/models/Progress.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
import mongoose from 'mongoose';

const ProgressSchema = new mongoose.Schema({
  studentId: { type: String, default: 'default_student' },
  grade: { type: String, default: 'KG' },
  completedLessons: [String],
  completedCircuits: [String],
  stars: { type: Number, default: 15 },
  level: { type: Number, default: 1 },
  badges: [String],
  readinessScore: { type: Number, default: 0 }
}, { timestamps: true });

export const ProgressModel = mongoose.model('Progress', ProgressSchema);
export default ProgressModel;

```

---

### `backend/modules/logic/controllers/logicController.js`
**Function:** Handles incoming HTTP requests, processes business logic, and sends responses.

```js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { 
  processLogicQuery, 
  generateLogicChallengeSet, 
  analyzeLogicSubmission 
} from '../services/logicEngine.js';
import { eventBus } from '../../../shared/eventBus.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local DB Configuration
const DB_DIR = path.join(__dirname, '../../../data');
const DB_FILE = path.join(DB_DIR, 'logic.json');

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const defaultProgress = {
  studentId: 'student_123',
  grade: 'KG',
  stars: 20,
  level: 1,
  badges: [],
  completedSessions: [],
  mistakeHistory: [],
  weakTopics: [],
  sessionCount: 0,
  totalQuestions: 0,
  correctQuestions: 0,
  readinessScore: 0
};

const readLocalDB = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return defaultProgress;
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return defaultProgress;
  }
};

const writeLocalDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    return false;
  }
};

// --- CONTROLLER ACTIONS ---

/**
 * POST /logic/chat
 */
export const chatWithLogicMentor = async (req, res) => {
  const { studentId, message, grade } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Missing 'message' field." });
  }

  const studentGrade = grade || 'KG';
  
  // Publish Integration Hint Request Hook
  eventBus.publish('LOGIC_HINT_REQUESTED', { studentId: studentId || 'student_123', queryText: message });

  const result = processLogicQuery({ message, grade: studentGrade });
  
  res.json({
    success: true,
    ...result
  });
};

/**
 * GET /logic/progress
 */
export const getLogicProgress = async (req, res) => {
  const data = readLocalDB();
  res.json(data);
};

/**
 * POST /logic/progress
 */
export const updateLogicProgress = async (req, res) => {
  const data = readLocalDB();
  const { stars, badges, grade, level } = req.body;

  if (stars !== undefined) data.stars = stars;
  if (badges !== undefined) data.badges = badges;
  if (grade !== undefined) data.grade = grade;
  if (level !== undefined) data.level = level;

  writeLocalDB(data);
  res.json({ success: true, data });
};

/**
 * POST /logic/generate-session
 */
export const generateLogicSession = async (req, res) => {
  const { studentId, grade, mode } = req.body;
  const dbData = readLocalDB();

  const studentGrade = grade || dbData.grade || 'KG';
  
  // Calculate average performance score
  const totalQ = dbData.totalQuestions || 0;
  const correctQ = dbData.correctQuestions || 0;
  const performanceScore = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 80;

  // Generate question set using logic engine
  const sessionConfig = generateLogicChallengeSet({
    grade: studentGrade,
    performanceScore,
    mistakeHistory: dbData.mistakeHistory,
    weakTopics: dbData.weakTopics
  });

  // Save current active session questions in temporary store
  dbData.activeSession = {
    id: `session-logic-${Date.now()}`,
    mode: mode || 'practice',
    challenges: sessionConfig.questionSet,
    currentIndex: 0,
    answers: [],
    rewardPoints: sessionConfig.rewardPoints,
    startTime: new Date().toISOString()
  };
  writeLocalDB(dbData);

  // Publish Event
  eventBus.publish('LOGIC_SESSION_STARTED', {
    studentId: studentId || 'student_123',
    grade: studentGrade,
    mode: mode || 'practice',
    sessionId: dbData.activeSession.id
  });

  eventBus.publish('LOGIC_CHALLENGE_GENERATED', {
    studentId: studentId || 'student_123',
    sessionId: dbData.activeSession.id,
    challengeCount: sessionConfig.questionSet.length
  });

  res.json({
    success: true,
    sessionId: dbData.activeSession.id,
    recommendedGame: sessionConfig.recommendedGame,
    difficultyLevel: sessionConfig.difficultyLevel,
    hintLevel: sessionConfig.hintLevel,
    nextStepPath: sessionConfig.nextStepPath,
    challenges: sessionConfig.questionSet.map(c => ({
      id: c.id,
      questionText: c.questionText,
      options: c.options,
      topicId: c.topicId,
      realLifeConnection: c.realLifeConnection
    }))
  });
};

/**
 * POST /logic/submit-answer
 */
export const submitLogicAnswer = async (req, res) => {
  const { studentId, challengeId, answer, timeTaken, attemptCount } = req.body;
  const dbData = readLocalDB();

  if (!dbData.activeSession) {
    return res.status(400).json({ error: "No active logic session found. Generate a session first." });
  }

  // Find challenge inside active session
  const activeChallenges = dbData.activeSession.challenges;
  const cIdx = activeChallenges.findIndex(c => c.id === challengeId);
  if (cIdx === -1) {
    return res.status(404).json({ error: "Challenge not found in active session." });
  }

  const challengeObj = activeChallenges[cIdx];
  const evalResult = analyzeLogicSubmission({
    challengeObj,
    answer,
    timeTaken: timeTaken || 10,
    attemptCount: attemptCount || 1
  });

  // Log statistics
  dbData.totalQuestions = (dbData.totalQuestions || 0) + 1;
  if (evalResult.isCorrect) {
    dbData.correctQuestions = (dbData.correctQuestions || 0) + 1;
  } else {
    // Record mistake in history
    dbData.mistakeHistory.push({
      challengeId,
      topicId: challengeObj.topicId,
      wrongAnswer: answer,
      timestamp: new Date().toISOString()
    });
    
    // Assign weak topic tag if repeated mistakes occur
    const topicMistakesCount = dbData.mistakeHistory.filter(m => m.topicId === challengeObj.topicId).length;
    if (topicMistakesCount >= 2 && !dbData.weakTopics.includes(challengeObj.topicId)) {
      dbData.weakTopics.push(challengeObj.topicId);
    }
  }

  // Update session answer list
  dbData.activeSession.answers.push({
    challengeId,
    answer,
    isCorrect: evalResult.isCorrect,
    timeTaken: timeTaken || 10
  });

  // Check if session is completed (5 questions)
  const isSessionEnd = dbData.activeSession.answers.length >= activeChallenges.length;
  let responsePayload = {
    isCorrect: evalResult.isCorrect,
    correctAnswer: challengeObj.correctAnswer,
    explanation: challengeObj.explanation,
    stepByStep: challengeObj.stepByStep,
    hintLevel: evalResult.attemptCount >= 2 ? evalResult.hintLevel : 1,
    hintText: evalResult.isCorrect ? '' : (attemptCount === 1 ? challengeObj.hint2 : attemptCount === 2 ? challengeObj.hint3 : challengeObj.hint4),
    earnedStars: evalResult.earnedStars,
    isSessionEnd
  };

  if (evalResult.isCorrect) {
    dbData.stars = (dbData.stars || 20) + evalResult.earnedStars;
    
    eventBus.publish('LOGIC_REWARD_GRANTED', {
      studentId: studentId || 'student_123',
      rewardType: 'correct_answer',
      starsEarned: evalResult.earnedStars
    });
  }

  if (isSessionEnd) {
    dbData.sessionCount = (dbData.sessionCount || 0) + 1;
    const sessionAnswers = dbData.activeSession.answers;
    const correctCount = sessionAnswers.filter(a => a.isCorrect).length;
    
    // Streak / perfect chain logic
    let bonusStars = 0;
    if (correctCount === activeChallenges.length) {
      bonusStars = 20; // Perfect logic chain
      responsePayload.sessionMsg = "🧠 PERFECT LOGIC CHAIN! LogicLeap AI awards you +20 Bonus Stars!";
    } else if (correctCount >= 4) {
      bonusStars = 10; // Streak bonus
      responsePayload.sessionMsg = "🎉 Outstanding thinking! LogicLeap AI awards you +10 Bonus Stars!";
    } else {
      responsePayload.sessionMsg = "Keep exercising your brain! Logic session complete.";
    }

    dbData.stars = (dbData.stars || 20) + bonusStars;
    if (bonusStars > 0) {
      eventBus.publish('LOGIC_REWARD_GRANTED', {
        studentId: studentId || 'student_123',
        rewardType: correctCount === activeChallenges.length ? 'perfect_logic_chain' : 'streak_completion',
        starsEarned: bonusStars
      });
    }

    // Award Badges Server-side
    const badgesAwarded = [];
    if (dbData.sessionCount >= 1 && !dbData.badges.includes('Logic Explorer')) {
      dbData.badges.push('Logic Explorer');
      badgesAwarded.push('Logic Explorer');
    }
    if (correctCount === activeChallenges.length && !dbData.badges.includes('Pattern Master')) {
      dbData.badges.push('Pattern Master');
      badgesAwarded.push('Pattern Master');
    }
    
    const avgTime = sessionAnswers.reduce((sum, val) => sum + val.timeTaken, 0) / sessionAnswers.length;
    if (correctCount === activeChallenges.length && avgTime <= 12 && !dbData.badges.includes('Brain Hero')) {
      dbData.badges.push('Brain Hero');
      badgesAwarded.push('Brain Hero');
    }
    
    if (dbData.grade === 'Grade 4' && correctCount >= 4 && !dbData.badges.includes('Puzzle Champion')) {
      dbData.badges.push('Puzzle Champion');
      badgesAwarded.push('Puzzle Champion');
    }

    const overallAccuracy = dbData.totalQuestions > 10 ? (dbData.correctQuestions / dbData.totalQuestions) : 0;
    if (overallAccuracy >= 0.90 && !dbData.badges.includes('Thinking Wizard')) {
      dbData.badges.push('Thinking Wizard');
      badgesAwarded.push('Thinking Wizard');
    }

    if (badgesAwarded.length > 0) {
      badgesAwarded.forEach(badge => {
        eventBus.publish('BADGE_UNLOCKED', {
          studentId: studentId || 'student_123',
          badgeId: badge.toLowerCase().replace(' ', '_'),
          badgeName: badge
        });
      });
    }

    // Update readiness score
    const completionGoal = dbData.grade === 'KG' ? 2 : 3;
    const completedCount = Math.min(completionGoal, dbData.sessionCount);
    const readinessScore = Math.round((completedCount / completionGoal) * 100);
    dbData.readinessScore = readinessScore;

    // Trigger outbound events
    eventBus.publish('LOGIC_SESSION_COMPLETED', {
      studentId: studentId || 'student_123',
      grade: dbData.grade,
      sessionId: dbData.activeSession.id,
      starsEarned: correctCount * 5 + bonusStars,
      sourceModule: 'LOGIC_APP'
    });

    eventBus.publish('LOGIC_PROGRESS_UPDATED', {
      studentId: studentId || 'student_123',
      stars: dbData.stars,
      level: dbData.level,
      readinessScore,
      badges: dbData.badges
    });

    eventBus.publish('LOGIC_SCORE_UPDATED', {
      studentId: studentId || 'student_123',
      newScore: dbData.stars
    });

    // Clear active session
    delete dbData.activeSession;
  }

  writeLocalDB(dbData);

  eventBus.publish('LOGIC_ANSWER_SUBMITTED', {
    studentId: studentId || 'student_123',
    challengeId,
    isCorrect: evalResult.isCorrect,
    timeTaken: timeTaken || 10
  });

  res.json({
    success: true,
    ...responsePayload
  });
};

```

---

### `backend/modules/logic/routes/logic.js`
**Function:** Defines API endpoints and maps them to respective controllers.

```js
import express from 'express';
import { 
  chatWithLogicMentor, 
  getLogicProgress, 
  updateLogicProgress, 
  generateLogicSession, 
  submitLogicAnswer 
} from '../controllers/logicController.js';

const router = express.Router();

router.post('/chat', chatWithLogicMentor);
router.get('/progress', getLogicProgress);
router.post('/progress', updateLogicProgress);
router.post('/generate-session', generateLogicSession);
router.post('/submit-answer', submitLogicAnswer);

export default router;

```

---

### `backend/modules/logic/services/logicEngine.js`
**Function:** Contains core business logic, simulation behavior, or AI generation capabilities.

```js
/**
 * LOGICLEAP AI - Logical Reasoning & Problem Solving Engine
 * Domain: Logic puzzles, pattern recognition, memory games, and reasoning tasks.
 */

// Grade-wise syllabus definitions for LogicLeap
export const LOGIC_SYLLABUS = {
  'KG': [
    { id: 'kg-shapes', name: 'Shape Matching', desc: 'Identify geometric symbols and matching emojis.' },
    { id: 'kg-colors', name: 'Color Patterns', desc: 'Complete simple color sequences.' },
    { id: 'kg-memory', name: 'Emoji Memory', desc: 'Recall a sequence of emojis in order.' },
    { id: 'kg-odd-out', name: 'Odd One Out', desc: 'Spot the element that does not belong.' }
  ],
  'Grade 1': [
    { id: 'g1-patterns', name: 'Pattern Continuation', desc: 'Continue direction and rotation sequences.' },
    { id: 'g1-riddles', name: 'Basic Puzzles', desc: 'Solve kid-friendly descriptive logic riddles.' },
    { id: 'g1-sequence', name: 'Sequence Ordering', desc: 'Sort daily events in logical order.' },
    { id: 'g1-matching', name: 'Memory Match Card', desc: 'Identify matching pairs of objects.' }
  ],
  'Grade 2': [
    { id: 'g2-symbol-patterns', name: 'Symbol Patterns', desc: 'Solve repeating and progressive symbol sequences.' },
    { id: 'g2-sorting', name: 'Logical Sorting', desc: 'Sort objects by logical size, weight, or class.' },
    { id: 'g2-directions', name: 'Direction Games', desc: 'Navigate virtual grids using spatial directions.' },
    { id: 'g2-reasoning', name: 'Simple Puzzles', desc: 'Single-step deduction and sorting puzzles.' }
  ],
  'Grade 3': [
    { id: 'g3-complex-patterns', name: 'Complex Patterns', desc: 'Continue multi-characteristic sequences.' },
    { id: 'g3-missing-number', name: 'Missing Symbols', desc: 'Identify missing elements inside grids or circles.' },
    { id: 'g3-grid-logic', name: 'Grid Logic Puzzles', desc: 'Match attributes using deduction grids.' },
    { id: 'g3-multi-step', name: 'Multi-Step Comparison', desc: 'Deduce ordering based on comparison constraints.' }
  ],
  'Grade 4': [
    { id: 'g4-adv-puzzles', name: 'Advanced Riddles', desc: 'Solve complex spatial and strategy riddles.' },
    { id: 'g4-deduction', name: 'Logical Deduction', desc: 'Solve truth-teller / liar deduction puzzles.' },
    { id: 'g4-strategy', name: 'Strategy Games', desc: 'Reason through win-state scenarios and puzzle trees.' },
    { id: 'g4-analytical', name: 'Analytical Reasoning', desc: 'Solve complex constraint ordering challenges.' }
  ]
};

// Seed logic challenge templates for dynamic generation
const CHALLENGE_TEMPLATES = {
  'KG': [
    {
      type: 'odd-out',
      topic: 'kg-odd-out',
      generate: () => {
        const sets = [
          { items: ['🍎', '🍌', '🍇', '🥕'], odd: '🥕', category: 'fruits', oddCategory: 'vegetable', reason: 'Carrot is a vegetable, while apples, bananas, and grapes are fruits!' },
          { items: ['🐶', '🐱', '🦁', '🚗'], odd: '🚗', category: 'animals', oddCategory: 'vehicle', reason: 'Car is a vehicle, while dog, cat, and lion are animals!' },
          { items: ['⚽', '🏀', '🏈', '🍕'], odd: '🍕', category: 'sports balls', oddCategory: 'food', reason: 'Pizza is food, while soccer, basket, and footballs are sports equipment!' },
          { items: ['✈️', '🚁', '🚀', '🐟'], odd: '🐟', category: 'flying objects', oddCategory: 'sea creature', reason: 'Fish swims in water, while airplanes, helicopters, and rockets fly in the sky!' }
        ];
        const selected = sets[Math.floor(Math.random() * sets.length)];
        const shuffledOptions = [...selected.items].sort(() => Math.random() - 0.5);
        return {
          questionText: `Which one is the ODD one out? ${selected.items.join(' ')}`,
          options: shuffledOptions,
          correctAnswer: selected.odd,
          explanation: selected.reason,
          stepByStep: `1. Look at each item: ${selected.items.join(', ')}.\n2. Notice what three of them have in common: they are all ${selected.category}.\n3. The remaining one (${selected.odd}) is a ${selected.oddCategory}, so it does not belong!`,
          hint1: "Look closely at the categories of these items.",
          hint2: `Three of these belong in a group of ${selected.category}.`,
          hint3: `One of these is actually a ${selected.oddCategory}!`,
          hint4: `The odd one out is ${selected.odd}!`,
          realLifeConnection: "Just like sorting toys! You put blocks with blocks and cars with cars."
        };
      }
    },
    {
      type: 'colors',
      topic: 'kg-colors',
      generate: () => {
        const patterns = [
          { sequence: ['🔴', '🔵', '🔴', '🔵'], next: '🔴', clue: 'red follows blue' },
          { sequence: ['🟡', '🟢', '🟡', '🟢'], next: '🟡', clue: 'yellow follows green' },
          { sequence: ['🟧', '🟧', '🟦', '🟧', '🟧'], next: '🟦', clue: 'blue follows two oranges' },
          { sequence: ['💜', '💛', '💜', '💛'], next: '💜', clue: 'purple follows yellow' }
        ];
        const selected = patterns[Math.floor(Math.random() * patterns.length)];
        const options = ['🔴', '🔵', '🟡', '🟢', '🟧', '🟦', '💜', '💛'].filter(e => e !== selected.next).slice(0, 2);
        options.push(selected.next);
        const shuffledOptions = options.sort(() => Math.random() - 0.5);

        return {
          questionText: `Complete the pattern sequence: ${selected.sequence.join(' ')} [ ? ]`,
          options: shuffledOptions,
          correctAnswer: selected.next,
          explanation: `The sequence repeats. After ${selected.sequence[selected.sequence.length - 1]}, the pattern tells us that ${selected.clue}.`,
          stepByStep: `1. Read the emojis aloud: ${selected.sequence.join(', ')}.\n2. Look at the repeating group.\n3. Decide which emoji comes next based on the repeat rule.`,
          hint1: "Look at the order of the colors.",
          hint2: `Notice what color follows ${selected.sequence[selected.sequence.length - 1]}.`,
          hint3: `The pattern says: ${selected.clue}.`,
          hint4: `The next emoji is ${selected.next}!`,
          realLifeConnection: "Like stripes on a shirt (red, blue, red, blue, red...)."
        };
      }
    }
  ],
  'Grade 1': [
    {
      type: 'patterns',
      topic: 'g1-patterns',
      generate: () => {
        const directions = [
          { seq: ['⬆️', '➡️', '⬇️'], next: '⬅️', desc: 'clockwise rotation (Up, Right, Down, Left)' },
          { seq: ['⬅️', '⬇️', '➡️'], next: '⬆️', desc: 'counter-clockwise rotation (Left, Down, Right, Up)' },
          { seq: ['↗️', '↘️', '↗️'], next: '↘️', desc: 'diagonal alternating pattern (Up-Right, Down-Right)' },
          { seq: ['🔼', '🔽', '🔼'], next: '🔽', desc: 'vertical alternating pattern (Up, Down)' }
        ];
        const selected = directions[Math.floor(Math.random() * directions.length)];
        const distractors = ['⬆️', '➡️', '⬇️', '⬅️', '↗️', '↘️', '🔼', '🔽'].filter(d => d !== selected.next).slice(0, 2);
        distractors.push(selected.next);
        const shuffledOptions = distractors.sort(() => Math.random() - 0.5);

        return {
          questionText: `What arrow comes next in the sequence? ${selected.seq.join(' ')} [ ? ]`,
          options: shuffledOptions,
          correctAnswer: selected.next,
          explanation: `This pattern represents a ${selected.desc}.`,
          stepByStep: `1. Trace the direction of each arrow.\n2. Notice how it changes from step to step.\n3. Follow that rotation or alternation to find the next arrow.`,
          hint1: "Look at the direction the arrow is pointing.",
          hint2: `This is a ${selected.desc.split(' ')[0]} movement.`,
          hint3: `After pointing ${selected.seq[selected.seq.length - 1]}, it should point ${selected.next === '⬅️' ? 'Left' : selected.next === '⬆️' ? 'Up' : selected.next === '🔽' ? 'Down' : 'Down-Right'}.`,
          hint4: `The next arrow is ${selected.next}!`,
          realLifeConnection: "Like the hands of a clock spinning clockwise, or a weather vane spinning in the wind!"
        };
      }
    },
    {
      type: 'riddles',
      topic: 'g1-riddles',
      generate: () => {
        const riddles = [
          { q: "I have a face and two hands, but no arms or legs. What am I?", ans: "Clock ⏰", options: ["Clock ⏰", "Robot 🤖", "Mirror 🪞"], explanation: "A clock has a round dial called a 'face' and two pointers called hour and minute 'hands'!" },
          { q: "I get wetter the more I dry. What am I?", ans: "Towel 🧴", options: ["Towel 🧴", "Water 💧", "Sponge 🧽"], explanation: "A towel absorbs moisture from your body to dry you, making itself wetter!" },
          { q: "What has to be broken before you can use it?", ans: "Egg 🥚", options: ["Egg 🥚", "Coconut 🥥", "Lock 🔒"], explanation: "You must crack or break an egg shell to cook or bake with it!" },
          { q: "I have wings, but I am not an animal. I carry people high in the sky. What am I?", ans: "Airplane ✈️", options: ["Airplane ✈️", "Kite 🪁", "Eagle 🦅"], explanation: "An airplane has metal wings to fly and carry passengers across long distances!" }
        ];
        const selected = riddles[Math.floor(Math.random() * riddles.length)];
        return {
          questionText: selected.q,
          options: [...selected.options].sort(() => Math.random() - 0.5),
          correctAnswer: selected.ans,
          explanation: selected.explanation,
          stepByStep: `1. Think about the clues in the riddle.\n2. Test each option against the clues.\n3. The only item that matches all conditions is the ${selected.ans}.`,
          hint1: "Read the clues carefully.",
          hint2: "It is an object you can find at home or school.",
          hint3: `It starts with the letter '${selected.ans[0]}'.`,
          hint4: `The answer is ${selected.ans}!`,
          realLifeConnection: "Puzzles like this help our brains think about objects in creative ways!"
        };
      }
    }
  ],
  'Grade 2': [
    {
      type: 'sorting',
      topic: 'g2-sorting',
      generate: () => {
        const items = [
          { q: "Sort these animals by size from SMALLEST to LARGEST:", order: "Ant 🐜, Dog 🐶, Elephant 🐘", options: ["Ant 🐜, Dog 🐶, Elephant 🐘", "Dog 🐶, Ant 🐜, Elephant 🐘", "Elephant 🐘, Dog 🐶, Ant 🐜"], explanation: "An ant is tiny, a dog is medium-sized, and an elephant is huge!" },
          { q: "Sort these items by weight from HEAVIEST to LIGHTEST:", order: "Anchor ⚓, Bicycle 🚲, Feather 🪶", options: ["Anchor ⚓, Bicycle 🚲, Feather 🪶", "Bicycle 🚲, Anchor ⚓, Feather 🪶", "Feather 🪶, Bicycle 🚲, Anchor ⚓"], explanation: "An iron anchor is heaviest, a bicycle is medium-weight, and a feather is extremely light!" }
        ];
        const selected = items[Math.floor(Math.random() * items.length)];
        return {
          questionText: selected.q,
          options: selected.options,
          correctAnswer: selected.order,
          explanation: selected.explanation,
          stepByStep: `1. Compare the physical size/weight of each object.\n2. Arrange them in the requested order.\n3. Check your arrangement against the options.`,
          hint1: "Pay attention to the sorting direction (smallest-to-largest or heaviest-to-lightest).",
          hint2: "Compare the items two at a time.",
          hint3: `The first item in the sequence must be the ${selected.order.split(', ')[0]}.`,
          hint4: `The correct order is: ${selected.order}`,
          realLifeConnection: "Like sorting groceries! Putting heavy juice cartons at the bottom of the bag, and light bread at the top."
        };
      }
    },
    {
      type: 'directions',
      topic: 'g2-directions',
      generate: () => {
        const directions = [
          { start: [0, 0], steps: ['Right 2', 'Down 1'], end: [2, 1], gridDesc: "Start at top-left corner (0,0). Move right 2 boxes, then down 1 box. Where are you?" },
          { start: [1, 1], steps: ['Left 1', 'Up 1'], end: [0, 0], gridDesc: "Start at center (1,1). Move left 1 box, then up 1 box. Where are you?" },
          { start: [0, 2], steps: ['Right 1', 'Up 2'], end: [1, 0], gridDesc: "Start at bottom-left corner (0,2). Move right 1 box, then up 2 boxes. Where are you?" }
        ];
        const selected = directions[Math.floor(Math.random() * directions.length)];
        const correctStr = `(${selected.end[0]}, ${selected.end[1]})`;
        const distractors = [
          `(${selected.end[0] + 1}, ${selected.end[1]})`,
          `(${selected.end[0]}, ${Math.max(0, selected.end[1] - 1)})`
        ].filter(d => d !== correctStr);
        distractors.push(correctStr);

        return {
          questionText: selected.gridDesc,
          options: distractors.sort(() => Math.random() - 0.5),
          correctAnswer: correctStr,
          explanation: `Starting at (${selected.start[0]}, ${selected.start[1]}), moving ${selected.steps[0]} changes the X-coordinate, and moving ${selected.steps[1]} changes the Y-coordinate. You end up at (${selected.end[0]}, ${selected.end[1]}).`,
          stepByStep: `1. Draw a grid or imagine coordinates: X is horizontal, Y is vertical.\n2. Start at (${selected.start[0]}, ${selected.start[1]}).\n3. Execute step 1 (${selected.steps[0]}) -> new position.\n4. Execute step 2 (${selected.steps[1]}) -> final position ${correctStr}.`,
          hint1: "Right increases X, Left decreases X. Down increases Y, Up decreases Y.",
          hint2: `After the first move (${selected.steps[0]}), your coordinates are (${selected.steps[0].includes('Right') ? selected.start[0] + 2 : selected.start[0] - 1}, ${selected.start[1]}).`,
          hint3: `Now make the vertical move: ${selected.steps[1]}.`,
          hint4: `The final position is ${correctStr}!`,
          realLifeConnection: "Just like reading a map or navigating a robot on a grid board!"
        };
      }
    }
  ],
  'Grade 3': [
    {
      type: 'multi-step',
      topic: 'g3-multi-step',
      generate: () => {
        const scenarios = [
          { story: "Alice is taller than Bob. Bob is taller than Charlie. Who is the tallest?", ans: "Alice", options: ["Alice", "Bob", "Charlie"], explanation: "Since Alice is taller than Bob, and Bob is taller than Charlie, Alice is tallest." },
          { story: "Leo is faster than Sammy. Leo is slower than Clara. Who is the fastest runner?", ans: "Clara", options: ["Clara", "Leo", "Sammy"], explanation: "Clara is faster than Leo, who is faster than Sammy. So Clara is fastest." }
        ];
        const selected = scenarios[Math.floor(Math.random() * scenarios.length)];
        return {
          questionText: selected.story,
          options: selected.options,
          correctAnswer: selected.ans,
          explanation: selected.explanation,
          stepByStep: `1. Write down the relationships: e.g. A > B, and B > C.\n2. Connect them together: A > B > C.\n3. Read the order to answer who is tallest or fastest.`,
          hint1: "Draw line segments representing their heights or speeds.",
          hint2: "Identify who is in the middle of the order.",
          hint3: `The person in the middle is ${selected.options.find(o => o !== selected.ans && o !== 'Sammy' && o !== 'Charlie')}.`,
          hint4: `The winner is ${selected.ans}!`,
          realLifeConnection: "Line up sequences occur daily, like waiting in lines at the lunchroom or comparing toy weights!"
        };
      }
    },
    {
      type: 'missing-symbol',
      topic: 'g3-missing-number',
      generate: () => {
        const grids = [
          { pattern: "Circle, Square, Triangle | Square, Triangle, Circle | Triangle, Circle, [ ? ]", ans: "Square", options: ["Square", "Circle", "Triangle"], explanation: "Each row contains exactly one Circle, one Square, and one Triangle. The third row needs a Square to be complete!" },
          { pattern: "Red, Yellow, Blue | Yellow, Blue, Red | Blue, Red, [ ? ]", ans: "Yellow", options: ["Yellow", "Red", "Blue"], explanation: "Each group has Red, Yellow, and Blue. The last group is missing Yellow!" }
        ];
        const selected = grids[Math.floor(Math.random() * grids.length)];
        return {
          questionText: `Complete the grid sequence: ${selected.pattern}`,
          options: selected.options,
          correctAnswer: selected.ans,
          explanation: selected.explanation,
          stepByStep: `1. Group the sequence into three blocks divided by the '|' lines.\n2. Compare what elements appear in each block.\n3. The missing item is the one that appears in the first two blocks but is missing in the third.`,
          hint1: "Look at the blocks separately.",
          hint2: "Each block contains the same set of three elements in a rotated order.",
          hint3: "Which shape/color is missing from the last group?",
          hint4: `The missing element is ${selected.ans}!`,
          realLifeConnection: "Sudoku puzzles work this way! You can't repeat items in rows or columns."
        };
      }
    }
  ],
  'Grade 4': [
    {
      type: 'deduction',
      topic: 'g4-deduction',
      generate: () => {
        const scenarios = [
          {
            situation: "A treasure is hidden in Box A or Box B. Box A says: 'The treasure is not here.' Box B says: 'The treasure is in Box A.' Only one statement is TRUE. Where is the treasure?",
            ans: "Box B",
            options: ["Box A", "Box B", "Neither"],
            explanation: "If the treasure is in Box A, then Box A's statement is false, and Box B's is true (only 1 true, fits!). If the treasure is in Box B, then Box A's statement is true, and Box B's is false (only 1 true, fits!). Wait, let's re-verify: If gold is in A, A says 'not here' (False), B says 'in A' (True) -> 1 True. If gold is in B, A says 'not here' (True), B says 'in A' (False) -> 1 True. Ah! Let's make it simpler and unambiguous: Box A says 'The gold is in Box B.' Box B says 'The gold is in Box B.' If only one statement is true, where is it? Wait, let's write a classic deduction puzzle: Box A says: 'The treasure is not here.' Box B says: 'Box A is telling the truth.' If Box B is LYING, where is the treasure?",
            resolvedSituation: "A treasure is hidden in Box A or Box B. Box A says: 'The treasure is not in Box A.' Box B says: 'Box A is telling the truth.' If Box B is LYING (making his statement FALSE), where is the treasure?",
            resolvedAns: "Box A",
            resolvedOptions: ["Box A", "Box B"],
            resolvedExplanation: "If Box B is lying, then Box A's statement must be false. Box A says 'The treasure is not in Box A.' For this to be false, the treasure MUST be in Box A!",
            resolvedStep: "1. Assume Box B is lying -> Box A is NOT telling the truth (A is lying).\n2. Look at Box A's statement: 'Treasure is not in Box A.'\n3. Since A is lying, the opposite is true: The treasure is in Box A!"
          }
        ];
        const selected = scenarios[0];
        return {
          questionText: selected.resolvedSituation,
          options: selected.resolvedOptions,
          correctAnswer: selected.resolvedAns,
          explanation: selected.resolvedExplanation,
          stepByStep: selected.resolvedStep,
          hint1: "Start with Box B. If Box B is lying, what does it mean for Box A?",
          hint2: "It means Box A's statement is false.",
          hint3: "If Box A saying 'not in Box A' is false, then the treasure must be there.",
          hint4: `The treasure is in ${selected.resolvedAns}!`,
          realLifeConnection: "Like decoding clues in mystery games or forensic science logic!"
        };
      }
    },
    {
      type: 'analytical',
      topic: 'g4-analytical',
      generate: () => {
        return {
          questionText: "Five colored flags are in a row: Red, Blue, Green, Yellow, and Purple. The Red flag is first. The Green flag is next to the Red flag. The Yellow flag is last. If the Purple flag is immediately before the Yellow flag, what color is the flag in the MIDDLE (3rd position)?",
          options: ["Blue", "Green", "Purple"],
          correctAnswer: "Blue",
          explanation: "Let's list the positions 1 to 5:\n1: Red (Red is first)\n2: Green (Green is next to Red)\n5: Yellow (Yellow is last)\n4: Purple (Purple is immediately before Yellow)\nThis leaves position 3 for the Blue flag! Thus, Blue is in the middle.",
          stepByStep: "1. Write down positions: _ _ _ _ _.\n2. Place Red: Red _ _ _ _.\n3. Place Green: Red Green _ _ _.\n4. Place Yellow: Red Green _ _ Yellow.\n5. Place Purple: Red Green _ Purple Yellow.\n6. The empty slot in the middle (3) must be Blue.",
          hint1: "Draw five slots on a paper: 1, 2, 3, 4, 5.",
          hint2: "Place Red at 1, Green at 2, and Yellow at 5.",
          hint3: "Purple is at 4 because it is right before Yellow (5). That leaves Blue at 3.",
          hint4: "The middle flag is Blue!",
          realLifeConnection: "Just like lining up cars in a parking lot or placing books on a shelf according to size and color!"
        };
      }
    }
  ]
};

// --- DOMAIN CHECK HELPER ---
const EXCLUDED_KEYWORDS = [
  'solve', 'equation', 'calculate', 'fraction', 'decimal', 'addition', 'subtraction', 'multiplication',
  'division', 'algebra', 'geometry', 'resistor', 'voltmeter', 'diode', 'circuit', 'switch', 'battery', 'bulb',
  'spell', 'noun', 'verb', 'grammar', 'english', 'run', 'jump', 'stretch', 'exercise', 'physical', 'fitfriend',
  'plus', 'minus', 'multiplied', 'divided', 'sum', 'math', 'mathmentor', 'sparky'
];

export function checkMathQueryDomain(message) {
  const q = message.toLowerCase();
  
  // LogicLeap checks if query contains strictly math drilling, stem circuits, English or physical activity.
  // Puzzles, shape games, memory and riddles are allowed.
  const hasExcluded = EXCLUDED_KEYWORDS.some(kw => q.includes(kw));
  
  // Exclude simple digits calculation queries like "2+2", "5*4"
  const isCalcQuery = /^[0-9+\-*/()\s=]+$/.test(q) || /\d+\s*[\+\-\*\/]\s*\d+/.test(q);
  
  if (hasExcluded || isCalcQuery) {
    // Check if the query is a pattern request, which is allowed
    if (q.includes('pattern') || q.includes('sequence') || q.includes('riddle') || q.includes('puzzle') || q.includes('logic')) {
      return true; // Overruled, patterns and logic puzzles are allowed
    }
    return false; // Out of domain
  }
  return true;
}

// Format logic response helper
function formatLogicResponse(problemStatement, stepByStepReasoning, hint, finalAnswer, logicExplanation, encouragement) {
  return {
    reply: {
      problemStatement,
      stepByStepReasoning,
      hint,
      finalAnswer,
      logicExplanation,
      encouragement
    },
    mood: 'happy'
  };
}

// 1. CHATBOT QUERY PROCESSOR
export function processLogicQuery({ message, grade }) {
  const q = message.toLowerCase();

  // Guard domain check
  if (!checkMathQueryDomain(q)) {
    return formatLogicResponse(
      "Let’s focus on your logic challenge 🧠",
      "I am LogicLeap AI, your dedicated logical reasoning coach. I can only guide you through logic puzzles, pattern recognition challenges, and cognitive memory games.",
      "Try asking a logic question like 'tell me a riddle' or 'how do pattern sequences work?'",
      "Focus on logic!",
      "I do not teach mathematics calculations, English lessons, or STEM circuit simulations.",
      "I am ready to help you train your brain! 🧠"
    );
  }

  // Answer basic logic FAQs
  if (q.includes('pattern') || q.includes('sequence')) {
    return formatLogicResponse(
      "How do we solve pattern sequences? 🔴🔵🔴🔵...",
      "1. Find the repeating block of elements.\n2. Look at what changes (color, direction, or shape).\n3. Re-apply the rule to find the missing item.",
      "Think of stripes on a candy cane or animal tracks repeating in the sand.",
      "Identify the repeat block and continue!",
      "Pattern recognition trains spatial reasoning and structural memory.",
      "You are doing great! Try a sequence challenge in Game mode!"
    );
  }

  if (q.includes('riddle') || q.includes('puzzle')) {
    return formatLogicResponse(
      "How can we solve logic riddles?",
      "1. Break down the clues one by one.\n2. Draw a diagram or list candidates.\n3. Eliminate items that contradict the clues.",
      "Riddles often play with dual meanings or simple physical characteristics.",
      "Eliminate what doesn't fit!",
      "Logical deduction helps narrow down choices and identify absolute truth states.",
      "Keep practicing your logic brainpower!"
    );
  }

  if (q.includes('memory') || q.includes('match')) {
    return formatLogicResponse(
      "How do memory games work?",
      "1. Study the initial sequence of symbols carefully.\n2. Associate emojis with a story or sound.\n3. Recall them in order or select matching pairs.",
      "Try naming the emojis aloud to lock them in your short-term memory.",
      "Recall and match!",
      "Memory challenges train your working memory and visual recall index.",
      "Unlock the Brain Hero badge in Memory Mode!"
    );
  }

  // Fallback response for logic queries
  return formatLogicResponse(
    `Welcome! I am **LogicLeap AI**, your logic and reasoning coach 🧠. I can guide you through logic riddles, pattern matching, and working memory games!`,
    `Tell me what you would like to explore. We have grade-wise puzzles:\n- KG: Shapes & Colors\n- Grade 1: Emojis & Riddles\n- Grade 2: Grid directions & Sorting\n- Grade 3: Attribute grids & Comparisons\n- Grade 4: Truth tables & Constraint ordering`,
    `Ask me a question like "how do patterns work?" or "tell me a riddle".`,
    "Let's leap into logic!",
    "Reasoning and strategy thinking are key blocks for cognitive development.",
    "Ready to test your puzzle-solving skills? Let's go!"
  );
}

// 2. DYNAMIC SESSION GENERATOR
export function generateLogicChallengeSet({
  grade,
  performanceScore = 80,
  mistakeHistory = [],
  responseTime = 12,
  difficultyPreference = 'standard',
  cognitiveStrengths = []
}) {
  const studentGrade = grade || 'KG';
  
  // Select challenge templates for the student's grade
  const templates = CHALLENGE_TEMPLATES[studentGrade] || CHALLENGE_TEMPLATES['KG'];
  
  // Set difficulty configuration based on performance score
  let difficultyLevel = 'Standard';
  let hintLevel = 1;
  let rewardPoints = 5;

  if (performanceScore >= 90) {
    difficultyLevel = 'Advanced';
    hintLevel = 1;
    rewardPoints = 8;
  } else if (performanceScore < 60) {
    difficultyLevel = 'Easy';
    hintLevel = 2; // Provide slightly direct hints
    rewardPoints = 4;
  }

  // Construct challenge set (minimum of 5 questions)
  const questionSet = [];
  
  // Dynamic generation loop
  for (let i = 0; i < 5; i++) {
    // Cycle through templates
    const templateIdx = i % templates.length;
    const challengeObj = templates[templateIdx].generate();
    
    questionSet.push({
      id: `logic-q-${studentGrade.toLowerCase().replace(' ', '')}-${Date.now()}-${i}`,
      type: templates[templateIdx].type,
      topicId: templates[templateIdx].topic,
      ...challengeObj
    });
  }

  // Learning path recommendation
  const pathMap = {
    'KG': 'Color Patterns & Shape Matching',
    'Grade 1': 'Sequencing & Card Matching',
    'Grade 2': 'Grid Directions & Attribute Sorting',
    'Grade 3': 'Attribute Grids & Multi-Step Deductions',
    'Grade 4': 'Constraint Puzzles & Winning Strategies'
  };

  return {
    difficultyLevel,
    hintLevel,
    rewardPoints,
    recommendedGame: studentGrade === 'KG' ? 'Shape Matching' : studentGrade === 'Grade 1' ? 'Pattern Matcher' : 'Logic Detective',
    expectedTime: studentGrade === 'KG' ? 60 : 90,
    nextStepPath: pathMap[studentGrade] || 'Logical Deduction',
    questionSet
  };
}

// 3. ANSWER EVALUATOR
export function analyzeLogicSubmission({
  challengeObj,
  answer,
  timeTaken = 10,
  attemptCount = 1
}) {
  const isCorrect = String(answer).trim().toLowerCase() === String(challengeObj.correctAnswer).trim().toLowerCase();
  
  // Level-based hints progression
  let hintLevel = 1;
  if (attemptCount === 2) hintLevel = 2;
  if (attemptCount === 3) hintLevel = 3;
  if (attemptCount > 3) hintLevel = 4;

  // Star calculations: +5 for correct
  const earnedStars = isCorrect ? 5 : 0;

  return {
    isCorrect,
    attemptCount,
    hintLevel,
    earnedStars
  };
}

```

---

### `backend/modules/math/controllers/mathController.js`
**Function:** Handles incoming HTTP requests, processes business logic, and sends responses.

```js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import mongoose from 'mongoose';
import { 
  processMathQuery, 
  generateMathQuestionSet, 
  analyzeAnswerSubmission 
} from '../services/mathEngine.js';
import { eventBus } from '../../../shared/eventBus.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local DB Config
const DB_DIR = path.join(__dirname, '../../../data');
const DB_FILE = path.join(DB_DIR, 'math.json');

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const defaultProgress = {
  studentId: 'student_123',
  grade: 'KG',
  stars: 15,
  level: 1,
  badges: [],
  completedSessions: [],
  mistakeHistory: [],
  weakTopics: [],
  sessionCount: 0,
  answerAttempts: [],
  totalQuestions: 0,
  correctQuestions: 0,
  timeTakenHistory: []
};

const readLocalDB = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return defaultProgress;
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return defaultProgress;
  }
};

const writeLocalDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    return false;
  }
};

// --- CONTROLLER ACTIONS ---

/**
 * POST /math/chat
 */
export const chatWithMathMentor = async (req, res) => {
  const { studentId, message, grade } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Missing 'message' field." });
  }

  const studentGrade = grade || 'KG';
  
  // Trigger EventBus
  eventBus.publish('MATH_HINT_REQUESTED', { studentId: studentId || 'student_123', queryText: message });

  const result = processMathQuery({ message, grade: studentGrade });
  
  res.json({
    success: true,
    ...result
  });
};

/**
 * GET /math/progress
 */
export const getMathProgress = async (req, res) => {
  const data = readLocalDB();
  res.json(data);
};

/**
 * POST /math/progress
 */
export const updateMathProgress = async (req, res) => {
  const data = readLocalDB();
  const { stars, badges, grade, level } = req.body;

  if (stars !== undefined) data.stars = stars;
  if (badges !== undefined) data.badges = badges;
  if (grade !== undefined) data.grade = grade;
  if (level !== undefined) data.level = level;

  writeLocalDB(data);
  res.json({ success: true, data });
};

/**
 * POST /math/generate-session
 */
export const generateMathSession = async (req, res) => {
  const { studentId, grade, mode } = req.body;
  const dbData = readLocalDB();

  const studentGrade = grade || dbData.grade || 'KG';
  
  // Calculate average performance score
  const totalQ = dbData.totalQuestions || 0;
  const correctQ = dbData.correctQuestions || 0;
  const performanceScore = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 80;

  // Generate question set using personalization engine
  const sessionConfig = generateMathQuestionSet({
    grade: studentGrade,
    performanceScore,
    mistakeHistory: dbData.mistakeHistory,
    weakTopics: dbData.weakTopics
  });

  // Save current active session questions in db.json temporary store
  dbData.activeSession = {
    id: `session-math-${Date.now()}`,
    mode: mode || 'practice',
    questions: sessionConfig.questionSet,
    currentIndex: 0,
    answers: [],
    rewardPoints: sessionConfig.rewardPoints,
    startTime: new Date().toISOString()
  };
  writeLocalDB(dbData);

  // Publish Event
  eventBus.publish('MATH_SESSION_STARTED', {
    studentId: studentId || 'student_123',
    grade: studentGrade,
    mode: mode || 'practice',
    sessionId: dbData.activeSession.id
  });

  eventBus.publish('MATH_QUESTION_GENERATED', {
    studentId: studentId || 'student_123',
    sessionId: dbData.activeSession.id,
    questionCount: sessionConfig.questionSet.length
  });

  res.json({
    success: true,
    sessionId: dbData.activeSession.id,
    recommendedTopic: sessionConfig.recommendedTopic,
    difficultyLevel: sessionConfig.difficultyLevel,
    hintLevel: sessionConfig.hintLevel,
    nextStepLearningPath: sessionConfig.nextStepLearningPath,
    questions: sessionConfig.questionSet.map(q => ({
      id: q.id,
      questionText: q.questionText,
      options: q.options,
      topicId: q.topicId,
      realLifeConnection: q.realLifeConnection
    }))
  });
};

/**
 * POST /math/submit-answer
 */
export const submitMathAnswer = async (req, res) => {
  const { studentId, questionId, answer, timeTaken, attemptCount } = req.body;
  const dbData = readLocalDB();

  if (!dbData.activeSession) {
    return res.status(400).json({ error: "No active math session found. Generate a session first." });
  }

  // Find question inside active session
  const activeQuestions = dbData.activeSession.questions;
  const qIdx = activeQuestions.findIndex(q => q.id === questionId);
  if (qIdx === -1) {
    return res.status(404).json({ error: "Question not found in active session." });
  }

  const questionObj = activeQuestions[qIdx];
  const evalResult = analyzeAnswerSubmission({
    questionObj,
    answer,
    timeTaken: timeTaken || 10,
    attemptCount: attemptCount || 1
  });

  // Log answer statistics
  dbData.totalQuestions = (dbData.totalQuestions || 0) + 1;
  if (evalResult.isCorrect) {
    dbData.correctQuestions = (dbData.correctQuestions || 0) + 1;
  } else {
    // Record mistake in history
    dbData.mistakeHistory.push({
      questionId,
      topicId: questionObj.topicId,
      wrongAnswer: answer,
      timestamp: new Date().toISOString()
    });
    
    // Assign weak topic tag if repeated mistakes occur
    const topicMistakesCount = dbData.mistakeHistory.filter(m => m.topicId === questionObj.topicId).length;
    if (topicMistakesCount >= 2 && !dbData.weakTopics.includes(questionObj.topicId)) {
      dbData.weakTopics.push(questionObj.topicId);
      
      // Trigger Event
      eventBus.publish('MATH_TOPIC_WEAKNESS_DETECTED', {
        studentId: studentId || 'student_123',
        topicId: questionObj.topicId,
        mistakeCount: topicMistakesCount
      });
    }
  }

  // Update session answer list
  dbData.activeSession.answers.push({
    questionId,
    answer,
    isCorrect: evalResult.isCorrect,
    timeTaken: timeTaken || 10
  });

  // Check if session is completed (5 questions)
  const isSessionEnd = dbData.activeSession.answers.length >= activeQuestions.length;
  let responsePayload = {
    isCorrect: evalResult.isCorrect,
    correctAnswer: questionObj.correctAnswer,
    explanation: questionObj.explanation,
    stepByStep: questionObj.stepByStep,
    hintLevel: evalResult.attemptCount >= 2 ? evalResult.hintLevel : 1,
    hintText: evalResult.isCorrect ? '' : (attemptCount === 1 ? questionObj.hint2 : attemptCount === 2 ? questionObj.hint3 : questionObj.hint4),
    earnedStars: evalResult.earnedStars,
    isSessionEnd
  };

  if (evalResult.isCorrect) {
    dbData.stars = (dbData.stars || 15) + evalResult.earnedStars;
    
    // Trigger Event
    eventBus.publish('MATH_REWARD_GRANTED', {
      studentId: studentId || 'student_123',
      rewardType: 'correct_answer',
      starsEarned: evalResult.earnedStars
    });
  }

  if (isSessionEnd) {
    // Session completion logic
    dbData.sessionCount = (dbData.sessionCount || 0) + 1;
    const sessionAnswers = dbData.activeSession.answers;
    const correctCount = sessionAnswers.filter(a => a.isCorrect).length;
    
    // Perfect quiz bonus
    let bonusStars = 0;
    if (correctCount === activeQuestions.length) {
      bonusStars = 20; // Perfect quiz bonus
      responsePayload.sessionMsg = "🌟 PERFECT SCORE! MathMentor AI awards you +20 Bonus Stars!";
    } else if (correctCount >= 4) {
      bonusStars = 10; // Streak completion bonus
      responsePayload.sessionMsg = "🎉 Great job! MathMentor AI awards you +10 Bonus Stars!";
    } else {
      responsePayload.sessionMsg = "Keep practicing! You completed the quiz. revision is suggested.";
    }

    dbData.stars = (dbData.stars || 15) + bonusStars;
    if (bonusStars > 0) {
      eventBus.publish('MATH_REWARD_GRANTED', {
        studentId: studentId || 'student_123',
        rewardType: correctCount === activeQuestions.length ? 'perfect_quiz' : 'streak_completion',
        starsEarned: bonusStars
      });
    }

    // Award Badges Server-side
    const badgesAwarded = [];
    if (dbData.sessionCount >= 1 && !dbData.badges.includes('Number Explorer')) {
      dbData.badges.push('Number Explorer');
      badgesAwarded.push('Number Explorer');
    }
    if (correctCount === activeQuestions.length && !dbData.badges.includes('Math Master')) {
      dbData.badges.push('Math Master');
      badgesAwarded.push('Math Master');
    }
    
    // Speed Solver: Average time < 10 seconds per correct question
    const avgTime = sessionAnswers.reduce((sum, val) => sum + val.timeTaken, 0) / sessionAnswers.length;
    if (correctCount === activeQuestions.length && avgTime <= 15 && !dbData.badges.includes('Speed Solver')) {
      dbData.badges.push('Speed Solver');
      badgesAwarded.push('Speed Solver');
    }
    
    // Logic Hero: Grade 4 logic word problems completion
    if (dbData.grade === 'Grade 4' && correctCount >= 4 && !dbData.badges.includes('Logic Hero')) {
      dbData.badges.push('Logic Hero');
      badgesAwarded.push('Logic Hero');
    }

    // Accuracy Champion: overall accuracy > 90% with at least 15 questions
    const overallAccuracy = dbData.totalQuestions > 10 ? (dbData.correctQuestions / dbData.totalQuestions) : 0;
    if (overallAccuracy >= 0.90 && !dbData.badges.includes('Accuracy Champion')) {
      dbData.badges.push('Accuracy Champion');
      badgesAwarded.push('Accuracy Champion');
    }

    if (badgesAwarded.length > 0) {
      badgesAwarded.forEach(badge => {
        eventBus.publish('BADGE_UNLOCKED', {
          studentId: studentId || 'student_123',
          badgeId: badge.toLowerCase().replace(' ', '_'),
          badgeName: badge
        });
      });
    }

    // Update readiness score
    // Every grade has 3 modules, completing a session adds to completion
    const uniqueTopicsCompleted = new Set(dbData.mistakeHistory.filter(m => m.isCorrect).map(m => m.topicId));
    dbData.completedSessions.push({
      sessionId: dbData.activeSession.id,
      score: correctCount,
      total: activeQuestions.length,
      timestamp: new Date().toISOString()
    });

    const completionGoal = dbData.grade === 'KG' ? 2 : 3;
    const completedCount = Math.min(completionGoal, dbData.completedSessions.length);
    const readinessScore = Math.round((completedCount / completionGoal) * 100);
    dbData.readinessScore = readinessScore;

    // Trigger completion events
    eventBus.publish('MATH_SESSION_COMPLETED', {
      studentId: studentId || 'student_123',
      grade: dbData.grade,
      sessionId: dbData.activeSession.id,
      starsEarned: correctCount * 5 + bonusStars,
      sourceModule: 'MATH_APP'
    });

    eventBus.publish('MATH_PROGRESS_UPDATED', {
      studentId: studentId || 'student_123',
      stars: dbData.stars,
      level: dbData.level,
      readinessScore,
      badges: dbData.badges
    });

    eventBus.publish('MATH_SCORE_UPDATED', {
      studentId: studentId || 'student_123',
      newScore: dbData.stars
    });

    // Clear active session
    delete dbData.activeSession;
  }

  writeLocalDB(dbData);

  // Publish Event
  eventBus.publish('MATH_ANSWER_SUBMITTED', {
    studentId: studentId || 'student_123',
    questionId,
    isCorrect: evalResult.isCorrect,
    timeTaken: timeTaken || 10
  });

  res.json({
    success: true,
    ...responsePayload
  });
};

```

---

### `backend/modules/math/routes/math.js`
**Function:** Defines API endpoints and maps them to respective controllers.

```js
import express from 'express';
import {
  chatWithMathMentor,
  getMathProgress,
  updateMathProgress,
  generateMathSession,
  submitMathAnswer
} from '../controllers/mathController.js';

const router = express.Router();

router.post('/chat', chatWithMathMentor);
router.get('/progress', getMathProgress);
router.post('/progress', updateMathProgress);
router.post('/generate-session', generateMathSession);
router.post('/submit-answer', submitMathAnswer);

export default router;

```

---

### `backend/modules/math/services/mathEngine.js`
**Function:** Contains core business logic, simulation behavior, or AI generation capabilities.

```js
/**
 * MATHMENTOR AI - Mathematics Intelligence Engine
 * Role: AI-powered adaptive math learning tutor & personalization system
 */

// Grade-wise topics and syllabus definitions
export const MATH_SYLLABUS = {
  'KG': [
    { id: 'kg-counting', name: 'Counting Objects', desc: 'Count items up to 50 with visual aids.' },
    { id: 'kg-shapes', name: 'Identifying Shapes', desc: 'Recognize circles, squares, triangles, and stars.' },
    { id: 'kg-addition', name: 'Simple Addition', desc: 'Basic addition within 10 using objects.' }
  ],
  'Grade 1': [
    { id: 'g1-numbers', name: 'Numbers 1-100', desc: 'Understanding place value and number lines.' },
    { id: 'g1-ops', name: 'Addition & Subtraction', desc: 'Adding and subtracting within 20.' },
    { id: 'g1-word-probs', name: 'Basic Word Problems', desc: 'Solving single-step word stories.' }
  ],
  'Grade 2': [
    { id: 'g2-multi-basics', name: 'Multiplication Basics', desc: 'Equal groups and repeated addition.' },
    { id: 'g2-div-basics', name: 'Division Basics', desc: 'Sharing equally among groups.' },
    { id: 'g2-time', name: 'Time & Calendar', desc: 'Reading analog clocks and calendar months.' }
  ],
  'Grade 3': [
    { id: 'g3-tables', name: 'Multiplication Tables', desc: 'Mastering tables 1 through 10.' },
    { id: 'g3-fractions', name: 'Fractions', desc: 'Parts of a whole and visual fraction bars.' },
    { id: 'g3-measurement', name: 'Length & Weight', desc: 'Measuring objects in centimeters and grams.' }
  ],
  'Grade 4': [
    { id: 'g4-decimals', name: 'Decimals', desc: 'Relating tenths and hundredths to fractions.' },
    { id: 'g4-geometry', name: 'Geometry Basics', desc: 'Identifying lines, angles, and symmetry.' },
    { id: 'g4-logic-probs', name: 'Logic Word Problems', desc: 'Solving multi-step reasoning puzzles.' }
  ]
};

// Seeding standard question templates for dynamic generation
const QUESTION_TEMPLATES = {
  'KG': [
    {
      type: 'count',
      topic: 'kg-counting',
      emoji: '🍎',
      generate: () => {
        const count = Math.floor(Math.random() * 8) + 2;
        return {
          questionText: `Count the objects: How many apples are there? ${'🍎'.repeat(count)}`,
          options: [String(count), String(count + 1), String(count - 1)],
          correctAnswer: String(count),
          explanation: `Let's count them one by one: ${Array.from({ length: count }, (_, i) => i + 1).join(', ')}. That makes a total of ${count}.`,
          stepByStep: `1. Look at each apple.\n2. Count out loud as you point: "1, 2, 3..."\n3. The last number you say is the final count.`,
          hint1: "Count each apple one by one.",
          hint2: "Start with 1, 2, 3...",
          hint3: `There are more than ${count - 1} but fewer than ${count + 1}.`,
          hint4: `The final count is exactly ${count} apples!`,
          realLifeConnection: "Just like counting apples in a grocery basket!"
        };
      }
    },
    {
      type: 'shape',
      topic: 'kg-shapes',
      emoji: '🔴',
      generate: () => {
        const shapes = [
          { name: 'Circle', emoji: '🔴', clue: 'round like a wheel' },
          { name: 'Square', emoji: '🟦', clue: 'four equal sides' },
          { name: 'Triangle', emoji: '🔺', clue: 'three sharp corners' },
          { name: 'Star', emoji: '⭐', clue: 'five shining points' }
        ];
        const target = shapes[Math.floor(Math.random() * shapes.length)];
        const distractors = shapes.filter(s => s.name !== target.name).map(s => s.name);
        return {
          questionText: `Look at the shape: ${target.emoji}. What shape is this?`,
          options: [target.name, distractors[0], distractors[1]],
          correctAnswer: target.name,
          explanation: `This shape is a ${target.name}. It is ${target.clue}.`,
          stepByStep: `1. Examine the visual shape ${target.emoji}.\n2. Remember, a ${target.name} is ${target.clue}.`,
          hint1: `This shape is ${target.clue}.`,
          hint2: `Count the sides or corners. It has ${target.name === 'Circle' ? '0' : target.name === 'Triangle' ? '3' : target.name === 'Square' ? '4' : '5'} points.`,
          hint3: `It starts with the letter '${target.name[0]}'.`,
          hint4: `This shape is a ${target.name}!`,
          realLifeConnection: `Just like a ${target.name === 'Circle' ? 'clock face or a coin' : target.name === 'Square' ? 'wooden toy block' : target.name === 'Triangle' ? 'slice of pizza' : 'twinkling star in the sky'}!`
        };
      }
    }
  ],
  'Grade 1': [
    {
      type: 'addition',
      topic: 'g1-ops',
      emoji: '➕',
      generate: () => {
        const a = Math.floor(Math.random() * 15) + 5;
        const b = Math.floor(Math.random() * 10) + 2;
        return {
          questionText: `Solve the equation: What is ${a} + ${b}?`,
          options: [String(a + b), String(a + b + 2), String(a + b - 1)],
          correctAnswer: String(a + b),
          explanation: `Adding ${b} to ${a} gives ${a + b}.`,
          stepByStep: `1. Start at ${a} on the number line.\n2. Count forward ${b} times: ${Array.from({ length: b }, (_, i) => a + i + 1).join(', ')}.\n3. You arrive at ${a + b}.`,
          hint1: "Try counting up from the larger number.",
          hint2: `Start at ${a} and count forward ${b} steps.`,
          hint3: `The sum is close to ${Math.round((a + b) / 10) * 10}.`,
          hint4: `Add ${a} and ${b} to get ${a + b}.`,
          realLifeConnection: `If you have ${a} toy cars and get ${b} more for your birthday, you will have ${a + b} cars.`
        };
      }
    },
    {
      type: 'word-prob',
      topic: 'g1-word-probs',
      emoji: '📝',
      generate: () => {
        const total = Math.floor(Math.random() * 12) + 8;
        const eaten = Math.floor(Math.random() * 5) + 2;
        return {
          questionText: `Sam has ${total} cookies 🍪. She eats ${eaten} cookies. How many cookies are left?`,
          options: [String(total - eaten), String(total - eaten + 3), String(total + eaten)],
          correctAnswer: String(total - eaten),
          explanation: `We start with ${total} cookies and subtract the ${eaten} eaten cookies: ${total} - ${eaten} = ${total - eaten}.`,
          stepByStep: `1. Identify the starting number: ${total}.\n2. Identify how many are taken away: ${eaten}.\n3. Subtract: ${total} minus ${eaten} equals ${total - eaten}.`,
          hint1: "Eating cookies means we subtract them.",
          hint2: `Calculate ${total} minus ${eaten}.`,
          hint3: `The answer is ${total - eaten}.`,
          hint4: `Subtracting ${eaten} from ${total} leaves ${total - eaten} cookies.`,
          realLifeConnection: "Use real pennies or buttons at home to act out eating cookies!"
        };
      }
    }
  ],
  'Grade 2': [
    {
      type: 'multi-basics',
      topic: 'g2-multi-basics',
      emoji: '✖️',
      generate: () => {
        const groups = Math.floor(Math.random() * 4) + 2;
        const size = Math.floor(Math.random() * 5) + 2;
        return {
          questionText: `What is ${groups} groups of ${size} items? (Or ${groups} x ${size})`,
          options: [String(groups * size), String(groups * size + size), String(groups * size - groups)],
          correctAnswer: String(groups * size),
          explanation: `${groups} groups of ${size} is equal to adding ${size} together ${groups} times: ${Array.from({ length: groups }, () => size).join(' + ')} = ${groups * size}.`,
          stepByStep: `1. Draw ${groups} circles representing groups.\n2. Put ${size} dots in each group.\n3. Count all dots combined: ${groups} times ${size} equals ${groups * size}.`,
          hint1: "Think of this as repeated addition.",
          hint2: `Add ${size} together ${groups} times.`,
          hint3: `The answer is between ${groups * size - 5} and ${groups * size + 5}.`,
          hint4: `${groups} times ${size} is exactly ${groups * size}.`,
          realLifeConnection: `If you buy ${groups} boxes of crayons, and each box has ${size} crayons, you get ${groups * size} crayons in total.`
        };
      }
    },
    {
      type: 'time',
      topic: 'g2-time',
      emoji: '⏰',
      generate: () => {
        const hour = Math.floor(Math.random() * 12) + 1;
        const minutes = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
        const minStr = minutes === 0 ? '00' : String(minutes);
        return {
          questionText: `An analog clock has the hour hand pointing to ${hour} and the minute hand pointing to the number ${minutes / 5 === 0 ? 12 : minutes / 5}. What time is it?`,
          options: [`${hour}:${minStr}`, `${hour === 12 ? 1 : hour + 1}:${minStr}`, `${hour}:${minutes === 30 ? '00' : '30'}`],
          correctAnswer: `${hour}:${minStr}`,
          explanation: `The hour hand shows the hour (${hour}) and the minute hand shows the minutes (${minutes / 5} times 5 = ${minutes} minutes). So the time is ${hour}:${minStr}.`,
          stepByStep: `1. Look at the hour hand: it is at ${hour}.\n2. Look at the minute hand: each number represents 5 minutes. Multiplying by 5 gives ${minutes} minutes.\n3. Combine them to get ${hour}:${minStr}.`,
          hint1: "The minute hand counts by 5s around the clock face.",
          hint2: `Hour is ${hour}. Minute hand at ${minutes / 5 === 0 ? 12 : minutes / 5} means ${minutes} minutes.`,
          hint3: `It is ${minutes === 0 ? 'exactly ' + hour + " o'clock" : minutes + " minutes past " + hour}.`,
          hint4: `The clock reads ${hour}:${minStr}!`,
          realLifeConnection: "Clocks tell us when it is lunchtime (12:00) or bedtime!"
        };
      }
    }
  ],
  'Grade 3': [
    {
      type: 'fractions',
      topic: 'g3-fractions',
      emoji: '🍕',
      generate: () => {
        const totalSlices = [4, 6, 8][Math.floor(Math.random() * 3)];
        const eatenSlices = Math.floor(Math.random() * (totalSlices - 2)) + 1;
        return {
          questionText: `A pizza is sliced into ${totalSlices} equal pieces. You eat ${eatenSlices} pieces. What fraction of the pizza did you eat?`,
          options: [`${eatenSlices}/${totalSlices}`, `${totalSlices - eatenSlices}/${totalSlices}`, `1/${totalSlices}`],
          correctAnswer: `${eatenSlices}/${totalSlices}`,
          explanation: `The total parts is the denominator (${totalSlices}), and the parts eaten is the numerator (${eatenSlices}). Thus, the fraction is ${eatenSlices}/${totalSlices}.`,
          stepByStep: `1. The denominator (bottom) is the total pieces: ${totalSlices}.\n2. The numerator (top) is the eaten pieces: ${eatenSlices}.\n3. Write the fraction as Numerator / Denominator: ${eatenSlices}/${totalSlices}.`,
          hint1: "The fraction is written as (part eaten) / (total parts).",
          hint2: `Top number is ${eatenSlices}, bottom number is ${totalSlices}.`,
          hint3: `You ate ${eatenSlices} out of ${totalSlices} pieces.`,
          hint4: `The fraction eaten is ${eatenSlices}/${totalSlices}.`,
          realLifeConnection: "Fractions help us share cake or pizza fairly among friends!"
        };
      }
    },
    {
      type: 'measurement',
      topic: 'g3-measurement',
      emoji: '📏',
      generate: () => {
        const meters = Math.floor(Math.random() * 5) + 2;
        return {
          questionText: `A wooden table is ${meters} meters long. How many centimeters long is it? (1 meter = 100 centimeters)`,
          options: [String(meters * 100), String(meters * 10), String(meters * 1000)],
          correctAnswer: String(meters * 100),
          explanation: `Since 1 meter is equal to 100 centimeters, a length of ${meters} meters is ${meters} x 100 = ${meters * 100} centimeters.`,
          stepByStep: `1. Recall conversion factor: 1 meter = 100 centimeters.\n2. Multiply the number of meters (${meters}) by 100.\n3. ${meters} x 100 = ${meters * 100} centimeters.`,
          hint1: "Multiply the meters by 100.",
          hint2: `Multiply ${meters} times 100.`,
          hint3: `The number has two zeros at the end.`,
          hint4: `The answer is ${meters * 100} centimeters.`,
          realLifeConnection: "Meters measure larger lengths like hallways; centimeters measure smaller items like pencils!"
        };
      }
    }
  ],
  'Grade 4': [
    {
      type: 'decimals',
      topic: 'g4-decimals',
      emoji: '💵',
      generate: () => {
        const val1 = (Math.floor(Math.random() * 50) + 10) / 100;
        const val2 = (Math.floor(Math.random() * 40) + 10) / 100;
        const sum = (val1 + val2).toFixed(2);
        return {
          questionText: `You buy a pencil for $${val1} and an eraser for $${val2}. What is the total cost in decimals?`,
          options: [`$${sum}`, `$${(val1 + val2 + 0.1).toFixed(2)}`, `$${Math.abs(val1 - val2).toFixed(2)}`],
          correctAnswer: `$${sum}`,
          explanation: `Add the two values together aligning the decimal points: ${val1} + ${val2} = ${sum}.`,
          stepByStep: `1. Align the decimal points: \n   ${val1.toFixed(2)}\n+  ${val2.toFixed(2)}\n-------\n2. Add column-by-column from right to left.\n3. The result is ${sum}.`,
          hint1: "Add the amounts just like normal addition, aligning the decimal point.",
          hint2: `Add ${val1} and ${val2}.`,
          hint3: `The sum is between $0.20 and $1.00.`,
          hint4: `The total cost is $${sum}!`,
          realLifeConnection: "Using decimal values is how we calculate dollars and cents at store registers!"
        };
      }
    },
    {
      type: 'geometry',
      topic: 'g4-geometry',
      emoji: '📐',
      generate: () => {
        const shapes = [
          { name: 'Triangle', sides: 3, sum: 180 },
          { name: 'Rectangle', sides: 4, sum: 360 },
          { name: 'Pentagon', sides: 5, sum: 540 },
          { name: 'Hexagon', sides: 6, sum: 720 }
        ];
        const target = shapes[Math.floor(Math.random() * shapes.length)];
        return {
          questionText: `A geometric polygon has exactly ${target.sides} straight sides. What is the name of this shape?`,
          options: [target.name, target.name === 'Triangle' ? 'Square' : 'Triangle', target.name === 'Hexagon' ? 'Pentagon' : 'Hexagon'],
          correctAnswer: target.name,
          explanation: `A polygon with ${target.sides} sides is called a ${target.name}.`,
          stepByStep: `1. Count the number of straight sides: ${target.sides}.\n2. Remember shape prefixes: Tri=3, Quad=4, Penta=5, Hexa=6.\n3. Therefore, the shape is a ${target.name}.`,
          hint1: "Look at the number of sides.",
          hint2: `Which shape has exactly ${target.sides} sides?`,
          hint3: `It starts with the letter '${target.name[0]}'.`,
          hint4: `A polygon with ${target.sides} sides is a ${target.name}.`,
          realLifeConnection: "Stop signs are octagons (8 sides) and honeycomb cells are hexagons (6 sides)!"
        };
      }
    }
  ]
};

// Strict Topic Boundaries Check
export function checkMathQueryDomain(queryText) {
  const q = queryText.toLowerCase();
  
  // Forbidden non-math topics
  const forbiddenKeywords = [
    'english', 'grammar', 'spell', 'vocabulary', 'pronounce', 'read', 'write', 'adjective', 'noun', 'sentence',
    'circuit', 'led', 'resistor', 'battery', 'voltage', 'current', 'wire', 'switch', 'diode', 'short circuit',
    'physical activity', 'run', 'jump', 'stretch', 'yoga', 'simon says', 'exercise', 'fitfriend', 'workout',
    'history', 'geography', 'sports', 'weather', 'general knowledge', 'chat'
  ];

  // Specific check to see if the user is asking general open-ended conversational questions
  const generalGreetingKeywords = [
    'how is the weather', 'tell me a joke', 'what is your favorite', 'favorite color', 'who are you', 'how are you doing'
  ];

  // If keyword matches or query doesn't feel math-oriented (numbers, add, subtract, multiply, shapes, solve, calculate, fraction)
  const mathKeywords = [
    'math', 'mentor', 'solve', 'calculate', 'number', 'count', 'shape', 'addition', 'plus', 'add',
    'subtraction', 'minus', 'subtract', 'multiply', 'multiplication', 'divide', 'division', 'times', 'fraction',
    'decimal', 'geometry', 'angle', 'clock', 'time', 'logic', 'equation', 'sum', 'difference', 'product',
    'ratio', 'percent', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '=', '+', '-', '*', '/'
  ];

  const hasForbidden = forbiddenKeywords.some(word => q.includes(word));
  const hasGeneral = generalGreetingKeywords.some(word => q.includes(word));
  const hasMathContext = mathKeywords.some(word => q.includes(word));

  if (hasForbidden || hasGeneral || (!hasMathContext && q.length > 3)) {
    return false;
  }
  return true;
}

// Format Mathmentor AI responses following output criteria
export function formatMathResponse(explanation, stepByStep, hint, finalAnswer, encouragement) {
  return {
    reply: {
      explanation,
      stepByStep,
      hint,
      finalAnswer,
      encouragement
    },
    mood: 'happy'
  };
}

// 1. CHATBOT QUERY PROCESSOR
export function processMathQuery({ message, grade }) {
  const q = message.toLowerCase();

  // Guard domain check
  if (!checkMathQueryDomain(q)) {
    return formatMathResponse(
      "Let’s focus on your math learning 📊",
      "I am MathMentor AI, your dedicated mathematics tutor. I can only answer math questions, help you solve numerical puzzles, or explain geometry and calculation steps.",
      "Ask me a math question like 'What is a fraction?' or 'How do I add decimals?'",
      "Focus on math!",
      "I am ready to help you with numbers, equations, and math games! 🔢"
    );
  }

  // Answer basic math-related FAQs
  if (q.includes('fraction')) {
    return formatMathResponse(
      "A fraction represents a part of a whole! It consists of a numerator (top number) and a denominator (bottom number).",
      "1. Think of a pizza cut into 4 slices.\n2. If you take 1 slice, you have 1 out of 4 slices.\n3. We write this fraction as 1/4.",
      "The bottom number is the total parts, the top is how many parts you have.",
      "Fraction: Numerator / Denominator 🍕",
      "Fractions are super helpful when sharing treats with friends!"
    );
  }

  if (q.includes('decimal')) {
    return formatMathResponse(
      "Decimals are another way to write fractions or numbers that are between whole numbers. They use a decimal point (.).",
      "1. A value like $0.50 means 50 cents out of 100 (which is 1/2 of a dollar).\n2. Place value after the dot goes: Tenths, Hundredths, Thousandths.",
      "Just align the dot when adding decimals!",
      "Decimal: numbers containing a fractional point (.) 💵",
      "You use decimals every day when counting money!"
    );
  }

  if (q.includes('geometry') || q.includes('shape') || q.includes('polygon')) {
    return formatMathResponse(
      "Geometry is the study of shapes, sizes, and properties of space. A polygon is a flat shape with straight sides.",
      "1. 3 sides = Triangle\n2. 4 sides = Quad/Rectangle/Square\n3. 5 sides = Pentagon\n4. 6 sides = Hexagon",
      "Count the straight sides of any flat object.",
      "Geometry: Study of lines, shapes, and angles 📐",
      "Look around you - shapes are everywhere in your room!"
    );
  }

  if (q.includes('multiply') || q.includes('multiplication')) {
    return formatMathResponse(
      "Multiplication is like doing repeated addition. It tells you how many times to add a number to itself.",
      "1. 3 x 4 means adding the number 4 together 3 times: 4 + 4 + 4.\n2. 4 + 4 + 4 = 12.\n3. So, 3 x 4 = 12.",
      "Think of drawing groups of dots: 3 groups with 4 dots in each.",
      "Multiplication is repeated addition ✖️",
      "You are doing awesome learning your multiplication tables!"
    );
  }

  if (q.includes('divide') || q.includes('division')) {
    return formatMathResponse(
      "Division means sharing or splitting numbers into equal groups.",
      "1. If you have 6 candies and want to share them with 2 friends.\n2. Give 1 candy to each until you run out.\n3. Each friend gets exactly 3 candies. So, 6 / 2 = 3.",
      "Think of sharing cookies equally.",
      "Division is splitting into equal groups ➗",
      "Sharing equally is a great math skill to master!"
    );
  }

  // Fallback response for math queries
  return formatMathResponse(
    `Welcome! I am **MathMentor AI**, your math tutor 📊. I can explain math concepts, solve word problems, or guide you through Practice and Game modes!`,
    `Tell me what you are working on today! We support:\n- KG: Counting & Shapes\n- Grade 1: Addition & Subtraction\n- Grade 2: Clock & Multi basics\n- Grade 3: Fractions & Measurement\n- Grade 4: Decimals & Logic puzzles`,
    `You can type equations (e.g. "12 + 15" or "5 * 4") or ask "how do fractions work?".`,
    "Math is fun! 📐",
    "Let's explore numbers together! 🚀"
  );
}

// 2. ADAPTIVE PERSONALIZATION & QUESTION GENERATION ENGINE
export function generateMathQuestionSet({ grade, performanceScore = 80, mistakeHistory = [], weakTopics = [] }) {
  // Determine difficulty level based on performance score
  let difficultyLevel = 'standard';
  let hintLevel = 1;
  let rewardPoints = 5;

  if (performanceScore >= 90) {
    difficultyLevel = 'advanced';
    hintLevel = 1; // standard hint
    rewardPoints = 8;
  } else if (performanceScore < 50) {
    difficultyLevel = 'supportive';
    hintLevel = 3; // preloaded hints
    rewardPoints = 4;
  }

  // Select question templates by grade
  const templates = QUESTION_TEMPLATES[grade] || QUESTION_TEMPLATES['KG'];
  const questions = [];

  // Generate 5 questions dynamically
  for (let i = 0; i < 5; i++) {
    // Select template randomly
    const template = templates[Math.floor(Math.random() * templates.length)];
    const qObj = template.generate();
    
    // Inject ID and tracking properties
    qObj.id = `q-${grade.toLowerCase().replace(' ', '-')}-${i + 1}-${Date.now()}`;
    qObj.topicId = template.topic;
    qObj.difficulty = difficultyLevel;
    
    // Customize questionText/variables based on difficulty
    if (difficultyLevel === 'advanced') {
      // Slightly scale numbers if it's an equation or word problem
      if (qObj.questionText.includes('+')) {
        qObj.questionText = qObj.questionText.replace('Solve the equation:', '🚀 Advanced challenge: Solve');
      }
    } else if (difficultyLevel === 'supportive') {
      qObj.questionText = `🛡️ Helper Mode: ${qObj.questionText}`;
    }

    questions.push(qObj);
  }

  // Determine recommendedTopic based on weakTopics or grade default
  let recommendedTopic = MATH_SYLLABUS[grade]?.[0]?.name || 'Numbers';
  if (weakTopics.length > 0) {
    const weakTopicObj = MATH_SYLLABUS[grade]?.find(t => weakTopics.includes(t.id));
    if (weakTopicObj) recommendedTopic = weakTopicObj.name;
  }

  const nextStepLearningPath = MATH_SYLLABUS[grade]?.[1]?.name || 'Next Concept';

  return {
    recommendedTopic,
    difficultyLevel,
    questionSet: questions,
    hintLevel,
    nextStepLearningPath,
    rewardPoints
  };
}

// 3. ERROR LEARNING SYSTEM
export function analyzeAnswerSubmission({ questionObj, answer, timeTaken, attemptCount = 1 }) {
  const isCorrect = String(answer).trim().toLowerCase() === String(questionObj.correctAnswer).trim().toLowerCase();
  
  let hintLevel = 1;
  if (!isCorrect) {
    // Scale hints dynamically based on attempts
    if (attemptCount === 1) hintLevel = 2; // Step guide
    else if (attemptCount === 2) hintLevel = 3; // Partial solution
    else hintLevel = 4; // Full explanation
  }

  let earnedStars = 0;
  if (isCorrect) {
    earnedStars = 5; // standard correct answer reward
  }

  return {
    isCorrect,
    hintLevel,
    earnedStars,
    weakTopicTag: !isCorrect ? questionObj.topicId : null,
    suggestRevision: !isCorrect && attemptCount >= 2,
    timeTakenScore: timeTaken > 45 ? 'slow' : 'normal'
  };
}

```

---

### `backend/modules/physical-activity/controllers/activityController.js`
**Function:** Handles incoming HTTP requests, processes business logic, and sends responses.

```js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import mongoose from 'mongoose';

// Import Models & Seed Data
import {
  StudentModel,
  ActivityModel,
  ActivitySessionModel,
  ActivitySkipModel,
  ActivityRewardModel,
  ActivityAnalyticsModel,
  SESSION_STATUS,
  SKIP_REASONS,
  REWARD_TYPES,
  REWARD_TRIGGERS
} from '../models/index.js';

import { DEFAULT_ACTIVITIES } from '../data/activities.js';

// Import Ecosystem Event Bus
import { eventBus } from '../../../shared/eventBus.js';
import { initializeTriggerEngine } from '../services/triggerEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fallback Local File Database setup
const DB_DIR = path.join(__dirname, '../../../data');
const DB_FILE = path.join(DB_DIR, 'physical_activity.json');

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

const defaultLocalDB = {
  students: {},
  sessions: [],
  skips: [],
  rewards: [],
  analytics: []
};

// Helper: Read Local JSON Database
const readLocalDB = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultLocalDB, null, 2));
      return defaultLocalDB;
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading local JSON DB:', err);
    return defaultLocalDB;
  }
};

// Helper: Write Local JSON Database
const writeLocalDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error('Error writing local JSON DB:', err);
    return false;
  }
};

// Helper: Check if MongoDB is connected
const isMongoConnected = () => {
  return global.mongoConnected === true;
};

// ─── DOMAIN METRICS & RECOMMENDATIONS HELPERS ──────────────────

// Helper: Get or create student profile (local fallback)
const getOrCreateLocalStudent = (db, studentId, grade) => {
  if (!db.students[studentId]) {
    db.students[studentId] = {
      studentId,
      displayName: `Explorer ${studentId.split('_')[1] || ''}`,
      grade: grade || 'KG',
      currentMood: 'unknown',
      streak: { currentStreak: 0, longestStreak: 0, lastActiveDate: null },
      stats: { totalSessionsCompleted: 0, totalSessionsSkipped: 0, totalMinutesActive: 0, totalStarsEarned: 15, totalBadgesEarned: 0 }
    };
  } else if (grade && db.students[studentId].grade !== grade) {
    db.students[studentId].grade = grade;
  }
  return db.students[studentId];
};

// Helper: Get or create student profile (MongoDB)
const getOrCreateMongoStudent = async (studentId, grade) => {
  let student = await StudentModel.findOne({ studentId });
  if (!student) {
    student = await StudentModel.create({
      studentId,
      displayName: `Explorer ${studentId.split('_')[1] || ''}`,
      grade: grade || 'KG',
      stats: { totalStarsEarned: 15 } // Match default
    });
  } else if (grade && student.grade !== grade) {
    student.grade = grade;
    await student.save();
  }
  return student;
};

// Helper: Compute engagement score for a student in a module
const getEngagementScore = async (studentId, sourceModule) => {
  if (isMongoConnected()) {
    try {
      const stats = await ActivityAnalyticsModel.findOne({ studentId, sourceModule });
      if (stats && stats.sessionsAssigned > 0) {
        return Math.round((stats.sessionsCompleted / stats.sessionsAssigned) * 100);
      }
      
      // Fallback to calculation if no analytics record exists yet
      const total = await ActivitySessionModel.countDocuments({ studentId, sourceModule });
      if (total === 0) return 0;
      const completed = await ActivitySessionModel.countDocuments({ studentId, sourceModule, status: SESSION_STATUS.COMPLETED });
      return Math.round((completed / total) * 100);
    } catch (err) {
      console.error('Failed to compute Mongo engagement score:', err);
      return 0;
    }
  } else {
    const db = readLocalDB();
    const studentSessions = db.sessions.filter(s => s.studentId === studentId && s.sourceModule === sourceModule);
    if (studentSessions.length === 0) return 0;
    const completed = studentSessions.filter(s => s.status === SESSION_STATUS.COMPLETED).length;
    return Math.round((completed / studentSessions.length) * 100);
  }
};

// Helper: Get total reward stars for a student in a module
const getRewardPoints = async (studentId, sourceModule) => {
  if (isMongoConnected()) {
    try {
      const rewards = await ActivityRewardModel.find({ studentId, sourceModule, isVoided: false });
      const moduleStars = rewards.reduce((sum, r) => sum + r.starsEarned, 0);
      
      // Also fetch default base stars from student profile if this is the active module
      const student = await StudentModel.findOne({ studentId });
      const baseStars = student ? student.stats.totalStarsEarned : 15;
      
      return baseStars + moduleStars;
    } catch (err) {
      console.error('Failed to compute Mongo reward points:', err);
      return 15;
    }
  } else {
    const db = readLocalDB();
    const studentRewards = db.rewards.filter(r => r.studentId === studentId && r.sourceModule === sourceModule && !r.isVoided);
    const moduleStars = studentRewards.reduce((sum, r) => sum + r.starsEarned, 0);
    
    const student = db.students[studentId];
    const baseStars = student ? student.stats.totalStarsEarned : 15;
    
    return baseStars + moduleStars;
  }
};

// Helper: Get consecutive skips count
const getConsecutiveSkips = async (studentId) => {
  if (isMongoConnected()) {
    try {
      const sessions = await ActivitySessionModel.find({ studentId }).sort({ createdAt: -1 }).limit(10);
      let skipCount = 0;
      for (const s of sessions) {
        if (s.status === SESSION_STATUS.SKIPPED) {
          skipCount++;
        } else if (s.status === SESSION_STATUS.COMPLETED) {
          break;
        }
      }
      return skipCount;
    } catch (err) {
      console.error('Error fetching skips:', err);
      return 0;
    }
  } else {
    const db = readLocalDB();
    const sessions = db.sessions
      .filter(s => s.studentId === studentId)
      .sort((a, b) => new Date(b.createdAt || b.assignedAt) - new Date(a.createdAt || a.assignedAt));
    let skipCount = 0;
    for (const s of sessions) {
      if (s.status === SESSION_STATUS.SKIPPED) {
        skipCount++;
      } else if (s.status === SESSION_STATUS.COMPLETED) {
        break;
      }
    }
    return skipCount;
  }
};

// Helper: Trigger Parent Skip Alert
const triggerParentSkipAlert = async (studentId, grade, sourceModule) => {
  console.log(`🚨 [AlertEngine] Triggered parent alert PHYSICAL_ACTIVITY_SKIP_ALERT for student ${studentId}`);
  
  eventBus.publish('PARENT_ALERT_GENERATED', {
    studentId,
    alertType: 'PHYSICAL_ACTIVITY_SKIP_ALERT',
    message: `PHYSICAL_ACTIVITY_SKIP_ALERT: Student has consecutively skipped 10 assigned physical breaks.`,
    severity: 'critical'
  });
};

// Helper: AI Personalization Recommendation Engine
const getAIPersonalizedRecommendation = async ({
  studentId,
  grade,
  performanceScore = 50,
  attentionScore = 50,
  moodScore = 50,
  skipHistory,
  completedModule = 'AI_TUTOR',
  sessionDuration = 1800
}) => {
  const studentGrade = grade || 'KG';
  const consecutiveSkips = (typeof skipHistory === 'number') ? skipHistory : await getConsecutiveSkips(studentId);
  
  let catalog = DEFAULT_ACTIVITIES;
  if (isMongoConnected()) {
    try {
      const dbActs = await ActivityModel.find({ isActive: true });
      if (dbActs.length > 0) catalog = dbActs;
    } catch (err) {
      console.error(err);
    }
  }

  // 1. Filter by completedModule subject tag
  let filtered = catalog;
  let subjectTag = null;
  if (completedModule === 'ENGLISH_APP') {
    subjectTag = 'ENGLISH_ACTIVITY';
  } else if (completedModule === 'MATH_APP') {
    subjectTag = 'MATH_ACTIVITY';
  } else if (completedModule === 'STEM_APP') {
    subjectTag = 'STEM_ACTIVITY';
  } else if (completedModule === 'LOGIC_APP') {
    subjectTag = 'LOGIC_ACTIVITY';
  }

  if (subjectTag) {
    filtered = catalog.filter(a => a.subjectTag === subjectTag);
  }

  // 2. Filter by Grade level
  let gradeFiltered = filtered.filter(a => a.gradeLevels.includes(studentGrade));
  if (gradeFiltered.length === 0) {
    gradeFiltered = catalog.filter(a => a.gradeLevels.includes(studentGrade));
  }
  if (gradeFiltered.length === 0) {
    gradeFiltered = catalog;
  }

  // 3. AI Selection heuristics based on mood and attention
  let selectedActivity = null;

  let completedIds = [];
  if (isMongoConnected()) {
    try {
      completedIds = await ActivitySessionModel.distinct('activityId', { studentId, status: SESSION_STATUS.COMPLETED });
    } catch (err) {}
  } else {
    const db = readLocalDB();
    completedIds = db.sessions.filter(s => s.studentId === studentId && s.status === SESSION_STATUS.COMPLETED).map(s => s.activityId);
  }

  const uncompleted = gradeFiltered.filter(a => !completedIds.includes(a.activityId));
  const pool = uncompleted.length > 0 ? uncompleted : gradeFiltered;

  if (attentionScore < 50 || moodScore < 50) {
    const calmActs = pool.filter(a => ['focus', 'calm', 'relax', 'breathing', 'yoga', 'brain_gym', 'shape recognition', 'color recognition'].includes(a.category) || (a.moodTags && a.moodTags.some(tag => ['calm', 'focus', 'relax'].includes(tag))));
    if (calmActs.length > 0) {
      selectedActivity = calmActs[Math.floor(Math.random() * calmActs.length)];
    }
  }

  if (!selectedActivity && (performanceScore > 80 || attentionScore > 80)) {
    const energeticActs = pool.filter(a => ['cardio', 'dance', 'movement', 'fitness', 'animal movements'].includes(a.category) || (a.moodTags && a.moodTags.some(tag => ['energize', 'fun'].includes(tag))));
    if (energeticActs.length > 0) {
      selectedActivity = energeticActs[Math.floor(Math.random() * energeticActs.length)];
    }
  }

  if (!selectedActivity) {
    selectedActivity = pool[Math.floor(Math.random() * pool.length)];
  }

  // 4. Skip Adaptation Engine adjustments
  let targetDuration = selectedActivity.durationSeconds;

  if (consecutiveSkips >= 3 && consecutiveSkips < 5) {
    targetDuration = Math.max(30, Math.round(targetDuration * 0.5));
    console.log(`⚠️ [SkipAdaptation] ${consecutiveSkips} consecutive skips. Reducing duration to ${targetDuration}s.`);
  } else if (consecutiveSkips >= 5) {
    targetDuration = Math.max(30, Math.round(targetDuration * 0.5));
    console.log(`⚠️ [SkipAdaptation] ${consecutiveSkips} consecutive skips. Forcing game-based break and reducing duration.`);
    const gameActs = gradeFiltered.filter(a => ['Simon Says', 'Number Hop Game', 'Memory Walk', 'Touch Something Red', 'Find a Blue Object', 'Touch a Circle Shape', 'Simon Says (Logic Break)', 'Touch Square Objects', 'Memory Challenge', 'Pattern Walk'].includes(a.title) || ['color recognition', 'shape recognition', 'animal movements', 'memory', 'brain_gym'].includes(a.category));
    if (gameActs.length > 0) {
      selectedActivity = gameActs[Math.floor(Math.random() * gameActs.length)];
    }
  }

  const parentAlertTriggered = (consecutiveSkips >= 10);

  // Difficulty label mapping
  let diffLabel = "Easy";
  if (studentGrade === 'KG') diffLabel = "Very Easy";
  else if (studentGrade === 'Grade 1') diffLabel = "Easy";
  else if (studentGrade === 'Grade 2') diffLabel = "Easy-Medium";
  else if (studentGrade === 'Grade 3') diffLabel = "Medium";
  else if (studentGrade === 'Grade 4') diffLabel = "Medium-Hard";

  if (performanceScore > 85) {
    if (diffLabel === "Easy") diffLabel = "Easy-Medium";
    else if (diffLabel === "Easy-Medium") diffLabel = "Medium";
    else if (diffLabel === "Medium") diffLabel = "Medium-Hard";
  } else if (performanceScore < 40) {
    if (diffLabel === "Medium-Hard") diffLabel = "Medium";
    else if (diffLabel === "Medium") diffLabel = "Easy-Medium";
    else if (diffLabel === "Easy-Medium") diffLabel = "Easy";
  }

  return {
    recommendedActivity: selectedActivity,
    difficulty: diffLabel,
    duration: targetDuration,
    rewardPoints: 5,
    parentAlertTriggered
  };
};

// Helper: Get next recommended activity
const getNextRecommendedActivity = async (studentId, grade, sourceModule) => {
  let attentionScore = 50;
  let moodScore = 50;
  let performanceScore = 50;
  
  if (isMongoConnected()) {
    try {
      const student = await StudentModel.findOne({ studentId });
      if (student) {
        if (student.currentMood === 'happy' || student.currentMood === 'excited') moodScore = 80;
        else if (student.currentMood === 'sad' || student.currentMood === 'tired') moodScore = 30;
      }
    } catch (err) {}
  } else {
    const db = readLocalDB();
    const student = db.students[studentId];
    if (student) {
      if (student.currentMood === 'happy' || student.currentMood === 'excited') moodScore = 80;
      else if (student.currentMood === 'sad' || student.currentMood === 'tired') moodScore = 30;
    }
  }

  const result = await getAIPersonalizedRecommendation({
    studentId,
    grade,
    completedModule: sourceModule,
    attentionScore,
    moodScore,
    performanceScore
  });

  return result.recommendedActivity;
};

// Helper: Check and Award Badges
const checkAndAwardBadges = async (studentId, grade, sourceModule, db, isLocal) => {
  const studentGrade = grade || 'Grade 2';
  
  let completedSessions = [];
  let student = null;
  const activityMap = {};

  DEFAULT_ACTIVITIES.forEach(a => {
    activityMap[a.activityId] = a;
  });

  if (!isLocal) {
    try {
      student = await getOrCreateMongoStudent(studentId, studentGrade);
      completedSessions = await ActivitySessionModel.find({ studentId, status: SESSION_STATUS.COMPLETED });
      const dbActs = await ActivityModel.find({ isActive: true });
      dbActs.forEach(a => {
        activityMap[a.activityId] = a;
      });
    } catch (err) {
      console.error('Error fetching data for badges check:', err);
      return;
    }
  } else {
    student = getOrCreateLocalStudent(db, studentId, studentGrade);
    completedSessions = db.sessions.filter(s => s.studentId === studentId && s.status === SESSION_STATUS.COMPLETED);
  }

  if (!student.badges) {
    student.badges = [];
  }

  const badgeDefinitions = [
    {
      id: 'badge_movement_master',
      label: 'Movement Master',
      icon: '🏃‍♂️',
      check: (sessions) => sessions.length >= 3
    },
    {
      id: 'badge_energy_hero',
      label: 'Energy Hero',
      icon: '⚡',
      check: (sessions) => {
        const energyCount = sessions.filter(s => {
          const act = activityMap[s.activityId];
          return act && (act.category === 'cardio' || act.category === 'dance' || act.category === 'fitness');
        }).length;
        return energyCount >= 2;
      }
    },
    {
      id: 'badge_fitness_explorer',
      label: 'Fitness Explorer',
      icon: '🧭',
      check: (sessions) => {
        const categories = new Set();
        sessions.forEach(s => {
          const act = activityMap[s.activityId];
          if (act && act.category) {
            categories.add(act.category);
          }
        });
        return categories.size >= 3;
      }
    },
    {
      id: 'badge_fitfriend_explorer',
      label: 'FitFriend Explorer',
      icon: '🧭',
      check: (sessions) => {
        return sessions.some(s => s.sourceModule === 'FITFRIEND_AI') || sessions.length >= 1;
      }
    },
    {
      id: 'badge_focus_champion',
      label: 'Focus Champion',
      icon: '🧠',
      check: (sessions) => {
        const focusCount = sessions.filter(s => {
          const act = activityMap[s.activityId];
          return act && (act.category === 'mindfulness' || act.category === 'yoga' || act.category === 'focus' || act.category === 'brain_gym');
        }).length;
        return focusCount >= 2;
      }
    },
    {
      id: 'badge_focus_hero',
      label: 'Focus Hero',
      icon: '🧠',
      check: (sessions) => {
        const focusCount = sessions.filter(s => {
          const act = activityMap[s.activityId];
          return act && (act.category === 'mindfulness' || act.category === 'yoga' || act.category === 'focus' || act.category === 'brain_gym');
        }).length;
        return focusCount >= 3;
      }
    },
    {
      id: 'badge_fitness_champion',
      label: 'Fitness Champion',
      icon: '🥇',
      check: (sessions) => sessions.length >= 5
    }
  ];

  for (const badge of badgeDefinitions) {
    if (badge.check(completedSessions)) {
      if (!student.badges.includes(badge.id)) {
        console.log(`🏆 [BadgeEngine] Student ${studentId} unlocked badge: ${badge.label}`);
        student.badges.push(badge.id);
        student.stats.totalBadgesEarned += 1;

        const rewardId = new mongoose.Types.ObjectId().toString();

        if (!isLocal) {
          await student.save();
          await ActivityRewardModel.create({
            studentId,
            sourceModule,
            gradeAtReward: studentGrade,
            rewardType: REWARD_TYPES.BADGE,
            rewardTrigger: REWARD_TRIGGERS.SYSTEM_GRANT,
            starsEarned: 0,
            badgeId: badge.id,
            badgeLabel: badge.label,
            badgeIcon: badge.icon,
            eventId: rewardId
          });
        } else {
          db.rewards.push({
            _id: rewardId,
            studentId,
            sourceModule,
            gradeAtReward: studentGrade,
            rewardType: REWARD_TYPES.BADGE,
            rewardTrigger: REWARD_TRIGGERS.SYSTEM_GRANT,
            starsEarned: 0,
            badgeId: badge.id,
            badgeLabel: badge.label,
            badgeIcon: badge.icon,
            createdAt: new Date().toISOString(),
            isVoided: false
          });
          writeLocalDB(db);
        }

        eventBus.publish('REWARD_GRANTED', {
          studentId,
          rewardType: REWARD_TYPES.BADGE,
          amount: 0,
          source: 'PHYSICAL_ACTIVITY_ENGINE',
          badgeId: badge.id
        });

        eventBus.publish('BADGE_UNLOCKED', {
          studentId,
          badgeId: badge.id,
          badgeLabel: badge.label,
          badgeIcon: badge.icon,
          source: 'PHYSICAL_ACTIVITY_ENGINE'
        });
      }
    }
  }
};

// Helper: Update analytics record (local fallback)
const updateLocalAnalytics = (db, studentId, sourceModule, grade, date, counters = {}) => {
  let record = db.analytics.find(a => a.studentId === studentId && a.sourceModule === sourceModule && a.date === date);
  if (!record) {
    record = {
      studentId,
      sourceModule,
      gradeLevel: grade,
      date,
      sessionsAssigned: 0,
      sessionsStarted: 0,
      sessionsCompleted: 0,
      sessionsSkipped: 0,
      sessionsExpired: 0,
      totalMinutesActive: 0,
      totalStarsEarned: 0
    };
    db.analytics.push(record);
  }
  
  // Apply counters
  Object.keys(counters).forEach(key => {
    if (record[key] !== undefined) {
      record[key] += counters[key];
    }
  });
};

// Helper: Get YYYY-MM-DD string
const getTodayString = () => {
  return new Date().toISOString().split('T')[0];
};

// ─── API CONTROLLERS ──────────────────────────────────────────

/**
 * POST /activity/assign
 * Body: { studentId, grade, sourceModule, activityId (optional) }
 */
// Programmatic / Internal assign helper for trigger engine
export const assignActivityInternal = async ({ studentId, grade, sourceModule, activityId }) => {
  const studentGrade = grade || 'KG';
  let selectedActivityId = activityId;
  let activityDetail = null;

  // Find or determine activity details
  if (isMongoConnected()) {
    try {
      if (selectedActivityId) {
        activityDetail = await ActivityModel.findOne({ activityId: selectedActivityId });
      }
      if (!activityDetail) {
        const recommended = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
        activityDetail = recommended;
        selectedActivityId = recommended.activityId;
      }
    } catch (err) {
      console.error('Mongoose assign error:', err);
    }
  }

  // Fallback to static seed lookup if needed
  if (!activityDetail) {
    activityDetail = DEFAULT_ACTIVITIES.find(a => a.activityId === selectedActivityId) || 
                     DEFAULT_ACTIVITIES.find(a => a.gradeLevels.includes(studentGrade)) || 
                     DEFAULT_ACTIVITIES[0];
    selectedActivityId = activityDetail.activityId;
  }

  let sessionObj = null;

  if (isMongoConnected()) {
    try {
      await getOrCreateMongoStudent(studentId, studentGrade);
      sessionObj = await ActivitySessionModel.create({
        studentId,
        activityId: selectedActivityId,
        sourceModule,
        gradeAtSession: studentGrade,
        status: SESSION_STATUS.ASSIGNED,
        plannedDurationSeconds: activityDetail.durationSeconds,
        assignedBy: 'SYSTEM',
        assignedAt: new Date()
      });
      
      // Update Analytics
      const today = getTodayString();
      await ActivityAnalyticsModel.upsertForDate(studentId, sourceModule, studentGrade, today, {
        sessionsAssigned: 1
      });
    } catch (err) {
      console.error('Mongo save session failed:', err);
    }
  }

  // Local JSON Database Fallback
  if (!sessionObj) {
    const db = readLocalDB();
    getOrCreateLocalStudent(db, studentId, studentGrade);
    
    sessionObj = {
      _id: new mongoose.Types.ObjectId().toString(),
      studentId,
      activityId: selectedActivityId,
      sourceModule,
      gradeAtSession: studentGrade,
      status: SESSION_STATUS.ASSIGNED,
      plannedDurationSeconds: activityDetail.durationSeconds,
      assignedBy: 'SYSTEM',
      assignedAt: new Date().toISOString()
    };
    
    db.sessions.push(sessionObj);
    updateLocalAnalytics(db, studentId, sourceModule, studentGrade, getTodayString(), {
      sessionsAssigned: 1
    });
    writeLocalDB(db);
  }

  // Publish Integration Outbound Event
  eventBus.publish('ACTIVITY_ASSIGNED', {
    studentId,
    activityId: selectedActivityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    assignedAt: sessionObj.assignedAt
  });

  // Keep EVENT_ACTIVITY_ASSIGNED alias for compatibility
  eventBus.publish('EVENT_ACTIVITY_ASSIGNED', {
    studentId,
    activityId: selectedActivityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    assignedAt: sessionObj.assignedAt
  });

  return {
    sessionId: sessionObj._id.toString(),
    activityId: selectedActivityId,
    activityDetail
  };
};

export const assignActivity = async (req, res) => {
  const { studentId, grade, sourceModule, activityId } = req.body;

  if (!studentId || !sourceModule) {
    return res.status(400).json({ error: "Missing required fields: 'studentId' and 'sourceModule' are required." });
  }

  try {
    const studentGrade = grade || 'KG';
    const result = await assignActivityInternal({ studentId, grade: studentGrade, sourceModule, activityId });

    const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
    const engScore = await getEngagementScore(studentId, sourceModule);
    const rewardPts = await getRewardPoints(studentId, sourceModule);

    res.status(201).json({
      success: true,
      sessionId: result.sessionId,
      activityId: result.activityId,
      engagementScore: engScore,
      rewardPoints: rewardPts,
      nextRecommendedActivity: nextRec
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * POST /activity/start
 * Body: { studentId, sessionId, grade, sourceModule }
 */
export const startActivity = async (req, res) => {
  const { studentId, sessionId, grade, sourceModule } = req.body;

  if (!studentId || !sessionId || !sourceModule) {
    return res.status(400).json({ error: "Missing required fields: 'studentId', 'sessionId', and 'sourceModule' are required." });
  }

  let sessionObj = null;
  const studentGrade = grade || 'KG';

  if (isMongoConnected()) {
    try {
      sessionObj = await ActivitySessionModel.findOne({ _id: sessionId, studentId });
      if (sessionObj) {
        sessionObj.status = SESSION_STATUS.STARTED;
        sessionObj.startedAt = new Date();
        await sessionObj.save();

        const today = getTodayString();
        await ActivityAnalyticsModel.upsertForDate(studentId, sourceModule, studentGrade, today, {
          sessionsStarted: 1
        });
      }
    } catch (err) {
      console.error('Mongo start activity failed:', err);
    }
  }

  // Fallback to local DB
  if (!sessionObj) {
    const db = readLocalDB();
    const idx = db.sessions.findIndex(s => s._id === sessionId && s.studentId === studentId);
    if (idx !== -1) {
      db.sessions[idx].status = SESSION_STATUS.STARTED;
      db.sessions[idx].startedAt = new Date().toISOString();
      sessionObj = db.sessions[idx];
      
      updateLocalAnalytics(db, studentId, sourceModule, studentGrade, getTodayString(), {
        sessionsStarted: 1
      });
      writeLocalDB(db);
    }
  }

  if (!sessionObj) {
    return res.status(404).json({ error: "Activity session not found." });
  }

  // Publish Integration Event
  eventBus.publish('EVENT_ACTIVITY_STARTED', {
    studentId,
    activityId: sessionObj.activityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    startedAt: sessionObj.startedAt
  });

  const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
  const engScore = await getEngagementScore(studentId, sourceModule);
  const rewardPts = await getRewardPoints(studentId, sourceModule);

  res.json({
    success: true,
    sessionId: sessionObj._id.toString(),
    activityId: sessionObj.activityId,
    engagementScore: engScore,
    rewardPoints: rewardPts,
    nextRecommendedActivity: nextRec
  });
};

/**
 * POST /activity/complete
 * Body: { studentId, sessionId, grade, sourceModule, feedback }
 */
export const completeActivity = async (req, res) => {
  const { studentId, sessionId, grade, sourceModule, feedback } = req.body;

  if (!studentId || !sessionId || !sourceModule) {
    return res.status(400).json({ error: "Missing required fields: 'studentId', 'sessionId', and 'sourceModule' are required." });
  }

  let sessionObj = null;
  const studentGrade = grade || 'KG';
  let activityDetail = null;
  const starsToAward = 5; // Enforce Stars: +5 Complete Activity

  if (isMongoConnected()) {
    try {
      sessionObj = await ActivitySessionModel.findOne({ _id: sessionId, studentId });
      if (sessionObj) {
        activityDetail = await ActivityModel.findOne({ activityId: sessionObj.activityId });
        
        sessionObj.status = SESSION_STATUS.COMPLETED;
        sessionObj.completedAt = new Date();
        if (sessionObj.startedAt) {
          sessionObj.actualDurationSeconds = Math.round((sessionObj.completedAt - sessionObj.startedAt) / 1000);
        } else {
          sessionObj.actualDurationSeconds = sessionObj.plannedDurationSeconds || 60;
        }

        sessionObj.starsEarned = starsToAward;
        
        if (feedback) {
          sessionObj.feedback = {
            rating: feedback.rating || null,
            emoji: feedback.emoji || null,
            comment: feedback.comment || null
          };
        }

        await sessionObj.save();

        // Update Student Profile Aggregate Stats
        const student = await getOrCreateMongoStudent(studentId, studentGrade);
        student.stats.totalSessionsCompleted += 1;
        student.stats.totalStarsEarned += starsToAward;
        student.stats.totalMinutesActive += Math.round(sessionObj.actualDurationSeconds / 60);
        await student.save();

        // Create Reward Record
        const rewardId = new mongoose.Types.ObjectId().toString();
        await ActivityRewardModel.create({
          studentId,
          activityId: sessionObj.activityId,
          sessionId: sessionObj._id,
          sourceModule,
          gradeAtReward: studentGrade,
          rewardType: REWARD_TYPES.STARS,
          rewardTrigger: REWARD_TRIGGERS.ACTIVITY_COMPLETED,
          starsEarned: starsToAward,
          eventId: rewardId
        });

        // Update Analytics
        const today = getTodayString();
        await ActivityAnalyticsModel.upsertForDate(studentId, sourceModule, studentGrade, today, {
          sessionsCompleted: 1,
          totalMinutesActive: Math.round(sessionObj.actualDurationSeconds / 60),
          totalStarsEarned: starsToAward
        });

        // Check and award badges dynamically
        await checkAndAwardBadges(studentId, studentGrade, sourceModule, null, false);
      }
    } catch (err) {
      console.error('Mongo complete activity failed:', err);
    }
  }

  // Fallback to local DB
  if (!sessionObj) {
    const db = readLocalDB();
    const idx = db.sessions.findIndex(s => s._id === sessionId && s.studentId === studentId);
    if (idx !== -1) {
      sessionObj = db.sessions[idx];
      sessionObj.status = SESSION_STATUS.COMPLETED;
      sessionObj.completedAt = new Date().toISOString();
      
      const started = sessionObj.startedAt ? new Date(sessionObj.startedAt) : null;
      const completed = new Date(sessionObj.completedAt);
      if (started) {
        sessionObj.actualDurationSeconds = Math.round((completed - started) / 1000);
      } else {
        sessionObj.actualDurationSeconds = sessionObj.plannedDurationSeconds || 60;
      }

      activityDetail = DEFAULT_ACTIVITIES.find(a => a.activityId === sessionObj.activityId) || DEFAULT_ACTIVITIES[0];
      sessionObj.starsEarned = starsToAward;

      if (feedback) {
        sessionObj.feedback = {
          rating: feedback.rating || null,
          emoji: feedback.emoji || null,
          comment: feedback.comment || null
        };
      }

      // Update Local Student
      const student = getOrCreateLocalStudent(db, studentId, studentGrade);
      student.stats.totalSessionsCompleted += 1;
      student.stats.totalStarsEarned += starsToAward;
      student.stats.totalMinutesActive += Math.round(sessionObj.actualDurationSeconds / 60);

      // Create Local Reward
      const rewardObj = {
        _id: new mongoose.Types.ObjectId().toString(),
        studentId,
        activityId: sessionObj.activityId,
        sessionId: sessionObj._id,
        sourceModule,
        gradeAtReward: studentGrade,
        rewardType: REWARD_TYPES.STARS,
        rewardTrigger: REWARD_TRIGGERS.ACTIVITY_COMPLETED,
        starsEarned: starsToAward,
        createdAt: new Date().toISOString(),
        isVoided: false
      };
      db.rewards.push(rewardObj);

      updateLocalAnalytics(db, studentId, sourceModule, studentGrade, getTodayString(), {
        sessionsCompleted: 1,
        totalMinutesActive: Math.round(sessionObj.actualDurationSeconds / 60),
        totalStarsEarned: starsToAward
      });
      writeLocalDB(db);

      // Check and award badges dynamically in local mode
      await checkAndAwardBadges(studentId, studentGrade, sourceModule, db, true);
    }
  }

  if (!sessionObj) {
    return res.status(404).json({ error: "Activity session not found." });
  }

  // Publish Upgraded Outbound Event
  eventBus.publish('ACTIVITY_COMPLETED', {
    studentId,
    activityId: sessionObj.activityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    completedAt: sessionObj.completedAt,
    duration: sessionObj.actualDurationSeconds,
    feedback: sessionObj.feedback
  });

  // Keep older event name for compatibility
  eventBus.publish('EVENT_ACTIVITY_COMPLETED', {
    studentId,
    activityId: sessionObj.activityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    completedAt: sessionObj.completedAt,
    duration: sessionObj.actualDurationSeconds,
    feedback: sessionObj.feedback
  });

  // Publish Upgraded Outbound Event
  eventBus.publish('REWARD_GRANTED', {
    studentId,
    rewardType: REWARD_TYPES.STARS,
    amount: starsToAward,
    source: 'PHYSICAL_ACTIVITY_ENGINE'
  });

  // Keep older event name for compatibility
  eventBus.publish('EVENT_REWARD_GRANTED', {
    studentId,
    rewardType: REWARD_TYPES.STARS,
    amount: starsToAward,
    source: 'PHYSICAL_ACTIVITY_ENGINE',
    badgeId: sessionObj.badgeEarned || null
  });

  const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
  const engScore = await getEngagementScore(studentId, sourceModule);
  const rewardPts = await getRewardPoints(studentId, sourceModule);

  res.json({
    success: true,
    sessionId: sessionObj._id.toString(),
    activityId: sessionObj.activityId,
    engagementScore: engScore,
    rewardPoints: rewardPts,
    nextRecommendedActivity: nextRec
  });
};

/**
 * POST /activity/skip
 * Body: { studentId, sessionId, grade, sourceModule, skipReason, skipReasonDetail }
 */
export const skipActivity = async (req, res) => {
  const { studentId, sessionId, grade, sourceModule, skipReason, skipReasonDetail } = req.body;

  if (!studentId || !sessionId || !sourceModule || !skipReason) {
    return res.status(400).json({ error: "Missing required fields: 'studentId', 'sessionId', 'sourceModule', and 'skipReason' are required." });
  }

  // Verify skip reason is valid
  if (!Object.values(SKIP_REASONS).includes(skipReason)) {
    return res.status(400).json({ error: `Invalid skipReason. Valid reasons are: ${Object.values(SKIP_REASONS).join(', ')}` });
  }

  let sessionObj = null;
  const studentGrade = grade || 'KG';

  if (isMongoConnected()) {
    try {
      sessionObj = await ActivitySessionModel.findOne({ _id: sessionId, studentId });
      if (sessionObj) {
        sessionObj.status = SESSION_STATUS.SKIPPED;
        sessionObj.skippedAt = new Date();
        await sessionObj.save();

        // Create Skip Record
        await ActivitySkipModel.create({
          studentId,
          activityId: sessionObj.activityId,
          sessionId: sessionObj._id,
          sourceModule,
          gradeAtSkip: studentGrade,
          skippedAt: new Date(),
          skipReason,
          skipReasonDetail: skipReasonDetail || null,
          skippedBy: 'STUDENT'
        });

        // Update Student stats
        const student = await getOrCreateMongoStudent(studentId, studentGrade);
        student.stats.totalSessionsSkipped += 1;
        await student.save();

        // Update Analytics
        const today = getTodayString();
        await ActivityAnalyticsModel.upsertForDate(studentId, sourceModule, studentGrade, today, {
          sessionsSkipped: 1
        });
      }
    } catch (err) {
      console.error('Mongo skip activity failed:', err);
    }
  }

  // Fallback to local DB
  if (!sessionObj) {
    const db = readLocalDB();
    const idx = db.sessions.findIndex(s => s._id === sessionId && s.studentId === studentId);
    if (idx !== -1) {
      sessionObj = db.sessions[idx];
      sessionObj.status = SESSION_STATUS.SKIPPED;
      sessionObj.skippedAt = new Date().toISOString();

      const skipObj = {
        _id: new mongoose.Types.ObjectId().toString(),
        studentId,
        activityId: sessionObj.activityId,
        sessionId: sessionObj._id,
        sourceModule,
        gradeAtSkip: studentGrade,
        skippedAt: sessionObj.skippedAt,
        skipReason,
        skipReasonDetail: skipReasonDetail || null,
        skippedBy: 'STUDENT'
      };
      db.skips.push(skipObj);

      const student = getOrCreateLocalStudent(db, studentId, studentGrade);
      student.stats.totalSessionsSkipped += 1;

      updateLocalAnalytics(db, studentId, sourceModule, studentGrade, getTodayString(), {
        sessionsSkipped: 1
      });
      writeLocalDB(db);
    }
  }

  if (!sessionObj) {
    return res.status(404).json({ error: "Activity session not found." });
  }

  // Publish Integration Event
  eventBus.publish('ACTIVITY_SKIPPED', {
    studentId,
    activityId: sessionObj.activityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    skippedAt: sessionObj.skippedAt,
    reason: skipReason
  });

  // Keep older event name for compatibility
  eventBus.publish('EVENT_ACTIVITY_SKIPPED', {
    studentId,
    activityId: sessionObj.activityId,
    sessionId: sessionObj._id.toString(),
    sourceModule,
    skippedAt: sessionObj.skippedAt,
    reason: skipReason
  });

  // Check consecutive skips for Parent Skip Alert
  const skipsCount = await getConsecutiveSkips(studentId);
  if (skipsCount >= 10) {
    await triggerParentSkipAlert(studentId, studentGrade, sourceModule);
  }

  const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
  const engScore = await getEngagementScore(studentId, sourceModule);
  const rewardPts = await getRewardPoints(studentId, sourceModule);

  res.json({
    success: true,
    sessionId: sessionObj._id.toString(),
    activityId: sessionObj.activityId,
    engagementScore: engScore,
    rewardPoints: rewardPts,
    nextRecommendedActivity: nextRec
  });
};

/**
 * GET /activity/history
 * Query: studentId, grade, sourceModule
 */
export const getHistory = async (req, res) => {
  const { studentId, grade, sourceModule } = req.query;

  if (!studentId) {
    return res.status(400).json({ error: "Missing required query parameter: 'studentId' is required." });
  }

  const studentGrade = grade || 'KG';
  let history = [];

  if (isMongoConnected()) {
    try {
      const filter = { studentId };
      if (sourceModule) {
        filter.sourceModule = sourceModule;
      }
      history = await ActivitySessionModel.find(filter).sort({ assignedAt: -1 }).limit(50);
    } catch (err) {
      console.error('Mongo get history failed:', err);
    }
  } else {
    const db = readLocalDB();
    history = db.sessions.filter(s => s.studentId === studentId);
    if (sourceModule) {
      history = history.filter(s => s.sourceModule === sourceModule);
    }
    // Sort descending
    history.sort((a, b) => new Date(b.assignedAt) - new Date(a.assignedAt));
  }

  const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
  const engScore = await getEngagementScore(studentId, sourceModule);
  const rewardPts = await getRewardPoints(studentId, sourceModule);

  res.json({
    success: true,
    history,
    engagementScore: engScore,
    rewardPoints: rewardPts,
    nextRecommendedActivity: nextRec
  });
};

/**
 * GET /activity/report
 * Query: studentId, grade, sourceModule
 */
export const getReport = async (req, res) => {
  const { studentId, grade, sourceModule } = req.query;

  if (!studentId) {
    return res.status(400).json({ error: "Missing required query parameter: 'studentId' is required." });
  }

  const studentGrade = grade || 'KG';
  let report = {
    totalMinutesActive: 0,
    sessionsAssigned: 0,
    sessionsCompleted: 0,
    sessionsSkipped: 0,
    completionRate: 0,
    skipRate: 0,
    categoryBreakdown: {},
    skipReasonTally: {}
  };

  if (isMongoConnected()) {
    try {
      const filter = { studentId };
      if (sourceModule) {
        filter.sourceModule = sourceModule;
      }
      const analyticsRecords = await ActivityAnalyticsModel.find(filter);
      
      // Sum up everything
      analyticsRecords.forEach(rec => {
        report.sessionsAssigned += rec.sessionsAssigned;
        report.sessionsCompleted += rec.sessionsCompleted;
        report.sessionsSkipped += rec.sessionsSkipped;
        report.totalMinutesActive += rec.totalMinutesActive;

        // Tally categories
        if (rec.categoryBreakdown && Array.isArray(rec.categoryBreakdown)) {
          rec.categoryBreakdown.forEach(cat => {
            if (!report.categoryBreakdown[cat.category]) {
              report.categoryBreakdown[cat.category] = 0;
            }
            report.categoryBreakdown[cat.category] += cat.sessionsCompleted;
          });
        }

        // Tally skip reasons
        if (rec.skipReasonTally && Array.isArray(rec.skipReasonTally)) {
          rec.skipReasonTally.forEach(sr => {
            if (!report.skipReasonTally[sr.reason]) {
              report.skipReasonTally[sr.reason] = 0;
            }
            report.skipReasonTally[sr.reason] += sr.count;
          });
        }
      });

      // Recalculate rates
      if (report.sessionsAssigned > 0) {
        report.completionRate = parseFloat((report.sessionsCompleted / report.sessionsAssigned).toFixed(2));
        report.skipRate = parseFloat((report.sessionsSkipped / report.sessionsAssigned).toFixed(2));
      }
    } catch (err) {
      console.error('Mongo get report failed:', err);
    }
  } else {
    const db = readLocalDB();
    const records = db.analytics.filter(a => a.studentId === studentId && (!sourceModule || a.sourceModule === sourceModule));
    
    records.forEach(rec => {
      report.sessionsAssigned += rec.sessionsAssigned;
      report.sessionsCompleted += rec.sessionsCompleted;
      report.sessionsSkipped += rec.sessionsSkipped;
      report.totalMinutesActive += rec.totalMinutesActive;
    });

    // Tally categories from completed sessions
    let sessions = db.sessions.filter(s => s.studentId === studentId && (!sourceModule || s.sourceModule === sourceModule));
    sessions.forEach(s => {
      if (s.status === SESSION_STATUS.COMPLETED) {
        const act = DEFAULT_ACTIVITIES.find(a => a.activityId === s.activityId) || DEFAULT_ACTIVITIES[0];
        if (act) {
          report.categoryBreakdown[act.category] = (report.categoryBreakdown[act.category] || 0) + 1;
        }
      }
    });

    // Tally skip reasons from skips
    let skips = db.skips.filter(sk => sk.studentId === studentId && (!sourceModule || sk.sourceModule === sourceModule));
    skips.forEach(sk => {
      report.skipReasonTally[sk.skipReason] = (report.skipReasonTally[sk.skipReason] || 0) + 1;
    });

    // Recalculate rates
    if (report.sessionsAssigned > 0) {
      report.completionRate = parseFloat((report.sessionsCompleted / report.sessionsAssigned).toFixed(2));
      report.skipRate = parseFloat((report.sessionsSkipped / report.sessionsAssigned).toFixed(2));
    }
  }

  const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
  const engScore = await getEngagementScore(studentId, sourceModule);
  const rewardPts = await getRewardPoints(studentId, sourceModule);

  res.json({
    success: true,
    report,
    engagementScore: engScore,
    rewardPoints: rewardPts,
    nextRecommendedActivity: nextRec
  });
};

/**
 * GET /activity/recommendation
 * Query: studentId, grade, sourceModule
 */
export const getRecommendation = async (req, res) => {
  const { studentId, grade, sourceModule } = req.query;

  if (!studentId) {
    return res.status(400).json({ error: "Missing required query parameter: 'studentId' is required." });
  }

  const studentGrade = grade || 'KG';
  
  const nextRec = await getNextRecommendedActivity(studentId, studentGrade, sourceModule);
  const engScore = await getEngagementScore(studentId, sourceModule);
  const rewardPts = await getRewardPoints(studentId, sourceModule);

  res.json({
    success: true,
    activityId: nextRec ? nextRec.activityId : null,
    nextRecommendedActivity: nextRec,
    engagementScore: engScore,
    rewardPoints: rewardPts
  });
};

/**
 * POST /activity/instructor-recommend
 * Body: { studentId, grade, performanceScore, attentionScore, moodScore, sessionDuration, completedModule }
 */
export const recommendForInstructor = async (req, res) => {
  const {
    studentId,
    grade,
    performanceScore,
    attentionScore,
    moodScore,
    sessionDuration,
    completedModule
  } = req.body;

  /* MAIN_AI_INPUT */
  // Future AI model inputs telemetry check hook
  if (!studentId || !grade) {
    return res.status(400).json({ error: "Missing required fields: 'studentId' and 'grade' are required." });
  }

  const perf = typeof performanceScore === 'number' ? performanceScore : 50;
  const att = typeof attentionScore === 'number' ? attentionScore : 50;
  const mood = typeof moodScore === 'number' ? moodScore : 50;
  const sessionDur = typeof sessionDuration === 'number' ? sessionDuration : 1800;
  const sourceModule = completedModule || 'MATH_APP';

  const targetGrade = grade;
  let catalog = DEFAULT_ACTIVITIES;

  if (isMongoConnected()) {
    try {
      const dbActivities = await ActivityModel.find({ isActive: true });
      if (dbActivities.length > 0) {
        catalog = dbActivities;
      }
    } catch (err) {
      console.error('Error fetching catalog for instructor AI recommendation:', err);
    }
  }

  // Filter activities by grade
  let candidates = catalog.filter(a => a.gradeLevels.includes(targetGrade));
  if (candidates.length === 0) {
    candidates = catalog;
  }

  // Heuristics mapping inputs to category recommendations
  let selectedActivity = null;

  if (att < 50) {
    // Low attention: suggest active/dance to revive focus
    const activeActs = candidates.filter(a => ['cardio', 'dance'].includes(a.category));
    if (activeActs.length > 0) {
      selectedActivity = activeActs[Math.floor(Math.random() * activeActs.length)];
    }
  } 
  
  if (!selectedActivity && sessionDur > 1800) {
    // Long session: suggest stretching/mindfulness to ease desk fatigue
    const relaxActs = candidates.filter(a => ['stretching', 'mindfulness', 'breathing'].includes(a.category));
    if (relaxActs.length > 0) {
      selectedActivity = relaxActs[Math.floor(Math.random() * relaxActs.length)];
    }
  }

  if (!selectedActivity && mood < 50) {
    // Low mood: suggest a fun dance game
    const funActs = candidates.filter(a => ['dance', 'cardio'].includes(a.category));
    if (funActs.length > 0) {
      selectedActivity = funActs[Math.floor(Math.random() * funActs.length)];
    }
  }

  // Default fallback if no heuristics met or matched
  if (!selectedActivity) {
    selectedActivity = candidates[Math.floor(Math.random() * candidates.length)];
  }

  // Heuristic adjustments for difficulty and duration
  let diffLevel = selectedActivity.difficultyLevel;
  if (perf > 85) {
    diffLevel = Math.min(diffLevel + 1, 5); // scale up challenge
  } else if (perf < 40) {
    diffLevel = Math.max(diffLevel - 1, 1); // scale down challenge
  }

  let actDuration = selectedActivity.durationSeconds;
  if (att < 45) {
    actDuration = Math.max(30, Math.round(actDuration * 0.7)); // keep it short
  } else if (sessionDur > 2400) {
    actDuration = actDuration + 30; // slightly longer break
  }

  /* MAIN_AI_OUTPUT */
  // Future AI model outputs prediction calculation hook
  const engagementPrediction = Math.min(100, Math.max(0, Math.round(
    (att * 0.4) + (mood * 0.4) + (perf > 60 ? 20 : 10)
  )));

  /* MAIN_AI_CALLBACK */
  // Future AI integration callback hook
  // Publish ecosystem event to update mood state in real time
  eventBus.publish('EVENT_MOOD_UPDATED', {
    studentId,
    mood: mood < 40 ? 'tired' : (mood > 70 ? 'excited' : 'calm'),
    confidence: 0.85,
    timestamp: new Date().toISOString()
  });

  res.json({
    success: true,
    recommendedActivity: {
      ...selectedActivity.toObject ? selectedActivity.toObject() : selectedActivity,
      difficultyLevel: diffLevel,
      durationSeconds: actDuration
    },
    difficultyLevel: diffLevel,
    activityDuration: actDuration,
    engagementPrediction
  });
};

/**
 * GET /activity/skip-analytics
 * Query: studentId (optional)
 */
export const getSkipAnalytics = async (req, res) => {
  const { studentId } = req.query;
  
  let skipTrends = [];
  let mostSkippedActivities = [];
  let consecutiveSkipsCount = 0;
  let studentsWithMultipleSkips = [];

  if (isMongoConnected()) {
    try {
      // 1. Skip Trends (Group by date and reason)
      const trends = await ActivitySkipModel.aggregate([
        {
          $group: {
            _id: {
              date: { $dateToString: { format: "%Y-%m-%d", date: "$skippedAt" } },
              reason: "$skipReason"
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { "_id.date": -1 } }
      ]);
      skipTrends = trends.map(t => ({
        date: t._id.date,
        reason: t._id.reason,
        count: t.count
      }));

      // 2. Most Skipped Activities
      const skipped = await ActivitySkipModel.aggregate([
        {
          $group: {
            _id: "$activityId",
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]);
      
      // Map activity details
      for (const item of skipped) {
        const act = await ActivityModel.findOne({ activityId: item._id });
        mostSkippedActivities.push({
          activityId: item._id,
          title: act ? act.title : item._id,
          emoji: act ? act.emoji : "🏃",
          category: act ? act.category : "unknown",
          count: item.count
        });
      }

      // 3. Consecutive Skip Detection for a specific student
      if (studentId) {
        const recent = await ActivitySessionModel.find({ studentId })
          .sort({ assignedAt: -1 })
          .limit(10);
        for (const sess of recent) {
          if (sess.status === SESSION_STATUS.SKIPPED) {
            consecutiveSkipsCount++;
          } else if (sess.status === SESSION_STATUS.COMPLETED) {
            break;
          }
        }
      }

      // 4. Global Consecutive Skip Detection (flag students who skipped last 3 sessions)
      const allActiveSessions = await ActivitySessionModel.aggregate([
        { $sort: { studentId: 1, assignedAt: -1 } },
        {
          $group: {
            _id: "$studentId",
            sessions: { $push: "$$ROOT" }
          }
        }
      ]);
      
      allActiveSessions.forEach(group => {
        let count = 0;
        for (const sess of group.sessions) {
          if (sess.status === SESSION_STATUS.SKIPPED) {
            count++;
          } else if (sess.status === SESSION_STATUS.COMPLETED) {
            break;
          }
        }
        if (count >= 3) {
          studentsWithMultipleSkips.push({
            studentId: group._id,
            consecutiveSkips: count
          });
        }
      });

    } catch (err) {
      console.error('Mongo skip analytics failed:', err);
    }
  } else {
    // Fallback Local JSON Database
    const db = readLocalDB();
    
    // 1. Skip Trends
    const trendsMap = {};
    db.skips.forEach(sk => {
      const date = sk.skippedAt.split('T')[0];
      const key = `${date}_${sk.skipReason}`;
      trendsMap[key] = (trendsMap[key] || 0) + 1;
    });
    skipTrends = Object.keys(trendsMap).map(key => {
      const [date, reason] = key.split('_');
      return { date, reason, count: trendsMap[key] };
    });
    skipTrends.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 2. Most Skipped Activities
    const countsMap = {};
    db.skips.forEach(sk => {
      countsMap[sk.activityId] = (countsMap[sk.activityId] || 0) + 1;
    });
    const sorted = Object.keys(countsMap).map(id => ({
      activityId: id,
      count: countsMap[id]
    })).sort((a, b) => b.count - a.count).slice(0, 10);

    sorted.forEach(item => {
      const act = DEFAULT_ACTIVITIES.find(a => a.activityId === item.activityId) || DEFAULT_ACTIVITIES[0];
      mostSkippedActivities.push({
        activityId: item.activityId,
        title: act ? act.title : item.activityId,
        emoji: act ? act.emoji : "🏃",
        category: act ? act.category : "unknown",
        count: item.count
      });
    });

    // 3. Consecutive Skips for studentId
    if (studentId) {
      const recent = db.sessions
        .filter(s => s.studentId === studentId)
        .sort((a, b) => new Date(b.assignedAt) - new Date(a.assignedAt));
      for (const sess of recent) {
        if (sess.status === SESSION_STATUS.SKIPPED) {
          consecutiveSkipsCount++;
        } else if (sess.status === SESSION_STATUS.COMPLETED) {
          break;
        }
      }
    }

    // 4. Global Detection
    const studentSessMap = {};
    db.sessions.forEach(s => {
      if (!studentSessMap[s.studentId]) {
        studentSessMap[s.studentId] = [];
      }
      studentSessMap[s.studentId].push(s);
    });

    Object.keys(studentSessMap).forEach(sId => {
      const recent = studentSessMap[sId].sort((a, b) => new Date(b.assignedAt) - new Date(a.assignedAt));
      let count = 0;
      for (const sess of recent) {
        if (sess.status === SESSION_STATUS.SKIPPED) {
          count++;
        } else if (sess.status === SESSION_STATUS.COMPLETED) {
          break;
        }
      }
      if (count >= 3) {
        studentsWithMultipleSkips.push({
          studentId: sId,
          consecutiveSkips: count
        });
      }
    });
  }

  res.json({
    success: true,
    skipTrends,
    mostSkippedActivities,
    consecutiveSkips: consecutiveSkipsCount,
    flaggedStudents: studentsWithMultipleSkips
  });
};

/**
 * GET /activity/parent-report
 * Query: studentId
 */
export const getParentReport = async (req, res) => {
  const { studentId } = req.query;

  if (!studentId) {
    return res.status(400).json({ error: "Missing required query parameter: 'studentId' is required." });
  }

  let totalActivities = 0;
  let completedActivities = 0;
  let skippedActivities = 0;
  let completionRate = 0;
  let skipRate = 0;
  let weeklyTrends = [];
  let monthlyTrends = [];
  let alerts = [];

  let sessions = [];

  if (isMongoConnected()) {
    try {
      sessions = await ActivitySessionModel.find({ studentId }).sort({ assignedAt: 1 });
    } catch (err) {
      console.error('Mongo get parent report sessions failed:', err);
    }
  } else {
    const db = readLocalDB();
    sessions = db.sessions.filter(s => s.studentId === studentId);
    sessions.sort((a, b) => new Date(a.assignedAt) - new Date(b.assignedAt));
  }

  totalActivities = sessions.length;
  completedActivities = sessions.filter(s => s.status === SESSION_STATUS.COMPLETED).length;
  skippedActivities = sessions.filter(s => s.status === SESSION_STATUS.SKIPPED).length;

  if (totalActivities > 0) {
    completionRate = parseFloat((completedActivities / totalActivities).toFixed(2));
    skipRate = parseFloat((skippedActivities / totalActivities).toFixed(2));
  }

  // 1. Weekly Trends (group by week)
  const weeksMap = {};
  sessions.forEach(s => {
    const date = new Date(s.assignedAt);
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekNo = Math.ceil(((date - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
    const weekStr = `${date.getFullYear()}-W${String(weekNo).padStart(2, '0')}`;
    
    if (!weeksMap[weekStr]) {
      weeksMap[weekStr] = { week: weekStr, assigned: 0, completed: 0, skipped: 0 };
    }
    weeksMap[weekStr].assigned += 1;
    if (s.status === SESSION_STATUS.COMPLETED) weeksMap[weekStr].completed += 1;
    if (s.status === SESSION_STATUS.SKIPPED) weeksMap[weekStr].skipped += 1;
  });
  weeklyTrends = Object.values(weeksMap).sort((a, b) => a.week.localeCompare(b.week));

  // 2. Monthly Trends (group by month)
  const monthsMap = {};
  sessions.forEach(s => {
    const date = new Date(s.assignedAt);
    const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!monthsMap[monthStr]) {
      monthsMap[monthStr] = { month: monthStr, assigned: 0, completed: 0, skipped: 0 };
    }
    monthsMap[monthStr].assigned += 1;
    if (s.status === SESSION_STATUS.COMPLETED) monthsMap[monthStr].completed += 1;
    if (s.status === SESSION_STATUS.SKIPPED) monthsMap[monthStr].skipped += 1;
  });
  monthlyTrends = Object.values(monthsMap).sort((a, b) => a.month.localeCompare(b.month));

  // 3. Alerts Generation & Integration hooks
  // Alert A: 3 Consecutive Skips
  let consecutiveSkips = 0;
  const recentSessions = [...sessions].sort((a, b) => new Date(b.assignedAt) - new Date(a.assignedAt));
  for (const s of recentSessions) {
    if (s.status === SESSION_STATUS.SKIPPED) {
      consecutiveSkips++;
    } else if (s.status === SESSION_STATUS.COMPLETED) {
      break;
    }
  }

  if (consecutiveSkips >= 3) {
    alerts.push({
      type: "CONSECUTIVE_SKIPS",
      title: "3 Consecutive Skips",
      message: `Your child has skipped the last ${consecutiveSkips} activity breaks. They might be finding them too challenging or lack interest.`,
      severity: "critical"
    });
    eventBus.publish('PARENT_ALERT_GENERATED', {
      studentId,
      alertType: 'CONSECUTIVE_SKIPS',
      message: `3 Consecutive Skips detected. Count: ${consecutiveSkips}`,
      severity: 'critical'
    });
  }

  // Alert A2: 10 Consecutive Skips (Excessive Skip Alert)
  if (consecutiveSkips >= 10) {
    alerts.push({
      type: "EXCESSIVE_SKIP_ALERT",
      title: "Excessive Activity Skips!",
      message: `Your child has consecutively skipped ${consecutiveSkips} activity breaks. FitFriend recommends introducing fun movement games to re-engage.`,
      severity: "critical"
    });
    eventBus.publish('PARENT_ALERT_GENERATED', {
      studentId,
      alertType: 'EXCESSIVE_SKIP_ALERT',
      message: `EXCESSIVE_SKIP_ALERT: Student has skipped ${consecutiveSkips} activities consecutively.`,
      severity: 'critical'
    });
  }

  // Alert B: Low Activity Participation
  if (totalActivities >= 3 && completionRate < 0.30) {
    alerts.push({
      type: "LOW_PARTICIPATION",
      title: "Low Activity Participation",
      message: `Activity break participation is low (only ${Math.round(completionRate * 100)}% completed). Try encouraging shorter stretching exercises first.`,
      severity: "warning"
    });
    eventBus.publish('PARENT_ALERT_GENERATED', {
      studentId,
      alertType: 'LOW_PARTICIPATION',
      message: `Low Activity Participation: ${Math.round(completionRate * 100)}%`,
      severity: 'warning'
    });
  }

  // Alert B2: Very Low Activity Level (Low Activity Alert)
  if (totalActivities >= 5 && completionRate < 0.15) {
    alerts.push({
      type: "LOW_ACTIVITY_ALERT",
      title: "Low Activity Warning",
      message: `Very low activity level detected (only ${Math.round(completionRate * 100)}% completed). A daily stretch routine is highly recommended.`,
      severity: "critical"
    });
    eventBus.publish('PARENT_ALERT_GENERATED', {
      studentId,
      alertType: 'LOW_ACTIVITY_ALERT',
      message: `LOW_ACTIVITY_ALERT: Very low activity level detected: ${Math.round(completionRate * 100)}%`,
      severity: 'critical'
    });
  }

  // Alert C: High Engagement Achievement
  if (completedActivities >= 5 && completionRate >= 0.80) {
    alerts.push({
      type: "HIGH_ENGAGEMENT",
      title: "High Engagement Achievement",
      message: `Super Explorer! Your child has completed ${completedActivities} breaks this month with an outstanding ${Math.round(completionRate * 100)}% completion rate!`,
      severity: "success"
    });
    eventBus.publish('PARENT_ALERT_GENERATED', {
      studentId,
      alertType: 'HIGH_ENGAGEMENT',
      message: `High Engagement Achievement. Completed: ${completedActivities}, Rate: ${Math.round(completionRate * 100)}%`,
      severity: 'success'
    });
  }

  // Math Integration: Load math.json database fallback data
  let mathData = {
    accuracy: 80,
    weakTopics: [],
    timePerQuestion: 12,
    progressTrend: '+10%',
    weeklyImprovement: '+5%',
    stars: 15,
    level: 1,
    badgesCount: 0
  };

  try {
    const mathDbFile = path.join(__dirname, '../../../data/math.json');
    if (fs.existsSync(mathDbFile)) {
      const raw = fs.readFileSync(mathDbFile, 'utf8');
      const math = JSON.parse(raw);
      
      const totalQ = math.totalQuestions || 0;
      const correctQ = math.correctQuestions || 0;
      
      mathData.accuracy = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 80;
      
      const topicMap = {
        'kg-counting': 'Counting Objects',
        'kg-shapes': 'Identifying Shapes',
        'kg-addition': 'Simple Addition',
        'g1-numbers': 'Numbers 1-100',
        'g1-ops': 'Addition & Subtraction',
        'g1-word-probs': 'Basic Word Problems',
        'g2-multi-basics': 'Multiplication Basics',
        'g2-div-basics': 'Division Basics',
        'g2-time': 'Time & Calendar',
        'g3-tables': 'Multiplication Tables',
        'g3-fractions': 'Fractions',
        'g3-measurement': 'Length & Weight',
        'g4-decimals': 'Decimals',
        'g4-geometry': 'Geometry Basics',
        'g4-logic-probs': 'Logic Word Problems'
      };
      
      mathData.weakTopics = (math.weakTopics || []).map(t => topicMap[t] || t);
      
      if (math.completedSessions && math.completedSessions.length > 0) {
        mathData.timePerQuestion = Math.max(5, Math.min(30, Math.round(15 - (math.completedSessions.length * 0.5))));
      } else {
        mathData.timePerQuestion = 12;
      }
      
      mathData.stars = math.stars || 15;
      mathData.level = math.level || 1;
      mathData.badgesCount = math.badges ? math.badges.length : 0;
      
      if (math.completedSessions && math.completedSessions.length > 1) {
        const firstScore = math.completedSessions[0].score / math.completedSessions[0].total;
        const lastScore = math.completedSessions[math.completedSessions.length - 1].score / math.completedSessions[math.completedSessions.length - 1].total;
        const diff = Math.round((lastScore - firstScore) * 100);
        mathData.progressTrend = diff >= 0 ? `+${diff}%` : `${diff}%`;
        mathData.weeklyImprovement = diff >= 0 ? `+${Math.round(diff * 0.4)}%` : `${Math.round(diff * 0.4)}%`;
      }
    }
  } catch (err) {
    console.error('Failed to load math progress for parent report:', err);
  }

  // Logic Integration: Load logic.json database fallback data
  let logicData = {
    accuracy: 82,
    weakTopics: [],
    timePerQuestion: 15,
    progressTrend: '+12%',
    weeklyImprovement: '+6%',
    stars: 20,
    level: 1,
    badgesCount: 0
  };

  try {
    const logicDbFile = path.join(__dirname, '../../../data/logic.json');
    if (fs.existsSync(logicDbFile)) {
      const raw = fs.readFileSync(logicDbFile, 'utf8');
      const logic = JSON.parse(raw);
      
      const totalQ = logic.totalQuestions || 0;
      const correctQ = logic.correctQuestions || 0;
      
      logicData.accuracy = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 82;
      
      const topicMap = {
        'kg-shapes': 'Shape Matching',
        'kg-colors': 'Color Patterns',
        'kg-memory': 'Emoji Memory',
        'kg-odd-out': 'Odd One Out',
        'g1-patterns': 'Pattern Continuation',
        'g1-riddles': 'Basic Puzzles',
        'g1-sequence': 'Sequence Ordering',
        'g1-matching': 'Memory Match Card',
        'g2-symbol-patterns': 'Symbol Patterns',
        'g2-sorting': 'Logical Sorting',
        'g2-directions': 'Direction Games',
        'g2-reasoning': 'Simple Puzzles',
        'g3-complex-patterns': 'Complex Patterns',
        'g3-missing-number': 'Missing Symbols',
        'g3-grid-logic': 'Grid Logic Puzzles',
        'g3-multi-step': 'Multi-Step Comparison',
        'g4-adv-puzzles': 'Advanced Riddles',
        'g4-deduction': 'Logical Deduction',
        'g4-strategy': 'Strategy Games',
        'g4-analytical': 'Analytical Reasoning'
      };
      
      logicData.weakTopics = (logic.weakTopics || []).map(t => topicMap[t] || t);
      
      if (logic.completedSessions && logic.completedSessions.length > 0) {
        logicData.timePerQuestion = Math.max(5, Math.min(30, Math.round(15 - (logic.completedSessions.length * 0.5))));
      } else {
        logicData.timePerQuestion = 15;
      }
      
      logicData.stars = logic.stars || 20;
      logicData.level = logic.level || 1;
      logicData.badgesCount = logic.badges ? logic.badges.length : 0;
      
      if (logic.completedSessions && logic.completedSessions.length > 1) {
        const firstScore = logic.completedSessions[0].score / logic.completedSessions[0].total;
        const lastScore = logic.completedSessions[logic.completedSessions.length - 1].score / logic.completedSessions[logic.completedSessions.length - 1].total;
        const diff = Math.round((lastScore - firstScore) * 100);
        logicData.progressTrend = diff >= 0 ? `+${diff}%` : `${diff}%`;
        logicData.weeklyImprovement = diff >= 0 ? `+${Math.round(diff * 0.4)}%` : `${Math.round(diff * 0.4)}%`;
      }
    }
  } catch (err) {
    console.error('Failed to load logic progress for parent report:', err);
  }

  // Publish Parent Dashboard Update Hook
  const metrics = {
    totalActivities,
    completedActivities,
    skippedActivities,
    completionRate,
    skipRate,
    weeklyTrends,
    monthlyTrends,
    alerts,
    math: mathData,
    logic: logicData
  };

  eventBus.publish('PARENT_DASHBOARD_UPDATE', {
    studentId,
    metrics
  });

  res.json({
    success: true,
    studentId,
    ...metrics
  });
};

/**
 * GET /activity/teacher-analytics
 * Query: grade (optional)
 */
export const getTeacherAnalytics = async (req, res) => {
  const { grade } = req.query;

  let classParticipation = 0;
  let gradeParticipation = [];
  let activityTrends = [];
  let mostSkippedActivities = [];
  let mostCompletedActivities = [];
  let studentEngagementScores = [];

  let sessions = [];
  let skips = [];
  let students = [];

  if (isMongoConnected()) {
    try {
      const filter = grade ? { gradeAtSession: grade } : {};
      sessions = await ActivitySessionModel.find(filter);
      
      const skipFilter = grade ? { gradeAtSkip: grade } : {};
      skips = await ActivitySkipModel.find(skipFilter);

      const studentFilter = grade ? { grade: grade } : {};
      students = await StudentModel.find(studentFilter);
    } catch (err) {
      console.error('Mongo get teacher analytics failed:', err);
    }
  } else {
    const db = readLocalDB();
    sessions = db.sessions;
    if (grade) {
      sessions = sessions.filter(s => s.gradeAtSession === grade);
    }
    
    skips = db.skips;
    if (grade) {
      skips = skips.filter(sk => sk.gradeAtSkip === grade);
    }

    students = Object.values(db.students);
    if (grade) {
      students = students.filter(st => st.grade === grade);
    }
  }

  // 1. Class Participation
  const totalAssigned = sessions.length;
  const totalCompleted = sessions.filter(s => s.status === SESSION_STATUS.COMPLETED).length;
  if (totalAssigned > 0) {
    classParticipation = Math.round((totalCompleted / totalAssigned) * 100);
  }

  // 2. Grade Participation (KG to Grade 6)
  const gradeMap = {};
  ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'].forEach(g => {
    gradeMap[g] = { grade: g, assigned: 0, completed: 0, skipped: 0 };
  });

  let allSessions = [];
  if (isMongoConnected()) {
    try {
      allSessions = await ActivitySessionModel.find({});
    } catch (err) {
      console.error(err);
    }
  } else {
    const db = readLocalDB();
    allSessions = db.sessions;
  }

  allSessions.forEach(s => {
    const g = s.gradeAtSession;
    if (gradeMap[g]) {
      gradeMap[g].assigned += 1;
      if (s.status === SESSION_STATUS.COMPLETED) gradeMap[g].completed += 1;
      if (s.status === SESSION_STATUS.SKIPPED) gradeMap[g].skipped += 1;
    }
  });
  gradeParticipation = Object.values(gradeMap);

  // 3. Activity Trends (Group by date)
  const dateMap = {};
  sessions.forEach(s => {
    const date = new Date(s.assignedAt).toISOString().split('T')[0];
    if (!dateMap[date]) {
      dateMap[date] = { date, assigned: 0, completed: 0, skipped: 0 };
    }
    dateMap[date].assigned += 1;
    if (s.status === SESSION_STATUS.COMPLETED) dateMap[date].completed += 1;
    if (s.status === SESSION_STATUS.SKIPPED) dateMap[date].skipped += 1;
  });
  activityTrends = Object.values(dateMap).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 15);

  // 4. Most Completed Activities
  const completedCounts = {};
  sessions.forEach(s => {
    if (s.status === SESSION_STATUS.COMPLETED) {
      completedCounts[s.activityId] = (completedCounts[s.activityId] || 0) + 1;
    }
  });
  mostCompletedActivities = Object.keys(completedCounts).map(id => {
    const act = DEFAULT_ACTIVITIES.find(a => a.activityId === id) || DEFAULT_ACTIVITIES[0];
    return {
      activityId: id,
      title: act ? act.title : id,
      emoji: act ? act.emoji : "🏃",
      category: act ? act.category : "unknown",
      count: completedCounts[id]
    };
  }).sort((a, b) => b.count - a.count).slice(0, 5);

  // 5. Most Skipped Activities
  const skippedCounts = {};
  sessions.forEach(s => {
    if (s.status === SESSION_STATUS.SKIPPED) {
      skippedCounts[s.activityId] = (skippedCounts[s.activityId] || 0) + 1;
    }
  });
  mostSkippedActivities = Object.keys(skippedCounts).map(id => {
    const act = DEFAULT_ACTIVITIES.find(a => a.activityId === id) || DEFAULT_ACTIVITIES[0];
    return {
      activityId: id,
      title: act ? act.title : id,
      emoji: act ? act.emoji : "🏃",
      category: act ? act.category : "unknown",
      count: skippedCounts[id]
    };
  }).sort((a, b) => b.count - a.count).slice(0, 5);

  // 6. Student Engagement Scores
  const studentSessions = {};
  sessions.forEach(s => {
    if (!studentSessions[s.studentId]) {
      studentSessions[s.studentId] = [];
    }
    studentSessions[s.studentId].push(s);
  });

  students.forEach(st => {
    const sId = st.studentId;
    const sList = studentSessions[sId] || [];
    const assigned = sList.length;
    const completed = sList.filter(s => s.status === SESSION_STATUS.COMPLETED).length;
    let score = 0;
    if (assigned > 0) {
      score = Math.round((completed / assigned) * 100);
    }
    studentEngagementScores.push({
      studentId: sId,
      displayName: st.displayName,
      completed,
      assigned,
      engagementScore: score
    });
  });

  studentEngagementScores.sort((a, b) => b.engagementScore - a.engagementScore);

  // Math Integration: Load math.json database fallback data for teacher classroom metrics
  let mathAnalytics = {
    classPerformance: 82,
    topicDifficulty: [
      { topicId: 'g3-fractions', name: 'Fractions', struggleRate: 'High' },
      { topicId: 'g4-decimals', name: 'Decimals', struggleRate: 'Medium' },
      { topicId: 'g2-time', name: 'Time & Calendar', struggleRate: 'Low' }
    ],
    studentRankings: [
      { name: 'Sammy Sparks', accuracy: 80, speedSeconds: 12, stars: 15 },
      { name: 'Alex Volt', accuracy: 88, speedSeconds: 12, stars: 30 },
      { name: 'Clara Circuit', accuracy: 82, speedSeconds: 15, stars: 25 },
      { name: 'Leo Ohm', accuracy: 75, speedSeconds: 22, stars: 15 }
    ],
    commonMistakes: [
      { topic: 'Fractions', mistake: 'Confuses numerator (top) with denominator (bottom)', count: 8 },
      { topic: 'Decimals', mistake: 'Incorrect decimal alignment during addition', count: 5 },
      { topic: 'Shapes', mistake: 'Confuses Pentagon with Hexagon', count: 3 }
    ]
  };

  try {
    const mathDbFile = path.join(__dirname, '../../../data/math.json');
    if (fs.existsSync(mathDbFile)) {
      const raw = fs.readFileSync(mathDbFile, 'utf8');
      const math = JSON.parse(raw);
      
      const totalQ = math.totalQuestions || 0;
      const correctQ = math.correctQuestions || 0;
      const accuracy = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 80;
      
      mathAnalytics.studentRankings = [
        { name: 'Sammy Sparks', accuracy, speedSeconds: 10, stars: math.stars || 15 },
        { name: 'Alex Volt', accuracy: 88, speedSeconds: 12, stars: 30 },
        { name: 'Clara Circuit', accuracy: 82, speedSeconds: 15, stars: 25 },
        { name: 'Leo Ohm', accuracy: 75, speedSeconds: 22, stars: 15 }
      ];
      
      mathAnalytics.studentRankings.sort((a, b) => b.stars - a.stars);
      
      mathAnalytics.classPerformance = Math.round(
        mathAnalytics.studentRankings.reduce((sum, s) => sum + s.accuracy, 0) / mathAnalytics.studentRankings.length
      );
      
      if (math.weakTopics && math.weakTopics.length > 0) {
        const topicMap = {
          'kg-counting': 'Counting Objects',
          'kg-shapes': 'Identifying Shapes',
          'kg-addition': 'Simple Addition',
          'g1-numbers': 'Numbers 1-100',
          'g1-ops': 'Addition & Subtraction',
          'g1-word-probs': 'Basic Word Problems',
          'g2-multi-basics': 'Multiplication Basics',
          'g2-div-basics': 'Division Basics',
          'g2-time': 'Time & Calendar',
          'g3-tables': 'Multiplication Tables',
          'g3-fractions': 'Fractions',
          'g3-measurement': 'Length & Weight',
          'g4-decimals': 'Decimals',
          'g4-geometry': 'Geometry Basics',
          'g4-logic-probs': 'Logic Word Problems'
        };
        
        mathAnalytics.topicDifficulty = math.weakTopics.map(t => ({
          topicId: t,
          name: topicMap[t] || t,
          struggleRate: 'High'
        }));
        
        if (mathAnalytics.topicDifficulty.length < 3) {
          mathAnalytics.topicDifficulty.push(
            { topicId: 'g3-fractions', name: 'Fractions', struggleRate: 'Medium' },
            { topicId: 'g4-decimals', name: 'Decimals', struggleRate: 'Low' }
          );
        }
      }
    }
  } catch (err) {
    console.error('Failed to load math progress for teacher analytics:', err);
  }

  // Logic Integration: Load logic.json database fallback data for teacher classroom metrics
  let logicAnalytics = {
    classPerformance: 85,
    topicDifficulty: [
      { topicId: 'g3-grid-logic', name: 'Grid Logic Puzzles', struggleRate: 'High' },
      { topicId: 'g4-deduction', name: 'Logical Deduction', struggleRate: 'Medium' },
      { topicId: 'g2-directions', name: 'Direction Games', struggleRate: 'Low' }
    ],
    studentRankings: [
      { name: 'Sammy Sparks', accuracy: 82, speedSeconds: 15, stars: 20 },
      { name: 'Alex Volt', accuracy: 90, speedSeconds: 11, stars: 40 },
      { name: 'Clara Circuit', accuracy: 85, speedSeconds: 13, stars: 30 },
      { name: 'Leo Ohm', accuracy: 70, speedSeconds: 20, stars: 15 }
    ]
  };

  try {
    const logicDbFile = path.join(__dirname, '../../../data/logic.json');
    if (fs.existsSync(logicDbFile)) {
      const raw = fs.readFileSync(logicDbFile, 'utf8');
      const logic = JSON.parse(raw);
      
      const totalQ = logic.totalQuestions || 0;
      const correctQ = logic.correctQuestions || 0;
      const accuracy = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 82;
      
      logicAnalytics.studentRankings = [
        { name: 'Sammy Sparks', accuracy, speedSeconds: 10, stars: logic.stars || 20 },
        { name: 'Alex Volt', accuracy: 90, speedSeconds: 11, stars: 40 },
        { name: 'Clara Circuit', accuracy: 85, speedSeconds: 13, stars: 30 },
        { name: 'Leo Ohm', accuracy: 70, speedSeconds: 20, stars: 15 }
      ];
      
      logicAnalytics.studentRankings.sort((a, b) => b.stars - a.stars);
      
      logicAnalytics.classPerformance = Math.round(
        logicAnalytics.studentRankings.reduce((sum, s) => sum + s.accuracy, 0) / logicAnalytics.studentRankings.length
      );
      
      if (logic.weakTopics && logic.weakTopics.length > 0) {
        const topicMap = {
          'kg-shapes': 'Shape Matching',
          'kg-colors': 'Color Patterns',
          'kg-memory': 'Emoji Memory',
          'kg-odd-out': 'Odd One Out',
          'g1-patterns': 'Pattern Continuation',
          'g1-riddles': 'Basic Puzzles',
          'g1-sequence': 'Sequence Ordering',
          'g1-matching': 'Memory Match Card',
          'g2-symbol-patterns': 'Symbol Patterns',
          'g2-sorting': 'Logical Sorting',
          'g2-directions': 'Direction Games',
          'g2-reasoning': 'Simple Puzzles',
          'g3-complex-patterns': 'Complex Patterns',
          'g3-missing-number': 'Missing Symbols',
          'g3-grid-logic': 'Grid Logic Puzzles',
          'g3-multi-step': 'Multi-Step Comparison',
          'g4-adv-puzzles': 'Advanced Riddles',
          'g4-deduction': 'Logical Deduction',
          'g4-strategy': 'Strategy Games',
          'g4-analytical': 'Analytical Reasoning'
        };
        
        logicAnalytics.topicDifficulty = logic.weakTopics.map(t => ({
          topicId: t,
          name: topicMap[t] || t,
          struggleRate: 'High'
        }));
        
        if (logicAnalytics.topicDifficulty.length < 3) {
          logicAnalytics.topicDifficulty.push(
            { topicId: 'g3-grid-logic', name: 'Grid Logic Puzzles', struggleRate: 'Medium' },
            { topicId: 'g4-deduction', name: 'Logical Deduction', struggleRate: 'Low' }
          );
        }
      }
    }
  } catch (err) {
    console.error('Failed to load logic progress for teacher analytics:', err);
  }

  const analytics = {
    classParticipation,
    gradeParticipation,
    activityTrends,
    mostSkippedActivities,
    mostCompletedActivities,
    studentEngagementScores,
    math: mathAnalytics,
    logic: logicAnalytics
  };

  // Publish Integration Hooks
  eventBus.publish('TEACHER_REPORT_UPDATE', {
    grade: grade || 'All Grades',
    analytics
  });

  eventBus.publish('CLASS_ANALYTICS_UPDATE', {
    grade: grade || 'All Grades',
    analytics
  });

  res.json({
    success: true,
    grade: grade || 'All Grades',
    ...analytics
  });
};

/**
 * POST /activity/rewards/grant
 * Exposes API for Main EduCare Rewards Engine.
 */
export const grantReward = async (req, res) => {
  const { studentId, grade, sourceModule, rewardType, starsEarned, badgeId, badgeLabel, badgeIcon } = req.body;

  if (!studentId || !sourceModule || !rewardType) {
    return res.status(400).json({ error: "Missing required fields: 'studentId', 'sourceModule', and 'rewardType' are required." });
  }

  const studentGrade = grade || 'Grade 2';
  const type = rewardType.toUpperCase();
  const rewardId = new mongoose.Types.ObjectId().toString();

  if (isMongoConnected()) {
    try {
      const student = await getOrCreateMongoStudent(studentId, studentGrade);
      
      let badgeEarned = null;
      if (type === REWARD_TYPES.BADGE || badgeId) {
        badgeEarned = badgeId || 'badge_generic';
        if (student.badges && !student.badges.includes(badgeEarned)) {
          student.badges.push(badgeEarned);
          student.stats.totalBadgesEarned += 1;
        }
      }

      const stars = typeof starsEarned === 'number' ? starsEarned : (type === REWARD_TYPES.STARS ? 5 : 0);
      student.stats.totalStarsEarned += stars;
      await student.save();

      await ActivityRewardModel.create({
        studentId,
        sourceModule,
        gradeAtReward: studentGrade,
        rewardType: type,
        rewardTrigger: REWARD_TRIGGERS.SYSTEM_GRANT,
        starsEarned: stars,
        badgeId: badgeEarned,
        badgeLabel: badgeLabel || (badgeEarned ? 'Granted Badge' : null),
        badgeIcon: badgeIcon || (badgeEarned ? '🏆' : null),
        eventId: rewardId
      });

      // Emit reward events
      eventBus.publish('REWARD_GRANTED', {
        studentId,
        rewardType: type,
        amount: stars,
        source: 'REWARD_ENGINE',
        badgeId: badgeEarned
      });

      if (badgeEarned) {
        eventBus.publish('BADGE_UNLOCKED', {
          studentId,
          badgeId: badgeEarned,
          badgeLabel: badgeLabel || 'Granted Badge',
          badgeIcon: badgeIcon || '🏆',
          source: 'REWARD_ENGINE'
        });
      }

      const totalStars = await getRewardPoints(studentId, sourceModule);

      return res.json({
        success: true,
        rewardId,
        studentId,
        stars: totalStars,
        badges: student.badges || []
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  } else {
    // Local DB Fallback
    const db = readLocalDB();
    const student = getOrCreateLocalStudent(db, studentId, studentGrade);

    let badgeEarned = null;
    if (type === REWARD_TYPES.BADGE || badgeId) {
      badgeEarned = badgeId || 'badge_generic';
      if (!student.badges) student.badges = [];
      if (!student.badges.includes(badgeEarned)) {
        student.badges.push(badgeEarned);
        student.stats.totalBadgesEarned += 1;
      }
    }

    const stars = typeof starsEarned === 'number' ? starsEarned : (type === REWARD_TYPES.STARS ? 5 : 0);
    student.stats.totalStarsEarned += stars;

    const rewardObj = {
      _id: rewardId,
      studentId,
      sourceModule,
      gradeAtReward: studentGrade,
      rewardType: type,
      rewardTrigger: REWARD_TRIGGERS.SYSTEM_GRANT,
      starsEarned: stars,
      badgeId: badgeEarned,
      badgeLabel: badgeLabel || (badgeEarned ? 'Granted Badge' : null),
      badgeIcon: badgeIcon || (badgeEarned ? '🏆' : null),
      createdAt: new Date().toISOString(),
      isVoided: false
    };
    db.rewards.push(rewardObj);
    writeLocalDB(db);

    // Emit reward events
    eventBus.publish('REWARD_GRANTED', {
      studentId,
      rewardType: type,
      amount: stars,
      source: 'REWARD_ENGINE',
      badgeId: badgeEarned
    });

    if (badgeEarned) {
      eventBus.publish('BADGE_UNLOCKED', {
        studentId,
        badgeId: badgeEarned,
        badgeLabel: badgeLabel || 'Granted Badge',
        badgeIcon: badgeIcon || '🏆',
        source: 'REWARD_ENGINE'
      });
    }

    const totalStars = await getRewardPoints(studentId, sourceModule);

    return res.json({
      success: true,
      rewardId,
      studentId,
      stars: totalStars,
      badges: student.badges || []
    });
  }
};

/**
 * GET /activity/rewards
 * Fetch student stars and badges list.
 */
export const getRewardsList = async (req, res) => {
  const { studentId } = req.query;

  if (!studentId) {
    return res.status(400).json({ error: "Missing required query parameter: 'studentId' is required." });
  }

  if (isMongoConnected()) {
    try {
      const student = await StudentModel.findOne({ studentId });
      const rewards = await ActivityRewardModel.find({ studentId, isVoided: false });
      const badges = rewards.filter(r => r.rewardType === 'BADGE' || r.badgeId).map(r => ({
        badgeId: r.badgeId,
        badgeLabel: r.badgeLabel || 'Earned Badge',
        badgeIcon: r.badgeIcon || '🏆',
        unlockedAt: r.createdAt
      }));

      // Deduplicate badges
      const uniqueBadges = [];
      const seen = new Set();
      badges.forEach(b => {
        if (b.badgeId && !seen.has(b.badgeId)) {
          seen.add(b.badgeId);
          uniqueBadges.push(b);
        }
      });

      const totalStars = student ? student.stats.totalStarsEarned : 15;

      return res.json({
        success: true,
        studentId,
        totalStars,
        badges: uniqueBadges
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    const db = readLocalDB();
    const student = db.students[studentId];
    const studentRewards = db.rewards.filter(r => r.studentId === studentId && !r.isVoided);
    const badges = studentRewards.filter(r => r.rewardType === 'BADGE' || r.badgeId).map(r => ({
      badgeId: r.badgeId,
      badgeLabel: r.badgeLabel || 'Earned Badge',
      badgeIcon: r.badgeIcon || '🏆',
      unlockedAt: r.createdAt
    }));

    const uniqueBadges = [];
    const seen = new Set();
    badges.forEach(b => {
      if (b.badgeId && !seen.has(b.badgeId)) {
        seen.add(b.badgeId);
        uniqueBadges.push(b);
      }
    });

    const totalStars = student ? student.stats.totalStarsEarned : 15;

    return res.json({
      success: true,
      studentId,
      totalStars,
      badges: uniqueBadges
    });
  }
};

// Initialize Cross Application Trigger Engine
initializeTriggerEngine();

```

---

### `backend/modules/physical-activity/controllers/fitFriendController.js`
**Function:** Handles incoming HTTP requests, processes business logic, and sends responses.

```js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import mongoose from 'mongoose';

// Import Models & Constants
import {
  StudentModel,
  ActivityModel,
  ActivitySessionModel,
  ActivitySkipModel,
  ActivityRewardModel,
  ActivityAnalyticsModel,
  FitFriendChatModel,
  SESSION_STATUS,
  SKIP_REASONS,
  REWARD_TYPES,
  REWARD_TRIGGERS
} from '../models/index.js';

import { DEFAULT_ACTIVITIES } from '../data/activities.js';
import { eventBus } from '../../../shared/eventBus.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fallback Local File Database setup
const DB_DIR = path.join(__dirname, '../../../data');
const DB_FILE = path.join(DB_DIR, 'physical_activity.json');

// Future integration hooks references
// FITFRIEND_AI
// MAIN_INSTRUCTOR_AI
// ENGLISH_MODULE
// MATH_MODULE
// STEM_MODULE
// LOGIC_MODULE
// MOOD_ENGINE
// REWARD_ENGINE
// PARENT_DASHBOARD
// TEACHER_DASHBOARD
// SCIENCE_MODULE
// CODING_MODULE
// ROBOTICS_MODULE
// ARVR_MODULE

const readLocalDB = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return { students: {}, sessions: [], skips: [], rewards: [], analytics: [], fitfriend_chats: [] };
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { students: {}, sessions: [], skips: [], rewards: [], analytics: [], fitfriend_chats: [] };
  }
};

const writeLocalDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    return false;
  }
};

const isMongoConnected = () => {
  return global.mongoConnected === true;
};

// Helper: Check for academic keywords to redirect to Main Instructor AI (Sparky)
const checkForAcademicRedirect = (msg) => {
  const query = msg.toLowerCase();
  const mathKeywords = ['math', 'algebra', 'addition', 'subtraction', 'multiplication', 'division', 'fraction', 'number', 'count', 'geometry', 'plus', 'minus', 'solve', 'equation'];
  const englishKeywords = ['english', 'spell', 'grammar', 'vocabulary', 'read', 'write', 'alphabet', 'letter', 'sentence', 'noun', 'verb', 'adjective', 'pronounce'];
  const stemKeywords = ['circuit', 'led', 'resistor', 'battery', 'voltage', 'current', 'wire', 'switch', 'stem', 'science', 'physics', 'chemistry', 'biology', 'diode', 'transistor'];
  const logicKeywords = ['puzzle', 'logic', 'problem solving', 'code', 'coding', 'robot', 'robotics', 'programming', 'scratch'];

  const matches = (list) => list.some(word => query.includes(word));

  if (matches(mathKeywords) || matches(englishKeywords) || matches(stemKeywords) || matches(logicKeywords)) {
    return {
      redirect: true,
      reply: "Hi there! I'm **FitFriend AI**, your active movement coach! 🏃‍♂️ I only teach active exercise, stretching, and healthy habits. For help with math, reading, science, or circuits, please chat with **Sparky, the Main Instructor AI**! 🤖"
    };
  }
  return { redirect: false };
};

// Heuristic activity matching based on grade-wise support definitions
const getGradeWiseActivity = (grade, query = '') => {
  const q = query.toLowerCase();
  let category = 'cardio';

  // Determine category based on keywords
  if (q.includes('stretch') || q.includes('reach') || q.includes('flex')) category = 'stretching';
  else if (q.includes('yoga') || q.includes('pose') || q.includes('tree') || q.includes('calm')) category = 'yoga';
  else if (q.includes('balance') || q.includes('foot') || q.includes('stand')) category = 'balance';
  else if (q.includes('brain') || q.includes('focus') || q.includes('mind')) category = 'focus';
  else if (q.includes('game') || q.includes('play') || q.includes('simon')) category = 'coordination';

  let activities = DEFAULT_ACTIVITIES.filter(a => a.gradeLevels.includes(grade));
  if (activities.length === 0) activities = DEFAULT_ACTIVITIES;

  // Attempt matching by category
  let matches = activities.filter(a => a.category === category);
  if (matches.length === 0) {
    matches = activities;
  }

  // Pick one randomly
  return matches[Math.floor(Math.random() * matches.length)];
};

/**
 * POST /activity/fitfriend/chat
 */
export const chatWithFitFriend = async (req, res) => {
  const { studentId, message, grade, moodScore, attentionScore, completedModule } = req.body;

  if (!studentId || !message) {
    return res.status(400).json({ error: "Missing required fields: 'studentId' and 'message' are required." });
  }

  const studentGrade = grade || 'KG';
  
  // 1. Guard check for academic content
  const redirectCheck = checkForAcademicRedirect(message);
  if (redirectCheck.redirect) {
    return res.json({
      success: true,
      reply: redirectCheck.reply,
      redirectToTutor: true,
      tutorMood: 'puzzled'
    });
  }

  // 2. Select grade-wise active break
  const activity = getGradeWiseActivity(studentGrade, message);
  
  let encouragementMessage = "Awesome job! Let's get moving! 🚀";
  if (moodScore < 40) {
    encouragementMessage = "Feeling a bit tired? Let's do a gentle warm-up break to wake up your body! ☀️";
  } else if (attentionScore < 50) {
    encouragementMessage = "Time to refocus! Try this quick balance challenge to boost your brain! 🧠";
  }

  const output = {
    recommendedActivity: {
      activityId: activity.activityId,
      title: activity.title,
      description: activity.description,
      emoji: activity.emoji,
      category: activity.category,
      durationSeconds: activity.durationSeconds,
      instructions: activity.instructions
    },
    difficulty: studentGrade === 'KG' ? 'Very Easy' : (studentGrade === 'Grade 1' ? 'Easy' : 'Medium'),
    duration: activity.durationSeconds,
    instructions: activity.instructions.map(i => i.description),
    rewardPoints: 5,
    encouragementMessage
  };

  // 3. Save Chat Log
  if (isMongoConnected()) {
    try {
      // Save student message
      await FitFriendChatModel.create({
        studentId,
        message,
        sender: 'student',
        grade: studentGrade
      });
      // Save AI reply
      await FitFriendChatModel.create({
        studentId,
        message: encouragementMessage + ` How about trying the "${activity.title}" break?`,
        sender: 'fitfriend',
        grade: studentGrade,
        recommendedActivityId: activity.activityId
      });

      // Create an activity session automatically on assignment
      const session = await ActivitySessionModel.create({
        studentId,
        activityId: activity.activityId,
        sourceModule: completedModule || 'FITFRIEND_AI',
        gradeAtSession: studentGrade,
        status: SESSION_STATUS.ASSIGNED,
        plannedDurationSeconds: activity.durationSeconds,
        assignedBy: 'AI_TUTOR',
        assignedAt: new Date()
      });
      output.sessionId = session._id.toString();
    } catch (err) {
      console.error('Failed to log chat in MongoDB:', err);
    }
  } else {
    // Local JSON DB fallback
    const db = readLocalDB();
    if (!db.fitfriend_chats) db.fitfriend_chats = [];
    
    db.fitfriend_chats.push({
      _id: new mongoose.Types.ObjectId().toString(),
      studentId,
      message,
      sender: 'student',
      grade: studentGrade,
      timestamp: new Date().toISOString()
    });

    const sessionId = new mongoose.Types.ObjectId().toString();
    db.fitfriend_chats.push({
      _id: new mongoose.Types.ObjectId().toString(),
      studentId,
      message: encouragementMessage + ` How about trying the "${activity.title}" break?`,
      sender: 'fitfriend',
      grade: studentGrade,
      recommendedActivityId: activity.activityId,
      timestamp: new Date().toISOString()
    });

    db.sessions.push({
      _id: sessionId,
      studentId,
      activityId: activity.activityId,
      sourceModule: completedModule || 'FITFRIEND_AI',
      gradeAtSession: studentGrade,
      status: SESSION_STATUS.ASSIGNED,
      plannedDurationSeconds: activity.durationSeconds,
      assignedBy: 'AI_TUTOR',
      assignedAt: new Date().toISOString()
    });

    output.sessionId = sessionId;
    writeLocalDB(db);
  }

  // 4. Emit FitFriend API assigned event
  eventBus.publish('FIT_ACTIVITY_ASSIGNED', {
    studentId,
    activityId: activity.activityId,
    sessionId: output.sessionId,
    sourceModule: completedModule || 'FITFRIEND_AI',
    assignedAt: new Date().toISOString()
  });

  res.json({
    success: true,
    reply: `${encouragementMessage} Let's try the **${activity.title}** break!`,
    recommendedActivity: output.recommendedActivity,
    difficulty: output.difficulty,
    duration: output.duration,
    instructions: output.instructions,
    rewardPoints: output.rewardPoints,
    sessionId: output.sessionId
  });
};

/**
 * POST /activity/fitfriend/skip
 */
export const skipFitFriendActivity = async (req, res) => {
  const { studentId, sessionId, skipReason } = req.body;

  if (!studentId || !sessionId || !skipReason) {
    return res.status(400).json({ error: "Missing required fields: 'studentId', 'sessionId', and 'skipReason' are required." });
  }

  let sessionObj = null;
  let skipCount = 0;

  if (isMongoConnected()) {
    try {
      sessionObj = await ActivitySessionModel.findOne({ _id: sessionId, studentId });
      if (sessionObj) {
        sessionObj.status = SESSION_STATUS.SKIPPED;
        sessionObj.skippedAt = new Date();
        await sessionObj.save();

        await ActivitySkipModel.create({
          studentId,
          activityId: sessionObj.activityId,
          sessionId: sessionObj._id,
          sourceModule: sessionObj.sourceModule || 'FITFRIEND_AI',
          gradeAtSkip: sessionObj.gradeAtSession,
          skippedAt: new Date(),
          skipReason,
          skippedBy: 'STUDENT'
        });

        // Tally skips
        const skips = await ActivitySkipModel.find({ studentId }).sort({ skippedAt: -1 }).limit(15);
        skipCount = skips.length;
      }
    } catch (err) {
      console.error('Mongo skip action failed:', err);
    }
  }

  // File fallback
  if (!sessionObj) {
    const db = readLocalDB();
    const idx = db.sessions.findIndex(s => s._id === sessionId && s.studentId === studentId);
    if (idx !== -1) {
      sessionObj = db.sessions[idx];
      sessionObj.status = SESSION_STATUS.SKIPPED;
      sessionObj.skippedAt = new Date().toISOString();

      db.skips.push({
        _id: new mongoose.Types.ObjectId().toString(),
        studentId,
        activityId: sessionObj.activityId,
        sessionId: sessionObj._id,
        sourceModule: sessionObj.sourceModule || 'FITFRIEND_AI',
        gradeAtSkip: sessionObj.gradeAtSession,
        skippedAt: sessionObj.skippedAt,
        skipReason,
        skippedBy: 'STUDENT'
      });

      skipCount = db.skips.filter(sk => sk.studentId === studentId).length;
      writeLocalDB(db);
    }
  }

  if (!sessionObj) {
    return res.status(404).json({ error: "Session not found." });
  }

  // 1 Skip: Encourage
  let reply = "That's okay! We can move later. Stay active! 🌟";
  let offerShorter = false;
  let offerGame = false;

  // 3 Skips: Halve duration
  if (skipCount >= 3 && skipCount < 5) {
    reply = "Let's try a quicker break next time! I have customized a short 30-second breathing exercise for you. 🧘";
    offerShorter = true;
  }
  // 5 Skips: Suggest game
  else if (skipCount >= 5) {
    reply = "Let's play a fun movement game instead! How about a game of Simon Says? 🦘";
    offerGame = true;
  }

  // 10 Skips: Alert parent
  if (skipCount >= 10) {
    eventBus.publish('PARENT_ALERT_GENERATED', {
      studentId,
      alertType: 'EXCESSIVE_SKIP_ALERT',
      message: `EXCESSIVE_SKIP_ALERT: Student has skipped ${skipCount} activities consecutively.`,
      severity: 'critical'
    });
  }

  eventBus.publish('FIT_ACTIVITY_SKIPPED', {
    studentId,
    activityId: sessionObj.activityId,
    sessionId: sessionObj._id.toString(),
    skipCount,
    reason: skipReason,
    timestamp: new Date().toISOString()
  });

  res.json({
    success: true,
    reply,
    skipCount,
    offerShorter,
    offerGame
  });
};

```

---

### `backend/modules/physical-activity/data/activities.js`
**Function:** Static mock data or curriculum definitions.

```js
/**
 * Upgraded activities catalog seed data for the Physical Activity Engine.
 * Fully Grade-Aware, Subject-Aware, and Mood-Aware.
 * Includes Grade-wise (KG to Grade 4) and Subject-wise (English, Math, STEM, Logic) frameworks.
 */

export const DEFAULT_ACTIVITIES = [
  // ==========================================
  // KG (Grade-wise) - Very Easy, 30s - 1m
  // ==========================================
  {
    activityId: "act_kg_jump_3",
    title: "Jump 3 Times",
    description: "Boing! Stand up tall and jump as high as you can three times!",
    emoji: "🦘",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["energize", "fun"],
    gradeLevels: ["KG"],
    durationSeconds: 30,
    instructions: [
      {
        stepNumber: 1,
        description: "Stand up straight and bend your knees.",
        durationSeconds: 10,
        voiceCueText: "Get ready to jump!"
      },
      {
        stepNumber: 2,
        description: "Jump up and land softly on your feet. Repeat 3 times: One! Two! Three!",
        durationSeconds: 20,
        voiceCueText: "Jump! One! Two! Three! Land softly like a frog!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_touch_red",
    title: "Touch Something Red",
    description: "Look around your room. Can you find and touch something red?",
    emoji: "🔴",
    sourceModule: "AI_TUTOR",
    category: "color recognition",
    moodTags: ["fun", "focus"],
    gradeLevels: ["KG"],
    durationSeconds: 45,
    instructions: [
      {
        stepNumber: 1,
        description: "Look around! Look for a red toy, a red pencil, or red clothes.",
        durationSeconds: 20,
        voiceCueText: "Look around you, search for something red!"
      },
      {
        stepNumber: 2,
        description: "Walk over, gently touch the red item, and return to your seat.",
        durationSeconds: 25,
        voiceCueText: "Touch the red item and say 'Red' out loud!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_clap_5",
    title: "Clap 5 Times",
    description: "Clap your hands! High, low, and all around. Count to five!",
    emoji: "👏",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["fun", "energize"],
    gradeLevels: ["KG"],
    durationSeconds: 30,
    instructions: [
      {
        stepNumber: 1,
        description: "Reach your hands up high and clap 5 times slowly while counting out loud.",
        durationSeconds: 30,
        voiceCueText: "Clap with me! One, two, three, four, five!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_walk_elephant",
    title: "Walk Like an Elephant",
    description: "Stomp, stomp! Interlock your hands to make a trunk and stomp around.",
    emoji: "🐘",
    sourceModule: "AI_TUTOR",
    category: "animal movements",
    moodTags: ["fun", "energize"],
    gradeLevels: ["KG"],
    durationSeconds: 60,
    instructions: [
      {
        stepNumber: 1,
        description: "Clasp your hands together and let your arms swing in front of you like a trunk.",
        durationSeconds: 20,
        voiceCueText: "Make a trunk with your arms!"
      },
      {
        stepNumber: 2,
        description: "Take big heavy steps around the room, swinging your trunk and stomping gently.",
        durationSeconds: 40,
        voiceCueText: "Stomp! Walk like a big happy elephant!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_stretch_tree",
    title: "Stretch Like a Tree",
    description: "Stand tall and reach for the sunlight like a beautiful growing tree.",
    emoji: "🌳",
    sourceModule: "AI_TUTOR",
    category: "fun exercises",
    moodTags: ["calm", "focus"],
    gradeLevels: ["KG"],
    durationSeconds: 40,
    instructions: [
      {
        stepNumber: 1,
        description: "Reach your branches (arms) high up to the sky. Take a deep breath.",
        durationSeconds: 20,
        voiceCueText: "Reach up tall, breathe in the sun!"
      },
      {
        stepNumber: 2,
        description: "Sway gently in the breeze from side to side. Keep your feet planted like roots.",
        durationSeconds: 20,
        voiceCueText: "Gently sway side to side in the wind."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_touch_circle",
    title: "Touch a Circle Shape",
    description: "Can you find a round, circular shape in your room and touch it?",
    emoji: "⭕",
    sourceModule: "AI_TUTOR",
    category: "shape recognition",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG"],
    durationSeconds: 50,
    instructions: [
      {
        stepNumber: 1,
        description: "Look for something round like a clock, a coin, a lid, or a wheel.",
        durationSeconds: 25,
        voiceCueText: "Look for something that is a circle!"
      },
      {
        stepNumber: 2,
        description: "Go touch it, trace the circle with your finger, and come back.",
        durationSeconds: 25,
        voiceCueText: "Trace the circle shape and trace it in the air too!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_find_blue",
    title: "Find a Blue Object",
    description: "Search search search! Find something blue and point to it.",
    emoji: "🔵",
    sourceModule: "AI_TUTOR",
    category: "color recognition",
    moodTags: ["fun", "focus"],
    gradeLevels: ["KG"],
    durationSeconds: 45,
    instructions: [
      {
        stepNumber: 1,
        description: "Scan your surroundings for anything blue: a book, a shirt, or a block.",
        durationSeconds: 25,
        voiceCueText: "Find something blue like the sky!"
      },
      {
        stepNumber: 2,
        description: "Touch the blue item and do a little wiggle dance!",
        durationSeconds: 20,
        voiceCueText: "Nice! Do a happy wiggle!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },
  {
    activityId: "act_kg_hop_bunny",
    title: "Hop Like a Bunny",
    description: "Put your bunny ears up and hop around like a little rabbit in a garden.",
    emoji: "🐰",
    sourceModule: "AI_TUTOR",
    category: "animal movements",
    moodTags: ["fun", "energize"],
    gradeLevels: ["KG"],
    durationSeconds: 50,
    instructions: [
      {
        stepNumber: 1,
        description: "Hold your hands on your head like bunny ears. Bend your knees.",
        durationSeconds: 15,
        voiceCueText: "Put your bunny ears up!"
      },
      {
        stepNumber: 2,
        description: "Make small, quick hops around, sniffing the air like a curious bunny.",
        durationSeconds: 35,
        voiceCueText: "Hop hop hop! Hop around the garden!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 1, // Very Easy
    subjectTag: null
  },

  // ==========================================
  // Grade 1 - Easy, 1 - 2 min
  // ==========================================
  {
    activityId: "act_g1_jumping_jacks",
    title: "Jumping Jacks",
    description: "Clap and jump! Get your heart pumping with standard jumping jacks.",
    emoji: "⚡",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["energize", "fun"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 75,
    instructions: [
      {
        stepNumber: 1,
        description: "Stand with feet together, hands at your sides.",
        durationSeconds: 15,
        voiceCueText: "Stand straight, arms down."
      },
      {
        stepNumber: 2,
        description: "Jump your feet out while bringing your hands together above your head. Jump back.",
        durationSeconds: 60,
        voiceCueText: "Jump out, arms up! Jump in, arms down! Keep going!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_energy_hero",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },
  {
    activityId: "act_g1_one_foot",
    title: "One Foot Balance",
    description: "Can you balance on one foot like a flamingo? A core balance challenge.",
    emoji: "🦵",
    sourceModule: "AI_TUTOR",
    category: "balance",
    moodTags: ["calm", "focus"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 80,
    instructions: [
      {
        stepNumber: 1,
        description: "Lift your right foot off the ground. Place hands on hips. Hold for 30 seconds.",
        durationSeconds: 40,
        voiceCueText: "Lift one leg, keep your balance, look at a steady spot."
      },
      {
        stepNumber: 2,
        description: "Switch feet. Lift your left foot off the ground and hold for 30 seconds.",
        durationSeconds: 40,
        voiceCueText: "Now switch! Lift the other leg and balance."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },
  {
    activityId: "act_g1_find_3_red",
    title: "Find 3 Red Objects",
    description: "Search and point to 3 different red items in the room. Move quickly!",
    emoji: "🎒",
    sourceModule: "AI_TUTOR",
    category: "object recognition",
    moodTags: ["focus", "fun"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 90,
    instructions: [
      {
        stepNumber: 1,
        description: "Scan the room and point to red item 1, red item 2, and red item 3.",
        durationSeconds: 50,
        voiceCueText: "Point to three red things in your room. One! Two! Three!"
      },
      {
        stepNumber: 2,
        description: "March in place and count your findings.",
        durationSeconds: 40,
        voiceCueText: "March and say, 'I found three red things!'"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },
  {
    activityId: "act_g1_reach_sky",
    title: "Reach for the Sky",
    description: "Stretch up on your tippy-toes, reaching as high as you can to stretch your calves and back.",
    emoji: "🌤️",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["calm", "focus"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 65,
    instructions: [
      {
        stepNumber: 1,
        description: "Stand tall. Raise hands and lift your heels to stand on your toes.",
        durationSeconds: 30,
        voiceCueText: "Reach up high on your tippy-toes!"
      },
      {
        stepNumber: 2,
        description: "Relax, drop heels, and slowly fold forward to touch your shins.",
        durationSeconds: 35,
        voiceCueText: "Relax, bend down, and stretch your back."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },
  {
    activityId: "act_g1_dance_30s",
    title: "Dance for 30 Seconds",
    description: "Put on your dancing shoes! Bust out your favorite moves for 30 seconds straight.",
    emoji: "💃",
    sourceModule: "AI_TUTOR",
    category: "color activities",
    moodTags: ["fun", "energize"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 60,
    instructions: [
      {
        stepNumber: 1,
        description: "Shake out your limbs and get ready to groooooove!",
        durationSeconds: 20,
        voiceCueText: "Get loose! Music starting soon!"
      },
      {
        stepNumber: 2,
        description: "Dance, wiggle, and leap! Keep moving until the timer runs out.",
        durationSeconds: 40,
        voiceCueText: "Dance! Shake it! Twirl! Keep dancing!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_energy_hero",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },
  {
    activityId: "act_g1_hop_count",
    title: "Hop and Count",
    description: "Hop on one foot while counting to 10. Switch legs and repeat!",
    emoji: "🔢",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["energize", "fun"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 70,
    instructions: [
      {
        stepNumber: 1,
        description: "Hop on your right foot: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!",
        durationSeconds: 35,
        voiceCueText: "Hop on your right leg and count to 10!"
      },
      {
        stepNumber: 2,
        description: "Switch to your left foot and hop: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!",
        durationSeconds: 35,
        voiceCueText: "Switch legs, hop and count to 10!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },
  {
    activityId: "act_g1_touch_square",
    title: "Touch Square Objects",
    description: "Hunt for square shapes! Find something with four straight sides and touch it.",
    emoji: "🟪",
    sourceModule: "AI_TUTOR",
    category: "object recognition",
    moodTags: ["focus", "fun"],
    gradeLevels: ["Grade 1"],
    durationSeconds: 80,
    instructions: [
      {
        stepNumber: 1,
        description: "Search for squares: a book covers, a photo frame, or a cube box.",
        durationSeconds: 40,
        voiceCueText: "Find something square and touch it!"
      },
      {
        stepNumber: 2,
        description: "Perform 5 squatted jumps next to the square object.",
        durationSeconds: 40,
        voiceCueText: "Squat down and jump up 5 times!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 2, // Easy
    subjectTag: null
  },

  // ==========================================
  // Grade 2 - Easy-Medium, 2 - 3 min
  // ==========================================
  {
    activityId: "act_g2_simon_says",
    title: "Simon Says",
    description: "Follow the pattern of physical actions only when 'Simon Says'!",
    emoji: "🗣️",
    sourceModule: "AI_TUTOR",
    category: "memory",
    moodTags: ["fun", "focus"],
    gradeLevels: ["Grade 2"],
    durationSeconds: 130,
    instructions: [
      {
        stepNumber: 1,
        description: "Simon Says: Touch your ears. Simon Says: Stand on one foot.",
        durationSeconds: 45,
        voiceCueText: "Simon says: Touch your ears! Now stand on one foot! Did you do it? Good!"
      },
      {
        stepNumber: 2,
        description: "Simon Says: Jump twice. Touch your nose (Don't do it! Simon didn't say!).",
        durationSeconds: 45,
        voiceCueText: "Simon says: Jump twice! Now touch your nose... Ah, Simon didn't say!"
      },
      {
        stepNumber: 3,
        description: "Simon Says: Reach for your toes. Roll your shoulders.",
        durationSeconds: 40,
        voiceCueText: "Simon says: Reach for your toes! Stand up and roll your shoulders!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3, // Easy-Medium
    subjectTag: null
  },
  {
    activityId: "act_g2_follow_pattern",
    title: "Follow Movement Pattern",
    description: "Clap, snap, stomp! Repeat the rhythmic movement sequence.",
    emoji: "🔄",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["Grade 2"],
    durationSeconds: 120,
    instructions: [
      {
        stepNumber: 1,
        description: "Perform: Stomp left, Stomp right, Clap hands, Snap fingers. Repeat 4 times.",
        durationSeconds: 60,
        voiceCueText: "Stomp, stomp, clap, snap! Let's do it again!"
      },
      {
        stepNumber: 2,
        description: "Double the speed: Stomp-stomp-clap-snap! Keep the rhythm going.",
        durationSeconds: 60,
        voiceCueText: "Faster now! Stomp-stomp-clap-snap!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 3, // Easy-Medium
    subjectTag: null
  },
  {
    activityId: "act_g2_number_hop",
    title: "Number Hop Game",
    description: "Hop in patterns: Hop 2 times on right, 1 on left, 3 on right!",
    emoji: "🔢",
    sourceModule: "AI_TUTOR",
    category: "coordination",
    moodTags: ["energize", "fun"],
    gradeLevels: ["Grade 2"],
    durationSeconds: 140,
    instructions: [
      {
        stepNumber: 1,
        description: "Hop twice on your right leg, then once on your left leg. Repeat.",
        durationSeconds: 70,
        voiceCueText: "Two hops on right, one on left! Find your rhythm!"
      },
      {
        stepNumber: 2,
        description: "Hop three times on your left leg, twice on your right leg. Repeat.",
        durationSeconds: 70,
        voiceCueText: "Three hops on left, two on right!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 3, // Easy-Medium
    subjectTag: null
  },
  {
    activityId: "act_g2_quick_yoga",
    title: "Quick Yoga",
    description: "Three gentle yoga poses: Mountain, Warrior, and Tree pose to calm your mind.",
    emoji: "🧘",
    sourceModule: "AI_TUTOR",
    category: "movement",
    moodTags: ["calm", "focus", "relax"],
    gradeLevels: ["Grade 2"],
    durationSeconds: 150,
    instructions: [
      {
        stepNumber: 1,
        description: "Mountain Pose: Stand firm and tall with arms at your sides, breathing deeply.",
        durationSeconds: 50,
        voiceCueText: "Stand tall like a mountain, feet flat, breathe in."
      },
      {
        stepNumber: 2,
        description: "Warrior Pose: Step one foot back, bend front knee, and extend arms wide.",
        durationSeconds: 50,
        voiceCueText: "Step back, spread your arms wide like a strong warrior!"
      },
      {
        stepNumber: 3,
        description: "Tree Pose: Balance on one foot, bringing the other foot to your shin.",
        durationSeconds: 50,
        voiceCueText: "Place your foot on your calf, join your hands, and balance."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3, // Easy-Medium
    subjectTag: null
  },
  {
    activityId: "act_g2_memory_walk",
    title: "Memory Walk",
    description: "Take 4 steps forward, touch your head, take 4 steps back, touch your knees.",
    emoji: "🚶",
    sourceModule: "AI_TUTOR",
    category: "memory",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["Grade 2"],
    durationSeconds: 120,
    instructions: [
      {
        stepNumber: 1,
        description: "Walk forward 4 steps, clap, and touch your head.",
        durationSeconds: 60,
        voiceCueText: "One, two, three, four... clap! Touch your head!"
      },
      {
        stepNumber: 2,
        description: "Walk backward 4 steps, jump, and touch your knees.",
        durationSeconds: 60,
        voiceCueText: "One, two, three, four... jump! Touch your knees!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3, // Easy-Medium
    subjectTag: null
  },
  {
    activityId: "act_g2_balance_challenge",
    title: "Balance Challenge",
    description: "Walk in a straight line heel-to-toe like you are on a high tightrope!",
    emoji: "⚖️",
    sourceModule: "AI_TUTOR",
    category: "coordination",
    moodTags: ["focus", "calm"],
    gradeLevels: ["Grade 2"],
    durationSeconds: 130,
    instructions: [
      {
        stepNumber: 1,
        description: "Align your feet in a straight line. Walk forward heel-to-toe for 10 steps.",
        durationSeconds: 65,
        voiceCueText: "Place one foot right in front of the other, heel-to-toe."
      },
      {
        stepNumber: 2,
        description: "Walk backward heel-to-toe in a straight line for 10 steps.",
        durationSeconds: 65,
        voiceCueText: "Now walk backward, toe-to-heel, keep your balance!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3, // Easy-Medium
    subjectTag: null
  },

  // ==========================================
  // Grade 3 - Medium, 3 - 4 min
  // ==========================================
  {
    activityId: "act_g3_reaction",
    title: "Reaction Challenge",
    description: "React instantly when the screen flashes green: freeze or jump!",
    emoji: "⏱️",
    sourceModule: "AI_TUTOR",
    category: "reaction speed",
    moodTags: ["energize", "fun"],
    gradeLevels: ["Grade 3"],
    durationSeconds: 180,
    instructions: [
      {
        stepNumber: 1,
        description: "March in place dynamically. Be ready to react!",
        durationSeconds: 60,
        voiceCueText: "March, march! Keep your eyes on the screen!"
      },
      {
        stepNumber: 2,
        description: "JUMP! When prompt says 'GREEN', freeze when prompt says 'RED'.",
        durationSeconds: 120,
        voiceCueText: "GREEN: JUMP! RED: FREEZE! GREEN! JUMP! RED! FREEZE!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_energy_hero",
    difficultyLevel: 4, // Medium
    subjectTag: null
  },
  {
    activityId: "act_g3_lr_coordination",
    title: "Left-Right Coordination",
    description: "Touch your left elbow to your right knee, then right elbow to left knee. Cross-body exercises.",
    emoji: "🔀",
    sourceModule: "AI_TUTOR",
    category: "coordination",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["Grade 3"],
    durationSeconds: 200,
    instructions: [
      {
        stepNumber: 1,
        description: "Raise arms. Lift right knee and touch it with left elbow. Swap sides. Hold a steady rhythm.",
        durationSeconds: 100,
        voiceCueText: "Left elbow to right knee! Right elbow to left knee! Cross your body!"
      },
      {
        stepNumber: 2,
        description: "Increase tempo. Keep core engaged and back straight.",
        durationSeconds: 100,
        voiceCueText: "Pick up the speed! 1, 2, 1, 2, keep going!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 4, // Medium
    subjectTag: null
  },
  {
    activityId: "act_g3_balance_count",
    title: "Balance and Count",
    description: "Stand on one leg, close your eyes, and count backward from 20.",
    emoji: "🔢",
    sourceModule: "AI_TUTOR",
    category: "focus",
    moodTags: ["calm", "focus"],
    gradeLevels: ["Grade 3"],
    durationSeconds: 190,
    instructions: [
      {
        stepNumber: 1,
        description: "Stand on right leg. Close eyes and count down from 20 to 0.",
        durationSeconds: 95,
        voiceCueText: "Stand on your right foot, close your eyes, and count down from 20."
      },
      {
        stepNumber: 2,
        description: "Stand on left leg. Close eyes and count down from 20 to 0.",
        durationSeconds: 95,
        voiceCueText: "Switch feet, close eyes, and count down from 20."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 4, // Medium
    subjectTag: null
  },
  {
    activityId: "act_g3_fitness_quiz",
    title: "Fitness Quiz",
    description: "Do squats for True answers and lunges for False answers to our quick questions!",
    emoji: "❓",
    sourceModule: "AI_TUTOR",
    category: "focus",
    moodTags: ["focus", "fun"],
    gradeLevels: ["Grade 3"],
    durationSeconds: 210,
    instructions: [
      {
        stepNumber: 1,
        description: "Question 1: Water is good for your muscles (Squat for YES!).",
        durationSeconds: 70,
        voiceCueText: "Is water good for you? Squat down if yes! Yes, do 5 squats!"
      },
      {
        stepNumber: 2,
        description: "Question 2: Sitting all day makes you run faster (Lunge for NO!).",
        durationSeconds: 70,
        voiceCueText: "Does sitting all day make you faster? Do lunges for NO! Lunge forward!"
      },
      {
        stepNumber: 3,
        description: "Question 3: Sleep helps your body recover (Squat for YES!).",
        durationSeconds: 70,
        voiceCueText: "Does sleep help you grow? Squat for yes!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 4, // Medium
    subjectTag: null
  },
  {
    activityId: "act_g3_memory_movement",
    title: "Memory Movement",
    description: "Remember the sequence: Touch head, touch toes, jump, clap. Repeat and add steps!",
    emoji: "🧠",
    sourceModule: "AI_TUTOR",
    category: "coordination",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["Grade 3"],
    durationSeconds: 220,
    instructions: [
      {
        stepNumber: 1,
        description: "Perform: Head, toes, jump, clap. Repeat 5 times.",
        durationSeconds: 110,
        voiceCueText: "Head, toes, jump, clap! Keep it in memory!"
      },
      {
        stepNumber: 2,
        description: "Add steps: Head, toes, jump, clap, spin around, lunge. Repeat.",
        durationSeconds: 110,
        voiceCueText: "Head, toes, jump, clap, spin, lunge!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 4, // Medium
    subjectTag: null
  },
  {
    activityId: "act_g3_stretch_circuit",
    title: "Quick Stretch Circuit",
    description: "A series of stretches: shoulder roll, side stretch, and hamstring stretch.",
    emoji: "🙆",
    sourceModule: "AI_TUTOR",
    category: "coordination",
    moodTags: ["calm", "relax"],
    gradeLevels: ["Grade 3"],
    durationSeconds: 200,
    instructions: [
      {
        stepNumber: 1,
        description: "Roll shoulders backward 10 times, then forward 10 times.",
        durationSeconds: 60,
        voiceCueText: "Roll your shoulders slowly."
      },
      {
        stepNumber: 2,
        description: "Raise right hand, bend to the left. Swap sides. Hold each for 20 seconds.",
        durationSeconds: 70,
        voiceCueText: "Stretch your side! Reach over!"
      },
      {
        stepNumber: 3,
        description: "Sit on floor, extend legs, reach for your feet. Hold stretch.",
        durationSeconds: 70,
        voiceCueText: "Reach for your toes, breathe out and stretch."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 4, // Medium
    subjectTag: null
  },

  // ==========================================
  // Grade 4 - Medium-Hard, 4 - 5 min
  // ==========================================
  {
    activityId: "act_g4_brain_gym",
    title: "Brain Gym Exercises",
    description: "Draw an infinity sign with your dominant hand, swap, and draw with both hands in the air.",
    emoji: "🧠",
    sourceModule: "AI_TUTOR",
    category: "brain_gym",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["Grade 4"],
    durationSeconds: 240,
    instructions: [
      {
        stepNumber: 1,
        description: "Extend right arm, draw a lazy infinity figure-8 in the air 10 times.",
        durationSeconds: 80,
        voiceCueText: "Draw a lazy 8 in the air with your right hand."
      },
      {
        stepNumber: 2,
        description: "Extend left arm, draw the lazy 8 10 times.",
        durationSeconds: 80,
        voiceCueText: "Draw it with your left hand now."
      },
      {
        stepNumber: 3,
        description: "Use both hands together to trace the figure-8. Promotes left-right brain integration.",
        durationSeconds: 80,
        voiceCueText: "Use both hands together, coordinate your trace!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 5, // Medium-Hard
    subjectTag: null
  },
  {
    activityId: "act_g4_focus_breath",
    title: "Focus Breathing",
    description: "Square breathing: inhale 4s, hold 4s, exhale 4s, hold 4s. Excellent for calming nerves.",
    emoji: "😮‍💨",
    sourceModule: "AI_TUTOR",
    category: "focus",
    moodTags: ["calm", "relax"],
    gradeLevels: ["Grade 4"],
    durationSeconds: 250,
    instructions: [
      {
        stepNumber: 1,
        description: "Close your eyes. Inhale for 4 seconds, hold your breath for 4 seconds.",
        durationSeconds: 100,
        voiceCueText: "Inhale... 2... 3... 4... Hold... 2... 3... 4..."
      },
      {
        stepNumber: 2,
        description: "Exhale for 4 seconds, keep lungs empty for 4 seconds. Repeat circuit.",
        durationSeconds: 150,
        voiceCueText: "Exhale... 2... 3... 4... Rest... 2... 3... 4... Inhale again."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 5, // Medium-Hard
    subjectTag: null
  },
  {
    activityId: "act_g4_fitness_circuit",
    title: "Fitness Circuit",
    description: "Fast-paced set of jumping jacks, squats, and running in place.",
    emoji: "🏋️",
    sourceModule: "AI_TUTOR",
    category: "fitness",
    moodTags: ["energize"],
    gradeLevels: ["Grade 4"],
    durationSeconds: 270,
    instructions: [
      {
        stepNumber: 1,
        description: "Jumping Jacks for 60 seconds. Keep high intensity.",
        durationSeconds: 90,
        voiceCueText: "Start with jumping jacks! Let's build up energy!"
      },
      {
        stepNumber: 2,
        description: "Air Squats for 60 seconds. Focus on posture.",
        durationSeconds: 90,
        voiceCueText: "Air squats! Drop down and push back up."
      },
      {
        stepNumber: 3,
        description: "High knees sprint in place for 60 seconds.",
        durationSeconds: 90,
        voiceCueText: "Sprint! Knees high! Finish strong!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_energy_hero",
    difficultyLevel: 5, // Medium-Hard
    subjectTag: null
  },
  {
    activityId: "act_g4_stem_mission",
    title: "STEM Exploration Mission",
    description: "Search your room for items made of plastic, metal, and wood. Compare properties!",
    emoji: "🔬",
    sourceModule: "AI_TUTOR",
    category: "engineering",
    moodTags: ["focus", "fun"],
    gradeLevels: ["Grade 4"],
    durationSeconds: 280,
    instructions: [
      {
        stepNumber: 1,
        description: "Find one object made of metal and one made of plastic.",
        durationSeconds: 140,
        voiceCueText: "Search your desk or room! Find one metal item and one plastic item."
      },
      {
        stepNumber: 2,
        description: "Identify which is a conductor of heat/electricity and return to log them.",
        durationSeconds: 140,
        voiceCueText: "Compare them. Which one feels colder? The metal! It conducts heat away!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 5, // Medium-Hard
    subjectTag: null
  },
  {
    activityId: "act_g4_cross_lateral",
    title: "Cross-Lateral Movements",
    description: "Draw a circle in the air with your right foot while drawing a square with your left hand.",
    emoji: "🔀",
    sourceModule: "AI_TUTOR",
    category: "brain_gym",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["Grade 4"],
    durationSeconds: 240,
    instructions: [
      {
        stepNumber: 1,
        description: "Sit down. Trace circles in the air with your right big toe.",
        durationSeconds: 80,
        voiceCueText: "Sit back and draw circles with your right foot."
      },
      {
        stepNumber: 2,
        description: "At the same time, trace a square in the air with your left index finger.",
        durationSeconds: 160,
        voiceCueText: "Now try to draw a square with your left hand at the same time! Keep the foot circling!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 5, // Medium-Hard
    subjectTag: null
  },
  {
    activityId: "act_g4_energy_challenge",
    title: "Energy Challenge",
    description: "Fast-paced plank-hold and bicycle-crunches circuit to unlock energy points.",
    emoji: "🔥",
    sourceModule: "AI_TUTOR",
    category: "fitness",
    moodTags: ["energize"],
    gradeLevels: ["Grade 4"],
    durationSeconds: 300,
    instructions: [
      {
        stepNumber: 1,
        description: "Plank Hold: Hold a straight arm or forearm plank for 60 seconds.",
        durationSeconds: 100,
        voiceCueText: "Plank hold! Keep your core tight, body flat!"
      },
      {
        stepNumber: 2,
        description: "Bicycle Crunches: Lie on your back and cycle your legs, touching opposite elbows.",
        durationSeconds: 100,
        voiceCueText: "Lie down, lift your shoulders, cycle those legs!"
      },
      {
        stepNumber: 3,
        description: "Child's Pose Rest: Relax and stretch your back.",
        durationSeconds: 100,
        voiceCueText: "Breathe, drop your hips back, and relax your muscles."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_energy_hero",
    difficultyLevel: 5, // Medium-Hard
    subjectTag: null
  },

  // ==========================================
  // SUBJECT-WISE: English (Tag: ENGLISH_ACTIVITY)
  // ==========================================
  {
    activityId: "act_english_objects_b",
    title: "Find 3 Objects Starting with B",
    description: "Look around your room! Can you find 3 items whose names begin with the letter 'B'?",
    emoji: "🐝",
    sourceModule: "ENGLISH_APP",
    category: "vocabulary",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 90,
    instructions: [
      {
        stepNumber: 1,
        description: "Scan your surroundings for things like: Book, Bottle, Box, Bed, Bag, or Brush.",
        durationSeconds: 50,
        voiceCueText: "Search for things starting with B! Find three!"
      },
      {
        stepNumber: 2,
        description: "Touch each item and shout its name out loud: B is for...!",
        durationSeconds: 40,
        voiceCueText: "Touch them and say: B is for book! B is for..."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 2,
    subjectTag: "ENGLISH_ACTIVITY"
  },
  {
    activityId: "act_english_character",
    title: "Act Like the Story Character",
    description: "Be an actor! Mimic the movement or posture of your favorite story hero.",
    emoji: "🎭",
    sourceModule: "ENGLISH_APP",
    category: "story acting",
    moodTags: ["fun", "energize"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 80,
    instructions: [
      {
        stepNumber: 1,
        description: "Think of a story character (like a robot, a wizard, or a brave explorer). Strike their pose!",
        durationSeconds: 30,
        voiceCueText: "Strike a pose like your favorite story character!"
      },
      {
        stepNumber: 2,
        description: "Act out a short action: fly like a superhero or crawl like a detective for 50 seconds.",
        durationSeconds: 50,
        voiceCueText: "Now act! Move around just like they would!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 2,
    subjectTag: "ENGLISH_ACTIVITY"
  },
  {
    activityId: "act_english_say_words",
    title: "Say 5 New Words Aloud",
    description: "Stretch your vocal cords! Say five new descriptive words aloud while doing a jumping jack for each.",
    emoji: "🗣️",
    sourceModule: "ENGLISH_APP",
    category: "speaking",
    moodTags: ["fun", "energize"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 60,
    instructions: [
      {
        stepNumber: 1,
        description: "Think of 5 words (e.g. Gigantic, Energetic, Electric, Spark, Joyful).",
        durationSeconds: 15,
        voiceCueText: "Get ready to speak and move!"
      },
      {
        stepNumber: 2,
        description: "Do a jumping jack and shout one word! Repeat 5 times.",
        durationSeconds: 45,
        voiceCueText: "Jump! Shout word 1! Jump! Shout word 2! One, two, three, four, five!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_energy_hero",
    difficultyLevel: 2,
    subjectTag: "ENGLISH_ACTIVITY"
  },

  // ==========================================
  // SUBJECT-WISE: Mathematics (Tag: MATH_ACTIVITY)
  // ==========================================
  {
    activityId: "act_math_jump_10",
    title: "Jump 10 Times",
    description: "Let's count! Do 10 quick vertical jumps and count them off out loud.",
    emoji: "🦘",
    sourceModule: "MATH_APP",
    category: "counting",
    moodTags: ["energize", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 60,
    instructions: [
      {
        stepNumber: 1,
        description: "Bend knees, swing arms, and do 10 consecutive jumps. Count 1 to 10.",
        durationSeconds: 60,
        voiceCueText: "Jump 10 times! Count: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 2,
    subjectTag: "MATH_ACTIVITY"
  },
  {
    activityId: "act_math_find_5_circular",
    title: "Find 5 Circular Objects",
    description: "Scan your surroundings. Point out 5 circular or round objects.",
    emoji: "⭕",
    sourceModule: "MATH_APP",
    category: "shapes",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 100,
    instructions: [
      {
        stepNumber: 1,
        description: "Locate 5 round things: clock, buttons, caps, plates, or wheels.",
        durationSeconds: 60,
        voiceCueText: "Find 5 circle shapes around you!"
      },
      {
        stepNumber: 2,
        description: "Trace a giant circle in the air with each arm 5 times.",
        durationSeconds: 40,
        voiceCueText: "Draw big circles in the air with your arms!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 2,
    subjectTag: "MATH_ACTIVITY"
  },
  {
    activityId: "act_math_count_steps",
    title: "Count Steps Around Room",
    description: "Measure the room! Count how many steps it takes to walk from one wall to another.",
    emoji: "🚶",
    sourceModule: "MATH_APP",
    category: "measurement",
    moodTags: ["focus", "calm"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 90,
    instructions: [
      {
        stepNumber: 1,
        description: "Walk in a straight line from one side of the room to the other, counting every step.",
        durationSeconds: 45,
        voiceCueText: "Walk and count your paces. One, two, three..."
      },
      {
        stepNumber: 2,
        description: "Turn around and walk back, trying to take the exact same number of steps.",
        durationSeconds: 45,
        voiceCueText: "Now walk back. Can you make it in the same number of steps?"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 2,
    subjectTag: "MATH_ACTIVITY"
  },

  // ==========================================
  // SUBJECT-WISE: STEM & Circuits (Tag: STEM_ACTIVITY)
  // ==========================================
  {
    activityId: "act_stem_devices",
    title: "Find 3 Electrical Devices",
    description: "Engineering Hunt! Locate 3 objects in the room that plug into the wall or use batteries.",
    emoji: "🔌",
    sourceModule: "STEM_APP",
    category: "engineering",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 120,
    instructions: [
      {
        stepNumber: 1,
        description: "Search for electronics: computer, tablet, lamp, charger, fan, or clock.",
        durationSeconds: 70,
        voiceCueText: "Find three things that use electricity!"
      },
      {
        stepNumber: 2,
        description: "Touch them safely (never touch open sockets!) and stretch your arms out.",
        durationSeconds: 50,
        voiceCueText: "Point to them and stretch your shoulders out."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_fitness_explorer",
    difficultyLevel: 3,
    subjectTag: "STEM_ACTIVITY"
  },
  {
    activityId: "act_stem_battery",
    title: "Identify Battery-Operated Objects",
    description: "Look for devices powered by portable cells/batteries. Point to at least two!",
    emoji: "🔋",
    sourceModule: "STEM_APP",
    category: "engineering",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 100,
    instructions: [
      {
        stepNumber: 1,
        description: "Search for battery items: remote control, wireless mouse, toys, or flashlight.",
        durationSeconds: 60,
        voiceCueText: "Find two objects that have batteries inside!"
      },
      {
        stepNumber: 2,
        description: "Hop 5 times next to each battery-powered object you found.",
        durationSeconds: 40,
        voiceCueText: "Hop 5 times on one foot near the object!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_movement_master",
    difficultyLevel: 3,
    subjectTag: "STEM_ACTIVITY"
  },
  {
    activityId: "act_stem_switch",
    title: "Find one Switch in your Room",
    description: "Circuits in action! Find a light switch or power button and toggle it (or point to it).",
    emoji: "🎛️",
    sourceModule: "STEM_APP",
    category: "engineering",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 90,
    instructions: [
      {
        stepNumber: 1,
        description: "Walk to the nearest wall light switch or appliance power button.",
        durationSeconds: 45,
        voiceCueText: "Locate a switch on the wall or on a device."
      },
      {
        stepNumber: 2,
        description: "Stand in front of it and do a deep overhead stretch to reach toward it.",
        durationSeconds: 45,
        voiceCueText: "Reach up tall to point to the switch, hold the stretch!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3,
    subjectTag: "STEM_ACTIVITY"
  },
  {
    activityId: "act_stem_led",
    title: "Observe an LED Indicator",
    description: "LED check! Locate a tiny glowing indicator light on a charger, router, or computer screen.",
    emoji: "🚨",
    sourceModule: "STEM_APP",
    category: "engineering",
    moodTags: ["focus", "calm"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 90,
    instructions: [
      {
        stepNumber: 1,
        description: "Find a small glowing light indicator (green, red, or blue).",
        durationSeconds: 45,
        voiceCueText: "Look for a tiny glowing light on any electronic box."
      },
      {
        stepNumber: 2,
        description: "Look at it and take 3 deep belly breaths, focusing on its solid glow.",
        durationSeconds: 45,
        voiceCueText: "Look at the light, breathe in slowly, and breathe out."
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3,
    subjectTag: "STEM_ACTIVITY"
  },

  // ==========================================
  // SUBJECT-WISE: Problem Solving & Logic (Tag: LOGIC_ACTIVITY)
  // ==========================================
  {
    activityId: "act_logic_memory",
    title: "Memory Challenge",
    description: "Look at 5 items on your desk. Close your eyes, spin, and recite them from memory!",
    emoji: "🧠",
    sourceModule: "LOGIC_APP",
    category: "brain_gym",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 110,
    instructions: [
      {
        stepNumber: 1,
        description: "Stare at 5 objects for 30 seconds. Close eyes.",
        durationSeconds: 40,
        voiceCueText: "Look at 5 things. Memorize them. Now close your eyes!"
      },
      {
        stepNumber: 2,
        description: "Spin around in a circle twice, then list the 5 items out loud with eyes closed.",
        durationSeconds: 70,
        voiceCueText: "Spin around twice! Now say the 5 items out loud!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3,
    subjectTag: "LOGIC_ACTIVITY"
  },
  {
    activityId: "act_logic_pattern_walk",
    title: "Pattern Walk",
    description: "Walk in patterns: 2 giant steps forward, 1 squat, 2 baby steps back, 1 clap.",
    emoji: "🚶",
    sourceModule: "LOGIC_APP",
    category: "brain_gym",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 120,
    instructions: [
      {
        stepNumber: 1,
        description: "Perform the sequence: 2 giant steps forward, squat down, 2 tiny steps back, clap.",
        durationSeconds: 60,
        voiceCueText: "Giant step, giant step! Squat! Baby step, baby step! Clap!"
      },
      {
        stepNumber: 2,
        description: "Repeat the pattern backward starting with the clap.",
        durationSeconds: 60,
        voiceCueText: "Try it in reverse! Clap! Baby steps! Squat! Giant steps!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3,
    subjectTag: "LOGIC_ACTIVITY"
  },
  {
    activityId: "act_logic_simon_says",
    title: "Simon Says (Logic Break)",
    description: "Perform opposite actions: when Simon says JUMP, you SQUAT. If Simon says TOUCH EARS, touch toes!",
    emoji: "🗣️",
    sourceModule: "LOGIC_APP",
    category: "brain_gym",
    moodTags: ["focus", "fun"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 120,
    instructions: [
      {
        stepNumber: 1,
        description: "Simon Says JUMP -> You SQUAT! Simon Says STAND -> You LIE DOWN!",
        durationSeconds: 60,
        voiceCueText: "Opposite Simon says! Simon says: JUMP! (You squat!) Simon says: STAND! (You sit!)"
      },
      {
        stepNumber: 2,
        description: "Simon Says CLAP -> You STOMP! Touch head -> Do nothing!",
        durationSeconds: 60,
        voiceCueText: "Simon says: CLAP! (You stomp!) Touch your nose! (Simon didn't say!)"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3,
    subjectTag: "LOGIC_ACTIVITY"
  },
  {
    activityId: "act_logic_coordination",
    title: "Coordination Challenge",
    description: "Tap your head with your right hand while rubbing your stomach in a circle with your left hand.",
    emoji: "🔀",
    sourceModule: "LOGIC_APP",
    category: "brain_gym",
    moodTags: ["focus", "coordination"],
    gradeLevels: ["KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    durationSeconds: 100,
    instructions: [
      {
        stepNumber: 1,
        description: "Tap your head up and down with your right hand. Establish a steady tapping.",
        durationSeconds: 30,
        voiceCueText: "Tap your head with your right hand."
      },
      {
        stepNumber: 2,
        description: "Rub your stomach in circles with your left hand at the same time. Keep tapping!",
        durationSeconds: 70,
        voiceCueText: "Now rub your tummy with your left hand at the same time! Don't stop tapping!"
      }
    ],
    starsOnCompletion: 5,
    badgeId: "badge_focus_champion",
    difficultyLevel: 3,
    subjectTag: "LOGIC_ACTIVITY"
  }
];

```

---

### `backend/modules/physical-activity/models/Activity.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Collection: activities
 * ============================================================
 * The activity CATALOG. Each document defines one activity
 * type (e.g., "Bear Crawl", "Sun Salutation Lite"). Actual
 * student interactions are stored in activity_sessions.
 *
 * `sourceModule` on this schema indicates which EduCare AI
 * application the activity was originally designed for, so
 * cross-app analytics can group by origin.
 * ============================================================
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;

// ─── Enum Constants (exported for reuse in other models) ─────
export const SOURCE_MODULES = Object.freeze({
  ENGLISH_APP:  'ENGLISH_APP',
  MATH_APP:     'MATH_APP',
  STEM_APP:     'STEM_APP',
  LOGIC_APP:    'LOGIC_APP',
  AI_TUTOR:     'AI_TUTOR',
  FITFRIEND_AI: 'FITFRIEND_AI',
});

export const ACTIVITY_CATEGORIES = Object.freeze([
  'stretching',
  'cardio',
  'yoga',
  'dance',
  'mindfulness',
  'breathing',
  'strength',
  'coordination',
]);

export const GRADE_LEVELS = Object.freeze([
  'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
]);

export const MOOD_TAGS = Object.freeze([
  'calm', 'energize', 'focus', 'fun', 'relax', 'motivate', 'social',
]);

// ─── Sub-Schema: Instruction Step ───────────────────────────
const InstructionStepSchema = new Schema(
  {
    stepNumber:   { type: Number, required: true },
    description:  { type: String, required: true, trim: true, maxlength: 500 },
    durationSeconds: { type: Number, default: 0, min: 0 },
    mediaUrl:     { type: String, default: null },   // image / gif for this step
    voiceCueText: { type: String, default: null },   // text-to-speech prompt
  },
  { _id: false }
);

// ─── Sub-Schema: Accessibility ──────────────────────────────
const AccessibilitySchema = new Schema(
  {
    requiresEquipment:  { type: Boolean, default: false },
    equipmentList:      { type: [String], default: [] },
    requiresOpenSpace:  { type: Boolean, default: false },
    suitableForChairs:  { type: Boolean, default: false }, // seated activities
    lowImpact:          { type: Boolean, default: false },
  },
  { _id: false }
);

// ─── Main Activity Schema ─────────────────────────────────────
const ActivitySchema = new Schema(
  {
    // ── Identity ────────────────────────────────────────────
    activityId: {
      type: String,
      required: [true, 'activityId is required'],
      unique: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [600, 'Description cannot exceed 600 characters'],
      default: '',
    },
    emoji: {
      type: String,
      default: '🏃',
      maxlength: [8, 'Emoji field too long'],
    },

    // ── Source Module (REQUIRED — cross-app analytics key) ──
    sourceModule: {
      type: String,
      required: [true, 'sourceModule is required for cross-application analytics'],
      enum: {
        values: Object.values(SOURCE_MODULES),
        message: '`{VALUE}` is not a valid sourceModule. Use: ENGLISH_APP | MATH_APP | STEM_APP | LOGIC_APP | AI_TUTOR',
      },
      index: true,
    },

    // ── Classification ──────────────────────────────────────
    category: {
      type: String,
      required: [true, 'category is required'],
      enum: {
        values: ACTIVITY_CATEGORIES,
        message: '`{VALUE}` is not a valid activity category',
      },
      index: true,
    },
    moodTags: {
      type: [String],
      enum: {
        values: MOOD_TAGS,
        message: '`{VALUE}` is not a valid mood tag',
      },
      default: [],
      validate: {
        validator: (arr) => arr.length <= 5,
        message: 'Maximum 5 mood tags allowed per activity',
      },
    },

    // ── Grade Targeting ─────────────────────────────────────
    gradeLevels: {
      type: [String],
      required: [true, 'gradeLevels is required'],
      enum: {
        values: GRADE_LEVELS,
        message: '`{VALUE}` is not a supported grade level',
      },
      validate: {
        validator: (arr) => arr.length > 0,
        message: 'At least one grade level must be specified',
      },
    },

    // ── Duration ─────────────────────────────────────────────
    durationSeconds: {
      type: Number,
      required: [true, 'durationSeconds is required'],
      min: [30,   'Activity must be at least 30 seconds'],
      max: [3600, 'Activity cannot exceed 60 minutes'],
    },

    // ── Instructions ────────────────────────────────────────
    instructions: {
      type: [InstructionStepSchema],
      default: [],
      validate: {
        validator: (arr) => arr.length <= 30,
        message: 'Maximum 30 instruction steps allowed',
      },
    },

    // ── Media ───────────────────────────────────────────────
    thumbnailUrl:    { type: String, default: null },
    previewVideoUrl: { type: String, default: null },
    bannerColor:     { type: String, default: '#6366f1', match: [/^#[0-9A-Fa-f]{6}$/, 'Invalid hex color'] },

    // ── Rewards Configuration ────────────────────────────────
    starsOnCompletion: {
      type: Number,
      default: 3,
      min: [0,  'Stars cannot be negative'],
      max: [20, 'Stars on completion cannot exceed 20'],
    },
    badgeId: {
      type: String,
      default: null,  // optional badge awarded on first completion
    },

    // ── Difficulty ──────────────────────────────────────────
    difficultyLevel: {
      type: Number,
      default: 1,
      min: [1, 'Difficulty level must be 1–5'],
      max: [5, 'Difficulty level must be 1–5'],
    },

    // ── Accessibility ────────────────────────────────────────
    accessibility: { type: AccessibilitySchema, default: () => ({}) },

    // ── Status ──────────────────────────────────────────────
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    version: {
      type: Number,
      default: 1,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'activities',
  }
);

// ─── Indexes ─────────────────────────────────────────────────
// Activity discovery: filter by grade + category + source
ActivitySchema.index({ gradeLevels: 1, category: 1, sourceModule: 1 });
// Mood-based recommendation engine
ActivitySchema.index({ moodTags: 1, isActive: 1 });
// Cross-app analytics: group by sourceModule + category
ActivitySchema.index({ sourceModule: 1, category: 1 });
// Full-text search on title + description + tags
ActivitySchema.index({ title: 'text', description: 'text', tags: 'text' });

// ─── Model ───────────────────────────────────────────────────
export const ActivityModel = mongoose.model('Activity', ActivitySchema);
export default ActivityModel;

```

---

### `backend/modules/physical-activity/models/ActivityAnalytics.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Collection: activity_analytics
 * ============================================================
 * Pre-aggregated analytics snapshots. Updated by a background
 * job (or via real-time increments) after each session event.
 *
 * Granularity: ONE document per (studentId × sourceModule × date).
 * This enables O(1) reads for dashboards without running
 * expensive MongoDB aggregations on raw session data.
 *
 * For historical trends, query multiple date documents for the
 * same studentId/sourceModule and sum/average the fields.
 *
 * Cross-app analytics pattern:
 *   analytics.aggregate([
 *     { $match: { sourceModule: 'MATH_APP', date: { $gte: weekStart } } },
 *     { $group: { _id: '$gradeLevel', totalMinutes: { $sum: '$totalMinutesActive' } } }
 *   ])
 * ============================================================
 */

import mongoose from 'mongoose';
import { SOURCE_MODULES } from './Activity.js';

const { Schema } = mongoose;

// ─── Sub-Schema: Activity Category Breakdown ─────────────────
const CategoryBreakdownSchema = new Schema(
  {
    category:           { type: String, required: true },
    sessionsCompleted:  { type: Number, default: 0 },
    sessionsSkipped:    { type: Number, default: 0 },
    totalMinutes:       { type: Number, default: 0 },
    avgCompletionPct:   { type: Number, default: 0 },
    starsEarned:        { type: Number, default: 0 },
  },
  { _id: false }
);

// ─── Sub-Schema: Skip Reason Tally ──────────────────────────
const SkipReasonTallySchema = new Schema(
  {
    reason: { type: String, required: true },
    count:  { type: Number, default: 0 },
  },
  { _id: false }
);

// ─── Sub-Schema: Mood Impact ─────────────────────────────────
const MoodImpactSchema = new Schema(
  {
    // Average mood change: positive = activity improved mood
    avgMoodDelta:     { type: Number, default: null },
    // Sessions that recorded mood before + after
    moodTrackedCount: { type: Number, default: 0 },
    // Most common mood before starting
    mostCommonMoodBefore: { type: String, default: null },
    // Most common mood after completing
    mostCommonMoodAfter:  { type: String, default: null },
  },
  { _id: false }
);

// ─── Sub-Schema: Top Activity ───────────────────────────────
const TopActivitySchema = new Schema(
  {
    activityId:   { type: String, required: true },
    title:        { type: String, default: null },
    sessionCount: { type: Number, default: 0 },
    avgRating:    { type: Number, default: null },
  },
  { _id: false }
);

// ─── Main Activity Analytics Schema ──────────────────────────
const ActivityAnalyticsSchema = new Schema(
  {
    // ── Dimensions (the "group by" keys) ────────────────────
    studentId: {
      type: String,
      required: [true, 'studentId is required'],
      index: true,
    },

    // Source Module (REQUIRED — cross-app analytics primary key) ─
    sourceModule: {
      type: String,
      required: [true, 'sourceModule is required — it is the cross-app analytics dimension'],
      enum: {
        values: Object.values(SOURCE_MODULES),
        message: '`{VALUE}` is not a valid sourceModule',
      },
      index: true,
    },

    gradeLevel: {
      type: String,
      required: [true, 'gradeLevel is required'],
      enum: ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      index: true,
    },

    // ── Time Dimension ───────────────────────────────────────
    // Date string YYYY-MM-DD for daily granularity
    date: {
      type: String,
      required: [true, 'date is required (YYYY-MM-DD)'],
      match: [/^\d{4}-\d{2}-\d{2}$/, 'date must be in YYYY-MM-DD format'],
      index: true,
    },
    week: {
      type: String,
      default: null,  // ISO week: YYYY-Www  e.g. 2026-W24
      index: true,
    },
    month: {
      type: String,
      default: null,  // YYYY-MM
      index: true,
    },
    year: {
      type: Number,
      default: null,
    },

    // ── Session Counts ───────────────────────────────────────
    sessionsAssigned:   { type: Number, default: 0, min: 0 },
    sessionsStarted:    { type: Number, default: 0, min: 0 },
    sessionsCompleted:  { type: Number, default: 0, min: 0 },
    sessionsSkipped:    { type: Number, default: 0, min: 0 },
    sessionsExpired:    { type: Number, default: 0, min: 0 },

    // ── Completion Rate ──────────────────────────────────────
    // Computed: sessionsCompleted / sessionsAssigned (0.0–1.0)
    completionRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 1,
    },
    skipRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 1,
    },

    // ── Duration ─────────────────────────────────────────────
    totalMinutesActive:     { type: Number, default: 0, min: 0 },
    avgSessionMinutes:      { type: Number, default: 0, min: 0 },
    longestSessionMinutes:  { type: Number, default: 0, min: 0 },

    // ── Completion Quality ───────────────────────────────────
    avgCompletionPercentage: { type: Number, default: 0, min: 0, max: 100 },
    perfectCompletions:      { type: Number, default: 0, min: 0 },  // 100% sessions

    // ── Rewards ──────────────────────────────────────────────
    totalStarsEarned:    { type: Number, default: 0, min: 0 },
    totalBadgesEarned:   { type: Number, default: 0, min: 0 },
    totalEnergyPoints:   { type: Number, default: 0, min: 0 },

    // ── Student Engagement ───────────────────────────────────
    avgFeedbackRating:   { type: Number, default: null, min: 1, max: 5 },
    streakOnDate:        { type: Number, default: 0, min: 0 },
    dailyGoalMet:        { type: Boolean, default: false },

    // ── Category Breakdown ───────────────────────────────────
    categoryBreakdown: {
      type: [CategoryBreakdownSchema],
      default: [],
    },

    // ── Skip Reason Tally ─────────────────────────────────────
    skipReasonTally: {
      type: [SkipReasonTallySchema],
      default: [],
    },

    // ── Mood Impact ──────────────────────────────────────────
    moodImpact: { type: MoodImpactSchema, default: null },

    // ── Top Activities ────────────────────────────────────────
    topActivities: {
      type: [TopActivitySchema],
      default: [],
      validate: {
        validator: (arr) => arr.length <= 10,
        message: 'topActivities can hold at most 10 entries',
      },
    },

    // ── Computation Metadata ─────────────────────────────────
    // Tracks when this snapshot was last recomputed
    lastComputedAt: { type: Date, default: Date.now },
    computedFromSessions: { type: Number, default: 0 },  // source session count
    snapshotVersion: { type: Number, default: 1 },
  },
  {
    timestamps: true,
    collection: 'activity_analytics',
  }
);

// ─── Compound Unique Index ────────────────────────────────────
// One document per student × sourceModule × date combination
ActivityAnalyticsSchema.index(
  { studentId: 1, sourceModule: 1, date: 1 },
  { unique: true, name: 'unique_student_module_date' }
);

// ─── Query Indexes ────────────────────────────────────────────

// Parent Dashboard: student history across modules
ActivityAnalyticsSchema.index({ studentId: 1, date: -1 });

// Teacher Dashboard: class analytics by grade + date range
ActivityAnalyticsSchema.index({ gradeLevel: 1, date: -1 });

// Cross-app analytics: module performance over time
ActivityAnalyticsSchema.index({ sourceModule: 1, date: -1 });

// Weekly aggregation queries
ActivityAnalyticsSchema.index({ studentId: 1, week: 1 });

// Monthly aggregation queries
ActivityAnalyticsSchema.index({ studentId: 1, month: 1 });

// Global cross-app trends: module + grade + week
ActivityAnalyticsSchema.index({ sourceModule: 1, gradeLevel: 1, week: 1 });

// Top performers: high completion rate, sorted
ActivityAnalyticsSchema.index({ completionRate: -1, date: -1 });

// Daily goal tracking
ActivityAnalyticsSchema.index({ studentId: 1, dailyGoalMet: 1, date: -1 });

// ─── Pre-save Hook: Auto-compute rates and date fields ───────
ActivityAnalyticsSchema.pre('save', function (next) {
  // Completion rate
  if (this.sessionsAssigned > 0) {
    this.completionRate = parseFloat(
      (this.sessionsCompleted / this.sessionsAssigned).toFixed(4)
    );
    this.skipRate = parseFloat(
      (this.sessionsSkipped / this.sessionsAssigned).toFixed(4)
    );
  }

  // Derive week (ISO) and month from date string
  if (this.date) {
    const d = new Date(this.date);
    this.year = d.getFullYear();
    this.month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;

    // ISO week number
    const startOfYear = new Date(d.getFullYear(), 0, 1);
    const weekNo = Math.ceil(
      ((d - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7
    );
    this.week = `${d.getFullYear()}-W${String(weekNo).padStart(2, '0')}`;
  }

  this.lastComputedAt = new Date();
  next();
});

// ─── Static: Upsert helper ───────────────────────────────────
// Usage: ActivityAnalyticsModel.upsertForDate(studentId, sourceModule, date, delta)
ActivityAnalyticsSchema.statics.upsertForDate = function (
  studentId,
  sourceModule,
  gradeLevel,
  date,
  delta = {}
) {
  return this.findOneAndUpdate(
    { studentId, sourceModule, date },
    {
      $setOnInsert: { studentId, sourceModule, gradeLevel, date },
      $inc: delta,
      $set: { lastComputedAt: new Date() },
    },
    { upsert: true, new: true, runValidators: true }
  );
};

// ─── Model ───────────────────────────────────────────────────
export const ActivityAnalyticsModel = mongoose.model('ActivityAnalytics', ActivityAnalyticsSchema);
export default ActivityAnalyticsModel;

```

---

### `backend/modules/physical-activity/models/ActivityReward.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Collection: activity_rewards
 * ============================================================
 * Immutable ledger of every reward event issued to a student
 * through the Physical Activity Engine.
 *
 * Design: append-only (no updates after creation). Totals are
 * denormalized onto the Student document for fast reads.
 *
 * Reward events are fired as EVENT_REWARD_GRANTED on the
 * EduCare AI shared event bus after each activity completion.
 *
 * `sourceModule` is REQUIRED so the Rewards Engine and Parent/
 * Teacher Dashboards can show per-app reward breakdowns.
 * ============================================================
 */

import mongoose from 'mongoose';
import { SOURCE_MODULES } from './Activity.js';

const { Schema } = mongoose;

// ─── Reward Type Constants ───────────────────────────────────
export const REWARD_TYPES = Object.freeze({
  STARS:          'STARS',           // General star points
  BADGE:          'BADGE',           // Achievement badge
  ENERGY_POINTS:  'ENERGY_POINTS',   // Physical activity currency
  STREAK_BONUS:   'STREAK_BONUS',    // Streak milestone bonus
  PERFECT_RUN:    'PERFECT_RUN',     // 100% completion, no skips
  FIRST_ATTEMPT:  'FIRST_ATTEMPT',   // First time completing activity
  CHALLENGE_WIN:  'CHALLENGE_WIN',   // Completed challenge mode
  MOOD_BONUS:     'MOOD_BONUS',      // Completed activity despite low mood
  MODULE_UNLOCK:  'MODULE_UNLOCK',   // Unlocked a new EduCare module/feature
});

// ─── Reward Trigger Constants ────────────────────────────────
export const REWARD_TRIGGERS = Object.freeze({
  ACTIVITY_COMPLETED:   'ACTIVITY_COMPLETED',
  STREAK_MILESTONE:     'STREAK_MILESTONE',
  DAILY_GOAL_MET:       'DAILY_GOAL_MET',
  WEEKLY_GOAL_MET:      'WEEKLY_GOAL_MET',
  PERFECT_WEEK:         'PERFECT_WEEK',
  FIRST_ACTIVITY_EVER:  'FIRST_ACTIVITY_EVER',
  TEACHER_GRANT:        'TEACHER_GRANT',
  PARENT_GRANT:         'PARENT_GRANT',
  SYSTEM_GRANT:         'SYSTEM_GRANT',
});

// ─── Activity Reward Schema ───────────────────────────────────
const ActivityRewardSchema = new Schema(
  {
    // ── Foreign Keys ────────────────────────────────────────
    studentId: {
      type: String,
      required: [true, 'studentId is required'],
      index: true,
    },
    activityId: {
      type: String,
      default: null,  // null for non-activity rewards (e.g., weekly goal bonus)
      index: true,
    },
    sessionId: {
      type: Schema.Types.ObjectId,
      ref: 'ActivitySession',
      default: null,  // null for non-session rewards
      index: true,
    },

    // ── Source Module (REQUIRED — cross-app analytics) ───────
    sourceModule: {
      type: String,
      required: [true, 'sourceModule is required on every reward record'],
      enum: {
        values: Object.values(SOURCE_MODULES),
        message: '`{VALUE}` is not a valid sourceModule',
      },
      index: true,
    },

    // ── Grade at time of reward (denormalised) ───────────────
    gradeAtReward: {
        type: String,
        required: [true, 'gradeAtReward is required'],
        enum: ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
    },

    // ── Reward Classification ────────────────────────────────
    rewardType: {
      type: String,
      required: [true, 'rewardType is required'],
      enum: {
        values: Object.values(REWARD_TYPES),
        message: '`{VALUE}` is not a valid rewardType',
      },
      index: true,
    },
    rewardTrigger: {
      type: String,
      required: [true, 'rewardTrigger is required'],
      enum: {
        values: Object.values(REWARD_TRIGGERS),
        message: '`{VALUE}` is not a valid rewardTrigger',
      },
    },

    // ── Stars ────────────────────────────────────────────────
    starsEarned: {
      type: Number,
      required: [true, 'starsEarned is required'],
      min: [0,  'Stars cannot be negative'],
      max: [100,'Stars per reward cannot exceed 100'],
      default: 0,
    },

    // ── Badge ─────────────────────────────────────────────────
    badgeId: {
      type: String,
      default: null,
    },
    badgeLabel: {
      type: String,
      default: null,
      maxlength: 80,
    },
    badgeIcon: {
      type: String,
      default: null,
      maxlength: 8,  // emoji
    },

    // ── Energy Points (physical activity currency) ───────────
    energyPoints: {
      type: Number,
      default: 0,
      min: [0, 'Energy points cannot be negative'],
    },

    // ── Reward Metadata ──────────────────────────────────────
    multiplier: {
      type: Number,
      default: 1.0,
      min: [0.5, 'Multiplier cannot be below 0.5'],
      max: [5.0, 'Multiplier cannot exceed 5.0'],
    },
    bonusReason: {
      type: String,
      default: null,
      maxlength: 200,  // e.g., "Streak × 2 multiplier applied"
    },

    // ── Notification ─────────────────────────────────────────
    // Has the student seen this reward notification yet?
    notified: { type: Boolean, default: false, index: true },
    notifiedAt: { type: Date, default: null },

    // ── Granted By ───────────────────────────────────────────
    grantedBy: {
      type: String,
      enum: ['SYSTEM', 'AI_TUTOR', 'TEACHER', 'PARENT'],
      default: 'SYSTEM',
    },

    // ── Event Bus Reference ──────────────────────────────────
    eventId: {
      type: String,
      default: null,
      index: true,   // trace reward back to the EVENT_REWARD_GRANTED event
    },

    // ── Audit ───────────────────────────────────────────────
    // Rewards are append-only; no hard delete
    isVoided: { type: Boolean, default: false },
    voidedAt:  { type: Date, default: null },
    voidedBy:  { type: String, default: null },
    voidReason:{ type: String, default: null, maxlength: 200 },
  },
  {
    timestamps: true,
    collection: 'activity_rewards',
  }
);

// ─── Indexes ─────────────────────────────────────────────────

// Student reward feed (most recent first)
ActivityRewardSchema.index({ studentId: 1, createdAt: -1 });

// Unread notifications
ActivityRewardSchema.index({ studentId: 1, notified: 1 });

// Cross-app analytics: rewards by sourceModule and type
ActivityRewardSchema.index({ sourceModule: 1, rewardType: 1, createdAt: -1 });

// Teacher Dashboard: reward trends by grade
ActivityRewardSchema.index({ gradeAtReward: 1, rewardType: 1, createdAt: -1 });

// Badge collection lookup
ActivityRewardSchema.index({ studentId: 1, badgeId: 1 }, { sparse: true });

// Activity-level: reward history per activity
ActivityRewardSchema.index({ activityId: 1, rewardType: 1 });

// Voided rewards audit
ActivityRewardSchema.index({ isVoided: 1 }, { sparse: true });

// ─── Virtual: Total Value (stars + energyPoints) ─────────────
ActivityRewardSchema.virtual('totalValue').get(function () {
  return this.starsEarned + this.energyPoints;
});

// ─── Model ───────────────────────────────────────────────────
export const ActivityRewardModel = mongoose.model('ActivityReward', ActivityRewardSchema);
export default ActivityRewardModel;

```

---

### `backend/modules/physical-activity/models/ActivitySession.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Collection: activity_sessions
 * ============================================================
 * Records the FULL LIFECYCLE of one student ↔ activity
 * interaction: assigned → started → completed (or skipped).
 *
 * `sourceModule` is REQUIRED on every session so cross-app
 * analytics can attribute engagement back to the originating
 * EduCare AI application (ENGLISH_APP, MATH_APP, etc.).
 *
 * Status Machine:
 *   assigned → started → completed
 *                     ↘ skipped  (see activity_skips for detail)
 * ============================================================
 */

import mongoose from 'mongoose';
import { SOURCE_MODULES } from './Activity.js';

const { Schema } = mongoose;

// ─── Status Constants ────────────────────────────────────────
export const SESSION_STATUS = Object.freeze({
  ASSIGNED:  'assigned',
  STARTED:   'started',
  COMPLETED: 'completed',
  SKIPPED:   'skipped',
  EXPIRED:   'expired',   // assigned but time window passed
});

// ─── Sub-Schema: Mood Snapshot ──────────────────────────────
const MoodSnapshotSchema = new Schema(
  {
    mood:       { type: String, default: 'unknown' },
    confidence: { type: Number, default: null, min: 0, max: 1 },  // 0.0–1.0
    capturedAt: { type: Date,   default: null },
  },
  { _id: false }
);

// ─── Sub-Schema: Device / Context Metadata ──────────────────
const SessionMetaSchema = new Schema(
  {
    deviceType:  { type: String, enum: ['desktop', 'tablet', 'mobile', 'unknown'], default: 'unknown' },
    ipHash:      { type: String, default: null },  // hashed for privacy
    userAgent:   { type: String, default: null, maxlength: 300 },
    appVersion:  { type: String, default: null },
  },
  { _id: false }
);

// ─── Main Activity Session Schema ────────────────────────────
const ActivitySessionSchema = new Schema(
  {
    // ── Foreign Keys ────────────────────────────────────────
    studentId: {
      type: String,
      required: [true, 'studentId is required'],
      index: true,
    },
    activityId: {
      type: String,
      required: [true, 'activityId is required'],
      index: true,
    },

    // ── Source Module (REQUIRED — cross-app analytics) ───────
    sourceModule: {
      type: String,
      required: [true, 'sourceModule is required on every activity session'],
      enum: {
        values: Object.values(SOURCE_MODULES),
        message: '`{VALUE}` is not a valid sourceModule',
      },
      index: true,
    },

    // ── Grade at time of session (denormalized for analytics) ─
    gradeAtSession: {
      type: String,
      required: [true, 'gradeAtSession is required'],
      enum: ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
    },

    // ── Lifecycle Timestamps ─────────────────────────────────
    assignedAt: {
      type: Date,
      required: [true, 'assignedAt is required'],
      default: Date.now,
    },
    startedAt: {
      type: Date,
      default: null,
    },
    completedAt: {
      type: Date,
      default: null,
      validate: {
        validator: function (val) {
          if (!val || !this.startedAt) return true;
          return val >= this.startedAt;
        },
        message: 'completedAt cannot be earlier than startedAt',
      },
    },
    skippedAt: {
      type: Date,
      default: null,
    },
    expiresAt: {
      type: Date,
      default: null,  // null = no expiry; set by scheduler
    },

    // ── Duration ─────────────────────────────────────────────
    // Actual elapsed time in seconds (may differ from planned duration)
    actualDurationSeconds: {
      type: Number,
      default: null,
      min: [0, 'Duration cannot be negative'],
    },
    // Planned duration at assignment time (from Activity catalog)
    plannedDurationSeconds: {
      type: Number,
      default: null,
      min: [0, 'Planned duration cannot be negative'],
    },

    // ── Status ───────────────────────────────────────────────
    status: {
      type: String,
      required: true,
      enum: {
        values: Object.values(SESSION_STATUS),
        message: '`{VALUE}` is not a valid session status',
      },
      default: SESSION_STATUS.ASSIGNED,
      index: true,
    },

    // ── Completion Quality ───────────────────────────────────
    completionPercentage: {
      type: Number,
      default: null,
      min: [0,   'Completion percentage cannot be negative'],
      max: [100, 'Completion percentage cannot exceed 100'],
    },
    stepsCompleted: {
      type: Number,
      default: null,
      min: 0,
    },
    totalSteps: {
      type: Number,
      default: null,
      min: 0,
    },

    // ── Student Feedback ─────────────────────────────────────
    feedback: {
      rating: {
        type: Number,
        default: null,
        min: [1, 'Rating must be 1–5'],
        max: [5, 'Rating must be 1–5'],
      },
      emoji:   { type: String, default: null },
      comment: { type: String, default: null, maxlength: [500, 'Comment too long'] },
    },

    // ── Mood Context ─────────────────────────────────────────
    moodBefore: { type: MoodSnapshotSchema, default: null },
    moodAfter:  { type: MoodSnapshotSchema, default: null },

    // ── Rewards Earned in this Session ──────────────────────
    starsEarned: {
      type: Number,
      default: 0,
      min: [0, 'Stars cannot be negative'],
    },
    badgeEarned: {
      type: String,
      default: null,  // badgeId or null
    },

    // ── Assignment Context ───────────────────────────────────
    assignedBy: {
      type: String,
      enum: ['AI_TUTOR', 'TEACHER', 'PARENT', 'SELF', 'SYSTEM'],
      default: 'SYSTEM',
    },
    assignmentContext: {
      type: String,
      default: null,
      maxlength: 300,  // e.g., "After completing Math Lesson 3"
    },

    // ── Session Metadata ─────────────────────────────────────
    sessionMeta: { type: SessionMetaSchema, default: () => ({}) },

    // ── Audit ───────────────────────────────────────────────
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
    collection: 'activity_sessions',
  }
);

// ─── Indexes ─────────────────────────────────────────────────

// Primary lookup: student's session history
ActivitySessionSchema.index({ studentId: 1, status: 1, assignedAt: -1 });

// Cross-app analytics: sourceModule breakdown by status + time
ActivitySessionSchema.index({ sourceModule: 1, status: 1, assignedAt: -1 });

// Activity performance: how often each activity is completed / skipped
ActivitySessionSchema.index({ activityId: 1, status: 1 });

// Teacher Dashboard: sessions by grade over time
ActivitySessionSchema.index({ gradeAtSession: 1, assignedAt: -1 });

// Parent Dashboard: child's recent activity
ActivitySessionSchema.index({ studentId: 1, assignedAt: -1 });

// Compound analytics: sourceModule + grade + status
ActivitySessionSchema.index({ sourceModule: 1, gradeAtSession: 1, status: 1 });

// Expiry cleanup job
ActivitySessionSchema.index({ expiresAt: 1 }, { sparse: true });

// Soft delete filter
ActivitySessionSchema.index({ isDeleted: 1, studentId: 1 });

// ─── Virtual: Completion Time (minutes) ─────────────────────
ActivitySessionSchema.virtual('actualDurationMinutes').get(function () {
  if (!this.actualDurationSeconds) return null;
  return parseFloat((this.actualDurationSeconds / 60).toFixed(2));
});

// ─── Virtual: Was On Time ────────────────────────────────────
ActivitySessionSchema.virtual('wasOnTime').get(function () {
  if (!this.completedAt || !this.expiresAt) return null;
  return this.completedAt <= this.expiresAt;
});

// ─── Pre-save Hook: Auto-compute actualDurationSeconds ───────
ActivitySessionSchema.pre('save', function (next) {
  if (this.startedAt && this.completedAt && !this.actualDurationSeconds) {
    this.actualDurationSeconds = Math.round(
      (this.completedAt - this.startedAt) / 1000
    );
  }
  next();
});

// ─── Model ───────────────────────────────────────────────────
export const ActivitySessionModel = mongoose.model('ActivitySession', ActivitySessionSchema);
export default ActivitySessionModel;

```

---

### `backend/modules/physical-activity/models/ActivitySkip.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Collection: activity_skips
 * ============================================================
 * Dedicated collection for skip events. Stored separately from
 * activity_sessions so skip analytics can be queried in
 * isolation (e.g., "which activities are most skipped?",
 * "skip rate by sourceModule?", "skip reasons breakdown").
 *
 * Every skip document links back to its parent session via
 * `sessionId` and carries `sourceModule` for cross-app tracing.
 * ============================================================
 */

import mongoose from 'mongoose';
import { SOURCE_MODULES } from './Activity.js';

const { Schema } = mongoose;

// ─── Skip Reason Constants ───────────────────────────────────
export const SKIP_REASONS = Object.freeze({
  NOT_INTERESTED:     'NOT_INTERESTED',
  TOO_TIRED:          'TOO_TIRED',
  NO_SPACE_AVAILABLE: 'NO_SPACE_AVAILABLE',
  ALREADY_ACTIVE:     'ALREADY_ACTIVE',
  TECHNICAL_ISSUE:    'TECHNICAL_ISSUE',
  OTHER:              'OTHER',
});

// ─── Activity Skip Schema ─────────────────────────────────────
const ActivitySkipSchema = new Schema(
  {
    // ── Foreign Keys ────────────────────────────────────────
    studentId: {
      type: String,
      required: [true, 'studentId is required'],
      index: true,
    },
    activityId: {
      type: String,
      required: [true, 'activityId is required'],
      index: true,
    },
    sessionId: {
      type: Schema.Types.ObjectId,
      ref: 'ActivitySession',
      required: [true, 'sessionId is required — every skip must link to a session'],
      index: true,
    },

    // ── Source Module (REQUIRED — cross-app analytics) ───────
    sourceModule: {
      type: String,
      required: [true, 'sourceModule is required on every skip record'],
      enum: {
        values: Object.values(SOURCE_MODULES),
        message: '`{VALUE}` is not a valid sourceModule',
      },
      index: true,
    },

    // ── Grade at time of skip (denormalised for analytics) ───
    gradeAtSkip: {
      type: String,
      required: [true, 'gradeAtSkip is required'],
      enum: ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
    },

    // ── Skip Timing ──────────────────────────────────────────
    skippedAt: {
      type: Date,
      required: [true, 'skippedAt is required'],
      default: Date.now,
      index: true,
    },

    // ── How far through the activity the student was ─────────
    // 0 = skipped before starting, >0 = skipped mid-activity
    secondsBeforeSkip: {
      type: Number,
      default: 0,
      min: [0, 'secondsBeforeSkip cannot be negative'],
    },
    stepsCompletedBeforeSkip: {
      type: Number,
      default: 0,
      min: 0,
    },

    // ── Skip Reason ──────────────────────────────────────────
    skipReason: {
      type: String,
      required: [true, 'skipReason is required'],
      enum: {
        values: Object.values(SKIP_REASONS),
        message: '`{VALUE}` is not a valid skip reason',
      },
      index: true,
    },
    skipReasonDetail: {
      type: String,
      default: null,
      maxlength: [500, 'Skip reason detail cannot exceed 500 characters'],
      trim: true,
    },

    // ── Who initiated the skip ───────────────────────────────
    skippedBy: {
      type: String,
      required: true,
      enum: {
        values: ['STUDENT', 'TEACHER', 'PARENT', 'AI_TUTOR', 'SYSTEM'],
        message: '`{VALUE}` is not a valid skippedBy value',
      },
      default: 'STUDENT',
    },

    // ── Mood at time of skip ─────────────────────────────────
    moodAtSkip: {
      type: String,
      enum: ['happy', 'sad', 'excited', 'tired', 'focused', 'anxious', 'calm', 'unknown'],
      default: 'unknown',
    },

    // ── Follow-up ────────────────────────────────────────────
    // Was an alternative activity suggested after the skip?
    alternativeSuggested:  { type: Boolean, default: false },
    alternativeActivityId: { type: String, default: null },

    // ── Audit ───────────────────────────────────────────────
    isReviewed: { type: Boolean, default: false },  // teacher/parent reviewed flag
    reviewedAt: { type: Date, default: null },
    reviewedBy: { type: String, default: null },
  },
  {
    timestamps: true,
    collection: 'activity_skips',
  }
);

// ─── Indexes ─────────────────────────────────────────────────

// Student skip history (most recent first)
ActivitySkipSchema.index({ studentId: 1, skippedAt: -1 });

// Analytics: skip rate per activity across all students
ActivitySkipSchema.index({ activityId: 1, skippedAt: -1 });

// Cross-app: which sourceModule generates the most skips?
ActivitySkipSchema.index({ sourceModule: 1, skipReason: 1, skippedAt: -1 });

// Skip reason breakdown (global analytics)
ActivitySkipSchema.index({ skipReason: 1, gradeAtSkip: 1 });

// Teacher review queue
ActivitySkipSchema.index({ isReviewed: 1, skippedAt: -1 });

// Compound: skip pattern per student per module
ActivitySkipSchema.index({ studentId: 1, sourceModule: 1, skipReason: 1 });

// ─── Virtual: Skipped After Start ───────────────────────────
ActivitySkipSchema.virtual('skippedAfterStart').get(function () {
  return this.secondsBeforeSkip > 0;
});

// ─── Model ───────────────────────────────────────────────────
export const ActivitySkipModel = mongoose.model('ActivitySkip', ActivitySkipSchema);
export default ActivitySkipModel;

```

---

### `backend/modules/physical-activity/models/FitFriendChat.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const FitFriendChatSchema = new Schema(
  {
    studentId: {
      type: String,
      required: [true, 'studentId is required'],
      index: true,
    },
    message: {
      type: String,
      required: [true, 'message is required'],
    },
    sender: {
      type: String,
      required: [true, 'sender is required'],
      enum: ['student', 'fitfriend'],
    },
    grade: {
      type: String,
      default: 'KG',
    },
    recommendedActivityId: {
      type: String,
      default: null,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    }
  },
  {
    timestamps: true,
    collection: 'fitfriend_chats',
  }
);

FitFriendChatSchema.index({ studentId: 1, timestamp: -1 });

export const FitFriendChatModel = mongoose.model('FitFriendChat', FitFriendChatSchema);
export default FitFriendChatModel;

```

---

### `backend/modules/physical-activity/models/index.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Models Index (Barrel Export)
 * ============================================================
 * Single import point for all Physical Activity Engine models.
 *
 * Usage:
 *   import {
 *     StudentModel,
 *     ActivityModel,
 *     ActivitySessionModel,
 *     ActivitySkipModel,
 *     ActivityRewardModel,
 *     ActivityAnalyticsModel,
 *     SOURCE_MODULES,
 *     SESSION_STATUS,
 *     SKIP_REASONS,
 *     REWARD_TYPES,
 *     REWARD_TRIGGERS,
 *   } from '../models/index.js';
 * ============================================================
 */

// ── Models ────────────────────────────────────────────────────
export { default as StudentModel }           from './Student.js';
export { default as ActivityModel }          from './Activity.js';
export { default as ActivitySessionModel }   from './ActivitySession.js';
export { default as ActivitySkipModel }      from './ActivitySkip.js';
export { default as ActivityRewardModel }    from './ActivityReward.js';
export { default as ActivityAnalyticsModel } from './ActivityAnalytics.js';
export { default as FitFriendChatModel }      from './FitFriendChat.js';

// ── Enum Constants ────────────────────────────────────────────
export { SOURCE_MODULES, ACTIVITY_CATEGORIES, GRADE_LEVELS, MOOD_TAGS } from './Activity.js';
export { SESSION_STATUS }         from './ActivitySession.js';
export { SKIP_REASONS }           from './ActivitySkip.js';
export { REWARD_TYPES, REWARD_TRIGGERS } from './ActivityReward.js';

```

---

### `backend/modules/physical-activity/models/Student.js`
**Function:** Defines data schemas or structures (e.g., for physical activities or progress).

```js
/**
 * ============================================================
 * EduCare AI — Physical Activity Engine
 * Collection: students
 * ============================================================
 * Stores the student profile used across all Physical Activity
 * Engine operations. Linked to every activity session, skip,
 * reward, and analytics record via `studentId`.
 * ============================================================
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;

// ─── Sub-Schema: Preferences ────────────────────────────────
const PreferencesSchema = new Schema(
  {
    preferredActivityTypes: {
      type: [String],
      enum: ['stretching', 'cardio', 'yoga', 'dance', 'mindfulness', 'breathing', 'strength', 'coordination'],
      default: [],
    },
    disabledActivityTypes: {
      type: [String],
      enum: ['stretching', 'cardio', 'yoga', 'dance', 'mindfulness', 'breathing', 'strength', 'coordination'],
      default: [],
    },
    dailyGoalMinutes: {
      type: Number,
      default: 20,
      min: [5, 'Daily goal cannot be less than 5 minutes'],
      max: [120, 'Daily goal cannot exceed 120 minutes'],
    },
    weeklyGoalSessions: {
      type: Number,
      default: 5,
      min: [1, 'Weekly goal must be at least 1 session'],
      max: [21, 'Weekly goal cannot exceed 21 sessions'],
    },
    notificationsEnabled: { type: Boolean, default: true },
  },
  { _id: false }
);

// ─── Sub-Schema: Streak ─────────────────────────────────────
const StreakSchema = new Schema(
  {
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastActiveDate: { type: Date, default: null },
  },
  { _id: false }
);

// ─── Sub-Schema: Aggregate Stats ────────────────────────────
const AggregateStatsSchema = new Schema(
  {
    totalSessionsCompleted: { type: Number, default: 0 },
    totalSessionsSkipped:   { type: Number, default: 0 },
    totalMinutesActive:     { type: Number, default: 0 },
    totalStarsEarned:       { type: Number, default: 0 },
    totalBadgesEarned:      { type: Number, default: 0 },
  },
  { _id: false }
);

// ─── Main Student Schema ─────────────────────────────────────
const StudentSchema = new Schema(
  {
    // ── Identity ────────────────────────────────────────────
    studentId: {
      type: String,
      required: [true, 'studentId is required'],
      unique: true,
      trim: true,
      index: true,
    },
    displayName: {
      type: String,
      required: [true, 'displayName is required'],
      trim: true,
      maxlength: [80, 'Display name cannot exceed 80 characters'],
    },
    avatarUrl: {
      type: String,
      default: null,
    },

    // ── Academic Profile ────────────────────────────────────
    grade: {
      type: String,
      required: [true, 'grade is required'],
      enum: {
        values: ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
        message: '`{VALUE}` is not a supported grade level',
      },
      index: true,
    },
    age: {
      type: Number,
      min: [3, 'Age must be at least 3'],
      max: [18, 'Age cannot exceed 18'],
      default: null,
    },

    // ── Active Mood (synced by Mood Analysis Engine) ─────────
    currentMood: {
      type: String,
      enum: ['happy', 'sad', 'excited', 'tired', 'focused', 'anxious', 'calm', 'unknown'],
      default: 'unknown',
    },
    moodUpdatedAt: { type: Date, default: null },

    // ── Preferences & Goals ─────────────────────────────────
    preferences: { type: PreferencesSchema, default: () => ({}) },

    // ── Streak Tracking ─────────────────────────────────────
    streak: { type: StreakSchema, default: () => ({}) },

    // ── Aggregate Stats (denormalised for dashboard speed) ───
    stats: { type: AggregateStatsSchema, default: () => ({}) },

    // ── Earned Badges ────────────────────────────────────────
    badges: { type: [String], default: [] },

    // ── Status ──────────────────────────────────────────────
    isActive: { type: Boolean, default: true, index: true },
    parentId: { type: String, default: null, index: true },
    teacherId: { type: String, default: null, index: true },
  },
  {
    timestamps: true,          // createdAt, updatedAt
    collection: 'students',
  }
);

// ─── Indexes ─────────────────────────────────────────────────
// Compound: used by Teacher Dashboard to list students per grade
StudentSchema.index({ grade: 1, isActive: 1 });
// Compound: used by Parent Dashboard to list children
StudentSchema.index({ parentId: 1, isActive: 1 });
// Text search on displayName
StudentSchema.index({ displayName: 'text' });

// ─── Model ───────────────────────────────────────────────────
export const StudentModel = mongoose.model('Student', StudentSchema);
export default StudentModel;

```

---

### `backend/modules/physical-activity/routes/activity.js`
**Function:** Defines API endpoints and maps them to respective controllers.

```js
import express from 'express';
import {
  assignActivity,
  startActivity,
  completeActivity,
  skipActivity,
  getHistory,
  getReport,
  getRecommendation,
  recommendForInstructor,
  getSkipAnalytics,
  getParentReport,
  getTeacherAnalytics,
  grantReward,
  getRewardsList
} from '../controllers/activityController.js';

import {
  chatWithFitFriend,
  skipFitFriendActivity
} from '../controllers/fitFriendController.js';

const router = express.Router();

// Lifecycle Mutation Endpoints
router.post('/assign', assignActivity);
router.post('/start', startActivity);
router.post('/complete', completeActivity);
router.post('/skip', skipActivity);
router.post('/instructor-recommend', recommendForInstructor);

// FitFriend AI Chatbot Endpoints
router.post('/fitfriend/chat', chatWithFitFriend);
router.post('/fitfriend/skip', skipFitFriendActivity);

// Query / Analytics Endpoints
router.get('/history', getHistory);
router.get('/report', getReport);
router.get('/recommendation', getRecommendation);
router.get('/skip-analytics', getSkipAnalytics);
router.get('/parent-report', getParentReport);
router.get('/teacher-analytics', getTeacherAnalytics);

// Rewards Engine API Endpoints
router.post('/rewards/grant', grantReward);
router.get('/rewards', getRewardsList);

export default router;

```

---

### `backend/modules/physical-activity/services/triggerEngine.js`
**Function:** Contains core business logic, simulation behavior, or AI generation capabilities.

```js
import { eventBus } from '../../../shared/eventBus.js';
import { assignActivityInternal } from '../controllers/activityController.js';

// INTEGRATION_TAG: ENGLISH_MODULE
// INTEGRATION_TAG: MATH_MODULE
// INTEGRATION_TAG: STEM_MODULE
// INTEGRATION_TAG: LOGIC_MODULE
// INTEGRATION_TAG: SCIENCE_MODULE
// INTEGRATION_TAG: CODING_MODULE
// INTEGRATION_TAG: ROBOTICS_MODULE

export const initializeTriggerEngine = () => {
  console.log('🏁 [TriggerEngine] Initializing Cross Application Trigger Engine...');

  // Listen to ANY session completion event intercepted by eventBus pattern matching
  eventBus.on('ANY_SESSION_COMPLETED', async (payload) => {
    const { studentId, grade, sourceModule, originatingEvent } = payload;
    console.log(`🔀 [TriggerEngine] Capture: ${originatingEvent} for student ${studentId}. Scheduling physical activity...`);

    try {
      // Map originating module correctly
      let mappedSource = sourceModule;
      if (!mappedSource) {
        if (originatingEvent.includes('ENGLISH')) mappedSource = 'ENGLISH_APP';
        else if (originatingEvent.includes('MATH')) mappedSource = 'MATH_APP';
        else if (originatingEvent.includes('STEM')) mappedSource = 'STEM_APP';
        else if (originatingEvent.includes('LOGIC')) mappedSource = 'LOGIC_APP';
        else mappedSource = 'AI_TUTOR';
      }

      // Automatically assign a physical break activity
      const result = await assignActivityInternal({
        studentId,
        grade: grade || 'Grade 2',
        sourceModule: mappedSource
      });

      console.log(`✅ [TriggerEngine] Successfully assigned break activity ${result.activityId} (Session: ${result.sessionId})`);

      // Publish outbound PHYSICAL_ACTIVITY_ASSIGNMENT event for the frontend / other apps
      eventBus.publish('PHYSICAL_ACTIVITY_ASSIGNMENT', {
        studentId,
        sessionId: result.sessionId,
        activityId: result.activityId,
        sourceModule: mappedSource,
        activityDetail: result.activityDetail
      });
    } catch (err) {
      console.error('❌ [TriggerEngine] Auto-assignment failed:', err);
    }
  });
};

export default initializeTriggerEngine;

```

---

### `backend/modules/sparkyEngine.js`
**Function:** Contains core business logic, simulation behavior, or AI generation capabilities.

```js
/**
 * SPARKY AI - STEM Simulation Intelligence Engine
 * Role: Circuit Simulation + Engineering Thinking + Debugging Assistant
 */

export function processSparkyQuery({ message, grade, context, circuit, performanceScore = 100 }) {
  const q = message.toLowerCase();

  // 1. STRICT TOPIC ENFORCEMENT
  const forbiddenTopics = [
    'math', 'english', 'grammar', 'spell', 'logic', 'game', 
    'physical activity', 'run', 'jump', 'history', 'geography', 
    'joke', 'funny', 'general knowledge', 'chat', 'weather', 'sports'
  ];
  
  if (forbiddenTopics.some(topic => q.includes(topic))) {
    return formatResponse(
      "Topic out of bounds",
      "I am an engineering and circuit assistant. I do not teach that topic.",
      "Let's focus on your circuit simulation ⚡",
      "Engineers must stay focused on the task at hand.",
      "I'm ready when you want to talk about STEM!",
      'puzzled'
    );
  }

  // 2. DEBUG MODE / CIRCUIT INTELLIGENCE ENGINE
  if (q.includes('debug') || q.includes('fix') || q.includes('wrong') || q.includes('not working') || q.includes('broken')) {
    return analyzeCircuitDebug(circuit, grade);
  }

  // 3. SMART HINT SYSTEM
  if (q.includes('hint') || q.includes('help') || q.includes('solve') || q.includes('how do i')) {
    return generateSmartHint(context, grade, performanceScore, circuit);
  }

  // 4. REAL-TIME CIRCUIT TEACHER MODE
  if (q.includes('battery')) {
    return formatResponse(
      "Component: Battery",
      "The battery pushes electric current through the circuit. It is the power source.",
      "Connect the + and - sides to wires to form a loop.",
      "Think of a battery like a water pump pushing water through pipes.",
      "Great engineering question!",
      'excited'
    );
  }
  
  if (q.includes('switch')) {
    return formatResponse(
      "Component: Switch",
      "A switch controls the flow of electricity. It acts as a gate.",
      "When OPEN, electrons cannot pass. When CLOSED, they flow.",
      "It's like a drawbridge on a road.",
      "Keep exploring components!",
      'happy'
    );
  }

  if (q.includes('led') || q.includes('bulb') || q.includes('light')) {
    return formatResponse(
      "Component: Light Bulb / LED",
      "A bulb turns electrical energy into light energy.",
      "Place it in a closed circuit with a battery.",
      "LEDs only let current flow in one direction (polarity).",
      "You're learning fast!",
      'happy'
    );
  }

  if (q.includes('series') || q.includes('parallel')) {
    return formatResponse(
      "Circuit Types",
      "Series circuits have one path. Parallel circuits have multiple paths.",
      "In series, if one bulb breaks, all go out. In parallel, the others stay on.",
      "Homes use parallel circuits so you can turn off one light without turning off the whole house.",
      "Excellent question, engineer!",
      'thinking'
    );
  }

  // 5. STEM ENGINEERING THINKING MODE (Grade 3-4)
  if (grade === 'Grade 3' || grade === 'Grade 4') {
    return formatResponse(
      "Engineering Problem Solving",
      "Engineers solve problems systematically. We need to debug like a real engineer.",
      "1. Identify the problem\n2. Check power source\n3. Check connections\n4. Test output",
      "Your torch is not working? Let's debug like an engineer 🔧",
      "You have the mind of an inventor!",
      'thinking'
    );
  }

  // Default fallback
  return formatResponse(
    "General Inquiry",
    "I am Sparky, your STEM Simulation Assistant. How can I help with your circuit?",
    "You can ask me to 'debug', ask for a 'hint', or ask how a component works.",
    "Electricity needs a complete loop to flow ⚡",
    "I am here to help you build!",
    'happy'
  );
}

function analyzeCircuitDebug(circuit, grade) {
  if (!circuit || !circuit.slots) {
    return formatResponse(
      "No circuit state provided",
      "I cannot see what is currently on your circuit board.",
      "Start placing components onto the grid first.",
      "We must build before we can debug.",
      "Get building, engineer!",
      'puzzled'
    );
  }

  const hasBattery = circuit.slots.some(s => s?.id === 'BATTERY');
  const hasBulb = circuit.slots.some(s => s?.id === 'BULB');
  const hasSwitch = circuit.slots.some(s => s?.id === 'SWITCH');
  const hasTestSlot = circuit.slots.some(s => s?.id === 'TEST_SLOT');
  
  if (!hasBattery) {
    return formatResponse(
      "Missing Power Source",
      "Your circuit does not have a battery.",
      "Drag a Battery onto the left slot.",
      "Electricity needs a source to push the electrons.",
      "You can fix this easily!",
      'thinking'
    );
  }

  if (hasSwitch && circuit.switchClosed === false) {
    return formatResponse(
      "Open Circuit",
      "The switch is OPEN, so there is a gap in the connection.",
      "Click the switch to CLOSE it.",
      "Electrons cannot jump over gaps in a wire.",
      "Almost there!",
      'thinking'
    );
  }

  if (hasTestSlot && circuit.selectedMaterial && !circuit.selectedMaterial.conductor) {
    return formatResponse(
      "Insulator Detected",
      `The ${circuit.selectedMaterial.name} is an insulator.`,
      "Change the material to a conductor like Gold or Paperclip.",
      "Insulators block electricity, conductors let it flow.",
      "Great job testing materials!",
      'thinking'
    );
  }

  if (!hasBulb && !circuit.slots.some(s => s?.id === 'FAN' || s?.id === 'BUZZER' || s?.id === 'RESISTOR')) {
    return formatResponse(
      "Short Circuit Risk",
      "You have power but nothing to consume it! The battery will get hot.",
      "Add a Light Bulb, Fan, or Buzzer.",
      "Energy must be used by a load to be safe.",
      "Safety first, engineer!",
      'thinking'
    );
  }

  return formatResponse(
    "Circuit Looks Complete",
    "I don't see any obvious errors in the loop.",
    "Click the 'Test' button to see if it works.",
    "Good engineers always double-check their work.",
    "Great job!",
    'excited'
  );
}

function generateSmartHint(context, grade, score, circuit) {
  let level = 1; // 1 = Hint only, 2 = Step guidance, 3 = Direct fix suggestion
  if (score < 40) level = 3;
  else if (score < 80) level = 2;

  let fixText = "";

  if (context === 'lesson-kg-std') {
    if (level === 1) fixText = "Check your power source and connections.";
    if (level === 2) fixText = "First place a battery, then place a bulb.";
    if (level === 3) fixText = "Place BATTERY in the left slot and BULB in the right slot to make a loop.";
  } else if (grade === 'Grade 1') {
    if (level === 1) fixText = "Think about which materials are conductors.";
    if (level === 2) fixText = "Metal objects let electricity pass.";
    if (level === 3) fixText = "Select the Gold Coin or Paperclip to complete the circuit.";
  } else {
    // Generic
    if (level === 1) fixText = "Make sure the loop is closed and you have power.";
    if (level === 2) fixText = "Check if your switch is open or if you're missing a battery.";
    if (level === 3) fixText = "Add a Battery, add a Bulb, and close the Switch.";
  }

  return formatResponse(
    `Smart Hint (Level ${level})`,
    "You asked for a hint. I have analyzed your progress to give you the right amount of help.",
    fixText,
    "Taking it step-by-step is how complex machines are built.",
    "I believe in you!",
    'happy'
  );
}

function formatResponse(problemAnalysis, explanation, fixSteps, learningInsight, encouragement, mood) {
  return {
    reply: {
      problemAnalysis,
      explanation,
      fixSteps,
      learningInsight,
      encouragement
    },
    mood
  };
}

```

---

### `backend/package.json`
**Function:** Defines project dependencies and scripts.

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend API for STEM & Circuit Simulator",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.2",
    "mongoose": "^8.9.3"
  }
}

```

---

### `backend/routes/stem.js`
**Function:** Defines API endpoints and maps them to respective controllers.

```js
import express from 'express';
import { 
  getProgress, 
  updateProgress, 
  getLessons, 
  getCurriculum,
  getChallenge, 
  validateCircuitRoute, 
  getRewards,
  getRecommendationRoute
} from '../controllers/stemController.js';

const router = express.Router();

router.get('/curriculum', getCurriculum);
router.get('/progress', getProgress);
router.post('/progress', updateProgress);
router.get('/lessons/:grade', getLessons);
router.post('/challenge', getChallenge);
router.post('/validate-circuit', validateCircuitRoute);
router.post('/recommend', getRecommendationRoute);
router.get('/rewards', getRewards);

export default router;


```

---

### `backend/server.js`
**Function:** Main entry point for the backend server. Configures Express, middleware, routes, and event bus.

```js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Import routers & engines
import stemRouter from './routes/stem.js';
import activityRouter from './modules/physical-activity/routes/activity.js';
import mathRouter from './modules/math/routes/math.js';
import logicRouter from './modules/logic/routes/logic.js';
import { processSparkyQuery } from './modules/sparkyEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS for production environment
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);
    
    // Check if origin matches allowed list, ends with .vercel.app (for previews), or if not in production
    if (
      process.env.NODE_ENV !== 'production' || 
      allowedOrigins.includes(origin) || 
      allowedOrigins.includes('*') ||
      origin.endsWith('.vercel.app')
    ) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'), false);
  },
  credentials: true
}));

app.use(express.json());

// Global connection state flag for controllers
global.mongoConnected = false;

// Database Connection Handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/educare-ai';

console.log('Connecting to MongoDB...');
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 1500 // 1.5 seconds timeout
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully!');
  global.mongoConnected = true;
})
.catch((err) => {
  console.log('⚠️ MongoDB connection failed. Activating local JSON fallback.');
  global.mongoConnected = false;
});

// Mount modular API routers
app.use('/stem', stemRouter);
app.use('/api', stemRouter); // Backwards compatibility mount
app.use('/activity', activityRouter);
app.use('/math', mathRouter);
app.use('/api/math', mathRouter);
app.use('/logic', logicRouter);
app.use('/api/logic', logicRouter);

// POST AI TUTOR (Intelligent STEM Simulation Assistant Engine)
app.post('/api/ai/tutor', (req, res) => {
  const { message, grade, context, circuit, performanceScore, errorHistory } = req.body;
  
  const result = processSparkyQuery({ 
    message: message || '', 
    grade, 
    context, 
    circuit, 
    performanceScore, 
    errorHistory 
  });
  
  res.json(result);
});

// Health Check Endpoint for Production Verification
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', database: global.mongoConnected ? 'connected' : 'fallback' });
});

// Serve Frontend Static files if built
const frontendBuildPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendBuildPath)) {
  app.use(express.static(frontendBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Modular Server running on port ${PORT}`);
});

export default app;

```

---

### `backend/shared/eventBus.js`
**Function:** Centralized Event Bus for cross-module communication.

```js
/**
 * global.eventBus — Shared Ecosystem Event Bus
 * ============================================================
 * An in-process Event Bus singleton that allows modular parts
 * of the EduCare AI ecosystem to communicate asynchronously.
 *
 * Implemented using Node's native EventEmitter.
 *
 * Registered Event Types:
 *   - Incoming Events:
 *     - ENGLISH_SESSION_COMPLETED
 *     - MATH_SESSION_COMPLETED
 *     - STEM_SESSION_COMPLETED
 *     - LOGIC_SESSION_COMPLETED
 *     - MOOD_UPDATED
 *   - Outgoing Events:
 *     - ACTIVITY_ASSIGNED
 *     - ACTIVITY_STARTED
 *     - ACTIVITY_COMPLETED
 *     - ACTIVITY_SKIPPED
 *     - ENGAGEMENT_UPDATED
 *     - PARENT_ALERT_GENERATED
 *     - REWARD_GRANTED
 *     - BADGE_UNLOCKED
 * ============================================================
 */

import { EventEmitter } from 'events';

class EduCareEventBus extends EventEmitter {
  constructor() {
    super();
    // Increase listener limit for microservice-like stubs
    this.setMaxListeners(100);
    this.setupDebugLog();
  }

  setupDebugLog() {
    this.on('newListener', (eventName) => {
      console.log(`[EventBus] New listener registered for event: ${eventName}`);
    });
  }

  // Helper to safely emit and log events
  publish(eventName, payload) {
    console.log(`📡 [EventBus] Publishing ${eventName} with payload:`, JSON.stringify(payload, null, 2));
    this.emit(eventName, {
      ...payload,
      _timestamp: new Date().toISOString()
    });

    // Reusable middleware trigger for Cross Application Trigger Engine
    if (eventName && eventName.endsWith('_SESSION_COMPLETED')) {
      console.log(`🔀 [EventBus] Intercepted wildcard session completion: ${eventName}. Emitting ANY_SESSION_COMPLETED.`);
      this.emit('ANY_SESSION_COMPLETED', {
        originatingEvent: eventName,
        ...payload,
        _timestamp: new Date().toISOString()
      });
    }
  }
}

// Ensure global singleton instance
if (!global.eduCareEventBus) {
  global.eduCareEventBus = new EduCareEventBus();
  
  // Register modular stubs for future components to show readiness
  const stubLogger = (moduleName, eventName) => (data) => {
    console.log(`🔮 [EventBus] [STUB] ${moduleName} received event: ${eventName}`);
  };

  // Robotics Module Stubs
  global.eduCareEventBus.on('ACTIVITY_COMPLETED', stubLogger('Robotics Module', 'ACTIVITY_COMPLETED'));
  global.eduCareEventBus.on('EVENT_ACTIVITY_COMPLETED', stubLogger('Robotics Module', 'EVENT_ACTIVITY_COMPLETED'));
  
  // Coding Module Stubs
  global.eduCareEventBus.on('STEM_SESSION_COMPLETED', stubLogger('Coding Module', 'STEM_SESSION_COMPLETED'));
  
  // Science Module Stubs
  global.eduCareEventBus.on('ACTIVITY_COMPLETED', stubLogger('Science Module', 'ACTIVITY_COMPLETED'));
  global.eduCareEventBus.on('EVENT_ACTIVITY_COMPLETED', stubLogger('Science Module', 'EVENT_ACTIVITY_COMPLETED'));
  
  // AR/VR Module Stubs
  global.eduCareEventBus.on('MOOD_UPDATED', stubLogger('AR/VR Module', 'MOOD_UPDATED'));
  global.eduCareEventBus.on('EVENT_MOOD_UPDATED', stubLogger('AR/VR Module', 'EVENT_MOOD_UPDATED'));
  
  // AI Tutor Agent Stubs
  const events = [
    'ENGLISH_SESSION_COMPLETED',
    'MATH_SESSION_COMPLETED',
    'STEM_SESSION_COMPLETED',
    'LOGIC_SESSION_COMPLETED',
    'MOOD_UPDATED',
    'ACTIVITY_ASSIGNED',
    'ACTIVITY_STARTED',
    'ACTIVITY_COMPLETED',
    'ACTIVITY_SKIPPED',
    'ENGAGEMENT_UPDATED',
    'PARENT_ALERT_GENERATED',
    'REWARD_GRANTED',
    'BADGE_UNLOCKED',
    'EVENT_LESSON_COMPLETED',
    'EVENT_ACTIVITY_ASSIGNED',
    'EVENT_ACTIVITY_STARTED',
    'EVENT_ACTIVITY_COMPLETED',
    'EVENT_ACTIVITY_SKIPPED',
    'EVENT_REWARD_GRANTED',
    'EVENT_MOOD_UPDATED'
  ];
  events.forEach(event => {
    global.eduCareEventBus.on(event, stubLogger('AI Tutor Agent', event));
  });
}

export const eventBus = global.eduCareEventBus;
export default eventBus;

```

---

### `DEPLOYMENT.md`
**Function:** Source code file.

```md
# EduCare AI STEM & Circuit Simulator - Split Deployment Guide

This document contains instructions to deploy the EduCare AI STEM & Circuit Simulator application.

## 1. Updated Project Folder Structure

```
EduCare AI/
├── .github/                   # GitHub Actions workflows
├── backend/                   # Node.js + Express backend
│   ├── data/                  # Lesson data
│   ├── routes/                # Express routes
│   ├── .env.example           # Backend environment template
│   ├── package.json           # Backend dependencies and scripts
│   └── server.js              # Backend entry point
├── frontend/                  # React + Vite frontend
│   ├── src/                   # React components and pages
│   │   ├── config.js          # API URL configuration [NEW]
│   │   └── ...
│   ├── .env.example           # Frontend environment template [NEW]
│   ├── package.json           # Frontend dependencies and scripts
│   ├── vercel.json            # Vercel SPA routing configuration [NEW]
│   └── ...
├── DEPLOYMENT.md              # Deployment guide [NEW]
├── package.json               # Monorepo root configuration
└── README.md                  # Project documentation
```

## 2. Required Code Changes for Split Deployment
To split the frontend and backend deployments, we executed the following:
1. **Removed Root `vercel.json`**: The root-level deployment configuration was deleted to allow independent frontend build on Vercel.
2. **Added Frontend SPA Routing (`frontend/vercel.json`)**: Configured Vercel's clean URLs and URL rewrites to route all SPA paths back to `index.html`.
3. **Refactored Frontend API Calls**: Prepend `API_BASE` (imported from `frontend/src/config.js`) to all API fetch paths instead of relying on relative serverless paths.
4. **Enabled Production CORS**: Configured the backend's `cors()` middleware to allow cross-origin requests from the custom frontend Vercel URL, localhost, and Vercel preview environments (`*.vercel.app`).
5. **Production Listener for Render**: Replaced the serverless-only logic in `backend/server.js` with `app.listen()` so the backend binds to the required port on Render.
6. **Health Check Endpoint**: Exposed `/health` and `/api/health` endpoints to allow Render to verify instance status.

## 3. Environment Variable Configuration

### Frontend (`frontend/.env`)
Create a `.env` file in the `frontend/` directory or configure these variables in the Vercel Dashboard:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```
*Note: Any environment variable used in the client-side code must start with `VITE_`.*

### Backend (`backend/.env`)
Create a `.env` file in the `backend/` directory or configure these variables in the Render Dashboard:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/educare-ai?retryWrites=true&w=majority
NODE_ENV=production
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,https://your-vercel-frontend-url.vercel.app
```

---

## 4. Deployment Checklists & Steps

### A. MongoDB Atlas (Database)
1. **Sign Up/Log In**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in.
2. **Create a Cluster**: Deploy a new free cluster (Shared Tier M0) in your preferred cloud provider and region.
3. **Database User**: Go to **Database Access** -> **Add New Database User**. Choose Password authentication and assign the role `Read and write to any database`.
4. **Network Access**: Go to **Network Access** -> **Add IP Address**. For deployment, add `0.0.0.0/0` (allow access from anywhere) so that Render server instances can connect.
5. **Get Connection String**: Go to **Database** -> **Connect** -> **Drivers**. Copy the connection string. Replace `<password>` with the database user's password and change the database name to `educare-ai`. Save this string as `MONGODB_URI` for the backend.

### B. Render (Backend)
1. **Sign Up/Log In**: Go to [Render](https://render.com) and link your GitHub account.
2. **Create Web Service**: Click **New +** -> **Web Service**. Select your GitHub repository.
3. **Configure Settings**:
   - **Name**: `educare-ai-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Configure Environment Variables**: Under the **Environment** tab, click **Add Environment Variable** and enter:
   - `PORT` = `5000` (or leave empty to let Render assign)
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `<your-mongodb-atlas-connection-string>`
   - `ALLOWED_ORIGINS` = `https://your-vercel-app-name.vercel.app`
5. **Deploy**: Render will automatically start building and deploy your Express backend. Copy the generated Web Service URL (e.g. `https://educare-ai-backend.onrender.com`).

### C. Vercel (Frontend)
1. **Sign Up/Log In**: Go to [Vercel](https://vercel.com) and link your GitHub account.
2. **Import Project**: Click **Add New** -> **Project**. Select your GitHub repository.
3. **Configure Project Settings**:
   - **Framework Preset**: `Vite` (Vercel will auto-detect Vite)
   - **Root Directory**: `frontend` (Click edit and select `frontend`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **Configure Environment Variables**: Expand **Environment Variables** and add:
   - Key: `VITE_API_URL`
   - Value: `<your-render-backend-url>` (without a trailing slash, e.g. `https://educare-ai-backend.onrender.com`)
5. **Deploy**: Click **Deploy**. Vercel will build your static React files and serve them as a Single Page Application (SPA).

### D. GitHub (Version Control & CI/CD)
1. Ensure you have the `development` and `main` branches set up.
2. Run standard git operations to push the latest changes:
   ```bash
   git add .
   git commit -m "Configure project for split deployment"
   git push origin main
   ```

```

---

### `frontend/.env.example`
**Function:** Environment variable definitions/examples.

```example
# The public URL of the backend API (e.g. deployed on Render)
VITE_API_URL=https://your-backend-url.com

```

---

### `frontend/eslint.config.js`
**Function:** Source code file.

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])

```

---

### `frontend/index.html`
**Function:** Root HTML template for the frontend application.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EduCare AI - STEM & Circuit Simulator</title>
    <meta name="description" content="Interactive STEM and circuit learning platform for children Kindergarten to Grade 4. Build, learn, and explore electricity!" />
    <meta property="og:title" content="EduCare AI STEM Simulator" />
    <meta property="og:description" content="Interactive, gamified STEM curriculum and circuit builder for young minds." />
    <meta property="og:type" content="website" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

---

### `frontend/package.json`
**Function:** Defines project dependencies and scripts.

```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^1.18.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.17.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^3.4.19",
    "vite": "^8.0.12"
  }
}

```

---

### `frontend/postcss.config.js`
**Function:** Source code file.

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

---

### `frontend/README.md`
**Function:** Source code file.

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

---

### `frontend/tailwind.config.js`
**Function:** Configuration for Tailwind CSS, including custom color themes and animations.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        science: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae2fd',
          300: '#7dd0fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#07557b',
          900: '#0c4865',
        },
        spark: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        energy: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        power: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        electric: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f472b6',
          400: '#db2777',
          500: '#be185d',
        }
      },
      fontFamily: {
        sans: ['"Fredoka"', '"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cartoon': '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
        'cartoon-lg': '6px 6px 0px 0px rgba(0, 0, 0, 0.15)',
        'cartoon-xl': '8px 8px 0px 0px rgba(0, 0, 0, 0.15)',
        'cartoon-hover': '2px 2px 0px 0px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'electron-flow': 'electron-flow 2s linear infinite',
      },
      keyframes: {
        'electron-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}

```

---

### `frontend/vercel.json`
**Function:** Source code file.

```json
{
  "cleanUrls": true,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}

```

---

### `frontend/vite.config.js`
**Function:** Vite bundler configuration, including proxy setup for the backend API.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/stem': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

```

---

### `package.json`
**Function:** Defines project dependencies and scripts.

```json
{
  "name": "educare-ai-stem-workspace",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:backend": "npm run dev --prefix backend",
    "dev:frontend": "npm run dev --prefix frontend",
    "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
    "build:frontend": "npm run build --prefix frontend",
    "start:backend": "npm run start --prefix backend",
    "build": "npm run build:frontend",
    "start": "npm run start:backend"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}

```

---

### `README.md`
**Function:** Source code file.

```md
# EduCare AI - STEM & Circuit Simulator

EduCare AI's STEM & Circuit Simulator is an interactive, adaptive web application designed to teach children (Kindergarten to Grade 4) the basics of electricity and circuitry. Using an intelligent, gamified approach, the platform scales in complexity according to a child's grade level and performance.

## Features
- **Adaptive Curriculum**: Progresses through age-appropriate concepts (loops, conductors, switches, motors, resistors).
- **Gamified Rewards**: Students earn stars and badges by completing interactive challenges.
- **AI Recommendation Engine**: Automatically suggests the best lesson based on the student's performance, adjusting hints and difficulty.
- **Interactive Simulator**: A click-to-slot visual playground to safely experiment with batteries, bulbs, buzzers, fans, and more.

## Technology Stack
- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)

## Recommended Branching Strategy
We recommend using the standard Git Flow or a simplified feature branching strategy for future development:
- `main` - Production-ready code.
- `development` - Active integration branch for the next release.
- `feature/stem-lessons` - For adding new lesson plans or subjects.
- `feature/circuit-simulator` - For developing new simulator components.
- `feature/rewards-system` - For extending the gamification logic.

## Installation Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd "EduCare AI"
   ```

2. **Install Root Dependencies** (concurrently):
   ```bash
   npm install
   ```

3. **Install Sub-module Dependencies**:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ..
   ```

4. **Environment Setup**:
   - Copy `backend/.env.example` to `backend/.env`
   - Adjust `MONGODB_URI` or `PORT` if needed.
   - Ensure MongoDB is running locally or provide an Atlas connection string.

## Run Instructions

Start both the backend and frontend simultaneously from the root directory:
```bash
npm run dev
```

- The frontend will be available at `http://localhost:3000` (or `3001` if busy).
- The backend API will be available at `http://localhost:5000`.

```

---


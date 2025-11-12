"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function OceanDataAPIDocs() {
  const [activeTab, setActiveTab] = useState("overview")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="relative py-32 md:py-40 px-4 border-b border-amber-500/10 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-responsive max-w-7xl relative z-10">
        {/* API Documentation Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">API DOCUMENTATION</div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>
          <div className="mb-6">
            <div className="font-mono text-[9px] text-gray-600 mb-2">REF: MR-API-DOC | REV: 2.0 | VERSION: v2.1</div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-white/90">
            Ocean Data<br />API Reference
          </h2>
          <div className="h-px w-24 bg-amber-500/30 mb-6" />
          <p className="text-base md:text-lg text-gray-500 font-light max-w-3xl leading-relaxed">
            Complete API documentation for accessing real-time and historical oceanographic data. RESTful endpoints with JSON responses, comprehensive authentication, rate limiting, and webhook support.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-8 md:mb-12 border-b border-gray-800/50 overflow-x-auto">
          <div className="flex flex-wrap gap-2 md:gap-4 min-w-max">
            {[
              { id: "overview", label: "Overview" },
              { id: "use-cases", label: "Use Cases" },
              { id: "authentication", label: "Authentication" },
              { id: "endpoints", label: "Endpoints" },
              { id: "sdks", label: "SDKs" },
              { id: "webhooks", label: "Webhooks" },
              { id: "errors", label: "Error Codes" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 md:pb-4 px-2 md:px-3 font-mono text-xs md:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-amber-500 border-b-2 border-amber-500"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Quick Start */}
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: QS-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">QUICK START</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-6 tracking-tight">Get Started in 5 Minutes</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">STEP 1: GET YOUR API KEY</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code">
                    <button
                      onClick={() => copyToClipboard("curl https://api.melonrobotics.com/v2/auth/keys -H 'Authorization: Bearer YOUR_API_KEY'", "step1")}
                      className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                    >
                      {copiedCode === "step1" ? "COPIED" : "COPY"}
                    </button>
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{`curl https://api.melonrobotics.com/v2/auth/keys \\
  -H 'Authorization: Bearer YOUR_API_KEY'`}
                    </pre>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">STEP 2: MAKE YOUR FIRST REQUEST</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code">
                    <button
                      onClick={() => copyToClipboard("curl https://api.melonrobotics.com/v2/stations/MELON_BUOY_A7/current -H 'Authorization: Bearer sk_live_...'", "step2")}
                      className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                    >
                      {copiedCode === "step2" ? "COPIED" : "COPY"}
                    </button>
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{`curl https://api.melonrobotics.com/v2/stations/\\
  MELON_BUOY_A7/current \\
  -H 'Authorization: Bearer sk_live_...'`}
                    </pre>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">STEP 3: HANDLE THE RESPONSE</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4">
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{`{
  "station": "MELON_BUOY_A7",
  "timestamp": "2025-01-15T14:32:18Z",
  "location": {
    "lat": 34.0522,
    "lon": -118.2437
  },
  "waves": {
    "hs": 2.3,
    "tp": 8.1,
    "direction": 215
  },
  "currents": {
    "speed": 1.2,
    "dir": 215,
    "depth": 5.0
  },
  "sst": 21.6,
  "salinity": 34.8,
  "quality": "GOOD"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Base URL */}
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: BASE-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">BASE URL</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <div className="bg-black/60 border border-gray-800/50 p-4 font-mono text-lg text-amber-500/90">
                https://api.melonrobotics.com/v2
              </div>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed font-light">
                All API requests must be made over HTTPS. The API uses versioning in the URL path. Current stable version is v2.
              </p>
            </div>

            {/* Rate Limits */}
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: RL-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">RATE LIMITS</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { plan: "Core", limit: "10,000", period: "per month" },
                  { plan: "Pro", limit: "100,000", period: "per month" },
                  { plan: "Enterprise", limit: "Unlimited", period: "" },
                ].map((limit, idx) => (
                  <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                    <div className="font-mono text-[9px] text-amber-500/70 mb-2">{limit.plan.toUpperCase()}</div>
                    <div className="text-2xl font-light text-white mb-1 font-mono">{limit.limit}</div>
                    <div className="text-xs text-gray-600 font-mono">{limit.period}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-6 leading-relaxed font-light">
                Rate limits are enforced per API key. Exceeding limits returns a 429 status code. Rate limit headers are included in all responses.
              </p>
            </div>
          </motion.div>
        )}

        {/* Use Cases Tab */}
        {activeTab === "use-cases" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              {[
                {
                  title: "Offshore Wind Farm Operations",
                  description: "Real-time wave and current data enables safe installation windows, reduces downtime, and optimizes maintenance schedules. AI forecasts predict 7-day weather windows with 87% accuracy.",
                  value: "Reduce operational downtime by 40%",
                  endpoints: ["/v2/forecast/{region}", "/v2/stations/{id}/current"],
                  ref: "UC-001"
                },
                {
                  title: "Maritime Route Optimization",
                  description: "Historical current data and real-time conditions optimize shipping routes, reducing fuel consumption and transit time. API integration with vessel management systems.",
                  value: "Save $50K+ per vessel annually",
                  endpoints: ["/v2/routes/optimize", "/v2/currents/bulk"],
                  ref: "UC-002"
                },
                {
                  title: "Environmental Compliance Monitoring",
                  description: "Continuous water quality monitoring with automated alerts for regulatory thresholds. Historical archives support compliance reporting and trend analysis.",
                  value: "Automated compliance reporting",
                  endpoints: ["/v2/water-quality", "/v2/alerts/threshold"],
                  ref: "UC-003"
                },
                {
                  title: "Search & Rescue Operations",
                  description: "Real-time current and wave data improves drift modeling and search area calculations. API integration with SAR coordination systems.",
                  value: "Improve search efficiency by 60%",
                  endpoints: ["/v2/currents/realtime", "/v2/drift-model"],
                  ref: "UC-004"
                },
                {
                  title: "Aquaculture Farm Management",
                  description: "Monitor water temperature, salinity, and oxygen levels for optimal fish health. Automated alerts prevent mortality events.",
                  value: "Reduce mortality by 25%",
                  endpoints: ["/v2/stations/{id}/current", "/v2/alerts/custom"],
                  ref: "UC-005"
                },
                {
                  title: "Coastal Engineering & Research",
                  description: "10+ years of historical data supports coastal erosion studies, infrastructure planning, and climate research. Export capabilities for modeling software.",
                  value: "Access 10+ years of data",
                  endpoints: ["/v2/stations/{id}/history", "/v2/export/bulk"],
                  ref: "UC-006"
                },
                {
                  title: "Oil & Gas Platform Operations",
                  description: "Critical wave and current data for safe helicopter operations, supply vessel scheduling, and emergency response planning. Enterprise SLAs ensure 99.9% uptime.",
                  value: "Ensure operational safety",
                  endpoints: ["/v2/forecast/{region}", "/v2/stations/bulk"],
                  ref: "UC-007"
                },
                {
                  title: "Marine Insurance & Risk Assessment",
                  description: "Historical storm data and wave statistics support underwriting decisions and risk modeling. API integration with insurance platforms.",
                  value: "Improve risk assessment accuracy",
                  endpoints: ["/v2/storms/history", "/v2/statistics/waves"],
                  ref: "UC-008"
                },
              ].map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 relative group"
                >
                  <div className="absolute top-3 right-3">
                    <div className="font-mono text-[8px] text-gray-700">{useCase.ref}</div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-light text-white/90 mb-3 tracking-tight pr-8">{useCase.title}</h3>
                    <div className="h-px w-8 bg-amber-500/30 mb-4" />
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">{useCase.description}</p>
                  
                  <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-1">VALUE PROPOSITION</div>
                    <div className="text-sm text-amber-500/90 font-light">{useCase.value}</div>
                  </div>
                  
                  <div>
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">RELEVANT ENDPOINTS</div>
                    <div className="space-y-1">
                      {useCase.endpoints.map((ep, eIdx) => (
                        <code key={eIdx} className="block text-xs text-amber-500/80 font-mono bg-black/40 px-2 py-1">
                          {ep}
                        </code>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Integration Examples */}
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: INT-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">INTEGRATION EXAMPLES</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-6 tracking-tight">Real-World Integrations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    platform: "Vessel Management Systems",
                    description: "Real-time route optimization integrated with AIS and navigation systems",
                    code: `const route = await oceanData.routes.optimize({
  origin: { lat: 34.0522, lon: -118.2437 },
  destination: { lat: 33.6846, lon: -118.0000 },
  constraints: { maxWaveHs: 3.0, maxCurrent: 2.0 }
})`
                  },
                  {
                    platform: "Weather Dashboards",
                    description: "Embedded widgets showing live ocean conditions for operational planning",
                    code: `const conditions = await oceanData.stations.current('MELON_BUOY_A7')
dashboard.update({
  waves: conditions.waves,
  currents: conditions.currents,
  forecast: await oceanData.forecast.get('PACIFIC_SOUTH')
})`
                  },
                  {
                    platform: "Automated Alerting",
                    description: "Webhook integration triggers SMS/email alerts when thresholds exceeded",
                    code: `webhook.on('threshold_exceeded', async (event) => {
  if (event.data.value > event.data.threshold) {
    await sendAlert({
      channel: 'sms',
      message: \`Alert: \${event.parameter} = \${event.value}\`
    })
  }
})`
                  },
                ].map((example, idx) => (
                  <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                    <div className="font-mono text-sm text-white mb-2">{example.platform}</div>
                    <div className="text-xs text-gray-500 mb-3">{example.description}</div>
                    <div className="bg-black/60 border border-gray-800/50 p-3">
                      <pre className="text-[10px] text-gray-300 font-mono overflow-x-auto">
{example.code}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Authentication Tab */}
        {activeTab === "authentication" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: AUTH-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">AUTHENTICATION</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-6 tracking-tight">API Keys</h3>
              <p className="text-base text-gray-400 leading-relaxed font-light mb-6">
                All API requests require authentication using a Bearer token in the Authorization header. API keys are scoped to your account and subscription tier.
              </p>
              
              <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code mb-6">
                <button
                  onClick={() => copyToClipboard("Authorization: Bearer sk_live_51H...", "auth")}
                  className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                >
                  {copiedCode === "auth" ? "COPIED" : "COPY"}
                </button>
                <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{`Authorization: Bearer sk_live_51H...`}
                </pre>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">KEY TYPES</div>
                  <div className="space-y-3">
                    {[
                      { type: "Live Keys", prefix: "sk_live_", description: "Production API keys for live data access" },
                      { type: "Test Keys", prefix: "sk_test_", description: "Sandbox keys for development and testing" },
                    ].map((key, idx) => (
                      <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-mono text-sm text-white">{key.type}</div>
                          <div className="font-mono text-xs text-amber-500/70">{key.prefix}...</div>
                        </div>
                        <div className="text-xs text-gray-500">{key.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Endpoints Tab */}
        {activeTab === "endpoints" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Endpoint Categories */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">REAL-TIME DATA</div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </div>
            </div>

            {[
              {
                method: "GET",
                path: "/v2/stations/{station_id}/current",
                description: "Get current real-time data from a specific station. Returns latest sensor readings with quality indicators and metadata.",
                ref: "EP-001",
                category: "Real-Time",
                params: [
                  { name: "station_id", type: "string", required: true, description: "Station identifier (e.g., MELON_BUOY_A7)" },
                  { name: "parameters", type: "array", required: false, description: "Filter specific parameters (waves, currents, sst, salinity)" }
                ],
                response: {
                  status: 200,
                  body: `{
  "station": "MELON_BUOY_A7",
  "timestamp": "2025-01-15T14:32:18Z",
  "location": { "lat": 34.0522, "lon": -118.2437 },
  "waves": { "hs": 2.3, "tp": 8.1, "direction": 215 },
  "currents": { "speed": 1.2, "dir": 215, "depth": 5.0 },
  "sst": 21.6,
  "salinity": 34.8,
  "quality": "GOOD",
  "next_update": "2025-01-15T14:37:18Z"
}`
                }
              },
              {
                method: "GET",
                path: "/v2/stations/bulk",
                description: "Retrieve current data from multiple stations in a single request. Optimized for dashboard and monitoring applications.",
                ref: "EP-002",
                category: "Real-Time",
                params: [
                  { name: "station_ids", type: "array", required: true, description: "Array of station identifiers" },
                  { name: "parameters", type: "array", required: false, description: "Filter specific parameters" }
                ],
                response: {
                  status: 200,
                  body: `{
  "timestamp": "2025-01-15T14:32:18Z",
  "stations": [
    {
      "station": "MELON_BUOY_A7",
      "waves": { "hs": 2.3, "tp": 8.1 },
      "currents": { "speed": 1.2, "dir": 215 },
      "sst": 21.6
    },
    {
      "station": "MELON_BUOY_B3",
      "waves": { "hs": 1.8, "tp": 7.5 },
      "currents": { "speed": 0.9, "dir": 210 },
      "sst": 20.8
    }
  ]
}`
                }
              },
              {
                method: "GET",
                path: "/v2/stations/nearby",
                description: "Find stations within a geographic radius. Perfect for location-based queries and regional monitoring.",
                ref: "EP-003",
                category: "Real-Time",
                params: [
                  { name: "lat", type: "float", required: true, description: "Latitude" },
                  { name: "lon", type: "float", required: true, description: "Longitude" },
                  { name: "radius", type: "integer", required: false, description: "Radius in kilometers (default: 50)" },
                  { name: "limit", type: "integer", required: false, description: "Maximum results (default: 10)" }
                ],
                response: {
                  status: 200,
                  body: `{
  "query": { "lat": 34.0522, "lon": -118.2437, "radius": 50 },
  "stations": [
    {
      "station": "MELON_BUOY_A7",
      "distance": 2.3,
      "location": { "lat": 34.0522, "lon": -118.2437 },
      "current": { "waves": { "hs": 2.3 }, "sst": 21.6 }
    }
  ]
}`
                }
              },
            ].map((endpoint, idx) => (
              <div key={idx} className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group mb-6 md:mb-8">
                <div className="absolute top-4 right-4">
                  <div className="font-mono text-[8px] text-gray-700">{endpoint.ref}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 font-mono text-xs border ${
                      endpoint.method === "GET" ? "border-green-500/50 text-green-400" :
                      endpoint.method === "POST" ? "border-blue-500/50 text-blue-400" :
                      endpoint.method === "PUT" ? "border-amber-500/50 text-amber-400" :
                      "border-red-500/50 text-red-400"
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg text-amber-500/90 font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed font-light">{endpoint.description}</p>
                </div>

                {endpoint.params && (
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">PARAMETERS</div>
                    <div className="space-y-2">
                      {endpoint.params.map((param, pIdx) => (
                        <div key={pIdx} className="border border-gray-800/50 bg-black/40 p-3">
                          <div className="flex items-center gap-3 mb-1">
                            <code className="text-sm text-amber-500/90 font-mono">{param.name}</code>
                            <span className="text-xs text-gray-600 font-mono">{param.type}</span>
                            {param.required && (
                              <span className="text-[10px] text-red-400 font-mono">REQUIRED</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">{param.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">RESPONSE</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code">
                    <button
                      onClick={() => copyToClipboard(endpoint.response.body, `endpoint-${idx}`)}
                      className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                    >
                      {copiedCode === `endpoint-${idx}` ? "COPIED" : "COPY"}
                    </button>
                    <div className="mb-2">
                      <span className="text-xs text-green-400 font-mono">Status: {endpoint.response.status}</span>
                    </div>
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{endpoint.response.body}
                    </pre>
                  </div>
                </div>
              </div>
            ))}

            {/* Historical Data Section */}
            <div className="mb-8 mt-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">HISTORICAL DATA</div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </div>
            </div>

            {[
              {
                method: "GET",
                path: "/v2/stations/{station_id}/history",
                description: "Retrieve historical data for a station within a time range. Supports 10+ years of archived data with multiple aggregation intervals.",
                ref: "EP-004",
                category: "Historical",
                params: [
                  { name: "station_id", type: "string", required: true, description: "Station identifier" },
                  { name: "start", type: "ISO8601", required: true, description: "Start timestamp (ISO 8601 format)" },
                  { name: "end", type: "ISO8601", required: true, description: "End timestamp (ISO 8601 format)" },
                  { name: "interval", type: "string", required: false, description: "Data interval (1h, 6h, 1d, 1w, 1m)" },
                  { name: "parameters", type: "array", required: false, description: "Filter specific parameters" }
                ],
                response: {
                  status: 200,
                  body: `{
  "station": "MELON_BUOY_A7",
  "start": "2025-01-01T00:00:00Z",
  "end": "2025-01-15T23:59:59Z",
  "interval": "1h",
  "count": 360,
  "data": [
    {
      "timestamp": "2025-01-01T00:00:00Z",
      "waves": { "hs": 1.8, "tp": 7.2, "direction": 210 },
      "currents": { "speed": 0.9, "dir": 210, "depth": 5.0 },
      "sst": 20.1,
      "salinity": 34.5,
      "quality": "GOOD"
    }
  ],
  "statistics": {
    "waves.hs": { "min": 0.8, "max": 4.2, "avg": 2.1 },
    "sst": { "min": 18.5, "max": 23.2, "avg": 21.1 }
  }
}`
                }
              },
              {
                method: "POST",
                path: "/v2/stations/bulk/history",
                description: "Batch historical data retrieval for multiple stations. Optimized for large-scale analysis and reporting.",
                ref: "EP-005",
                category: "Historical",
                params: [
                  { name: "stations", type: "array", required: true, description: "Array of station IDs" },
                  { name: "start", type: "ISO8601", required: true, description: "Start timestamp" },
                  { name: "end", type: "ISO8601", required: true, description: "End timestamp" },
                  { name: "interval", type: "string", required: false, description: "Data interval" }
                ],
                response: {
                  status: 200,
                  body: `{
  "request": {
    "stations": ["MELON_BUOY_A7", "MELON_BUOY_B3"],
    "start": "2025-01-01T00:00:00Z",
    "end": "2025-01-15T23:59:59Z"
  },
  "results": [
    {
      "station": "MELON_BUOY_A7",
      "count": 360,
      "data": [...]
    },
    {
      "station": "MELON_BUOY_B3",
      "count": 360,
      "data": [...]
    }
  ]
}`
                }
              },
              {
                method: "GET",
                path: "/v2/statistics/{parameter}",
                description: "Get statistical summaries (min, max, avg, percentiles) for any parameter across time ranges. Perfect for trend analysis.",
                ref: "EP-006",
                category: "Historical",
                params: [
                  { name: "parameter", type: "string", required: true, description: "Parameter name (waves.hs, sst, currents.speed)" },
                  { name: "station_id", type: "string", required: false, description: "Station identifier (optional for regional stats)" },
                  { name: "start", type: "ISO8601", required: true, description: "Start timestamp" },
                  { name: "end", type: "ISO8601", required: true, description: "End timestamp" },
                  { name: "percentiles", type: "array", required: false, description: "Percentiles to calculate (default: [10, 25, 50, 75, 90, 95, 99])" }
                ],
                response: {
                  status: 200,
                  body: `{
  "parameter": "waves.hs",
  "station": "MELON_BUOY_A7",
  "period": {
    "start": "2024-01-01T00:00:00Z",
    "end": "2024-12-31T23:59:59Z"
  },
  "statistics": {
    "count": 8760,
    "min": 0.3,
    "max": 5.8,
    "mean": 2.1,
    "median": 1.9,
    "std_dev": 0.8,
    "percentiles": {
      "10": 1.1,
      "25": 1.4,
      "50": 1.9,
      "75": 2.6,
      "90": 3.4,
      "95": 4.1,
      "99": 5.2
    }
  }
}`
                }
              },
            ].map((endpoint, idx) => (
              <div key={idx} className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group mb-6 md:mb-8">
                <div className="absolute top-4 right-4">
                  <div className="font-mono text-[8px] text-gray-700">{endpoint.ref}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 font-mono text-xs border ${
                      endpoint.method === "GET" ? "border-green-500/50 text-green-400" :
                      endpoint.method === "POST" ? "border-blue-500/50 text-blue-400" :
                      endpoint.method === "PUT" ? "border-amber-500/50 text-amber-400" :
                      "border-red-500/50 text-red-400"
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg text-amber-500/90 font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed font-light">{endpoint.description}</p>
                </div>

                {endpoint.params && (
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">PARAMETERS</div>
                    <div className="space-y-2">
                      {endpoint.params.map((param, pIdx) => (
                        <div key={pIdx} className="border border-gray-800/50 bg-black/40 p-3">
                          <div className="flex items-center gap-3 mb-1">
                            <code className="text-sm text-amber-500/90 font-mono">{param.name}</code>
                            <span className="text-xs text-gray-600 font-mono">{param.type}</span>
                            {param.required && (
                              <span className="text-[10px] text-red-400 font-mono">REQUIRED</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">{param.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">RESPONSE</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code">
                    <button
                      onClick={() => copyToClipboard(endpoint.response.body, `endpoint-hist-${idx}`)}
                      className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                    >
                      {copiedCode === `endpoint-hist-${idx}` ? "COPIED" : "COPY"}
                    </button>
                    <div className="mb-2">
                      <span className="text-xs text-green-400 font-mono">Status: {endpoint.response.status}</span>
                    </div>
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{endpoint.response.body}
                    </pre>
                  </div>
                </div>
              </div>
            ))}

            {/* Forecasting Section */}
            <div className="mb-8 mt-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">AI FORECASTING</div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </div>
            </div>

            {[
              {
                method: "GET",
                path: "/v2/forecast/{region}",
                description: "Get 7-day AI-powered forecast for a region. Machine learning models predict wave height, period, currents, and sea surface temperature with confidence intervals.",
                ref: "EP-007",
                category: "Forecast",
                params: [
                  { name: "region", type: "string", required: true, description: "Region identifier (PACIFIC_SOUTH, ATLANTIC_NORTH, etc.)" },
                  { name: "parameters", type: "array", required: false, description: "Parameters to include (waves, currents, sst, wind)" },
                  { name: "resolution", type: "string", required: false, description: "Forecast resolution (1h, 3h, 6h, 12h, 24h)" }
                ],
                response: {
                  status: 200,
                  body: `{
  "region": "PACIFIC_SOUTH",
  "forecast_time": "2025-01-15T14:00:00Z",
  "valid_for": "7d",
  "resolution": "6h",
  "forecasts": [
    {
      "timestamp": "2025-01-16T00:00:00Z",
      "waves": {
        "hs": 2.1,
        "tp": 8.3,
        "direction": 220,
        "confidence": 0.87
      },
      "currents": {
        "speed": 1.0,
        "dir": 215,
        "confidence": 0.82
      },
      "sst": 21.4,
      "wind": {
        "speed": 12,
        "dir": 225,
        "gust": 18
      }
    }
  ],
  "model_version": "v3.2.1",
  "accuracy_metrics": {
    "waves.hs": { "mae": 0.3, "rmse": 0.4 },
    "currents.speed": { "mae": 0.15, "rmse": 0.22 }
  }
}`
                }
              },
              {
                method: "POST",
                path: "/v2/forecast/custom",
                description: "Generate custom forecast for specific coordinates. Perfect for point-of-interest forecasting when no regional model exists.",
                ref: "EP-008",
                category: "Forecast",
                params: [
                  { name: "lat", type: "float", required: true, description: "Latitude" },
                  { name: "lon", type: "float", required: true, description: "Longitude" },
                  { name: "days", type: "integer", required: false, description: "Forecast days (1-14, default: 7)" },
                  { name: "parameters", type: "array", required: false, description: "Parameters to include" }
                ],
                response: {
                  status: 200,
                  body: `{
  "location": { "lat": 34.0522, "lon": -118.2437 },
  "forecast_time": "2025-01-15T14:00:00Z",
  "days": 7,
  "forecasts": [
    {
      "timestamp": "2025-01-16T00:00:00Z",
      "waves": { "hs": 2.1, "tp": 8.3, "direction": 220 },
      "currents": { "speed": 1.0, "dir": 215 },
      "sst": 21.4,
      "confidence": 0.85
    }
  ]
}`
                }
              },
            ].map((endpoint, idx) => (
              <div key={idx} className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group mb-6 md:mb-8">
                <div className="absolute top-4 right-4">
                  <div className="font-mono text-[8px] text-gray-700">{endpoint.ref}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 font-mono text-xs border ${
                      endpoint.method === "GET" ? "border-green-500/50 text-green-400" :
                      endpoint.method === "POST" ? "border-blue-500/50 text-blue-400" :
                      endpoint.method === "PUT" ? "border-amber-500/50 text-amber-400" :
                      "border-red-500/50 text-red-400"
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg text-amber-500/90 font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed font-light">{endpoint.description}</p>
                </div>

                {endpoint.params && (
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">PARAMETERS</div>
                    <div className="space-y-2">
                      {endpoint.params.map((param, pIdx) => (
                        <div key={pIdx} className="border border-gray-800/50 bg-black/40 p-3">
                          <div className="flex items-center gap-3 mb-1">
                            <code className="text-sm text-amber-500/90 font-mono">{param.name}</code>
                            <span className="text-xs text-gray-600 font-mono">{param.type}</span>
                            {param.required && (
                              <span className="text-[10px] text-red-400 font-mono">REQUIRED</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">{param.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">RESPONSE</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code">
                    <button
                      onClick={() => copyToClipboard(endpoint.response.body, `endpoint-fcst-${idx}`)}
                      className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                    >
                      {copiedCode === `endpoint-fcst-${idx}` ? "COPIED" : "COPY"}
                    </button>
                    <div className="mb-2">
                      <span className="text-xs text-green-400 font-mono">Status: {endpoint.response.status}</span>
                    </div>
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{endpoint.response.body}
                    </pre>
                  </div>
                </div>
              </div>
            ))}

            {/* Advanced Features Section */}
            <div className="mb-8 mt-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
                <div className="font-mono text-xs text-amber-500/60 tracking-[0.3em] uppercase">ADVANCED FEATURES</div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
              </div>
            </div>

            {[
              {
                method: "POST",
                path: "/v2/routes/optimize",
                description: "Calculate optimal maritime route based on current and forecasted conditions. Minimizes fuel consumption and transit time while avoiding hazardous conditions.",
                ref: "EP-009",
                category: "Advanced",
                params: [
                  { name: "origin", type: "object", required: true, description: "Origin coordinates {lat, lon}" },
                  { name: "destination", type: "object", required: true, description: "Destination coordinates {lat, lon}" },
                  { name: "vessel_type", type: "string", required: false, description: "Vessel type (cargo, tanker, yacht, etc.)" },
                  { name: "constraints", type: "object", required: false, description: "Constraints {maxWaveHs, maxCurrent, maxWind}" },
                  { name: "optimize_for", type: "string", required: false, description: "Optimization target (time, fuel, safety)" }
                ],
                response: {
                  status: 200,
                  body: `{
  "route": {
    "waypoints": [
      { "lat": 34.0522, "lon": -118.2437, "eta": "2025-01-16T08:00:00Z" },
      { "lat": 33.9500, "lon": -118.1000, "eta": "2025-01-16T12:30:00Z" },
      { "lat": 33.6846, "lon": -118.0000, "eta": "2025-01-16T18:00:00Z" }
    ],
    "total_distance": 245.8,
    "estimated_time": "10h 15m",
    "fuel_savings": 12.3,
    "conditions": {
      "max_wave_hs": 2.1,
      "max_current": 1.5,
      "avg_wind": 14
    }
  }
}`
                }
              },
              {
                method: "POST",
                path: "/v2/drift-model",
                description: "Calculate drift trajectory for objects or vessels based on current data and forecast. Used for search and rescue, debris tracking, and spill modeling.",
                ref: "EP-010",
                category: "Advanced",
                params: [
                  { name: "start_location", type: "object", required: true, description: "Starting coordinates {lat, lon}" },
                  { name: "start_time", type: "ISO8601", required: true, description: "Start timestamp" },
                  { name: "duration", type: "integer", required: true, description: "Duration in hours" },
                  { name: "object_type", type: "string", required: false, description: "Object type (person, vessel, debris)" },
                  { name: "windage", type: "float", required: false, description: "Windage coefficient (0.0-1.0)" }
                ],
                response: {
                  status: 200,
                  body: `{
  "trajectory": [
    {
      "timestamp": "2025-01-15T14:00:00Z",
      "location": { "lat": 34.0522, "lon": -118.2437 },
      "drift_speed": 0.8,
      "drift_direction": 215
    },
    {
      "timestamp": "2025-01-15T20:00:00Z",
      "location": { "lat": 33.9800, "lon": -118.1500 },
      "drift_speed": 1.1,
      "drift_direction": 220
    }
  ],
  "search_area": {
    "center": { "lat": 33.9500, "lon": -118.1000 },
    "radius": 15.2,
    "confidence": 0.85
  }
}`
                }
              },
              {
                method: "GET",
                path: "/v2/water-quality",
                description: "Retrieve water quality parameters including dissolved oxygen, pH, turbidity, and chlorophyll. Essential for environmental monitoring and aquaculture.",
                ref: "EP-011",
                category: "Advanced",
                params: [
                  { name: "station_id", type: "string", required: true, description: "Station identifier" },
                  { name: "parameters", type: "array", required: false, description: "Parameters (do, ph, turbidity, chlorophyll)" }
                ],
                response: {
                  status: 200,
                  body: `{
  "station": "MELON_BUOY_A7",
  "timestamp": "2025-01-15T14:32:18Z",
  "water_quality": {
    "dissolved_oxygen": { "value": 7.2, "unit": "mg/L", "status": "GOOD" },
    "ph": { "value": 8.1, "unit": "pH", "status": "NORMAL" },
    "turbidity": { "value": 2.3, "unit": "NTU", "status": "CLEAR" },
    "chlorophyll": { "value": 1.8, "unit": "μg/L", "status": "NORMAL" }
  },
  "quality_index": 0.92
}`
                }
              },
              {
                method: "POST",
                path: "/v2/alerts/threshold",
                description: "Create custom alert thresholds for specific parameters. Triggers webhooks when conditions exceed limits. Perfect for automated monitoring.",
                ref: "EP-012",
                category: "Advanced",
                params: [
                  { name: "station_id", type: "string", required: true, description: "Station identifier" },
                  { name: "parameter", type: "string", required: true, description: "Parameter name (waves.hs, sst, etc.)" },
                  { name: "threshold", type: "float", required: true, description: "Threshold value" },
                  { name: "condition", type: "string", required: false, description: "Condition (gt, lt, eq, default: gt)" },
                  { name: "webhook_url", type: "string", required: false, description: "Webhook URL for notifications" }
                ],
                response: {
                  status: 201,
                  body: `{
  "alert_id": "alt_51H...",
  "station": "MELON_BUOY_A7",
  "parameter": "waves.hs",
  "threshold": 3.0,
  "condition": "gt",
  "status": "ACTIVE",
  "created_at": "2025-01-15T14:32:18Z"
}`
                }
              },
              {
                method: "GET",
                path: "/v2/storms/history",
                description: "Retrieve historical storm data including tracks, intensity, and associated wave/current conditions. Supports hurricane, typhoon, and extratropical cyclones.",
                ref: "EP-013",
                category: "Advanced",
                params: [
                  { name: "region", type: "string", required: false, description: "Region filter" },
                  { name: "start", type: "ISO8601", required: true, description: "Start timestamp" },
                  { name: "end", type: "ISO8601", required: true, description: "End timestamp" },
                  { name: "min_intensity", type: "string", required: false, description: "Minimum intensity category" }
                ],
                response: {
                  status: 200,
                  body: `{
  "storms": [
    {
      "id": "STORM_2024_08",
      "name": "Hurricane Maria",
      "category": 4,
      "track": [
        { "timestamp": "2024-09-15T00:00:00Z", "lat": 15.2, "lon": -60.5, "wind": 130 },
        { "timestamp": "2024-09-16T12:00:00Z", "lat": 18.5, "lon": -65.2, "wind": 145 }
      ],
      "max_wave_hs": 12.5,
      "affected_stations": ["MELON_BUOY_A7", "MELON_BUOY_B3"]
    }
  ]
}`
                }
              },
              {
                method: "POST",
                path: "/v2/export/bulk",
                description: "Export large datasets in various formats (CSV, JSON, NetCDF, HDF5). Optimized for research and analysis workflows. Supports async processing for large exports.",
                ref: "EP-014",
                category: "Advanced",
                params: [
                  { name: "stations", type: "array", required: true, description: "Station IDs" },
                  { name: "start", type: "ISO8601", required: true, description: "Start timestamp" },
                  { name: "end", type: "ISO8601", required: true, description: "End timestamp" },
                  { name: "format", type: "string", required: false, description: "Export format (csv, json, netcdf, hdf5)" },
                  { name: "parameters", type: "array", required: false, description: "Parameters to include" }
                ],
                response: {
                  status: 202,
                  body: `{
  "export_id": "exp_51H...",
  "status": "PROCESSING",
  "estimated_completion": "2025-01-15T15:00:00Z",
  "download_url": null,
  "webhook_url": "https://api.melonrobotics.com/v2/exports/exp_51H..."
}`
                }
              },
            ].map((endpoint, idx) => (
              <div key={idx} className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group mb-6 md:mb-8">
                <div className="absolute top-4 right-4">
                  <div className="font-mono text-[8px] text-gray-700">{endpoint.ref}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 font-mono text-xs border ${
                      endpoint.method === "GET" ? "border-green-500/50 text-green-400" :
                      endpoint.method === "POST" ? "border-blue-500/50 text-blue-400" :
                      endpoint.method === "PUT" ? "border-amber-500/50 text-amber-400" :
                      "border-red-500/50 text-red-400"
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg text-amber-500/90 font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed font-light">{endpoint.description}</p>
                </div>

                {endpoint.params && (
                  <div className="mb-6">
                    <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">PARAMETERS</div>
                    <div className="space-y-2">
                      {endpoint.params.map((param, pIdx) => (
                        <div key={pIdx} className="border border-gray-800/50 bg-black/40 p-3">
                          <div className="flex items-center gap-3 mb-1">
                            <code className="text-sm text-amber-500/90 font-mono">{param.name}</code>
                            <span className="text-xs text-gray-600 font-mono">{param.type}</span>
                            {param.required && (
                              <span className="text-[10px] text-red-400 font-mono">REQUIRED</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500">{param.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-3">RESPONSE</div>
                  <div className="bg-black/60 border border-gray-800/50 p-4 relative group/code">
                    <button
                      onClick={() => copyToClipboard(endpoint.response.body, `endpoint-adv-${idx}`)}
                      className="absolute top-2 right-2 text-amber-500/60 hover:text-amber-500 text-xs font-mono"
                    >
                      {copiedCode === `endpoint-adv-${idx}` ? "COPIED" : "COPY"}
                    </button>
                    <div className="mb-2">
                      <span className="text-xs text-green-400 font-mono">Status: {endpoint.response.status}</span>
                    </div>
                    <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{endpoint.response.body}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* SDKs Tab */}
        {activeTab === "sdks" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: SDK-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">SDKS & LIBRARIES</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <p className="text-base text-gray-400 leading-relaxed font-light mb-8">
                Official SDKs and community libraries for popular programming languages. All SDKs are open source and maintained by Melon Robotics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { lang: "Python", package: "pip install melon-ocean-data", version: "v2.1.3", official: true },
                  { lang: "JavaScript", package: "npm install @melon/ocean-data", version: "v2.0.8", official: true },
                  { lang: "Go", package: "go get github.com/melon/ocean-data-go", version: "v2.1.0", official: true },
                  { lang: "Rust", package: "cargo add melon-ocean-data", version: "v2.0.5", official: true },
                ].map((sdk, idx) => (
                  <div key={idx} className="border border-gray-800/50 bg-black/40 p-4 md:p-6 relative group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-mono text-lg text-white">{sdk.lang}</div>
                      {sdk.official && (
                        <div className="text-[10px] text-amber-500 font-mono border border-amber-500/30 px-2 py-1">
                          OFFICIAL
                        </div>
                      )}
                    </div>
                    <div className="bg-black/60 border border-gray-800/50 p-3 mb-3">
                      <code className="text-xs text-amber-500/90 font-mono">{sdk.package}</code>
                    </div>
                    <div className="text-xs text-gray-600 font-mono">Version: {sdk.version}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Webhooks Tab */}
        {activeTab === "webhooks" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: WH-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">WEBHOOKS</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-6 tracking-tight">Real-Time Event Notifications</h3>
              <p className="text-base text-gray-400 leading-relaxed font-light mb-8">
                Receive real-time notifications when data thresholds are exceeded, forecasts are updated, or stations go offline. Webhooks use HMAC signatures for security verification.
              </p>
              
              <div className="bg-black/60 border border-gray-800/50 p-4 mb-6">
                <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
{`POST https://your-endpoint.com/webhook
Content-Type: application/json
X-Melon-Signature: sha256=...

{
  "event": "threshold_exceeded",
  "station": "MELON_BUOY_A7",
  "timestamp": "2025-01-15T14:32:18Z",
  "data": {
    "parameter": "waves.hs",
    "value": 3.5,
    "threshold": 3.0
  }
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Codes Tab */}
        {activeTab === "errors" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="border border-gray-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-6 md:p-8 relative group">
              <div className="absolute top-4 right-4">
                <div className="font-mono text-[8px] text-gray-700">REF: ERR-001</div>
              </div>
              <div className="mb-6">
                <div className="font-mono text-[9px] text-amber-500/70 uppercase tracking-wider mb-2">ERROR CODES</div>
                <div className="h-px w-12 bg-amber-500/30 mb-4" />
              </div>
              
              <div className="space-y-4">
                {[
                  { code: 400, type: "bad_request", message: "Invalid request parameters", ref: "ERR-400" },
                  { code: 401, type: "unauthorized", message: "Invalid or missing API key", ref: "ERR-401" },
                  { code: 403, type: "forbidden", message: "Insufficient permissions", ref: "ERR-403" },
                  { code: 404, type: "not_found", message: "Resource not found", ref: "ERR-404" },
                  { code: 429, type: "rate_limit", message: "Rate limit exceeded", ref: "ERR-429" },
                  { code: 500, type: "server_error", message: "Internal server error", ref: "ERR-500" },
                ].map((error, idx) => (
                  <div key={idx} className="border border-gray-800/50 bg-black/40 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg text-red-400 font-mono">{error.code}</span>
                        <code className="text-sm text-amber-500/90 font-mono">{error.type}</code>
                      </div>
                      <div className="font-mono text-[8px] text-gray-700">{error.ref}</div>
                    </div>
                    <div className="text-sm text-gray-400">{error.message}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-gray-800/50"
        >
          <Link href="/contact">
            <Button className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 px-12 py-8 text-sm font-mono tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-sm">
              Get API Access
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


